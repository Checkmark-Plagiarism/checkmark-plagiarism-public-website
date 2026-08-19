import os
import gspread

SHEET_NAME = "Blog Topic Engine"
CREDENTIALS_PATH = os.path.join(os.path.dirname(__file__), "credentials.json")

print(f"Connecting to Google Sheets: '{SHEET_NAME}'...")
gc = gspread.service_account(filename=CREDENTIALS_PATH)
sheet = gc.open(SHEET_NAME).sheet1

row_index = 617
row_values = sheet.row_values(row_index)
print(f"Current row {row_index} values: {row_values}")

# Expected columns:
# Col A (1): Topic Title
# Col B (2): Status -> 'published'
# Col C (3): Uniqueness Score
# Col D (4): Last Scored Date
# Col E (5): Article Generated At
# Col F (6): File Path -> 'src/app/learning/2026/8/how-can-social-studies-department-chairs-detect-hallucinated-archival-citations-in-student-history-research-papers/page.tsx'

new_file_path = "src/app/learning/2026/8/how-can-social-studies-department-chairs-detect-hallucinated-archival-citations-in-student-history-research-papers/page.tsx"

# Update Column B and Column F
sheet.update_cell(row_index, 2, "published")
sheet.update_cell(row_index, 6, new_file_path)

updated_row_values = sheet.row_values(row_index)
print(f"Updated row {row_index} values: {updated_row_values}")
print("Google Sheet updated successfully!")
