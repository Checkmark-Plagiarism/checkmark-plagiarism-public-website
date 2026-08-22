"""
Wrapper for Workflow 2 — Content Analysis Engine.
Directs execution to scripts/RSS/analyze_articles.py.
"""
import os
import sys

RSS_DIR = os.path.join(os.path.dirname(__file__), "RSS")
if RSS_DIR not in sys.path:
    sys.path.insert(0, RSS_DIR)

from analyze_articles import main, run_content_analysis

if __name__ == "__main__":
    main()
