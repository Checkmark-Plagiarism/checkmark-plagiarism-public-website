"""
Google Sheets Manager for RSS Content Scout.

Handles Google Sheets authentication, worksheet schema validation,
feed retrieval, and high-performance batch updates for RSS_ARTICLES.
"""
import os
from typing import Optional, Dict, Any, List, Tuple
import gspread

# Comprehensive schema including Identity, Analysis, Development, and Future Workflow fields
SCHEMA_COLUMNS = [
    # Identity and RSS Fields (1-15)
    "ARTICLE_ID",
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
    "DATE_DISCOVERED",
    
    # Processing Fields (16-19)
    "ANALYSIS_STATUS",
    "ANALYSIS_DATE",
    "ARTICLE_FETCH_STATUS",
    "ARTICLE_FETCH_ERROR",
    
    # Antigravity Analysis Fields (20-34)
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
    
    # Development Tracking Fields (Workflow 3)
    "DEVELOPMENT_STATUS",
    "DEVELOPMENT_DATE",
    "SELECTED_ARTICLE_TITLE",
    "SELECTED_ARTICLE_QUESTION",
    "SELECTED_ARTICLE_THESIS",
    "RESEARCH_STATUS",
    "ARTICLE_MD_PATH",
    "CONTENT_PIPELINE_ID",
    "DEVELOPMENT_REASONING",
    "DEVELOPMENT_ERROR",
    
    # Future Workflow Fields
    "GENERATED_ARTICLE_TITLE",
    "GENERATED_ARTICLE_URL",
    "GENERATED_DOC_URL",
    "PUBLISHED_URL",
]

DEFAULT_SHEET_NAME = "RSS_CONTENT_SCOUT"
DEFAULT_CREDENTIALS_PATH = os.path.join(
    os.path.dirname(os.path.dirname(__file__)), "credentials.json"
)


class SheetManager:
    """Manages reading and writing to the RSS and RSS_ARTICLES worksheets."""

    def __init__(
        self,
        sheet_name: str = DEFAULT_SHEET_NAME,
        credentials_path: str = DEFAULT_CREDENTIALS_PATH,
    ):
        self.sheet_name = sheet_name
        self.credentials_path = credentials_path
        self.client: Optional[gspread.Client] = None
        self.spreadsheet: Optional[gspread.Spreadsheet] = None
        self.rss_worksheet: Optional[gspread.Worksheet] = None
        self.articles_worksheet: Optional[gspread.Worksheet] = None

    def connect(self) -> None:
        """Initializes service account client and connects to spreadsheet."""
        if not os.path.exists(self.credentials_path):
            raise FileNotFoundError(
                f"Credentials file not found at '{self.credentials_path}'"
            )

        self.client = gspread.service_account(filename=self.credentials_path)
        try:
            self.spreadsheet = self.client.open(self.sheet_name)
        except gspread.SpreadsheetNotFound:
            # Check for fallback or clear message
            raise gspread.SpreadsheetNotFound(
                f"Could not find spreadsheet '{self.sheet_name}'. "
                "Please make sure the Google Sheet exists and is shared with the service account."
            )

    def init_worksheets(self) -> None:
        """Ensures 'RSS' and 'RSS_ARTICLES' worksheets exist with valid headers."""
        if not self.spreadsheet:
            self.connect()

        existing_sheets = {ws.title: ws for ws in self.spreadsheet.worksheets()}

        # 1. RSS Feed Source Worksheet
        if "RSS" in existing_sheets:
            self.rss_worksheet = existing_sheets["RSS"]
        else:
            self.rss_worksheet = self.spreadsheet.add_worksheet(
                title="RSS", rows=100, cols=5
            )
            self.rss_worksheet.append_row(["FEED_URL", "FEED_NAME", "PUBLISHER", "STATUS"])

        # 2. RSS_ARTICLES Destination Worksheet
        if "RSS_ARTICLES" in existing_sheets:
            self.articles_worksheet = existing_sheets["RSS_ARTICLES"]
            rows = self.articles_worksheet.get_all_values()
            if not rows or len(rows) == 0:
                self.articles_worksheet.append_row(SCHEMA_COLUMNS)
            else:
                existing_headers = [h.strip() for h in rows[0]]
                missing_headers = [col for col in SCHEMA_COLUMNS if col not in existing_headers]
                if missing_headers:
                    updated_headers = existing_headers + missing_headers
                    if len(updated_headers) > self.articles_worksheet.col_count:
                        self.articles_worksheet.add_cols(len(updated_headers) - self.articles_worksheet.col_count)
                    self.articles_worksheet.update([updated_headers], "A1")
        else:
            self.articles_worksheet = self.spreadsheet.add_worksheet(
                title="RSS_ARTICLES", rows=1000, cols=len(SCHEMA_COLUMNS)
            )
            self.articles_worksheet.append_row(SCHEMA_COLUMNS)

    def get_feed_urls(self) -> List[Dict[str, str]]:
        """
        Reads feed definitions from column A (and optional name/publisher) of the RSS sheet.

        Returns:
            List of dicts with keys 'feed_url', 'feed_name', 'publisher'.
        """
        if not self.rss_worksheet:
            self.init_worksheets()

        rows = self.rss_worksheet.get_all_values()
        if not rows:
            return []

        feeds = []
        for idx, row in enumerate(rows):
            if not row or not row[0].strip():
                continue
            url = row[0].strip()

            # Skip header row if present
            if idx == 0 and url.lower() in ("feed_url", "feed url", "url", "rss", "rss url"):
                continue

            feed_name = row[1].strip() if len(row) > 1 else ""
            publisher = row[2].strip() if len(row) > 2 else ""
            status = row[3].strip().lower() if len(row) > 3 else "active"

            if status in ("inactive", "disabled", "paused"):
                continue

            feeds.append({
                "feed_url": url,
                "feed_name": feed_name,
                "publisher": publisher,
            })

        return feeds

    def get_existing_articles(self) -> Tuple[List[Dict[str, Any]], List[str]]:
        """
        Reads all existing articles from the RSS_ARTICLES sheet.

        Returns:
            Tuple of (list_of_article_dicts, sheet_headers)
        """
        if not self.articles_worksheet:
            self.init_worksheets()

        rows = self.articles_worksheet.get_all_values()
        if not rows or len(rows) <= 1:
            return [], SCHEMA_COLUMNS

        headers = [h.strip() for h in rows[0]]
        articles = []

        for row_idx, row in enumerate(rows[1:], start=2):
            record: Dict[str, Any] = {"_row_idx": row_idx}
            for col_idx, col_name in enumerate(headers):
                record[col_name] = row[col_idx].strip() if col_idx < len(row) else ""
            articles.append(record)

        return articles, headers

    def append_new_articles(self, new_articles: List[Dict[str, Any]]) -> int:
        """
        Batch appends new article records to RSS_ARTICLES.

        Args:
            new_articles: List of dicts representing new rows.

        Returns:
            Count of rows inserted.
        """
        if not new_articles:
            return 0

        if not self.articles_worksheet:
            self.init_worksheets()

        rows_to_insert = []
        for item in new_articles:
            row_vals = []
            for col in SCHEMA_COLUMNS:
                val = item.get(col, "")
                if col == "ANALYSIS_STATUS" and not val:
                    val = "PENDING"
                elif col == "ARTICLE_FETCH_STATUS" and not val:
                    val = "SUCCESS"
                row_vals.append(str(val) if val is not None else "")
            rows_to_insert.append(row_vals)

        self.articles_worksheet.append_rows(rows_to_insert, value_input_option="USER_ENTERED")
        return len(rows_to_insert)

    def batch_update_articles(self, updates_by_row: Dict[int, Dict[str, Any]], headers: List[str]) -> int:
        """
        Batch updates modified metadata for existing rows in RSS_ARTICLES.

        Args:
            updates_by_row: Dict mapping row_idx -> {col_name: new_value}
            headers: Column header list from the sheet.

        Returns:
            Number of rows updated.
        """
        if not updates_by_row:
            return 0

        if not self.articles_worksheet:
            self.init_worksheets()

        batch_payload = []
        col_to_letter = lambda c: gspread.utils.rowcol_to_a1(1, c + 1)[0]

        for row_idx, updates in updates_by_row.items():
            for col_name, new_val in updates.items():
                if col_name in headers:
                    col_idx = headers.index(col_name)
                    cell_a1 = gspread.utils.rowcol_to_a1(row_idx, col_idx + 1)
                    batch_payload.append({
                        "range": cell_a1,
                        "values": [[str(new_val)]],
                    })

        if batch_payload:
            self.articles_worksheet.batch_update(batch_payload, value_input_option="USER_ENTERED")

        return len(updates_by_row)

    def get_pending_articles(self) -> Tuple[List[Dict[str, Any]], List[str]]:
        """
        Retrieves all articles currently marked as PENDING from RSS_ARTICLES.

        Returns:
            Tuple of (list_of_pending_article_records, sheet_headers)
        """
        all_articles, headers = self.get_existing_articles()
        pending = [
            a for a in all_articles
            if (a.get("ANALYSIS_STATUS") or "").strip().upper() == "PENDING"
        ]
        return pending, headers

    def claim_article_processing(self, row_idx: int, headers: List[str]) -> None:
        """
        Claims an article atomically by setting ANALYSIS_STATUS to PROCESSING.
        """
        if not self.articles_worksheet:
            self.init_worksheets()
        if "ANALYSIS_STATUS" in headers:
            col_idx = headers.index("ANALYSIS_STATUS")
            cell_a1 = gspread.utils.rowcol_to_a1(row_idx, col_idx + 1)
            self.articles_worksheet.update([[ "PROCESSING" ]], cell_a1)

    def save_article_analysis(
        self,
        row_idx: int,
        analysis_fields: Dict[str, Any],
        headers: List[str],
    ) -> None:
        """
        Writes completed Antigravity analysis fields to the row in RSS_ARTICLES.
        """
        if not self.articles_worksheet:
            self.init_worksheets()

        updates = {row_idx: analysis_fields}
        self.batch_update_articles(updates, headers)

    def get_development_candidates(self) -> Tuple[List[Dict[str, Any]], List[str]]:
        """
        Retrieves all articles where EDITORIAL_STATUS == 'CANDIDATE' and
        DEVELOPMENT_STATUS is blank or 'PENDING'.

        Returns:
            Tuple of (list_of_candidate_records, sheet_headers)
        """
        all_articles, headers = self.get_existing_articles()
        candidates = []
        for a in all_articles:
            editorial_status = (a.get("EDITORIAL_STATUS") or "").strip().upper()
            dev_status = (a.get("DEVELOPMENT_STATUS") or "").strip().upper()

            if editorial_status == "CANDIDATE" and dev_status in ("", "PENDING"):
                candidates.append(a)

        return candidates, headers

    def claim_candidate_development(self, row_idx: int, headers: List[str]) -> None:
        """
        Atomically claims a candidate by setting DEVELOPMENT_STATUS to PROCESSING.
        """
        if not self.articles_worksheet:
            self.init_worksheets()
        if "DEVELOPMENT_STATUS" in headers:
            col_idx = headers.index("DEVELOPMENT_STATUS")
            cell_a1 = gspread.utils.rowcol_to_a1(row_idx, col_idx + 1)
            self.articles_worksheet.update([[ "PROCESSING" ]], cell_a1)

    def save_article_development(
        self,
        row_idx: int,
        development_fields: Dict[str, Any],
        headers: List[str],
    ) -> None:
        """
        Writes completed Workflow 3 development fields to RSS_ARTICLES.
        """
        if not self.articles_worksheet:
            self.init_worksheets()

        updates = {row_idx: development_fields}
        self.batch_update_articles(updates, headers)
