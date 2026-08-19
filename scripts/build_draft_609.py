# -*- coding: utf-8 -*-
import os, sys, json, datetime, gspread

SLUG = "how-can-graduate-writing-program-chairs-verify-independent-authorship-in-doctoral-dissertations-without-storing-student-manuscripts"
ROW_NUM = 609
TARGET_FILE = os.path.join("content", "drafts", f{SLUG}.md)
CREDENTIALS_PATH = os.path.join("scripts", "credentials.json")
SHEET_NAME = "Blog Topic Engine"

os.makedirs(os.path.dirname(TARGET_FILE), exist_ok=True)

parts = []
def add(chunk):
    parts.append(chunk)

