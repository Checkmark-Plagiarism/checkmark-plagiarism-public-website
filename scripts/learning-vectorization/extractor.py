import os
import re
import html
from datetime import datetime
from typing import Dict, List, Any, Optional

def get_project_root() -> str:
    """Returns the absolute path to the project root."""
    # From scripts/learning-vectorization/extractor.py -> root is 2 levels up
    current_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.abspath(os.path.join(current_dir, "..", ".."))

def parse_seniority_date(year_str: str, month_str: str, meta_date: Optional[str] = None) -> str:
    """
    Parses chronological seniority date into ISO string YYYY-MM-DD.
    If meta_date is provided (e.g. '06-25-2026' or '2026-06-25'), parses it.
    Otherwise defaults to YYYY-MM-01 based on route path.
    """
    if meta_date:
        meta_date = meta_date.strip().strip("'\"")
        # Format MM-DD-YYYY or MM/DD/YYYY
        m1 = re.match(r"^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$", meta_date)
        if m1:
            month, day, year = int(m1.group(1)), int(m1.group(2)), int(m1.group(3))
            return f"{year:04d}-{month:02d}-{day:02d}"
        # Format YYYY-MM-DD
        m2 = re.match(r"^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$", meta_date)
        if m2:
            year, month, day = int(m2.group(1)), int(m2.group(2)), int(m2.group(3))
            return f"{year:04d}-{month:02d}-{day:02d}"

    try:
        y = int(year_str)
        m = int(month_str)
        return f"{y:04d}-{m:02d}-01"
    except (ValueError, TypeError):
        return "2026-01-01"

def extract_meta_fields(content: str) -> Dict[str, Any]:
    """Extracts metadata from Next.js export const metadata and export const meta blocks."""
    meta = {
        "title": "",
        "description": "",
        "category": "",
        "categories": [],
        "author": "",
        "date": "",
        "readTime": "",
        "keywords": [],
    }

    # Extract title
    title_match = re.search(r'title:\s*["\'`](.*?)["\'`]', content)
    if title_match:
        meta["title"] = html.unescape(title_match.group(1).strip())

    # Extract description
    desc_match = re.search(r'description:\s*["\'`](.*?)["\'`]', content, re.DOTALL)
    if desc_match:
        meta["description"] = html.unescape(re.sub(r'\s+', ' ', desc_match.group(1)).strip())

    # Extract date
    date_match = re.search(r'date:\s*["\'`](.*?)["\'`]', content)
    if date_match:
        meta["date"] = date_match.group(1).strip()

    # Extract category
    cat_match = re.search(r'category:\s*["\'`](.*?)["\'`]', content)
    if cat_match:
        meta["category"] = cat_match.group(1).strip()

    # Extract author
    auth_match = re.search(r'author:\s*["\'`](.*?)["\'`]', content)
    if auth_match:
        meta["author"] = auth_match.group(1).strip()

    # Extract readTime
    read_match = re.search(r'readTime:\s*["\'`](.*?)["\'`]', content)
    if read_match:
        meta["readTime"] = read_match.group(1).strip()

    # Extract categories array
    cats_match = re.search(r'categories:\s*\[(.*?)\]', content, re.DOTALL)
    if cats_match:
        raw_cats = cats_match.group(1)
        cats = [html.unescape(c.strip().strip("'\"`")) for c in re.split(r',\s*', raw_cats) if c.strip().strip("'\"`")]
        meta["categories"] = cats

    return meta

def clean_html_and_jsx(text: str) -> str:
    """Removes HTML and JSX tags, decodes entities, and normalizes whitespace."""
    if not text:
        return ""
    # Unescape HTML entities
    text = html.unescape(text)
    # Remove HTML/JSX comments
    text = re.sub(r'<!--.*?-->', '', text, flags=re.DOTALL)
    text = re.sub(r'{/\*.*?\*/}', '', text, flags=re.DOTALL)
    # Remove JSX embedded variables e.g. {refValue}
    text = re.sub(r'{[^{}]+}', '', text)
    # Remove HTML / JSX tags
    text = re.sub(r'<[^>]+>', ' ', text)
    # Normalize whitespace
    text = re.sub(r'[ \t]+', ' ', text)
    text = re.sub(r'\n\s*\n+', '\n\n', text)
    return text.strip()

def parse_html_or_jsx_sections(body_content: str) -> List[Dict[str, str]]:
    """
    Parses HTML / JSX text into structured heading sections.
    Recognizes <h1> through <h6> tags and groups following paragraphs/lists under each heading.
    """
    # Regex to find tags: <h[1-6]...>, <p...>, <li...>, <blockquote...>
    tag_regex = re.compile(r'<(h[1-6]|p|li|blockquote|ul|ol)[^>]*>(.*?)</\1>', re.IGNORECASE | re.DOTALL)
    
    matches = list(tag_regex.finditer(body_content))
    
    sections: List[Dict[str, str]] = []
    current_heading = "Introduction"
    current_level = "intro"
    current_paragraphs: List[str] = []

    if matches:
        for m in matches:
            tag = m.group(1).lower()
            inner_text = clean_html_and_jsx(m.group(2))
            if not inner_text:
                continue

            if tag.startswith('h'):
                # New heading found, flush previous section if it has content
                if current_paragraphs:
                    section_text = "\n\n".join(current_paragraphs).strip()
                    if section_text:
                        sections.append({
                            "heading": current_heading,
                            "level": current_level,
                            "text": section_text
                        })
                    current_paragraphs = []
                current_heading = inner_text
                current_level = tag
            else:
                current_paragraphs.append(inner_text)

        # Flush final section
        if current_paragraphs:
            section_text = "\n\n".join(current_paragraphs).strip()
            if section_text:
                sections.append({
                    "heading": current_heading,
                    "level": current_level,
                    "text": section_text
                })
    else:
        # Fallback: clean all text and create single intro section
        cleaned = clean_html_and_jsx(body_content)
        if cleaned:
            sections.append({
                "heading": "Introduction",
                "level": "intro",
                "text": cleaned
            })

    return sections

def extract_post_data(file_path: str, project_root: Optional[str] = None) -> Dict[str, Any]:
    """
    Extracts all metadata, content, sections, and seniority info from a learning post page.tsx.
    """
    if project_root is None:
        project_root = get_project_root()

    abs_path = os.path.abspath(file_path)
    rel_path = os.path.relpath(abs_path, project_root).replace("\\", "/")

    # Route pattern: src/app/learning/{year}/{month}/{slug}/page.tsx
    route_match = re.match(r"^src/app/(learning/(\d{4})/(\d{1,2})/([^/]+))/page\.(tsx|jsx|ts|js)$", rel_path)
    if not route_match:
        # Check alternative path formatting
        route_match = re.search(r"learning/(\d{4})/(\d{1,2})/([^/]+)", rel_path)
        if route_match:
            year_str = route_match.group(1)
            month_str = route_match.group(2)
            slug_str = route_match.group(3)
            route = f"/learning/{year_str}/{month_str}/{slug_str}"
        else:
            raise ValueError(f"File path does not match learning post route pattern: {rel_path}")
    else:
        route = "/" + route_match.group(1)
        year_str = route_match.group(2)
        month_str = route_match.group(3)
        slug_str = route_match.group(4)

    with open(abs_path, "r", encoding="utf-8", errors="ignore") as f:
        file_content = f.read()

    meta = extract_meta_fields(file_content)
    seniority_date = parse_seniority_date(year_str, month_str, meta.get("date"))

    # Extract body content:
    # 1. Look for `const bodyHtml = \`...\`` or `const bodyHtml = "..."`
    body_match = re.search(r'const\s+bodyHtml\s*=\s*`([\s\S]*?)`;', file_content)
    if not body_match:
        body_match = re.search(r'const\s+bodyHtml\s*=\s*"([\s\S]*?)";', file_content)
    if not body_match:
        body_match = re.search(r'const\s+bodyHtml\s*=\s*\'([\s\S]*?)\';', file_content)

    if body_match:
        body_raw = body_match.group(1)
    else:
        # Fallback: extract inside <article>...</article> or <ArticleLayout>...</ArticleLayout>
        article_match = re.search(r'<article[^>]*>([\s\S]*?)</article>', file_content)
        if article_match:
            body_raw = article_match.group(1)
        else:
            layout_match = re.search(r'<ArticleLayout[^>]*>([\s\S]*?)</ArticleLayout>', file_content)
            body_raw = layout_match.group(1) if layout_match else file_content

    sections = parse_html_or_jsx_sections(body_raw)
    
    # If no title in meta, fallback to first heading or slug
    title = meta.get("title")
    if not title:
        if sections and sections[0]["heading"] != "Introduction":
            title = sections[0]["heading"]
        else:
            title = slug_str.replace("-", " ").title()

    # Build clean full text representation
    full_text_parts = [f"# {title}"]
    if meta.get("description"):
        full_text_parts.append(meta["description"])
    for s in sections:
        full_text_parts.append(f"## {s['heading']}\n{s['text']}")
    raw_content = "\n\n".join(full_text_parts)

    return {
        "file_path": abs_path,
        "rel_path": rel_path,
        "route": route,
        "year": int(year_str),
        "month": int(month_str),
        "slug": slug_str,
        "seniority_date": seniority_date,
        "title": title,
        "description": meta.get("description", ""),
        "category": meta.get("category", ""),
        "categories": meta.get("categories", []),
        "author": meta.get("author", ""),
        "date_str": meta.get("date", ""),
        "read_time": meta.get("readTime", ""),
        "sections": sections,
        "raw_content": raw_content
    }

def discover_learning_posts(project_root: Optional[str] = None) -> List[Dict[str, Any]]:
    """
    Discovers all learning post pages in src/app/learning/{year}/{month}/{slug}/page.tsx.
    Returns a list of post descriptors sorted chronologically by seniority date.
    """
    if project_root is None:
        project_root = get_project_root()

    learning_dir = os.path.join(project_root, "src", "app", "learning")
    if not os.path.exists(learning_dir):
        return []

    posts = []
    for root, _, files in os.walk(learning_dir):
        for f in files:
            if f.startswith("page.") and f.endswith((".tsx", ".jsx", ".ts", ".js")):
                full_path = os.path.join(root, f)
                rel_path = os.path.relpath(full_path, project_root).replace("\\", "/")
                
                # Exclude root /learning/page.tsx
                if rel_path == "src/app/learning/page.tsx" or rel_path == "src/app/learning/page.jsx":
                    continue

                try:
                    post_data = extract_post_data(full_path, project_root)
                    posts.append(post_data)
                except Exception as e:
                    # Ignore non-post pages
                    continue

    # Sort posts by seniority_date (oldest first), then by route
    posts.sort(key=lambda p: (p["seniority_date"], p["route"]))
    return posts
