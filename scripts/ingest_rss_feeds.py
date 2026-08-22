"""
Wrapper for RSS Content Scout Ingestion Engine.
Directs execution to scripts/RSS/ingest_rss_feeds.py.
"""
import os
import sys

RSS_DIR = os.path.join(os.path.dirname(__file__), "RSS")
if RSS_DIR not in sys.path:
    sys.path.insert(0, RSS_DIR)

from ingest_rss_feeds import main, run_ingestion

if __name__ == "__main__":
    main()
