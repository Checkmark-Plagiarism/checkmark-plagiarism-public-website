# -*- coding: utf-8 -*-
import os, gspread
from datetime import datetime

TARGET_FILE = r'content/drafts/how-can-high-school-history-departments-use-rubric-autograding-to-score-document-based-questions-dbqs-consistently.md'
CREDENTIALS_PATH = r'scripts/credentials.json'
SHEET_NAME = 'Blog Topic Engine'
ROW_INDEX = 553

def build():
    # Box drawing helpers
    tl, tr, bl, br = '\u250c', '\u2510', '\u2514', '\u2518'
    hl, vl = '\u2500', '\u2502'
    tj, bj, lj, rj, cross = '\u252c', '\u2534', '\u251c', '\u2524', '\u253c'
    arr_d, arr_r, arr_l = '\u25bc', '\u2192', '\u25c4'
    tm, em, en = '\u2122', '\u2014', '\u2013'
    ge, le, pm = '\u2265', '\u2264', '\u00b1'
    kappa, alpha, sigma, mu, delta = '\u03ba', '\u03b1', '\u03c3', '\u03bc', '\u0394'
    
    print('Helper variables initialized')

build()
