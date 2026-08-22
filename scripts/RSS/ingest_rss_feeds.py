"""
Main RSS Ingestion Orchestrator for RSS Content Scout.

Retrieves all RSS/Atom feeds from the 'RSS' sheet, parses articles, normalizes URLs,
generates stable ARTICLE_IDs, performs duplicate detection, batch inserts newly discovered articles
as PENDING, updates metadata on existing articles, and strictly preserves Antigravity analysis fields.

Usage:
    python scripts/RSS/ingest_rss_feeds.py [--sheet-name RSS_CONTENT_SCOUNT] [--dry-run] [--feed-url URL]
"""
import sys
import os
import argparse
import json
import logging
from datetime import datetime, timezone
from typing import Dict, Any, List

# Ensure scripts directory and package are in sys.path
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(os.path.dirname(SCRIPT_DIR))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)
if os.path.dirname(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, os.path.dirname(SCRIPT_DIR))

from url_normalizer import normalize_url
from article_id import generate_article_id
from duplicate_detector import DuplicateDetector
from feed_parser import fetch_and_parse_feed
from sheet_manager import SheetManager, SCHEMA_COLUMNS, DEFAULT_SHEET_NAME, DEFAULT_CREDENTIALS_PATH

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger("RSS_Content_Scout")


def run_ingestion(
    sheet_name: str = DEFAULT_SHEET_NAME,
    credentials_path: str = DEFAULT_CREDENTIALS_PATH,
    single_feed_url: str = "",
    dry_run: bool = False,
    limit_feeds: int = 0,
) -> Dict[str, Any]:
    """
    Executes the RSS ingestion workflow.

    Returns:
        Structured dictionary summarizing run statistics.
    """
    logger.info("==================================================")
    logger.info("Starting RSS_CONTENT_SCOUNT Ingestion Engine")
    logger.info("Target Spreadsheet: %s", sheet_name)
    logger.info("Credentials Path:   %s", credentials_path)
    logger.info("Dry Run Mode:       %s", dry_run)
    logger.info("==================================================")

    sheet_manager = SheetManager(sheet_name=sheet_name, credentials_path=credentials_path)
    feeds_to_process: List[Dict[str, str]] = []
    existing_articles: List[Dict[str, Any]] = []
    sheet_headers = SCHEMA_COLUMNS

    if not dry_run or not single_feed_url:
        try:
            logger.info("Connecting to Google Sheets...")
            sheet_manager.connect()
            sheet_manager.init_worksheets()
            existing_articles, sheet_headers = sheet_manager.get_existing_articles()
            logger.info("Loaded %d existing article(s) from RSS_ARTICLES sheet.", len(existing_articles))
            
            if not single_feed_url:
                feeds_to_process = sheet_manager.get_feed_urls()
                logger.info("Found %d feed URL(s) in RSS sheet.", len(feeds_to_process))
        except Exception as e:
            if not single_feed_url and not dry_run:
                logger.error("Failed to connect or initialize Google Sheets: %s", str(e))
                return {
                    "status": "ERROR",
                    "error": str(e),
                    "timestamp": datetime.now(timezone.utc).isoformat(),
                }
            else:
                logger.warning("Could not connect to Google Sheets (%s). Continuing in standalone mode.", str(e))

    if single_feed_url:
        feeds_to_process = [{"feed_url": single_feed_url.strip(), "feed_name": "", "publisher": ""}]

    if limit_feeds > 0:
        feeds_to_process = feeds_to_process[:limit_feeds]

    if not feeds_to_process:
        logger.warning("No RSS feeds to process. (Column A of RSS sheet is empty or no feed specified).")
        return {
            "status": "EMPTY_FEED_LIST",
            "message": "No feeds found to ingest.",
            "counts": {
                "feeds_processed": 0,
                "new_articles_inserted": 0,
                "existing_articles_updated": 0,
                "duplicates_skipped": 0,
            }
        }

    detector = DuplicateDetector(existing_articles)

    stats = {
        "feeds_total": len(feeds_to_process),
        "feeds_succeeded": 0,
        "feeds_failed": 0,
        "total_entries_parsed": 0,
        "new_articles_inserted": 0,
        "existing_articles_updated": 0,
        "duplicates_skipped": 0,
        "malformed_skipped": 0,
        "feed_errors": [],
    }

    new_articles_to_insert: List[Dict[str, Any]] = []
    updates_by_row: Dict[int, Dict[str, Any]] = {}

    for feed_info in feeds_to_process:
        url = feed_info["feed_url"]
        fb_name = feed_info.get("feed_name", "")
        fb_pub = feed_info.get("publisher", "")

        logger.info("Processing Feed: %s", url)
        feed_meta, entries, error_msg = fetch_and_parse_feed(
            feed_url=url,
            fallback_feed_name=fb_name,
            fallback_publisher=fb_pub
        )

        if error_msg:
            logger.warning("Feed Error on '%s': %s", url, error_msg)
            stats["feeds_failed"] += 1
            stats["feed_errors"].append({"feed_url": url, "error": error_msg})
            continue

        stats["feeds_succeeded"] += 1
        stats["total_entries_parsed"] += len(entries)
        logger.info("Parsed %d entry/entries from '%s' (%s)", len(entries), feed_meta.get("FEED_NAME"), url)

        for entry in entries:
            # Check minimum identity
            if not entry.get("ARTICLE_TITLE") and not entry.get("ORIGINAL_URL") and not entry.get("RSS_GUID"):
                stats["malformed_skipped"] += 1
                continue

            existing_match, match_tier = detector.find_existing(entry)

            if existing_match:
                stats["duplicates_skipped"] += 1
                row_idx = existing_match.get("_row_idx")
                
                # Check for allowed metadata updates
                field_updates = detector.compute_metadata_updates(existing_match, entry)
                if field_updates and row_idx:
                    if row_idx not in updates_by_row:
                        updates_by_row[row_idx] = {}
                    updates_by_row[row_idx].update(field_updates)
                    stats["existing_articles_updated"] += 1
                    logger.debug("Row %d (%s) metadata updated via %s: %s", row_idx, entry.get("ARTICLE_ID"), match_tier, list(field_updates.keys()))
            else:
                # Newly discovered article
                entry["ANALYSIS_STATUS"] = "PENDING"
                entry["ARTICLE_FETCH_STATUS"] = "SUCCESS"
                new_articles_to_insert.append(entry)
                stats["new_articles_inserted"] += 1
                
                # Index in memory immediately to prevent duplicates within the same batch
                detector.index_row(entry)

    # Perform Google Sheets sync if not dry run
    if not dry_run:
        if new_articles_to_insert:
            logger.info("Appending %d new article(s) to RSS_ARTICLES...", len(new_articles_to_insert))
            sheet_manager.append_new_articles(new_articles_to_insert)
            logger.info("Successfully appended %d new article(s).", len(new_articles_to_insert))

        if updates_by_row:
            logger.info("Batch updating metadata for %d existing article(s)...", len(updates_by_row))
            sheet_manager.batch_update_articles(updates_by_row, sheet_headers)
            logger.info("Successfully updated %d existing article(s).", len(updates_by_row))
    else:
        logger.info("[DRY RUN] Would insert %d new articles and update %d existing articles.", len(new_articles_to_insert), len(updates_by_row))

    summary = {
        "status": "SUCCESS",
        "sheet_name": sheet_name,
        "dry_run": dry_run,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "stats": stats,
        "new_articles_sample": [
            {
                "article_id": a.get("ARTICLE_ID"),
                "title": a.get("ARTICLE_TITLE"),
                "publisher": a.get("PUBLISHER"),
                "url": a.get("NORMALIZED_URL"),
                "status": a.get("ANALYSIS_STATUS")
            }
            for a in new_articles_to_insert[:5]
        ]
    }

    logger.info("==================================================")
    logger.info("Ingestion Summary:")
    logger.info("  Feeds Succeeded:      %d / %d", stats["feeds_succeeded"], stats["feeds_total"])
    logger.info("  Total Entries:        %d", stats["total_entries_parsed"])
    logger.info("  New Articles Added:   %d (marked PENDING)", stats["new_articles_inserted"])
    logger.info("  Existing Updated:     %d", stats["existing_articles_updated"])
    logger.info("  Duplicates Skipped:   %d", stats["duplicates_skipped"])
    logger.info("==================================================")

    return summary


def main():
    parser = argparse.ArgumentParser(description="RSS Content Scout Ingestion Engine")
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
        "--feed-url",
        default="",
        help="Single RSS feed URL to test/ingest directly"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Parse feeds and display changes without writing to Google Sheets"
    )
    parser.add_argument(
        "--limit-feeds",
        type=int,
        default=0,
        help="Limit number of feeds to process"
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Output raw JSON summary to stdout"
    )

    args = parser.parse_args()

    res = run_ingestion(
        sheet_name=args.sheet_name,
        credentials_path=args.credentials,
        single_feed_url=args.feed_url,
        dry_run=args.dry_run,
        limit_feeds=args.limit_feeds,
    )

    if args.json:
        print(json.dumps(res, indent=2))

    sys.exit(0 if res.get("status") in ("SUCCESS", "EMPTY_FEED_LIST") else 1)


if __name__ == "__main__":
    main()
