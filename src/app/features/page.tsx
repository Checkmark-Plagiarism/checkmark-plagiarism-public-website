import { Metadata } from 'next';
// import Image from 'next/image';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Brain,
  Scan,
  GraduationCap,
  PenTool,
  Boxes,
  School,
  ChevronRight,
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { LinkButton } from '@/components/ui/link';import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureHero from "@/sections/features/feature-hero";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'Features — Checkmark Plagiarism',
  description:
    'Everything teachers need in one place: AI detection, auto‑grading, plagiarism checks, Google Classroom™ and Canvas LMS integrations, and more.',
  openGraph: { images: ['https://public.checkmarkplagiarism.com/images/features/ai-detection.jpg'] },
};

const mainFeatures = [
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
      {/* Hero Section */}
      <section className="py-32 px-4 bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent"></div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30">
            Powerful Features
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-primary-foreground">
            Comprehensive Academic Integrity Tools
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Everything you need to maintain academic integrity, streamline grading, and enhance your teaching workflow.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Click any feature to learn more about how it works
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mainFeatures.map((feature, index) => (
              <Link key={index} href={feature.slug}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:border-primary hover:-translate-y-1 group cursor-pointer overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur">
                  {/* Hero Image Placeholder */}
                  <div className="relative h-56 bg-gradient-to-br from-primary/30 via-primary/10 to-primary/5 flex items-center justify-center overflow-hidden group-hover:from-primary/40 group-hover:via-primary/15 transition-all duration-300">
                    <Image
                      src={feature.image}
                      height="500"
                      width="600"
                      alt={feature.title}
                      className="contain"
                    />
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl flex items-center justify-between group-hover:text-primary transition-colors">
                      {feature.title}
                      <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-8">
                    <CardDescription className="text-base leading-relaxed">{feature.blurb}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon / Placeholder Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Features
            </h2>
            <p className="text-lg text-muted-foreground">
              More tools coming soon to enhance your teaching experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards for future features */}
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle className="text-lg text-muted-foreground">Student Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Coming Soon</CardDescription>
              </CardContent>
            </Card>
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle className="text-lg text-muted-foreground">Citation Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Coming Soon</CardDescription>
              </CardContent>
            </Card>
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle className="text-lg text-muted-foreground">Peer Review Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Coming Soon</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of educators and content creators using our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border border-input rounded-lg font-semibold hover:bg-accent transition-colors">
              View Pricing
            </button>
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
