"""
Workflow 2 — Content Analysis Orchestrator (RSS_CONTENT_ANALYSIS).

Claims PENDING articles in RSS_ARTICLES, fetches the full text content, runs the
Checkmark Plagiarism editorial evaluation & scoring rubric, updates Google Sheets,
and outputs a comprehensive completion summary report.

Usage:
    python scripts/RSS/analyze_articles.py [--sheet-name RSS_CONTENT_SCOUNT] [--dry-run] [--limit 10]
"""
import os
import sys
import argparse
import json
import logging
from datetime import datetime, timezone
from typing import Dict, Any, List

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)
if os.path.dirname(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, os.path.dirname(SCRIPT_DIR))

try:
    from .article_fetcher import fetch_article_content
    from .article_analyzer import analyze_article, DEFAULT_MODEL
    from .sheet_manager import SheetManager, SCHEMA_COLUMNS, DEFAULT_SHEET_NAME, DEFAULT_CREDENTIALS_PATH
except ImportError:
    from article_fetcher import fetch_article_content
    from article_analyzer import analyze_article, DEFAULT_MODEL
    from sheet_manager import SheetManager, SCHEMA_COLUMNS, DEFAULT_SHEET_NAME, DEFAULT_CREDENTIALS_PATH

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger("RSS_Content_Scout.AnalysisRunner")


def run_content_analysis(
    sheet_name: str = DEFAULT_SHEET_NAME,
    credentials_path: str = DEFAULT_CREDENTIALS_PATH,
    dry_run: bool = False,
    limit: int = 0,
    model: str = DEFAULT_MODEL,
) -> Dict[str, Any]:
    """
    Executes Workflow 2: Content Analysis.

    Returns:
        Structured completion summary report dictionary.
    """
    logger.info("==================================================")
    logger.info("Starting Workflow 2: Content Analysis (RSS_CONTENT_ANALYSIS)")
    logger.info("Target Spreadsheet: %s", sheet_name)
    logger.info("Credentials Path:   %s", credentials_path)
    logger.info("Evaluation Model:   %s", model)
    logger.info("Dry Run Mode:       %s", dry_run)
    logger.info("==================================================")

    sheet_manager = SheetManager(sheet_name=sheet_name, credentials_path=credentials_path)
    
    try:
        logger.info("Connecting to Google Sheets...")
        sheet_manager.connect()
        sheet_manager.init_worksheets()
        pending_articles, sheet_headers = sheet_manager.get_pending_articles()
        logger.info("Found %d article(s) with ANALYSIS_STATUS == 'PENDING'.", len(pending_articles))
    except Exception as e:
        logger.error("Failed to connect to Google Sheets: %s", str(e))
        return {
            "status": "ERROR",
            "error": str(e),
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }

    if limit > 0 and len(pending_articles) > limit:
        logger.info("Limiting analysis to %d article(s).", limit)
        pending_articles = pending_articles[:limit]

    stats = {
        "feeds_inspected": len(set(a.get("FEED_URL", "") for a in pending_articles if a.get("FEED_URL"))),
        "articles_pending": len(pending_articles),
        "articles_analyzed": 0,
        "rejected_count": 0,
        "watch_count": 0,
        "candidate_count": 0,
        "error_count": 0,
        "highest_scoring_candidates": [],
    }

    if not pending_articles:
        logger.info("No PENDING articles to analyze in RSS_ARTICLES queue.")
        return {
            "status": "NO_PENDING_ARTICLES",
            "message": "Queue is clear. No pending articles found.",
            "stats": stats,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }

    for idx, article in enumerate(pending_articles, start=1):
        row_idx = article.get("_row_idx")
        title = article.get("ARTICLE_TITLE", "")
        publisher = article.get("PUBLISHER", "") or article.get("FEED_NAME", "")
        norm_url = article.get("NORMALIZED_URL", "")
        orig_url = article.get("ORIGINAL_URL", "")
        rss_sum = article.get("RSS_SUMMARY", "")
        rss_desc = article.get("RSS_DESCRIPTION", "")

        logger.info("[%d/%d] Processing row %s: '%s' (%s)", idx, len(pending_articles), row_idx, title, publisher)

        # 1. Claim article as PROCESSING
        if not dry_run and row_idx:
            try:
                sheet_manager.claim_article_processing(row_idx, sheet_headers)
            except Exception as e:
                logger.warning("Could not set PROCESSING status on row %s: %s", row_idx, str(e))

        # 2. Fetch full article text
        content_text, fetch_status, fetch_error = fetch_article_content(
            normalized_url=norm_url,
            original_url=orig_url,
            rss_summary=rss_sum,
            rss_description=rss_desc,
        )

        now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

        if fetch_status == "ERROR" and not content_text:
            logger.error("Failed to fetch article content for row %s: %s", row_idx, fetch_error)
            stats["error_count"] += 1
            if not dry_run and row_idx:
                sheet_manager.save_article_analysis(
                    row_idx=row_idx,
                    analysis_fields={
                        "ANALYSIS_STATUS": "ERROR",
                        "ARTICLE_FETCH_STATUS": "ERROR",
                        "ARTICLE_FETCH_ERROR": fetch_error or "Content inaccessible",
                        "ANALYSIS_DATE": now_iso,
                    },
                    headers=sheet_headers,
                )
            continue

        # 3. Execute Antigravity analysis & scoring
        eval_result = analyze_article(
            article_title=title,
            publisher=publisher,
            content_text=content_text,
            is_fallback_rss=(fetch_status == "FALLBACK_RSS"),
            model=model,
        )

        editorial_status = eval_result.get("EDITORIAL_STATUS", "REJECTED")
        score = eval_result.get("CHECKMARK_RELEVANCE_SCORE", 0)

        # 4. Update stats
        stats["articles_analyzed"] += 1
        if editorial_status == "CANDIDATE":
            stats["candidate_count"] += 1
            stats["highest_scoring_candidates"].append({
                "row_idx": row_idx,
                "title": title,
                "publisher": publisher,
                "score": score,
                "editorial_status": editorial_status,
                "theme": eval_result.get("PRIMARY_CHECKMARK_THEME"),
                "angle": eval_result.get("PROPOSED_ARTICLE_ANGLE"),
                "working_title": eval_result.get("PROPOSED_WORKING_TITLE"),
                "url": norm_url or orig_url,
            })
        elif editorial_status == "WATCH":
            stats["watch_count"] += 1
        else:
            stats["rejected_count"] += 1

        logger.info(
            "Row %s Analyzed: Score=%d/100 -> Status=%s (Signal: %s)",
            row_idx, score, editorial_status, eval_result.get("UNDERLYING_SIGNAL", "")[:60]
        )

        # 5. Save completed analysis fields to Google Sheet
        fields_to_save = {
            "ARTICLE_SUMMARY": eval_result.get("ARTICLE_SUMMARY", ""),
            "UNDERLYING_SIGNAL": eval_result.get("UNDERLYING_SIGNAL", ""),
            "CHECKMARK_RELEVANCE_SCORE": str(score),
            "PRODUCT_ADJACENCY_SCORE": str(eval_result.get("PRODUCT_ADJACENCY_SCORE", 0)),
            "TEACHER_RELEVANCE_SCORE": str(eval_result.get("TEACHER_RELEVANCE_SCORE", 0)),
            "DISTINCTIVE_PERSPECTIVE_SCORE": str(eval_result.get("DISTINCTIVE_PERSPECTIVE_SCORE", 0)),
            "EVIDENCE_QUALITY_SCORE": str(eval_result.get("EVIDENCE_QUALITY_SCORE", 0)),
            "SEARCH_OPPORTUNITY_SCORE": str(eval_result.get("SEARCH_OPPORTUNITY_SCORE", 0)),
            "TIMELINESS_SCORE": str(eval_result.get("TIMELINESS_SCORE", 0)),
            "PRODUCT_CONNECTION_SCORE": str(eval_result.get("PRODUCT_CONNECTION_SCORE", 0)),
            "PRIMARY_CHECKMARK_THEME": eval_result.get("PRIMARY_CHECKMARK_THEME", ""),
            "PROPOSED_ARTICLE_ANGLE": eval_result.get("PROPOSED_ARTICLE_ANGLE", ""),
            "PROPOSED_WORKING_TITLE": eval_result.get("PROPOSED_WORKING_TITLE", ""),
            "ANALYSIS_REASONING": eval_result.get("ANALYSIS_REASONING", ""),
            "EDITORIAL_STATUS": editorial_status,
            "ARTICLE_FETCH_STATUS": fetch_status,
            "ARTICLE_FETCH_ERROR": fetch_error or "",
            "ANALYSIS_STATUS": "COMPLETE",
            "ANALYSIS_DATE": now_iso,
        }

        if not dry_run and row_idx:
            sheet_manager.save_article_analysis(
                row_idx=row_idx,
                analysis_fields=fields_to_save,
                headers=sheet_headers,
            )

    # Sort highest scoring candidates
    stats["highest_scoring_candidates"].sort(key=lambda x: x["score"], reverse=True)

    summary = {
        "status": "SUCCESS",
        "sheet_name": sheet_name,
        "dry_run": dry_run,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "stats": stats,
    }

    # Print clean Completion Summary
    logger.info("==================================================")
    logger.info("Workflow 2 Completion Summary:")
    logger.info("  RSS Feeds Inspected:      %d", stats["feeds_inspected"])
    logger.info("  Articles Analyzed:        %d", stats["articles_analyzed"])
    logger.info("  REJECTED Count:           %d", stats["rejected_count"])
    logger.info("  WATCH Count:              %d", stats["watch_count"])
    logger.info("  CANDIDATE Count:          %d", stats["candidate_count"])
    logger.info("  ERROR Count:              %d", stats["error_count"])
    if stats["highest_scoring_candidates"]:
        logger.info("--------------------------------------------------")
        logger.info("Highest-Scoring Candidates:")
        for c in stats["highest_scoring_candidates"]:
            logger.info("  [%d/100] %s (Publisher: %s)", c["score"], c["title"], c["publisher"])
            if c.get("working_title"):
                logger.info("    Proposed Title: %s", c["working_title"])
            if c.get("angle"):
                logger.info("    Angle:          %s", c["angle"])
    logger.info("==================================================")

    return summary


def main():
    parser = argparse.ArgumentParser(description="Workflow 2: Content Analysis Engine")
    parser.add_argument(
        "--sheet-name",
        default=os.environ.get("RSS_SPREADSHEET_NAME", DEFAULT_SHEET_NAME),
        help=f"Target Google Spreadsheet name (default: {DEFAULT_SHEET_NAME})"
    )
    parser.add_argument(
        "--credentials",
        default=DEFAULT_CREDENTIALS_PATH,
        help="Path to service account credentials.json"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Perform evaluation without updating Google Sheets"
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=0,
        help="Max number of pending articles to evaluate"
    )
    parser.add_argument(
        "--model",
        default=DEFAULT_MODEL,
        help=f"Ollama model name (default: {DEFAULT_MODEL})"
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Output raw JSON summary to stdout"
    )

    args = parser.parse_args()

    res = run_content_analysis(
        sheet_name=args.sheet_name,
        credentials_path=args.credentials,
        dry_run=args.dry_run,
        limit=args.limit,
        model=args.model,
    )

    if args.json:
        print(json.dumps(res, indent=2))

    sys.exit(0 if res.get("status") in ("SUCCESS", "NO_PENDING_ARTICLES") else 1)


if __name__ == "__main__":
    main()
