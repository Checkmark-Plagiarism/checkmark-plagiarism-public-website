"""
Stable Article ID Generator for RSS Content Scout.

Generates deterministic, unique, collision-resistant identifiers for RSS articles
based on a strict hierarchy:
1. RSS GUID (when reliable and non-empty)
2. Normalized Article URL
3. Deterministic hash of Publisher + Normalized Title + Publication Date
"""
import hashlib
import re
from typing import Optional


def _clean_title(title: str) -> str:
    """Normalizes whitespace and lowercases title for deterministic comparison."""
    if not title:
        return ""
    # Collapse multiple whitespace characters
    cleaned = re.sub(r"\s+", " ", title.strip().lower())
    return cleaned


def generate_article_id(
    guid: Optional[str] = None,
    normalized_url: Optional[str] = None,
    publisher: Optional[str] = None,
    article_title: Optional[str] = None,
    publication_date: Optional[str] = None,
) -> str:
    """
    Generates a stable ARTICLE_ID using the required identification hierarchy.

    Args:
        guid: The RSS or Atom entry GUID / ID.
        normalized_url: The normalized article URL.
        publisher: Publisher name or feed name.
        article_title: Title of the article.
        publication_date: Published date string or ISO timestamp.

    Returns:
        Deterministic ARTICLE_ID string (e.g. 'art_g_3f8b91a24d0c', 'art_u_8c12a9e3...', 'art_m_7a1b...').
    """
    cleaned_guid = (guid or "").strip()
    cleaned_url = (normalized_url or "").strip()
    cleaned_pub = (publisher or "").strip().lower()
    cleaned_title = _clean_title(article_title or "")
    cleaned_date = (publication_date or "").strip()

    # Hierarchy 1: RSS GUID when reliable and present
    if cleaned_guid:
        h = hashlib.sha256(cleaned_guid.encode("utf-8")).hexdigest()[:16]
        return f"art_g_{h}"

    # Hierarchy 2: Normalized Article URL
    if cleaned_url:
        h = hashlib.sha256(cleaned_url.encode("utf-8")).hexdigest()[:16]
        return f"art_u_{h}"

    # Hierarchy 3: Publisher + Normalized Title + Publication Date
    meta_payload = f"{cleaned_pub}|{cleaned_title}|{cleaned_date}"
    if cleaned_title or cleaned_pub:
        h = hashlib.sha256(meta_payload.encode("utf-8")).hexdigest()[:16]
        return f"art_m_{h}"

    # Fallback for empty entries (should be caught by validation)
    fallback_h = hashlib.sha256(b"empty_article_entry").hexdigest()[:16]
    return f"art_empty_{fallback_h}"
