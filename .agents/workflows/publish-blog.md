---
name: publish-blog
description: Smart, autonomous end-to-end pipeline for publishing Checkmark Plagiarism Learning Center articles with conditional queue checking, persistent vector scoring, drafting, and Next.js page styling.
---

### Step 1: Check Queue Status (Smart Dispatch)
Run the pipeline status helper to inspect the queue in the Google Sheet:
```powershell
python scripts/get_pipeline_status.py
```

### Conditional Execution Flow:

1. **If a `drafted` article exists (`next_action == "STYLE_PAGE"`)**:
   - **Skip Topic Generation, Uniqueness Scoring, and Drafting.**
   - Proceed directly to **Step 4 (Page Styling & Publishing)** with `site-styler`.

2. **If an `approved` topic exists (`next_action == "DRAFT_ARTICLE"`)**:
   - **Skip Topic Generation & Uniqueness Scoring.**
   - Proceed directly to **Step 3 (Article Drafting)** with `article-writer`, then **Step 4 (Page Styling & Publishing)**.

3. **If `pending` topics exist (`next_action == "SCORE_UNIQUENESS"`)**:
   - **Skip Topic Generation.**
   - Run **Step 2 (Uniqueness Scoring)**, then proceed to **Step 3** and **Step 4**.

4. **If and only if queue is empty (`next_action == "GENERATE_TOPICS"`)**:
   - Proceed with **Step 1B (Topic Generation)** -> **Step 2** -> **Step 3** -> **Step 4**.

---

### Step 1B: Topic Generation (Only When Queue Is Empty)
Invoke `topic-generator` to brainstorm 3 fresh, high-intent educator-facing candidate topics and append them to the Google Sheet with status `pending`.

### Step 2: Uniqueness Vector Check
Run the fast Ollama vector uniqueness scoring script (reads cached embeddings from Column G and evaluates similarity against all site pages):
```powershell
python scripts/score_uniqueness.py
```

### Step 3: Article Drafting
Invoke the `article-writer` agent to write an in-depth educational and technical article draft with frontmatter into `content/drafts/<slug>.md` for the first approved topic, updating the sheet status to `drafted`.

### Step 4: Next.js Learning Center Page Styling & Publishing
Invoke the `site-styler` agent to:
1. Assign relevant OpenGraph and featured visual assets (e.g. from `/images/services/` or `public/images/learning/<slug>/`).
2. Compile the draft into a Next.js App Router page at `src/app/learning/<year>/<month>/<slug>/page.tsx` using `<ArticleLayout section="learning">` with structured metadata, then update the sheet status to `published`.