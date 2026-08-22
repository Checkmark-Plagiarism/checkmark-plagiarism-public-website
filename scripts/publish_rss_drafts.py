"""
Wrapper for Workflow 4 — RSS Blog Publishing Engine.
Directs execution to scripts/RSS/publish_rss_drafts.py.
"""
import os
import sys

RSS_DIR = os.path.join(os.path.dirname(__file__), "RSS")
if RSS_DIR not in sys.path:
    sys.path.insert(0, RSS_DIR)

from publish_rss_drafts import main, run_rss_publishing

if __name__ == "__main__":
    main()
