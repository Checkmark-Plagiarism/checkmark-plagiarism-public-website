import pytest
from unittest.mock import patch, MagicMock
from verification import verify_remediation

@patch("verification.extract_post_data")
@patch("verification.vec_process_post")
@patch("verification.dist_load_corpus")
@patch("verification.compute_corpus_similarity_matrix")
@patch("verification.sync_distinctness_file")
@patch("verification.log_remediation_change")
def test_verify_remediation_pass(
    mock_log, mock_sync, mock_matrix, mock_load, mock_vec, mock_extract
):
    candidate = {
        "route": "/learning/2026/8/junior-candidate",
        "file_path": "/fake/path/page.tsx",
        "uniqueness_score": 35.0,
        "combined_similarity": 0.85,
        "remediation_attempts": 0,
        "nearest_competitor": "/learning/2026/6/senior-comp",
        "distinctness_data": {"frontmatter": {"top_chunk_overlap": 0.88, "whole_page_top5_similarity": 0.80}}
    }

    mock_extract.return_value = {"route": "/learning/2026/8/junior-candidate", "file_path": "/fake/path/page.tsx"}
    mock_vec.return_value = {"status": "vectorized"}
    mock_load.return_value = [{"route": "/learning/2026/8/junior-candidate"}]
    mock_matrix.return_value = [
        {
            "route": "/learning/2026/8/junior-candidate",
            "uniqueness_score": 72.5,
            "combined_similarity": 0.48,
            "top_chunk_overlap": 0.45,
            "whole_page_top5_similarity": 0.52,
            "post_data": {"frontmatter": {}}
        }
    ]

    result = verify_remediation(candidate, "essay_playback", "/mock/root")
    assert result["passed"] is True
    assert result["status"] == "passed"
    assert result["action"] == "none"
    assert result["attempts"] == 1
    assert result["score_delta"] == 37.5
    assert mock_log.called

@patch("verification.extract_post_data")
@patch("verification.vec_process_post")
@patch("verification.dist_load_corpus")
@patch("verification.compute_corpus_similarity_matrix")
@patch("verification.sync_distinctness_file")
@patch("verification.log_remediation_change")
def test_verify_remediation_max_attempts_manual_review(
    mock_log, mock_sync, mock_matrix, mock_load, mock_vec, mock_extract
):
    candidate = {
        "route": "/learning/2026/8/junior-stubborn",
        "file_path": "/fake/path/page.tsx",
        "uniqueness_score": 30.0,
        "combined_similarity": 0.89,
        "remediation_attempts": 1, # Already had 1 attempt, this will be attempt 2
        "nearest_competitor": "/learning/2026/6/senior-comp",
        "distinctness_data": {"frontmatter": {"top_chunk_overlap": 0.90, "whole_page_top5_similarity": 0.85}}
    }

    mock_extract.return_value = {"route": "/learning/2026/8/junior-stubborn", "file_path": "/fake/path/page.tsx"}
    mock_vec.return_value = {"status": "vectorized"}
    mock_load.return_value = [{"route": "/learning/2026/8/junior-stubborn"}]
    # Still fails after re-scoring
    mock_matrix.return_value = [
        {
            "route": "/learning/2026/8/junior-stubborn",
            "uniqueness_score": 32.0, # only +2 delta and < 60
            "combined_similarity": 0.84,
            "top_chunk_overlap": 0.85,
            "whole_page_top5_similarity": 0.82,
            "post_data": {"frontmatter": {}}
        }
    ]

    result = verify_remediation(candidate, "essay_playback", "/mock/root")
    assert result["passed"] is False
    assert result["status"] == "max_attempts_reached"
    assert result["action"] == "manual_review"
    assert result["attempts"] == 2
