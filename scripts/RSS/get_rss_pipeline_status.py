"""
Pipeline Status and Smart Dispatcher for RSS Content Workflows.

Inspects RSS_ARTICLES in Google Sheets and determines the next optimal action:
1. STYLE_PAGE: if 'DRAFT_CREATED' articles exist in content/rss_drafts/
2. DEVELOP_ARTICLE: if 'CANDIDATE' topics exist awaiting article development
3. ANALYZE_ARTICLES: if 'PENDING' articles exist awaiting editorial scoring
4. INGEST_FEEDS: if queue is empty or all articles are processed

Usage:
    python scripts/RSS/get_rss_pipeline_status.py [--sheet-name RSS_CONTENT_SCOUT]
"""
import os
import sys
import json
import argparse
from typing import Dict, Any, List

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)
if os.path.dirname(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, os.path.dirname(SCRIPT_DIR))

try:
    from .sheet_manager import SheetManager, DEFAULT_SHEET_NAME, DEFAULT_CREDENTIALS_PATH
except ImportError:
    from sheet_manager import SheetManager, DEFAULT_SHEET_NAME, DEFAULT_CREDENTIALS_PATH


def get_rss_pipeline_status(
    sheet_name: str = DEFAULT_SHEET_NAME,
    credentials_path: str = DEFAULT_CREDENTIALS_PATH,
) -> Dict[str, Any]:
    """
    Evaluates the current state of the RSS content pipeline in Google Sheets.

    Returns:
        Dictionary containing next_action, counts, and top candidate items.
    """
    sheet_manager = SheetManager(sheet_name=sheet_name, credentials_path=credentials_path)

    try:
        sheet_manager.connect()
        sheet_manager.init_worksheets()
        articles, headers = sheet_manager.get_existing_articles()
    except Exception as e:
        return {
            "status": "ERROR",
            "message": f"Could not connect to Google Sheet '{sheet_name}': {str(e)}",
            "next_action": "INGEST_FEEDS",
            "counts": {
                "total_articles": 0,
                "drafted": 0,
                "candidates": 0,
                "pending_analysis": 0,
                "published": 0,
                "rejected": 0,
            }
        }

    drafted = []
    candidates = []
    pending_analysis = []
    published = []
    rejected = []

    for item in articles:
        row_idx = item.get("_row_idx")
        title = item.get("ARTICLE_TITLE", "")
        analysis_status = (item.get("ANALYSIS_STATUS") or "").strip().upper()
        editorial_status = (item.get("EDITORIAL_STATUS") or "").strip().upper()
        dev_status = (item.get("DEVELOPMENT_STATUS") or "").strip().upper()
        md_path = item.get("ARTICLE_MD_PATH", "")

        if dev_status == "DRAFT_CREATED" or (md_path and os.path.exists(md_path) and dev_status != "COMPLETE"):
            drafted.append({
                "row": row_idx,
                "title": item.get("SELECTED_ARTICLE_TITLE") or title,
                "file_path": md_path,
                "article_id": item.get("ARTICLE_ID"),
                "theme": item.get("PRIMARY_CHECKMARK_THEME"),
            })
        elif editorial_status == "CANDIDATE" and dev_status in ("", "PENDING"):
            candidates.append({
                "row": row_idx,
                "title": title,
                "score": item.get("CHECKMARK_RELEVANCE_SCORE"),
                "article_id": item.get("ARTICLE_ID"),
                "theme": item.get("PRIMARY_CHECKMARK_THEME"),
                "angle": item.get("PROPOSED_ARTICLE_ANGLE"),
            })
        elif analysis_status == "PENDING" or not analysis_status:
            pending_analysis.append({
                "row": row_idx,
                "title": title,
                "publisher": item.get("PUBLISHER"),
                "article_id": item.get("ARTICLE_ID"),
            })
        elif dev_status in ("COMPLETE", "PUBLISHED"):
            published.append({
                "row": row_idx,
                "title": title,
                "published_url": item.get("PUBLISHED_URL"),
            })
        elif editorial_status == "REJECTED" or dev_status == "REJECTED":
            rejected.append({
                "row": row_idx,
                "title": title,
            })

    # Smart Dispatch Decision
    if drafted:
        next_action = "STYLE_PAGE"
        msg = f"Found {len(drafted)} drafted RSS article(s) ready for Next.js styling & publishing. Top: '{drafted[0]['title']}' ({drafted[0]['file_path']})"
    elif candidates:
        next_action = "DEVELOP_ARTICLE"
        msg = f"Found {len(candidates)} approved CANDIDATE topic(s) ready for 8-phase article development. Top: '{candidates[0]['title']}' (Score: {candidates[0]['score']})"
    elif pending_analysis:
        next_action = "ANALYZE_ARTICLES"
        msg = f"Found {len(pending_analysis)} pending RSS article(s) ready for editorial relevance scoring."
    else:
        next_action = "INGEST_FEEDS"
        msg = "Queue is clear. No pending, candidate, or drafted articles. Ready for new RSS feed ingestion."

    return {
        "status": "OK",
        "next_action": next_action,
        "message": msg,
        "counts": {
            "total_articles": len(articles),
            "drafted": len(drafted),
            "candidates": len(candidates),
            "pending_analysis": len(pending_analysis),
            "published": len(published),
            "rejected": len(rejected),
        },
        "top_drafted": drafted[0] if drafted else None,
        "top_candidate": candidates[0] if candidates else None,
        "top_pending": pending_analysis[0] if pending_analysis else None,
    }


def main():
    parser = argparse.ArgumentParser(description="RSS Content Pipeline Status Inspector")
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
        "--json",
        action="store_true",
        help="Output raw JSON summary"
    )

    args = parser.parse_args()
    res = get_rss_pipeline_status(sheet_name=args.sheet_name, credentials_path=args.credentials)
    print(json.dumps(res, indent=2))


if __name__ == "__main__":
    main()
