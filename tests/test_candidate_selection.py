import os
import tempfile
import pytest
from unittest.mock import patch
from candidate_selection import get_remediation_candidates, select_next_candidate

@patch("candidate_selection.discover_learning_posts")
@patch("candidate_selection.read_distinctness_md")
def test_candidate_selection_seniority_precedence(mock_read, mock_discover):
    # Post 1: Senior post (June 2026)
    # Post 2: Junior post (August 2026), overlaps with Post 1
    # Post 3: Exhausted attempts (2 attempts)
    mock_discover.return_value = [
        {
            "route": "/learning/2026/6/senior-essay-playback",
            "slug": "senior-essay-playback",
            "file_path": "/app/learning/2026/6/senior-essay-playback/page.tsx",
            "seniority_date": "2026-06-01",
            "title": "Senior Essay Playback Post"
        },
        {
            "route": "/learning/2026/8/junior-essay-playback",
            "slug": "junior-essay-playback",
            "file_path": "/app/learning/2026/8/junior-essay-playback/page.tsx",
            "seniority_date": "2026-08-15",
            "title": "Junior Essay Playback Post"
        },
        {
            "route": "/learning/2026/8/exhausted-candidate",
            "slug": "exhausted-candidate",
            "file_path": "/app/learning/2026/8/exhausted-candidate/page.tsx",
            "seniority_date": "2026-08-20",
            "title": "Exhausted Post"
        }
    ]

    def mock_read_side_effect(path):
        if "senior-essay-playback" in path:
            return {
                "frontmatter": {
                    "action": "none",
                    "uniqueness_score": 75.0,
                    "remediation_attempts": 0,
                    "nearest_competitor": "/learning/2026/8/junior-essay-playback"
                }
            }
        elif "junior-essay-playback" in path:
            return {
                "frontmatter": {
                    "action": "remediation_candidate",
                    "uniqueness_score": 25.0,
                    "remediation_attempts": 0,
                    "nearest_competitor": "/learning/2026/6/senior-essay-playback"
                }
            }
        elif "exhausted-candidate" in path:
            return {
                "frontmatter": {
                    "action": "remediation_candidate",
                    "uniqueness_score": 20.0,
                    "remediation_attempts": 2,
                    "nearest_competitor": "/learning/2026/6/senior-essay-playback"
                }
            }
        return None

    mock_read.side_effect = mock_read_side_effect

    candidates = get_remediation_candidates("/mock/root")
    # Only junior-essay-playback should be in candidates (exhausted-candidate has 2 attempts, senior has action 'none')
    assert len(candidates) == 1
    cand = candidates[0]
    assert cand["route"] == "/learning/2026/8/junior-essay-playback"
    assert cand["is_junior"] is True
    assert cand["nearest_competitor"] == "/learning/2026/6/senior-essay-playback"

    selected = select_next_candidate("/mock/root")
    assert selected["route"] == "/learning/2026/8/junior-essay-playback"
