import os
import sys
from typing import List, Dict, Any, Optional

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
VEC_SCRIPT_DIR = os.path.join(PROJECT_ROOT, "scripts", "learning-vectorization")
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)
if VEC_SCRIPT_DIR not in sys.path:
    sys.path.insert(0, VEC_SCRIPT_DIR)

from extractor import discover_learning_posts, get_project_root
from persistence import read_distinctness_md, get_sibling_distinctness_path

def load_vectorized_corpus(project_root: Optional[str] = None) -> List[Dict[str, Any]]:
    """
    Scans the learning directory for all sibling distinctness.md files
    and loads their cached vectors and chunks into memory.
    """
    if project_root is None:
        project_root = get_project_root()

    all_posts = discover_learning_posts(project_root)
    corpus = []

    for post in all_posts:
        dist_path = get_sibling_distinctness_path(post["file_path"])
        dist_data = read_distinctness_md(dist_path)
        if dist_data and dist_data.get("page_vector") and len(dist_data["page_vector"]) > 0:
            post_entry = {
                "route": post["route"],
                "slug": post["slug"],
                "year": post["year"],
                "month": post["month"],
                "title": post["title"],
                "seniority_date": post["seniority_date"],
                "file_path": post["file_path"],
                "distinctness_file_path": dist_path,
                "frontmatter": dist_data.get("frontmatter", {}),
                "page_vector": dist_data.get("page_vector", []),
                "chunks": dist_data.get("chunks", [])
            }
            corpus.append(post_entry)

    return corpus
