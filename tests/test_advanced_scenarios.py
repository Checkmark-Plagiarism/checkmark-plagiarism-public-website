import os
import tempfile
import pytest
from unittest.mock import patch, MagicMock

from extractor import extract_post_data, parse_seniority_date, clean_html_and_jsx
from chunking import create_semantic_chunks, compute_content_hash
from matrix_engine import compute_corpus_similarity_matrix
from corpus_loader import load_vectorized_corpus
from domain_knowledge import detect_primary_domain
from remediation import remediate_page_content
from persistence import read_distinctness_md, write_distinctness_md

def test_extractor_edge_cases():
    with tempfile.TemporaryDirectory() as tmpdir:
        fake_post_dir = os.path.join(tmpdir, "src", "app", "learning", "2026", "08", "custom-edge-slug")
        os.makedirs(fake_post_dir, exist_ok=True)
        fake_page = os.path.join(fake_post_dir, "page.tsx")
        
        # Edge case: raw JSX without bodyHtml, complex tags, entities
        with open(fake_page, "w", encoding="utf-8") as f:
            f.write("""
            export const metadata = {
                title: "Edge Case &amp; Tests &mdash; 100%",
                description: "Testing edge cases."
            };
            export default function Page() {
                return (
                    <article>
                        <h1>Edge Case &amp; Tests &mdash; 100%</h1>
                        <p>First paragraph with <code>console.log()</code> and <a href="/test">link</a>.</p>
                        <h3>Technical Breakdown</h3>
                        <p>Second section details.</p>
                    </article>
                );
            }
            """)

        post_data = extract_post_data(fake_page, project_root=tmpdir)
        assert post_data["title"] == "Edge Case & Tests — 100%"
        assert post_data["year"] == 2026
        assert post_data["month"] == 8
        assert post_data["slug"] == "custom-edge-slug"
        assert post_data["seniority_date"] == "2026-08-01"
        assert len(post_data["sections"]) >= 2
        assert "console.log()" in post_data["sections"][0]["text"]

def test_remediation_idempotency_and_replacement():
    with tempfile.TemporaryDirectory() as tmpdir:
        page_file = os.path.join(tmpdir, "page.tsx")
        initial_content = """import ArticleLayout from "@/components/blog/article-layout";
export const meta = { title: "LTI Integration Guide", date: "08-10-2026" };
const bodyHtml = `<h2>Setup</h2><p>Initial setup instructions.</p><h2>Checkmark Plagiarism Architecture & Technical Standards: Old Title</h2><p>Old content.</p><h2>Conclusion</h2><p>End.</p>`;
export default function Page() { return <article dangerouslySetInnerHTML={{ __html: bodyHtml }} />; }"""
        
        with open(page_file, "w", encoding="utf-8") as f:
            f.write(initial_content)

        cand = {"title": "LTI Integration Guide", "file_path": page_file}
        res = remediate_page_content(page_file, cand)
        assert res["status"] == "modified"

        with open(page_file, "r", encoding="utf-8") as f:
            updated = f.read()

        # Should only have one instance of the heading
        assert updated.count("<h2>Checkmark Plagiarism Architecture & Technical Standards") == 1
        assert "Canvas LTI 1.3 Advantage integration" in updated

def test_corpus_loader_empty():
    with tempfile.TemporaryDirectory() as tmpdir:
        corpus = load_vectorized_corpus(tmpdir)
        assert corpus == []
