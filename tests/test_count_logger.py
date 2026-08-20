import os
import tempfile
import pytest
from unittest.mock import patch, MagicMock

from count_logger import (
    get_actionable_count_summary,
    log_actionable_count,
    run_count_monitor,
    get_counts_log_path,
    format_count_log_entry
)

@patch("count_logger.discover_learning_posts")
@patch("count_logger.get_remediation_candidates")
@patch("count_logger.read_distinctness_md")
def test_get_actionable_count_summary(mock_read_dist, mock_candidates, mock_discover):
    mock_discover.return_value = [
        {"file_path": "/fake/post1/page.tsx", "route": "/learning/2026/6/post1"},
        {"file_path": "/fake/post2/page.tsx", "route": "/learning/2026/8/post2"},
        {"file_path": "/fake/post3/page.tsx", "route": "/learning/2026/8/post3"},
        {"file_path": "/fake/post4/page.tsx", "route": "/learning/2026/8/post4"},
    ]

    mock_candidates.return_value = [
        {
            "route": "/learning/2026/8/post2",
            "slug": "post2",
            "is_junior": True,
            "uniqueness_score": 35.0,
            "remediation_attempts": 0,
            "nearest_competitor": "/learning/2026/6/post1"
        },
        {
            "route": "/learning/2026/6/post1",
            "slug": "post1",
            "is_junior": False,
            "uniqueness_score": 38.0,
            "remediation_attempts": 1,
            "nearest_competitor": "/learning/2026/8/post2"
        }
    ]

    def mock_read_side_effect(path):
        if "post1" in path:
            return {"frontmatter": {"action": "remediation_candidate", "remediation_attempts": 1}}
        elif "post2" in path:
            return {"frontmatter": {"action": "remediation_candidate", "remediation_attempts": 0}}
        elif "post3" in path:
            return {"frontmatter": {"action": "none", "remediation_attempts": 0}}
        elif "post4" in path:
            return {"frontmatter": {"action": "observe", "remediation_attempts": 0}}
        return None

    mock_read_dist.side_effect = mock_read_side_effect

    summary = get_actionable_count_summary("/mock/root")
    assert summary["total_posts"] == 4
    assert summary["actionable_count"] == 2
    assert summary["junior_actionable_count"] == 1
    assert summary["senior_actionable_count"] == 1
    assert summary["distinct_passing_count"] == 1
    assert summary["observing_count"] == 1
    assert summary["top_candidate"]["route"] == "/learning/2026/8/post2"

def test_log_actionable_count_writes_file():
    with tempfile.TemporaryDirectory() as tmpdir:
        mock_summary = {
            "timestamp_utc": "2026-08-19 23:10:00 UTC",
            "timestamp_local": "2026-08-19 16:10:00 PDT",
            "total_posts": 10,
            "actionable_count": 3,
            "junior_actionable_count": 2,
            "senior_actionable_count": 1,
            "distinct_passing_count": 5,
            "observing_count": 2,
            "manual_review_count": 0,
            "unvectorized_count": 0,
            "top_candidate": {
                "route": "/learning/2026/8/test-post",
                "uniqueness_score": 25.5,
                "remediation_attempts": 0,
                "nearest_competitor": "/learning/2026/6/senior-comp"
            }
        }

        log_file = os.path.join(tmpdir, "logs", "test-counts.log")

        with patch("count_logger.get_actionable_count_summary", return_value=mock_summary):
            res_summary, written_path = log_actionable_count(
                project_root=tmpdir,
                log_file=log_file,
                notes="Unit test entry"
            )

        assert written_path == log_file
        assert os.path.exists(log_file)

        with open(log_file, "r", encoding="utf-8") as f:
            content = f.read()

        assert "# Learning Distinctness Remediation Queue Count Log" in content
        assert "Total Actionable Posts Needing Remediation**: **3**" in content
        assert "Junior Candidates (Priority Queue)**: 2" in content
        assert "Senior Candidates (Secondary Queue)**: 1" in content
        assert "/learning/2026/8/test-post" in content
        assert "Unit test entry" in content

def test_run_count_monitor_iterations():
    mock_summary = {
        "timestamp_utc": "2026-08-19 23:10:00 UTC",
        "timestamp_local": "2026-08-19 16:10:00 PDT",
        "total_posts": 10,
        "actionable_count": 2,
        "junior_actionable_count": 2,
        "senior_actionable_count": 0,
        "distinct_passing_count": 8,
        "observing_count": 0,
        "manual_review_count": 0,
        "unvectorized_count": 0,
        "top_candidate": None
    }

    with tempfile.TemporaryDirectory() as tmpdir:
        log_file = os.path.join(tmpdir, "logs", "monitor-test.log")
        with patch("count_logger.get_actionable_count_summary", return_value=mock_summary):
            run_count_monitor(
                interval_seconds=1,
                project_root=tmpdir,
                max_iterations=2,
                log_file=log_file
            )

        assert os.path.exists(log_file)
        with open(log_file, "r", encoding="utf-8") as f:
            content = f.read()
        # Should have recorded 2 entries
        assert content.count("## Remediation Queue Count") == 2
