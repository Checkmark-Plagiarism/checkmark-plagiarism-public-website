import os
from typing import Dict, Any

from extractor import extract_post_data
from chunking import create_semantic_chunks, compute_content_hash
from ollama_embeddings import embed_chunks, synthesize_page_vector
from persistence import (
    get_sibling_distinctness_path,
    read_distinctness_md,
    serialize_distinctness_md,
    write_distinctness_md
)

def process_single_post(
    post: Dict[str, Any],
    dry_run: bool = False,
    force: bool = False
) -> Dict[str, Any]:
    """
    Processes a single learning post:
    Extracts chunks, checks cache validity, embeds chunks via Ollama, and writes sibling distinctness.md.
    """
    page_file = post["file_path"]
    distinctness_file = get_sibling_distinctness_path(page_file)
    
    chunks = create_semantic_chunks(post)
    content_hash = compute_content_hash(chunks)

    existing = read_distinctness_md(distinctness_file)
    is_up_to_date = False

    if existing and not force:
        existing_fm = existing.get("frontmatter", {})
        existing_hash = existing_fm.get("content_hash")
        has_page_vec = len(existing.get("page_vector", [])) > 0
        has_chunk_vecs = all(len(c.get("vector", [])) > 0 for c in existing.get("chunks", []))
        
        if existing_hash == content_hash and has_page_vec and has_chunk_vecs:
            is_up_to_date = True

    if is_up_to_date:
        return {
            "route": post["route"],
            "status": "cached",
            "chunks_count": len(chunks),
            "file": distinctness_file
        }

    if dry_run:
        return {
            "route": post["route"],
            "status": "pending_embedding",
            "chunks_count": len(chunks),
            "file": distinctness_file
        }

    # Embed chunks via Ollama
    embedded_chunks = embed_chunks(chunks)
    page_vector = synthesize_page_vector(embedded_chunks)

    # Preserve existing distinctness scores if already scored
    uniqueness_score = existing["frontmatter"].get("uniqueness_score") if existing else None
    combined_similarity = existing["frontmatter"].get("combined_similarity") if existing else None
    whole_page_top5 = existing["frontmatter"].get("whole_page_top5_similarity") if existing else None
    top_chunk_overlap = existing["frontmatter"].get("top_chunk_overlap") if existing else None
    action = existing["frontmatter"].get("action", "none") if existing else "none"
    nearest_competitor = existing["frontmatter"].get("nearest_competitor", "N/A") if existing else "N/A"
    remediation_attempts = existing["frontmatter"].get("remediation_attempts", 0) if existing else 0
    remediation_status = existing["frontmatter"].get("remediation_status", "not_needed") if existing else "not_needed"

    md_content = serialize_distinctness_md(
        post_data=post,
        chunks=embedded_chunks,
        page_vector=page_vector,
        uniqueness_score=uniqueness_score,
        combined_similarity=combined_similarity,
        whole_page_top5_similarity=whole_page_top5,
        top_chunk_overlap=top_chunk_overlap,
        action=action,
        nearest_competitor=nearest_competitor,
        remediation_attempts=remediation_attempts,
        remediation_status=remediation_status,
        content_hash=content_hash
    )

    write_distinctness_md(distinctness_file, md_content)

    return {
        "route": post["route"],
        "status": "vectorized",
        "chunks_count": len(chunks),
        "file": distinctness_file
    }
