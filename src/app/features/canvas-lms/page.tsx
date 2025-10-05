import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  PlugZap,
  Users2,
  ClipboardList,
  ScanText,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeatureHero from "@/sections/features/feature-hero";

export const metadata: Metadata = {
  title: "Canvas LMS — Checkmark Plagiarism",
  description:
    "Run AI detection, plagiarism checks, and auto-grading inside Canvas LMS. Sync rosters, assignments, and submissions in minutes.",
  openGraph: { images: [""] },
};

export default function CanvasLMSPage() {
  return (
    <main>
      {/* Hero */}
      <FeatureHero bgTint="bg-rose-200">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Canvas LMS integration that just works
        </h1>
        <p className="mt-4 text-center max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Connect Canvas in minutes. We sync rosters, assignments, and submissions so you can run AI
          detection, plagiarism checks, and auto-grading without changing your workflow.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="#how-it-works" className="inline-flex">
            <Button size="sm">See how it works</Button>
          </Link>
          <Link href="/pricing" className="inline-flex">
            <Button size="sm" variant="outline">
              Try it at your school
            </Button>
          </Link>
        </div>
      </FeatureHero>

      {/* Canvas visual + quick facts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Card className="overflow-hidden ring-1 ring-rose-300/60 dark:ring-rose-900/50">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted">
                  <Image
                    src="/images/Canvas_Bug_Color_RGB.png"
                    alt="Canvas LMS integration preview"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-semibold text-foreground">Built for Canvas courses</h2>
              <p className="mt-2 text-muted-foreground">
                Once connected, Checkmark Plagiarism runs where your teachers already work:
                assignments, SpeedGrader, and course-level overviews. Scoped, logged, and simple.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Fact icon={PlugZap} title="One-time connect" text="OAuth-based setup—no CSVs." />
                <Fact icon={Users2} title="Roster sync" text="Enrollments update automatically." />
                <Fact
                  icon={ClipboardList}
                  title="Assignment aware"
                  text="Choose what to check and when."
                />
                <Fact
                  icon={ShieldCheck}
                  title="Scoped access"
                  text="Only enabled courses & assignments."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">How the Canvas sync works</h2>
            <p className="mt-3 text-center text-muted-foreground">
              A clean, multi-step flow that keeps data scoped, secure, and actionable.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProcessStep
                k="01"
                title="Authorize securely"
                text="A Canvas admin or course teacher authorizes Checkmark via OAuth. Permissions are the minimum required."
                icon={PlugZap}
                badge="Setup"
                color={{
                  header: "from-rose-600/30 via-rose-500/20 to-transparent",
                  ring: "ring-rose-300/60 dark:ring-rose-900/50",
                  chip: "bg-rose-600/15 text-rose-800 dark:text-rose-200",
                }}
              />
              <ProcessStep
                k="02"
                title="Sync rosters & assignments"
                text="We pull sections, enrollments, and assignment metadata so you can choose what to check."
                icon={Users2}
                badge="Sync"
                color={{
                  header: "from-amber-600/30 via-amber-500/20 to-transparent",
                  ring: "ring-amber-300/60 dark:ring-amber-900/50",
                  chip: "bg-amber-600/15 text-amber-800 dark:text-amber-200",
                }}
              />
              <ProcessStep
                k="03"
                title="Analyze submissions"
                text="As work arrives, we run AI detection and plagiarism checks using revision signals and similarity."
                icon={ScanText}
                badge="Checks"
                color={{
                  header: "from-blue-600/30 via-blue-500/20 to-transparent",
                  ring: "ring-blue-300/60 dark:ring-blue-900/50",
                  chip: "bg-blue-600/15 text-blue-800 dark:text-blue-200",
                }}
              />
              <ProcessStep
                k="04"
                title="Review in context"
                text="Open transparent reports from Canvas—see highlights, rationales, and confidence ranges."
                icon={ShieldCheck}
                badge="Review"
                color={{
                  header: "from-emerald-600/30 via-emerald-500/20 to-transparent",
                  ring: "ring-emerald-300/60 dark:ring-emerald-900/50",
                  chip: "bg-emerald-600/15 text-emerald-800 dark:text-emerald-200",
                }}
              />
              <ProcessStep
                k="05"
                title="Grade faster"
                text="Use rubric-aligned auto-grading and comments; override anything instantly."
                icon={ClipboardList}
                badge="Grading"
                color={{
                  header: "from-fuchsia-600/30 via-fuchsia-500/20 to-transparent",
                  ring: "ring-fuchsia-300/60 dark:ring-fuchsia-900/50",
                  chip: "bg-fuchsia-600/15 text-fuchsia-800 dark:text-fuchsia-200",
                }}
              />
              <ProcessStep
                k="06"
                title="See trends"
                text="Course and section dashboards surface outliers and growth for targeted support."
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

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card className="ring-1 ring-rose-300/60 dark:ring-rose-900/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground">No new tabs, no new headaches</h3>
                <p className="mt-2 text-muted-foreground">
                  Teachers stay inside Canvas. Reports open alongside student work; grades and feedback
                  flow naturally with your existing assignments.
                </p>
                <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>One-click from Canvas to Checkmark report</li>
                  <li>Respect for course roles and permissions</li>
                  <li>Scoped to enabled assignments only</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="ring-1 ring-emerald-300/60 dark:ring-emerald-900/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground">Integrity with student growth</h3>
                <p className="mt-2 text-muted-foreground">
                  We prioritize revision-based evidence and clear explanations, so integrity checks
                  support learning and build confidence in authentic writing.
                </p>
                <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Revision signals over one-off text scans</li>
                  <li>Readable rationales & confidence ranges</li>
                  <li>Override controls with audit trail</li>
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
            <h2 className="text-3xl font-bold">Make Canvas your integrity hub</h2>
            <p className="mt-2 text-muted-foreground">
              Bring AI detection, plagiarism checks, and auto-grading into the Canvas workflow your teachers already love.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="/pricing">
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

function Fact({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 h-9 w-9 shrink-0 rounded-lg bg-muted flex items-center justify-center">
        <Icon className="h-5 w-5 text-foreground/80" />
      </div>
      <div>
        <div className="font-medium text-foreground">{title}</div>
        <div className="text-sm text-muted-foreground">{text}</div>
      </div>
    </div>
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
