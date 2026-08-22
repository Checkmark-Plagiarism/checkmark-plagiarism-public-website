"""
Unit and Integration Tests for RSS Content Scout (Component 1 — Python RSS Ingestion).
"""
import pytest
from unittest.mock import MagicMock, patch
from scripts.RSS.url_normalizer import normalize_url
from scripts.RSS.article_id import generate_article_id
from scripts.RSS.duplicate_detector import DuplicateDetector
from scripts.RSS.sheet_manager import SCHEMA_COLUMNS
from scripts.RSS.feed_parser import (
    _clean_html_text,
    _parse_date_to_iso,
    fetch_and_parse_feed,
)


class TestUrlNormalizer:
    """Tests URL normalization and parameter stripping."""

    def test_strip_utm_and_analytics_parameters(self):
        url = "https://www.edweek.org/teaching-learning/ai-in-classrooms/2026/08?utm_source=feed&utm_medium=rss&utm_campaign=daily_brief&fbclid=IwAR29&gclid=Cj0K&_ga=GA1.2.3#comments"
        expected = "https://www.edweek.org/teaching-learning/ai-in-classrooms/2026/08"
        assert normalize_url(url) == expected

    def test_preserve_content_parameters(self):
        url = "https://edsurge.com/news/article.php?id=98721&page=2&utm_source=twitter&ref=social"
        expected = "https://edsurge.com/news/article.php?id=98721&page=2"
        assert normalize_url(url) == expected

    def test_trailing_slash_and_lowercase_normalization(self):
        url1 = "HTTPS://Example.COM/Blog/Post-123/"
        url2 = "http://example.com/blog/post-123"
        assert normalize_url(url1) == "https://example.com/Blog/Post-123"
        assert normalize_url(url2) == "http://example.com/blog/post-123"

    def test_empty_and_none_handling(self):
        assert normalize_url("") == ""
        assert normalize_url(None) == ""
        assert normalize_url("   ") == ""


class TestArticleIdGenerator:
    """Tests stable, deterministic ARTICLE_ID generation."""

    def test_guid_hierarchy(self):
        id1 = generate_article_id(
            guid="https://chalkbeat.org/?p=55201",
            normalized_url="https://chalkbeat.org/article",
            publisher="Chalkbeat",
            article_title="High School Writing and AI",
            publication_date="2026-08-20T12:00:00Z",
        )
        id2 = generate_article_id(
            guid="https://chalkbeat.org/?p=55201",
            normalized_url="https://chalkbeat.org/different-url",
            publisher="Other Publisher",
        )
        assert id1.startswith("art_g_")
        assert id1 == id2

    def test_fallback_to_normalized_url(self):
        id1 = generate_article_id(
            guid="",
            normalized_url="https://edsurge.com/news/high-school-grading",
            publisher="EdSurge",
            article_title="Grading Rubrics",
        )
        assert id1.startswith("art_u_")
        id2 = generate_article_id(
            guid=None,
            normalized_url="https://edsurge.com/news/high-school-grading",
        )
        assert id1 == id2

    def test_fallback_to_publisher_title_date(self):
        id1 = generate_article_id(
            guid="",
            normalized_url="",
            publisher="The Hechinger Report",
            article_title="The Future of High School Writing",
            publication_date="2026-08-21",
        )
        assert id1.startswith("art_m_")
        id2 = generate_article_id(
            publisher="The Hechinger Report",
            article_title="the future of high school writing",
            publication_date="2026-08-21",
        )
        assert id1 == id2


class TestDuplicateDetector:
    """Tests 5-tier duplicate detection and safe metadata update rules."""

    def setup_method(self):
        self.existing_records = [
            {
                "_row_idx": 2,
                "ARTICLE_ID": "art_g_1111",
                "FEED_URL": "https://feed.edweek.org",
                "FEED_NAME": "Education Week",
                "PUBLISHER": "Education Week",
                "RSS_GUID": "edweek-post-100",
                "ARTICLE_TITLE": "AI Writing Detection in High Schools",
                "ORIGINAL_URL": "https://edweek.org/ai?utm_source=rss",
                "NORMALIZED_URL": "https://edweek.org/ai",
                "AUTHOR": "Jane Doe",
                "PUBLICATION_DATE": "2026-08-20T10:00:00Z",
                "UPDATED_DATE": "2026-08-20T10:00:00Z",
                "RSS_DESCRIPTION": "Short description",
                "RSS_SUMMARY": "Short summary",
                "RSS_CATEGORIES": "AI, Education",
                "DATE_DISCOVERED": "2026-08-20T10:05:00Z",
                "ANALYSIS_STATUS": "COMPLETE",
                "ANALYSIS_DATE": "2026-08-20T11:00:00Z",
                "CHECKMARK_RELEVANCE_SCORE": "9.5",
                "PRODUCT_ADJACENCY_SCORE": "9.0",
                "TEACHER_RELEVANCE_SCORE": "9.8",
                "ARTICLE_SUMMARY": "Antigravity analysis summary already written.",
                "PROPOSED_ARTICLE_ANGLE": "Keystroke playback forensics angle.",
                "EDITORIAL_STATUS": "APPROVED",
            }
        ]
        self.detector = DuplicateDetector(self.existing_records)

    def test_match_by_article_id(self):
        candidate = {"ARTICLE_ID": "art_g_1111", "ARTICLE_TITLE": "Different title"}
        match, tier = self.detector.find_existing(candidate)
        assert match is not None
        assert tier == "ARTICLE_ID"
        assert match["_row_idx"] == 2

    def test_match_by_guid(self):
        candidate = {"ARTICLE_ID": "art_different", "RSS_GUID": "edweek-post-100"}
        match, tier = self.detector.find_existing(candidate)
        assert match is not None
        assert tier == "RSS_GUID"

    def test_match_by_normalized_url(self):
        candidate = {"ARTICLE_ID": "art_new", "NORMALIZED_URL": "https://edweek.org/ai"}
        match, tier = self.detector.find_existing(candidate)
        assert match is not None
        assert tier == "NORMALIZED_URL"

    def test_different_publishers_same_topic_are_treated_as_distinct(self):
        candidate = {
            "ARTICLE_ID": "art_other_pub",
            "FEED_URL": "https://chalkbeat.org/rss",
            "PUBLISHER": "Chalkbeat",
            "RSS_GUID": "chalkbeat-200",
            "ARTICLE_TITLE": "AI Writing Detection in High Schools",
            "ORIGINAL_URL": "https://chalkbeat.org/ai",
            "NORMALIZED_URL": "https://chalkbeat.org/ai",
            "PUBLICATION_DATE": "2026-08-20T10:00:00Z",
        }
        match, tier = self.detector.find_existing(candidate)
        assert match is None
        assert tier is None

    def test_safe_metadata_update_preserves_antigravity_fields(self):
        existing = self.existing_records[0]
        candidate = {
            "ARTICLE_ID": "art_g_1111",
            "UPDATED_DATE": "2026-08-21T14:00:00Z",
            "RSS_DESCRIPTION": "A much longer and more comprehensive RSS description provided by updated feed.",
            "ANALYSIS_STATUS": "PENDING",  # Ingestion script or feed must NOT overwrite COMPLETE
            "CHECKMARK_RELEVANCE_SCORE": "1.0",  # Must NOT overwrite
            "ARTICLE_SUMMARY": "Attempted overwrite of AI summary",  # Must NOT overwrite
            "EDITORIAL_STATUS": "REJECTED",  # Must NOT overwrite
        }

        updates = self.detector.compute_metadata_updates(existing, candidate)
        
        # Allowed metadata fields updated
        assert updates.get("UPDATED_DATE") == "2026-08-21T14:00:00Z"
        assert "much longer" in updates.get("RSS_DESCRIPTION", "")

        # Protected Antigravity analysis fields strictly omitted from updates
        assert "ANALYSIS_STATUS" not in updates
        assert "CHECKMARK_RELEVANCE_SCORE" not in updates
        assert "ARTICLE_SUMMARY" not in updates
        assert "EDITORIAL_STATUS" not in updates


class TestFeedParserUtilities:
    """Tests HTML stripping, date parsing, and feed extraction."""

    def test_clean_html_text(self):
        raw = "<p>High school English teachers are <strong>re-evaluating</strong> essays &amp; DBQs.</p>"
        assert _clean_html_text(raw) == "High school English teachers are re-evaluating essays & DBQs."

    def test_parse_date_to_iso(self):
        raw = "Thu, 20 Aug 2026 14:30:00 GMT"
        iso = _parse_date_to_iso(raw)
        assert "2026-08-20T14:30:00Z" == iso

    def test_schema_column_count(self):
        assert len(SCHEMA_COLUMNS) == 48
        assert SCHEMA_COLUMNS[0] == "ARTICLE_ID"
        assert SCHEMA_COLUMNS[15] == "ANALYSIS_STATUS"
        assert SCHEMA_COLUMNS[19] == "ARTICLE_SUMMARY"
        assert SCHEMA_COLUMNS[34] == "DEVELOPMENT_STATUS"
        assert SCHEMA_COLUMNS[47] == "PUBLISHED_URL"
