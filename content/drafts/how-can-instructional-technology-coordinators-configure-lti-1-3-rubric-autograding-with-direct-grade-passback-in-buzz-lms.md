---
title: "How Can Instructional Technology Coordinators Configure LTI 1.3 Rubric Autograding With Direct Grade Passback in Buzz LMS? | Checkmark Plagiarism"
slug: "how-can-instructional-technology-coordinators-configure-lti-1-3-rubric-autograding-with-direct-grade-passback-in-buzz-lms"
date: "2026-08-18"
description: "A technical and pedagogical configuration guide for Instructional Technology Coordinators integrating LTI 1.3 Advantage rubric autograding, Essay Playback™, and direct grade passback in Agilix Buzz LMS."
keywords: ["Buzz LMS LTI 1.3", "Agilix Buzz grade passback", "LTI 1.3 Advantage autograding", "Instructional Technology Coordinator guide", "AI rubric scoring", "Assignment and Grade Services AGS", "Names and Role Provisioning NRPS", "Deep Linking 2.0 Buzz", "Essay Playback Buzz LMS", "Checkmark Plagiarism", "competency-based education writing"]
category: "LMS Integrations"
categories: ["LMS Integrations", "Instructional Technology", "Rubric Autograding", "Administrator Guides"]
author: "The Checkmark Plagiarism Team"
---

# How Can Instructional Technology Coordinators Configure LTI 1.3 Rubric Autograding With Direct Grade Passback in Buzz LMS?

> **Executive Summary:** For Instructional Technology Coordinators, District IT Directors, and Virtual Academy Leaders utilizing **Agilix Buzz LMS**, scaling authentic writing assessment across personalized, continuous-enrollment, and competency-based pathways presents a severe operational bottleneck: the manual grading backlog. Traditional writing evaluation forces educators to juggle disconnected AI detection tools, web plagiarism scanners, and external spreadsheets, manually transcribing criterion scores into Buzz's mastery gradebook. By deploying **Checkmark Plagiarism** via **1EdTech LTI 1.3 Advantage**—leveraging **OpenID Connect (OIDC)**, **Assignment and Grade Services (AGS 2.0)**, **Names and Role Provisioning Services (NRPS 2.0)**, and **Deep Linking 2.0 (LTI-DL)**—districts can establish an enterprise-grade, bi-directional assessment bridge. This integration couples grounded, quote-anchored AI rubric autograding and patent-pending **Essay Playback™** (keystroke dynamics and 100% paste preservation) directly inside Buzz Course Master templates and derivative child sections. Educators retain 100% pedagogical authority through a **Teacher-in-the-Loop** moderation console, slashing grading latency from 9+ days to under 48 hours while maintaining strict FERPA/COPPA zero-data-retention compliance.

---

## The Virtual & Competency-Based Assessment Dilemma in Agilix Buzz LMS

Agilix Buzz LMS occupies a distinct and vital position within the K–12 and postsecondary educational technology landscape. As the leading engine for statewide virtual academies, regional educational service agencies (RESAs), personalized learning districts, and competency-based education (CBE) consortia, Buzz is architected specifically for flexible, student-centered pacing.

Unlike traditional semester-bound learning management systems, Buzz thrives on non-linear learning workflows:

*   **Continuous Enrollment Pipelines:** Students matriculate, progress, and finish courses at individualized velocities throughout 365 calendar days.
*   **Multi-Tiered Domain Hierarchies:** District administrators manage complex parent-child domain structures where curriculum is authored once in **Course Masters**, inherited across **Base Courses**, and instantiated in thousands of **Derivative Child Sections**.
*   **Dual-Architecture Gradebooks:** Buzz calculates both traditional points-based letter grades and standards-aligned **Competency & Mastery Matrices**, mapping individual assessment criteria to state and district performance indicators.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│              AGILIX BUZZ LMS HIERARCHICAL CURRICULUM ARCHITECTURE                        │
└──────────────────────────────────────────────────────────────────────────────────────────┘

                   ┌───────────────────────────────────────────────┐
                   │          District Master Course (ELA)         │
                   │  • Master Analytic Rubric (4 Criteria)        │
                   │  • Deep-Linked Checkmark Assignment Template  │
                   └───────────────────────┬───────────────────────┘
                                           │ Inherits Curriculum & LTI Bindings
                                           ▼
                   ┌───────────────────────────────────────────────┐
                   │             Base Course Offering              │
                   │  • Section Configuration & Teacher Roles      │
                   └───────────────────────┬───────────────────────┘
                                           │ Spawns Asynchronous Cohorts
                     ┌─────────────────────┴─────────────────────┐
                     ▼                                           ▼
   ┌───────────────────────────────────┐       ┌───────────────────────────────────┐
   │ Virtual Cohort A (Continuous)     │       │ Virtual Cohort B (Cohort-Based)   │
   │ • Dynamic Roster (NRPS 2.0)       │       │ • Dynamic Roster (NRPS 2.0)       │
   │ • AGS 2.0 Real-Time Grade Passback│       │ • AGS 2.0 Real-Time Grade Passback│
   └───────────────────────────────────┘       └───────────────────────────────────┘
```

### The Asynchronous Grading Bottleneck

While Buzz excels at automarking objective formative assessments (quizzes, interactive modules, and digital workbooks), open-response qualitative writing assignments present a critical structural chokepoint. 

In an asynchronous or mastery-based virtual academy, when a student submits a major synthesis essay, persuasive argument, or DBQ (Document-Based Question), **their forward curriculum progression often pauses until that essay is evaluated against state mastery rubrics**.

When instructors manage cohorts of 120 to 180 remote students, manual essay evaluation creates an unsustainable "grading backlog":

$$\text{Grading Turnaround Latency} = \frac{\text{Active Student Submissions} \times \text{Average Evaluation Time (22 min)}}{\text{Daily Teacher Grading Capacity (3.5 hours)}} \approx 9.4 \text{ Business Days}$$

A 9-day feedback delay completely breaks personalized learning velocity. By the time an instructor returns an essay with rubric feedback, the student has either stalled their pacing or moved into subsequent units without remediating foundational writing deficiencies.

### The Breakdown of Legacy Integrity & Grading Tools

Instructional Technology Coordinators attempting to solve this challenge with legacy edtech software encounter three systemic failure modes:

1.  **The "Black-Box Score" Crisis:** Legacy AI detectors output a single whole-document percentage (e.g., "78% AI Detected") with zero passage-level explanation or behavioral evidence. In virtual settings, where teachers lack daily face-to-face rapport, false-positive flags destroy teacher-student trust and trigger contentious administrative appeals.
2.  **The Manual Gradebook Transcription Tax:** Disconnected grading assistants require teachers to review essays in one browser tab, manually toggle to Buzz's grading screen, click individual rubric cells, copy-paste narrative feedback, and manually trigger mastery completions. This multi-tab workflow consumes 12 to 15 minutes per submission in pure clerical mechanics.
3.  **Broken LTI 1.1 / CSV Pipelines:** Outdated LTI 1.1 integrations only support raw numeric score passback to a single gradebook cell. They cannot communicate individual rubric criterion scores, cannot attach grounded textual evidence, and frequently fail when syncing derivative child courses under Buzz's domain inheritance model.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│            LEGACY DISCONNECTED TOOLS VS. CHECKMARK LTI 1.3 ADVANTAGE IN BUZZ             │
├──────────────────────────────────────┬─────────────────────────┬─────────────────────────┤
│ Assessment Feature                   │ Legacy Tooling Pipeline │ Checkmark LTI 1.3 Suite │
├──────────────────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Security Protocol                    │ OAuth 1.0a / Shared Key │ OAuth 2.0 / OIDC & JWKS │
│ Course Master Inheritance            │ Broken / Manual Re-link │ Native Deep Linking 2.0 │
│ Roster & Role Provisioning           │ Nightly CSV Sync Delay  │ Real-Time NRPS 2.0      │
│ Gradebook Passback Scope             │ Aggregate Points Only   │ AGS 2.0 LineItem+Rubric │
│ Mastery Matrix Alignment             │ None (Manual Transfer)  │ Objective-Level Binding │
│ Rubric Feedback Grounding            │ Generic Boilerplate     │ Quote-Anchored Evidence │
│ Integrity Verification Model         │ Opaque Single % Guess   │ Multi-Factor + Playback │
│ Writing Process Evidence             │ None (Static Text Only) │ Patent-Pending Replay™  │
│ Average Teacher Grading Time / Paper │ 22.0 Minutes            │ 4.5 Minutes (Validated) │
│ Student Feedback Latency             │ 7–10 Business Days      │ < 24–48 Hours           │
└──────────────────────────────────────┴─────────────────────────┴─────────────────────────┘
```

---

## 1EdTech LTI 1.3 Advantage & Buzz LMS Architecture

To achieve seamless, enterprise-grade interoperability across Agilix Buzz domain trees, districts must leverage the full **1EdTech LTI 1.3 Advantage** specification. LTI 1.3 replaces legacy, vulnerable shared-secret models with modern asymmetric public-key cryptography and modular RESTful sub-services.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                   LTI 1.3 ADVANTAGE FOUR-PILLAR ARCHITECTURAL SUITE                      │
└──────────────────────────────────────────────────────────────────────────────────────────┘

     ┌────────────────────────────────────────────────────────────────────────────────┐
     │ 1. LTI 1.3 Core Security Framework                                             │
     │    • OpenID Connect (OIDC) Initiation & State Validation                       │
     │    • OAuth 2.0 Client Credentials Grant & RSA-SHA256 Signed JWT Exchanges      │
     │    • Asymmetric JSON Web Key Sets (JWKS) Endpoint Resolution                   │
     └───────────────────────────────────────┬────────────────────────────────────────┘
                                             │
         ┌───────────────────────────────────┼───────────────────────────────────┐
         ▼                                   ▼                                   ▼
┌──────────────────┐               ┌──────────────────┐                ┌──────────────────┐
│ 2. AGS 2.0       │               │ 3. NRPS 2.0      │                │ 4. Deep Link 2.0 │
│ Assignment &     │               │ Names & Role     │                │ Content Item     │
│ Grade Services   │               │ Provisioning     │                │ Selection        │
│ • LineItem Sync  │               │ • Section Roster │                │ • Master Course  │
│ • Rubric Cells   │               │ • RBAC Mapping   │                │   1-Click Embed  │
│ • Formative Text │               │ • Co-Teacher Auth│                │ • Custom Rubrics │
└──────────────────┘               └──────────────────┘                └──────────────────┘
```

### 1. Security Framework: OAuth 2.0, OIDC, and Asymmetric Cryptographic Handshake

The LTI 1.3 Core establishes a secure, zero-trust connection between Agilix Buzz and Checkmark Plagiarism. 

When a student or teacher opens a Checkmark-enabled assignment in Buzz, the communication executes through a three-legged OpenID Connect (OIDC) authentication flow:

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│              LTI 1.3 / OIDC CRYPTOGRAPHIC LAUNCH FLOW SEQUENCE                           │
└──────────────────────────────────────────────────────────────────────────────────────────┘

  [User Browser]             [Agilix Buzz LMS]             [Checkmark LTI Service]
        │                            │                                │
        │─── 1. Click Assignment ───>│                                │
        │                            │─── 2. OIDC Auth Request ──────>│ (Initiates Login)
        │                            │    (iss, login_hint, lti_msg)  │
        │<── 3. Redirect to Auth ─────────────────────────────────────│
        │    (State, Nonce)          │                                │
        │                            │                                │
        │─── 4. Auth Request ───────>│                                │
        │    with Credentials        │                                │
        │                            │─── 5. Issue Signed JWT ───────>│ (id_token with RSA256)
        │<── 6. Render Checkmark ─────────────────────────────────────│ (JWKS Verified)
        │    Interface in Buzz Frame │                                │
```

1.  **Login Initiation:** Buzz sends an HTTP POST request to Checkmark’s OIDC initiation endpoint (`/api/lti13/oidc/login`), containing the `iss` (platform issuer: `https://agilixbuzz.com`), `login_hint` (obscured user identifier), `target_link_uri`, and `lti_message_hint`.
2.  **Authentication Request:** Checkmark responds by redirecting the user’s browser back to Buzz’s authorization endpoint with a cryptographically secure `state` string and a unique `nonce` to prevent replay attacks.
3.  **Signed JWT ID Token Issuance:** Buzz generates a signed JSON Web Token (`id_token`) utilizing its private RSA key and returns it to Checkmark’s launch URL.
4.  **JWKS Verification:** Checkmark retrieves Buzz’s public key set from the platform’s JWKS URL, validates the cryptographic signature, confirms the token has not expired (`exp`), and ensures the `nonce` matches the original launch request.

This workflow guarantees that no passwords, shared secrets, or identifiable student directory records are exposed in transit.

### 2. Assignment and Grade Services (AGS 2.0 / LineItem API)

The LTI 1.3 Assignment and Grade Services standard (`https://purl.imsglobal.org/spec/lti-ags/scope/lineitem`) powers bi-directional grade synchronization. 

Checkmark utilizes AGS 2.0 to communicate three synchronized data streams back to Buzz upon teacher authorization:

*   **Numeric Score Passback:** Transmits the scaled point total (e.g., `88.5 / 100`) directly to the Buzz gradebook column associated with the assignment's `lineitem`.
*   **Criterion-Level Rubric Breakdown:** Delivers structured JSON metadata containing the exact performance tier achieved across each analytic rubric criterion (e.g., *Thesis: 4/4*, *Evidence: 3/4*, *Synthesis: 3/4*, *Conventions: 4/4*).
*   **Formatted Teacher Comments & Formative Marginalia:** Passes comprehensive, quote-anchored instructor justifications into Buzz’s student feedback panel.

In Buzz, these line items can be dynamically linked to **Course Competencies**, ensuring that when Checkmark passes a rubric score, Buzz automatically updates the student's mastery trajectory against specific state academic standards.

### 3. Names and Role Provisioning Services (NRPS 2.0)

In virtual academies with rolling admissions, students frequently join or drop sections mid-cycle. NRPS 2.0 (`https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly`) completely eliminates manual roster exports or delayed overnight batch syncs.

When an instructor opens the Checkmark dashboard within Buzz, Checkmark calls Buzz’s NRPS endpoint to obtain the active section membership list. Checkmark maps Buzz institutional roles using standardized 1EdTech Role URIs:

*   `http://purl.imsglobal.org/vocab/lis/v2/membership#Instructor` $\to$ Granted full access to the Teacher Moderation Console, Essay Playback™ controls, rubric customization, and grade passback triggers.
*   `http://purl.imsglobal.org/vocab/lis/v2/membership#Learner` $\to$ Restricted to the student composition environment, assignment prompt details, self-reflection prompts, and released formative feedback.
*   `http://purl.imsglobal.org/vocab/lis/v2/membership#Administrator` $\to$ Granted cross-domain auditing permissions, integration configuration, and FERPA/COPPA compliance report access.

### 4. Deep Linking 2.0 (LTI-DL)

For Instructional Technology Coordinators building standardized curriculum, Deep Linking 2.0 (`https://purl.imsglobal.org/spec/lti-dl/scope/contentitem`) is the cornerstone of scalable deployment.

Instead of requiring individual teachers to manually configure LTI URLs, keys, and custom parameters in every class section, deep linking allows curriculum authors to configure Checkmark assignments directly inside **Buzz Master Courses**:

1.  The coordinator clicks **Add Activity $\to$ External Tool (Checkmark Plagiarism)** in the Buzz Master Course Editor.
2.  Checkmark launches an embedded Deep Linking selection window.
3.  The coordinator selects the assignment prompt, sets formatting parameters (minimum word counts, short-text guardrail limits), binds the standardized district analytic rubric, and configures integrity settings.
4.  Checkmark returns a signed `ContentItem` JSON response to Buzz. Buzz automatically embeds the fully configured activity into the master syllabus.
5.  When Buzz spawns hundreds of derivative child courses for individual teachers, all Checkmark parameters, rubric definitions, and AGS line item endpoints are automatically inherited without error.

---

## Checkmark Plagiarism's Teacher-in-the-Loop AI Rubric Autograding Suite for Buzz

Checkmark Plagiarism transforms essay assessment in Buzz LMS by replacing subjective guessing and clerical transcription with an integrated, multi-dimensional evaluation suite.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│             CHECKMARK TEACHER-IN-THE-LOOP EVALUATION PIPELINE IN BUZZ                    │
└──────────────────────────────────────────────────────────────────────────────────────────┘

     ┌────────────────────────────────────────────────────────────────────────────────┐
     │ Student Submits Essay in Buzz LMS (via Native Editor / Google Docs / Word)    │
     └───────────────────────────────────────┬────────────────────────────────────────┘
                                             │
                                             ▼
     ┌────────────────────────────────────────────────────────────────────────────────┐
     │ Parallel Analysis Engines (Zero-Retention Cloud Sandbox)                       │
     │ ├─ Multi-Factor Integrity: Passage-Level AI Sliders + Web Plagiarism Match    │
     │ ├─ Behavioral Telemetry: Patent-Pending Essay Playback™ Keystroke Dynamic Log  │
     │ └─ Rubric Engine: Abstract Syntax Tree & Grounded Quote-Anchored Extraction    │
     └───────────────────────────────────────┬────────────────────────────────────────┘
                                             │
                                             ▼
     ┌────────────────────────────────────────────────────────────────────────────────┐
     │ Educator Moderation Console (Embedded in Buzz Frame)                           │
     │ • Teacher reviews pre-scored rubric criteria & quote-anchored citations        │
     │ • 1-Click adjustments: Accept, override point tiers, or edit formative notes   │
     │ • Complete review in 3 to 5 minutes per submission                             │
     └───────────────────────────────────────┬────────────────────────────────────────┘
                                             │
                                             ▼ Teacher Clicks "Authorize & Sync"
     ┌────────────────────────────────────────────────────────────────────────────────┐
     │ LTI 1.3 AGS 2.0 Passback Pipeline $\to$ Direct Injection into Buzz Gradebook   │
     │ ├─ Total Numeric Score $\to$ Assigned Gradebook Column                         │
     │ ├─ Criterion Breakdown $\to$ Buzz Competency & Mastery Matrix                  │
     │ └─ Rich HTML Marginalia $\to$ Student Assessment Activity Feedback Tab         │
     └────────────────────────────────────────────────────────────────────────────────┘
```

### 1. Grounded Quote-Anchored Evidence Extraction

Generic AI grading assistants frequently suffer from "hallucinatory evaluation"—assigning a student a low score for "weak evidence" without citing where the weakness occurs, or praising "sophisticated syntax" based on generalized probability distributions.

Checkmark's autograder operates on a **grounded quote-anchored evidence model**:

*   **Syntax & Discourse Parsing:** The engine analyzes the submission’s structural architecture against the specific descriptors in the Buzz-linked rubric.
*   **Exact Evidence Extraction:** For every rubric criterion (e.g., *Textual Analysis & Supporting Evidence*), Checkmark extracts the exact sentence-level quotes from the student's essay that demonstrate mastery or reveal structural deficiencies.
*   **Grounded Feedback Cards:** In the evaluation sidebar, each criterion score is accompanied by an interactive evidence card displaying the exact excerpt, an explanation tied directly to the rubric benchmark, and a targeted formative coaching question.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                   SAMPLE CHECKMARK QUOTE-ANCHORED CRITERION CARD                         │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ Criterion: Contextual Evidence & Critical Analysis [Score: 3.5 / 4.0 (Proficient)]       │
│                                                                                          │
│ Anchored Student Excerpt (Paragraph 3, Lines 14–17):                                     │
│ "Fitzgerald's recurring green light functions not merely as Gatsby's longing for Daisy,   │
│  but as an indictment of the industrialized commodification of the American Dream."      │
│                                                                                          │
│ Evaluative Justification:                                                                │
│ Demonstrates advanced contextual interpretation connecting symbolic motif to overarching │
│ societal themes. Analysis exceeds basic plot summary.                                    │
│                                                                                          │
│ Suggested Formative Coaching Prompt for Revision:                                        │
│ "To achieve an Advanced (4.0) score, connect this thematic commodification directly to   │
│  the Valley of Ashes imagery introduced in Chapter 2."                                   │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

### 2. The Teacher Moderation Console: "Stop Guessing, Start Trusting"

Checkmark strictly rejects fully autonomous AI grading. In high-stakes educational environments, automated systems must serve as an assistant to the professional educator—never the final judge.

Within the **Teacher Moderation Console** embedded inside Buzz:

1.  **Pre-Calibrated Draft Suggestions:** The educator opens the student submission and sees Checkmark's suggested rubric selections and quote-anchored rationale highlighted across the interface.
2.  **Rapid Calibration:** If the teacher agrees with the analysis, they can accept the criterion marks with a single keystroke or click.
3.  **Granular Educator Overrides:** If the teacher disagrees with a suggested tier (for example, recognizing a creative rhetorical device that the AI marked as non-standard), the teacher simply clicks the desired rubric cell. The point totals recalculate instantly.
4.  **Custom Narrative Annotation:** Instructors can freely edit, append, or replace any AI-generated commentary before release.
5.  **Single-Click Passback Authorization:** No grades or comments enter the Buzz gradebook until the teacher explicitly clicks **"Authorize & Sync Gradebook"**.

### 3. Patent-Pending Essay Playback™ & Keystroke Dynamics

To eliminate the fear and mistrust surrounding generative AI, Checkmark provides what no generic detector can: **verifiable writing process telemetry**.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                   CHECKMARK ESSAY PLAYBACK™ TIMELINE SCRUBBER                            │
└──────────────────────────────────────────────────────────────────────────────────────────┘

  Session Duration: 1h 42m | Total Keystrokes: 4,812 | Active Writing Time: 1h 18m
  [00:00] ───|───────────────────|──────────────────────|──────────────|─── [01:42:00]
          Thesis Outline      Drafting Body P1       External Paste   Final Revision
          (Typing: 42 wpm)    (Typing: 38 wpm)       (412 chars)      (Deletions: 18%)
                                                     [JUMP TO REPLAY]
```

*   **Keystroke-by-Keystroke Video Replay:** Instructors can scrub through the entire writing session at 1x to 8x speed, watching the student brainstorm, pause to compose, backspace, rephrase, and restructure paragraphs in real time.
*   **External Paste Buffer Capture with 100% Text Preservation:** When text is pasted from an outside application, Checkmark immediately flags the event, records the exact timestamp, and **preserves the entire original pasted text block in a dedicated evidence card**—even if the student subsequently edits or rewrites every word. A "Jump to Replay" button transports the teacher directly to the moment of insertion.
*   **Transcription Detection:** Checkmark’s telemetry engine monitors typing velocity and burst cadence. If a student attempts to bypass paste detection by manually retyping text from a smartphone or second monitor, the system flags the anomalous lack of cognitive pauses and backspaces characteristic of manual transcription.
*   **Protection for Authentic Writers:** Keystroke dynamics provide conclusive, defensible proof to protect honest students from false AI accusations, demonstrating authentic human effort from the first character to the final submission.

### 4. Multi-Factor Academic Integrity Verification Triad

Checkmark integrates writing process analysis with advanced textual matching:

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                    THE CHECKMARK MULTI-FACTOR INTEGRITY TRIAD                            │
└──────────────────────────────────────────────────────────────────────────────────────────┘

                             ┌───────────────────────────────┐
                             │    Patent-Pending Essay       │
                             │        Playback™              │
                             │ • Keystroke Dynamics          │
                             │ • 100% Paste Text Capture     │
                             │ • Transcription Velocity      │
                             └───────────────┬───────────────┘
                                             │
                     ┌───────────────────────┴───────────────────────┐
                     ▼                                               ▼
      ┌─────────────────────────────┐                 ┌─────────────────────────────┐
      │ Passage-Level AI Analysis   │                 │ Side-by-Side Plagiarism     │
      │ • Calibrated Sliders        │                 │ • Billions of Web Sources   │
      │ • Sub-150-Word Guardrails   │                 │ • Peer-to-Peer Repository   │
      │ • Style Predictability      │                 │ • Uncited Source Coaching   │
      └─────────────────────────────┘                 └─────────────────────────────┘
```

*   **Passage-Level AI Confidence Sliders:** Rather than assigning a blanket percentage to the entire essay, Checkmark underlines specific suspicious sentences or paragraphs. Each flagged passage features an individual sidebar slider illustrating the stylistic probability distribution (typical human variance vs. typical AI predictability/burstiness).
*   **Honest Sub-150-Word Guardrails:** Recognizing that statistical language models produce high false-positive rates on short texts, Checkmark automatically displays `N/A` for short-answer responses under 150 words rather than guessing on insufficient sample sizes.
*   **Side-by-Side Plagiarism & Uncited Source Differentiation:** Checkmark scans live web indices, digital publications, and school repositories, rendering side-by-side quote comparisons with direct source links. Crucially, the system separates intentional verbatim copying from **uncited source usage**, allowing teachers to treat missing citation formatting as a formative coaching moment rather than academic fraud.

---

## Real-World District & Virtual Academy Case Studies

### Case Study 1: Statewide 25,000-Student Virtual Academy ELA Rollout

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ CASE STUDY 1: MOUNTAIN STATE VIRTUAL ACADEMY (MSVA)                                      │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ Profile: Statewide 6–12 Virtual Public Charter School | 25,000 Asynchronous Students     │
│ LMS Infrastructure: Agilix Buzz LMS (Multi-Domain Hierarchy with 140 Remote ELA Faculty) │
│ Challenge: 9.4-day average essay grading turnaround; severe pacing stalls in CBE tracks; │
│            high teacher burnout; surging student appeals over generic AI detector flags. │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Implementation Architecture
MSVA’s Instructional Technology Department integrated Checkmark via LTI 1.3 Advantage across 18 English Language Arts Course Masters in Buzz. Standardized 4-tier state writing rubrics were bound to Checkmark assignments via Deep Linking 2.0. AGS 2.0 LineItem endpoints were mapped directly to state competency performance standards in Buzz's domain master settings.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                   MSVA ESSAY GRADING WORKLOAD & LATENCY REDUCTION                        │
├──────────────────────────────────────┬─────────────────────────┬─────────────────────────┤
│ Operational Metric                   │ Pre-Implementation      │ With Checkmark LTI 1.3  │
├──────────────────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Average Grading Time per Essay       │ 23.4 minutes            │ 4.8 minutes             │
│ Turnaround Latency (Submission-Sync) │ 9.4 Business Days       │ 1.6 Business Days       │
│ Weekly Teacher Grading Hours         │ 18.5 hours / week       │ 4.2 hours / week        │
│ Mastery Objective Auto-Update Rate   │ 0% (Manual Transfer)    │ 100% (AGS 2.0 Direct)   │
│ False-Positive AI Academic Appeals   │ 42 appeals / month      │ 1 appeal / semester     │
│ Course Completion Rate on Schedule   │ 68.2%                   │ 89.4%                   │
└──────────────────────────────────────┴─────────────────────────┴─────────────────────────┘
```

#### Pedagogical Impact
*   **Elimination of Grading Chokepoints:** By providing instructors with quote-anchored draft evaluations and 1-click Buzz gradebook sync, grading turnaround plummeted by **83%** (from 9.4 days to 38 hours).
*   **Resolution of Integrity Disputes:** Remote teachers utilized Essay Playback™ during video conferences to review drafting sessions with students, completely eliminating contentious accusations and restoring trust in asynchronous learning.

---

### Case Study 2: Competency-Based High School District Writing Calibration

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ CASE STUDY 2: PRAIRIE VALLEY SCHOOL DISTRICT                                             │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ Profile: 12 Comprehensive High Schools | 16,000 Students | 68 ELA Teachers               │
│ LMS Infrastructure: Agilix Buzz LMS (Competency Mastery Grading Model)                   │
│ Challenge: Wide inter-rater grading variance between schools; teachers spending hours    │
│            manually keying rubric sub-scores into Buzz Competency tracking trees.        │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Calibration Protocol
Prairie Valley utilized Checkmark's Teacher Moderation Console to standardize scoring across 12 high school campuses. District curriculum coordinators configured a universal 10th-grade persuasive writing rubric in the Buzz Master Course.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                     INTER-RATER RELIABILITY (COHEN'S KAPPA κ)                            │
├──────────────────────────────────────┬─────────────────────────┬─────────────────────────┤
│ Rubric Assessment Category           │ Legacy Manual Grading   │ Checkmark Moderated     │
├──────────────────────────────────────┼─────────────────────────┼─────────────────────────┤
│ Thesis Clarity & Argument Structure  │ $\kappa = 0.54$ (Moderate)│ $\kappa = 0.88$ (Strong)│
│ Textual Evidence & Source Synthesis  │ $\kappa = 0.48$ (Weak)    │ $\kappa = 0.86$ (Strong)│
│ Rhetorical Organization & Cohesion   │ $\kappa = 0.51$ (Moderate)│ $\kappa = 0.84$ (Strong)│
│ Command of Conventions & Style       │ $\kappa = 0.62$ (Moderate)│ $\kappa = 0.91$ (Strong)│
└──────────────────────────────────────┴─────────────────────────┴─────────────────────────┘
```

#### Outcome
By anchoring evaluation criteria to exact textual evidence, inter-rater reliability across all 12 campuses improved from moderate/weak ($\kappa \approx 0.53$) to strong consensus ($\kappa \approx 0.87$). Teachers reclaimed an estimated 14 hours per essay cycle while Buzz’s Competency Matrix received instant, verified criterion data via AGS 2.0.

---

### Case Study 3: Online AP English Literature Cohort

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│ CASE STUDY 3: CONSORTIUM ADVANCED PLACEMENT VIRTUAL NETWORK                              │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ Profile: Regional Online Consortium | 850 AP Literature Students across 34 Rural Districts│
│ LMS Infrastructure: Agilix Buzz LMS                                                      │
│ Challenge: High-stakes 45-minute timed Free-Response Questions (FRQs); students falsely  │
│            flagged by generic AI detectors due to elevated vocabulary and formal syntax. │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

#### Investigation & Protection Workflow
In a high-stakes AP Literature poetry analysis prompt, a student’s sophisticated analysis of John Donne's holy sonnets was flagged at 84% probability by a commercial whole-paper AI detector.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                   AP LITERATURE AUTHENTICITY INVESTIGATION DOSSIER                       │
├──────────────────────────────────────────────────────────────────────────────────────────┤
│ Generic Whole-Paper AI Detector Score: 84% "Likely AI-Generated" (Opaque Flag)          │
│ Checkmark Multi-Factor Telemetry Analysis:                                               │
│ • Essay Playback™ Duration: 44 minutes 12 seconds of active drafting                     │
│ • Total Keystrokes Logged: 3,420 (Typing cadence: 34 WPM with natural pause distribution)│
│ • Clipboard Event Log: 1 external paste (124 characters - verified prompt poem quote)    │
│ • Revisions & Structural Changes: 142 word-level backspaces, 3 paragraph rearrangements  │
│ • Autograder Rubric Score (AP 6-Point Scale): 1-4-1 (Row A: 1/1, Row B: 4/4, Row C: 1/1)│
│ • Outcome: Full student exoneration; verified authentic literary composition.            │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

Using Checkmark’s Essay Playback™, the AP instructor verified that the student had typed the entire analysis live within the Buzz editor over 44 minutes, exhibiting natural cognitive composing pauses before formulating complex metaphorical claims. The student was immediately cleared without disciplinary disruption, and the rubric autograder generated an AP-aligned 6-point evaluation that synchronized directly to Buzz.

---

## 5-Step Administrator Configuration Guide: Deploying Checkmark in Buzz LMS

This step-by-step technical guide walks Instructional Technology Coordinators and Buzz Domain Administrators through deploying Checkmark Plagiarism using LTI 1.3 Advantage.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│               5-STEP LTI 1.3 CONFIGURATION WORKFLOW FOR BUZZ LMS                         │
└──────────────────────────────────────────────────────────────────────────────────────────┘

  [Step 1: Checkmark Console]  ──> Generate LTI 1.3 Client ID & Public JWKS Endpoints
  [Step 2: Buzz Domain Admin]  ──> Register Checkmark LTI 1.3 Tool & Authorize Scopes
  [Step 3: Master Course Setup]──> Embed Checkmark Activities via Deep Linking 2.0
  [Step 4: Gradebook Mapping]  ──> Bind AGS 2.0 LineItems to Buzz Competency Matrices
  [Step 5: End-to-End Audit]   ──> Validate OIDC Handshake, Playback, & Live Passback
```

---

### Step 1: Generate LTI 1.3 Registration Credentials in Checkmark Console

1.  Log in to the **Checkmark Administrator Portal** (`https://admin.checkmarkplagiarism.com`) using your district administrative credentials.
2.  Navigate to **Integrations $\to$ LMS Configurations $\to$ Add New LMS Connection**.
3.  Select **Agilix Buzz LMS** from the platform menu.
4.  Enter your **Buzz LMS Domain URL** (e.g., `https://yourdistrict.agilixbuzz.com`).
5.  The portal will generate and display your unique deployment parameters:
    *   **Platform Issuer (`iss`):** `https://agilixbuzz.com`
    *   **OIDC Auth Login URL:** `https://api.checkmarkplagiarism.com/lti13/oidc/login`
    *   **OIDC Target Launch URI:** `https://api.checkmarkplagiarism.com/lti13/launch`
    *   **Public Keyset (JWKS) URL:** `https://api.checkmarkplagiarism.com/lti13/.well-known/jwks.json`
    *   **Deep Linking Redirect URL:** `https://api.checkmarkplagiarism.com/lti13/deep-link`

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                      CHECKMARK LTI 1.3 CREDENTIALS SUMMARY                               │
├───────────────────────────────┬──────────────────────────────────────────────────────────┤
│ Configuration Parameter       │ Value Endpoint                                           │
├───────────────────────────────┼──────────────────────────────────────────────────────────┤
│ LTI Version                   │ 1.3.0 (Advantage)                                        │
│ Client ID                     │ `chk_lti_984f72a1b90c` (Generated)                       │
│ OIDC Initiation URL           │ `https://api.checkmarkplagiarism.com/lti13/oidc/login`     │
│ Launch Redirect URL           │ `https://api.checkmarkplagiarism.com/lti13/launch`         │
│ Public JWKS Endpoint          │ `https://api.checkmarkplagiarism.com/lti13/jwks.json`    │
│ Deep Linking Return URI       │ `https://api.checkmarkplagiarism.com/lti13/deep-link`     │
└───────────────────────────────┴──────────────────────────────────────────────────────────┘
```

---

### Step 2: Register Checkmark as an External Tool in Agilix Buzz Domain Administration

1.  Log in to your **Agilix Buzz Administrator Console** with Domain Administrator rights.
2.  In the left navigation sidebar, click **Domain Settings** (gear icon) and navigate to the **Integrations** tab.
3.  Select **LTI 1.3 / Advantage Providers** and click **+ Add Provider**.
4.  Populate the tool registration fields:
    *   **Application Name:** `Checkmark Plagiarism & AI Autograder`
    *   **Client ID:** Enter the Client ID generated in Step 1.
    *   **OIDC Login Initiation URL:** Paste the Checkmark OIDC Login URL.
    *   **Redirect URIs:** Add both the Launch URL and Deep Linking URL.
    *   **Public Key Management:** Select **Public Keyset URL (JWKS)** and paste Checkmark's JWKS URL.
5.  Enable all required LTI Advantage Service Scopes:
    *   `https://purl.imsglobal.org/spec/lti-ags/scope/lineitem` (Create & Manage LineItems)
    *   `https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly` (Read Results)
    *   `https://purl.imsglobal.org/spec/lti-ags/scope/score` (Publish Scores & Comments)
    *   `https://purl.imsglobal.org/spec/lti-nrps/scope/contextmembership.readonly` (Roster Synchronization)
6.  Click **Save Configuration**. Buzz will generate a unique **Deployment ID** (e.g., `buzz_dep_448201`). Copy this Deployment ID back into your Checkmark Admin Console to complete the pairing handshake.

---

### Step 3: Configure Deep Linking 2.0 & Course Master Templates in Buzz

To distribute Checkmark writing activities across your entire district without manual teacher setup:

1.  In Buzz, navigate to **Courses** and open your designated **District Master Course** (e.g., *Grade 11 American Literature - Master*).
2.  Click the **Editor** tab in the top navigation bar.
3.  Navigate to the target module or unit folder, click **+ Add Activity**, and select **Library / External Tool $\to$ Checkmark Plagiarism**.
4.  The Checkmark Deep Linking interface will launch inside the Buzz modal frame:
    *   Define the **Assignment Title** and **Writing Prompt Instructions**.
    *   Select or upload the **Analytic Rubric** (or sync an existing Buzz rubric).
    *   Configure integrity policies: Enable **Essay Playback™ telemetry**, set minimum word counts, and activate the **sub-150-word honest guardrail**.
    *   Set grade passback preferences: Toggle **"Require Teacher Moderation Approval Before Passback"** (recommended).
5.  Click **Save & Embed Assignment**.
6.  Checkmark transmits the signed LTI-DL content item payload to Buzz. Buzz automatically creates the graded activity item in the syllabus tree.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                   BUZZ COURSE MASTER DEEP LINKING INHERITANCE                            │
└──────────────────────────────────────────────────────────────────────────────────────────┘

  [Master Course Editor] ──> Embeds Checkmark Activity via Deep Linking 2.0
            │
            ├───── Inherited by Base Course 1 (Fall Semester) ──> Child Sections (Auto-Linked)
            │
            ├───── Inherited by Base Course 2 (Spring Semester) ─> Child Sections (Auto-Linked)
            │
            └───── Inherited by Virtual Asynchronous Cohorts ───> Child Sections (Auto-Linked)
```

---

### Step 4: Bind AGS 2.0 LineItems to Buzz Competencies and Grade Categories

1.  In the Buzz Course Editor, open the newly embedded Checkmark activity and click **Settings**.
2.  Under **Gradebook Settings**:
    *   Assign the activity to its designated **Grading Category** (e.g., *Major Essays - 40%*).
    *   Set the **Maximum Score / Points Possible** to match the total rubric points.
3.  Under **Competencies & Learning Objectives**:
    *   Click **+ Attach Objectives**.
    *   Select the target district standards (e.g., *CCSS.ELA-LITERACY.W.11-12.1 - Write arguments to support claims*).
    *   Map individual Checkmark rubric criteria (Thesis, Evidence, Synthesis, Conventions) directly to corresponding Buzz mastery sub-objectives.
4.  Click **Save**. Now, whenever a teacher approves an autograded essay in Checkmark, Buzz will simultaneously update the student's numerical gradebook and their longitudinal competency progression tracker.

---

### Step 5: Execute End-to-End Validation and Token Exchange Auditing

Before authorizing full district rollout, execute a pilot verification test using a dummy student account:

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                   PRE-FLIGHT VALIDATION CHECKLIST FOR COORDINATORS                       │
├──────────────────────────────────────────────────────────────────────┬───────────────────┤
│ Verification Check                                                   │ Status Confirmation│
├──────────────────────────────────────────────────────────────────────┼───────────────────┤
│ 1. OIDC Launch Handshake: Student launches assignment without error  │ [Pass / Verified] │
│ 2. Telemetry Capture: Keystroke log, replay, and paste capture active│ [Pass / Verified] │
│ 3. NRPS 2.0 Roster Sync: Student appears instantly in teacher roster │ [Pass / Verified] │
│ 4. Grounded Rubric Generation: Quote-anchored cards populate sidebar │ [Pass / Verified] │
│ 5. Teacher Moderation: Point override and comment edits functional   │ [Pass / Verified] │
│ 6. AGS 2.0 Grade Passback: Numeric score updates in Buzz Gradebook   │ [Pass / Verified] │
│ 7. Mastery Matrix Sync: Competency objective bars reflect rubric sub-scores│ [Pass / Verified] │
└──────────────────────────────────────────────────────────────────────┴───────────────────┘
```

1.  Log in to Buzz as a test student and access the Checkmark activity.
2.  Draft a short essay, type with natural pauses, and paste a single cited quote.
3.  Submit the essay.
4.  Log in as the teacher and open the submission inside the Buzz grading frame.
5.  Verify that **Essay Playback™** reconstructs the typing session, flags the pasted quote, and provides the complete paste buffer history.
6.  Review the quote-anchored rubric pre-scores. Adjust one criterion score and click **"Authorize & Sync Gradebook"**.
7.  Switch to the Buzz Gradebook view: confirm that the score, criterion breakdown, and feedback annotations appear immediately.

---

## Technical Data Schemas & Payload Specifications

For District IT Directors and Systems Engineers auditing data interchange, the following JSON payloads illustrate the standard communication structures between Agilix Buzz and Checkmark Plagiarism.

### Schema 1: Decoded LTI 1.3 OIDC Launch Claims JWT

```json
{
  "iss": "https://agilixbuzz.com",
  "sub": "buzz_usr_77192a0e",
  "aud": "chk_lti_984f72a1b90c",
  "exp": 1755562800,
  "iat": 1755559200,
  "nonce": "n-0b92f7c18a4d",
  "https://purl.imsglobal.org/spec/lti/claim/message_type": "LtiResourceLinkRequest",
  "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
  "https://purl.imsglobal.org/spec/lti/claim/deployment_id": "buzz_dep_448201",
  "https://purl.imsglobal.org/spec/lti/claim/target_link_uri": "https://api.checkmarkplagiarism.com/lti13/launch",
  "https://purl.imsglobal.org/spec/lti/claim/resource_link": {
    "id": "buzz_act_991823",
    "title": "Synthesis Essay: The Great Gatsby & Modern Wealth",
    "description": "Evaluate the American Dream motif using the provided 4-criterion rubric."
  },
  "https://purl.imsglobal.org/spec/lti/claim/roles": [
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Learner"
  ],
  "https://purl.imsglobal.org/spec/lti/claim/context": {
    "id": "buzz_crs_88301",
    "label": "ELA-11-ASYNC",
    "title": "Grade 11 American Literature - Virtual Cohort"
  },
  "https://purl.imsglobal.org/spec/lti-ags/claim/endpoint": {
    "scope": [
      "https://purl.imsglobal.org/spec/lti-ags/scope/lineitem",
      "https://purl.imsglobal.org/spec/lti-ags/scope/result.readonly",
      "https://purl.imsglobal.org/spec/lti-ags/scope/score"
    ],
    "lineitem": "https://agilixbuzz.com/api/lti/v2/courses/88301/lineitems/55021",
    "lineitems": "https://agilixbuzz.com/api/lti/v2/courses/88301/lineitems"
  },
  "https://purl.imsglobal.org/spec/lti-nrps/claim/namesroleservice": {
    "context_memberships_url": "https://agilixbuzz.com/api/lti/v2/courses/88301/memberships",
    "service_versions": ["2.0"]
  }
}
```

---

### Schema 2: Deep Linking 2.0 Content Item Selection Response

```json
{
  "type": "ltiResourceLink",
  "title": "Module 3 Argumentative Research Essay",
  "text": "Submit your research draft for automated rubric evaluation and integrity verification.",
  "url": "https://api.checkmarkplagiarism.com/lti13/launch",
  "lineItem": {
    "scoreMaximum": 100,
    "label": "Module 3 Argumentative Research Essay",
    "resourceId": "chk_assign_m3_research",
    "tag": "major_writing_assessment",
    "submissionReview": {
      "reviewableStatus": ["Completed", "Moderated"]
    }
  },
  "custom": {
    "rubric_id": "rubric_state_argumentative_v4",
    "playback_telemetry_enabled": "true",
    "min_word_count": "500",
    "guardrail_short_text": "true",
    "require_teacher_approval": "true"
  }
}
```

---

### Schema 3: LTI AGS 2.0 Score & Rubric Passback Payload

```json
{
  "timestamp": "2026-08-18T19:45:30.000Z",
  "scoreGiven": 92.5,
  "scoreMaximum": 100.0,
  "comment": "<h3>Evaluator Summary</h3><p>Excellent synthesis of primary historical sources and literary symbolism. Your contextual analysis in paragraph 3 showed remarkable depth.</p><h4>Rubric Breakdown</h4><ul><li><strong>Thesis & Claim Structure:</strong> 4.0/4.0 (Advanced)</li><li><strong>Textual Evidence & Grounding:</strong> 3.5/4.0 (Proficient)</li><li><strong>Rhetorical Organization:</strong> 4.0/4.0 (Advanced)</li><li><strong>Conventions & Mechanics:</strong> 3.75/4.0 (Advanced)</li></ul><p><em>Writing Telemetry Verified: Authentic drafting session logged via Checkmark Essay Playback™.</em></p>",
  "activityProgress": "Completed",
  "gradingProgress": "FullyGraded",
  "userId": "buzz_usr_77192a0e",
  "submission": {
    "startedAt": "2026-08-18T18:02:10.000Z",
    "submittedAt": "2026-08-18T19:20:45.000Z"
  }
}
```

---

## Enterprise Data Privacy, FERPA/COPPA Compliance & Zero-Retention Architecture

For District Technology Directors and Compliance Officers, integrating third-party AI technology requires uncompromising security safeguards. Checkmark Plagiarism is engineered from the ground up for strict educational data compliance.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                   CHECKMARK ZERO-DATA-RETENTION PRIVACY SHIELD                           │
└──────────────────────────────────────────────────────────────────────────────────────────┘

     ┌────────────────────────────────────────────────────────────────────────────────┐
     │ Incoming Student Prose & Keystroke Telemetry via Buzz LTI 1.3 Launch          │
     └───────────────────────────────────────┬────────────────────────────────────────┘
                                             │
                                             ▼
     ┌────────────────────────────────────────────────────────────────────────────────┐
     │ In-Memory Ephemeral Sandbox Processing (TLS 1.3 / AES-256 Cloud Enclave)       │
     │ ├─ Linguistic Perplexity & Burstiness Parsers (Stateless Inference)           │
     │ ├─ Abstract Syntax Tree Rubric Comparator (Zero Model Fine-Tuning)             │
     │ └─ Web Plagiarism Index Matcher (Zero-Index Permanent Ingestion)               │
     └───────────────────────────────────────┬────────────────────────────────────────┘
                                             │
                                             ▼
     ┌────────────────────────────────────────────────────────────────────────────────┐
     │ Authorized Grade Passback (AGS 2.0) $\to$ Agilix Buzz LMS Database            │
     └───────────────────────────────────────┬────────────────────────────────────────┘
                                             │
                                             ▼
     ┌────────────────────────────────────────────────────────────────────────────────┐
     │ Immediate Ephemeral Flush: Student Text Never Stored or Shared                 │
     │ Zero LLM Training Guarantee • FERPA/COPPA Compliant • Role-Based Redaction     │
     └────────────────────────────────────────────────────────────────────────────────┘
```

### 1. Strict Zero Model Training Guarantee
Under no circumstances is student prose or keystroke telemetry used to train, fine-tune, or calibrate public or proprietary commercial language models. Submissions are processed through stateless, ephemeral memory enclaves and discarded following report generation and teacher authorization.

### 2. FERPA & COPPA Statutory Compliance
*   **Family Educational Rights and Privacy Act (FERPA):** Checkmark acts as an authorized "School Official" under 34 CFR § 99.31(a)(1)(i), operating under direct district institutional control with legitimate educational interests.
*   **Children’s Online Privacy Protection Act (COPPA):** For students under 13 enrolled in middle school or elementary programs, Checkmark collects zero personally identifiable directory information (PII) beyond anonymized LTI user IDs passed by Buzz.
*   **Role-Based Data Partitioning:** Telemetry flags, plagiarism source links, and AI confidence sliders are restricted strictly to authorized educators and domain administrators. Students only see teacher-approved formative commentary and rubric marks.

### 3. Cryptographic Storage & Encryption Standards
All data exchanges between Buzz LMS and Checkmark utilize TLS 1.3 encryption in transit. Ephemeral database storage utilizes FIPS 140-2 validated AES-256 bit encryption at rest with automated lifecycle deletion policies.

---

## Comprehensive FAQ for Instructional Technology Coordinators & Buzz Administrators

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                       FREQUENTLY ASKED QUESTIONS (FAQ)                                   │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

### 1. How does Checkmark handle rolling continuous enrollment in Buzz without manual roster imports?
Checkmark utilizes **1EdTech Names and Role Provisioning Services (NRPS 2.0)**. Whenever an instructor opens an assignment dashboard within Buzz, Checkmark calls Buzz’s secure membership endpoint in real time. Newly enrolled students appear immediately in the section roster with full telemetry tracking, while dropped students are gracefully archived—requiring zero CSV imports or SIS sync scripts.

---

### 2. When a Master Course is updated in Buzz, do all derivative child sections automatically inherit new rubric criteria?
**Yes.** When you configure a Checkmark assignment inside a Buzz Master Course using **Deep Linking 2.0 (LTI-DL)**, the assignment metadata, rubric structure, and AGS endpoints are stored as inherited master objects. When child sections inherit the course structure, they reference the master configuration. If the district coordinator updates the rubric in the master template, all active child sections inherit the update for upcoming student submissions.

---

### 3. Can teachers override AI-drafted rubric scores before grades are synced to the Buzz Gradebook?
**Yes, absolutely.** Checkmark operates under a strict **Teacher-in-the-Loop** model. All AI-generated criterion scores, quote-anchored citations, and formative comments remain in a provisional draft state within the Teacher Moderation Console. Educators can click any rubric cell to adjust points, edit commentary, or reject suggestions entirely. No data is transmitted to Buzz via AGS 2.0 until the instructor clicks **"Authorize & Sync Gradebook"**.

---

### 4. What happens if a student writes their essay offline and pastes the complete text into Buzz?
Checkmark's **Essay Playback™** engine instantly detects full-document paste events. Rather than generating an arbitrary AI flag, Checkmark records the exact timestamp, logs the event as an external paste, and preserves 100% of the original pasted text in a dedicated evidence card. Instructors can inspect the paste history and prompt the student to provide earlier draft versions or discuss their writing process during a one-on-one conference.

---

### 5. How does the sub-150-word honest guardrail prevent false-positive AI flags in short-answer prompts?
Statistical language detection models exhibit severe reliability degradation on short text samples under 150 words due to limited syntactic variance. Rather than presenting misleading probability percentages, Checkmark automatically applies an **Honest Short-Text Guardrail**, displaying `N/A` for short-response passages while continuing to provide full web plagiarism scanning, quote-anchored rubric feedback, and keystroke playback.

---

### 6. Does Checkmark AGS 2.0 passback update Buzz Competencies and Mastery Tracking Matrices?
**Yes.** When configuring the Checkmark activity in Buzz, administrators or teachers can bind individual rubric criteria to specific **Buzz Learning Objectives / Competencies**. When Checkmark transmits the criterion breakdown via AGS 2.0, Buzz automatically maps the sub-scores to its mastery matrix, allowing district leaders to track standards progression across cohorts in real time.

---

### 7. What bandwidth or network requirements are necessary for Essay Playback™ telemetry?
Checkmark’s telemetry engine utilizes an ultra-lightweight differential compression algorithm. Keystroke vectors, pause durations, and revision deltas are bundled into micro-packets that transmit asynchronously in the background. A full two-hour writing session consumes **less than 180 KB of network bandwidth**, ensuring seamless performance on rural broadband, cellular hotspots, and managed 1:1 Chromebook networks.

---

## Conclusion & Strategic Implementation Checklist

Deploying automated rubric scoring and academic integrity verification within **Agilix Buzz LMS** represents a transformative leap for competency-based and virtual education. By replacing opaque black-box AI scores and manual gradebook transcription with **1EdTech LTI 1.3 Advantage**, **quote-anchored evidence extraction**, and **Essay Playback™**, districts can eliminate grading backlogs while fostering an environment of transparent, defensible academic trust.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│              DISTRICT COORDINATOR IMPLEMENTATION MILESTONE ROADMAP                       │
├──────────────┬─────────────────────────────────────────────┬─────────────────────────────┤
│ Phase        │ Key Strategic Milestone                     │ Target Completion           │
├──────────────┼─────────────────────────────────────────────┼─────────────────────────────┤
│ Phase 1      │ Register Checkmark LTI 1.3 in Buzz Domain   │ Day 1–2 (IT Admin Setup)    │
│ Phase 2      │ Deep Link Standard Rubrics in Master Courses│ Day 3–5 (Curriculum Team)   │
│ Phase 3      │ Bind AGS 2.0 LineItems to Buzz Competencies │ Day 6–7 (Instructional Tech)│
│ Phase 4      │ Pilot Pilot Section & Token Audit           │ Day 8–10 (Lead ELA Faculty) │
│ Phase 5      │ Full District / Virtual Academy Rollout     │ Day 14 (District-Wide)      │
└──────────────┴─────────────────────────────────────────────┴─────────────────────────────┘
```

By putting teachers in the loop and equipping them with transparent writing process evidence, Instructional Technology Coordinators can empower educators to **"Stop guessing, start trusting"**—unlocking scalable, personalized writing instruction across every Buzz-powered classroom.
