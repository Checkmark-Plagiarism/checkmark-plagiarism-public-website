import hashlib
from typing import List, Dict, Any

def compute_sha256(text: str) -> str:
    """Computes SHA-256 hash for a given string."""
    return hashlib.sha256(text.encode("utf-8")).hexdigest()

def create_semantic_chunks(post_data: Dict[str, Any]) -> List[Dict[str, Any]]:
    """
    Creates deterministic semantic chunks from post sections.
    Each chunk is identified by its heading, level, full text, and SHA-256 hash.
    """
    sections = post_data.get("sections", [])
    chunks: List[Dict[str, Any]] = []

    for section in sections:
        heading = section.get("heading", "").strip()
        level = section.get("level", "h2").strip()
        text = section.get("text", "").strip()

        if not text:
            continue

        chunk_hash = compute_sha256(f"{heading}\n{text}")

        chunks.append({
            "heading": heading,
            "level": level,
            "text": text,
            "hash": chunk_hash,
            "char_count": len(text),
            "word_count": len(text.split())
        })

    # If no sections could be produced, create one from title and raw_content
    if not chunks:
        raw_text = post_data.get("raw_content", "").strip()
        if raw_text:
            chunk_hash = compute_sha256(f"{post_data.get('title', 'Article')}\n{raw_text}")
            chunks.append({
                "heading": post_data.get("title", "Article"),
                "level": "intro",
                "text": raw_text,
                "hash": chunk_hash,
                "char_count": len(raw_text),
                "word_count": len(raw_text.split())
            })

    return chunks

def compute_content_hash(chunks: List[Dict[str, Any]]) -> str:
    """
    Computes an aggregate SHA-256 integrity hash across all chunks in an article.
    Used for cache invalidation and change detection.
    """
    combined = "|".join(c["hash"] for c in chunks)
    return compute_sha256(combined)
