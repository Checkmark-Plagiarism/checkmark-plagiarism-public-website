---
name: learning-distinctness-remediation
description: Smart, autonomous end-to-end pipeline for publishing Checkmark Plagiarism Learning Center articles with conditional queue checking, persistent vector scoring, drafting, and Next.js page styling.
---

# Learning Distinctness Remediation Workflow

Selects junior candidate learning posts flagged with `action: remediation_candidate`, diagnoses overlap against senior competitor posts, injects authentic Checkmark Plagiarism domain differentiators into `page.tsx`, re-evaluates via Workflows 1 & 2, verifies improvement, and appends to the audit log.

## Directory & Components
- **Directory**: `scripts/learning-distinctness-remediation/`
- **Core Scripts**:
  - `candidate_selection.py`: Priority queue enforcing **Chronological Seniority Precedence**.
  - `domain_knowledge.py`: Checkmark Plagiarism technical differentiators (AI detection granularity, winnowing plagiarism matching, keystroke telemetry & essay playback, LMS LTI 1.3 integrations, CER rubric autograding, FERPA/COPPA compliance).
  - `remediation.py`: AST / JSX section injector modifying `page.tsx`.
  - `verification.py`: Re-vectorizes and re-scores corpus against acceptance criteria ($\ge 60$ score OR $+10$ points improvement; max 2 attempts).
  - `change_log.py`: Structured Before vs. After diff logger in `logs/learning-distinctness-changes.md`.
  - `main.py`: CLI driver.

## Chronological Seniority Precedence
When two posts share high semantic overlap, the older post (based on route path `{year}/{month}` and metadata date) holds seniority as the established original. The newer post is prioritized for remediation so legacy content remains untouched.

## CLI Usage

### Preview next candidate in priority queue
```bash
python scripts/learning-distinctness-remediation/main.py --next --dry-run
```

### Remediate and verify top candidate
```bash
python scripts/learning-distinctness-remediation/main.py --next
```

### Remediate a specific learning post
```bash
python scripts/learning-distinctness-remediation/main.py --page=/learning/2026/6/ai-detection-granularity-from-whole-documents-down-to-single-sentences
```
