import os
import re
import json
from datetime import datetime, timezone
from typing import Dict, List, Any, Optional

def get_sibling_distinctness_path(page_file_path: str) -> str:
    """Returns the sibling distinctness.md path for a given page.tsx file."""
    dir_name = os.path.dirname(os.path.abspath(page_file_path))
    return os.path.join(dir_name, "distinctness.md")

def format_yaml_frontmatter(metadata: Dict[str, Any]) -> str:
    """Formats dict into clean YAML frontmatter."""
    lines = ["---"]
    for key, val in metadata.items():
        if val is None:
            lines.append(f"{key}: null")
        elif isinstance(val, bool):
            lines.append(f"{key}: {'true' if val else 'false'}")
        elif isinstance(val, (int, float)):
            lines.append(f"{key}: {val}")
        elif isinstance(val, list):
            formatted_items = ", ".join(f'"{item}"' for item in val)
            lines.append(f"{key}: [{formatted_items}]")
        else:
            # Escape quotes in string
            clean_str = str(val).replace('"', '\\"')
            lines.append(f'{key}: "{clean_str}"')
    lines.append("---")
    return "\n".join(lines)

def parse_yaml_frontmatter(text: str) -> Dict[str, Any]:
    """Parses YAML frontmatter block from markdown text."""
    match = re.match(r"^---\s*\n([\s\S]*?)\n---", text)
    if not match:
        return {}
    
    yaml_text = match.group(1)
    result: Dict[str, Any] = {}

    for line in yaml_text.splitlines():
        line = line.strip()
        if not line or line.startswith("#") or ":" not in line:
            continue
        key, raw_val = line.split(":", 1)
        key = key.strip()
        raw_val = raw_val.strip()

        # Parse types
        if raw_val in ("null", "~", ""):
            result[key] = None
        elif raw_val.lower() == "true":
            result[key] = True
        elif raw_val.lower() == "false":
            result[key] = False
        elif raw_val.startswith("[") and raw_val.endswith("]"):
            # Simple list
            items = raw_val[1:-1].split(",")
            result[key] = [i.strip().strip("'\"") for i in items if i.strip().strip("'\"")]
        elif re.match(r"^-?\d+$", raw_val):
            result[key] = int(raw_val)
        elif re.match(r"^-?\d+\.\d+$", raw_val):
            result[key] = float(raw_val)
        else:
            # String
            val = raw_val.strip("'\"")
            val = val.replace('\\"', '"')
            result[key] = val

    return result

def serialize_distinctness_md(
    post_data: Dict[str, Any],
    chunks: List[Dict[str, Any]],
    page_vector: List[float],
    uniqueness_score: Optional[float] = None,
    combined_similarity: Optional[float] = None,
    whole_page_top5_similarity: Optional[float] = None,
    top_chunk_overlap: Optional[float] = None,
    action: Optional[str] = None,
    nearest_competitor: Optional[str] = None,
    similar_pages: Optional[List[Dict[str, Any]]] = None,
    remediation_attempts: int = 0,
    remediation_status: str = "not_needed",
    content_hash: Optional[str] = None
) -> str:
    """
    Serializes post distinctness state into the strictly separated markdown layout.
    """
    now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

    frontmatter_dict = {
        "route": post_data.get("route", ""),
        "title": post_data.get("title", ""),
        "seniority_date": post_data.get("seniority_date", ""),
        "last_vectorized_at": now_iso,
        "content_hash": content_hash or post_data.get("content_hash", ""),
        "uniqueness_score": round(float(uniqueness_score), 2) if uniqueness_score is not None else None,
        "combined_similarity": round(float(combined_similarity), 4) if combined_similarity is not None else None,
        "whole_page_top5_similarity": round(float(whole_page_top5_similarity), 4) if whole_page_top5_similarity is not None else None,
        "top_chunk_overlap": round(float(top_chunk_overlap), 4) if top_chunk_overlap is not None else None,
        "action": action or "none",
        "nearest_competitor": nearest_competitor or "N/A",
        "remediation_attempts": remediation_attempts,
        "remediation_status": remediation_status
    }

    frontmatter_str = format_yaml_frontmatter(frontmatter_dict)

    # 1. Summary & Similar Pages
    summary_parts = ["## Summary & Similar Pages"]
    u_score_str = f"{frontmatter_dict['uniqueness_score']} / 100" if frontmatter_dict['uniqueness_score'] is not None else "Pending Scoring"
    act_str = frontmatter_dict['action']
    comp_str = frontmatter_dict['nearest_competitor']
    
    summary_parts.append(f"- **Uniqueness Score**: {u_score_str}")
    summary_parts.append(f"- **Action**: `{act_str}`")
    summary_parts.append(f"- **Nearest Competitor**: `{comp_str}`")
    summary_parts.append("")

    if similar_pages:
        summary_parts.append("| Rank | Route / Slug | Combined Sim | Page Sim | Top Chunk Sim |")
        summary_parts.append("| :--- | :--- | :--- | :--- | :--- |")
        for idx, sp in enumerate(similar_pages[:5], start=1):
            s_route = sp.get("route", sp.get("slug", ""))
            c_sim = f"{sp.get('combined_similarity', 0.0):.4f}"
            p_sim = f"{sp.get('page_similarity', 0.0):.4f}"
            t_sim = f"{sp.get('top_chunk_similarity', 0.0):.4f}"
            summary_parts.append(f"| {idx} | `{s_route}` | {c_sim} | {p_sim} | {t_sim} |")
    else:
        summary_parts.append("*No similarity comparisons generated yet. Run learning-distinctness workflow.*")

    summary_section = "\n".join(summary_parts)

    # 2. Semantic Chunks (Human-Readable)
    chunks_parts = ["## Semantic Chunks"]
    for chunk in chunks:
        heading = chunk.get("heading", "Section")
        level = chunk.get("level", "h2")
        chash = chunk.get("hash", "")
        best_comp = chunk.get("best_competitor_match", "N/A")
        best_sim = chunk.get("best_competitor_similarity")
        sim_str = f" (Similarity: {best_sim:.4f})" if best_sim is not None else ""
        text = chunk.get("text", "")

        chunks_parts.append(f"### Section: {heading}")
        chunks_parts.append(f"- **Level**: `{level}`")
        chunks_parts.append(f"- **Hash**: `{chash}`")
        chunks_parts.append(f"- **Best Competitor Match**: `{best_comp}`{sim_str}")
        chunks_parts.append("")
        chunks_parts.append("```text")
        chunks_parts.append(text)
        chunks_parts.append("```")
        chunks_parts.append("")

    chunks_section = "\n".join(chunks_parts).strip()

    # 3. Vector Store (Machine-Readable JSON at Bottom)
    vector_store_data = {
        "page_vector": page_vector,
        "chunks": [
            {
                "heading": c.get("heading", ""),
                "level": c.get("level", "h2"),
                "hash": c.get("hash", ""),
                "vector": c.get("vector", [])
            }
            for c in chunks
        ]
    }
    vector_store_json = json.dumps(vector_store_data, indent=2)

    vector_section = f"## Vector Store\n\n```json\n{vector_store_json}\n```"

    return f"{frontmatter_str}\n\n{summary_section}\n\n{chunks_section}\n\n{vector_section}\n"

def write_distinctness_md(file_path: str, content: str) -> None:
    """Writes distinctness.md file immediately to disk."""
    dir_path = os.path.dirname(os.path.abspath(file_path))
    os.makedirs(dir_path, exist_ok=True)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

def read_distinctness_md(file_path: str) -> Optional[Dict[str, Any]]:
    """
    Reads and parses a sibling distinctness.md file.
    Returns structured data including frontmatter, chunks text, and vector store.
    """
    if not os.path.exists(file_path):
        return None

    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()

        frontmatter = parse_yaml_frontmatter(content)

        # Extract Vector Store JSON
        vector_match = re.search(r"## Vector Store\s*\n\s*```json\s*\n([\s\S]*?)\n```", content)
        vector_store = {}
        if vector_match:
            try:
                vector_store = json.loads(vector_match.group(1))
            except Exception:
                pass

        # Extract Semantic Chunks
        chunks = []
        chunks_section_match = re.search(r"## Semantic Chunks\s*\n([\s\S]*?)(?=\n## Vector Store|$)", content)
        if chunks_section_match:
            raw_chunks_sec = chunks_section_match.group(1)
            chunk_blocks = re.split(r"(?=### Section: )", raw_chunks_sec)
            for block in chunk_blocks:
                block = block.strip()
                if not block.startswith("### Section: "):
                    continue
                heading_match = re.search(r"### Section:\s*(.*)", block)
                level_match = re.search(r"- \*\*Level\*\*:\s*`?(.*?)`?$", block, re.MULTILINE)
                hash_match = re.search(r"- \*\*Hash\*\*:\s*`?(.*?)`?$", block, re.MULTILINE)
                comp_match = re.search(r"- \*\*Best Competitor Match\*\*:\s*`?(.*?)`?(?:\s*\(Similarity:\s*([0-9.]+)\))?$", block, re.MULTILINE)
                text_match = re.search(r"```text\s*\n([\s\S]*?)\n```", block)

                heading = heading_match.group(1).strip() if heading_match else ""
                level = level_match.group(1).strip() if level_match else "h2"
                chash = hash_match.group(1).strip() if hash_match else ""
                best_comp = comp_match.group(1).strip() if comp_match else "N/A"
                best_sim = float(comp_match.group(2)) if comp_match and comp_match.group(2) else None
                text = text_match.group(1) if text_match else ""

                # Attach matching vector from vector_store
                matching_vec = []
                for cv in vector_store.get("chunks", []):
                    if cv.get("hash") == chash or cv.get("heading") == heading:
                        matching_vec = cv.get("vector", [])
                        break

                chunks.append({
                    "heading": heading,
                    "level": level,
                    "hash": chash,
                    "best_competitor_match": best_comp,
                    "best_competitor_similarity": best_sim,
                    "text": text,
                    "vector": matching_vec
                })

        return {
            "frontmatter": frontmatter,
            "page_vector": vector_store.get("page_vector", []),
            "chunks": chunks,
            "vector_store": vector_store,
            "raw_file_content": content
        }
    except Exception as e:
        print(f"Error reading distinctness file {file_path}: {e}")
        return None
