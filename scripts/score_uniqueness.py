import os
import json
import requests
import numpy as np
import gspread
from datetime import datetime, timezone

SHEET_NAME = "Blog Topic Engine"
CREDENTIALS_PATH = os.path.join(os.path.dirname(__file__), "credentials.json")
OLLAMA_URL = "http://localhost:11434/api/embeddings"
EMBEDDING_MODEL = "nomic-embed-text:latest"
UNIQUENESS_THRESHOLD = 0.80  # Max cosine similarity threshold (<0.80 means unique / approved)

EXPECTED_HEADERS = [
    "Topic Title",
    "Status",
    "Uniqueness Score",
    "Last Scored Date",
    "Article Generated At",
    "File Path",
    "Embedding"
]

def get_embedding(text: str) -> np.ndarray:
    """Generates embedding vector from local Ollama instance."""
    try:
        response = requests.post(
            OLLAMA_URL,
            json={"model": EMBEDDING_MODEL, "prompt": text},
            timeout=30
        )
        response.raise_for_status()
        raw_emb = response.json()["embedding"]
        return np.array([round(x, 5) for x in raw_emb], dtype=np.float32)
    except requests.exceptions.RequestException as e:
        print(f"Error connecting to Ollama at {OLLAMA_URL}: {e}")
        raise

def parse_or_generate_embedding(text: str, cached_json: str) -> tuple[np.ndarray, bool]:
    """
    Returns (embedding_numpy_array, was_generated_boolean).
    If cached_json is valid, parses directly in <1ms without calling Ollama.
    """
    if cached_json and cached_json.strip():
        try:
            vec = json.loads(cached_json.strip())
            if isinstance(vec, list) and len(vec) > 0:
                return np.array(vec, dtype=np.float32), False
        except json.JSONDecodeError:
            pass
    # Generate fresh embedding if missing or malformed
    emb = get_embedding(text)
    return emb, True

def cosine_similarity(a: np.ndarray, b: np.ndarray) -> float:
    dot = np.dot(a, b)
    norm_a = np.linalg.norm(a)
    norm_b = np.linalg.norm(b)
    if norm_a == 0 or norm_b == 0:
        return 0.0
    return float(dot / (norm_a * norm_b))

def main():
    print(f"Connecting to Google Sheets: '{SHEET_NAME}'...")
    gc = gspread.service_account(filename=CREDENTIALS_PATH)
    sheet = gc.open(SHEET_NAME).sheet1
    
    # Check headers
    header_row = sheet.row_values(1)
    if header_row != EXPECTED_HEADERS:
        print(f"Updating headers to: {EXPECTED_HEADERS}")
        sheet.update("A1:G1", [EXPECTED_HEADERS])

    rows = sheet.get_all_values()

    if len(rows) <= 1:
        print("No topics found in the spreadsheet.")
        return

    data = rows[1:]
    print(f"Loaded {len(data)} total rows from Google Sheet.")

    # 1. Collect all reference embeddings (published, approved, drafted)
    reference_items = [] # list of (title, embedding_vector, row_idx)
    pending_items = []   # list of (row_idx, topic, cached_emb_str)

    missing_vector_updates = []

    for idx, row in enumerate(data, start=2):
        topic = row[0].strip() if len(row) > 0 else ""
        status = row[1].strip() if len(row) > 1 else ""
        cached_emb_str = row[6].strip() if len(row) > 6 else ""

        if not topic:
            continue

        if status in ["approved", "drafted", "published"]:
            emb, generated = parse_or_generate_embedding(topic, cached_emb_str)
            reference_items.append((topic, emb, idx))
            if generated:
                # Backfill embedding into Column G
                sheet.update_cell(idx, 7, json.dumps(emb.tolist()))
                print(f"Backfilled vector for row {idx}: '{topic[:35]}...'")

        elif status == "pending":
            pending_items.append((idx, topic, cached_emb_str))

    print(f"Found {len(reference_items)} reference articles/pages.")
    print(f"Found {len(pending_items)} pending topic(s) to evaluate.")

    if not pending_items:
        print("No pending topics to score.")
        return

    # 2. Score pending topics
    for row_idx, topic, cached_emb_str in pending_items:
        t0 = datetime.now()
        candidate_embed, generated = parse_or_generate_embedding(topic, cached_emb_str)

        if not reference_items:
            max_similarity = 0.0
            closest_title = "None"
        else:
            similarities = [
                (ref_title, cosine_similarity(candidate_embed, ref_emb))
                for ref_title, ref_emb, _ in reference_items
            ]
            similarities.sort(key=lambda x: x[1], reverse=True)
            closest_title, max_similarity = similarities[0]

        uniqueness_score = round(1.0 - max_similarity, 3)
        now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S")
        new_status = "approved" if max_similarity < UNIQUENESS_THRESHOLD else "rejected_duplicate"

        # Update sheet cells for this candidate: Status (B), Score (C), Last Scored (D), Embedding (G)
        sheet.update_cell(row_idx, 2, new_status)
        sheet.update_cell(row_idx, 3, uniqueness_score)
        sheet.update_cell(row_idx, 4, now_iso)
        if generated:
            sheet.update_cell(row_idx, 7, json.dumps(candidate_embed.tolist()))

        print(f"\n[Row {row_idx}] Scored '{topic}'")
        print(f"  Result: {new_status} (Score: {uniqueness_score})")
        print(f"  Closest Match ({max_similarity:.3f}): '{closest_title}'")

        # If approved, add to reference set so subsequent candidates in this batch also check against it
        if new_status == "approved":
            reference_items.append((topic, candidate_embed, row_idx))

    print("\nUniqueness evaluation completed successfully.")

if __name__ == "__main__":
    main()
