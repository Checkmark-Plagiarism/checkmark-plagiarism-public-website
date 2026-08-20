import os
import gspread

SHEET_NAME = "Blog Topic Engine"
CREDENTIALS_PATH = os.path.join(os.path.dirname(__file__), "credentials.json")

print(f"Connecting to Google Sheets: '{SHEET_NAME}'...")
gc = gspread.service_account(filename=CREDENTIALS_PATH)
sheet = gc.open(SHEET_NAME).sheet1

row_index = 623
row_values = sheet.row_values(row_index)
print(f"Current row {row_index} values: {row_values}")

new_file_path = "src/app/learning/2026/8/how-can-ap-psychology-teachers-audit-student-empirical-research-writeups-for-fabricated-participant-data-and-uncited-studies/page.tsx"

# Update Column B and Column F
sheet.update_cell(row_index, 2, "published")
sheet.update_cell(row_index, 6, new_file_path)

updated_row_values = sheet.row_values(row_index)
print(f"Updated row {row_index} values: {updated_row_values}")
print("Google Sheet row 623 updated successfully!")
