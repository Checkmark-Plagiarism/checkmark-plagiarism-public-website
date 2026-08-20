# -*- coding: utf-8 -*
-import os, sys, datetime, gSpread
slug = 'how-high-school-civics-and-government-teachers-can-detect-hallucinated-judicial-precedents-in-student-mock-trial-briefs'
draft_dir = os.path.join('content', 'drafts')
os.makedirs(draft_dir, exist_ok=True)
draft_path = os.path.join(draft_dir, f'{slug}.md')

parts = []

print('Initialized make_all_parts_662.py')
