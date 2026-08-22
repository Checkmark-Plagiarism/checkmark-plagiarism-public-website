"""
Article Fetcher and Text Extractor for RSS Content Scout.

Retrieves actual article content from NORMALIZED_URL (or ORIGINAL_URL) using resilient HTTP
requests, strips boilerplate/navigation/scripts, and extracts the primary reading material.
Falls back to RSS discovery metadata if the live article is inaccessible or behind paywalls.
"""
import re
import html
import logging
from typing import Tuple, Optional
import requests

logger = logging.getLogger("RSS_Content_Scout.Fetcher")

DEFAULT_USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 (Checkmark-Content-Scout/1.0)"
)


def _extract_clean_text_from_html(html_content: str) -> str:
    """
    Strips non-content tags (scripts, styles, nav, headers, footers) and extracts clean paragraph text.
    """
    if not html_content:
        return ""

    # Remove script, style, noscript, nav, header, footer, aside tags and their content
    cleaned = re.sub(r"<(script|style|noscript|nav|header|footer|aside|form)[^>]*>.*?</\1>", " ", html_content, flags=re.DOTALL | re.IGNORECASE)

    # Try to find <article> or <main> tag content first if present
    article_match = re.search(r"<(article|main)[^>]*>(.*?)</\1>", cleaned, flags=re.DOTALL | re.IGNORECASE)
    if article_match:
        target_html = article_match.group(2)
    else:
        target_html = cleaned

    # Extract all paragraphs and headings
    block_matches = re.findall(r"<(p|h1|h2|h3|h4|h5|h6|li|blockquote)[^>]*>(.*?)</\1>", target_html, flags=re.DOTALL | re.IGNORECASE)
    
    extracted_blocks = []
    if block_matches:
        for _, block_html in block_matches:
            # Strip remaining inner tags
            text_piece = re.sub(r"<[^>]+>", " ", block_html)
            text_piece = html.unescape(text_piece)
            text_piece = re.sub(r"\s+", " ", text_piece).strip()
            if len(text_piece) > 15:  # Filter out tiny snippets / buttons
                extracted_blocks.append(text_piece)

    if extracted_blocks:
        return "\n\n".join(extracted_blocks)

    # Fallback if no paragraph tags matched: strip all tags
    raw_text = re.sub(r"<[^>]+>", " ", cleaned)
    raw_text = html.unescape(raw_text)
    raw_text = re.sub(r"\s+", " ", raw_text).strip()
    return raw_text


def fetch_article_content(
    normalized_url: str,
    original_url: str = "",
    rss_summary: str = "",
    rss_description: str = "",
    timeout: int = 15,
) -> Tuple[str, str, Optional[str]]:
    """
    Fetches the full text content of an article.

    Args:
        normalized_url: The normalized article URL.
        original_url: The raw original article URL.
        rss_summary: The RSS summary text.
        rss_description: The RSS description text.
        timeout: HTTP request timeout in seconds.

    Returns:
        Tuple of (extracted_text, fetch_status, fetch_error_or_none)
        fetch_status can be: 'SUCCESS', 'FALLBACK_RSS', 'ERROR'
    """
    headers = {
        "User-Agent": DEFAULT_USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
    }

    urls_to_try = [u for u in [normalized_url.strip(), original_url.strip()] if u]
    last_error: Optional[str] = None

    for target_url in urls_to_try:
        try:
            logger.info("Fetching article URL: %s", target_url)
            response = requests.get(target_url, headers=headers, timeout=timeout, allow_redirects=True)
            if response.status_code == 200:
                html_body = response.text
                extracted_text = _extract_clean_text_from_html(html_body)
                
                # Check if extracted text is substantive
                if len(extracted_text) >= 120:
                    logger.info("Successfully extracted %d chars from %s", len(extracted_text), target_url)
                    return extracted_text, "SUCCESS", None
                else:
                    logger.warning("Extracted text too short (%d chars) from %s", len(extracted_text), target_url)
                    last_error = f"Extracted text too short ({len(extracted_text)} chars) - possible paywall or dynamic JS render."
            else:
                last_error = f"HTTP {response.status_code} on {target_url}"
        except Exception as e:
            last_error = f"Connection error on {target_url}: {str(e)}"
            logger.warning("Failed fetching %s: %s", target_url, str(e))

    # Fallback to RSS metadata if available
    fallback_text = (rss_summary or rss_description or "").strip()
    if fallback_text and len(fallback_text) > 20:
        logger.info("Using RSS fallback metadata (%d chars)", len(fallback_text))
        return (
            f"[NOTE: Full article could not be accessed online ({last_error}). Evaluated based on available RSS discovery metadata.]\n\n{fallback_text}",
            "FALLBACK_RSS",
            last_error,
        )

    return "", "ERROR", last_error or "Unable to retrieve article text from URL or RSS metadata."
