import os
import sys
import argparse
from typing import Optional, Dict, Any

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

from extractor import get_project_root, extract_post_data
from persistence import read_distinctness_md, get_sibling_distinctness_path
from candidate_selection import get_remediation_candidates, select_next_candidate
from remediation import remediate_page_content
from verification import verify_remediation
from count_logger import log_actionable_count, run_count_monitor, get_counts_log_path

def main():
    parser = argparse.ArgumentParser(description="Workflow 3: Checkmark Plagiarism Learning Post Remediation & Verification")
    parser.add_argument("--next", action="store_true", help="Select and process the highest-priority junior candidate post")
    parser.add_argument("--dry-run", action="store_true", help="Preview selected candidate without making file modifications")
    parser.add_argument("--page", type=str, default=None, help="Target a specific learning post by route or path")
    parser.add_argument("--count", action="store_true", help="Compute current actionable post counts and log to logs/learning-distinctness-remediation-counts.log")
    parser.add_argument("--monitor", "--count-loop", action="store_true", dest="monitor", help="Run 10-minute periodic monitor counting actionable remediation posts")
    parser.add_argument("--interval", type=int, default=600, help="Interval in seconds for periodic monitor (default: 600 seconds / 10 minutes)")
    parser.add_argument("--max-iterations", type=int, default=None, help="Maximum iterations for monitor loop (default: unlimited)")
    parser.add_argument("--log-file", type=str, default=None, help="Custom log file path for remediation counts")

    args = parser.parse_args()
    root = get_project_root()

    print(f"=== Workflow 3: Learning Post Remediation & Verification ===")
    print(f"Project root: {root}")

    if args.count:
        summary, log_path = log_actionable_count(
            project_root=root,
            log_file=args.log_file,
            notes="Manual CLI --count request"
        )
        print(f"\n[COUNT RECORDED] Total Actionable Posts Needing Remediation: {summary['actionable_count']}")
        print(f"  - Junior Candidates (Priority): {summary['junior_actionable_count']}")
        print(f"  - Senior Candidates: {summary['senior_actionable_count']}")
        print(f"  - Total Posts: {summary['total_posts']}")
        print(f"  - Distinct / Passing: {summary['distinct_passing_count']}")
        print(f"  - Observing: {summary['observing_count']}")
        print(f"  - Exhausted / Manual Review: {summary['manual_review_count']}")
        if summary.get("top_candidate"):
            print(f"  - Top Next Candidate: {summary['top_candidate']['route']} (Score: {summary['top_candidate']['uniqueness_score']:.2f}/100)")
        print(f"Audit log updated at: {log_path}")
        return

    if args.monitor:
        run_count_monitor(
            interval_seconds=args.interval,
            project_root=root,
            max_iterations=args.max_iterations,
            log_file=args.log_file
        )
        return

    if not args.next and not args.page:
        print("Please specify --next, --page=<route>, --count, or --monitor.")
        sys.exit(0)

    target_candidate = None

    if args.page:
        target_route = args.page.strip()
        candidates = get_remediation_candidates(root)
        matched = [c for c in candidates if c["route"] == target_route or c["slug"] == target_route or target_route in c["route"]]
        if matched:
            target_candidate = matched[0]
        else:
            # Check if post exists even if not flagged in candidate list
            dist_candidates = get_remediation_candidates(root)
            print(f"Note: Post '{target_route}' is not currently in the active candidate queue.")
            # Build ad-hoc candidate record if distinctness file exists
            all_posts = [p for p in dist_candidates if target_route in p["route"]]
            if not all_posts:
                print(f"Error: Could not locate post '{target_route}'.")
                sys.exit(1)
            target_candidate = all_posts[0]
    else:
        target_candidate = select_next_candidate(root)

    if not target_candidate:
        print("No candidates currently flagged for remediation (action: remediation_candidate with attempts < 2).")
        print("All learning center articles meet uniqueness thresholds!")
        sys.exit(0)

    print(f"\n--- Selected Candidate ---")
    print(f"Route: {target_candidate['route']}")
    print(f"Title: {target_candidate['title']}")
    print(f"Seniority Date: {target_candidate['seniority_date']} (Junior Precedence: {target_candidate['is_junior']})")
    print(f"Uniqueness Score: {target_candidate['uniqueness_score']:.2f} / 100")
    print(f"Nearest Senior Competitor: {target_candidate['nearest_competitor']} ({target_candidate['competitor_seniority_date']})")
    print(f"Remediation Attempts: {target_candidate['remediation_attempts']} / 2")

    if args.dry_run:
        print("\n[DRY-RUN COMPLETE] Candidate previewed without modifying files.")
        return

    print("\n[1/3] Diagnosing overlap & injecting Checkmark domain differentiators into page.tsx...")
    rem_res = remediate_page_content(target_candidate["file_path"], target_candidate)
    domain_applied = rem_res["domain"]
    print(f"Injected section: '{rem_res['section_added']}' (Domain: {domain_applied})")

    print("\n[2/3] Re-vectorizing page and re-scoring corpus similarity matrix...")
    ver_res = verify_remediation(target_candidate, domain_applied, root)

    print("\n[3/3] Verification Results:")
    print(f"Status: {ver_res['status'].upper()}")
    print(f"New Action: {ver_res['action']}")
    print(f"Uniqueness Score: {ver_res['before_metrics']['uniqueness_score']:.2f} -> {ver_res['after_metrics']['uniqueness_score']:.2f} ({ver_res['score_delta']:+.2f} points)")
    print(f"Combined Similarity: {ver_res['before_metrics']['combined_similarity']:.4f} -> {ver_res['after_metrics']['combined_similarity']:.4f}")
    print(f"Audit log updated at: logs/learning-distinctness-changes.md")

if __name__ == "__main__":
    main()
