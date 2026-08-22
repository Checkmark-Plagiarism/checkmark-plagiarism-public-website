"""
Workflow 4 — RSS Blog Publishing Engine (RSS_PUBLISH_BLOG).

Ingests Markdown drafts from content/rss_drafts/<slug>.md, converts them into styled
Next.js App Router Learning Center pages at src/app/learning/<year>/<month>/<slug>/page.tsx
using <ArticleLayout section="learning"> with branded Tailwind styling and OpenGraph metadata,
and updates RSS_ARTICLES with the live published URL.

Usage:
    python scripts/RSS/publish_rss_drafts.py [--sheet-name RSS_CONTENT_SCOUNT] [--draft-path PATH] [--dry-run]
"""
import os
import sys
import re
import json
import html
import argparse
import logging
from datetime import datetime, timezone
from typing import Dict, Any, List, Tuple, Optional

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(os.path.dirname(SCRIPT_DIR))
if SCRIPT_DIR not in sys.path:
    sys.path.insert(0, SCRIPT_DIR)
if os.path.dirname(SCRIPT_DIR) not in sys.path:
    sys.path.insert(0, os.path.dirname(SCRIPT_DIR))

try:
    from .sheet_manager import SheetManager, SCHEMA_COLUMNS, DEFAULT_SHEET_NAME, DEFAULT_CREDENTIALS_PATH
    from .article_developer import slugify_title, DRAFTS_DIR
except ImportError:
    from sheet_manager import SheetManager, SCHEMA_COLUMNS, DEFAULT_SHEET_NAME, DEFAULT_CREDENTIALS_PATH
    from article_developer import slugify_title, DRAFTS_DIR

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)
logger = logging.getLogger("RSS_Content_Scout.Publisher")

# OpenGraph visual assets mapped to themes
THEME_IMAGES = {
    "writing process": "/images/services/report-paste-evidence.png",
    "essay playback": "/images/services/report-paste-evidence.png",
    "keystroke": "/images/services/report-paste-evidence.png",
    "authorship": "/images/services/report-paste-evidence.png",
    "ai detection": "/images/services/report-breakdown-sidebar.png",
    "ai writing": "/images/services/report-breakdown-sidebar.png",
    "chatgpt": "/images/services/report-breakdown-sidebar.png",
    "plagiarism": "/images/services/report-plagiarism-view.png",
    "source verification": "/images/services/report-source-quote.png",
    "autograding": "/images/services/report-grading-view.png",
    "rubric": "/images/services/report-grading-view.png",
    "canvas": "/images/services/submit-assignment-card.png",
    "google classroom": "/images/services/submit-assignment-card.png",
    "policy": "/images/services/report-source-quote.png",
}
DEFAULT_OG_IMAGE = "/images/services/report-plagiarism-view.png"


def select_opengraph_image(theme: str, title: str) -> str:
    """Selects the best branded featured graphic based on theme and title keywords."""
    combined = f"{theme} {title}".lower()
    for kw, img in THEME_IMAGES.items():
        if kw in combined:
            return img
    return DEFAULT_OG_IMAGE


def parse_markdown_draft(md_content: str) -> Dict[str, Any]:
    """
    Parses a raw RSS markdown draft file.

    Extracts:
    - title
    - content_brief (from embedded comment)
    - body_markdown (excluding title, sources, links, brief comment)
    - sources (list of dicts)
    - internal_links (list of dicts)
    """
    # 1. Extract embedded content brief if present
    brief_data = {}
    brief_match = re.search(r"<!--\s*CONTENT BRIEF\s*(.*?)\s*-->", md_content, flags=re.DOTALL)
    if brief_match:
        try:
            brief_data = json.loads(brief_match.group(1).strip())
        except Exception:
            pass

    # Remove content brief comment from content
    clean_md = re.sub(r"<!--\s*CONTENT BRIEF.*?-->", "", md_content, flags=re.DOTALL).strip()

    # 2. Extract title from first H1
    title = ""
    h1_match = re.match(r"^#\s+(.+)$", clean_md, flags=re.MULTILINE)
    if h1_match:
        title = h1_match.group(1).strip()
        clean_md = clean_md[h1_match.end():].strip()
    elif brief_data.get("final_title"):
        title = brief_data["final_title"]

    # 3. Extract Sources section
    sources = []
    sources_match = re.search(r"##\s+Sources\s*\n(.*?)(?=\n##|\Z)", clean_md, flags=re.DOTALL | re.IGNORECASE)
    if sources_match:
        sources_text = sources_match.group(1)
        for line in sources_text.splitlines():
            link_m = re.search(r"\[(.*?)\]\((.*?)\)", line)
            if link_m:
                sources.append({"title": link_m.group(1).strip(), "url": link_m.group(2).strip()})

    # 4. Extract Internal Links section
    internal_links = []
    links_match = re.search(r"##\s+Internal Link Suggestions\s*\n(.*?)(?=\n##|\Z)", clean_md, flags=re.DOTALL | re.IGNORECASE)
    if links_match:
        links_text = links_match.group(1)
        for line in links_text.splitlines():
            link_m = re.search(r"\[(.*?)\]\((.*?)\)", line)
            if link_m:
                internal_links.append({"title": link_m.group(1).strip(), "url": link_m.group(2).strip()})

    # 5. Extract core body markdown
    body_md = clean_md
    if sources_match:
        body_md = body_md[:sources_match.start()].strip()
    elif links_match:
        body_md = body_md[:links_match.start()].strip()

    return {
        "title": title or "Untitled Learning Article",
        "brief": brief_data,
        "body_markdown": body_md,
        "sources": sources,
        "internal_links": internal_links,
    }


def convert_markdown_to_semantic_html(body_md: str, title: str, brief: Dict[str, Any], sources: List[Dict[str, str]], internal_links: List[Dict[str, str]]) -> str:
    """
    Converts article Markdown text into clean, Tailwind-styled HTML.
    """
    thesis = brief.get("core_thesis") or "Writing-process evidence provides defensible clarity where single AI detection percentages create false certainty."
    theme = brief.get("primary_checkmark_theme") or "Writing-Process Evidence"

    # Executive Summary Callout Box
    summary_box = f"""<div class="my-6 rounded-2xl border border-teal-500/30 bg-teal-50/50 dark:bg-teal-950/20 p-6 text-foreground">
  <div class="flex items-center gap-2 mb-2">
    <span class="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-600 text-white">
      Executive Summary
    </span>
    <span class="text-xs font-medium text-teal-700 dark:text-teal-400">
      {html.escape(theme)}
    </span>
  </div>
  <p class="text-foreground font-medium leading-relaxed">
    {html.escape(thesis)}
  </p>
</div>
"""

    html_parts = [summary_box]

    # Split into sections by Markdown headers
    lines = body_md.splitlines()
    in_list = False
    list_type = "ul"

    for raw_line in lines:
        line = raw_line.strip()

        if not line:
            if in_list:
                html_parts.append(f"</{list_type}>\n")
                in_list = False
            continue

        # Horizontal rule
        if line in ("---", "***", "___"):
            if in_list:
                html_parts.append(f"</{list_type}>\n")
                in_list = False
            html_parts.append('<hr class="my-8 border-border" />\n')
            continue

        # H2 Heading
        if line.startswith("## "):
            if in_list:
                html_parts.append(f"</{list_type}>\n")
                in_list = False
            heading_text = line[3:].strip()
            html_parts.append(f'<h2 class="text-2xl font-bold tracking-tight text-foreground mt-8 mb-4">{html.escape(heading_text)}</h2>\n')
            continue

        # H3 Heading
        if line.startswith("### "):
            if in_list:
                html_parts.append(f"</{list_type}>\n")
                in_list = False
            heading_text = line[4:].strip()
            html_parts.append(f'<h3 class="text-xl font-semibold tracking-tight text-foreground mt-6 mb-3">{html.escape(heading_text)}</h3>\n')
            continue

        # Unordered list item
        if line.startswith("- ") or line.startswith("* "):
            if not in_list:
                html_parts.append('<ul class="list-disc pl-6 space-y-2 text-muted-foreground my-4">\n')
                in_list = True
                list_type = "ul"
            item_text = _format_inline_markdown(line[2:].strip())
            html_parts.append(f'  <li>{item_text}</li>\n')
            continue

        # Ordered list item
        num_m = re.match(r"^(\d+)\.\s+(.+)$", line)
        if num_m:
            if not in_list:
                html_parts.append('<ol class="list-decimal pl-6 space-y-2 text-muted-foreground my-4">\n')
                in_list = True
                list_type = "ol"
            item_text = _format_inline_markdown(num_m.group(2).strip())
            html_parts.append(f'  <li>{item_text}</li>\n')
            continue

        # Blockquote
        if line.startswith(">"):
            if in_list:
                html_parts.append(f"</{list_type}>\n")
                in_list = False
            quote_text = _format_inline_markdown(line.lstrip(">").strip())
            html_parts.append(f'<blockquote class="border-l-4 border-teal-500 pl-4 italic text-muted-foreground my-4">{quote_text}</blockquote>\n')
            continue

        # Standard Paragraph
        if in_list:
            html_parts.append(f"</{list_type}>\n")
            in_list = False

        para_text = _format_inline_markdown(line)
        html_parts.append(f'<p class="text-muted-foreground leading-relaxed my-4">{para_text}</p>\n')

    if in_list:
        html_parts.append(f"</{list_type}>\n")

    # Sources & External References Section
    if sources:
        html_parts.append('<div class="mt-12 pt-8 border-t border-border">\n')
        html_parts.append('<h3 class="text-lg font-semibold text-foreground mb-3">Primary References & Research Sources</h3>\n')
        html_parts.append('<ul class="list-disc pl-6 space-y-1.5 text-sm text-muted-foreground">\n')
        for s in sources:
            html_parts.append(f'  <li><a href="{html.escape(s.get("url", "#"))}" target="_blank" rel="noopener noreferrer" class="text-teal-600 hover:underline">{html.escape(s.get("title", "Source"))}</a></li>\n')
        html_parts.append('</ul>\n</div>\n')

    return "".join(html_parts)


def _format_inline_markdown(text: str) -> str:
    """Formats bold, italic, inline code, and links within text."""
    # Bold + Italic
    text = re.sub(r"\*\*\*(.*?)\*\*\*", r"<strong><em>\1</em></strong>", text)
    # Bold
    text = re.sub(r"\*\*(.*?)\*\*", r"<strong>\1</strong>", text)
    # Italic
    text = re.sub(r"\*(.*?)\*", r"<em>\1</em>", text)
    # Inline code
    text = re.sub(r"`(.*?)`", r'<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">\1</code>', text)
    # Markdown links
    text = re.sub(r"\[(.*?)\]\((.*?)\)", r'<a href="\2" class="text-teal-600 hover:underline">\1</a>', text)
    return text


def compile_draft_to_nextjs_page(
    draft_file_path: str,
    year: str = "",
    month: str = "",
    output_base_dir: str = "",
) -> Tuple[str, str, Dict[str, Any]]:
    """
    Compiles a Markdown draft into a full Next.js App Router page.tsx file.

    Returns:
        Tuple of (target_page_path, route_url, meta_info_dict)
    """
    now = datetime.now(timezone.utc)
    target_year = year or str(now.year)
    target_month = month or str(now.month)
    base_dir = output_base_dir or os.path.join(PROJECT_ROOT, "src", "app", "learning")

    with open(draft_file_path, "r", encoding="utf-8") as f:
        md_content = f.read()

    parsed = parse_markdown_draft(md_content)
    title = parsed["title"]
    brief = parsed["brief"]
    slug = slugify_title(title)

    og_image = select_opengraph_image(brief.get("primary_checkmark_theme", ""), title)
    description = brief.get("core_thesis") or f"Learn how high school educators address {title.lower()} using writing-process evidence and Checkmark Plagiarism."
    description = description[:160].strip()

    body_html = convert_markdown_to_semantic_html(
        parsed["body_markdown"],
        title,
        brief,
        parsed["sources"],
        parsed["internal_links"]
    )

    # Escape backticks and template string markers inside bodyHtml
    escaped_body_html = body_html.replace("`", "\\`").replace("${", "\\${")
    clean_title_meta = title.replace('"', '\\"')
    clean_desc_meta = description.replace('"', '\\"')

    # Format date string MM-DD-YYYY
    date_str = now.strftime("%m-%d-%Y")
    current_slug_path = f"{target_year}/{target_month}/{slug}"
    route_url = f"/learning/{current_slug_path}"

    page_tsx_code = f"""import {{ Metadata }} from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {{
  title: "{clean_title_meta} | Checkmark Plagiarism",
  description: "{clean_desc_meta}",
  keywords: [
    "Essay Playback",
    "keystroke playback",
    "AI detection in high school",
    "plagiarism detection",
    "writing process analysis",
    "academic integrity",
    "Checkmark Plagiarism"
  ],
  openGraph: {{
    images: ["{og_image}"],
  }},
}};

const meta = {{
  title: "{clean_title_meta} | Checkmark Plagiarism",
  description: "{clean_desc_meta}",
  "opengraph-image": "{og_image}",
  date: "{date_str}",
  readTime: "~9 min read",
  category: "Writing Process",
  categories: ["Writing Process", "How It Works", "Teacher Guide", "AI Detection"],
  author: "The Checkmark Plagiarism Team",
}};

const bodyHtml = `{escaped_body_html}`;

type PageProps = {{
  searchParams?: Record<string, string | string[] | undefined>;
}};

export default function Page({{ searchParams }}: PageProps) {{
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={{meta}}
      section="learning"
      currentSlug="{current_slug_path}"
      refValue={{refValue}}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{{{ __html: bodyHtml }}}}
      />
    </ArticleLayout>
  );
}}
"""

    route_dir = os.path.join(base_dir, target_year, target_month, slug)
    os.makedirs(route_dir, exist_ok=True)
    target_page_file = os.path.join(route_dir, "page.tsx")

    with open(target_page_file, "w", encoding="utf-8") as f:
        f.write(page_tsx_code)

    logger.info("Compiled Next.js page at: %s", target_page_file)

    meta_info = {
        "title": title,
        "slug": slug,
        "route_url": route_url,
        "target_page_file": target_page_file,
        "opengraph_image": og_image,
        "description": description,
    }

    return target_page_file, route_url, meta_info


def run_rss_publishing(
    sheet_name: str = DEFAULT_SHEET_NAME,
    credentials_path: str = DEFAULT_CREDENTIALS_PATH,
    draft_file_path: str = "",
    dry_run: bool = False,
    limit: int = 0,
) -> Dict[str, Any]:
    """
    Executes Workflow 4: Next.js Page Styling & Publishing.
    """
    logger.info("==================================================")
    logger.info("Starting Workflow 4: RSS Blog Publishing (RSS_PUBLISH_BLOG)")
    logger.info("Target Spreadsheet: %s", sheet_name)
    logger.info("Credentials Path:   %s", credentials_path)
    logger.info("Dry Run Mode:       %s", dry_run)
    logger.info("==================================================")

    sheet_manager = SheetManager(sheet_name=sheet_name, credentials_path=credentials_path)
    sheet_headers = SCHEMA_COLUMNS
    drafts_to_publish: List[Dict[str, Any]] = []

    if draft_file_path:
        # Target specific file directly
        if not os.path.exists(draft_file_path):
            raise FileNotFoundError(f"Draft file not found at '{draft_file_path}'")
        drafts_to_publish.append({
            "row_idx": None,
            "draft_path": draft_file_path,
            "title": os.path.splitext(os.path.basename(draft_file_path))[0],
        })
    else:
        try:
            logger.info("Connecting to Google Sheets...")
            sheet_manager.connect()
            sheet_manager.init_worksheets()
            all_articles, sheet_headers = sheet_manager.get_existing_articles()
            
            for item in all_articles:
                row_idx = item.get("_row_idx")
                dev_status = (item.get("DEVELOPMENT_STATUS") or "").strip().upper()
                md_path = item.get("ARTICLE_MD_PATH", "")

                if dev_status == "DRAFT_CREATED" or (md_path and os.path.exists(md_path) and dev_status != "COMPLETE"):
                    drafts_to_publish.append({
                        "row_idx": row_idx,
                        "draft_path": md_path,
                        "title": item.get("SELECTED_ARTICLE_TITLE") or item.get("ARTICLE_TITLE", ""),
                        "article_id": item.get("ARTICLE_ID", ""),
                    })
            logger.info("Found %d drafted article(s) ready for Next.js publishing.", len(drafts_to_publish))
        except Exception as e:
            logger.warning("Could not load from Google Sheets (%s). Checking content/rss_drafts/ directly.", str(e))
            if os.path.exists(DRAFTS_DIR):
                for f in os.listdir(DRAFTS_DIR):
                    if f.endswith(".md"):
                        drafts_to_publish.append({
                            "row_idx": None,
                            "draft_path": os.path.join(DRAFTS_DIR, f),
                            "title": f[:-3],
                        })

    if limit > 0:
        drafts_to_publish = drafts_to_publish[:limit]

    stats = {
        "drafts_found": len(drafts_to_publish),
        "pages_published": 0,
        "errors": 0,
        "published_articles": [],
    }

    if not drafts_to_publish:
        logger.info("No drafted RSS articles ready for publishing.")
        return {
            "status": "NO_DRAFTS",
            "message": "No drafted Markdown files found to style and publish.",
            "stats": stats,
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }

    for item in drafts_to_publish:
        row_idx = item.get("row_idx")
        draft_path = item["draft_path"]
        logger.info("Compiling and styling draft: %s", draft_path)

        try:
            target_page_file, route_url, meta_info = compile_draft_to_nextjs_page(draft_path)
            stats["pages_published"] += 1
            stats["published_articles"].append({
                "title": meta_info["title"],
                "route_url": route_url,
                "file_path": target_page_file,
            })

            now_iso = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

            if not dry_run and row_idx:
                sheet_manager.save_article_development(
                    row_idx=row_idx,
                    development_fields={
                        "DEVELOPMENT_STATUS": "COMPLETE",
                        "GENERATED_ARTICLE_TITLE": meta_info["title"],
                        "GENERATED_ARTICLE_URL": route_url,
                        "PUBLISHED_URL": route_url,
                        "DEVELOPMENT_DATE": now_iso,
                    },
                    headers=sheet_headers,
                )
                logger.info("Updated Google Sheet row %s: PUBLISHED_URL = %s", row_idx, route_url)

        except Exception as e:
            logger.error("Error styling and publishing draft %s: %s", draft_path, str(e), exc_info=True)
            stats["errors"] += 1

    summary = {
        "status": "SUCCESS",
        "sheet_name": sheet_name,
        "dry_run": dry_run,
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "stats": stats,
    }

    logger.info("==================================================")
    logger.info("Workflow 4 Publishing Summary:")
    logger.info("  Drafts Processed:     %d", stats["drafts_found"])
    logger.info("  Pages Published:      %d", stats["pages_published"])
    logger.info("  Errors:               %d", stats["errors"])
    if stats["published_articles"]:
        logger.info("--------------------------------------------------")
        logger.info("Published Learning Center Pages:")
        for p in stats["published_articles"]:
            logger.info("  * %s -> %s", p["title"], p["route_url"])
    logger.info("==================================================")

    return summary


def main():
    parser = argparse.ArgumentParser(description="Workflow 4: RSS Blog Publishing Engine")
    parser.add_argument(
        "--sheet-name",
        default=os.environ.get("RSS_SPREADSHEET_NAME", DEFAULT_SHEET_NAME),
        help=f"Target Google Spreadsheet name (default: {DEFAULT_SHEET_NAME})"
    )
    parser.add_argument(
        "--credentials",
        default=DEFAULT_CREDENTIALS_PATH,
        help="Path to service account credentials.json"
    )
    parser.add_argument(
        "--draft-path",
        default="",
        help="Path to specific Markdown draft file to compile"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Compile without updating Google Sheet status"
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=0,
        help="Max number of drafts to publish"
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Output raw JSON summary to stdout"
    )

    args = parser.parse_args()
    res = run_rss_publishing(
        sheet_name=args.sheet_name,
        credentials_path=args.credentials,
        draft_file_path=args.draft_path,
        dry_run=args.dry_run,
        limit=args.limit,
    )

    if args.json:
        print(json.dumps(res, indent=2))

    sys.exit(0 if res.get("status") in ("SUCCESS", "NO_DRAFTS") else 1)


if __name__ == "__main__":
    main()
