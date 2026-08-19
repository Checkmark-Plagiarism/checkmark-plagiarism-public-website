# -*- coding: utf-8 -*-
import os
import sys
import json
import gspread

slug = 'how-can-dual-credit-programs-sync-ai-assisted-rubric-evaluations-across-high-school-and-college-lms-portals'
target_dir = os.path.join('src', 'app', 'learning', '2026', '8', slug)
os.makedirs(target_dir, exist_ok=True)
target_path = os.path.join(target_dir, 'page.tsx')
