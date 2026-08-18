import os
import json
import gspread

SHEET_NAME = "Blog Topic Engine"
CREDENTIALS_PATH = os.path.join(os.path.dirname(__file__), "credentials.json")

def get_pipeline_status():
    gc = gspread.service_account(filename=CREDENTIALS_PATH)
    sheet = gc.open(SHEET_NAME).sheet1
    rows = sheet.get_all_values()

    if len(rows) <= 1:
        return {
            "status": "NEED_TOPICS",
            "message": "Google Sheet is empty or contains no topics.",
            "approved": [],
            "drafted": [],
            "pending": []
        }

    data = rows[1:]
    approved = []
    drafted = []
    pending = []

    for idx, row in enumerate(data, start=2):
        if len(row) < 2:
            continue
        title = row[0].strip()
        status = row[1].strip().lower()
        file_path = row[5].strip() if len(row) > 5 else ""

        if not title:
            continue

        if status == "approved":
            approved.append({"row": idx, "title": title})
        elif status == "drafted":
            drafted.append({"row": idx, "title": title, "file_path": file_path})
        elif status == "pending":
            pending.append({"row": idx, "title": title})

    if drafted:
        next_action = "STYLE_PAGE"
        msg = f"Found {len(drafted)} drafted article(s) ready for styling. Top: '{drafted[0]['title']}' ({drafted[0]['file_path']})"
    elif approved:
        next_action = "DRAFT_ARTICLE"
        msg = f"Found {len(approved)} approved topic(s) ready for writing. Top: '{approved[0]['title']}'"
    elif pending:
        next_action = "SCORE_UNIQUENESS"
        msg = f"Found {len(pending)} pending topic(s) ready for uniqueness scoring."
    else:
        next_action = "GENERATE_TOPICS"
        msg = "No approved, drafted, or pending topics found in queue. New topic generation needed."

    result = {
        "next_action": next_action,
        "message": msg,
        "counts": {
            "approved": len(approved),
            "drafted": len(drafted),
            "pending": len(pending),
            "total_rows": len(data)
        },
        "top_approved": approved[0] if approved else None,
        "top_drafted": drafted[0] if drafted else None
    }
    return result

if __name__ == "__main__":
    res = get_pipeline_status()
    print(json.dumps(res, indent=2))
