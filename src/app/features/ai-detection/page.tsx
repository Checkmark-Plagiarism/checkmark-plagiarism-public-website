// app/features/ai-detection/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, History, ScanText, Fingerprint, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeatureHero from "@/sections/features/feature-hero";

export const metadata: Metadata = {
  title: "AI Detection — Checkmark Plagiarism",
  description:
    "How Checkmark Plagiarism detects likely AI-generated text using document revision history and machine learning—giving students confidence and teachers protection.",
  openGraph: { images: [""] },
};

export default function AIDetectionPage() {
  return (
    <main>
      {/* Hero */}
      <FeatureHero bgTint="bg-blue-200">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          AI Detection built for real classrooms
        </h1>
        <p className="mt-4 text-center max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          We analyze <span className="font-semibold text-foreground">how</span> work was written—not just what it says.
          By combining revision history with machine learning, we flag likely AI use while boosting student confidence
          in authentic writing.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="#process" className="inline-flex">
            <Button size="sm">See the process</Button>
          </Link>
          <Link href="/features/pricing" className="inline-flex">
            <Button size="sm" variant="outline">
              Try it at your school
            </Button>
          </Link>
        </div>
      </FeatureHero>

      {/* Value props */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              icon={ShieldCheck}
              title="Fair & Transparent"
              text="Reports show what signals were used—so teachers can review, explain, and appeal with context."
              accent="from-blue-600/20 via-blue-500/10"
            />
            <InfoCard
              icon={Fingerprint}
              title="Authenticity First"
              text="Patterns from real drafting—typing cadence, edits, and revisions—support students’ own voice."
              accent="from-emerald-600/20 via-emerald-500/10"
            />
            <InfoCard
              icon={BarChart3}
              title="Actionable at Scale"
              text="Classroom and district views surface outliers so you can focus support where it matters."
              accent="from-fuchsia-600/20 via-fuchsia-500/10"
            />
          </div>
        </div>
      </section>

      {/* Process (multi-color steps) */}
      <section id="process" className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">How our AI detection works</h2>
            <p className="mt-3 text-center text-muted-foreground">
              Multi-signal analysis designed for learning—rooted in revision history and classroom reality.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProcessStep
                k="01"
                title="Secure document intake"
                text="We ingest the assignment only when the teacher enables Checkmark. Access is scoped and logged."
                icon={ShieldCheck}
                badge="Setup"
                color={{
                  header: "from-blue-600/30 via-blue-500/20 to-transparent",
                  ring: "ring-blue-300/60 dark:ring-blue-900/50",
                  chip: "bg-blue-600/15 text-blue-800 dark:text-blue-200",
                }}
              />
              <ProcessStep
                k="02"
                title="Revision history signals"
                text="We examine edits, drafting order, and iteration cadence from the document’s revision history."
                icon={History}
                badge="Evidence"
                color={{
                  header: "from-amber-600/30 via-amber-500/20 to-transparent",
                  ring: "ring-amber-300/60 dark:ring-amber-900/50",
                  chip: "bg-amber-600/15 text-amber-800 dark:text-amber-200",
                }}
              />
              <ProcessStep
                k="03"
                title="Behavior-aware modeling"
                text="Machine learning considers human-like drafting patterns versus sudden, copy-pasted blocks."
                icon={ScanText}
                badge="Analysis"
                color={{
                  header: "from-emerald-600/30 via-emerald-500/20 to-transparent",
                  ring: "ring-emerald-300/60 dark:ring-emerald-900/50",
                  chip: "bg-emerald-600/15 text-emerald-800 dark:text-emerald-200",
                }}
              />
              <ProcessStep
                k="04"
                title="Confidence & explanations"
                text="Clear highlights, rationales, and confidence ranges help teachers review and coach with context."
                icon={CheckCircle2}
                badge="Review"
                color={{
                  header: "from-fuchsia-600/30 via-fuchsia-500/20 to-transparent",
                  ring: "ring-fuchsia-300/60 dark:ring-fuchsia-900/50",
                  chip: "bg-fuchsia-600/15 text-fuchsia-800 dark:text-fuchsia-200",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student-first philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <Card className="ring-1 ring-emerald-300/50 dark:ring-emerald-900/40">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">Confidence for students</h3>
                  <p className="mt-2 text-muted-foreground">
                    We emphasize authentic effort. When a draft shows steady iteration and self-editing,
                    reports reflect that—encouraging growth instead of fear of false flags.
                  </p>
                  <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Signals that reward revision and feedback cycles</li>
                    <li>Language that explains findings, not accuses</li>
                    <li>Privacy-first processing and scoped access</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="ring-1 ring-blue-300/50 dark:ring-blue-900/40">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">Clarity for teachers</h3>
                  <p className="mt-2 text-muted-foreground">
                    Detailed context—where, when, and how a draft changed—helps teachers discuss integrity
                    while keeping learning at the center.
                  </p>
                  <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Transparent rationale and confidence ranges</li>
                    <li>Drill-down to revision events and content blocks</li>
                    <li>Class and district trends to target support</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Assurances */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center">Privacy & fairness by design</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <FAQItem
                q="Do you train models on student work?"
                a="No. We do not use student submissions to train general models. Signals are computed for integrity detection and reporting only."
              />
              <FAQItem
                q="What about false positives?"
                a="Our approach prioritizes revision-based evidence and provides explanations. Teachers can review and override with full context."
              />
              <FAQItem
                q="Which platforms are supported?"
                a="Google Classroom™ and Canvas LMS, with more integrations on the way. Setup is quick and scoped to enabled assignments."
              />
              <FAQItem
                q="How do students benefit?"
                a="Students see that drafting, revising, and citing sources are recognized as authentic effort—building confidence in their own voice."
              />
            </div>

            <div className="mt-10 flex justify-center">
              <Link href="/privacy-policy">
                <Button variant="outline">Read our Privacy Policy</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold">Protect integrity. Grow confidence.</h2>
            <p className="mt-2 text-muted-foreground">
              Bring AI detection, plagiarism checks, and auto-grading into the tools you already use.
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
            <Icon className="h-5 w-5 text-foreground/80" />
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

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <h4 className="font-medium text-foreground">{q}</h4>
      <p className="mt-2 text-sm text-muted-foreground">{a}</p>
    </div>
  );
}
