from typing import Dict, List, Any

CHECKMARK_DOMAINS = {
    "ai_detection": {
        "title": "AI Detection & Granularity Architecture",
        "keywords": ["ai", "detection", "granularity", "chatgpt", "perplexity", "burstiness", "llm", "detector", "tokens"],
        "differentiators": [
            "Token-level log-probability distribution tracking across sliding 50-token windows rather than whole-document averaging.",
            "Multi-model classifier ensembles trained specifically on GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and Llama 3 outputs.",
            "Syntactic entropy and sentence burstiness variance calculations ($B = \\sigma^2 / \\mu$) to differentiate organic human rhythm from uniform model distribution.",
            "False-positive reduction filters tailored for non-native English (ESL/ELL) writers to eliminate unfair stylistic bias.",
            "Localized heatmaps highlighting sentence-level confidence seams without making binary or punitive accusations."
        ]
    },
    "plagiarism_matching": {
        "title": "Plagiarism Fingerprinting & Source Matching",
        "keywords": ["plagiarism", "matching", "sources", "citation", "patchwriting", "database", "fingerprint", "winnowing"],
        "differentiators": [
            "Deterministic winnowing algorithm utilizing rolling Rabin-Karp hashing over sliding $k$-grams ($k=25, w=50$).",
            "Cross-lingual semantic embedding alignment that uncovers translated source material across 30+ languages.",
            "Side-by-side synchronized diff viewer separating deceptive intentional copying from accidental patchwriting or citation errors.",
            "Strict isolation of private institutional submission repositories with zero external crawling or data exposure.",
            "Automated citation validation against APA 7th, MLA 9th, and Chicago 17th edition style guidelines."
        ]
    },
    "essay_playback": {
        "title": "Essay Playback & Keystroke Telemetry",
        "keywords": ["playback", "keystroke", "telemetry", "typing", "paste", "timeline", "process", "replay", "history"],
        "differentiators": [
            "Millisecond-level time-series event capture recording character additions, deletions, pause intervals, and paste bursts.",
            "Paste-burst entropy diagnostics that flag instantaneous 500-word block insertions while accounting for legitimate quotes.",
            "Interactive video-like scrub bar allowing educators to replay the authentic chronological drafting journey in under 60 seconds.",
            "Writing velocity analysis calculating dynamic WPM cadence and backspace-to-character revision ratios.",
            "Restorative, non-adversarial conference workflows enabling students to explain their drafting steps with objective evidence."
        ]
    },
    "lms_integration": {
        "title": "LMS & Classroom Workflow Integration",
        "keywords": ["canvas", "moodle", "google classroom", "brightspace", "blackboard", "lms", "lti", "gradebook", "sync"],
        "differentiators": [
            "Seamless Canvas LTI 1.3 Advantage integration supporting Assignment and Grade Services (AGS) and Names & Role Provisioning (NRPS).",
            "Direct Google Classroom API integration with automatic assignment roster synchronization and Google Docs telemetry add-on.",
            "Moodle REST API and LTI connectivity providing automated two-way gradebook passback and rubric sync.",
            "Single Sign-On (SSO) via SAML 2.0, Google Workspace, and Microsoft Entra ID with granular role-based access control (RBAC).",
            "Zero-friction student workflow requiring no extra logins or third-party portal hops."
        ]
    },
    "autograding_and_rubrics": {
        "title": "Rubric Autograding & Formative Feedback",
        "keywords": ["autograding", "rubric", "feedback", "grading", "cer", "criteria", "formative", "assessment"],
        "differentiators": [
            "Quote-anchored rubric feedback tying formative commentary directly to specific sentences in the student's text.",
            "Customizable Claim-Evidence-Reasoning (CER) scoring criteria for secondary science and humanities departments.",
            "Formative pre-submission diagnostic mode allowing students to self-assess and revise before final grading.",
            "Teacher-controlled rubric weight adjustment with complete manual override capabilities on all machine-suggested marks.",
            "Batch rubric passback to school district gradebooks with detailed criterion breakdown."
        ]
    },
    "security_and_ferpa": {
        "title": "Student Data Privacy & Compliance",
        "keywords": ["ferpa", "coppa", "privacy", "security", "retention", "compliance", "soc 2", "audit"],
        "differentiators": [
            "Enforced zero-data-retention policy guaranteeing student submissions are never used to train public or proprietary AI models.",
            "Client-side PII pseudonymization stripping student names, emails, and identifiers before processing.",
            "SOC 2 Type II certified cloud infrastructure with end-to-end TLS 1.3 encryption and immutable audit logging.",
            "Full compliance with FERPA, COPPA, and state student privacy legislation (e.g. California SOPPA, NY Ed Law 2-D).",
            "Complete institutional ownership and on-demand deletion rights over all stored submission logs."
        ]
    }
}

def detect_primary_domain(text: str, title: str = "") -> str:
    """Detects the most relevant Checkmark Plagiarism technical domain based on keyword matching."""
    combined = f"{title} {text}".lower()
    scores = {}

    for domain_key, data in CHECKMARK_DOMAINS.items():
        score = sum(combined.count(kw) for kw in data["keywords"])
        scores[domain_key] = score

    best_domain = max(scores, key=scores.get)
    if scores[best_domain] == 0:
        return "ai_detection" # default domain
    return best_domain
