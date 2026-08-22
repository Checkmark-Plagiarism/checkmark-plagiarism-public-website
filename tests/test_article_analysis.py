"""
Unit tests for Workflow 2 — Content Analysis (RSS_CONTENT_ANALYSIS).
"""
import pytest
from unittest.mock import patch, MagicMock
from scripts.RSS.article_fetcher import _extract_clean_text_from_html, fetch_article_content
from scripts.RSS.article_analyzer import analyze_article, _heuristic_fallback_analysis
from scripts.RSS.sheet_manager import SheetManager


class TestArticleFetcher:
    """Tests for HTML parsing and resilient article fetching."""

    def test_extract_clean_text_from_html(self):
        sample_html = """
        <html>
        <head>
            <script>console.log('ad tracker');</script>
            <style>body { color: red; }</style>
        </head>
        <body>
            <header><nav><a href="/">Home</a></nav></header>
            <main>
                <article>
                    <h1>High School AI Writing Inquiries</h1>
                    <p>High school teachers across the district are adopting keystroke revision history to verify student essays.</p>
                    <p>The new guidelines require multi-modal evidence before any integrity inquiry can proceed.</p>
                </article>
            </main>
            <footer><p>&copy; 2026 Education Times</p></footer>
        </body>
        </html>
        """
        clean_text = _extract_clean_text_from_html(sample_html)
        assert "High School AI Writing Inquiries" in clean_text
        assert "keystroke revision history" in clean_text
        assert "ad tracker" not in clean_text
        assert "body { color: red; }" not in clean_text

    @patch("requests.get")
    def test_fetch_article_content_success(self, mock_get):
        mock_resp = MagicMock()
        mock_resp.status_code = 200
        mock_resp.text = """
        <article>
            <p>New study examines how high school teachers evaluate student writing using keystroke replay tools and autograding rubrics in Canvas LMS.</p>
            <p>Educators report higher confidence when reviewing revision histories alongside standard plagiarism checks.</p>
        </article>
        """
        mock_get.return_value = mock_resp

        text, status, err = fetch_article_content("https://edtechmagazine.com/ai-writing")
        assert status == "SUCCESS"
        assert err is None
        assert "keystroke replay tools" in text

    @patch("requests.get")
    def test_fetch_article_content_fallback_to_rss(self, mock_get):
        mock_get.side_effect = Exception("Connection timeout 403 Forbidden")

        text, status, err = fetch_article_content(
            normalized_url="https://paywalled.com/news",
            rss_summary="School district updates academic integrity policy regarding student AI usage on homework and essays."
        )
        assert status == "FALLBACK_RSS"
        assert "academic integrity policy" in text
        assert "NOTE: Full article could not be accessed" in text


class TestArticleAnalyzer:
    """Tests for scoring rubric calculations, thresholds, and candidate generation."""

    def test_high_relevance_candidate_evaluation(self):
        title = "District Mandates Writing Process Evidence for AI Misconduct Inquiries"
        publisher = "EdWeek"
        content = (
            "A major suburban school district has enacted a policy barring teachers from penalizing students based solely "
            "on an AI detection percentage. Instead, educators must review Google Docs revision history, keystroke replays, "
            "and hold restorative student conferences to verify authentic authorship on English essays and history DBQs."
        )

        res = _heuristic_fallback_analysis(title, publisher, content, is_fallback_rss=False)

        assert res["CHECKMARK_RELEVANCE_SCORE"] >= 70
        assert res["EDITORIAL_STATUS"] == "CANDIDATE"
        assert len(res["UNDERLYING_SIGNAL"]) > 10
        assert len(res["ARTICLE_SUMMARY"]) > 20
        assert res["PRIMARY_CHECKMARK_THEME"] != ""
        assert res["PROPOSED_ARTICLE_ANGLE"] != ""
        assert res["PROPOSED_WORKING_TITLE"] != ""
        
        # Verify score sum integrity
        total_sum = (
            res["PRODUCT_ADJACENCY_SCORE"] +
            res["TEACHER_RELEVANCE_SCORE"] +
            res["DISTINCTIVE_PERSPECTIVE_SCORE"] +
            res["EVIDENCE_QUALITY_SCORE"] +
            res["SEARCH_OPPORTUNITY_SCORE"] +
            res["TIMELINESS_SCORE"] +
            res["PRODUCT_CONNECTION_SCORE"]
        )
        assert res["CHECKMARK_RELEVANCE_SCORE"] == total_sum

    def test_irrelevant_rejected_evaluation(self):
        title = "Local High School Wins Regional Baseball Championship"
        publisher = "City Gazette"
        content = "The varsity baseball team clinched the state title with a thrilling walk-off home run in extra innings yesterday."

        res = _heuristic_fallback_analysis(title, publisher, content, is_fallback_rss=False)

        assert res["CHECKMARK_RELEVANCE_SCORE"] < 50
        assert res["EDITORIAL_STATUS"] == "REJECTED"
        assert res["PROPOSED_WORKING_TITLE"] == ""
        assert res["PROPOSED_ARTICLE_ANGLE"] == ""

    def test_evidence_quality_discounted_on_rss_fallback(self):
        title = "New AI Policy Announced"
        publisher = "Tech Brief"
        content = "Short RSS snippet"

        res_fallback = _heuristic_fallback_analysis(title, publisher, content, is_fallback_rss=True)
        res_full = _heuristic_fallback_analysis(title, publisher, content + " based on published research data from Stanford University study", is_fallback_rss=False)

        assert res_fallback["EVIDENCE_QUALITY_SCORE"] < res_full["EVIDENCE_QUALITY_SCORE"]


class TestSheetManagerPendingAndClaiming:
    """Tests for pending article filtering and processing claim logic."""

    def test_get_pending_articles_filter(self):
        manager = SheetManager()
        # Mock get_existing_articles
        mock_articles = [
            {"_row_idx": 2, "ARTICLE_ID": "art_1", "ANALYSIS_STATUS": "PENDING"},
            {"_row_idx": 3, "ARTICLE_ID": "art_2", "ANALYSIS_STATUS": "COMPLETE"},
            {"_row_idx": 4, "ARTICLE_ID": "art_3", "ANALYSIS_STATUS": "pending"},
            {"_row_idx": 5, "ARTICLE_ID": "art_4", "ANALYSIS_STATUS": "ERROR"},
        ]
        headers = ["ARTICLE_ID", "ANALYSIS_STATUS"]
        manager.get_existing_articles = MagicMock(return_value=(mock_articles, headers))

        pending, hdrs = manager.get_pending_articles()
        assert len(pending) == 2
        assert pending[0]["ARTICLE_ID"] == "art_1"
        assert pending[1]["ARTICLE_ID"] == "art_3"
