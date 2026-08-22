"""
Wrapper for RSS Pipeline Status Inspector.
Directs execution to scripts/RSS/get_rss_pipeline_status.py.
"""
import os
import sys

RSS_DIR = os.path.join(os.path.dirname(__file__), "RSS")
if RSS_DIR not in sys.path:
    sys.path.insert(0, RSS_DIR)

from get_rss_pipeline_status import main, get_rss_pipeline_status

if __name__ == "__main__":
    main()
