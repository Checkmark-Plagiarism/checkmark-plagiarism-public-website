"""
Learning Distinctness Remediation Workflow for Checkmark Plagiarism
Selects junior candidate posts flagged with action: remediation_candidate,
diagnoses overlap against the senior competitor, injects domain differentiators,
re-evaluates via Workflow 1 & 2, verifies improvement, tracks actionable queue counts,
and logs audit trails.
"""

from candidate_selection import get_remediation_candidates, select_next_candidate
from domain_knowledge import select_best_domain_differentiator
from remediation import remediate_page_content
from verification import verify_remediation
from change_log import log_remediation_change, get_log_file_path
from count_logger import (
    get_actionable_count_summary,
    log_actionable_count,
    run_count_monitor,
    get_counts_log_path,
    format_count_log_entry
)
