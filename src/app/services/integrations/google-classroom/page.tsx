import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  History,
  ShieldCheck,
  Users,
  GraduationCap,
  KeyRound,
  CheckCircle2,
  Lock,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  ServiceHero,
  Screenshot,
  IconFeature,
  NumberedStep,
  RelatedLink,
  ServiceCta,
} from "@/sections/services/shared";
import { IntegrationFaq } from "@/components/ui/integration-faq";

export const metadata: Metadata = {
  title: "Google Classroom Plagiarism Checker Integration | Checkmark",
  description:
    "Use Checkmark with Google Classroom to review plagiarism, AI-writing indicators, revision history, assignments, rubrics, and student submissions.",
  alternates: {
    canonical: "https://checkmarkplagiarism.com/services/integrations/google-classroom",
  },
  openGraph: {
    title: "Google Classroom Plagiarism Checker Integration | Checkmark",
    description:
      "Use Checkmark with Google Classroom to review plagiarism, AI-writing indicators, revision history, assignments, rubrics, and student submissions.",
    url: "https://checkmarkplagiarism.com/services/integrations/google-classroom",
    siteName: "Checkmark Plagiarism",
    images: [{ url: "/images/Google-Classroom-Logo-700x394.png", width: 700, height: 394 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Classroom Plagiarism Checker Integration | Checkmark",
    description:
      "Use Checkmark with Google Classroom to review plagiarism, AI-writing indicators, revision history, assignments, rubrics, and student submissions.",
    images: ["/images/Google-Classroom-Logo-700x394.png"],
  },
};

const faqs = [
  {
    question: "Does Google Classroom have a plagiarism checker?",
    answer:
      "Google Classroom offers limited native originality reports, but lacks comprehensive web-wide plagiarism detection, AI-writing indicators, and detailed keystroke playback. Checkmark integrates directly with Google Classroom to provide full similarity matching, AI detection, and revision history analysis inside your existing workflow.",
  },
  {
    question: "How does Checkmark work with Google Classroom?",
    answer:
      "Checkmark connects to Google Classroom via Google OAuth and the official Google Classroom Add-On. Once enabled, teachers can attach Checkmark to any assignment. When students turn in their work via Google Docs, Checkmark automatically analyzes text similarity and document revision history, allowing teachers to review complete integrity reports right inside Classroom.",
  },
  {
    question: "Can Checkmark analyze Google Docs revision history?",
    answer:
      "Yes. Checkmark inspects the complete version history of Google Docs attachments, analyzing typing cadences, copy-paste events, and session activity. This allows educators to verify authentic student writing and see how an essay was constructed over time.",
  },
  {
    question: "Can teachers check student essays for AI writing?",
    answer:
      "Yes. Checkmark evaluates student writing for AI-generated patterns and copy-paste anomalies. The report provides clear probability indicators alongside revision history signals, giving teachers evidence-backed insights rather than arbitrary percentage scores.",
  },
  {
    question: "Do students need a separate Checkmark account?",
    answer:
      "No. Students log in using their existing Google Workspace for Education accounts via Single Sign-On (SSO). They continue submitting assignments through Google Classroom without managing extra passwords or navigating away from their Google Drive ecosystem.",
  },
  {
    question: "Can grades be returned to Google Classroom?",
    answer:
      "Yes. Checkmark supports grade and rubric score synchronization back to the Google Classroom gradebook. Teachers can apply rubric scores, leave comments, and pass final grades directly to Classroom with a single click.",
  },
  {
    question: "Who installs the Google Classroom integration?",
    answer:
      "The integration can be installed domain-wide by a Google Workspace Administrator via the Google Workspace Marketplace, or authorized individually by course teachers using Google OAuth authentication.",
  },
  {
    question: "What permissions does Checkmark require?",
    answer:
      "Checkmark requests minimum necessary Google Classroom and Google Drive read/write permissions to sync class rosters, retrieve assignment attachments for analysis, and return grades and comments. All data transfers use encrypted TLS connections and adhere strictly to FERPA privacy standards.",
  },
];

export default function GoogleClassroomIntegrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://checkmarkplagiarism.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://checkmarkplagiarism.com/services",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Integrations",
            "item": "https://checkmarkplagiarism.com/services/integrations",
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Google Classroom",
            "item": "https://checkmarkplagiarism.com/services/integrations/google-classroom",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer,
          },
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-brand-900 border-b border-white/10 pt-24 pb-4">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="text-xs text-white/70">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services/integrations" className="hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium" aria-current="page">
                Google Classroom
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <ServiceHero
        title="Plagiarism and AI detection for Google Classroom"
        sub="Checkmark connects directly with Google Classroom to review text similarity, AI-writing indicators, Google Docs revision history, and student submissions—right inside your existing teacher workflow."
      >
        <LinkButton href="/demo" variant="hero">
          Request a Demo
        </LinkButton>
        <LinkButton href="/teacher-support/google-classroom-support" variant="outline-white">
          View Setup Guide
        </LinkButton>
        <LinkButton href="#how-it-works" variant="outline-white">
          See How It Works
        </LinkButton>
      </ServiceHero>

      {/* Interface Preview / Graphic */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl bg-white p-4 sm:p-6 border border-border shadow-soft">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-slate-50 flex items-center justify-center p-6">
                    <Image
                      src="/images/Google-Classroom-Logo-700x394.png"
                      alt="Google Classroom Plagiarism Checker Integration"
                      width={700}
                      height={394}
                      className="object-contain max-h-48 w-auto"
                      priority
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    <Sparkles className="h-3.5 w-3.5" /> Google Workspace Integration
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">
                    Native Google Docs &amp; Classroom workflow
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Teachers can enable Checkmark on any Google Classroom coursework with a single click. Rosters, student Google Docs attachments, and rubrics synchronize effortlessly.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Google Docs revision &amp; paste process analysis</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Automatic roster and assignment synchronization</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Google Single Sign-On (SSO) for teachers &amp; students</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Seamless integrity checks in Google Workspace for Education
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Checkmark integrates into Google Classroom to give educators actionable, evidence-backed insight into student writing while keeping every step inside Google&apos;s familiar environment.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <IconFeature
              icon={FileText}
              title="Access from Google Classroom"
              text="Teachers open similarity reports and AI assessments directly from the Google Classroom assignment grading panel."
              tone="amber"
            />
            <IconFeature
              icon={History}
              title="Google Docs Revision Analysis"
              text="Inspect complete Google Docs version histories to evaluate writing velocity, external paste events, and session duration."
              tone="blue"
            />
            <IconFeature
              icon={ShieldCheck}
              title="Plagiarism & AI Detection"
              text="Compare student submissions against web sources and peer files while identifying AI-generated writing indicators."
              tone="emerald"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              How the Google Classroom integration works
            </h2>
            <p className="mt-3 text-center text-muted-foreground">
              A simple 6-step workflow designed for teachers and school administrators.
            </p>

            <div className="mt-10 space-y-6">
              <NumberedStep
                n="1"
                title="Connect Checkmark to Google Classroom"
                text="Administrators deploy the Google Workspace Add-On or teachers authorize Checkmark with Google OAuth in seconds."
              />
              <NumberedStep
                n="2"
                title="Sync classes & coursework"
                text="Checkmark automatically imports your Google Classroom courses, active rosters, and assignment details."
              />
              <NumberedStep
                n="3"
                title="Students submit work as usual"
                text="Students work in Google Docs and attach their files directly to Google Classroom assignments."
              />
              <NumberedStep
                n="4"
                title="Checkmark analyzes submissions"
                text="Text similarity matches are flagged against millions of web pages, while document history records writing patterns."
              />
              <NumberedStep
                n="5"
                title="Teachers review the integrity report"
                text="Open side-by-side quote comparisons, uncited source highlights, and typing playback without leaving Classroom."
              />
              <NumberedStep
                n="6"
                title="Return grades and feedback"
                text="Apply rubric scores and post comments back to Google Classroom with automatic gradebook updates."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform-Specific Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                Features built specifically for Google Classroom
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Purpose-built tools that align with Google Workspace workflows and classroom management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Classroom Add-On Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Launch Checkmark reports directly within Google Classroom coursework without separate browser tabs or logins.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                    <History className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Google Docs Version Signals</h3>
                  <p className="text-sm text-muted-foreground">
                    Capture revision timelines, keystroke activity, and external paste events straight from Google Docs API metadata.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Roster &amp; Course Sync</h3>
                  <p className="text-sm text-muted-foreground">
                    Class rosters, student enrollments, and section updates stay synchronized dynamically as students join or switch classes.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Rubric &amp; Grade Sync</h3>
                  <p className="text-sm text-muted-foreground">
                    Convert Google Classroom rubrics into automated evaluation criteria and send calculated scores to the gradebook.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                    <KeyRound className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Google OAuth Single Sign-On</h3>
                  <p className="text-sm text-muted-foreground">
                    Zero new accounts for students to create or remember. Sign in with official district Google Workspace credentials.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                    <Lock className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Teacher Privacy Controls</h3>
                  <p className="text-sm text-muted-foreground">
                    Originality flags and AI breakdown metrics remain private to educators until reviewed and released to students.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Workflow */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Teacher Experience</span>
              <h2 className="text-3xl font-bold text-foreground">How teachers review work in Google Classroom</h2>
              <p className="text-muted-foreground leading-relaxed">
                When a student turns in a Google Doc, Checkmark generates an integrity tile next to the submission. Clicking the tile opens the comprehensive breakdown:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li><strong className="text-foreground">Side-by-side matches:</strong> View exact internet and student peer match passages.</li>
                <li><strong className="text-foreground">AI writing indicators:</strong> Examine writing pattern metrics with confidence ranges.</li>
                <li><strong className="text-foreground">Keystroke replay:</strong> Watch how the essay was composed over multiple revision sessions.</li>
                <li><strong className="text-foreground">One-click grade posting:</strong> Push scores directly to Google Classroom grading.</li>
              </ul>
              <div className="pt-2">
                <RelatedLink href="/teacher-support/google-classroom-support" label="Read the Google Classroom setup guide" />
              </div>
            </div>
            <Screenshot
              src="/images/services/report-plagiarism-view.png"
              alt="Checkmark plagiarism report displayed inside Google Classroom integration"
              width={2000}
              height={1312}
              caption="Checkmark plagiarism and revision report view for Google Classroom assignments."
            />
          </div>
        </div>
      </section>

      {/* Administrator and Setup Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-brand-900 text-white p-8 md:p-12 shadow-medium">
            <div className="flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-amber-300">
                  <Lock className="h-3.5 w-3.5" /> Admin &amp; IT Security
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Administrator &amp; Setup Information
                </h2>
                <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                  District administrators can deploy Checkmark across all Google Workspace schools via Google Workspace Marketplace domain-wide install, or individual teachers can authorize course access with OAuth 2.0.
                </p>
              </div>
              <LinkButton href="/teacher-support/google-classroom-support" variant="hero" className="shrink-0">
                Setup Guide <ExternalLink className="ml-2 h-4 w-4" />
              </LinkButton>
            </div>

            <div className="mt-8 border-t border-white/15 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm text-white/90">
              <div>
                <h4 className="font-semibold text-white mb-1">Authentication Method</h4>
                <p className="text-white/70 text-xs">Google OAuth 2.0 &amp; OpenID Connect Single Sign-On.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Required Permissions</h4>
                <p className="text-white/70 text-xs">Classroom courses, coursework, rosters (read) &amp; grades (write).</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Data Security &amp; FERPA</h4>
                <p className="text-white/70 text-xs">Fully FERPA compliant. Data encrypted in transit &amp; at rest; non-training policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">
              Why schools choose Checkmark for Google Classroom
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <IconFeature
                icon={CheckCircle2}
                title="Keeps review inside Google Classroom"
                text="Teachers never need to manage separate class lists or upload documents manually. Everything flows naturally."
                tone="brand"
              />
              <IconFeature
                icon={History}
                title="Evaluates revision history evidence"
                text="Go beyond simple percentage scores by analyzing Google Docs version history and copy-paste signals."
                tone="cyan"
              />
              <IconFeature
                icon={Users}
                title="Simplifies district implementation"
                text="Deploy domain-wide in 15 minutes with Google Workspace Marketplace administrative controls."
                tone="emerald"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <IntegrationFaq faqs={faqs} lmsName="Google Classroom" />

      {/* Final Call to Action */}
      <ServiceCta
        title="Bring Checkmark to Google Classroom"
        text="Start reviewing plagiarism, AI signals, and Google Docs revision history in your Google Classroom workflow today."
      />
    </main>
  );
}
