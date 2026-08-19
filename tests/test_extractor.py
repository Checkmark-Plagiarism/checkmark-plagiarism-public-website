import os
import tempfile
import pytest
from extractor import (
    parse_seniority_date,
    extract_meta_fields,
    clean_html_and_jsx,
    parse_html_or_jsx_sections,
    extract_post_data,
    discover_learning_posts,
    get_project_root
)

def test_parse_seniority_date():
    # Route only
    assert parse_seniority_date("2026", "6") == "2026-06-01"
    assert parse_seniority_date("2026", "08") == "2026-08-01"

    # With meta date MM-DD-YYYY
    assert parse_seniority_date("2026", "6", "06-25-2026") == "2026-06-25"
    assert parse_seniority_date("2026", "6", "6/15/2026") == "2026-06-15"

    # With meta date YYYY-MM-DD
    assert parse_seniority_date("2026", "6", "2026-07-04") == "2026-07-04"

def test_extract_meta_fields():
    content = """
    export const metadata: Metadata = {
      title: "Testing &quot;Quotes&quot; and Title",
      description: "A description of \\n the article.",
    };

    export const meta = {
      title: "Testing &quot;Quotes&quot; and Title",
      description: "A description of the article.",
      date: "06-25-2026",
      category: "AI Detection",
      categories: ["AI Detection", "Technology"],
      author: "Checkmark Team",
      readTime: "~8 min read"
    };
    """
    meta = extract_meta_fields(content)
    assert meta["title"] == 'Testing "Quotes" and Title'
    assert meta["date"] == "06-25-2026"
    assert meta["category"] == "AI Detection"
    assert "Technology" in meta["categories"]
    assert meta["author"] == "Checkmark Team"
    assert meta["readTime"] == "~8 min read"

def test_clean_html_and_jsx():
    raw = "<p>Hello &quot;world&quot; &amp; friends!<!-- comment --> {refValue}</p>"
    cleaned = clean_html_and_jsx(raw)
    assert cleaned == 'Hello "world" & friends!'

def test_parse_html_or_jsx_sections():
    body = """
    <p>Intro paragraph 1.</p>
    <p>Intro paragraph 2.</p>
    <h2>First Main Heading</h2>
    <p>Details under first heading with <em>emphasis</em>.</p>
    <ul><li>Bullet one</li><li>Bullet two</li></ul>
    <h3>Sub Heading</h3>
    <p>More details under sub heading.</p>
    """
    sections = parse_html_or_jsx_sections(body)
    assert len(sections) == 3
    assert sections[0]["heading"] == "Introduction"
    assert sections[0]["level"] == "intro"
    assert "Intro paragraph 1" in sections[0]["text"]

    assert sections[1]["heading"] == "First Main Heading"
    assert sections[1]["level"] == "h2"
    assert "Bullet one" in sections[1]["text"]

    assert sections[2]["heading"] == "Sub Heading"
    assert sections[2]["level"] == "h3"

def test_extract_post_data_on_real_page():
    root = get_project_root()
    example_path = os.path.join(root, "src", "app", "learning", "2026", "6", "ai-detection-granularity-from-whole-documents-down-to-single-sentences", "page.tsx")
    if os.path.exists(example_path):
        post = extract_post_data(example_path, root)
        assert post["route"] == "/learning/2026/6/ai-detection-granularity-from-whole-documents-down-to-single-sentences"
        assert post["year"] == 2026
        assert post["month"] == 6
        assert post["seniority_date"] == "2026-06-25"
        assert "AI Detection Granularity" in post["title"]
        assert len(post["sections"]) >= 5

def test_discover_learning_posts():
    root = get_project_root()
    posts = discover_learning_posts(root)
    assert len(posts) > 400
    # Ensure sorted by seniority date
    dates = [p["seniority_date"] for p in posts]
    assert dates == sorted(dates)
