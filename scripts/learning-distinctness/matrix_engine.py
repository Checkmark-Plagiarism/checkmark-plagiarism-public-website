import math
import numpy as np
from typing import List, Dict, Any, Tuple

def compute_corpus_similarity_matrix(posts_data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Computes distinctness metrics across the corpus:
    - Whole-Page Top-5 Cosine Similarity (weight: 0.40)
    - Top 25% Cross-Post Chunk Overlap (weight: 0.60)
    - V2 Combined Similarity = 0.60 * top_chunk_overlap + 0.40 * whole_page_top5
    - Rank-Based Uniqueness Score (0-100)
    - Action flags: 'none' (>=60), 'observe' (40-59), 'remediation_candidate' (<40 or max_page_sim >= 0.88)
    - Top 5 nearest similar pages and per-chunk best external matches.
    """
    n_posts = len(posts_data)
    if n_posts == 0:
        return []

    # 1. Build Page Vectors Matrix
    page_vectors = []
    for p in posts_data:
        p_vec = p.get("page_vector", [])
        if not p_vec:
            # Fallback 768 zeros
            p_vec = [0.0] * 768
        page_vectors.append(p_vec)

    page_mat = np.array(page_vectors, dtype=np.float32)
    # Ensure L2 normalization
    page_norms = np.linalg.norm(page_mat, axis=1, keepdims=True)
    page_norms[page_norms == 0] = 1.0
    page_mat = page_mat / page_norms

    # Pairwise Page Cosine Similarity (N x N)
    pairwise_page_sim = np.dot(page_mat, page_mat.T)
    np.clip(pairwise_page_sim, -1.0, 1.0, out=pairwise_page_sim)

    # 2. Build Chunk Matrices and Post Indices Mapping
    all_chunk_vectors = []
    chunk_to_post = []  # index of post for each chunk
    chunk_to_local_idx = [] # index within the post's chunk list

    for p_idx, p in enumerate(posts_data):
        for c_idx, c in enumerate(p.get("chunks", [])):
            c_vec = c.get("vector", [])
            if c_vec and len(c_vec) > 0:
                all_chunk_vectors.append(c_vec)
                chunk_to_post.append(p_idx)
                chunk_to_local_idx.append(c_idx)

    has_chunks = len(all_chunk_vectors) > 0
    if has_chunks:
        chunk_mat = np.array(all_chunk_vectors, dtype=np.float32)
        chunk_norms = np.linalg.norm(chunk_mat, axis=1, keepdims=True)
        chunk_norms[chunk_norms == 0] = 1.0
        chunk_mat = chunk_mat / chunk_norms
        chunk_to_post_arr = np.array(chunk_to_post)
        chunk_to_local_arr = np.array(chunk_to_local_idx)
        # Global Chunk Similarity Matrix (TotalChunks x TotalChunks)
        # Note: For 489 posts with ~20 chunks each (~10k chunks), 10k x 10k float32 is ~400MB
        # To be ultra memory efficient, we can compute per-post chunk similarity blocks!
    else:
        chunk_mat = None

    # 3. Calculate per-post metrics
    results = []

    for i in range(n_posts):
        post = posts_data[i]
        route_i = post.get("route", "")

        # --- A. Whole-Page Top-5 Cosine Similarity ---
        other_page_sims = []
        for j in range(n_posts):
            if j != i:
                other_page_sims.append((j, float(pairwise_page_sim[i, j])))

        other_page_sims.sort(key=lambda x: x[1], reverse=True)
        top5_pages = other_page_sims[:5]
        
        if top5_pages:
            whole_page_top5 = float(np.mean([sim for _, sim in top5_pages]))
            max_page_sim = float(top5_pages[0][1])
        else:
            whole_page_top5 = 0.0
            max_page_sim = 0.0

        # --- B. Chunk-to-Chunk Cross-Post Analysis ---
        post_chunks = post.get("chunks", [])
        n_chunks = len(post_chunks)
        
        # Per-chunk best external competitor matches
        chunk_max_sims = []
        chunk_competitor_matches = [] # list of (best_comp_route, best_comp_sim)

        # Pairwise per-competitor maximum chunk similarity dict: comp_j -> max_sim
        competitor_top_chunk_sims = {j: 0.0 for j in range(n_posts) if j != i}

        if has_chunks and n_chunks > 0:
            # Find row indices of post i's chunks in chunk_mat
            i_chunk_mask = (chunk_to_post_arr == i)
            other_chunk_mask = (chunk_to_post_arr != i)

            if np.any(i_chunk_mask) and np.any(other_chunk_mask):
                i_chunk_submat = chunk_mat[i_chunk_mask]       # (n_i x 768)
                other_chunk_submat = chunk_mat[other_chunk_mask] # (n_others x 768)
                other_posts_for_chunks = chunk_to_post_arr[other_chunk_mask]

                # Dot product: (n_i x n_others)
                sim_block = np.dot(i_chunk_submat, other_chunk_submat.T)
                np.clip(sim_block, -1.0, 1.0, out=sim_block)

                for local_c_idx in range(sim_block.shape[0]):
                    row_sims = sim_block[local_c_idx]
                    best_other_chunk_idx = int(np.argmax(row_sims))
                    best_sim = float(row_sims[best_other_chunk_idx])
                    best_post_idx = int(other_posts_for_chunks[best_other_chunk_idx])
                    best_route = posts_data[best_post_idx].get("route", "")

                    chunk_max_sims.append(best_sim)
                    chunk_competitor_matches.append({
                        "competitor_route": best_route,
                        "similarity": best_sim
                    })

                # Compute maximum chunk similarity for each competitor post j
                for j in competitor_top_chunk_sims.keys():
                    j_mask_in_others = (other_posts_for_chunks == j)
                    if np.any(j_mask_in_others):
                        j_sim_block = sim_block[:, j_mask_in_others]
                        competitor_top_chunk_sims[j] = float(np.max(j_sim_block))
            else:
                for _ in range(n_chunks):
                    chunk_max_sims.append(0.0)
                    chunk_competitor_matches.append({"competitor_route": "N/A", "similarity": 0.0})
        else:
            chunk_max_sims = [0.0]
            chunk_competitor_matches = [{"competitor_route": "N/A", "similarity": 0.0}]

        # Top 25% Quartile Cross-Post Chunk Overlap
        chunk_max_sims_sorted = sorted(chunk_max_sims, reverse=True)
        quartile_k = max(1, math.ceil(0.25 * len(chunk_max_sims_sorted)))
        top_chunk_overlap = float(np.mean(chunk_max_sims_sorted[:quartile_k]))

        # --- C. V2 Combined Similarity ---
        combined_similarity = 0.60 * top_chunk_overlap + 0.40 * whole_page_top5

        # --- D. Top 5 Similar Competitor Pages Ranked by Combined Similarity ---
        similar_pages_list = []
        for j, p_sim in other_page_sims:
            c_top_sim = competitor_top_chunk_sims.get(j, 0.0)
            comp_combined = 0.60 * c_top_sim + 0.40 * p_sim
            similar_pages_list.append({
                "post_idx": j,
                "route": posts_data[j].get("route", ""),
                "slug": posts_data[j].get("slug", ""),
                "seniority_date": posts_data[j].get("seniority_date", ""),
                "combined_similarity": float(comp_combined),
                "page_similarity": float(p_sim),
                "top_chunk_similarity": float(c_top_sim)
            })

        similar_pages_list.sort(key=lambda x: x["combined_similarity"], reverse=True)
        top5_similar_pages = similar_pages_list[:5]

        nearest_competitor = top5_similar_pages[0]["route"] if top5_similar_pages else "N/A"

        results.append({
            "post_idx": i,
            "post_data": post,
            "route": route_i,
            "seniority_date": post.get("seniority_date", ""),
            "whole_page_top5_similarity": whole_page_top5,
            "max_page_similarity": max_page_sim,
            "top_chunk_overlap": top_chunk_overlap,
            "combined_similarity": combined_similarity,
            "nearest_competitor": nearest_competitor,
            "top5_similar_pages": top5_similar_pages,
            "chunk_competitor_matches": chunk_competitor_matches
        })

    # 4. Compute Rank-Based Percentile Uniqueness Score (0-100)
    # Sort posts by combined_similarity ascending (lowest similarity = rank 0 = highest uniqueness)
    sorted_by_sim = sorted(enumerate(results), key=lambda x: x[1]["combined_similarity"])
    
    for rank, (orig_idx, res) in enumerate(sorted_by_sim):
        if n_posts > 1:
            # Percentile rank: rank 0 (lowest sim) -> 100.0, rank N-1 (highest sim) -> 0.0
            uniqueness = (1.0 - (rank / (n_posts - 1))) * 100.0
        else:
            uniqueness = 100.0

        res["uniqueness_score"] = float(uniqueness)

        # Action Decisions
        # none (>= 60), observe (40-59), remediation_candidate (< 40 or max_page_sim >= 0.88)
        if uniqueness < 40.0 or res["max_page_similarity"] >= 0.88:
            res["action"] = "remediation_candidate"
        elif uniqueness < 60.0:
            res["action"] = "observe"
        else:
            res["action"] = "none"

    return results
