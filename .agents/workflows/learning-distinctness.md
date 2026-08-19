---
name: learning-distinctness
description: Smart, autonomous end-to-end pipeline for publishing Checkmark Plagiarism Learning Center articles with conditional queue checking, persistent vector scoring, drafting, and Next.js page styling.
---

# Learning Distinctness Workflow

Fast in-memory NumPy matrix comparison across all vectorized learning posts. Computes whole-page top-5 similarity, top-25% cross-post chunk overlap, rank-based uniqueness score (0–100), and action flags in under 1 second with 0 Ollama calls.

## Directory & Components
- **Directory**: `scripts/learning-distinctness/`
- **Core Scripts**:
  - `matrix_engine.py`: NumPy pairwise page similarity and chunk-to-chunk matrix computations.
  - `frontmatter_sync.py`: Sibling `distinctness.md` state synchronizer.
  - `main.py`: CLI driver.

## Mathematical Model
- **Whole-Page Top-5 Cosine Similarity** (`weight: 0.40`): Mean similarity of the top 5 closest neighbor page vectors.
- **Top 25% Cross-Post Chunk Overlap** (`weight: 0.60`): Mean similarity of top quartile max-similarity chunk matches across other articles.
- **V2 Combined Similarity**: `0.60 * top_chunk_overlap + 0.40 * whole_page_top5`.
- **Rank-Based Uniqueness Score (0–100)**: Percentile rank across the corpus ($100 = \text{most unique}$, $0 = \text{most duplicate}$).
- **Action Decisions**:
  - `none` ($\ge 60$ uniqueness): Distinct article.
  - `observe` ($40\text{--}59$ uniqueness): Moderate overlap.
  - `remediation_candidate` ($< 40$ uniqueness OR closest single-page similarity $\ge 0.88$): Flagged for remediation.

## CLI Usage

### Score entire corpus
```bash
python scripts/learning-distinctness/main.py
```

### Dry-run scoring without updating files
```bash
python scripts/learning-distinctness/main.py --dry-run
```

### Check score for a specific learning post
```bash
python scripts/learning-distinctness/main.py --page=/learning/2026/6/ai-detection-granularity-from-whole-documents-down-to-single-sentences
```
