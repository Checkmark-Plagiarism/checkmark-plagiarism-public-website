import pytest
import numpy as np
from unittest.mock import patch, MagicMock
from ollama_embeddings import (
    l2_normalize,
    get_single_embedding,
    embed_chunks,
    synthesize_page_vector
)

def test_l2_normalize():
    vec = np.array([3.0, 4.0], dtype=np.float32)
    norm_vec = l2_normalize(vec)
    assert np.isclose(np.linalg.norm(norm_vec), 1.0)
    assert np.allclose(norm_vec, [0.6, 0.8])

    # Zero vector
    zero = np.array([0.0, 0.0], dtype=np.float32)
    assert np.allclose(l2_normalize(zero), zero)

@patch("ollama_embeddings.requests.post")
def test_get_single_embedding_success(mock_post):
    mock_resp = MagicMock()
    mock_resp.json.return_value = {"embedding": [1.0, 2.0, 3.0]}
    mock_resp.raise_for_status.return_value = None
    mock_post.return_value = mock_resp

    vec = get_single_embedding("Test text")
    assert len(vec) == 3
    assert np.isclose(np.linalg.norm(vec), 1.0)
    assert mock_post.called

@patch("ollama_embeddings.requests.post")
def test_get_single_embedding_retry_backoff(mock_post):
    mock_post.side_effect = [Exception("Temporary Ollama connection refused"), MagicMock(json=lambda: {"embedding": [0.5, 0.5]}, raise_for_status=lambda: None)]

    vec = get_single_embedding("Test retry", initial_backoff=0.01)
    assert len(vec) == 2
    assert np.isclose(np.linalg.norm(vec), 1.0)
    assert mock_post.call_count == 2

def test_synthesize_page_vector():
    chunks = [
        {"vector": [1.0, 0.0, 0.0]},
        {"vector": [0.0, 1.0, 0.0]}
    ]
    page_vec = synthesize_page_vector(chunks)
    assert len(page_vec) == 3
    # Mean is [0.5, 0.5, 0.0], L2 normalized is [1/sqrt(2), 1/sqrt(2), 0]
    expected = 1.0 / np.sqrt(2.0)
    assert np.isclose(page_vec[0], expected, atol=1e-4)
    assert np.isclose(page_vec[1], expected, atol=1e-4)
    assert np.isclose(page_vec[2], 0.0)
