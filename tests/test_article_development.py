"""
Unit tests for Workflow 3 — RSS Article Development (RSS_ARTICLE_DEVELOPMENT).
"""
import os
import shutil
import tempfile
import pytest
from unittest.mock import MagicMock
from scripts.RSS.article_developer import (
    slugify_title,
    generate_pipeline_id,
    evaluate_candidate_viability,
    generate_three_angles,
    select_strongest_angle,
    verify_research_sources,
    build_content_brief,
    write_article_draft,
    save_markdown_draft,
)
from scripts.RSS.sheet_manager import SheetManager


class TestArticleDeveloperUtilities:
    """Tests for slugification, pipeline ID generation, and markdown persistence."""

    def test_slugify_title(self):
        title = "Can Writing History Show How a Student Used AI? (A Guide for Teachers!)"
        expected = "can-writing-history-show-how-a-student-used-ai-a-guide-for-teachers"
        assert slugify_title(title) == expected

    def test_generate_pipeline_id_deterministic(self):
        id1 = generate_pipeline_id("art_g_abc123")
        id2 = generate_pipeline_id("art_g_abc123")
        id3 = generate_pipeline_id("art_u_xyz987")
        assert id1.startswith("pipe_")
        assert id1 == id2
        assert id1 != id3

    def test_save_markdown_draft(self):
        temp_dir = tempfile.mkdtemp()
        try:
            title = "How Keystroke Playback Verifies Student Writing"
            body = "## Introduction\n\nKeystroke playback provides transparent revision history."
            sources = [{"title": "EdTech Research 2026", "url": "https://example.com/study"}]
            links = [{"title": "Checkmark Essay Playback", "url": "/services/essay-playback"}]
            brief = {"primary_question": "How to verify typing?", "target_audience": "High school teachers"}
            article_id = "art_g_test123"

            rel_path = save_markdown_draft(
                title=title,
                article_body=body,
                sources=sources,
                internal_links=links,
                brief=brief,
                article_id=article_id,
                output_dir=temp_dir,
            )

            expected_filename = "how-keystroke-playback-verifies-student-writing.md"
            full_path = os.path.join(temp_dir, expected_filename)
            assert os.path.exists(full_path)

            with open(full_path, "r", encoding="utf-8") as f:
                content = f.read()

            assert "# How Keystroke Playback Verifies Student Writing" in content
            assert "## Sources" in content
            assert "[EdTech Research 2026](https://example.com/study)" in content
            assert "## Internal Link Suggestions" in content
            assert "<!-- CONTENT BRIEF" in content
            assert "How to verify typing?" in content
        finally:
            shutil.rmtree(temp_dir)


class TestCandidateEvaluationAndAngles:
    """Tests for viability checks and 3-angle generation."""

    @pytest.mark.filterwarnings("ignore")
    def test_evaluate_candidate_viability(self):
        viable_rec = {"ARTICLE_TITLE": "AI Writing Policy", "CHECKMARK_RELEVANCE_SCORE": "85"}
        viable_text = "Comprehensive article detailing high school district writing policy changes and student expectations."
        is_viable, msg = evaluate_candidate_viability(viable_rec, viable_text)
        assert is_viable is True

        low_score_rec = {"ARTICLE_TITLE": "Local Sports", "CHECKMARK_RELEVANCE_SCORE": "30"}
        is_viable2, msg2 = evaluate_candidate_viability(low_score_rec, "Some text")
        assert is_viable2 is False
        assert "below viable threshold" in msg2

    @pytest.mark.filterwarnings("ignore")
    def test_generate_three_angles_heuristic(self):
        record = {
            "ARTICLE_TITLE": "District Adopts Multi-Evidence Standard for AI Writing Inquiries",
            "PUBLISHER": "Education Week",
            "UNDERLYING_SIGNAL": "Districts require revision history before penalizing AI use.",
            "PRIMARY_CHECKMARK_THEME": "Writing-Process Evidence & Authorship Verification",
        }
        content_text = "Detailed reporting on high school English departments adopting writing process evidence."

        with pytest.MonkeyPatch.context() as mp:
            # Force heuristic fallback by causing post to raise exception
            mp.setattr("requests.post", MagicMock(side_effect=Exception("Offline test")))
            angles = generate_three_angles(record, content_text)

        assert len(angles) == 3
        for a in angles:
            assert "working_title" in a
            assert "primary_question" in a
            assert "thesis" in a
            assert "teacher_problem" in a
            assert "checkmark_connection" in a
            assert "new_value" in a

        selected, reasoning = select_strongest_angle(angles, record)
        assert selected is not None
        assert "Selected Angle" in reasoning


class TestSheetManagerDevelopmentCandidates:
    """Tests for candidate queue filtering in SheetManager."""

    def test_get_development_candidates_filtering(self):
        manager = SheetManager()
        mock_articles = [
            {"_row_idx": 2, "ARTICLE_ID": "art_1", "EDITORIAL_STATUS": "CANDIDATE", "DEVELOPMENT_STATUS": ""},
            {"_row_idx": 3, "ARTICLE_ID": "art_2", "EDITORIAL_STATUS": "CANDIDATE", "DEVELOPMENT_STATUS": "PENDING"},
            {"_row_idx": 4, "ARTICLE_ID": "art_3", "EDITORIAL_STATUS": "CANDIDATE", "DEVELOPMENT_STATUS": "DRAFT_CREATED"},
            {"_row_idx": 5, "ARTICLE_ID": "art_4", "EDITORIAL_STATUS": "REJECTED", "DEVELOPMENT_STATUS": ""},
            {"_row_idx": 6, "ARTICLE_ID": "art_5", "EDITORIAL_STATUS": "WATCH", "DEVELOPMENT_STATUS": "PENDING"},
            {"_row_idx": 7, "ARTICLE_ID": "art_6", "EDITORIAL_STATUS": "CANDIDATE", "DEVELOPMENT_STATUS": "PROCESSING"},
        ]
        headers = ["ARTICLE_ID", "EDITORIAL_STATUS", "DEVELOPMENT_STATUS"]
        manager.get_existing_articles = MagicMock(return_value=(mock_articles, headers))

        candidates, hdrs = manager.get_development_candidates()
        assert len(candidates) == 2
        assert candidates[0]["ARTICLE_ID"] == "art_1"
        assert candidates[1]["ARTICLE_ID"] == "art_2"
