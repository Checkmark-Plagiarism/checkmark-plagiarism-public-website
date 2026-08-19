import os
import sys
import argparse
from typing import Optional, List, Dict, Any

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)

from extractor import discover_learning_posts, extract_post_data, get_project_root
from vectorizer import process_single_post

def main():
    parser = argparse.ArgumentParser(description="Workflow 1: Checkmark Plagiarism Learning Post Vectorization")
    parser.add_argument("--dry-run", action="store_true", help="Check status without calling Ollama embeddings API")
    parser.add_argument("--limit", type=int, default=None, help="Limit number of posts to process in this run")
    parser.add_argument("--page", type=str, default=None, help="Target a specific learning post by route or path (e.g. /learning/2026/6/slug)")
    parser.add_argument("--force", action="store_true", help="Force re-vectorization even if cached hash matches")
    
    args = parser.parse_args()
    root = get_project_root()

    print(f"=== Workflow 1: Learning Post Vectorization ===")
    print(f"Project root: {root}")
    if args.dry_run:
        print("[DRY-RUN MODE ENABLED - No embeddings will be requested]")

    if args.page:
        # Match single page
        target = args.page.strip()
        all_posts = discover_learning_posts(root)
        matched_posts = [
            p for p in all_posts 
            if p["route"] == target or p["slug"] == target or target in p["file_path"].replace("\\", "/")
        ]
        if not matched_posts:
            # Try direct file extraction
            if os.path.exists(target):
                matched_posts = [extract_post_data(target, root)]
            else:
                print(f"Error: Could not find learning post matching '{target}'")
                sys.exit(1)
        posts_to_process = matched_posts
    else:
        all_posts = discover_learning_posts(root)
        posts_to_process = all_posts

    print(f"Discovered {len(all_posts)} total learning posts in corpus.")

    processed = 0
    cached = 0
    vectorized = 0
    pending = 0

    for idx, post in enumerate(posts_to_process, start=1):
        if args.limit and processed >= args.limit:
            print(f"\nReached batch limit of {args.limit} posts.")
            break

        res = process_single_post(post, dry_run=args.dry_run, force=args.force)
        status = res["status"]

        if status == "cached":
            cached += 1
        elif status == "vectorized":
            vectorized += 1
            processed += 1
            print(f"[{processed}] Vectorized & Persisted: {post['route']} ({res['chunks_count']} chunks)")
        elif status == "pending_embedding":
            pending += 1
            processed += 1
            print(f"[{processed}] Needs Vectorization: {post['route']} ({res['chunks_count']} chunks)")

    print("\n=== Vectorization Summary ===")
    print(f"Total Posts Checked: {len(posts_to_process)}")
    print(f"Already Up-To-Date: {cached}")
    if args.dry_run:
        print(f"Pending Embeddings: {pending}")
    else:
        print(f"Freshly Vectorized: {vectorized}")

if __name__ == "__main__":
    main()
