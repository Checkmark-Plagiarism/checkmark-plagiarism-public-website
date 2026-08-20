# -*- coding: utf-8 -*-
import sys, base64, os

part_num = sys.argv[1]
b64_data = sys.argv[2].encode('utf-8')
text = base64.b64decode(b64_data).decode('utf-8')
sec_dir = os.path.join('scripts', 'draft_663_sections')
os.makedirs(sec_dir, exist_ok=True)
target_file = os.path.join(sec_dir, f'part{part_num}.txt')
mode = sys.argv[3] if len(sys.argv) > 3 else 'a'

with open(target_file, mode, encoding='utf-8') as f:
    f.write(text)

print(f'Written {len(text)} chars to {target_file} (mode: {mode})')
