import pytest
import numpy as np
from matrix_engine import compute_corpus_similarity_matrix

def test_matrix_engine_empty():
    assert compute_corpus_similarity_matrix([]) == []

def test_matrix_engine_single_post():
    post = {
        "route": "/learning/2026/6/single-post",
        "slug": "single-post",
        "seniority_date": "2026-06-01",
        "page_vector": [1.0, 0.0, 0.0],
        "chunks": [{"heading": "Intro", "vector": [1.0, 0.0, 0.0]}]
    }
    res = compute_corpus_similarity_matrix([post])
    assert len(res) == 1
    assert res[0]["uniqueness_score"] == 100.0
    assert res[0]["action"] == "none"

def test_matrix_engine_synthetic_corpus():
    # Post A: orthogonal vector [1, 0, 0] -> unique
    # Post B: vector [0, 1, 0] -> overlaps heavily with Post C [0, 0.99, 0.1]
    # Post C: vector [0, 0.99, 0.1]
    # Post D: vector [0, 0.95, 0.2]
    # Post E: vector [0, 0.92, 0.3]
    posts = [
        {
            "route": "/learning/2026/6/unique-topic",
            "slug": "unique-topic",
            "seniority_date": "2026-06-01",
            "page_vector": [1.0, 0.0, 0.0],
            "chunks": [
                {"heading": "Intro", "vector": [1.0, 0.0, 0.0]},
                {"heading": "Part 2", "vector": [0.9, 0.1, 0.0]}
            ]
        },
        {
            "route": "/learning/2026/6/duplicate-post-1",
            "slug": "duplicate-post-1",
            "seniority_date": "2026-06-05",
            "page_vector": [0.0, 1.0, 0.0],
            "chunks": [
                {"heading": "Intro", "vector": [0.0, 1.0, 0.0]},
                {"heading": "Part 2", "vector": [0.0, 0.95, 0.1]}
            ]
        },
        {
            "route": "/learning/2026/8/duplicate-post-2",
            "slug": "duplicate-post-2",
            "seniority_date": "2026-08-10",
            "page_vector": [0.0, 0.99, 0.01],
            "chunks": [
                {"heading": "Intro", "vector": [0.0, 0.99, 0.01]},
                {"heading": "Part 2", "vector": [0.0, 0.96, 0.05]}
            ]
        },
        {
            "route": "/learning/2026/8/duplicate-post-3",
            "slug": "duplicate-post-3",
            "seniority_date": "2026-08-12",
            "page_vector": [0.0, 0.95, 0.1],
            "chunks": [
                {"heading": "Intro", "vector": [0.0, 0.95, 0.1]},
                {"heading": "Part 2", "vector": [0.0, 0.93, 0.15]}
            ]
        },
        {
            "route": "/learning/2026/8/duplicate-post-4",
            "slug": "duplicate-post-4",
            "seniority_date": "2026-08-15",
            "page_vector": [0.0, 0.92, 0.2],
            "chunks": [
                {"heading": "Intro", "vector": [0.0, 0.92, 0.2]},
                {"heading": "Part 2", "vector": [0.0, 0.90, 0.25]}
            ]
        }
    ]

    results = compute_corpus_similarity_matrix(posts)
    assert len(results) == 5

    res_by_route = {r["route"]: r for r in results}

    # Post A must be the most unique (score = 100)
    assert res_by_route["/learning/2026/6/unique-topic"]["uniqueness_score"] == 100.0
    assert res_by_route["/learning/2026/6/unique-topic"]["action"] == "none"

    # Duplicates should have higher combined similarities and lower uniqueness scores
    dup1 = res_by_route["/learning/2026/6/duplicate-post-1"]
    dup2 = res_by_route["/learning/2026/8/duplicate-post-2"]
    assert dup1["combined_similarity"] > res_by_route["/learning/2026/6/unique-topic"]["combined_similarity"]
    assert dup2["combined_similarity"] > res_by_route["/learning/2026/6/unique-topic"]["combined_similarity"]

    # Action flags should correctly identify high similarity
    assert dup2["max_page_similarity"] >= 0.88 or dup2["uniqueness_score"] < 40.0
    assert dup2["action"] == "remediation_candidate"
