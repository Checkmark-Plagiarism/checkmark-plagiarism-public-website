# -*- coding: utf-8 -*-
import os, sys, datetime, gspread

slug = 'how-high-school-yearbook-advisers-can-audit-feature-profiles-and-senior-tributes-for-ai-generated-quotes'
draft_dir = os.path.join('content', 'drafts')
os.makedirs(draft_dir, exist_ok=True)
draft_path = os.path.join(draft_dir, slug + '.md')

section_files = [
    os.path.join('scripts', 'draft_669_sections', 'part' + str(i) + '.txt')
    for i in range(1, 7)
]

print('Compiling yearbook draft sections:')
content_parts = []
for sf in section_files:
    if not os.path.exists(sf):
        raise FileNotFoundError('Missing section file: ' + sf)
    with open(sf, 'r', encoding='utf-8') as f:
        t = f.read().strip()
        print(' - ' + sf + ': ' + str(len(t)) + ' chars, ' + str(len(t.split())) + ' words')
        content_parts.append(t)

full_content = '\n\n'.join(content_parts) + '\n'

with open(draft_path, 'w', encoding='utf-8') as f:
    f.write(full_content)

word_count = len(full_content.split())
byte_size = len(full_content.encode('utf-8'))

print('\n' + '=' * 60)
print('YEARBOOK AI AUDIT DIAGNOSTIC DRAFT COMPILED SUCCESSFULLY!')
print('File Path:  ' + draft_path)
print('Total Word Count: ' + str(word_count) + ' words')
print('Byte Size:  ' + str(byte_size) + ' bytes')
print('=' * 60 + '\n')

# Google Sheet Update
CREDENTIALS_PATH = os.path.join('scripts', 'credentials.json')
print('Connecting to Google Sheets...')
gc = gspread.service_account(filename=CREDENTIALS_PATH)
sheet = gc.open('Blog Topic Engine').sheet1

row_index = 669
now_iso = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
relative_draft_path = 'content/drafts/' + slug + '.md'

sheet.update_cell(row_index, 2, 'drafted')
sheet.update_cell(row_index, 5, now_iso)
sheet.update_cell(row_index, 6, relative_draft_path)

updated_values = sheet.row_values(row_index)[:6]
print('Updated row ' + str(row_index) + ' values: ' + str(updated_values))
print('Google Sheet row ' + str(row_index) + ' updated successfully!')
