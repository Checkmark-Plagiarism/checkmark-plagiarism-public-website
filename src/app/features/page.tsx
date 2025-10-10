import { Metadata } from 'next';
// import Image from 'next/image';
import Link from 'next/link';
import Image from 'next/image';
import {
  Brain,
  Scan,
  GraduationCap,
  PenTool,
  Boxes,
  School,
  ChevronRight,
} from 'lucide-react';
import { LinkButton } from '@/components/ui/link';
import { CardContent } from '@/components/ui/card';
import FeatureHero from "@/sections/features/feature-hero";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'Features — Checkmark Plagiarism',
  description:
    'Everything teachers need in one place: AI detection, auto‑grading, plagiarism checks, Google Classroom™ and Canvas LMS integrations, and more.',
  openGraph: { images: ['https://public.checkmarkplagiarism.com/images/features/ai-detection.jpg'] },
};

const features = [
  {
    slug: '/features/ai-detection',
    title: 'AI Detection',
    blurb:
      'Behavior-aware analysis that flags likely AI-generated text using typing patterns and revision history—built for classrooms, not clickbait.',
    icon: Brain,
    tag: 'Integrity',
    image: '/images/home/test (12).png',
    // image: '/images/features/ai-detection.jpg',
    colors: {
      header: 'from-blue-600 via-blue-500 to-blue-100',
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
    image: '/images/home/test (13).jpg',
    // image: '/images/features/auto-grading.jpg',
    colors: {
      header: 'from-emerald-600 via-emerald-500 to-emerald-200',
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
    image: '/images/home/test (15).png',
    // image: '/images/features/plagiarism-detection.jpg',
    colors: {
      header: 'from-fuchsia-600 via-fuchsia-500 to-fuchsia-200',
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
    image: '/images/home/test (16).png',
    // image: '/images/features/google-classroom.jpg',
    colors: {
      header: 'from-amber-600 via-amber-500 to-amber-200',
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
    image: '/images/home/test (17).png',
    // image: '/images/features/canvas.jpg',
    colors: {
      header: 'from-rose-600 via-rose-500 to-rose-200',
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
    image: '/images/home/test (18).png',
    // image: '/images/features/integrations.jpg',
    colors: {
      header: 'from-cyan-600 via-cyan-500 to-cyan-200',
      ring: 'ring-cyan-300/60 dark:ring-cyan-900/50',
      accentText: 'text-cyan-700 dark:text-cyan-300',
      badge: 'bg-cyan-600/15',
    },
  },
];

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero */}
      <FeatureHero bgTint="bg-red-200" image="/images/home/test (11).jpg">
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
          <LinkButton href="#features" size="sm">Explore features</LinkButton>
          <LinkButton href="/pricing" size="sm" variant="outline">
            See pricing
          </LinkButton>
        </div>
      </FeatureHero>

      {/* Feature grid - now 3 per row */}
      <section id="features" className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f) => (
                <Link
                  key={f.slug}
                  href={f.slug}
                  className="group block h-full focus:outline-none rounded-xl"
                >
                  {/* the element that actually animates */}
                  <div
                    className={cn(
                      "h-full rounded-xl ring-1 overflow-hidden bg-background", // bg so shadow is visible
                      "transform-gpu will-change-transform transition-all duration-300 ease-out",
                      "hover:shadow-xl hover:scale-[1.03] focus-within:shadow-xl", // standard Tailwind shadows
                      f.colors.ring
                    )}
                  >
                    {/* Transparent header band with unique color */}
                    <CardHeaderGradient icon={f.icon} gradient={f.colors.header} image={f.image} title={f.title} />

                    <CardContent className="p-6 pt-4 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={cn(
                            "inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs transition-colors",
                            f.colors.badge,
                            f.colors.accentText
                          )}
                        >
                          <span className="h-2 w-2 rounded-full bg-current/60" />
                          <span>{f.tag}</span>
                        </div>

                        <ChevronRight
                          className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-0.5
                                     transition-all duration-200
                                     group-hover:opacity-100 group-hover:translate-x-0"
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">
                        {f.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">{f.blurb}</p>

                      <div
                        className={cn(
                          "mt-4 inline-flex items-center text-sm underline-offset-4 transition-[color,opacity,transform]",
                          f.colors.accentText,
                          "group-hover:underline"
                        )}
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </div>
                    </CardContent>
                  </div>
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
              <LinkButton href="/pricing">Get started</LinkButton>
              <LinkButton href="/contact" variant="outline">Talk to sales</LinkButton>
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
  image,
}: {
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  title?: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <div
      className={`relative -mx-6 mb-4 rounded-t-xl bg-gradient-to-br ${gradient}
                  grid grid-rows-[80px,1fr] h-48`} // top 80px for image, rest for text
    >
      {/* soft ring for definition */}
      <div className="relative row-start-1 row-end-2 overflow-hidden rounded-t-xl px-4">
        <div className="absolute inset-0 rounded-t-xl ring-1 ring-black/5 dark:ring-white/5" />

        {/* decorative glow */}
        <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-black/10 dark:bg-white/10 blur-2xl" />

        {/* feature image (TOP ROW ONLY) */}
        <Image
          src={image ?? ''}
          alt={title ?? "feature"}
          width={400}
          height={400}
          className="h-full w-full object-cover object-top"
          priority
        />
      </div>

      {/* text area (BOTTOM ROW) */}
      <div className="row-start-2 row-end-3 relative z-10 px-6 py-1 flex flex-col justify-end"></div>
    </div>
  );
}
