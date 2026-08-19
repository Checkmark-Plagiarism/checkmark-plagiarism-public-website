import os
import sys
from typing import Dict, List, Any

# Ensure scripts root is accessible
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
VEC_SCRIPT_DIR = os.path.join(PROJECT_ROOT, "scripts", "learning-vectorization")
if VEC_SCRIPT_DIR not in sys.path:
    sys.path.insert(0, VEC_SCRIPT_DIR)

from persistence import serialize_distinctness_md, write_distinctness_md

def sync_distinctness_file(scored_item: Dict[str, Any], dry_run: bool = False) -> str:
    """
    Updates the sibling distinctness.md file with freshly calculated similarity scores,
    uniqueness rank, action flag, top-5 table, and per-chunk competitor matches.
    """
    post_data = scored_item["post_data"]
    file_path = post_data.get("distinctness_file_path")
    if not file_path:
        page_file = post_data.get("file_path", "")
        file_path = os.path.join(os.path.dirname(os.path.abspath(page_file)), "distinctness.md")

    chunks = post_data.get("chunks", [])
    chunk_matches = scored_item.get("chunk_competitor_matches", [])

    # Annotate chunks with competitor matches
    for idx, c in enumerate(chunks):
        if idx < len(chunk_matches):
            c["best_competitor_match"] = chunk_matches[idx]["competitor_route"]
            c["best_competitor_similarity"] = chunk_matches[idx]["similarity"]

    frontmatter = post_data.get("frontmatter", {})
    remediation_attempts = frontmatter.get("remediation_attempts", 0)
    remediation_status = frontmatter.get("remediation_status", "not_needed")

    md_content = serialize_distinctness_md(
        post_data=post_data,
        chunks=chunks,
        page_vector=post_data.get("page_vector", []),
        uniqueness_score=scored_item["uniqueness_score"],
        combined_similarity=scored_item["combined_similarity"],
        whole_page_top5_similarity=scored_item["whole_page_top5_similarity"],
        top_chunk_overlap=scored_item["top_chunk_overlap"],
        action=scored_item["action"],
        nearest_competitor=scored_item["nearest_competitor"],
        similar_pages=scored_item["top5_similar_pages"],
        remediation_attempts=remediation_attempts,
        remediation_status=remediation_status,
        content_hash=frontmatter.get("content_hash", post_data.get("content_hash", ""))
    )

    if not dry_run:
        write_distinctness_md(file_path, md_content)

    return file_path
