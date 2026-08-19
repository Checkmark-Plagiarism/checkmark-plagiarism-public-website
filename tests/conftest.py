import os
import sys

TEST_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(TEST_DIR, ".."))
VEC_DIR = os.path.join(PROJECT_ROOT, "scripts", "learning-vectorization")
DIST_DIR = os.path.join(PROJECT_ROOT, "scripts", "learning-distinctness")
REM_DIR = os.path.join(PROJECT_ROOT, "scripts", "learning-distinctness-remediation")

for p in [PROJECT_ROOT, VEC_DIR, DIST_DIR, REM_DIR]:
    if p not in sys.path:
        sys.path.insert(0, p)
