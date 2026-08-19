---
name: learning-vectorization
description: Smart, autonomous end-to-end pipeline for publishing Checkmark Plagiarism Learning Center articles with conditional queue checking, persistent vector scoring, drafting, and Next.js page styling.
---

# Learning Vectorization Workflow

Extracts clean JSX copy, creates deterministic semantic heading chunks, calls local Ollama embeddings, and immediately persists vectors into sibling `distinctness.md` files.

## Directory & Components
- **Directory**: `scripts/learning-vectorization/`
- **Core Scripts**:
  - `extractor.py`: Static JSX/TSX extraction, metadata, seniority date parsing, HTML entity decoding.
  - `chunking.py`: Deterministic semantic chunking by headings with SHA-256 integrity hashes.
  - `ollama_embeddings.py`: Generates 768-dim embeddings via local Ollama (`nomic-embed-text:latest`) with L2 normalization and retry backoff.
  - `persistence.py`: Sibling `distinctness.md` reading and writing in separated 2-group layout.
  - `main.py`: CLI driver with immediate per-page persistence.

## CLI Usage

### Check status without calling Ollama
```bash
python scripts/learning-vectorization/main.py --dry-run
```

### Process batch limit
```bash
python scripts/learning-vectorization/main.py --limit 20
```

### Incrementally embed all missing/stale posts
```bash
python scripts/learning-vectorization/main.py
```

### Target a single learning post
```bash
python scripts/learning-vectorization/main.py --page=/learning/2026/6/ai-detection-granularity-from-whole-documents-down-to-single-sentences
```
