"""
RSS Content Scout Module
"""
from .url_normalizer import normalize_url
from .article_id import generate_article_id
from .duplicate_detector import DuplicateDetector
from .feed_parser import fetch_and_parse_feed
from .sheet_manager import SheetManager, SCHEMA_COLUMNS
from .article_fetcher import fetch_article_content
from .article_analyzer import analyze_article
from .analyze_articles import run_content_analysis
from .article_developer import (
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
from .develop_articles import run_article_development
from .get_rss_pipeline_status import get_rss_pipeline_status
from .publish_rss_drafts import run_rss_publishing, compile_draft_to_nextjs_page

__all__ = [
    "normalize_url",
    "generate_article_id",
    "DuplicateDetector",
    "fetch_and_parse_feed",
    "SheetManager",
    "SCHEMA_COLUMNS",
    "fetch_article_content",
    "analyze_article",
    "run_content_analysis",
    "slugify_title",
    "generate_pipeline_id",
    "evaluate_candidate_viability",
    "generate_three_angles",
    "select_strongest_angle",
    "verify_research_sources",
    "build_content_brief",
    "write_article_draft",
    "save_markdown_draft",
    "run_article_development",
    "get_rss_pipeline_status",
    "run_rss_publishing",
    "compile_draft_to_nextjs_page",
]
