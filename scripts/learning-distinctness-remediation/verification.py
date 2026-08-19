import os
import sys
from typing import Dict, Any, Tuple

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
VEC_SCRIPT_DIR = os.path.join(PROJECT_ROOT, "scripts", "learning-vectorization")
DIST_SCRIPT_DIR = os.path.join(PROJECT_ROOT, "scripts", "learning-distinctness")

if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)
if VEC_SCRIPT_DIR not in sys.path:
    sys.path.insert(0, VEC_SCRIPT_DIR)
if DIST_SCRIPT_DIR not in sys.path:
    sys.path.insert(0, DIST_SCRIPT_DIR)

from extractor import extract_post_data
from persistence import (
    get_sibling_distinctness_path,
    read_distinctness_md,
    serialize_distinctness_md,
    write_distinctness_md
)
from vectorizer import process_single_post as vec_process_post
from corpus_loader import load_vectorized_corpus as dist_load_corpus
from matrix_engine import compute_corpus_similarity_matrix
from frontmatter_sync import sync_distinctness_file
from change_log import log_remediation_change

def verify_remediation(
    candidate: Dict[str, Any],
    domain_applied: str,
    project_root: str
) -> Dict[str, Any]:
    """
    Executes Workflow 1 (re-vectorization) and Workflow 2 (corpus re-scoring)
    to verify uniqueness improvement on the remediated post.
    """
    file_path = candidate["file_path"]
    route = candidate["route"]
    before_metrics = {
        "uniqueness_score": candidate.get("uniqueness_score", 0.0),
        "combined_similarity": candidate.get("combined_similarity", 0.0),
        "top_chunk_overlap": candidate.get("distinctness_data", {}).get("frontmatter", {}).get("top_chunk_overlap", 0.0),
        "whole_page_top5_similarity": candidate.get("distinctness_data", {}).get("frontmatter", {}).get("whole_page_top5_similarity", 0.0),
        "action": candidate.get("distinctness_data", {}).get("frontmatter", {}).get("action", "remediation_candidate")
    }

    current_attempts = candidate.get("remediation_attempts", 0) + 1

    # 1. Re-extract fresh post data
    fresh_post = extract_post_data(file_path, project_root)

    # 2. Re-vectorize post via Workflow 1 (force re-embedding)
    vec_result = vec_process_post(fresh_post, dry_run=False, force=True)

    # 3. Re-score corpus via Workflow 2
    corpus = dist_load_corpus(project_root)
    scored_results = compute_corpus_similarity_matrix(corpus)

    # Find fresh score for our candidate
    matching_scored = [r for r in scored_results if r["route"] == route]
    if not matching_scored:
        raise RuntimeError(f"Failed to find candidate post in scored corpus: {route}")

    new_scored = matching_scored[0]
    new_uniqueness = new_scored["uniqueness_score"]
    old_uniqueness = before_metrics["uniqueness_score"]
    score_delta = new_uniqueness - old_uniqueness

    # Acceptance criteria: Uniqueness Score >= 60 OR increase >= +10
    passed = (new_uniqueness >= 60.0) or (score_delta >= 10.0)

    if passed:
        remediation_status = "passed"
        final_action = "none" if new_uniqueness >= 60.0 else "observe"
    else:
        if current_attempts >= 2:
            remediation_status = "max_attempts_reached"
            final_action = "manual_review"
        else:
            remediation_status = "in_progress"
            final_action = "remediation_candidate"

    new_scored["action"] = final_action

    # Sync all distinctness files
    for item in scored_results:
        # For the candidate, update attempts and remediation status
        if item["route"] == route:
            item["post_data"]["frontmatter"]["remediation_attempts"] = current_attempts
            item["post_data"]["frontmatter"]["remediation_status"] = remediation_status
        sync_distinctness_file(item, dry_run=False)

    after_metrics = {
        "uniqueness_score": new_uniqueness,
        "combined_similarity": new_scored["combined_similarity"],
        "top_chunk_overlap": new_scored["top_chunk_overlap"],
        "whole_page_top5_similarity": new_scored["whole_page_top5_similarity"],
        "action": final_action
    }

    # 4. Log the result to audit log
    log_remediation_change(
        project_root=project_root,
        candidate_route=route,
        competitor_route=candidate.get("nearest_competitor", "N/A"),
        domain_applied=domain_applied,
        before_metrics=before_metrics,
        after_metrics=after_metrics,
        status=remediation_status,
        notes=f"Attempt {current_attempts} of 2. Delta: {score_delta:+.2f} points."
    )

    return {
        "route": route,
        "passed": passed,
        "status": remediation_status,
        "action": final_action,
        "attempts": current_attempts,
        "before_metrics": before_metrics,
        "after_metrics": after_metrics,
        "score_delta": score_delta
    }
