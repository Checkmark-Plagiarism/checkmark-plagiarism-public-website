"""
Duplicate Detector & Safe Metadata Update Engine for RSS Content Scout.

Implements the strict 5-tier duplicate detection hierarchy:
1. ARTICLE_ID
2. RSS_GUID
3. NORMALIZED_URL
4. ORIGINAL_URL
5. Publisher + Normalized Title + Publication Date

Enforces strict update rules:
- May update RSS metadata, Updated Date, feed metadata, missing metadata fields.
- NEVER overwrites completed Antigravity analysis fields (scores, summaries, reasoning, editorial decisions).
- NEVER resets a COMPLETE or PROCESSING article back to PENDING.
"""
from typing import Optional, Dict, Any, List, Tuple
try:
    from .article_id import _clean_title
except ImportError:
    from article_id import _clean_title

# Columns that the Python script is permitted to update on existing records
UPDATABLE_METADATA_COLUMNS = {
    "FEED_URL",
    "FEED_NAME",
    "PUBLISHER",
    "RSS_GUID",
    "ARTICLE_TITLE",
    "ORIGINAL_URL",
    "NORMALIZED_URL",
    "AUTHOR",
    "PUBLICATION_DATE",
    "UPDATED_DATE",
    "RSS_DESCRIPTION",
    "RSS_SUMMARY",
    "RSS_CATEGORIES",
}

# Protected Antigravity analysis & downstream pipeline fields that MUST NEVER be overwritten
PROTECTED_ANALYSIS_COLUMNS = {
    "ARTICLE_SUMMARY",
    "UNDERLYING_SIGNAL",
    "CHECKMARK_RELEVANCE_SCORE",
    "PRODUCT_ADJACENCY_SCORE",
    "TEACHER_RELEVANCE_SCORE",
    "DISTINCTIVE_PERSPECTIVE_SCORE",
    "EVIDENCE_QUALITY_SCORE",
    "SEARCH_OPPORTUNITY_SCORE",
    "TIMELINESS_SCORE",
    "PRODUCT_CONNECTION_SCORE",
    "PRIMARY_CHECKMARK_THEME",
    "PROPOSED_ARTICLE_ANGLE",
    "PROPOSED_WORKING_TITLE",
    "ANALYSIS_REASONING",
    "EDITORIAL_STATUS",
    "CONTENT_PIPELINE_ID",
    "GENERATED_ARTICLE_TITLE",
    "GENERATED_ARTICLE_URL",
    "GENERATED_DOC_URL",
    "PUBLISHED_URL",
}


def _make_pub_title_date_key(publisher: str, title: str, pub_date: str) -> str:
    """Creates a normalized composite key for publisher + title + pub_date matching."""
    c_pub = (publisher or "").strip().lower()
    c_title = _clean_title(title or "")
    c_date = (pub_date or "").strip()
    if not c_title:
        return ""
    return f"{c_pub}|{c_title}|{c_date}"


class DuplicateDetector:
    """Maintains indexed existing records and resolves duplicates via 5-tier hierarchy."""

    def __init__(self, existing_rows: Optional[List[Dict[str, Any]]] = None):
        """
        Args:
            existing_rows: List of dictionaries representing existing rows in RSS_ARTICLES,
                           where each dict contains column key/value pairs and '_row_idx'.
        """
        self.by_article_id: Dict[str, Dict[str, Any]] = {}
        self.by_guid: Dict[str, Dict[str, Any]] = {}
        self.by_normalized_url: Dict[str, Dict[str, Any]] = {}
        self.by_original_url: Dict[str, Dict[str, Any]] = {}
        self.by_pub_title_date: Dict[str, Dict[str, Any]] = {}

        if existing_rows:
            for row in existing_rows:
                self.index_row(row)

    def index_row(self, row: Dict[str, Any]) -> None:
        """Indexes a single row across all hierarchy keys."""
        article_id = (row.get("ARTICLE_ID") or "").strip()
        if article_id:
            self.by_article_id[article_id] = row

        guid = (row.get("RSS_GUID") or "").strip()
        if guid:
            self.by_guid[guid] = row

        norm_url = (row.get("NORMALIZED_URL") or "").strip()
        if norm_url:
            self.by_normalized_url[norm_url] = row

        orig_url = (row.get("ORIGINAL_URL") or "").strip()
        if orig_url:
            self.by_original_url[orig_url] = row

        pub_title_key = _make_pub_title_date_key(
            row.get("PUBLISHER", ""),
            row.get("ARTICLE_TITLE", ""),
            row.get("PUBLICATION_DATE", "")
        )
        if pub_title_key:
            self.by_pub_title_date[pub_title_key] = row

    def find_existing(self, candidate: Dict[str, Any]) -> Tuple[Optional[Dict[str, Any]], Optional[str]]:
        """
        Searches for an existing article matching the candidate using the strict 5-tier hierarchy.

        Returns:
            Tuple of (matched_existing_row_dict or None, match_tier_description or None).
        """
        # Tier 1: ARTICLE_ID
        candidate_id = (candidate.get("ARTICLE_ID") or "").strip()
        if candidate_id and candidate_id in self.by_article_id:
            return self.by_article_id[candidate_id], "ARTICLE_ID"

        # Tier 2: RSS GUID
        candidate_guid = (candidate.get("RSS_GUID") or "").strip()
        if candidate_guid and candidate_guid in self.by_guid:
            return self.by_guid[candidate_guid], "RSS_GUID"

        # Tier 3: Normalized URL
        candidate_norm_url = (candidate.get("NORMALIZED_URL") or "").strip()
        if candidate_norm_url and candidate_norm_url in self.by_normalized_url:
            return self.by_normalized_url[candidate_norm_url], "NORMALIZED_URL"

        # Tier 4: Original URL
        candidate_orig_url = (candidate.get("ORIGINAL_URL") or "").strip()
        if candidate_orig_url and candidate_orig_url in self.by_original_url:
            return self.by_original_url[candidate_orig_url], "ORIGINAL_URL"

        # Tier 5: Publisher + Normalized Title + Publication Date
        candidate_key = _make_pub_title_date_key(
            candidate.get("PUBLISHER", ""),
            candidate.get("ARTICLE_TITLE", ""),
            candidate.get("PUBLICATION_DATE", "")
        )
        if candidate_key and candidate_key in self.by_pub_title_date:
            return self.by_pub_title_date[candidate_key], "PUBLISHER_TITLE_DATE"

        return None, None

    def compute_metadata_updates(self, existing_row: Dict[str, Any], candidate: Dict[str, Any]) -> Dict[str, Any]:
        """
        Computes safe updates for an existing record without ever overwriting protected Antigravity fields.

        Returns:
            Dict of {column_name: new_value} for any fields that require updating.
        """
        updates: Dict[str, Any] = {}

        # 1. Update missing or newer identity/RSS metadata
        for col in UPDATABLE_METADATA_COLUMNS:
            existing_val = str(existing_row.get(col, "") or "").strip()
            candidate_val = str(candidate.get(col, "") or "").strip()

            if not candidate_val:
                continue

            # If existing value is completely blank, fill it with candidate value
            if not existing_val:
                updates[col] = candidate_val
                continue

            # For UPDATED_DATE: update if candidate has a newer / different non-empty value
            if col == "UPDATED_DATE" and candidate_val != existing_val:
                updates[col] = candidate_val

            # For descriptions/summaries: update if candidate provides richer text than existing
            if col in ("RSS_DESCRIPTION", "RSS_SUMMARY") and len(candidate_val) > len(existing_val):
                updates[col] = candidate_val

            # For categories: update if candidate has tags and existing is blank
            if col == "RSS_CATEGORIES" and candidate_val and not existing_val:
                updates[col] = candidate_val

        # 2. ANALYSIS_STATUS safety rule:
        # Never reset COMPLETE, PROCESSING, or ERROR back to PENDING.
        existing_status = str(existing_row.get("ANALYSIS_STATUS", "") or "").strip().upper()
        if not existing_status:
            updates["ANALYSIS_STATUS"] = "PENDING"

        return updates
