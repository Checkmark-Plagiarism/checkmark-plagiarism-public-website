# -*- coding: utf-8 -*
import os, sys, datetime, gspread

slug = "how-high-school-yearbook-advisers-can-audit-feature-profiles-and-senior-tributes-for-ai-generated-quotes"
draft_dir = os.path.join("content", "drafts")
os.makedirs(draft_dir, exist_ok=True)
draft_path = os.path.join(draft_dir, slug + '.md')

parts = []
