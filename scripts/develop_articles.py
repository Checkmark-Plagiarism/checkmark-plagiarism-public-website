"""
Wrapper for Workflow 3 — RSS Article Development Engine.
Directs execution to scripts/RSS/develop_articles.py.
"""
import os
import sys

RSS_DIR = os.path.join(os.path.dirname(__file__), "RSS")
if RSS_DIR not in sys.path:
    sys.path.insert(0, RSS_DIR)

from develop_articles import main, run_article_development

if __name__ == "__main__":
    main()
