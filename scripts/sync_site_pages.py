import os
import re
import json
import time
import requests
import gspread
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone

SHEET_NAME = "Blog Topic Engine"
CREDENTIALS_PATH = os.path.join(os.path.dirname(__file__), "credentials.json")
OLLAMA_URL = "http://localhost:11434/api/embeddings"
EMBEDDING_MODEL = "nomic-embed-text:latest"

EXPECTED_HEADERS = [
    "Topic Title",
    "Status",
    "Uniqueness Score",
    "Last Scored Date",
    "Article Generated At",
    "File Path",
    "Embedding"
]

def get_embedding(text: str) -> list:
    """Fetches embedding vector from local Ollama instance."""
    try:
        response = requests.post(
            OLLAMA_URL,
            json={"model": EMBEDDING_MODEL, "prompt": text},
            timeout=45
        )
        response.raise_for_status()
        emb = response.json()["embedding"]
        return [round(x, 5) for x in emb]
    except Exception as e:
        print(f"Error embedding '{text[:40]}...': {e}")
        raise

def discover_site_pages(app_dir: str):
    """Discovers all static and blog pages in src/app."""
    pages = []
    for root, _, files in os.walk(app_dir):
        for f in files:
            if f.startswith("page.") and f.endswith((".js", ".jsx", ".ts", ".tsx")):
                full_path = os.path.join(root, f)
                rel_path = os.path.relpath(full_path, app_dir)
                route = os.path.dirname(rel_path).replace("\\", "/")
                route = "/" + route if route else "/"
                
                # Exclude dynamic routes, api routes, slice-simulator, etc.
                if "[" in route or "]" in route or route.startswith("/api") or route.startswith("/slice-simulator"):
                    continue

                try:
                    with open(full_path, "r", encoding="utf-8", errors="ignore") as file:
                        content = file.read()
                except Exception as e:
                    print(f"Could not read {full_path}: {e}")
                    continue

                # 1. Look for metadata title
                title_match = re.search(r'title:\s*["\'`](.*?)["\'`]', content)
                title = title_match.group(1) if title_match else ""
                
                # 2. Look for <h1> if title missing or empty
                if not title or len(title.strip()) < 3:
                    h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', content, re.DOTALL)
                    if h1_match:
                        raw_h1 = re.sub(r'<[^>]+>', '', h1_match.group(1)).strip()
                        if len(raw_h1) >= 3:
                            title = raw_h1
                
                # 3. Fallback to folder name
                if not title or len(title.strip()) < 3:
                    folder_name = os.path.basename(os.path.dirname(full_path))
                    title = folder_name.replace("-", " ").title() if folder_name else "Home"

                # Clean title formatting
                title = re.sub(r'\s+', ' ', title).replace('\n', ' ').replace('\r', ' ').strip()
                clean_title = title.split(" | Checkmark Plagiarism")[0].split(" - Checkmark Plagiarism")[0].strip()
                if not clean_title:
                    clean_title = title

                pages.append({
                    "title": clean_title,
                    "full_title": title,
                    "route": route,
                    "file_path": os.path.relpath(full_path, os.path.dirname(os.path.dirname(__file__))).replace("\\", "/"),
                    "is_post": route.startswith("/learning/20") or route.startswith("/research/20") or route.startswith("/blogs/20")
                })
    return pages

def sync_pages_to_sheet():
    print(f"Connecting to Google Sheets: '{SHEET_NAME}'...")
    gc = gspread.service_account(filename=CREDENTIALS_PATH)
    sheet = gc.open(SHEET_NAME).sheet1

    # Check and update headers if needed
    current_headers = sheet.row_values(1)
    if current_headers != EXPECTED_HEADERS:
        print(f"Updating headers to: {EXPECTED_HEADERS}")
        sheet.update("A1:G1", [EXPECTED_HEADERS])

    all_rows = sheet.get_all_values()
    existing_titles = set()
    existing_routes = set()

    if len(all_rows) > 1:
        for r in all_rows[1:]:
            if len(r) > 0 and r[0].strip():
                existing_titles.add(r[0].strip().lower())
            if len(r) > 5 and r[5].strip():
                existing_routes.add(r[5].strip().lower())

    app_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "src", "app")
    discovered_pages = discover_site_pages(app_dir)
    print(f"Found {len(discovered_pages)} concrete site pages (Blog & Main Pages).")

    new_pages = []
    for page in discovered_pages:
        title_key = page["title"].lower()
        file_key = page["file_path"].lower()
        if title_key not in existing_titles and file_key not in existing_routes:
            new_pages.append(page)

    print(f"{len(discovered_pages) - len(new_pages)} pages already in Google Sheet. {len(new_pages)} new pages to add.")

    if not new_pages:
        print("All site pages are already synced to the Google Sheet.")
        return

    # Process and embed new pages concurrently with 4 workers
    now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S")
    start_time = time.time()
    
    print(f"Generating embeddings for {len(new_pages)} pages using 4 concurrent workers...")
    
    def process_page(item):
        idx, page = item
        emb = get_embedding(page["title"])
        return (idx, page, emb)

    rows_to_append = []
    with ThreadPoolExecutor(max_workers=4) as executor:
        for count, (idx, page, emb) in enumerate(executor.map(process_page, enumerate(new_pages, start=1)), start=1):
            row = [
                page["title"],                         # Topic Title (Column A)
                "published",                           # Status (Column B)
                "1.0",                                 # Uniqueness Score (Column C)
                now_iso,                               # Last Scored Date (Column D)
                now_iso,                               # Article Generated At (Column E)
                page["file_path"],                     # File Path (Column F)
                json.dumps(emb)                        # Embedding Vector (Column G)
            ]
            rows_to_append.append(row)
            
            if count % 20 == 0 or count == len(new_pages):
                elapsed = time.time() - start_time
                rate = count / elapsed
                remaining = (len(new_pages) - count) / rate if rate > 0 else 0
                print(f"[{count}/{len(new_pages)}] Processed embeddings ({rate:.1f} pages/sec) | Est. remaining: {remaining:.0f}s")

            # Batch append in chunks of 50
            if len(rows_to_append) >= 50:
                print(f"--> Writing batch of {len(rows_to_append)} rows to Google Sheet...")
                sheet.append_rows(rows_to_append, value_input_option="RAW")
                rows_to_append = []
                time.sleep(1)

    if rows_to_append:
        print(f"--> Writing final batch of {len(rows_to_append)} rows to Google Sheet...")
        sheet.append_rows(rows_to_append, value_input_option="RAW")

    total_time = time.time() - start_time
    print(f"Successfully synced all {len(new_pages)} pages and cached their vectors in Google Sheets in {total_time/60:.2f} minutes ({len(new_pages)/total_time:.2f} pages/sec).")

if __name__ == "__main__":
    sync_pages_to_sheet()
