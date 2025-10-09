"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type FeatureHeroProps = {
  className?: string;
  bgTint?: string;
  image?: string;
  children?: ReactNode;
};

export default function FeatureHero({
  className,
  image = '',
  bgTint = "bg-blue-300",
  children,
}: FeatureHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // allow paint, then animate
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border py-16 md:py-20",
        className
      )}
      aria-labelledby="features-hero"
    >
      {/* BACKGROUND LAYER: animated orbs with configurable tint */}
      <BackgroundOrbs bgTint={bgTint} image={image}/>

      {/* GLASS CARD */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div
            className={cn(
              "relative mx-auto overflow-hidden rounded-2xl bg-background/40 backdrop-blur-md ring-1 ring-foreground/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)]",
              // animation classes
              "transition-all duration-700 ease-out will-change-transform",
              "opacity-0 translate-y-6",
              mounted && "opacity-100 translate-y-0",
              // Slight scale for extra polish on larger screens
              "md:scale-[0.985]",
              mounted && "md:scale-100"
            )}
          >
            {/* subtle top gradient sheen */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 to-transparent dark:from-white/5" />


            <div className="relative z-10 p-6 md:p-10">{children}</div>

            {/* soft bottom vignette */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/5 to-transparent dark:from-black/30" />
          </div>
        </div>
      </div>

      {/* Reduce motion preference */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .transition-all {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/**
 * BackgroundOrbs
 * - Accepts bgTint (Tailwind class or raw CSS color) for the tint overlay
 * - Bigger, livelier motion with rotation + scale
 * - Honors prefers-reduced-motion
 */
function BackgroundOrbs({ bgTint, image }: { bgTint: string, image: string }) {
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

        {/* hero image */}
        { image && (
          <Image
            src={image}
            alt="hero image"
            width={1200}
            height={700}
            className="w-full h-auto object-contain"
            priority
          />
        )}

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
