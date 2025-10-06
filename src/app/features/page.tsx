import { Metadata } from 'next';
// import Image from 'next/image';
import Link from 'next/link';
import {
  Brain,
  Scan,
  GraduationCap,
  PenTool,
  Boxes,
  School,
  DollarSign,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FeatureHero from "@/sections/features/feature-hero";

export const metadata: Metadata = {
  title: 'Features — Checkmark Plagiarism',
  description:
    'Everything teachers need in one place: AI detection, auto‑grading, plagiarism checks, Google Classroom™ and Canvas LMS integrations, and more.',
  openGraph: { images: [''] },
};

const features = [
  {
    slug: '/features/ai-detection',
    title: 'AI Detection',
    blurb:
      'Behavior-aware analysis that flags likely AI-generated text using typing patterns and revision history—built for classrooms, not clickbait.',
    icon: Brain,
    tag: 'Integrity',
    colors: {
      header: 'from-blue-600/30 via-blue-500/25 to-transparent',
      ring: 'ring-blue-300/60 dark:ring-blue-900/50',
      accentText: 'text-blue-700 dark:text-blue-300',
      badge: 'bg-blue-600/15',
    },
  },
  {
    slug: '/features/autograding',
    title: 'Auto-Grading',
    blurb:
      'Rubric-aligned scoring with transparent criteria so teachers can review, override, and give feedback—faster than ever.',
    icon: PenTool,
    tag: 'Assessment',
    colors: {
      header: 'from-emerald-600/30 via-emerald-500/25 to-transparent',
      ring: 'ring-emerald-300/60 dark:ring-emerald-900/50',
      accentText: 'text-emerald-700 dark:text-emerald-300',
      badge: 'bg-emerald-600/15',
    },
  },
  {
    slug: '/features/plagiarism-detection',
    title: 'Plagiarism Detection',
    blurb:
      'Find copy-paste, paraphrasing, and transcription patterns with document history signals and web similarity checks.',
    icon: Scan,
    tag: 'Authenticity',
    colors: {
      header: 'from-fuchsia-600/30 via-fuchsia-500/25 to-transparent',
      ring: 'ring-fuchsia-300/60 dark:ring-fuchsia-900/50',
      accentText: 'text-fuchsia-700 dark:text-fuchsia-300',
      badge: 'bg-fuchsia-600/15',
    },
  },
  {
    slug: '/features/google-classroom',
    title: 'Google Classroom™',
    blurb:
      'Sync classes, assignments, and submissions automatically. Review results right where you already work.',
    icon: School,
    tag: 'Integrations',
    colors: {
      header: 'from-amber-600/30 via-amber-500/25 to-transparent',
      ring: 'ring-amber-300/60 dark:ring-amber-900/50',
      accentText: 'text-amber-700 dark:text-amber-300',
      badge: 'bg-amber-600/15',
    },
  },
  {
    slug: '/features/canvas-lms',
    title: 'Canvas LMS',
    blurb:
      'One-click setup with Canvas. Pull rosters, assignments, and submissions to run checks at scale.',
    icon: GraduationCap,
    tag: 'Integrations',
    colors: {
      header: 'from-rose-600/30 via-rose-500/25 to-transparent',
      ring: 'ring-rose-300/60 dark:ring-rose-900/50',
      accentText: 'text-rose-700 dark:text-rose-300',
      badge: 'bg-rose-600/15',
    },
  },
  {
    slug: '/features/integrations',
    title: 'More Integrations',
    blurb:
      'A growing ecosystem that plays nicely with your stack—SSO, exports, and admin controls included.',
    icon: Boxes,
    tag: 'Ecosystem',
    colors: {
      header: 'from-cyan-600/30 via-cyan-500/25 to-transparent',
      ring: 'ring-cyan-300/60 dark:ring-cyan-900/50',
      accentText: 'text-cyan-700 dark:text-cyan-300',
      badge: 'bg-cyan-600/15',
    },
  },
  {
    slug: '/pricing',
    title: 'Pricing',
    blurb:
      'Simple plans for classrooms and districts. No surprise fees. Discounts for schools and departments.',
    icon: DollarSign,
    tag: 'Plans',
    colors: {
      header: 'from-slate-600/30 via-slate-500/25 to-transparent',
      ring: 'ring-slate-300/60 dark:ring-slate-800/60',
      accentText: 'text-slate-700 dark:text-slate-300',
      badge: 'bg-slate-600/15',
    },
  },
];

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero */}
      <FeatureHero bgTint="bg-red-200">
        <h1
          id="features-hero"
          className="text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl"
        >
          Everything you need to<br/> protect academic integrity
        </h1>
        <p className="mt-4 max-w-full text-pretty text-lg text-gray-600 md:text-xl text-center">
          Checkmark Plagiarism brings AI detection, plagiarism checks, and auto-grading into the tools you already use—so teachers save time and students build real skills.
        </p>

        <div className="mt-6 justify-center flex flex-wrap gap-3">
          <Link href="#features" className="inline-flex">
            <Button size="sm">Explore features</Button>
          </Link>
          <Link href="/features/pricing" className="inline-flex">
            <Button size="sm" variant="outline">
              See pricing
            </Button>
          </Link>
        </div>
      </FeatureHero>

      {/* Feature grid - now 3 per row */}
      <section id="features" className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f) => (
                <Link key={f.slug} href={f.slug} className="group">
                  <Card className={`h-full overflow-hidden transition-all hover:shadow-medium hover:scale-105 transition-all ring-1 ${f.colors.ring}`}>
                    {/* Transparent header band with unique color */}
                    <CardHeaderGradient icon={f.icon} gradient={f.colors.header} />

                    <CardContent className="p-6 pt-4 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full ${f.colors.badge} ${f.colors.accentText} text-xs`}>
                          <span className="h-2 w-2 rounded-full bg-current/60" />
                          <span>{f.tag}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className={`text-lg font-semibold mb-2 group-hover:text-primary transition-colors`}>
                        {f.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {f.blurb}
                      </p>
                      <div className={`mt-4 inline-flex items-center text-sm ${f.colors.accentText} group-hover:underline underline-offset-4`}>
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Step
              k="01"
              title="Connect your LMS"
              text="Link Google Classroom™ or Canvas in minutes. We sync rosters, assignments, and submissions automatically."
            />
            <Step
              k="02"
              title="Run checks automatically"
              text="Kick off AI and plagiarism checks on submissions as they arrive, or scan existing work in bulk."
            />
            <Step
              k="03"
              title="Review, grade, and share"
              text="See transparent reports, apply rubric‑based grades, and return feedback without changing your workflow."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to try Checkmark?</h2>
            <p className="text-muted-foreground mb-6">
              Start with the features that matter most today—you can add the rest as your needs grow.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="/features/pricing">
                <Button>Get started</Button>
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

function Step({ k, title, text }: { k: string; title: string; text: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-6">
      <div className="text-xs text-muted-foreground">Step {k}</div>
      <h3 className="mt-1 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

// More spacious + title/subtitle + darker palette support
function CardHeaderGradient({
  icon: Icon,
  gradient,          // e.g. "from-blue-600/30 via-blue-500/25 to-transparent"
  title,
  subtitle,
}: {
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className={`relative -mx-6 -mt-6 mb-4 h-28 rounded-t-xl bg-gradient-to-br ${gradient}`}>
      {/* soft ring for definition */}
      <div className="absolute inset-0 rounded-t-xl ring-1 ring-black/5 dark:ring-white/5" />

      {/* decorative glow */}
      <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-black/10 dark:bg-white/10 blur-2xl" />

      {/* icon */}
      <div className="absolute right-10 top-10 opacity-40">
        <Icon className="h-6 w-6" />
      </div>

      {/* text area */}
      <div className="relative z-10 h-full px-6 py-4 flex flex-col justify-end">
        {title && <h4 className="text-sm font-semibold text-foreground/90">{title}</h4>}
        {subtitle && <p className="mt-0.5 text-xs text-foreground/70">{subtitle}</p>}
      </div>
    </div>
  );
}
