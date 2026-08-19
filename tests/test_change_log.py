import os
import tempfile
import pytest
from change_log import log_remediation_change

def test_log_remediation_change():
    with tempfile.TemporaryDirectory() as tmpdir:
        before = {
            "uniqueness_score": 32.5,
            "combined_similarity": 0.8120,
            "top_chunk_overlap": 0.8400,
            "whole_page_top5_similarity": 0.7700,
            "action": "remediation_candidate"
        }
        after = {
            "uniqueness_score": 71.0,
            "combined_similarity": 0.5210,
            "top_chunk_overlap": 0.5100,
            "whole_page_top5_similarity": 0.5375,
            "action": "none"
        }

        log_path = log_remediation_change(
            project_root=tmpdir,
            candidate_route="/learning/2026/8/junior-post",
            competitor_route="/learning/2026/6/senior-post",
            domain_applied="essay_playback",
            before_metrics=before,
            after_metrics=after,
            status="passed",
            notes="Remediation verified successfully."
        )

        assert os.path.exists(log_path)
        with open(log_path, "r", encoding="utf-8") as f:
            content = f.read()

        assert "# Learning Distinctness Remediation Audit Log" in content
        assert "/learning/2026/8/junior-post" in content
        assert "/learning/2026/6/senior-post" in content
        assert "+38.50" in content # score delta
        assert "passed" in content
