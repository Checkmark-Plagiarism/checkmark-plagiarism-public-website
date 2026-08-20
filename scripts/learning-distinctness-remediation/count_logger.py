import os
import sys
import time
from datetime import datetime, timezone
from typing import Dict, List, Any, Optional, Tuple

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
from candidate_selection import get_remediation_candidates

DEFAULT_LOG_FILENAME = "learning-distinctness-remediation-counts.log"

def get_counts_log_path(project_root: Optional[str] = None, filename: Optional[str] = None) -> str:
    """Returns the absolute path to the remediation counts log file in the logs directory."""
    if project_root is None:
        project_root = get_project_root()
    logs_dir = os.path.join(project_root, "logs")
    os.makedirs(logs_dir, exist_ok=True)
    target_name = filename if filename else DEFAULT_LOG_FILENAME
    return os.path.join(logs_dir, target_name)

def get_actionable_count_summary(project_root: Optional[str] = None) -> Dict[str, Any]:
    """
    Scans all learning posts and returns comprehensive counts of actionable remediation
    candidates, junior/senior precedence breakdown, and overall corpus state.
    """
    if project_root is None:
        project_root = get_project_root()

    all_posts = discover_learning_posts(project_root)
    candidates = get_remediation_candidates(project_root)

    now_utc = datetime.now(timezone.utc)
    utc_str = now_utc.strftime("%Y-%m-%d %H:%M:%S UTC")
    local_str = datetime.now().astimezone().strftime("%Y-%m-%d %H:%M:%S %Z")

    junior_candidates = [c for c in candidates if c.get("is_junior", True)]
    senior_candidates = [c for c in candidates if not c.get("is_junior", True)]

    # Categorize all posts in corpus
    distinct_passing = 0
    observing = 0
    manual_review = 0
    unvectorized = 0

    for p in all_posts:
        dist_path = get_sibling_distinctness_path(p["file_path"])
        dist_data = read_distinctness_md(dist_path)
        if not dist_data:
            unvectorized += 1
            continue

        fm = dist_data.get("frontmatter", {})
        action = fm.get("action", "none")
        attempts = fm.get("remediation_attempts", 0)

        if action == "none":
            distinct_passing += 1
        elif action == "observe":
            observing += 1
        elif action == "manual_review" or attempts >= 2:
            manual_review += 1

    top_candidate = candidates[0] if candidates else None

    return {
        "timestamp_utc": utc_str,
        "timestamp_local": local_str,
        "total_posts": len(all_posts),
        "actionable_count": len(candidates),
        "junior_actionable_count": len(junior_candidates),
        "senior_actionable_count": len(senior_candidates),
        "distinct_passing_count": distinct_passing,
        "observing_count": observing,
        "manual_review_count": manual_review,
        "unvectorized_count": unvectorized,
        "top_candidate": top_candidate
    }

def format_count_log_entry(summary: Dict[str, Any], notes: str = "") -> str:
    """Formats a structured log entry for the remediation counts log."""
    utc_time = summary.get("timestamp_utc", "")
    local_time = summary.get("timestamp_local", "")
    actionable = summary.get("actionable_count", 0)
    junior = summary.get("junior_actionable_count", 0)
    senior = summary.get("senior_actionable_count", 0)
    total = summary.get("total_posts", 0)
    distinct = summary.get("distinct_passing_count", 0)
    observe = summary.get("observing_count", 0)
    manual_rev = summary.get("manual_review_count", 0)
    unvec = summary.get("unvectorized_count", 0)
    top = summary.get("top_candidate")

    lines = [
        f"## Remediation Queue Count: {utc_time}",
        f"- **Timestamp (UTC)**: `{utc_time}`",
        f"- **Timestamp (Local)**: `{local_time}`",
        f"- **Total Actionable Posts Needing Remediation**: **{actionable}**",
        f"  - **Junior Candidates (Priority Queue)**: {junior}",
        f"  - **Senior Candidates (Secondary Queue)**: {senior}",
        f"- **Total Learning Center Posts**: {total}",
        f"- **Distinct / Passing Articles (Action: `none`)**: {distinct}",
        f"- **Observing Articles (Action: `observe`)**: {observe}",
        f"- **Exhausted / Manual Review (Attempts >= 2)**: {manual_rev}",
        f"- **Unvectorized / Missing Distinctness**: {unvec}",
    ]

    if top:
        top_route = top.get("route", "")
        top_score = top.get("uniqueness_score", 0.0)
        top_attempts = top.get("remediation_attempts", 0)
        top_comp = top.get("nearest_competitor", "N/A")
        lines.append(f"- **Top Next Candidate**: `{top_route}` (Score: {top_score:.2f}/100, Attempts: {top_attempts}/2, Nearest: `{top_comp}`)")
    else:
        lines.append("- **Top Next Candidate**: None (All posts meet distinctness thresholds!)")

    if notes:
        lines.append(f"- **Notes**: {notes}")

    lines.append("")
    lines.append("---")
    lines.append("")
    return "\n".join(lines)

def log_actionable_count(
    project_root: Optional[str] = None,
    log_file: Optional[str] = None,
    notes: str = ""
) -> Tuple[Dict[str, Any], str]:
    """
    Computes current actionable remediation post counts and writes a timestamped record
    to the designated log file in the logs/ directory.
    """
    if project_root is None:
        project_root = get_project_root()

    target_log_path = log_file if log_file else get_counts_log_path(project_root)
    os.makedirs(os.path.dirname(target_log_path), exist_ok=True)

    summary = get_actionable_count_summary(project_root)
    entry_text = format_count_log_entry(summary, notes=notes)

    # Initialize log file with header if creating anew
    if not os.path.exists(target_log_path):
        header = (
            "# Learning Distinctness Remediation Queue Count Log\n\n"
            "Periodic 10-minute audit tracking of actionable learning center posts requiring distinctness remediation.\n\n"
            "---\n\n"
        )
        with open(target_log_path, "w", encoding="utf-8") as f:
            f.write(header)

    with open(target_log_path, "a", encoding="utf-8") as f:
        f.write(entry_text)

    return summary, target_log_path

def run_count_monitor(
    interval_seconds: int = 600,
    project_root: Optional[str] = None,
    max_iterations: Optional[int] = None,
    log_file: Optional[str] = None
) -> None:
    """
    Runs a continuous periodic monitor that counts actionable remediation candidates
    every `interval_seconds` (default: 600 seconds = 10 minutes) and logs to the audit file.
    """
    if project_root is None:
        project_root = get_project_root()

    target_log_path = log_file if log_file else get_counts_log_path(project_root)
    print(f"=== Starting Remediation Count Monitor ===")
    print(f"Interval: {interval_seconds} seconds ({interval_seconds / 60:.1f} minutes)")
    print(f"Audit log target: {target_log_path}")
    print(f"Max iterations: {max_iterations if max_iterations is not None else 'Unlimited (Ctrl+C to stop)'}")
    print(f"---------------------------------------------")

    iteration = 0
    try:
        while True:
            iteration += 1
            print(f"\n[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] [Iteration {iteration}] Scanning learning posts...")
            summary, path = log_actionable_count(
                project_root=project_root,
                log_file=target_log_path,
                notes=f"Monitor iteration #{iteration} (Interval: {interval_seconds}s)"
            )

            actionable = summary['actionable_count']
            junior = summary['junior_actionable_count']
            senior = summary['senior_actionable_count']
            total = summary['total_posts']
            top = summary.get('top_candidate')
            top_info = f" | Next: {top['route']}" if top else ""

            print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] Count recorded: {actionable} actionable posts needing remediation ({junior} junior, {senior} senior) / {total} total posts{top_info}")
            print(f"Log updated: {path}")

            if max_iterations is not None and iteration >= max_iterations:
                print(f"\nReached max iterations ({max_iterations}). Exiting monitor.")
                break

            print(f"Waiting {interval_seconds} seconds until next count check (Ctrl+C to stop)...")
            
            # Sleep with small intervals to allow responsive Ctrl+C interruption
            slept = 0
            sleep_step = 1.0
            while slept < interval_seconds:
                time.sleep(min(sleep_step, interval_seconds - slept))
                slept += sleep_step

    except KeyboardInterrupt:
        print("\n[MONITOR STOPPED] Remediation count monitor terminated by user.")
