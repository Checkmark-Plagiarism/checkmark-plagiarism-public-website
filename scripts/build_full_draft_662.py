# -*- coding: utf-8 -*-
import os, sys, datetime, gspread

slug = 'how-high-school-civics-and-government-teachers-can-detect-hallucinated-judicial-precedents-in-student-mock-trial-briefs'
draft_dir = os.path.join('content', 'drafts')
os.makedirs(draft_dir, exist_ok=True)
draft_path = os.path.join(draft_dir, f'{slug}.md')

sec_dir = os.path.join('scripts', 'draft_662_sections')
os.makedirs(sec_dir, exist_ok=True)

print('Build script runner initialized.')
