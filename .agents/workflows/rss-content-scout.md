---
name: rss-content-scout
description: RSS Content Scout pipeline targeting the RSS_CONTENT_SCOUNT Google Sheet. Automates feed ingestion, URL normalization, duplicate detection, and Antigravity editorial analysis.
---

### Step 1: Run Python RSS Ingestion
Execute the automated Python RSS ingestion engine to fetch all active RSS/Atom feeds from column A of the `RSS` worksheet, normalize URLs, detect duplicates, and batch append newly discovered articles to `RSS_ARTICLES` with `ANALYSIS_STATUS = PENDING`:

```powershell
python scripts/RSS/ingest_rss_feeds.py --sheet-name RSS_CONTENT_SCOUNT
```

*Note: You can run with `--dry-run` to test feed parsing without modifying Google Sheets.*

---

### Step 2: Inspect Pending Articles Queue
The Python ingestion script guarantees that:
- All newly discovered articles are added to `RSS_ARTICLES` with `ANALYSIS_STATUS = PENDING`.
- Duplicate articles across feeds or historical runs are skipped or updated without duplicating rows.
- Existing Antigravity analysis fields (scores, reasoning, summaries) are strictly preserved and never overwritten.

---

### Step 3: Antigravity Editorial Analysis & Scoring
For every article in `RSS_ARTICLES` with `ANALYSIS_STATUS == "PENDING"`, Antigravity evaluates educational relevance to Checkmark Plagiarism and writes back the following 15 analysis fields:

1. **`ARTICLE_SUMMARY`**: Concise summary of the source article and its key claims.
2. **`UNDERLYING_SIGNAL`**: The core pedagogical, technical, or policy shift indicated by the news.
3. **Relevance & Strategic Scores (1–10)**:
   - `CHECKMARK_RELEVANCE_SCORE`: Direct alignment with plagiarism detection, AI writing, and academic integrity.
   - `PRODUCT_ADJACENCY_SCORE`: Closeness to Checkmark's core features (Essay Playback, AI detection, rubric autograding).
   - `TEACHER_RELEVANCE_SCORE`: Actionable value for high school teachers (grades 9–12).
   - `DISTINCTIVE_PERSPECTIVE_SCORE`: Potential for a unique, defensible Checkmark perspective.
   - `EVIDENCE_QUALITY_SCORE`: Reliability and depth of data/sources in the article.
   - `SEARCH_OPPORTUNITY_SCORE`: Long-tail search demand from educators.
   - `TIMELINESS_SCORE`: Currency and urgency in the current academic year.
   - `PRODUCT_CONNECTION_SCORE`: Natural tie-in to Checkmark workflows without forced selling.
4. **Editorial Direction**:
   - `PRIMARY_CHECKMARK_THEME`: Theme classification (e.g. AI Policy, Keystroke Forensics, Rubric Grading, LMS Integration).
   - `PROPOSED_ARTICLE_ANGLE`: Recommended pedagogical angle for Checkmark Learning Center.
   - `PROPOSED_WORKING_TITLE`: Specific, high-intent headline for high school educators.
   - `ANALYSIS_REASONING`: Justification for the scores and angle.
   - `EDITORIAL_STATUS`: `APPROVED`, `REJECTED`, or `BACKLOG`.

Once analysis is complete, update:
- `ANALYSIS_STATUS` = `COMPLETE`
- `ANALYSIS_DATE` = Current UTC Timestamp

---

### Step 4: Downstream Content Pipeline Handoff
Approved articles (`EDITORIAL_STATUS == "APPROVED"`) can be promoted to the content pipeline (`publish-blog` workflow) to generate drafts and publish Learning Center articles.
