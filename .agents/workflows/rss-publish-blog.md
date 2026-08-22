---
name: rss-publish-blog
description: Autonomous end-to-end publishing pipeline for RSS-derived Checkmark Plagiarism Learning Center articles. Performs conditional queue checking, topic analysis, article development, and compiles Markdown drafts from content/rss_drafts/ into styled Next.js pages.
---

### Step 1: Check Queue Status (Smart Dispatch)
Run the pipeline status helper to inspect the queue in `RSS_ARTICLES` in the Google Sheet:
```powershell
python scripts/RSS/get_rss_pipeline_status.py --sheet-name RSS_CONTENT_SCOUT
```

---

### Conditional Execution Flow:

1. **If a `drafted` article exists in `content/rss_drafts/` (`next_action == "STYLE_PAGE"`)**:
   - **Skip Feed Ingestion, Analysis, and Article Development.**
   - Proceed directly to **Step 4 (Page Styling & Next.js Publishing)**.

2. **If an approved `CANDIDATE` article exists (`next_action == "DEVELOP_ARTICLE"`)**:
   - **Skip Feed Ingestion & Analysis.**
   - Proceed directly to **Step 3 (Article Development)**, then **Step 4 (Page Styling & Publishing)**.

3. **If `PENDING` articles exist (`next_action == "ANALYZE_ARTICLES"`)**:
   - **Skip Feed Ingestion.**
   - Run **Step 2 (Content Analysis)**, then proceed to **Step 3** and **Step 4**.

4. **If and only if the queue is empty (`next_action == "INGEST_FEEDS"`)**:
   - Run **Step 1B (RSS Ingestion)** -> **Step 2** -> **Step 3** -> **Step 4**.

---

### Step 1B: RSS Feed Ingestion (Only When Queue Is Empty)
Run the automated Python RSS ingestion engine to fetch active feeds from the `RSS` worksheet, normalize URLs, detect duplicates, and batch append new records with `ANALYSIS_STATUS = PENDING`:
```powershell
python scripts/RSS/ingest_rss_feeds.py --sheet-name RSS_CONTENT_SCOUT
```

---

### Step 2: Content Analysis & Relevance Scoring
Run the editorial evaluation engine to read source articles, calculate 7-category relevance scores (0–100), extract underlying signals, and promote qualified articles to `EDITORIAL_STATUS = CANDIDATE`:
```powershell
python scripts/RSS/analyze_articles.py --sheet-name RSS_CONTENT_SCOUT
```

---

### Step 3: Article Development
Run the 8-phase article development engine to re-evaluate candidate viability, generate 3 distinct educator angles, select the strongest direction, build the Content Brief, and author the complete Markdown draft in `content/rss_drafts/<slug>.md`:
```powershell
python scripts/RSS/develop_articles.py --sheet-name RSS_CONTENT_SCOUT
```

---

### Step 4: Next.js Learning Center Page Styling & Publishing
Run the publishing engine (or invoke `site-styler`) to:
1. Assign relevant OpenGraph and featured visual assets (e.g. `/images/services/report-paste-evidence.png` for Essay Playback, `/images/services/report-breakdown-sidebar.png` for AI Detection, `/images/services/report-plagiarism-view.png` for Plagiarism).
2. Compile the Markdown draft from `content/rss_drafts/<slug>.md` into a Next.js App Router page at `src/app/learning/<year>/<month>/<slug>/page.tsx` using `<ArticleLayout section="learning">` with executive summary callouts, structured metadata, and semantic HTML markup.
3. Update `RSS_ARTICLES` in Google Sheets:
   - `DEVELOPMENT_STATUS` = `COMPLETE`
   - `PUBLISHED_URL` = `/learning/<year>/<month>/<slug>`
   - `GENERATED_ARTICLE_TITLE` = Article Title
   - `GENERATED_ARTICLE_URL` = `/learning/<year>/<month>/<slug>`

```powershell
python scripts/RSS/publish_rss_drafts.py --sheet-name RSS_CONTENT_SCOUT
```
