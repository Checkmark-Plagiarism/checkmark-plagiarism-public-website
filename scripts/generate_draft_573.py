# -*- coding: utf-8 -*-
import os
import base64
import datetime
import gspread

target_path = os.path.join('content', 'drafts', 'how-can-high-school-speech-and-debate-coaches-use-rubric-autograding-to-provide-objective-feedback-on-written-oratory-drafts.md')
os.makedirs(os.path.dirname(target_path), exist_ok=True)

with open(target_path, 'w', encoding='utf-8') as f:
    f.write('')

def append_b64(b64_str):
    text = base64.b64decode(b64_str).decode('utf-8')
    with open(target_path, 'a', encoding='utf-8') as f:
        f.write(text)
    print(f'Appended {len(text)} chars.')
