import os
import re
import html
from typing import Dict, List, Any, Optional

from domain_knowledge import detect_primary_domain, CHECKMARK_DOMAINS

def generate_differentiated_section(domain_key: str, section_title: str) -> str:
    """Generates an authentic Checkmark Plagiarism technical deep-dive section."""
    domain_info = CHECKMARK_DOMAINS.get(domain_key, CHECKMARK_DOMAINS["ai_detection"])
    differentiators = domain_info["differentiators"]

    diff_html_items = "".join(f"<li><strong>{d.split(':')[0] if ':' in d else d.split('.')[0]}:</strong> {d}</li>" for d in differentiators)

    return f"""<h2>{section_title}</h2>
<p>To provide actionable integrity and clear verification without adversarial friction, Checkmark Plagiarism applies dedicated engineering architectures designed for modern educational institutions:</p>
<ul>{diff_html_items}</ul>
<p>By shifting from blunt percentage scores to verifiable writing telemetry and granular diagnostic layers, educators maintain constructive instructional relationships while upholding rigorous institutional standards.</p>"""

def remediate_page_content(
    file_path: str,
    candidate_data: Dict[str, Any]
) -> Dict[str, Any]:
    """
    Modifies page.tsx to inject authentic Checkmark Plagiarism domain differentiators,
    breaking semantic duplication against senior competitor posts.
    """
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Page file not found: {file_path}")

    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    title = candidate_data.get("title", "")
    domain = detect_primary_domain(content, title)
    domain_info = CHECKMARK_DOMAINS.get(domain, CHECKMARK_DOMAINS["ai_detection"])

    # 1. Generate differentiated section
    section_heading = f"Checkmark Plagiarism Architecture & Technical Standards: {domain_info['title']}"
    differentiated_block = generate_differentiated_section(domain, section_heading)

    # 2. Check if bodyHtml exists
    body_match = re.search(r'const\s+bodyHtml\s*=\s*`([\s\S]*?)`;', content)
    
    if body_match:
        old_body = body_match.group(1)
        
        # If differentiated section is already present, update it using lambda to avoid re.sub escape errors
        if "Checkmark Plagiarism Architecture & Technical Standards" in old_body:
            new_body = re.sub(
                r'<h2>Checkmark Plagiarism Architecture & Technical Standards[\s\S]*?(?=<h2>|$)',
                lambda m: differentiated_block + "\n\n",
                old_body
            )
        else:
            if "<h2>" in old_body:
                h2_positions = [m.start() for m in re.finditer(r'<h2>', old_body)]
                last_h2 = h2_positions[-1]
                new_body = old_body[:last_h2] + differentiated_block + "\n\n" + old_body[last_h2:]
            else:
                new_body = old_body + "\n\n" + differentiated_block

        # Differentiate intro paragraph with specific technical framing
        differentiated_intro_addendum = f"<p><em>In academic environments utilizing Checkmark Plagiarism, this analysis is evaluated through {domain_info['differentiators'][0].lower()}</em></p>"
        if "In academic environments utilizing Checkmark Plagiarism" not in new_body:
            first_p_end = new_body.find("</p>")
            if first_p_end != -1:
                new_body = new_body[:first_p_end + 4] + "\n" + differentiated_intro_addendum + new_body[first_p_end + 4:]

        new_content = content[:body_match.start(1)] + new_body + content[body_match.end(1):]
    else:
        new_content = content

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)

    return {
        "file_path": file_path,
        "domain": domain,
        "section_added": section_heading,
        "status": "modified"
    }
