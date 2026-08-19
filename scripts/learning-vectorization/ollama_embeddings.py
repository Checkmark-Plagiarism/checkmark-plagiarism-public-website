import time
import requests
import numpy as np
from typing import List, Dict, Any, Optional

OLLAMA_URL = "http://localhost:11434/api/embeddings"
EMBEDDING_MODEL = "nomic-embed-text:latest"
EMBEDDING_DIM = 768

def l2_normalize(vec: np.ndarray) -> np.ndarray:
    """Normalizes a numpy vector to unit L2 norm."""
    norm = np.linalg.norm(vec)
    if norm == 0:
        return vec
    return vec / norm

def get_single_embedding(
    text: str,
    ollama_url: str = OLLAMA_URL,
    model: str = EMBEDDING_MODEL,
    max_retries: int = 3,
    initial_backoff: float = 1.0
) -> np.ndarray:
    """
    Fetches 768-dim embedding from local Ollama instance with retry backoff and L2 normalization.
    """
    payload = {
        "model": model,
        "prompt": text
    }

    backoff = initial_backoff
    last_err = None

    for attempt in range(max_retries):
        try:
            response = requests.post(ollama_url, json=payload, timeout=60)
            response.raise_for_status()
            data = response.json()
            raw_emb = data.get("embedding", [])
            if not raw_emb:
                raise ValueError("Ollama returned empty embedding array")
            
            vec = np.array(raw_emb, dtype=np.float32)
            normalized_vec = l2_normalize(vec)
            return normalized_vec
        except Exception as e:
            last_err = e
            if attempt < max_retries - 1:
                time.sleep(backoff)
                backoff *= 2.0

    raise RuntimeError(f"Failed to get embedding from Ollama after {max_retries} attempts: {last_err}")

def embed_chunks(
    chunks: List[Dict[str, Any]],
    ollama_url: str = OLLAMA_URL,
    model: str = EMBEDDING_MODEL
) -> List[Dict[str, Any]]:
    """
    Embeds each semantic chunk via Ollama and attaches L2-normalized float lists.
    Format passed to embedder: "{heading}\n\n{text}"
    """
    for chunk in chunks:
        prompt_text = f"{chunk['heading']}\n\n{chunk['text']}".strip()
        vec = get_single_embedding(prompt_text, ollama_url=ollama_url, model=model)
        chunk["vector"] = [round(float(x), 6) for x in vec]
    return chunks

def synthesize_page_vector(chunks: List[Dict[str, Any]]) -> List[float]:
    """
    Synthesizes the page-level vector as the mean of all chunk vectors, L2-normalized.
    """
    vectors = [chunk["vector"] for chunk in chunks if "vector" in chunk and chunk["vector"]]
    if not vectors:
        return [0.0] * EMBEDDING_DIM

    mat = np.array(vectors, dtype=np.float32)
    mean_vec = np.mean(mat, axis=0)
    norm_mean = l2_normalize(mean_vec)
    return [round(float(x), 6) for x in norm_mean]
