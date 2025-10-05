"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn as _cn } from "@/lib/utils"; // optional helper
// Fallback if you don't have a cn helper:
const cn = _cn ?? ((...a: any[]) => a.filter(Boolean).join(" "));

type FeatureHeroProps = {
  title: string;
  subtitle: string;
  className?: string;
  /**
   * Background tint overlay.
   * Accepts Tailwind classes (e.g. "bg-slate-900/10") OR a raw CSS color string.
   * Examples:
   *  - bgTint="bg-blue-500/10"
   *  - bgTint="rgba(2,6,23,0.08)" (raw color)
   */
  bgTint?: string;
};

export default function FeatureHero({
  title,
  subtitle,
  className,
  bgTint = "bg-blue-300",
  children,
}: FeatureHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border py-16 md:py-20",
        className
      )}
      aria-labelledby="features-hero"
    >
      {/* BACKGROUND LAYER: animated orbs with configurable tint */}
      <BackgroundOrbs bgTint={bgTint} />

      {/* GLASS CARD */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="relative mx-auto rounded-2xl bg-background/40 backdrop-blur-md ring-1 ring-foreground/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)]">
            {/* subtle top gradient sheen */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent dark:from-white/5" />

            <div className="relative z-10 p-6 md:p-10">
              {children}
            </div>

            {/* soft bottom vignette */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/5 to-transparent dark:from-black/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * BackgroundOrbs
 * - Accepts bgTint (Tailwind class or raw CSS color) for the tint overlay
 * - Bigger, livelier motion with rotation + scale
 * - Honors prefers-reduced-motion
 */
function BackgroundOrbs({ bgTint }: { bgTint: string }) {
  const isTailwindClass = bgTint.includes("bg-") || bgTint.includes("/");
  return (
    <>
      {/* TINT OVERLAY (class or raw color) */}
      {isTailwindClass ? (
        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            bgTint // e.g. "bg-blue-500/10"
          )}
        />
      ) : (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: bgTint }} // e.g. "rgba(2,6,23,0.08)"
        />
      )}

      {/* depth grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,125,125,0.08),transparent_55%)]" />

      {/* orbs wrapper */}
      <div className="pointer-events-none absolute inset-0">
        {/* Blue orb */}
        <Orb
          className="left-[-12%] top-[-14%] bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.55),rgba(59,130,246,0.18)_40%,transparent_60%)]"
          size={460}
          duration={34}
          delay={0}
          path="floatX"
        />
        {/* Emerald orb */}
        <Orb
          className="right-[-14%] top-[6%] bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.52),rgba(16,185,129,0.16)_40%,transparent_60%)]"
          size={400}
          duration={36}
          delay={-4}
          path="floatY"
        />
        {/* Fuchsia orb */}
        <Orb
          className="left-[10%] bottom-[-22%] bg-[radial-gradient(circle_at_30%_30%,rgba(217,70,239,0.5),rgba(217,70,239,0.16)_40%,transparent_60%)]"
          size={560}
          duration={42}
          delay={-8}
          path="floatDiag"
        />
      </div>

      {/* keyframes (scoped) */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .motion-ok {
            animation: none !important;
            transform: none !important;
            filter: blur(24px) !important;
          }
        }

        @keyframes floatX {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
            filter: blur(28px);
          }
          50% {
            transform: translateX(12%) translateY(-4%) rotate(6deg) scale(1.08);
            filter: blur(36px);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
            filter: blur(28px);
          }
        }
        @keyframes floatY {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
            filter: blur(26px);
          }
          50% {
            transform: translateX(-5%) translateY(14%) rotate(-5deg) scale(1.06);
            filter: blur(34px);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
            filter: blur(26px);
          }
        }
        @keyframes floatDiag {
          0% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
            filter: blur(30px);
          }
          50% {
            transform: translateX(10%) translateY(-12%) rotate(7deg) scale(1.1);
            filter: blur(38px);
          }
          100% {
            transform: translateX(0) translateY(0) rotate(0deg) scale(1);
            filter: blur(30px);
          }
        }
      `}</style>
    </>
  );
}

function Orb({
  className,
  size = 400,
  duration = 28,
  delay = 0,
  path = "floatX",
}: {
  className?: string;
  size?: number;
  duration?: number; // seconds
  delay?: number; // seconds
  path?: "floatX" | "floatY" | "floatDiag";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "motion-ok absolute rounded-full blur-3xl will-change-transform",
        className
      )}
      style={{
        width: size,
        height: size,
        animation: `${path} ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}
