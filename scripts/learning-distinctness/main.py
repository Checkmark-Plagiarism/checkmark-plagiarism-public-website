import os
import sys
import time
import argparse
from typing import List, Dict, Any, Optional

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
VEC_SCRIPT_DIR = os.path.join(PROJECT_ROOT, "scripts", "learning-vectorization")
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)
if VEC_SCRIPT_DIR not in sys.path:
    sys.path.insert(0, VEC_SCRIPT_DIR)

from extractor import get_project_root
from corpus_loader import load_vectorized_corpus
from matrix_engine import compute_corpus_similarity_matrix
from frontmatter_sync import sync_distinctness_file

def main():
    parser = argparse.ArgumentParser(description="Workflow 2: Checkmark Plagiarism Fast Corpus Matrix Distinctness & Scoring")
    parser.add_argument("--dry-run", action="store_true", help="Calculate scores in-memory without modifying distinctness.md files")
    parser.add_argument("--page", type=str, default=None, help="Display scores for a specific learning post (e.g. /learning/2026/6/slug)")
    
    args = parser.parse_args()
    root = get_project_root()

    print(f"=== Workflow 2: Learning Corpus Distinctness Scoring ===")
    print(f"Project root: {root}")
    if args.dry_run:
        print("[DRY-RUN MODE ENABLED - distinctness.md files will not be modified]")

    start_time = time.time()
    corpus = load_vectorized_corpus(root)
    load_time = time.time() - start_time

    if not corpus:
        print("No vectorized learning posts found! Please run Workflow 1 (learning-vectorization) first.")
        sys.exit(0)

    print(f"Loaded {len(corpus)} vectorized posts into memory in {load_time:.3f}s.")

    calc_start = time.time()
    scored_results = compute_corpus_similarity_matrix(corpus)
    calc_time = time.time() - calc_start

    print(f"Computed pairwise matrix and similarity metrics in {calc_time:.3f}s (0 Ollama calls).")

    # Sync back to files
    sync_start = time.time()
    for item in scored_results:
        sync_distinctness_file(item, dry_run=args.dry_run)
    sync_time = time.time() - sync_start

    # Summary Statistics
    actions_count = {"none": 0, "observe": 0, "remediation_candidate": 0}
    for item in scored_results:
        act = item.get("action", "none")
        actions_count[act] = actions_count.get(act, 0) + 1

    print("\n=== Corpus Uniqueness & Action Distribution ===")
    print(f"Total Vectorized Posts Scored: {len(scored_results)}")
    print(f"  - Distinct ('none', Score >= 60): {actions_count['none']}")
    print(f"  - Moderate Overlap ('observe', Score 40-59): {actions_count['observe']}")
    print(f"  - Flagged for Remediation ('remediation_candidate', Score < 40 or Sim >= 0.88): {actions_count['remediation_candidate']}")
    print(f"Total Execution Time: {(time.time() - start_time):.3f}s")

    if args.page:
        target = args.page.strip()
        matched = [r for r in scored_results if r["route"] == target or r["post_data"]["slug"] == target or target in r["route"]]
        if matched:
            m = matched[0]
            print(f"\n--- Detailed Score for {m['route']} ---")
            print(f"Uniqueness Score: {m['uniqueness_score']:.2f} / 100")
            print(f"Action: {m['action']}")
            print(f"Combined Similarity: {m['combined_similarity']:.4f}")
            print(f"Whole-Page Top-5 Sim: {m['whole_page_top5_similarity']:.4f}")
            print(f"Top 25% Chunk Overlap: {m['top_chunk_overlap']:.4f}")
            print(f"Nearest Competitor: {m['nearest_competitor']}")
            print("\nTop 5 Similar Pages:")
            for sp in m["top5_similar_pages"]:
                print(f"  - {sp['route']} (Combined: {sp['combined_similarity']:.4f}, Page: {sp['page_similarity']:.4f}, Top Chunk: {sp['top_chunk_similarity']:.4f})")
        else:
            print(f"\nTarget page '{target}' not found among vectorized posts.")

if __name__ == "__main__":
    main()
