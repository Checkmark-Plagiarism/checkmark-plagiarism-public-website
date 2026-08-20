# -*- coding: utf-8 -*-
import os, sys, datetime, gspread

slug = 'how-high-school-ap-music-theory-teachers-can-use-keystroke-playback-to-verify-melodic-dictation-and-harmonic-analysis-writeups'
draft_dir = os.path.join('content', 'drafts')
os.makedirs(draft_dir, exist_ok=True)
draft_path = os.path.join(draft_dir, f'{slug}.md')

sec_dir = os.path.join('scripts', 'draft_661_sections')
os.makedirs(sec_dir, exist_ok=True)

print('Build script initialized.')
