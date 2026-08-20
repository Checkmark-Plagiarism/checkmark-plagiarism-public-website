import os
import gspread

SHEET_NAME = "Blog Topic Engine"
CREDENTIALS_PATH = os.path.join(os.path.dirname(__file__), "credentials.json")

print(f"Connecting to Google Sheets: '{SHEET_NAME}'...")
gc = gspread.service_account(filename=CREDENTIALS_PATH)
sheet = gc.open(SHEET_NAME).sheet1

row_index = 624
row_values = sheet.row_values(row_index)
print(f"Current row {row_index} values: {row_values}")

new_file_path = "src/app/learning/2026/8/how-can-district-instructional-technology-teams-configure-canvas-lti-1-3-for-centralized-assignment-integrity-audits-across-all-high-schools/page.tsx"

# Update Column B and Column F
sheet.update_cell(row_index, 2, "published")
sheet.update_cell(row_index, 6, new_file_path)

updated_row_values = sheet.row_values(row_index)
print(f"Updated row {row_index} values: {updated_row_values}")
print(f"Google Sheet row {row_index} updated successfully!")
