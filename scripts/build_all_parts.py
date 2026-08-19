# -*- coding: utf-8 -*-
import os

def append_to_build(code_text):
    with open('scripts/build_draft_604.py', 'a', encoding='utf-8') as f:
        f.write(code_text + '\n')

print('build_all_parts.py helper ready')
