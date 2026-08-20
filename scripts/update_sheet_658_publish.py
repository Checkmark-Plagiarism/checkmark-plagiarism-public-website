import os
import gspread

SHEET_NAME = "Blog Topic Engine"
CREDENTIALS_PATH = os.path.join(r"c:\Users\jaron\www\checkmark-plagiarism-public.dev\scripts", "credentials.json")

print(f"Connecting to Google Sheets: '{SHEET_NAME}'...")
gc = gspread.service_account(filename=CREDENTIALS_PATH)
sheet = gc.open(SHEET_NAME).sheet1

row_index = 658
row_values = sheet.row_values(row_index)[:6]
print(f"Current row {row_index} values: {row_values}")

new_file_path = "src/app/learning/2026/8/what-writing-process-evidence-proves-authentic-visual-inquiry-in-ap-2-d-art-and-design-written-commentaries/page.tsx"

# Update Column B (Status) and Column F (File Path)
sheet.update_cell(row_index, 2, "published")
sheet.update_cell(row_index, 6, new_file_path)

updated_row_values = sheet.row_values(row_index)[:6]
print(f"Updated row {row_index} values: {updated_row_values}")
print(f"Google Sheet row {row_index} updated successfully!")
