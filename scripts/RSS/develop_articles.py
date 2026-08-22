"""
Workflow 3 — RSS Article Development Orchestrator (RSS_ARTICLE_DEVELOPMENT).

Takes CANDIDATE records from RSS_ARTICLES, claims them, develops the strongest
Checkmark-specific angle across 8 phases, writes a complete educational Markdown article,
saves it to content/rss_drafts/<slug>.md, and updates the Google Sheet with full development metadata.

Usage:
    python scripts/RSS/develop_articles.py [--sheet-name RSS_CONTENT_SCOUT] [--dry-run] [--limit 5]
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
        DEFAULT_MODEL,
        DRAFTS_DIR,
    )
    from .sheet_manager import SheetManager, SCHEMA_COLUMNS, DEFAULT_SHEET_NAME, DEFAULT_CREDENTIALS_PATH
except ImportError:
    from article_fetcher import fetch_article_content
    from article_developer import (
        slugify_title,
        generate_pipeline_id,
        evaluate_candidate_viability,
        generate_three_angles,
        select_strongest_angle,
        verify_research_sources,
        build_content_brief,
        write_article_draft,
        save_markdown_draft,
        DEFAULT_MODEL,
        DRAFTS_DIR,
    )
    from sheet_manager import SheetManager, SCHEMA_COLUMNS, DEFAULT_SHEET_NAME, DEFAULT_CREDENTIALS_PATH

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger("RSS_Content_Scout.ArticleDeveloper")


def run_article_development(
    sheet_name: str = DEFAULT_SHEET_NAME,
    credentials_path: str = DEFAULT_CREDENTIALS_PATH,
    dry_run: bool = False,
    limit: int = 0,
    model: str = DEFAULT_MODEL,
) -> Dict[str, Any]:
    """
    Executes Workflow 3: RSS Article Development.

    Returns:
        Structured completion summary dictionary.
    """
    logger.info("==================================================")
    logger.info("Starting Workflow 3: RSS Article Development")
    logger.info("Target Spreadsheet: %s", sheet_name)
    logger.info("Credentials Path:   %s", credentials_path)
    logger.info("Evaluation Model:   %s", model)
    logger.info("Dry Run Mode:       %s", dry_run)
    logger.info("==================================================")

    sheet_manager = SheetManager(sheet_name=sheet_name, credentials_path=credentials_path)
    candidates: List[Dict[str, Any]] = []
    sheet_headers = SCHEMA_COLUMNS

    try:
        logger.info("Connecting to Google Sheets...")
        sheet_manager.connect()
        sheet_manager.init_worksheets()
        candidates, sheet_headers = sheet_manager.get_development_candidates()
        logger.info("Found %d CANDIDATE record(s) ready for development.", len(candidates))
    except Exception as e:
        if not dry_run:
            logger.error("Failed to connect to Google Sheets: %s", str(e))
            return {
                "status": "ERROR",
                "error": str(e),
                "timestamp": datetime.now(timezone.utc).isoformat(),
            }
        else:
            logger.warning("Could not connect to Google Sheets (%s). Running dry-run with sample candidate.", str(e))
            candidates = [
                {
                    "_row_idx": None,
                    "ARTICLE_ID": "art_g_sample123",
                    "ARTICLE_TITLE": "School Districts Adopt Multi-Evidence Standards for AI Writing Investigations",
                    "PUBLISHER": "Education Week",
                    "FEED_NAME": "EdTech Policy News",
                    "ORIGINAL_URL": "https://example.com/ai-writing-policy",
                    "NORMALIZED_URL": "https://example.com/ai-writing-policy",
                    "RSS_SUMMARY": "Secondary school districts across the country are updating student academic integrity guidelines to require keystroke dynamics and document revision timelines before issuing penalties for AI writing, replacing single-score detector reliance.",
                    "CHECKMARK_RELEVANCE_SCORE": "88",
                    "EDITORIAL_STATUS": "CANDIDATE",
                    "PRIMARY_CHECKMARK_THEME": "Writing-Process Evidence & Authorship Verification",
                    "PROPOSED_ARTICLE_ANGLE": "How high school English departments use writing process evidence to replace adversarial AI detector accusations.",
                    "WORKING_ARTICLE_TITLE": "Why High Schools Are Moving Beyond AI Detector Percentages to Writing-Process Evidence",
                    "CONTENT_PIPELINE_ID": "pipe_sample123",
                }
            ]

    if limit > 0 and len(candidates) > limit:
        logger.info("Limiting development to %d candidate(s).", limit)
        candidates = candidates[:limit]

    stats = {
        "candidates_found": len(candidates),
        "candidates_processed": 0,
        "rejected_deeper_review": 0,
        "rejected_insufficient_evidence": 0,
        "drafts_created": 0,
        "errors_encountered": 0,
        "created_articles": [],
    }

    if not candidates:
        logger.info("No eligible CANDIDATE records found in queue.")
        return {
            "status": "NO_CANDIDATES",
            "message": "Queue is clear. No candidate articles awaiting development.",
            "stats": stats,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }

    for idx, candidate in enumerate(candidates, start=1):
        row_idx = candidate.get("_row_idx")
        title = candidate.get("ARTICLE_TITLE", "")
        publisher = candidate.get("PUBLISHER", "") or candidate.get("FEED_NAME", "")
        article_id = candidate.get("ARTICLE_ID", "")
        norm_url = candidate.get("NORMALIZED_URL", "")
        orig_url = candidate.get("ORIGINAL_URL", "")
        pipeline_id = candidate.get("CONTENT_PIPELINE_ID") or generate_pipeline_id(article_id)

        logger.info("[%d/%d] Developing Candidate Row %s: '%s' (%s)", idx, len(candidates), row_idx, title, publisher)
        stats["candidates_processed"] += 1

        # 1. Claim candidate as PROCESSING
        if not dry_run and row_idx:
            try:
                sheet_manager.claim_candidate_development(row_idx, sheet_headers)
            except Exception as e:
                logger.warning("Could not claim DEVELOPMENT_STATUS on row %s: %s", row_idx, str(e))

        try:
            # Fetch full content
            content_text, fetch_status, _ = fetch_article_content(
                normalized_url=norm_url,
                original_url=orig_url,
                rss_summary=candidate.get("RSS_SUMMARY", ""),
                rss_description=candidate.get("RSS_DESCRIPTION", ""),
            )

            # Phase 1: Re-evaluate Source Substance
            is_viable, viability_reason = evaluate_candidate_viability(candidate, content_text)
            now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

            if not is_viable:
                logger.info("Row %s REJECTED during deeper review: %s", row_idx, viability_reason)
                stats["rejected_deeper_review"] += 1
                if not dry_run and row_idx:
                    sheet_manager.save_article_development(
                        row_idx=row_idx,
                        development_fields={
                            "DEVELOPMENT_STATUS": "REJECTED",
                            "DEVELOPMENT_DATE": now_iso,
                            "DEVELOPMENT_REASONING": viability_reason,
                            "CONTENT_PIPELINE_ID": pipeline_id,
                        },
                        headers=sheet_headers,
                    )
                continue

            # Phase 2: Develop 3 Distinct Angles
            logger.info("Generating 3 educator-focused angles for '%s'...", title)
            angles = generate_three_angles(candidate, content_text, model=model)

            # Phase 3: Select Strongest Angle
            selected_angle, selection_reasoning = select_strongest_angle(angles, candidate)
            selected_title = selected_angle.get("working_title", title)
            selected_question = selected_angle.get("primary_question", "")
            selected_thesis = selected_angle.get("thesis", "")
            logger.info("Selected Angle: '%s'", selected_title)

            # Phase 4: Research the Topic
            has_evidence, verified_sources, research_notes = verify_research_sources(selected_angle, candidate, content_text)
            if not has_evidence:
                logger.warning("Row %s REJECTED due to insufficient evidence: %s", row_idx, research_notes)
                stats["rejected_insufficient_evidence"] += 1
                if not dry_run and row_idx:
                    sheet_manager.save_article_development(
                        row_idx=row_idx,
                        development_fields={
                            "DEVELOPMENT_STATUS": "REJECTED",
                            "DEVELOPMENT_DATE": now_iso,
                            "RESEARCH_STATUS": "INSUFFICIENT",
                            "DEVELOPMENT_REASONING": f"Insufficient evidence: {research_notes}",
                            "CONTENT_PIPELINE_ID": pipeline_id,
                        },
                        headers=sheet_headers,
                    )
                continue

            # Phase 5: Create Content Brief
            brief = build_content_brief(selected_angle, candidate, verified_sources)

            # Phase 6: Write Complete Checkmark Article
            logger.info("Writing complete Checkmark article draft...")
            article_body = write_article_draft(brief, verified_sources, model=model)

            # Phase 7: Save Article as Markdown
            rel_md_path = save_markdown_draft(
                title=selected_title,
                article_body=article_body,
                sources=verified_sources,
                internal_links=brief.get("internal_link_opportunities", []),
                brief=brief,
                article_id=article_id,
            )

            # Phase 8: Update RSS_ARTICLES
            stats["drafts_created"] += 1
            stats["created_articles"].append({
                "final_title": selected_title,
                "primary_question": selected_question,
                "rss_source_article": f"{title} ({publisher})",
                "markdown_file_path": rel_md_path,
                "primary_theme": brief.get("primary_checkmark_theme"),
                "pipeline_id": pipeline_id,
            })

            if not dry_run and row_idx:
                sheet_manager.save_article_development(
                    row_idx=row_idx,
                    development_fields={
                        "DEVELOPMENT_STATUS": "DRAFT_CREATED",
                        "DEVELOPMENT_DATE": now_iso,
                        "SELECTED_ARTICLE_TITLE": selected_title,
                        "SELECTED_ARTICLE_QUESTION": selected_question,
                        "SELECTED_ARTICLE_THESIS": selected_thesis,
                        "RESEARCH_STATUS": "COMPLETE",
                        "ARTICLE_MD_PATH": rel_md_path,
                        "CONTENT_PIPELINE_ID": pipeline_id,
                        "DEVELOPMENT_REASONING": selection_reasoning,
                    },
                    headers=sheet_headers,
                )
                logger.info("Row %s updated with DEVELOPMENT_STATUS = DRAFT_CREATED", row_idx)

        except Exception as e:
            logger.error("Error developing candidate row %s: %s", row_idx, str(e), exc_info=True)
            stats["errors_encountered"] += 1
            now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
            if not dry_run and row_idx:
                sheet_manager.save_article_development(
                    row_idx=row_idx,
                    development_fields={
                        "DEVELOPMENT_STATUS": "ERROR",
                        "DEVELOPMENT_DATE": now_iso,
                        "DEVELOPMENT_ERROR": str(e),
                        "CONTENT_PIPELINE_ID": pipeline_id,
                    },
                    headers=sheet_headers,
                )

    summary = {
        "status": "SUCCESS",
        "sheet_name": sheet_name,
        "dry_run": dry_run,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "stats": stats,
    }

    # Print clean Completion Report
    logger.info("==================================================")
    logger.info("Workflow 3 Completion Report:")
    logger.info("  CANDIDATE Records Found:                %d", stats["candidates_found"])
    logger.info("  Candidates Processed:                   %d", stats["candidates_processed"])
    logger.info("  Rejected (Deeper Review):               %d", stats["rejected_deeper_review"])
    logger.info("  Rejected (Insufficient Evidence):       %d", stats["rejected_insufficient_evidence"])
    logger.info("  Markdown Drafts Created:                %d", stats["drafts_created"])
    logger.info("  Errors Encountered:                     %d", stats["errors_encountered"])
    if stats["created_articles"]:
        logger.info("--------------------------------------------------")
        logger.info("Created Checkmark Articles:")
        for a in stats["created_articles"]:
            logger.info("  * Title:      %s", a["final_title"])
            logger.info("    Question:   %s", a["primary_question"])
            logger.info("    Source:     %s", a["rss_source_article"])
            logger.info("    Path:       %s", a["markdown_file_path"])
            logger.info("    Theme:      %s", a["primary_theme"])
            logger.info("    Pipeline:   %s", a["pipeline_id"])
    logger.info("==================================================")

    return summary


def main():
    parser = argparse.ArgumentParser(description="Workflow 3: RSS Article Development Engine")
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
        help="Develop drafts without updating Google Sheets"
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=0,
        help="Max number of candidates to develop"
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

    res = run_article_development(
        sheet_name=args.sheet_name,
        credentials_path=args.credentials,
        dry_run=args.dry_run,
        limit=args.limit,
        model=args.model,
    )

    if args.json:
        print(json.dumps(res, indent=2))

    sys.exit(0 if res.get("status") in ("SUCCESS", "NO_CANDIDATES") else 1)


if __name__ == "__main__":
    main()
