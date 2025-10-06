import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Scan,
  FileSearch,
  Link2,
  Quote,
  Highlighter,
  Globe,
  ShieldCheck,
  BarChart3,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeatureHero from "@/sections/features/feature-hero";

export const metadata: Metadata = {
  title: "Plagiarism Detection — Checkmark Plagiarism",
  description:
    "Catch copy-paste, paraphrasing, and transcription with revision-history signals, web similarity checks, and clear reports built for classrooms.",
  openGraph: { images: [""] },
};

export default function PlagiarismDetectionPage() {
  return (
    <main>
      {/* Hero */}
      <FeatureHero bgTint="bg-fuchsia-200">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Plagiarism detection that understands how writing is made
        </h1>
        <p className="mt-4 text-center max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          We combine document revision history with web similarity analysis to distinguish authentic drafting
          from copy-paste, paraphrasing, and transcription—so teachers get clarity and students build confidence.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="#how-it-works" className="inline-flex">
            <Button size="sm">See how it works</Button>
          </Link>
          <Link href="/features/pricing" className="inline-flex">
            <Button size="sm" variant="outline">
              Try it at your school
            </Button>
          </Link>
        </div>
      </FeatureHero>

      {/* Highlights */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">
            <Highlight
              icon={FileSearch}
              title="Web similarity"
              text="Find likely sources across the web and surface side-by-side matches with links."
              accent="from-fuchsia-600/20 via-fuchsia-500/10"
            />
            <Highlight
              icon={Highlighter}
              title="Paraphrase & transcription"
              text="Spot near-matches, lifted structures, and dictation/transcription patterns."
              accent="from-amber-600/20 via-amber-500/10"
            />
            <Highlight
              icon={ShieldCheck}
              title="Revision-aware"
              text="Edits, timing, and drafting flow help confirm authentic effort versus pasted chunks."
              accent="from-blue-600/20 via-blue-500/10"
            />
          </div>
        </div>
      </section>

      {/* Visual + blurb */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Card className="overflow-hidden ring-1 ring-fuchsia-300/60 dark:ring-fuchsia-900/50">
              <CardContent className="p-0">
                {/* 🔁 Replace with a real report screenshot when ready */}
                <div className="relative aspect-video bg-muted">
                  <Image
                    src="/images/features/plagiarism-report-placeholder.png"
                    alt="Plagiarism report preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-semibold text-foreground">Clear, actionable reports</h2>
              <p className="mt-2 text-muted-foreground">
                See matched passages highlighted in context, with links to likely sources, paraphrase indicators,
                and revision-history cues. Confidence ranges and rationales keep conversations fair and constructive.
              </p>
              <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Side-by-side excerpts and percent-match summaries</li>
                <li>Paraphrase/transcription flags with structural cues</li>
                <li>Revision timeline overlays for paste events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">How our detection works</h2>
            <p className="mt-3 text-center text-muted-foreground">
              Multi-signal analysis that respects learning, backed by transparent evidence.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProcessStep
                k="01"
                title="Ingest with scope"
                text="Teachers enable checks per class/assignment. Access is scoped and logged."
                icon={ShieldCheck}
                badge="Setup"
                color={{
                  header: "from-fuchsia-600/30 via-fuchsia-500/20 to-transparent",
                  ring: "ring-fuchsia-300/60 dark:ring-fuchsia-900/50",
                  chip: "bg-fuchsia-600/15 text-fuchsia-800 dark:text-fuchsia-200",
                }}
              />
              <ProcessStep
                k="02"
                title="Revision-history signals"
                text="We read edit timelines, paste events, and cadence to differentiate drafting vs. sudden insertions."
                icon={ClipboardList}
                badge="Evidence"
                color={{
                  header: "from-amber-600/30 via-amber-500/20 to-transparent",
                  ring: "ring-amber-300/60 dark:ring-amber-900/50",
                  chip: "bg-amber-600/15 text-amber-800 dark:text-amber-200",
                }}
              />
              <ProcessStep
                k="03"
                title="Web & source matching"
                text="Similarity checks surface likely sources with overlap percentages and side-by-side excerpts."
                icon={Globe}
                badge="Similarity"
                color={{
                  header: "from-blue-600/30 via-blue-500/20 to-transparent",
                  ring: "ring-blue-300/60 dark:ring-blue-900/50",
                  chip: "bg-blue-600/15 text-blue-800 dark:text-blue-200",
                }}
              />
              <ProcessStep
                k="04"
                title="Paraphrase & structure"
                text="We detect lifted syntax and meaning-preserving rewrites, even when exact words change."
                icon={Quote}
                badge="Paraphrase"
                color={{
                  header: "from-emerald-600/30 via-emerald-500/20 to-transparent",
                  ring: "ring-emerald-300/60 dark:ring-emerald-900/50",
                  chip: "bg-emerald-600/15 text-emerald-800 dark:text-emerald-200",
                }}
              />
              <ProcessStep
                k="05"
                title="Transcription cues"
                text="Timing and input patterns help differentiate original typing from dictated or pasted content."
                icon={Link2}
                badge="Behavior"
                color={{
                  header: "from-rose-600/30 via-rose-500/20 to-transparent",
                  ring: "ring-rose-300/60 dark:ring-rose-900/50",
                  chip: "bg-rose-600/15 text-rose-800 dark:text-rose-200",
                }}
              />
              <ProcessStep
                k="06"
                title="Explainable report"
                text="Highlighting, rationales, and confidence ranges make it easy to review, discuss, and resolve."
                icon={Scan}
                badge="Review"
                color={{
                  header: "from-cyan-600/30 via-cyan-500/20 to-transparent",
                  ring: "ring-cyan-300/60 dark:ring-cyan-900/50",
                  chip: "bg-cyan-600/15 text-cyan-800 dark:text-cyan-200",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card className="ring-1 ring-fuchsia-300/60 dark:ring-fuchsia-900/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground">Fair to students</h3>
                <p className="mt-2 text-muted-foreground">
                  Evidence emphasizes how work evolved, not just final text. That means fewer false alarms and
                  clearer coaching moments.
                </p>
                <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Revision-aware scoring of risk</li>
                  <li>Readable explanations instead of red flags</li>
                  <li>Supports instruction on citation & synthesis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="ring-1 ring-blue-300/60 dark:ring-blue-900/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground">Useful for teachers</h3>
                <p className="mt-2 text-muted-foreground">
                  Drill into exact overlaps, linked sources, and paste events. Override with notes and keep the audit trail.
                </p>
                <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Side-by-side source comparisons</li>
                  <li>Confidence ranges & rationales</li>
                  <li>Class and school-level trends</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold">Protect integrity. Support growth.</h2>
            <p className="mt-2 text-muted-foreground">
              Bring plagiarism checks, AI detection, and auto-grading into the tools you already use.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="/features/pricing">
                <Button>
                  Get started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Talk to sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- small components ---------- */

function Highlight({
  icon: Icon,
  title,
  text,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  accent: string; // tailwind gradient
}) {
  return (
    <Card className="overflow-hidden ring-1 ring-border">
      <div className={`h-2 bg-gradient-to-r ${accent} to-transparent`} />
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
            <FileSearch className="h-5 w-5 text-foreground/80" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}

function ProcessStep({
  k,
  title,
  text,
  icon: Icon,
  badge,
  color,
}: {
  k: string;
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  color: { header: string; ring: string; chip: string };
}) {
  return (
    <Card className={`h-full overflow-hidden ring-1 ${color.ring}`}>
      <div className={`relative h-24 bg-gradient-to-br ${color.header}`}>
        <div className="absolute right-4 top-4 opacity-40">
          <Icon className="h-6 w-6" />
        </div>
        <div className="absolute left-4 top-4">
          <span className="text-xs px-2 py-1 rounded-full bg-background/60 backdrop-blur-sm ring-1 ring-border">
            Step {k}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <div className={`inline-flex items-center gap-2 rounded-full px-2 py-1 text-xs ${color.chip}`}>
          {badge}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}
