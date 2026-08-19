import os
import sys
from typing import List, Dict, Any, Optional

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
VEC_SCRIPT_DIR = os.path.join(PROJECT_ROOT, "scripts", "learning-vectorization")
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)
if VEC_SCRIPT_DIR not in sys.path:
    sys.path.insert(0, VEC_SCRIPT_DIR)

from extractor import discover_learning_posts, get_project_root
from persistence import read_distinctness_md, get_sibling_distinctness_path

def get_remediation_candidates(project_root: Optional[str] = None) -> List[Dict[str, Any]]:
    """
    Finds all learning posts flagged with action: remediation_candidate and remediation_attempts < 2.
    Applies Chronological Seniority Precedence:
    - Identifies competitor post's seniority date.
    - Determines if candidate is junior (newer) than competitor.
    - Sorts queue prioritizing junior candidates with the lowest uniqueness scores.
    """
    if project_root is None:
        project_root = get_project_root()

    all_posts = discover_learning_posts(project_root)
    # Map routes to post descriptors for fast date lookups
    posts_by_route = {p["route"]: p for p in all_posts}

    candidates = []

    for post in all_posts:
        dist_path = get_sibling_distinctness_path(post["file_path"])
        dist_data = read_distinctness_md(dist_path)
        if not dist_data:
            continue

        fm = dist_data.get("frontmatter", {})
        action = fm.get("action", "none")
        attempts = fm.get("remediation_attempts", 0)

        if action == "remediation_candidate" and attempts < 2:
            uniqueness_score = fm.get("uniqueness_score", 0.0) or 0.0
            combined_sim = fm.get("combined_similarity", 0.0) or 0.0
            nearest_comp_route = fm.get("nearest_competitor", "N/A")
            cand_date = post.get("seniority_date", "2026-01-01")

            # Check competitor seniority
            comp_post = posts_by_route.get(nearest_comp_route)
            comp_date = comp_post.get("seniority_date", "") if comp_post else ""

            # Is this candidate junior (newer) to the competitor?
            # e.g. "2026-08-01" > "2026-06-01" -> cand is junior (True)
            if comp_date:
                is_junior = cand_date >= comp_date
            else:
                is_junior = True

            candidates.append({
                "route": post["route"],
                "slug": post["slug"],
                "file_path": post["file_path"],
                "distinctness_file_path": dist_path,
                "title": post["title"],
                "seniority_date": cand_date,
                "uniqueness_score": uniqueness_score,
                "combined_similarity": combined_sim,
                "nearest_competitor": nearest_comp_route,
                "competitor_seniority_date": comp_date,
                "is_junior": is_junior,
                "remediation_attempts": attempts,
                "remediation_status": fm.get("remediation_status", "not_needed"),
                "post_data": post,
                "distinctness_data": dist_data
            })

    # Sort queue:
    # 1. Junior precedence (is_junior True first)
    # 2. Lowest uniqueness score ascending (most urgent overlap first)
    # 3. Seniority date descending (newest post first)
    candidates.sort(
        key=lambda c: (
            0 if c["is_junior"] else 1,
            c["uniqueness_score"],
            # reverse string sort for newest date first:
            "".join(chr(255 - ord(char)) for char in c["seniority_date"])
        )
    )

    return candidates

def select_next_candidate(project_root: Optional[str] = None) -> Optional[Dict[str, Any]]:
    """Selects the highest priority remediation candidate from the queue."""
    candidates = get_remediation_candidates(project_root)
    return candidates[0] if candidates else None
