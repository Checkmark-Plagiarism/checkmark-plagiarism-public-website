import os
import datetime
import gspread

# 1. Verify Draft File
draft_path = os.path.join("content", "drafts", "how-can-special-education-teams-distinguish-approved-speech-to-text-accommodations-from-generative-ai-ghostwriting.md")

if not os.path.exists(draft_path):
    print(f"Error: Draft file does not exist at {draft_path}")
    exit(1)

with open(draft_path, "r", encoding="utf-8") as f:
    text = f.read()

word_count = len(text.split())
file_size_bytes = os.path.getsize(draft_path)

print(f"Draft File: {draft_path}")
print(f"Word Count: {word_count} words")
print(f"File Size: {file_size_bytes} bytes")

# 2. Update Google Sheet
SHEET_NAME = "Blog Topic Engine"
CREDENTIALS_PATH = os.path.join("scripts", "credentials.json")

print(f"\nConnecting to Google Sheets: '{SHEET_NAME}'...")
gc = gspread.service_account(filename=CREDENTIALS_PATH)
sheet = gc.open(SHEET_NAME).sheet1

row_index = 632
current_timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
relative_path = "content/drafts/how-can-special-education-teams-distinguish-approved-speech-to-text-accommodations-from-generative-ai-ghostwriting.md"

# Update Column B (Status), Column E (Article Generated At), Column F (File Path)
sheet.update_cell(row_index, 2, "drafted")
sheet.update_cell(row_index, 5, current_timestamp)
sheet.update_cell(row_index, 6, relative_path)

print(f"Google Sheet Row {row_index} updated successfully:")
print(f"  Col B (Status): 'drafted'")
print(f"  Col E (Article Generated At): '{current_timestamp}'")
print(f"  Col F (File Path): '{relative_path}'")
