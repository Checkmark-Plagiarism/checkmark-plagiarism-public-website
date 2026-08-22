"""
URL Normalization Utility for RSS Content Scout.

Normalizes article URLs before duplicate detection by:
- Removing utm_* parameters
- Removing advertising, affiliate, and analytics tracking query parameters
- Removing URL fragments (#...)
- Consistently normalizing trailing slashes and multi-slashes
- Lowercasing hostnames and schemes
- Preserving substantive query parameters that identify content (e.g., id, p, v, article_id)
"""
import re
import urllib.parse
from typing import Optional

# Set of lowercased tracking parameter names to strip
TRACKING_PARAMS = {
    # Facebook / Meta
    "fbclid", "fbadid", "fb_action_ids", "fb_action_types", "fb_source", "fb_ref",
    # Google / AdWords / Analytics
    "gclid", "gclsrc", "dclid", "wbraid", "gbraid", "_ga", "_gl", "_gac",
    # Microsoft / Bing
    "msclkid",
    # Twitter / X
    "twclid",
    # Instagram
    "igshid",
    # Mailchimp
    "mc_cid", "mc_eid",
    # HubSpot / Marketo
    "_hsenc", "_hsmi", "hsctatracking", "mkt_tok",
    # Yandex / Yahoo
    "yclid", "ysclid",
    # General / Generic Referrers & Trackers
    "ref", "ref_src", "ref_url", "source", "feature", "ved", "ei", "usqp",
    "cmpid", "ncid", "sr_share", "xtor", "curator", "rss", "feed",
}

# Substantive parameter names that should ALWAYS be preserved if present
CONTENT_PARAMS = {
    "id", "p", "v", "article_id", "articleid", "story_id", "storyid",
    "post_id", "postid", "doc_id", "item_id", "itemid", "page", "slug",
    "topic", "category", "tag", "q", "query"
}


def normalize_url(url: Optional[str]) -> str:
    """
    Normalizes a given article URL.

    Args:
        url: Original URL string or None.

    Returns:
        Clean, normalized URL string.
    """
    if not url or not isinstance(url, str):
        return ""

    raw_url = url.strip()
    if not raw_url:
        return ""

    try:
        parsed = urllib.parse.urlsplit(raw_url)
    except Exception:
        return raw_url.strip()

    scheme = parsed.scheme.lower()
    netloc = parsed.netloc.lower()

    # Remove standard default ports (:80, :443)
    if scheme == "http" and netloc.endswith(":80"):
        netloc = netloc[:-3]
    elif scheme == "https" and netloc.endswith(":443"):
        netloc = netloc[:-4]

    # Remove www prefix consistency if needed, but preserve domain as parsed
    path = parsed.path

    # Collapse multiple consecutive slashes in path
    path = re.sub(r"/+", "/", path) if path else "/"

    # Normalize trailing slash: remove trailing slash for paths longer than 1 character
    if len(path) > 1 and path.endswith("/"):
        path = path[:-1]

    # Parse and filter query parameters
    query = parsed.query
    if query:
        query_pairs = urllib.parse.parse_qsl(query, keep_blank_values=True)
        filtered_pairs = []
        for k, v in query_pairs:
            k_lower = k.lower()
            # Drop utm_* parameters
            if k_lower.startswith("utm_"):
                continue
            # Drop tracking parameters unless explicitly a substantive content param
            if k_lower in TRACKING_PARAMS and k_lower not in CONTENT_PARAMS:
                continue
            filtered_pairs.append((k, v))

        # Sort query pairs deterministically
        filtered_pairs.sort(key=lambda x: (x[0], x[1]))
        query = urllib.parse.urlencode(filtered_pairs)
    else:
        query = ""

    # Fragments are stripped (#...)
    fragment = ""

    normalized = urllib.parse.urlunsplit((scheme, netloc, path, query, fragment))
    return normalized
