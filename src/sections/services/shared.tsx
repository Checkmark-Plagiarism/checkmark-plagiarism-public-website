import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Shared building blocks for the /services pages, styled to match the rest of
 * the site: solid brand-900 heroes (like Pricing and the Support pages) and
 * solid rounded-corner tinted boxes (like the homepage feature cards) — no
 * gradient washes or gradient card tops.
 *
 * Every screenshot rendered through <Screenshot> is a real capture of the
 * product (the public example report at
 * teach.checkmarkplagiarism.com/example-report or the live demo), so the
 * marketing pages stay honest about what the app actually shows.
 */

/** Solid pastel tones for feature boxes, mirroring the homepage palette.
 *  Boxes use the -100 shade (one step darker than -50) so they read against
 *  light-gray section backgrounds instead of blending in. */
const TONES = {
  blue: { box: "bg-blue-100", chip: "bg-blue-600" },
  sky: { box: "bg-sky-100", chip: "bg-sky-600" },
  amber: { box: "bg-amber-100", chip: "bg-amber-500" },
  emerald: { box: "bg-emerald-100", chip: "bg-emerald-600" },
  purple: { box: "bg-purple-100", chip: "bg-purple-600" },
  fuchsia: { box: "bg-fuchsia-100", chip: "bg-fuchsia-600" },
  rose: { box: "bg-rose-100", chip: "bg-rose-500" },
  cyan: { box: "bg-cyan-100", chip: "bg-cyan-600" },
  brand: { box: "bg-brand-100", chip: "bg-brand-600" },
} as const;

export type Tone = keyof typeof TONES;

export function toneClasses(tone: Tone) {
  return TONES[tone];
}

/** Solid dark hero, matching the Pricing / Support page pattern. */
export function ServiceHero({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="text-center bg-brand-900 pt-32 pb-16 relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto text-balance">
          {title}
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto px-4">{sub}</p>
        {children && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div>
        )}
      </div>
    </section>
  );
}

export function Screenshot({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Solid rounded tinted box with an icon chip — the homepage card idiom. */
export function IconFeature({
  icon: Icon,
  title,
  text,
  tone = "brand",
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  tone?: Tone;
}) {
  const t = TONES[tone];
  return (
    <div className={`h-full rounded-3xl p-6 ${t.box}`}>
      <div className="flex items-center gap-3">
        <div className={`h-11 w-11 rounded-lg ${t.chip} flex items-center justify-center flex-shrink-0`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/70">{text}</p>
    </div>
  );
}

export function NumberedStep({
  n,
  title,
  text,
}: {
  n: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold">
        {n}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

/** Cross-link chip to a related support guide or article. */
export function RelatedLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-brand-400 hover:text-brand-700 transition-smooth"
    >
      {label}
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
}

/** Bottom CTA — the solid brand-900 card used at the foot of support pages. */
export function ServiceCta({
  title = "See it on your own students' work",
  text = "Checkmark is free for teachers to try — run a real assignment through it in minutes.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <Card className="shadow-soft bg-brand-900 border-0">
            <CardHeader>
              <div className="text-center">
                <CardTitle className="text-2xl text-white">{title}</CardTitle>
                <CardDescription className="text-white/90 mt-2">{text}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <LinkButton href="/demo" variant="hero">
                  Try the live demo <ArrowRight className="ml-2 h-4 w-4" />
                </LinkButton>
                <LinkButton href="/pricing" variant="outline-white">
                  See pricing
                </LinkButton>
                <LinkButton href="/contact" variant="outline-white">
                  Talk to us
                </LinkButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
