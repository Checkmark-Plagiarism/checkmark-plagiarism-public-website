import os
import datetime
import gspread

SHEET_NAME = "Blog Topic Engine"
CREDENTIALS_PATH = os.path.join(r"c:\Users\jaron\www\checkmark-plagiarism-public.dev\scripts", "credentials.json")

print(f"Connecting to Google Sheets: '{SHEET_NAME}'...")
gc = gspread.service_account(filename=CREDENTIALS_PATH)
sheet = gc.open(SHEET_NAME).sheet1

row_index = 641
row_values = sheet.row_values(row_index)[:6]
print(f"Current row {row_index} values (cols 1-6): {row_values}")

new_file_path = "content/drafts/how-can-engineering-faculty-distinguish-real-simulation-telemetry-and-cad-design-iterations-from-ai-fabricated-data-in-capstone-reports.md"
current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# Update Column B (Status), Column E (Article Generated At), and Column F (File Path)
sheet.update_cell(row_index, 2, "drafted")
sheet.update_cell(row_index, 5, current_time)
sheet.update_cell(row_index, 6, new_file_path)

updated_row_values = sheet.row_values(row_index)[:6]
print(f"Updated row {row_index} values (cols 1-6): {updated_row_values}")
print(f"Google Sheet row {row_index} updated successfully!")
