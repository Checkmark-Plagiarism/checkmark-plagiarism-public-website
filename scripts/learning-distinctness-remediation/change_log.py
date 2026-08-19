import os
from datetime import datetime, timezone
from typing import Dict, Any, Optional

def get_log_file_path(project_root: str) -> str:
    """Returns the absolute path to logs/learning-distinctness-changes.md."""
    logs_dir = os.path.join(project_root, "logs")
    os.makedirs(logs_dir, exist_ok=True)
    return os.path.join(logs_dir, "learning-distinctness-changes.md")

def log_remediation_change(
    project_root: str,
    candidate_route: str,
    competitor_route: str,
    domain_applied: str,
    before_metrics: Dict[str, Any],
    after_metrics: Dict[str, Any],
    status: str,
    notes: str = ""
) -> str:
    """
    Appends a structured audit entry to logs/learning-distinctness-changes.md.
    """
    log_file = get_log_file_path(project_root)
    now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")

    u_before = float(before_metrics.get("uniqueness_score", 0.0) or 0.0)
    u_after = float(after_metrics.get("uniqueness_score", 0.0) or 0.0)
    u_delta = u_after - u_before

    c_before = float(before_metrics.get("combined_similarity", 0.0) or 0.0)
    c_after = float(after_metrics.get("combined_similarity", 0.0) or 0.0)
    c_delta = c_after - c_before

    chunk_before = float(before_metrics.get("top_chunk_overlap", 0.0) or 0.0)
    chunk_after = float(after_metrics.get("top_chunk_overlap", 0.0) or 0.0)
    chunk_delta = chunk_after - chunk_before

    page_before = float(before_metrics.get("whole_page_top5_similarity", 0.0) or 0.0)
    page_after = float(after_metrics.get("whole_page_top5_similarity", 0.0) or 0.0)
    page_delta = page_after - page_before

    act_before = before_metrics.get("action", "remediation_candidate")
    act_after = after_metrics.get("action", "none")

    entry_lines = [
        f"## Remediation: `{candidate_route}` ({now_iso})",
        f"- **Candidate Post**: `{candidate_route}`",
        f"- **Senior Competitor**: `{competitor_route}`",
        f"- **Domain Applied**: `{domain_applied}`",
        f"- **Status Result**: `{status}`",
        "",
        "| Metric | Before Remediation | After Remediation | Delta |",
        "| :--- | :--- | :--- | :--- |",
        f"| **Uniqueness Score** | {u_before:.2f} / 100 | {u_after:.2f} / 100 | {'+' if u_delta >= 0 else ''}{u_delta:.2f} |",
        f"| **Combined Sim** | {c_before:.4f} | {c_after:.4f} | {'+' if c_delta >= 0 else ''}{c_delta:.4f} |",
        f"| **Top Chunk Overlap** | {chunk_before:.4f} | {chunk_after:.4f} | {'+' if chunk_delta >= 0 else ''}{chunk_delta:.4f} |",
        f"| **Whole-Page Top-5** | {page_before:.4f} | {page_after:.4f} | {'+' if page_delta >= 0 else ''}{page_delta:.4f} |",
        f"| **Action Flag** | `{act_before}` | `{act_after}` | {'Passed' if status == 'passed' else status} |",
        ""
    ]

    if notes:
        entry_lines.append(f"**Notes**: {notes}\n")

    entry_text = "\n".join(entry_lines) + "\n---\n\n"

    # Initialize file with header if missing
    if not os.path.exists(log_file):
        header = "# Learning Distinctness Remediation Audit Log\n\nAutomated record of candidate remediations and verification score deltas.\n\n---\n\n"
        with open(log_file, "w", encoding="utf-8") as f:
            f.write(header)

    with open(log_file, "a", encoding="utf-8") as f:
        f.write(entry_text)

    return log_file
