# -*- coding: utf-8 -*-
import os
import sys
import json
import datetime
import gspread

SLUG = 'how-can-secondary-ela-departments-configure-standards-based-rubric-autograding-with-direct-canvas-passback'
DRAFT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'content', 'drafts'))
DRAFT_PATH = os.path.join(DRAFT_DIR, f'{SLUG}.md')
CREDENTIALS_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), 'credentials.json'))
SHEET_NAME = 'Blog Topic Engine'
ROW_NUM = 604

print('Building draft for Row 604...')
