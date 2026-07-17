import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link";

/**
 * Shared building blocks for the /services pages. Every screenshot rendered
 * through <Screenshot> is a real capture of the product (the public example
 * report at teach.checkmarkplagiarism.com/example-report or the live demo),
 * so the marketing pages stay honest about what the app actually shows.
 */

export function Screenshot({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  ring = "ring-border",
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
  ring?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <Card className={`overflow-hidden p-0 ring-1 ${ring} shadow-medium`}>
        <CardContent className="p-0">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="w-full h-auto"
          />
        </CardContent>
      </Card>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function IconFeature({
  icon: Icon,
  title,
  text,
  accent = "from-brand-600/20 via-brand-500/10",
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  accent?: string;
}) {
  return (
    <Card className="overflow-hidden ring-1 ring-border h-full">
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

export function ServiceCta({
  title = "See it on your own students' work",
  text = "Checkmark is free for teachers to try — run a real assignment through it in minutes.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mt-2 text-muted-foreground">{text}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href="/demo">
              Try the live demo <ArrowRight className="ml-2 h-4 w-4" />
            </LinkButton>
            <LinkButton href="/pricing" variant="outline">
              See pricing
            </LinkButton>
            <LinkButton href="/contact" variant="outline">
              Talk to us
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
