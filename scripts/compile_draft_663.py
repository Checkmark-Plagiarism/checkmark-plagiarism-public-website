# -*- coding: utf-8 -*-
import os
import sys
import datetime
import gspread

slug = 'can-ai-rubric-assistants-accurately-evaluate-point-of-view-pov-analysis-in-high-school-ap-european-history-dbqs'
draft_dir = os.path.join('content', 'drafts')
os.makedirs(draft_dir, exist_ok=True)
draft_path = os.path.join(draft_dir, f'{slug}.md')

section_files = [
    os.path.join('scripts', 'draft_663_sections', f'part{i}.txt')
    for i in range(1, 7)
]

print('Compiling sections:')
content_parts = []
for sf in section_files:
    if not os.path.exists(sf):
        raise FileNotFoundError(f'Missing section file: {sf}')
    with open(sf, 'r', encoding='utf-8') as f:
        text = f.read().strip()
        print(f' - {sf}: {len(text)} characters, {len(text.split())} words')
        content_parts.append(text)

full_content = '\n\n'.join(content_parts) + '\n'

with open(draft_path, 'w', encoding='utf-8') as f:
    f.write(full_content)

word_count = len(full_content.split())
byte_size = len(full_content.encode('utf-8'))

print('\n=======================================================')
print('DRAFT COMPILED SUCCESSFULLY!')
print(f'File Path:  {draft_path}')
print(f'Word Count: {word_count} words')
print(f'Byte Size:  {byte_size} bytes')
print('=======================================================\n')

# Google Sheet Update
SHEET_NAME = 'Blog Topic Engine'
CREDENTIALS_PATH = os.path.join('scripts', 'credentials.json')

print('Connecting to Google Sheets...')
gc = gspread.service_account(filename=CREDENTIALS_PATH)
sheet = gc.open(SHEET_NAME).sheet1

row_index = 663
current_row = sheet.row_values(row_index)[:6]
print(f'Current row {row_index} values: {current_row}')

now_iso = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
relative_draft_path = f'content/drafts/{slug}.md'

sheet.update_cell(row_index, 2, 'drafted')
sheet.update_cell(row_index, 5, now_iso)
sheet.update_cell(row_index, 6, relative_draft_path)

updated_row = sheet.row_values(row_index)[:6]
print(f'Updated row {row_index} values: {updated_row}')
print(f'\nGoogle Sheet row {row_index} successfully updated!')
