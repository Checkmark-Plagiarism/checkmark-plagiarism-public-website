# -*- coding: utf-8 -*-
import os
import sys
import datetime
import base64
import gspread

slug = 'how-can-ap-capstone-coordinators-use-keystroke-playback-to-validate-primary-source-synthesis-in-academic-research-papers'
target_path = os.path.join('content', 'drafts', f'{slug}.md')

chunks = []

def add_chunk(b64_str):
    chunks.append(base64.b64decode(b64_str).decode('utf-8'))

