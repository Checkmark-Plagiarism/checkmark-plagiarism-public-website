import os
import tempfile
import pytest
from domain_knowledge import detect_primary_domain, CHECKMARK_DOMAINS
from remediation import generate_differentiated_section, remediate_page_content

def test_detect_primary_domain():
    text1 = "How keystroke playback and typing timeline replays verify student authenticity."
    assert detect_primary_domain(text1) == "essay_playback"

    text2 = "Connecting plagiarism checks to Canvas LTI and Moodle gradebook sync."
    assert detect_primary_domain(text2) == "lms_integration"

    text3 = "Evaluating claim evidence reasoning with CER rubrics and formative autograding."
    assert detect_primary_domain(text3) == "autograding_and_rubrics"

    text4 = "Zero data retention under FERPA and COPPA student privacy."
    assert detect_primary_domain(text4) == "security_and_ferpa"

def test_remediate_page_content():
    with tempfile.TemporaryDirectory() as tmpdir:
        page_file = os.path.join(tmpdir, "page.tsx")
        initial_content = """import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const meta = {
  title: "Essay Playback Mechanics",
  date: "08-15-2026",
};

const bodyHtml = `<p>Essay playback records student typing.</p>
<h2>How It Works</h2>
<p>Teachers can watch the essay unfold.</p>
<h2>Conclusion</h2>
<p>Summary of benefits.</p>`;

export default function Page() {
  return <ArticleLayout meta={meta}><article dangerouslySetInnerHTML={{ __html: bodyHtml }} /></ArticleLayout>;
}
"""
        with open(page_file, "w", encoding="utf-8") as f:
            f.write(initial_content)

        cand_data = {
            "title": "Essay Playback Mechanics",
            "file_path": page_file
        }

        res = remediate_page_content(page_file, cand_data)
        assert res["status"] == "modified"
        assert res["domain"] == "essay_playback"

        with open(page_file, "r", encoding="utf-8") as f:
            modified = f.read()

        assert "Checkmark Plagiarism Architecture & Technical Standards" in modified
        assert "Millisecond-level time-series event capture" in modified
        assert "Paste-burst entropy diagnostics" in modified
        assert "ArticleLayout" in modified
