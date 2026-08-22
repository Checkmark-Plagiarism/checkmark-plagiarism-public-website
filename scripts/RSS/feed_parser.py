"""
Feed Fetching and Parsing Engine for RSS Content Scout.

Features:
- Robust HTTP retrieval with custom User-Agent and timeout safety
- Feedparser integration supporting RSS 0.9x, RSS 2.0, Atom, and RDF feeds
- Resilient metadata extraction: Title, URL, GUID, Author, Dates, Summaries, Tags
- Date normalization to ISO 8601 strings
- HTML tag stripping for readable descriptions/summaries
- Graceful error handling (broken feeds do not crash workflow)
"""
import re
import html
import time
from datetime import datetime, timezone
from typing import Optional, Dict, Any, List, Tuple
import requests
import feedparser
from dateutil import parser as date_parser

try:
    from .url_normalizer import normalize_url
    from .article_id import generate_article_id
except ImportError:
    from url_normalizer import normalize_url
    from article_id import generate_article_id

DEFAULT_USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 (Checkmark-Content-Scout/1.0)"
)


def _clean_html_text(raw_html: Optional[str]) -> str:
    """Strips HTML tags and unescapes HTML entities into clean text."""
    if not raw_html or not isinstance(raw_html, str):
        return ""
    # Strip HTML tags
    text = re.sub(r"<[^>]+>", " ", raw_html)
    # Unescape HTML entities (&amp;, &nbsp;, etc.)
    text = html.unescape(text)
    # Collapse multiple whitespaces
    text = re.sub(r"\s+", " ", text).strip()
    return text


def _parse_date_to_iso(date_str: Optional[str], struct_time: Optional[time.struct_time] = None) -> str:
    """Converts a date string or time.struct_time to ISO 8601 UTC string."""
    if struct_time:
        try:
            dt = datetime.fromtimestamp(time.mktime(struct_time), tz=timezone.utc)
            return dt.strftime("%Y-%m-%dT%H:%M:%SZ")
        except Exception:
            pass

    if not date_str or not isinstance(date_str, str):
        return ""

    raw = date_str.strip()
    if not raw:
        return ""

    try:
        dt = date_parser.parse(raw)
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        return dt.astimezone(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    except Exception:
        # If parsing fails, retain raw string
        return raw


def _extract_author(entry: Any) -> str:
    """Extracts author name from various feed formats."""
    # Direct author field
    if getattr(entry, "author", None):
        return _clean_html_text(entry.author)
    # Authors list
    authors = getattr(entry, "authors", None)
    if authors and isinstance(authors, list) and len(authors) > 0:
        first = authors[0]
        if isinstance(first, dict) and first.get("name"):
            return _clean_html_text(first["name"])
    # Dublin Core creator
    if getattr(entry, "dc_creator", None):
        return _clean_html_text(entry.dc_creator)
    return ""


def _extract_categories(entry: Any) -> str:
    """Extracts categories/tags as a comma-separated string."""
    tags = getattr(entry, "tags", None)
    if not tags or not isinstance(tags, list):
        return ""
    terms = []
    for tag in tags:
        if isinstance(tag, dict) and tag.get("term"):
            terms.append(tag["term"].strip())
        elif isinstance(tag, str):
            terms.append(tag.strip())
    # De-duplicate while preserving order
    seen = set()
    deduped = [t for t in terms if t and not (t.lower() in seen or seen.add(t.lower()))]
    return ", ".join(deduped)


def fetch_and_parse_feed(
    feed_url: str,
    session: Optional[requests.Session] = None,
    timeout: int = 15,
    fallback_feed_name: str = "",
    fallback_publisher: str = "",
) -> Tuple[Dict[str, Any], List[Dict[str, Any]], Optional[str]]:
    """
    Fetches and parses an RSS or Atom feed.

    Args:
        feed_url: The URL of the RSS/Atom feed.
        session: Optional requests.Session instance.
        timeout: Network timeout in seconds.
        fallback_feed_name: Optional fallback feed name from sheet.
        fallback_publisher: Optional fallback publisher from sheet.

    Returns:
        Tuple of (feed_metadata_dict, list_of_entry_dicts, error_string_or_none)
    """
    clean_feed_url = feed_url.strip()
    if not clean_feed_url:
        return {}, [], "Empty feed URL"

    req_session = session or requests.Session()
    headers = {"User-Agent": DEFAULT_USER_AGENT, "Accept": "application/rss+xml, application/atom+xml, application/xml, text/xml, */*"}

    try:
        response = req_session.get(clean_feed_url, headers=headers, timeout=timeout)
        response.raise_for_status()
        content = response.content
    except requests.exceptions.RequestException as e:
        error_msg = f"HTTP Error fetching {clean_feed_url}: {str(e)}"
        return {}, [], error_msg
    except Exception as e:
        error_msg = f"Error fetching {clean_feed_url}: {str(e)}"
        return {}, [], error_msg

    try:
        parsed = feedparser.parse(content)
    except Exception as e:
        return {}, [], f"XML Parse Error for {clean_feed_url}: {str(e)}"

    if parsed.bozo and not parsed.entries and parsed.bozo_exception:
        return {}, [], f"Malformed feed {clean_feed_url}: {str(parsed.bozo_exception)}"

    feed_obj = getattr(parsed, "feed", {})
    feed_title = _clean_html_text(feed_obj.get("title", "")) or fallback_feed_name
    feed_publisher = _clean_html_text(feed_obj.get("publisher", "")) or fallback_publisher or feed_title

    feed_metadata = {
        "FEED_URL": clean_feed_url,
        "FEED_NAME": feed_title,
        "PUBLISHER": feed_publisher,
        "FEED_LINK": feed_obj.get("link", ""),
        "FEED_DESCRIPTION": _clean_html_text(feed_obj.get("description", "")),
    }

    now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    entries_data: List[Dict[str, Any]] = []

    for entry in parsed.entries:
        raw_title = _clean_html_text(getattr(entry, "title", ""))
        orig_url = getattr(entry, "link", "").strip()
        norm_url = normalize_url(orig_url)
        guid = getattr(entry, "id", "") or getattr(entry, "guid", "") or orig_url

        # Check if enough information exists to form a stable identity
        if not raw_title and not orig_url and not guid:
            continue

        pub_date = _parse_date_to_iso(
            getattr(entry, "published", "") or getattr(entry, "pubDate", ""),
            getattr(entry, "published_parsed", None)
        )
        updated_date = _parse_date_to_iso(
            getattr(entry, "updated", ""),
            getattr(entry, "updated_parsed", None)
        )

        author = _extract_author(entry)
        categories = _extract_categories(entry)

        # Extract description and summary
        raw_desc = getattr(entry, "description", "") or getattr(entry, "subtitle", "")
        clean_desc = _clean_html_text(raw_desc)

        clean_summary = ""
        if getattr(entry, "summary", None):
            clean_summary = _clean_html_text(entry.summary)
        elif getattr(entry, "content", None) and isinstance(entry.content, list) and len(entry.content) > 0:
            first_content = entry.content[0]
            if isinstance(first_content, dict) and first_content.get("value"):
                clean_summary = _clean_html_text(first_content["value"])
        if not clean_summary:
            clean_summary = clean_desc

        article_id = generate_article_id(
            guid=guid,
            normalized_url=norm_url,
            publisher=feed_publisher,
            article_title=raw_title,
            publication_date=pub_date,
        )

        entry_record = {
            "ARTICLE_ID": article_id,
            "FEED_URL": clean_feed_url,
            "FEED_NAME": feed_title,
            "PUBLISHER": feed_publisher,
            "RSS_GUID": guid,
            "ARTICLE_TITLE": raw_title,
            "ORIGINAL_URL": orig_url,
            "NORMALIZED_URL": norm_url,
            "AUTHOR": author,
            "PUBLICATION_DATE": pub_date,
            "UPDATED_DATE": updated_date,
            "RSS_DESCRIPTION": clean_desc,
            "RSS_SUMMARY": clean_summary,
            "RSS_CATEGORIES": categories,
            "DATE_DISCOVERED": now_iso,
        }
        entries_data.append(entry_record)

    return feed_metadata, entries_data, None
