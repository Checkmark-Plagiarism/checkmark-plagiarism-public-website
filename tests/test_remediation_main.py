import os
import sys
import importlib.util
import pytest
from unittest.mock import patch, MagicMock

# Load remediation main module dynamically
REM_MAIN_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "scripts", "learning-distinctness-remediation", "main.py"))
spec = importlib.util.spec_from_file_location("rem_main", REM_MAIN_PATH)
rem_main = importlib.util.module_from_spec(spec)
spec.loader.exec_module(rem_main)

def test_remediation_main_dry_run(capsys):
    mock_candidate = {
        "route": "/learning/2026/8/junior-post",
        "slug": "junior-post",
        "title": "Junior Post Title",
        "seniority_date": "2026-08-15",
        "is_junior": True,
        "uniqueness_score": 30.5,
        "nearest_competitor": "/learning/2026/6/senior-post",
        "competitor_seniority_date": "2026-06-01",
        "remediation_attempts": 0,
        "file_path": "/fake/path/page.tsx"
    }

    with patch.object(rem_main, "select_next_candidate", return_value=mock_candidate):
        with patch("sys.argv", ["main.py", "--next", "--dry-run"]):
            rem_main.main()

    captured = capsys.readouterr().out
    assert "Junior Post Title" in captured
    assert "Seniority Date: 2026-08-15 (Junior Precedence: True)" in captured
    assert "[DRY-RUN COMPLETE]" in captured

def test_remediation_main_count(capsys):
    mock_summary = {
        "timestamp_utc": "2026-08-19 23:10:00 UTC",
        "timestamp_local": "2026-08-19 16:10:00 PDT",
        "total_posts": 491,
        "actionable_count": 468,
        "junior_actionable_count": 438,
        "senior_actionable_count": 30,
        "distinct_passing_count": 22,
        "observing_count": 0,
        "manual_review_count": 0,
        "unvectorized_count": 1,
        "top_candidate": {
            "route": "/learning/2026/8/can-chatgpt-create-fake-sources-for-student-essays",
            "uniqueness_score": 0.0,
            "remediation_attempts": 0
        }
    }

    with patch.object(rem_main, "log_actionable_count", return_value=(mock_summary, "/fake/logs/test.log")):
        with patch("sys.argv", ["main.py", "--count"]):
            rem_main.main()

    captured = capsys.readouterr().out
    assert "[COUNT RECORDED]" in captured
    assert "Total Actionable Posts Needing Remediation: 468" in captured
    assert "Junior Candidates (Priority): 438" in captured
    assert "/fake/logs/test.log" in captured

def test_remediation_main_monitor():
    with patch.object(rem_main, "run_count_monitor") as mock_monitor:
        with patch("sys.argv", ["main.py", "--monitor", "--interval", "600", "--max-iterations", "1"]):
            rem_main.main()

    mock_monitor.assert_called_once_with(
        interval_seconds=600,
        project_root=rem_main.get_project_root(),
        max_iterations=1,
        log_file=None
    )

