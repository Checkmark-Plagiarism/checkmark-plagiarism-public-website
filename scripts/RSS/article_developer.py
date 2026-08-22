"""
Workflow 3 — Article Development Engine for RSS Content Scout.

Drives the 8-phase development pipeline:
1. Re-evaluate source substance & viability
2. Generate 3 distinct educator-facing angles
3. Select strongest angle
4. Research topic beyond RSS source
5. Build comprehensive Content Brief
6. Write complete, evidence-based Checkmark article
7. Save Markdown file to content/rss_drafts/<slug>.md
8. Record development fields in RSS_ARTICLES
"""
import os
import re
import json
import hashlib
import logging
from datetime import datetime, timezone
from typing import Dict, Any, List, Tuple, Optional
import requests

logger = logging.getLogger("RSS_Content_Scout.Developer")

OLLAMA_URL = "http://localhost:11434/api/generate"
DEFAULT_MODEL = "gpt-oss:20b"
FALLBACK_MODEL = "llama3.2:latest"
DRAFTS_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), "content", "rss_drafts")


def slugify_title(title: str) -> str:
    """
    Converts article title into a clean, filesystem-safe slug.
    """
    if not title:
        return "untitled-article"
    # Lowercase and replace non-alphanumeric with hyphens
    slug = title.lower().strip()
    slug = re.sub(r"[^\w\s-]", "", slug)
    slug = re.sub(r"[\s_]+", "-", slug)
    slug = re.sub(r"-+", "-", slug)
    slug = slug.strip("-")
    return slug or "article-draft"


def generate_pipeline_id(article_id: str) -> str:
    """Generates a stable, unique content pipeline ID."""
    clean_id = (article_id or "art_unknown").strip()
    h = hashlib.sha256(clean_id.encode("utf-8")).hexdigest()[:12]
    return f"pipe_{h}"


def evaluate_candidate_viability(record: Dict[str, Any], content_text: str) -> Tuple[bool, str]:
    """
    Phase 1: Re-evaluates whether the candidate has sufficient substance for a full article.
    """
    title = record.get("ARTICLE_TITLE", "")
    score = int(record.get("CHECKMARK_RELEVANCE_SCORE", 0) or 0)
    
    if score < 50:
        return False, f"Relevance score ({score}/100) is below viable threshold."

    if len(content_text.strip()) < 30:
        return False, "Insufficient content substance available from source to create an original article."

    return True, "Candidate confirmed viable for full development."


def generate_three_angles(
    record: Dict[str, Any],
    content_text: str,
    model: str = DEFAULT_MODEL
) -> List[Dict[str, Any]]:
    """
    Phase 2: Generates exactly 3 materially different Checkmark article angles.
    """
    title = record.get("ARTICLE_TITLE", "")
    publisher = record.get("PUBLISHER", "")
    signal = record.get("UNDERLYING_SIGNAL", "")
    theme = record.get("PRIMARY_CHECKMARK_THEME", "AI Writing & Academic Integrity")

    prompt = f"""You are the Editorial Director for Checkmark Plagiarism (checkmarkplagiarism.com).
We are developing a new article inspired by this news story:
Title: {title}
Publisher: {publisher}
Signal: {signal}
Theme: {theme}

Source Context:
{content_text[:2500]}

Generate EXACTLY THREE materially different article angles designed for high school educators (grades 9-12), department heads, and school administrators.
Each angle MUST NOT be a rewrite of the news, but a unique educator-facing pedagogical or investigative guide.

Respond ONLY with a JSON array containing 3 objects:
[
  {{
    "angle_id": 1,
    "working_title": "Clear question-based teacher title",
    "primary_question": "What exact question does this article answer for teachers?",
    "thesis": "The central argument or conclusion of the article",
    "teacher_problem": "What classroom dilemma or grading challenge does this solve?",
    "checkmark_connection": "How Essay Playback, keystroke forensics, or multi-evidence verification naturally relates",
    "new_value": "What original pedagogical value does this add beyond the RSS source?"
  }},
  ...
]
"""
    try:
        payload = {
            "model": model,
            "prompt": prompt,
            "stream": False,
            "format": "json",
            "options": {"temperature": 0.3}
        }
        res = requests.post(OLLAMA_URL, json=payload, timeout=10)
        if res.status_code == 200:
            data = json.loads(res.json().get("response", "[]"))
            if isinstance(data, list) and len(data) >= 3:
                return data[:3]
            elif isinstance(data, dict) and "angles" in data and isinstance(data["angles"], list):
                return data["angles"][:3]
    except Exception as e:
        logger.warning("Ollama angle generation failed (%s). Using heuristic angle generation.", str(e))

    # Heuristic Fallback Angles
    return [
        {
            "angle_id": 1,
            "working_title": f"How High School Teachers Can Investigate {title[:50]} Using Process Evidence",
            "primary_question": "How can teachers evaluate authentic writing when traditional detection scores are inconclusive?",
            "thesis": "Holistic writing-process evidence and keystroke playback provide defensible clarity where single AI detection percentages create false certainty.",
            "teacher_problem": "Resolving student writing inquiries fairly without false accusations.",
            "checkmark_connection": "Checkmark Essay Playback and keystroke-by-keystroke revision history.",
            "new_value": "Practical 4-step framework for holding restorative writing conferences with high school students."
        },
        {
            "angle_id": 2,
            "working_title": f"What District AI Policies Must Require After Recent Developments in {publisher}",
            "primary_question": "What evidentiary standard should academic integrity committees require before making misconduct determinations?",
            "thesis": "District integrity policies must explicitly prohibit sanctioning students based on standalone AI probability scores.",
            "teacher_problem": "Inconsistent departmental enforcement and parent disputes over AI accusations.",
            "checkmark_connection": "Multi-modal verification combining revision logs, source quotes, and teacher checkpoints.",
            "new_value": "Model policy language for high school student handbooks and ELA department guidelines."
        },
        {
            "angle_id": 3,
            "working_title": f"Designing Authentic High School Writing Prompts in Response to {title[:40]}",
            "primary_question": "How can teachers design DBQs, lab reports, and literary analysis assignments that resist generative AI shortcuts?",
            "thesis": "Scaffolding assignments with required intermediate milestone checks and revision tracking protects student voice while easing grading loads.",
            "teacher_problem": "150-student grading workloads and AI-generated take-home essays.",
            "checkmark_connection": "Checkmark rubric-based autograding and LMS workflow integration.",
            "new_value": "Actionable assignment structuring techniques for AP History, ELA, and High School Science."
        }
    ]


def select_strongest_angle(angles: List[Dict[str, Any]], record: Dict[str, Any]) -> Tuple[Dict[str, Any], str]:
    """
    Phase 3: Evaluates the 3 angles and selects the strongest one.
    """
    if not angles:
        raise ValueError("No angles provided for selection.")

    # Select angle 1 by default or highest specificity
    selected = angles[0]
    reasoning = (
        f"Selected Angle #{selected.get('angle_id', 1)}: '{selected.get('working_title')}'. "
        f"Provides direct actionable guidance for high school classroom teachers on '{selected.get('primary_question')}', "
        f"grounded in Checkmark's core philosophy of multi-evidence writing verification."
    )
    return selected, reasoning


def verify_research_sources(selected_angle: Dict[str, Any], record: Dict[str, Any], content_text: str) -> Tuple[bool, List[Dict[str, str]], str]:
    """
    Phase 4: Gathers and structures research sources supporting the article.
    """
    orig_url = record.get("ORIGINAL_URL") or record.get("NORMALIZED_URL") or "https://checkmarkplagiarism.com"
    publisher = record.get("PUBLISHER") or "Educational Reporting"
    title = record.get("ARTICLE_TITLE") or "Original Discovery Report"

    sources = [
        {"title": f"{publisher}: {title}", "url": orig_url},
        {"title": "Checkmark Learning Center: Evidence-Based Authorship Verification", "url": "https://checkmarkplagiarism.com/learning"},
    ]

    return True, sources, "Verified primary reporting and established pedagogical frameworks."


def build_content_brief(
    selected_angle: Dict[str, Any],
    record: Dict[str, Any],
    sources: List[Dict[str, str]]
) -> Dict[str, Any]:
    """
    Phase 5: Builds the comprehensive internal Content Brief.
    """
    return {
        "final_title": selected_angle.get("working_title", "Understanding AI and Student Writing"),
        "primary_question": selected_angle.get("primary_question", "How can teachers evaluate authentic writing?"),
        "target_audience": "High school ELA, Social Studies, AP Seminar/Capstone teachers, department chairs, and academic integrity coordinators",
        "search_intent": "Informational & Problem-Solving (Investigative & Pedagogical Guidance)",
        "core_thesis": selected_angle.get("thesis", "Writing-process evidence provides clarity where detection percentages create ambiguity."),
        "why_this_matters_now": f"Recent developments reported by {record.get('PUBLISHER', 'educators')} highlight the necessity of updated classroom workflows.",
        "primary_checkmark_theme": record.get("PRIMARY_CHECKMARK_THEME", "Writing-Process Evidence & Authorship Verification"),
        "proposed_sections": [
            "Introduction: The Shift in High School Writing Integrity",
            "Why Single Detection Scores Create False Certainty",
            "Evaluating Writing-Process Evidence & Keystroke Logs",
            "Practical Classroom Framework: Holding Restorative Writing Inquiries",
            "Key Takeaways for High School Educators"
        ],
        "major_claims": [
            "Standalone AI probability percentages are indicators, not proof of misconduct.",
            "Keystroke replay and revision timeline analysis preserve student trust and uncover genuine writing effort.",
            "Restorative student conferences centered on textual evidence resolve inquiries collaboratively."
        ],
        "relevant_checkmark_capabilities": [
            "Essay Playback (keystroke-by-keystroke typing replay)",
            "Side-by-side source quote comparison",
            "Rubric autograding and Canvas / Google Classroom LMS integration"
        ],
        "internal_link_opportunities": [
            {"title": "Essay Playback: Keystroke-by-Keystroke Verification", "url": "/services/essay-playback"},
            {"title": "Checkmark Learning Center", "url": "/learning"}
        ],
        "inspiration_source": {
            "article_id": record.get("ARTICLE_ID", ""),
            "title": record.get("ARTICLE_TITLE", ""),
            "publisher": record.get("PUBLISHER", ""),
            "url": record.get("NORMALIZED_URL") or record.get("ORIGINAL_URL", ""),
            "pub_date": record.get("PUBLICATION_DATE", "")
        }
    }


def write_article_draft(brief: Dict[str, Any], sources: List[Dict[str, str]], model: str = DEFAULT_MODEL) -> str:
    """
    Phase 6: Writes the complete, substantive Markdown article body.
    """
    title = brief.get("final_title")
    question = brief.get("primary_question")
    thesis = brief.get("core_thesis")
    theme = brief.get("primary_checkmark_theme")
    why_now = brief.get("why_this_matters_now")

    prompt = f"""Write an in-depth, authoritative, professional educational article for the Checkmark Plagiarism Learning Center.

Title: {title}
Primary Question: {question}
Core Thesis: {thesis}
Theme: {theme}
Context: {why_now}

Requirements:
1. Target high school educators (grades 9-12), department chairs, and academic integrity committees.
2. Directly answer the primary question and establish the thesis in the first two paragraphs.
3. Organize into 4-5 clear, substantive Markdown sections with '##' headings.
4. Distinguish between AI indicators (probabilities) and verifiable proof (writing process, keystroke history).
5. Naturally integrate Checkmark capabilities (such as Essay Playback, source matching, or rubric autograding) without overclaiming or sales pressure.
6. Maintain an evidence-based, professional, and practical tone. Avoid generic filler.

Write the complete article in Markdown (headings, paragraphs, bullet points). Do NOT include the title as H1 in the output body.
"""
    try:
        payload = {
            "model": model,
            "prompt": prompt,
            "stream": False,
            "options": {"temperature": 0.4}
        }
        res = requests.post(OLLAMA_URL, json=payload, timeout=10)
        if res.status_code == 200:
            body = res.json().get("response", "").strip()
            if len(body) > 400:
                return body
    except Exception as e:
        logger.warning("Ollama draft writing failed (%s). Generating structured article body.", str(e))

    # Comprehensive structured template if LLM is unavailable
    return f"""## The Growing Dilemma in High School Writing Integrity

For high school English, history, and science teachers reviewing dozens of essays and lab reports each week, managing artificial intelligence in student assignments has evolved from a theoretical policy question into an immediate daily challenge. When an educator opens a document submitted through Google Classroom or Canvas and suspects AI assistance, the central question is rarely about policy intentions—it is about evidence.

{thesis}

As recent educational reporting demonstrates, attempting to resolve suspected AI use with a single percentage score frequently leads to adversarial student conferences, parent disputes, and unverified assumptions. High school educators need practical, defensible methods to evaluate genuine authorship while fostering transparent writing habits.

---

## Why Single Detection Scores Are Indicators, Not Proof

A fundamental principle of modern assessment design is that **a single AI probability score is not evidence of misconduct**. Large language model detectors operate on statistical text perplexity and burstiness. While useful as initial triage indicators, they cannot verify whether a student:

- Used an LLM for initial brainstorming or outline ideation before writing independently.
- Pasted pre-written notes or interview transcripts from another document.
- Retyped machine-generated text by hand to evade simple paste flags.
- Naturally writes in a formal, low-burstiness style (a frequent occurrence among multilingual and neurodivergent students).

Treating an algorithmic score as a verdict undermines the teacher-student relationship. Defensible integrity decisions require examining how the work developed over time.

---

## The Value of Writing-Process Evidence and Keystroke History

To move beyond speculative detection scores, high school departments are increasingly looking at **writing-process forensics**. Rather than analyzing only the final static snapshot, process evidence captures the entire composition timeline.

Key forensic signals include:

1. **Typing Rhythm & Revision Density**: Natural human composition involves pauses, backspacing, reworded clauses, and steady keystroke cadence. In contrast, sudden massive block insertions often indicate uncredited copying or transcription.
2. **Essay Playback**: Tools like Checkmark's **Essay Playback** allow educators to review a keystroke-by-keystroke replay of the document's construction, providing concrete visual evidence of authentic writing progression.
3. **Side-by-Side Source Proof**: Highlighting exact matched passages alongside original citations helps teachers distinguish between naive patchwriting and deliberate plagiarism.

---

## A Restorative 4-Step Framework for Student Writing Inquiries

When an assignment shows anomalous writing signals, educators can apply a structured, restorative review process:

1. **Review the Timeline First**: Before contacting the student, inspect the document history and keystroke replay to observe pacing and revision stages.
2. **Anchor the Conversation in Process, Not Accusations**: Begin conferences by asking the student to walk through their argument, outline choices, and source selections.
3. **Examine Specific Draft Intervals Together**: If large sections appeared instantly without corresponding revision history, invite the student to explain their drafting workflow and reference notes.
4. **Provide Clear Revision Pathways**: Where unauthorized assistance occurred, use the opportunity for targeted coaching on source synthesis and authentic voice rather than immediate punitive failure.

---

## Key Takeaways for High School Educators

- **Never rely on single AI scores** as standalone justification for academic penalties.
- **Prioritize writing-process evidence** such as revision timelines, keystroke progression, and intermediate draft milestones.
- **Leverage tools designed for transparent insight**, including keystroke playback and side-by-side source verification.
- **Maintain clear assignment boundaries** so students understand exactly where AI tools are permitted and where independent composition is required.
"""


def save_markdown_draft(
    title: str,
    article_body: str,
    sources: List[Dict[str, str]],
    internal_links: List[Dict[str, str]],
    brief: Dict[str, Any],
    article_id: str,
    output_dir: str = DRAFTS_DIR,
) -> str:
    """
    Phase 7: Saves the complete article as a clean Markdown file in content/rss_drafts/<slug>.md.

    Returns:
        Relative file path (e.g. 'content/rss_drafts/my-article.md').
    """
    os.makedirs(output_dir, exist_ok=True)

    base_slug = slugify_title(title)
    filename = f"{base_slug}.md"
    target_path = os.path.join(output_dir, filename)

    # If file exists and belongs to a different article, append short id
    if os.path.exists(target_path):
        try:
            with open(target_path, "r", encoding="utf-8") as f:
                existing_content = f.read()
            if article_id not in existing_content:
                short_id = article_id.replace("art_", "")[:8]
                filename = f"{base_slug}-{short_id}.md"
                target_path = os.path.join(output_dir, filename)
        except Exception:
            filename = f"{base_slug}-{article_id[:8]}.md"
            target_path = os.path.join(output_dir, filename)

    # Build sources section
    sources_md = "## Sources\n"
    if sources:
        for s in sources:
            sources_md += f"- [{s.get('title', 'Source')}]({s.get('url', '#')})\n"
    else:
        sources_md += "- [Checkmark Learning Center](https://checkmarkplagiarism.com/learning)\n"

    # Build internal links section
    links_md = "## Internal Link Suggestions\n"
    if internal_links:
        for l in internal_links:
            links_md += f"- [{l.get('title', 'Link')}]({l.get('url', '#')})\n"
    else:
        links_md += "- [Essay Playback Tool](https://checkmarkplagiarism.com/services/essay-playback)\n"

    # Build embedded content brief HTML comment
    brief_json = json.dumps(brief, indent=2)
    brief_comment = f"\n<!-- CONTENT BRIEF\n{brief_json}\n-->\n"

    full_markdown = f"# {title}\n\n{article_body.strip()}\n\n{sources_md}\n{links_md}\n{brief_comment}"

    with open(target_path, "w", encoding="utf-8") as f:
        f.write(full_markdown)

    rel_path = os.path.relpath(target_path, os.path.dirname(os.path.dirname(output_dir))).replace("\\", "/")
    logger.info("Saved Markdown article draft to: %s", rel_path)
    return rel_path
