# -*- coding: utf-8 -*-
import os
import sys
import base64
import datetime
import gspread

slug = 'how-can-academic-integrity-officers-use-writing-process-timelines-to-facilitate-restorative-integrity-conferences'
target_path = os.path.join('content', 'drafts', f'{slug}.md')

chunks = []

def add(b64):
    chunks.append(base64.b64decode(b64).decode('utf-8'))

