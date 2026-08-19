import os
import tempfile
import pytest
from unittest.mock import patch, MagicMock
from frontmatter_sync import sync_distinctness_file
from persistence import read_distinctness_md

def test_sync_distinctness_file():
    with tempfile.TemporaryDirectory() as tmpdir:
        dist_path = os.path.join(tmpdir, "distinctness.md")
        scored_item = {
            "route": "/learning/2026/6/test-sync",
            "uniqueness_score": 85.0,
            "combined_similarity": 0.45,
            "whole_page_top5_similarity": 0.42,
            "top_chunk_overlap": 0.47,
            "action": "none",
            "nearest_competitor": "/learning/2026/6/comp",
            "top5_similar_pages": [
                {
                    "route": "/learning/2026/6/comp",
                    "combined_similarity": 0.45,
                    "page_similarity": 0.42,
                    "top_chunk_similarity": 0.47
                }
            ],
            "chunk_competitor_matches": [
                {"competitor_route": "/learning/2026/6/comp", "similarity": 0.47}
            ],
            "post_data": {
                "route": "/learning/2026/6/test-sync",
                "title": "Test Sync Post",
                "seniority_date": "2026-06-01",
                "distinctness_file_path": dist_path,
                "frontmatter": {"content_hash": "hash123", "remediation_attempts": 0, "remediation_status": "not_needed"},
                "page_vector": [0.1, 0.2],
                "chunks": [{"heading": "Intro", "level": "intro", "hash": "h1", "text": "Hello world", "vector": [0.1, 0.2]}]
            }
        }

        # Dry run
        sync_distinctness_file(scored_item, dry_run=True)
        assert not os.path.exists(dist_path)

        # Real run
        sync_distinctness_file(scored_item, dry_run=False)
        assert os.path.exists(dist_path)

        data = read_distinctness_md(dist_path)
        assert data["frontmatter"]["uniqueness_score"] == 85.0
        assert data["frontmatter"]["action"] == "none"
        assert data["chunks"][0]["best_competitor_match"] == "/learning/2026/6/comp"
