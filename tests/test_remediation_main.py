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
