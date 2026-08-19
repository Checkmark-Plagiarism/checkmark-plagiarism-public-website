import os
import tempfile
import pytest
from persistence import (
    get_sibling_distinctness_path,
    format_yaml_frontmatter,
    parse_yaml_frontmatter,
    serialize_distinctness_md,
    write_distinctness_md,
    read_distinctness_md
)

def test_sibling_path():
    p = r"C:\app\learning\2026\6\slug\page.tsx"
    sibling = get_sibling_distinctness_path(p)
    assert os.path.basename(sibling) == "distinctness.md"
    assert os.path.dirname(sibling) == r"C:\app\learning\2026\6\slug"

def test_yaml_frontmatter_roundtrip():
    meta = {
        "route": "/learning/2026/6/my-slug",
        "title": "My Great Title",
        "seniority_date": "2026-06-25",
        "uniqueness_score": 85.5,
        "combined_similarity": 0.5234,
        "action": "none",
        "remediation_attempts": 1,
        "remediation_status": "in_progress"
    }
    yaml_str = format_yaml_frontmatter(meta)
    parsed = parse_yaml_frontmatter(yaml_str)
    assert parsed["route"] == meta["route"]
    assert parsed["title"] == meta["title"]
    assert parsed["seniority_date"] == meta["seniority_date"]
    assert parsed["uniqueness_score"] == meta["uniqueness_score"]
    assert parsed["combined_similarity"] == meta["combined_similarity"]
    assert parsed["action"] == meta["action"]
    assert parsed["remediation_attempts"] == meta["remediation_attempts"]
    assert parsed["remediation_status"] == meta["remediation_status"]

def test_full_serialization_and_read():
    with tempfile.TemporaryDirectory() as tmpdir:
        file_path = os.path.join(tmpdir, "distinctness.md")
        post_data = {
            "route": "/learning/2026/6/test-slug",
            "title": "Test Learning Post",
            "seniority_date": "2026-06-25"
        }
        chunks = [
            {
                "heading": "Introduction",
                "level": "intro",
                "hash": "hash123",
                "best_competitor_match": "/learning/2026/6/other-post",
                "best_competitor_similarity": 0.456,
                "text": "Introductory copy text here.",
                "vector": [0.1, 0.2, 0.3]
            },
            {
                "heading": "Core Analysis",
                "level": "h2",
                "hash": "hash456",
                "best_competitor_match": "/learning/2026/6/other-post",
                "best_competitor_similarity": 0.612,
                "text": "Core analysis copy text here.",
                "vector": [0.4, 0.5, 0.6]
            }
        ]
        page_vector = [0.25, 0.35, 0.45]
        similar_pages = [
            {
                "route": "/learning/2026/6/other-post",
                "combined_similarity": 0.582,
                "page_similarity": 0.512,
                "top_chunk_similarity": 0.612
            }
        ]

        md_content = serialize_distinctness_md(
            post_data=post_data,
            chunks=chunks,
            page_vector=page_vector,
            uniqueness_score=78.2,
            combined_similarity=0.485,
            whole_page_top5_similarity=0.450,
            top_chunk_overlap=0.510,
            action="none",
            nearest_competitor="/learning/2026/6/other-post",
            similar_pages=similar_pages,
            remediation_attempts=0,
            content_hash="contenthash999"
        )

        # Ensure 2-group layout order
        assert md_content.startswith("---")
        assert "## Summary & Similar Pages" in md_content
        assert "## Semantic Chunks" in md_content
        assert "## Vector Store" in md_content
        assert md_content.index("## Semantic Chunks") < md_content.index("## Vector Store")

        write_distinctness_md(file_path, md_content)
        read_data = read_distinctness_md(file_path)

        assert read_data is not None
        assert read_data["frontmatter"]["uniqueness_score"] == 78.2
        assert read_data["frontmatter"]["action"] == "none"
        assert read_data["frontmatter"]["seniority_date"] == "2026-06-25"
        assert len(read_data["chunks"]) == 2
        assert read_data["chunks"][0]["heading"] == "Introduction"
        assert read_data["chunks"][0]["vector"] == [0.1, 0.2, 0.3]
        assert read_data["page_vector"] == page_vector
