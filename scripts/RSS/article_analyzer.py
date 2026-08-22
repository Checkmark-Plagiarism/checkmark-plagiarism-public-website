"""
Article Content Analyzer for RSS Content Scout (Workflow 2).

Evaluates RSS articles against the Checkmark Plagiarism editorial rubric:
- Extracts UNDERLYING_SIGNAL (1-3 sentences)
- Generates factual ARTICLE_SUMMARY
- Calculates 7 category scores (0-100 total)
- Assigns EDITORIAL_STATUS (REJECTED: 0-49, WATCH: 50-69, CANDIDATE: 70-100)
- Generates PRIMARY_CHECKMARK_THEME, PROPOSED_ARTICLE_ANGLE, and PROPOSED_WORKING_TITLE for candidates
"""
import re
import json
import logging
from typing import Dict, Any, Optional
import requests

logger = logging.getLogger("RSS_Content_Scout.Analyzer")

OLLAMA_URL = "http://localhost:11434/api/generate"
DEFAULT_MODEL = "gpt-oss:20b"
FALLBACK_MODEL = "llama3.2:latest"

PROMPT_SYSTEM = """You are the Editorial Director for Checkmark Plagiarism (checkmarkplagiarism.com) and lead architect of the Checkmark Learning Center.
Your role is to evaluate external RSS articles and determine whether Checkmark has a legitimate, compelling, and educator-focused reason to develop an article inspired by this news.

### Checkmark Context & Philosophy:
- Checkmark Plagiarism is an academic integrity and assessment platform built for high school educators (grades 9-12), department chairs, and administrators.
- Core tools: Plagiarism detection, source matching, AI detection indicators, Essay Playback (keystroke-by-keystroke typing & revision replay), rubric-based autograding, and Canvas/Google Classroom integrations.
- Core philosophy: "A single AI score is not the same thing as evidence of misconduct." Educators need holistic writing-process evidence, typing history, and contextual inquiry rather than punitive automated bans.

### Relevance Scoring Rubric (0-100 total):
1. PRODUCT_ADJACENCY_SCORE (0-25): Student AI use, AI-assisted writing, plagiarism, authorship, writing history, academic integrity, assessment, source verification, teacher grading, LMS changes.
2. TEACHER_RELEVANCE_SCORE (0-20): Actionable importance to 9-12 educators, department chairs, instructional tech coaches, integrity committees.
3. DISTINCTIVE_PERSPECTIVE_SCORE (0-20): Checkmark can contribute a meaningful framework, evidence type (e.g. keystroke playback, revision proof), or teacher strategy vs generic detector mention.
4. EVIDENCE_QUALITY_SCORE (0-10): Peer-reviewed research, district policy documentation, official state/edtech announcements, primary data (penalize if article was inaccessible or only RSS snippet).
5. SEARCH_OPPORTUNITY_SCORE (0-10): Long-tail search demand from high school teachers (e.g., "Can revision history prove AI use?", "How to investigate AI in DBQs").
6. TIMELINESS_SCORE (0-10): Current academic year currency, emerging student behaviors, recent tech/policy developments.
7. PRODUCT_CONNECTION_SCORE (0-5): Natural, non-forced tie-in to Checkmark capabilities.

Total Score = SUM of above (0-100).

### Thresholds:
- 0-49: REJECTED (topic is not sufficiently relevant or too generic; do not propose article; most articles should be REJECTED)
- 50-69: WATCH (potential connection, but not currently strong enough for standalone article)
- 70-100: CANDIDATE (strong signal and unique Checkmark angle)

Respond ONLY with a valid JSON object matching the following structure:
{
  "UNDERLYING_SIGNAL": "1-3 sentences identifying what is actually new, interesting, or meaningful about the article. Do NOT repeat headline.",
  "ARTICLE_SUMMARY": "Concise factual summary of what happened, who is involved, findings, and why it matters.",
  "PRODUCT_ADJACENCY_SCORE": 0-25,
  "TEACHER_RELEVANCE_SCORE": 0-20,
  "DISTINCTIVE_PERSPECTIVE_SCORE": 0-20,
  "EVIDENCE_QUALITY_SCORE": 0-10,
  "SEARCH_OPPORTUNITY_SCORE": 0-10,
  "TIMELINESS_SCORE": 0-10,
  "PRODUCT_CONNECTION_SCORE": 0-5,
  "CHECKMARK_RELEVANCE_SCORE": 0-100,
  "EDITORIAL_STATUS": "REJECTED" | "WATCH" | "CANDIDATE",
  "PRIMARY_CHECKMARK_THEME": "Theme name if CANDIDATE/WATCH, else ''",
  "PROPOSED_ARTICLE_ANGLE": "High-intent teacher angle if CANDIDATE/WATCH, else ''",
  "PROPOSED_WORKING_TITLE": "Specific high school educator title if CANDIDATE, else ''",
  "ANALYSIS_REASONING": "2-3 sentences explaining the rationale behind the scores and editorial status."
}
"""


def _heuristic_fallback_analysis(
    title: str,
    publisher: str,
    content_text: str,
    is_fallback_rss: bool = False
) -> Dict[str, Any]:
    """
    Deterministic rule-based fallback scoring if LLM is unavailable.
    """
    text_corpus = f"{title} {publisher} {content_text}".lower()
    
    # 1. Product Adjacency (0-25)
    core_kw = [
        "plagiarism", "ai writing", "chatgpt", "academic integrity", "essay playback",
        "keystroke", "autograding", "rubric", "canvas", "google classroom", "authorship",
        "revision history", "cheating", "ai detector", "ai detection", "ai misconduct",
        "writing process", "misconduct", "citation", "source proof", "lms"
    ]
    adj_matches = sum(1 for kw in core_kw if kw in text_corpus)
    adj_score = min(25, adj_matches * 5)

    # 2. Teacher Relevance (0-20)
    teacher_kw = [
        "high school", "teacher", "teachers", "classroom", "student", "students",
        "grading", "educator", "educators", "district", "assignment", "assignments",
        "k-12", "ela", "curriculum", "dbq", "dbqs", "essay", "essays"
    ]
    teacher_matches = sum(1 for kw in teacher_kw if kw in text_corpus)
    teacher_score = min(20, teacher_matches * 3)

    # 3. Distinctive Perspective (0-20)
    dist_kw = [
        "keystroke", "replay", "evidence", "process", "false positive", "investigat",
        "writing process", "humanizer", "rewrite", "playback", "copy paste", "authorship",
        "conference", "restorative"
    ]
    dist_matches = sum(1 for kw in dist_kw if kw in text_corpus)
    dist_score = min(20, dist_matches * 4)

    # 4. Evidence Quality (0-10)
    if is_fallback_rss:
        evid_score = 4
    elif any(k in text_corpus for k in ["study", "research", "university", "survey", "report", "data", "published", "findings", "district", "policy", "mandate", "enacted"]):
        evid_score = 8
    else:
        evid_score = 6

    # 5. Search Opportunity (0-10)
    if any(k in text_corpus for k in ["how", "can", "detect", "policy", "investigate", "inquiries", "evidence", "verify"]):
        search_score = 9
    else:
        search_score = 5

    # 6. Timeliness (0-10)
    time_score = 8

    # 7. Product Connection (0-5)
    prod_score = 5 if adj_score >= 15 else (3 if adj_score >= 8 else 0)

    total_score = adj_score + teacher_score + dist_score + evid_score + search_score + time_score + prod_score
    total_score = min(100, max(0, total_score))

    if total_score >= 70:
        editorial_status = "CANDIDATE"
        theme = "AI Writing & Academic Integrity Forensics"
        angle = f"Examines how high school educators can verify authentic student writing using process evidence in light of developments from {publisher}."
        working_title = f"How High School Teachers Can Address Emerging AI Writing Signals in Student Essays"
    elif total_score >= 50:
        editorial_status = "WATCH"
        theme = "Educational Technology & Integrity Trends"
        angle = f"Monitors policy shifts and student tool adoption reported by {publisher}."
        working_title = ""
    else:
        editorial_status = "REJECTED"
        theme = ""
        angle = ""
        working_title = ""

    signal = f"Report from {publisher} regarding educational developments and student technology trends."
    if len(content_text) > 50:
        summary = content_text[:300].strip() + ("..." if len(content_text) > 300 else "")
    else:
        summary = f"Article titled '{title}' published by {publisher}."

    return {
        "UNDERLYING_SIGNAL": signal,
        "ARTICLE_SUMMARY": summary,
        "PRODUCT_ADJACENCY_SCORE": adj_score,
        "TEACHER_RELEVANCE_SCORE": teacher_score,
        "DISTINCTIVE_PERSPECTIVE_SCORE": dist_score,
        "EVIDENCE_QUALITY_SCORE": evid_score,
        "SEARCH_OPPORTUNITY_SCORE": search_score,
        "TIMELINESS_SCORE": time_score,
        "PRODUCT_CONNECTION_SCORE": prod_score,
        "CHECKMARK_RELEVANCE_SCORE": total_score,
        "EDITORIAL_STATUS": editorial_status,
        "PRIMARY_CHECKMARK_THEME": theme,
        "PROPOSED_ARTICLE_ANGLE": angle,
        "PROPOSED_WORKING_TITLE": working_title,
        "ANALYSIS_REASONING": f"Evaluated via rubric engine: adjacency ({adj_score}/25), teacher relevance ({teacher_score}/20), distinctive perspective ({dist_score}/20). Total {total_score}/100.",
    }


def analyze_article(
    article_title: str,
    publisher: str,
    content_text: str,
    is_fallback_rss: bool = False,
    model: str = DEFAULT_MODEL,
) -> Dict[str, Any]:
    """
    Performs editorial analysis and relevance scoring for a single article.

    Args:
        article_title: Title of the article.
        publisher: Publisher name.
        content_text: Extracted full text or RSS fallback text.
        is_fallback_rss: True if full article was inaccessible online.
        model: Ollama model name to use.

    Returns:
        Dictionary containing all 15 analysis fields.
    """
    user_prompt = f"""ARTICLE TO EVALUATE:
Publisher: {publisher}
Title: {article_title}
Full Content Access: {"No (Fallback to RSS metadata only)" if is_fallback_rss else "Yes (Full article accessed)"}

Article Text:
{content_text[:4000]}
"""

    try:
        payload = {
            "model": model,
            "prompt": f"{PROMPT_SYSTEM}\n\n{user_prompt}",
            "stream": False,
            "format": "json",
            "options": {
                "temperature": 0.2,
                "top_p": 0.9,
            }
        }
        response = requests.post(OLLAMA_URL, json=payload, timeout=8)
        if response.status_code == 200:
            raw_json = response.json().get("response", "")
            data = json.loads(raw_json)
            
            # Validate and calculate sum
            adj = int(data.get("PRODUCT_ADJACENCY_SCORE", 0))
            teach = int(data.get("TEACHER_RELEVANCE_SCORE", 0))
            dist = int(data.get("DISTINCTIVE_PERSPECTIVE_SCORE", 0))
            evid = int(data.get("EVIDENCE_QUALITY_SCORE", 0))
            search = int(data.get("SEARCH_OPPORTUNITY_SCORE", 0))
            timely = int(data.get("TIMELINESS_SCORE", 0))
            prod = int(data.get("PRODUCT_CONNECTION_SCORE", 0))

            # Bound individual scores
            adj = min(25, max(0, adj))
            teach = min(20, max(0, teach))
            dist = min(20, max(0, dist))
            evid = min(10, max(0, evid))
            search = min(10, max(0, search))
            timely = min(10, max(0, timely))
            prod = min(5, max(0, prod))

            total = adj + teach + dist + evid + search + timely + prod

            # Enforce status thresholding
            if total >= 70:
                status = "CANDIDATE"
            elif total >= 50:
                status = "WATCH"
            else:
                status = "REJECTED"

            return {
                "UNDERLYING_SIGNAL": data.get("UNDERLYING_SIGNAL", "").strip(),
                "ARTICLE_SUMMARY": data.get("ARTICLE_SUMMARY", "").strip(),
                "PRODUCT_ADJACENCY_SCORE": adj,
                "TEACHER_RELEVANCE_SCORE": teach,
                "DISTINCTIVE_PERSPECTIVE_SCORE": dist,
                "EVIDENCE_QUALITY_SCORE": evid,
                "SEARCH_OPPORTUNITY_SCORE": search,
                "TIMELINESS_SCORE": timely,
                "PRODUCT_CONNECTION_SCORE": prod,
                "CHECKMARK_RELEVANCE_SCORE": total,
                "EDITORIAL_STATUS": status,
                "PRIMARY_CHECKMARK_THEME": data.get("PRIMARY_CHECKMARK_THEME", "").strip() if status in ("CANDIDATE", "WATCH") else "",
                "PROPOSED_ARTICLE_ANGLE": data.get("PROPOSED_ARTICLE_ANGLE", "").strip() if status in ("CANDIDATE", "WATCH") else "",
                "PROPOSED_WORKING_TITLE": data.get("PROPOSED_WORKING_TITLE", "").strip() if status == "CANDIDATE" else "",
                "ANALYSIS_REASONING": data.get("ANALYSIS_REASONING", "").strip(),
            }
    except Exception as e:
        logger.warning("Ollama LLM analysis failed or timed out (%s). Falling back to heuristic rubric engine.", str(e))

    # Fallback to rubric engine if Ollama fails
    return _heuristic_fallback_analysis(article_title, publisher, content_text, is_fallback_rss)
