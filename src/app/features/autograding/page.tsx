import { Metadata } from "next";
import Link from "next/link";
import {
  PenTool,
  ListChecks,
  Ruler,
  Settings2,
  FileCheck2,
  ClipboardCheck,
  MessageSquareMore,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import { Card, CardContent } from "@/components/ui/card";
import FeatureHero from "@/sections/features/feature-hero";

export const metadata: Metadata = {
  title: "Auto-Grading — Checkmark Plagiarism",
  description:
    "Rubric-aligned scoring with transparent criteria so teachers can review, override, and give feedback—faster than ever.",
  openGraph: { images: [""] },
};

export default function AutoGradingPage() {
  return (
    <main>
      {/* Hero */}
      <FeatureHero bgTint="bg-emerald-500/5">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Auto-grading that keeps teachers in control
        </h1>
        <p className="mt-4 text-center max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Import or build rubrics, calibrate scoring, and return feedback in minutes. Every score
          is explainable, reviewable, and override-friendly—so students learn and teachers save time.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <LinkButton href="#process" size="sm">See how it works</LinkButton>
          <LinkButton href="/pricing" size="sm" variant="outline">
            Try it at your school
          </LinkButton>
        </div>
      </FeatureHero>

      {/* Why auto-grading with Checkmark */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              icon={Ruler}
              title="Rubric-true"
              text="Scores trace directly to your criteria and performance bands—no black box grading."
              accent="from-emerald-600/20 via-emerald-500/10"
            />
            <InfoCard
              icon={Settings2}
              title="Configurable"
              text="Weight categories, set thresholds, and lock criteria to your department standards."
              accent="from-blue-600/20 via-blue-500/10"
            />
            <InfoCard
              icon={MessageSquareMore}
              title="Feedback-first"
              text="Auto-comments and highlights speed you up; your voice and overrides are always respected."
              accent="from-fuchsia-600/20 via-fuchsia-500/10"
            />
          </div>
        </div>
      </section>

      {/* Process (multi-color steps) */}
      <section id="process" className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              From rubric to returned work—fast and fair
            </h2>
            <p className="mt-3 text-center text-muted-foreground">
              Purpose-built for writing: standards-aligned criteria, transparent rationales, and quick teacher review.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProcessStep
                k="01"
                title="Import or build your rubric"
                text="Start with a template or paste your rubric. Map performance levels and set category weights."
                icon={ListChecks}
                badge="Setup"
                color={{
                  header: "from-emerald-600/30 via-emerald-500/20 to-transparent",
                  ring: "ring-emerald-300/60 dark:ring-emerald-900/50",
                  chip: "bg-emerald-600/15 text-emerald-800 dark:text-emerald-200",
                }}
              />
              <ProcessStep
                k="02"
                title="Align criteria to evidence"
                text="We link rubric rows to signals like organization, development, style, citation, and mechanics."
                icon={Ruler}
                badge="Alignment"
                color={{
                  header: "from-blue-600/30 via-blue-500/20 to-transparent",
                  ring: "ring-blue-300/60 dark:ring-blue-900/50",
                  chip: "bg-blue-600/15 text-blue-800 dark:text-blue-200",
                }}
              />
              <ProcessStep
                k="03"
                title="Generate draft scores"
                text="Machine learning proposes level-by-level scores with highlighted passages and rationales."
                icon={PenTool}
                badge="Scoring"
                color={{
                  header: "from-fuchsia-600/30 via-fuchsia-500/20 to-transparent",
                  ring: "ring-fuchsia-300/60 dark:ring-fuchsia-900/50",
                  chip: "bg-fuchsia-600/15 text-fuchsia-800 dark:text-fuchsia-200",
                }}
              />
              <ProcessStep
                k="04"
                title="Review & override quickly"
                text="Adjust any category; comments and totals update instantly. Lock grades individually or in bulk."
                icon={FileCheck2}
                badge="Review"
                color={{
                  header: "from-amber-600/30 via-amber-500/20 to-transparent",
                  ring: "ring-amber-300/60 dark:ring-amber-900/50",
                  chip: "bg-amber-600/15 text-amber-800 dark:text-amber-200",
                }}
              />
              <ProcessStep
                k="05"
                title="Return feedback with context"
                text="Auto-comments prime the response; add your notes and resources. Students see why they scored what they did."
                icon={MessageSquareMore}
                badge="Feedback"
                color={{
                  header: "from-rose-600/30 via-rose-500/20 to-transparent",
                  ring: "ring-rose-300/60 dark:ring-rose-900/50",
                  chip: "bg-rose-600/15 text-rose-800 dark:text-rose-200",
                }}
              />
              <ProcessStep
                k="06"
                title="Track growth over time"
                text="Class and student dashboards reveal trends and standards mastery, guiding re-teaching and support."
                icon={BarChart3}
                badge="Insights"
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

      {/* What makes it different */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card className="ring-1 ring-emerald-300/50 dark:ring-emerald-900/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground">Transparent by design</h3>
                <p className="mt-2 text-muted-foreground">
                  Every suggested score includes a rationale tied to the rubric row and highlighted excerpts.
                  You decide when to accept, adjust, or override.
                </p>
                <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Explainable scores for each criterion</li>
                  <li>Category weights and thresholds you control</li>
                  <li>Bulk accept/override to save time</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="ring-1 ring-blue-300/50 dark:ring-blue-900/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground">Built for learning</h3>
                <p className="mt-2 text-muted-foreground">
                  Students see clear targets and how to improve. Feedback reinforces drafting, citing, and revising—
                  aligned with classroom standards.
                </p>
                <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Constructive comments and resources</li>
                  <li>Consistent expectations across sections</li>
                  <li>Growth insights by student and standard</li>
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
            <h2 className="text-3xl font-bold">Grade faster. Teach more.</h2>
            <p className="mt-2 text-muted-foreground">
              Bring auto-grading, AI detection, and plagiarism checks into the tools you already use.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <LinkButton href="/pricing">
                Get started <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
              <LinkButton href="/contact" variant="outline">Talk to sales</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- small components ---------- */

function InfoCard({
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
    <Card className={`overflow-hidden ring-1 ring-border`}>
      <div className={`h-2 bg-gradient-to-r ${accent} to-transparent`} />
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
            <PenTool className="h-5 w-5 text-foreground/80" />
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
