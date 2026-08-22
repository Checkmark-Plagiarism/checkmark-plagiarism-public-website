---
name: RSS_CONTENT_ANALYSIS
description: Workflow 2 — Content Analysis. Evaluates PENDING articles from RSS_ARTICLES in the RSS_CONTENT_SCOUNT sheet, claims them, reads full articles, scores relevance (0-100), and assigns EDITORIAL_STATUS.
---

### Step 1: Content Analysis Execution
Run the automated analysis engine to claim `PENDING` articles as `PROCESSING`, retrieve the full text content from `NORMALIZED_URL` (with fallback to `ORIGINAL_URL` and RSS metadata), and evaluate each article across the 7 Checkmark relevance dimensions:

```powershell
python scripts/RSS/analyze_articles.py --sheet-name RSS_CONTENT_SCOUNT
```

*Note: You can run with `--dry-run` to test article reading and scoring without modifying Google Sheets.*

---

### Step 2: Analysis & Scoring Verification
The script evaluates each article and updates the 15 Antigravity analysis fields in `RSS_ARTICLES`:
- **`UNDERLYING_SIGNAL`**: 1–3 sentence statement of the core pedagogical or technical shift.
- **`ARTICLE_SUMMARY`**: Factual summary (what happened, who is involved, key findings, why it matters).
- **The 7 Category Scores (0–100 total)**:
  - `PRODUCT_ADJACENCY_SCORE` (0–25)
  - `TEACHER_RELEVANCE_SCORE` (0–20)
  - `DISTINCTIVE_PERSPECTIVE_SCORE` (0–20)
  - `EVIDENCE_QUALITY_SCORE` (0–10)
  - `SEARCH_OPPORTUNITY_SCORE` (0–10)
  - `TIMELINESS_SCORE` (0–10)
  - `PRODUCT_CONNECTION_SCORE` (0–5)
- **`CHECKMARK_RELEVANCE_SCORE`**: Sum of the 7 scores.
- **`EDITORIAL_STATUS`**:
  - `0–49` -> `REJECTED`
  - `50–69` -> `WATCH`
  - `70–100` -> `CANDIDATE` (includes `PRIMARY_CHECKMARK_THEME`, `PROPOSED_ARTICLE_ANGLE`, `PROPOSED_WORKING_TITLE`)
- **Status & Timestamps**:
  - `ANALYSIS_STATUS` = `COMPLETE` (or `ERROR` if unrecoverable)
  - `ANALYSIS_DATE` = Current UTC Timestamp

---

### Step 3: Review Completion Summary
At the conclusion of the run, the workflow outputs a summary report displaying:
- RSS feeds inspected
- Articles analyzed
- Counts for `REJECTED`, `WATCH`, `CANDIDATE`, and `ERROR`
- Ranked list of highest-scoring candidates
