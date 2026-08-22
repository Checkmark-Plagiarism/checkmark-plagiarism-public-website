---
name: RSS_ARTICLE_DEVELOPMENT
description: Workflow 3 — RSS Article Development. Takes CANDIDATE records from RSS_ARTICLES, develops 3 distinct angles, creates a content brief, writes a complete educational article, and saves it as Markdown in content/rss_drafts/<slug>.md.
---

### Step 1: Article Development Execution
Run the automated article development engine to claim eligible `CANDIDATE` records (`DEVELOPMENT_STATUS` blank or `PENDING`), develop the strongest educator-focused angle, write the full article, and persist it to `content/rss_drafts/`:

```powershell
python scripts/RSS/develop_articles.py --sheet-name RSS_CONTENT_SCOUT
```

*Note: You can pass `--dry-run` to generate drafts without modifying Google Sheets.*

---

### Step 2: 8-Phase Development Verification
The development engine executes the following phases for each candidate:
1. **Re-evaluate Source**: Re-reads `NORMALIZED_URL` / `ORIGINAL_URL` and verifies substance (sets `DEVELOPMENT_STATUS = REJECTED` if forced).
2. **Develop 3 Angles**: Creates 3 distinct directions (Working Title, Primary Question, Thesis, Problem, Checkmark Connection, New Value).
3. **Select Best Angle**: Picks the strongest angle and populates `SELECTED_ARTICLE_TITLE`, `SELECTED_ARTICLE_QUESTION`, `SELECTED_ARTICLE_THESIS`, and `DEVELOPMENT_REASONING`.
4. **Research Beyond Source**: Gathers verified research sources and sets `RESEARCH_STATUS = COMPLETE`.
5. **Build Content Brief**: Formulates audience, intent, outline, claims, and capabilities.
6. **Write Full Article**: Composes the complete Markdown article following Checkmark tone guidelines without aggressive promotional language.
7. **Save Markdown Draft**: Writes to `content/rss_drafts/<slug>.md` with citations, internal links, and embedded HTML brief.
8. **Update Sheet Row**:
   - `DEVELOPMENT_STATUS` = `DRAFT_CREATED`
   - `DEVELOPMENT_DATE` = Current UTC Timestamp
   - `ARTICLE_MD_PATH` = `content/rss_drafts/<slug>.md`
   - `CONTENT_PIPELINE_ID` = Stable pipeline identifier (`pipe_<hash>`)

---

### Step 3: Completion Report
The workflow outputs a summary report displaying:
- CANDIDATE records found
- Candidates processed
- Rejections (deeper review vs insufficient evidence)
- Markdown drafts created
- Errors encountered
- Table of created articles (title, primary question, source, markdown file path, primary theme).
