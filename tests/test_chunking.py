import pytest
from chunking import compute_sha256, create_semantic_chunks, compute_content_hash

def test_compute_sha256():
    h1 = compute_sha256("Checkmark Plagiarism")
    h2 = compute_sha256("Checkmark Plagiarism")
    h3 = compute_sha256("Different Text")
    assert h1 == h2
    assert h1 != h3
    assert len(h1) == 64

def test_create_semantic_chunks():
    post_data = {
        "title": "Sample Article",
        "sections": [
            {"heading": "Introduction", "level": "intro", "text": "Intro text goes here."},
            {"heading": "Architecture", "level": "h2", "text": "Architecture details go here."}
        ]
    }
    chunks = create_semantic_chunks(post_data)
    assert len(chunks) == 2
    assert chunks[0]["heading"] == "Introduction"
    assert chunks[0]["level"] == "intro"
    assert chunks[0]["text"] == "Intro text goes here."
    assert len(chunks[0]["hash"]) == 64
    assert chunks[0]["word_count"] == 4

    assert chunks[1]["heading"] == "Architecture"
    assert chunks[1]["level"] == "h2"
    assert chunks[1]["text"] == "Architecture details go here."

def test_compute_content_hash():
    chunks = [
        {"hash": "abc12345"},
        {"hash": "def67890"}
    ]
    h1 = compute_content_hash(chunks)
    h2 = compute_content_hash(chunks)
    assert h1 == h2

    # Modified chunk changes content hash
    chunks_mod = [
        {"hash": "abc12345"},
        {"hash": "modified"}
    ]
    assert compute_content_hash(chunks_mod) != h1
