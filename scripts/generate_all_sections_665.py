# -*- coding: utf-8 -*-
import os, sys, datetime, gspread

sec_dir = os.path.join('scripts', 'draft_665_sections')
os.makedirs(sec_dir, exist_ok=True)
print('Initialized section generator')
