"""
Unit tests for Workflow 4 — RSS Blog Publishing (RSS_PUBLISH_BLOG).
"""
import os
import shutil
import tempfile
import pytest
from unittest.mock import MagicMock
from scripts.RSS.publish_rss_drafts import (
    select_opengraph_image,
    parse_markdown_draft,
    convert_markdown_to_semantic_html,
    compile_draft_to_nextjs_page,
)
from scripts.RSS.get_rss_pipeline_status import get_rss_pipeline_status
from scripts.RSS.sheet_manager import SheetManager


class TestPublishRssDrafts:
    """Tests for markdown parsing, HTML conversion, and Next.js page generation."""

    def test_select_opengraph_image(self):
        img1 = select_opengraph_image("Writing-Process Evidence & Authorship", "How Keystroke Playback Works")
        assert img1 == "/images/services/report-paste-evidence.png"

        img2 = select_opengraph_image("AI Writing & Detection", "Can AI Detectors Catch Edited ChatGPT")
        assert img2 == "/images/services/report-breakdown-sidebar.png"

        img3 = select_opengraph_image("Plagiarism & Citation", "How to Catch Patchwriting")
        assert img3 == "/images/services/report-plagiarism-view.png"

    def test_parse_markdown_draft(self):
        sample_md = """# Can Revision History Prove Authentic Authorship?

Recent studies show that keystroke logs provide decisive clarity.

## Why Process Matters
Teachers review pacing, backspaces, and typing rhythm.

## Sources
- [Study on AI Writing 2026](https://example.com/study)

## Internal Link Suggestions
- [Essay Playback Tool](/services/essay-playback)

<!-- CONTENT BRIEF
{
  "final_title": "Can Revision History Prove Authentic Authorship?",
  "primary_question": "Can revision history prove authorship?",
  "core_thesis": "Keystroke logs provide decisive clarity over detection scores.",
  "primary_checkmark_theme": "Writing-Process Evidence"
}
-->
"""
        parsed = parse_markdown_draft(sample_md)
        assert parsed["title"] == "Can Revision History Prove Authentic Authorship?"
        assert parsed["brief"]["primary_checkmark_theme"] == "Writing-Process Evidence"
        assert len(parsed["sources"]) == 1
        assert parsed["sources"][0]["title"] == "Study on AI Writing 2026"
        assert len(parsed["internal_links"]) == 1
        assert "<!-- CONTENT BRIEF" not in parsed["body_markdown"]
        assert "## Why Process Matters" in parsed["body_markdown"]

    def test_compile_draft_to_nextjs_page(self):
        temp_dir = tempfile.mkdtemp()
        try:
            # Create sample draft
            draft_path = os.path.join(temp_dir, "test-draft.md")
            with open(draft_path, "w", encoding="utf-8") as f:
                f.write("""# How High School Teachers Investigate AI Writing

Teachers need multi-evidence workflows.

## Understanding the Signal
Revision history shows writing progression.

## Sources
- [EdTech Report](https://example.com/report)
""")

            target_base = os.path.join(temp_dir, "learning_pages")
            page_file, route_url, meta_info = compile_draft_to_nextjs_page(
                draft_file_path=draft_path,
                year="2026",
                month="8",
                output_base_dir=target_base,
            )

            assert os.path.exists(page_file)
            assert route_url == "/learning/2026/8/how-high-school-teachers-investigate-ai-writing"
            
            with open(page_file, "r", encoding="utf-8") as f:
                page_code = f.read()

            assert "import ArticleLayout from \"@/components/blog/article-layout\";" in page_code
            assert "export const metadata: Metadata =" in page_code
            assert "How High School Teachers Investigate AI Writing" in page_code
            assert "export default function Page(" in page_code
            assert "<ArticleLayout" in page_code
            assert "dangerouslySetInnerHTML" in page_code
        finally:
            shutil.rmtree(temp_dir)


class TestRssPipelineStatusDispatcher:
    """Tests for smart dispatch status logic across all 4 actions."""

    def test_pipeline_dispatch_actions(self):
        # Case 1: Draft exists -> STYLE_PAGE
        articles_draft = [
            {"_row_idx": 2, "ARTICLE_TITLE": "Art 1", "DEVELOPMENT_STATUS": "DRAFT_CREATED", "ARTICLE_MD_PATH": "content/rss_drafts/art-1.md"}
        ]
        manager = SheetManager()
        manager.connect = MagicMock()
        manager.init_worksheets = MagicMock()
        manager.get_existing_articles = MagicMock(return_value=(articles_draft, []))

        with pytest.MonkeyPatch.context() as mp:
            mp.setitem(get_rss_pipeline_status.__globals__, "SheetManager", lambda **kwargs: manager)
            res1 = get_rss_pipeline_status()
            assert res1["next_action"] == "STYLE_PAGE"

        # Case 2: Candidate exists -> DEVELOP_ARTICLE
        articles_cand = [
            {"_row_idx": 2, "ARTICLE_TITLE": "Art 2", "EDITORIAL_STATUS": "CANDIDATE", "DEVELOPMENT_STATUS": ""}
        ]
        manager.get_existing_articles = MagicMock(return_value=(articles_cand, []))
        with pytest.MonkeyPatch.context() as mp:
            mp.setitem(get_rss_pipeline_status.__globals__, "SheetManager", lambda **kwargs: manager)
            res2 = get_rss_pipeline_status()
            assert res2["next_action"] == "DEVELOP_ARTICLE"

        # Case 3: Pending analysis -> ANALYZE_ARTICLES
        articles_pending = [
            {"_row_idx": 2, "ARTICLE_TITLE": "Art 3", "ANALYSIS_STATUS": "PENDING"}
        ]
        manager.get_existing_articles = MagicMock(return_value=(articles_pending, []))
        with pytest.MonkeyPatch.context() as mp:
            mp.setitem(get_rss_pipeline_status.__globals__, "SheetManager", lambda **kwargs: manager)
            res3 = get_rss_pipeline_status()
            assert res3["next_action"] == "ANALYZE_ARTICLES"

        # Case 4: Queue empty -> INGEST_FEEDS
        manager.get_existing_articles = MagicMock(return_value=([], []))
        with pytest.MonkeyPatch.context() as mp:
            mp.setitem(get_rss_pipeline_status.__globals__, "SheetManager", lambda **kwargs: manager)
            res4 = get_rss_pipeline_status()
            assert res4["next_action"] == "INGEST_FEEDS"
