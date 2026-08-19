import os
import tempfile
import pytest
from unittest.mock import patch, MagicMock
from vectorizer import process_single_post
from persistence import read_distinctness_md, get_sibling_distinctness_path

@patch("vectorizer.embed_chunks")
def test_process_single_post_dry_run_and_embed(mock_embed):
    mock_embed.side_effect = lambda chunks: [dict(c, vector=[0.1, 0.2]) for c in chunks]

    with tempfile.TemporaryDirectory() as tmpdir:
        page_path = os.path.join(tmpdir, "page.tsx")
        with open(page_path, "w", encoding="utf-8") as f:
            f.write("""
            export const meta = { title: "Test Article", date: "06-25-2026" };
            const bodyHtml = `<h2>First Section</h2><p>Some interesting content.</p>`;
            """)

        post_data = {
            "file_path": page_path,
            "route": "/learning/2026/6/test-article",
            "title": "Test Article",
            "seniority_date": "2026-06-25",
            "sections": [
                {"heading": "First Section", "level": "h2", "text": "Some interesting content."}
            ]
        }

        # 1. Dry run
        dry_res = process_single_post(post_data, dry_run=True)
        assert dry_res["status"] == "pending_embedding"
        assert not os.path.exists(get_sibling_distinctness_path(page_path))

        # 2. Real run
        real_res = process_single_post(post_data, dry_run=False)
        assert real_res["status"] == "vectorized"
        dist_path = get_sibling_distinctness_path(page_path)
        assert os.path.exists(dist_path)

        data = read_distinctness_md(dist_path)
        assert data is not None
        assert data["frontmatter"]["route"] == "/learning/2026/6/test-article"

        # 3. Cached run
        cached_res = process_single_post(post_data, dry_run=False)
        assert cached_res["status"] == "cached"
