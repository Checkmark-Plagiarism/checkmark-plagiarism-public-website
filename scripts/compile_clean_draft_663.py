# -*- coding: utf-8 -*-
import os, sys, datetime, gspread, re

slug = 'can-ai-rubric-assistants-accurately-evaluate-point-of-view-pov-analysis-in-high-school-ap-european-history-dbqs'
draft_path = os.path.join('content', 'drafts', f'{slug}.md')

section_files = [os.path.join('scripts', 'draft_663_sections', f'part{i}.txt') for i in range(1, 7)]

raw_text = ''
for sf in section_files:
    with open(sf, 'r', encoding='utf-8') as f:
        raw_text += f.read().strip() + '\n\n'

# Clean all stray backticks: remove any lines that are solely  or ` or ` unless they enclose a box
lines = raw_text.split('\n')
clean_lines = []
for line in lines:
    s = line.strip()
    if s.startswith('┌'):
        clean_lines.append('`')
        clean_lines.append(line)
    elif s.startswith('└'):
        clean_lines.append(line)
        clean_lines.append('`')
    elif s in ['', '`', '`', '``']:
        continue
    else:
        clean_lines.append(line)

cleaned_text = '\n'.join(clean_lines)

# Clean multiple empty lines
cleaned_text = re.sub(r'\n{3,}', '\n\n', cleaned_text)

# Ensure frontmatter is properly bounded by ---
parts = cleaned_text.split('---', 2)
if len(parts) >= 3:
    cleaned_text = '---\n' + parts[1].strip() + '\n---\n\n' + parts[2].strip() + '\n'

with open(draft_path, 'w', encoding='utf-8') as f:
    f.write(cleaned_text)

word_count = len(cleaned_text.split())
byte_size = len(cleaned_text.encode('utf-8'))

print(f'Compiled clean draft to: {draft_path}')
print(f'Word count: {word_count}')
print(f'Byte size: {byte_size}')

# Update Google Sheet
gc = gspread.service_account(filename=os.path.join('scripts', 'credentials.json'))
sheet = gc.open('Blog Topic Engine').sheet1
now_iso = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
sheet.update_cell(663, 2, 'drafted')
sheet.update_cell(663, 5, now_iso)
sheet.update_cell(663, 6, f'content/drafts/{slug}.md')
print('Google Sheet row 663 updated successfully!')
