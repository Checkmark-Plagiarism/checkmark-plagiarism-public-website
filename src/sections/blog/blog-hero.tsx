"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function BlogHero({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden py-20 md:py-24 bg-brand-900",
        className
      )}
      aria-labelledby="blog-hero"
    >
      {/* depth grid + glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      />

      {/* animated orbs behind glass */}
      <Orbs />

      {/* GLASS CARD */}
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "relative mx-auto max-w-3xl",
            "transition-all duration-700 ease-out will-change-transform",
            "opacity-0 translate-y-6 md:scale-[0.985]",
            mounted && "opacity-100 translate-y-0 md:scale-100"
          )}
        >
          {/* content (unchanged) */}
          <div className="relative z-10 p-8 md:p-12 text-center">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/80 ring-1 ring-white/20 backdrop-blur">
              Checkmark Plagiarism Blog
            </span>

            <h1 id="blog-hero" className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white">
              Blog
            </h1>

            <p className="mt-4 text-lg md:text-xl text-[#E6ECF3]">
              Insights, tips, and best practices for academic integrity, plagiarism
              detection, and modern teaching methods.
            </p>
          </div>
        </div>
      </div>

      {/* light gray base to echo site palette */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-[#E9EEF6]" />

      {/* reduce motion */}
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

function Orbs() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Orb
        className="left-[-12%] top-[-14%] bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.55),rgba(59,130,246,0.18)_40%,transparent_60%)]"
        size={460}
        duration={34}
        delay={0}
        path="floatX"
      />
      <Orb
        className="right-[-14%] top-[6%] bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.52),rgba(16,185,129,0.16)_40%,transparent_60%)]"
        size={400}
        duration={36}
        delay={-4}
        path="floatY"
      />
      <Orb
        className="left-[10%] bottom-[-22%] bg-[radial-gradient(circle_at_30%_30%,rgba(217,70,239,0.5),rgba(217,70,239,0.16)_40%,transparent_60%)]"
        size={560}
        duration={42}
        delay={-8}
        path="floatDiag"
      />

      {/* keyframes */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .motion-ok {
            animation: none !important;
            transform: none !important;
            filter: blur(24px) !important;
          }
        }
        @keyframes floatX {
          0% { transform: translateX(0) translateY(0) rotate(0deg) scale(1); filter: blur(28px); }
          50% { transform: translateX(12%) translateY(-4%) rotate(6deg) scale(1.08); filter: blur(36px); }
          100% { transform: translateX(0) translateY(0) rotate(0deg) scale(1); filter: blur(28px); }
        }
        @keyframes floatY {
          0% { transform: translateX(0) translateY(0) rotate(0deg) scale(1); filter: blur(26px); }
          50% { transform: translateX(-5%) translateY(14%) rotate(-5deg) scale(1.06); filter: blur(34px); }
          100% { transform: translateX(0) translateY(0) rotate(0deg) scale(1); filter: blur(26px); }
        }
        @keyframes floatDiag {
          0% { transform: translateX(0) translateY(0) rotate(0deg) scale(1); filter: blur(30px); }
          50% { transform: translateX(10%) translateY(-12%) rotate(7deg) scale(1.1); filter: blur(38px); }
          100% { transform: translateX(0) translateY(0) rotate(0deg) scale(1); filter: blur(30px); }
        }
      `}</style>
    </div>
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
  duration?: number;
  delay?: number;
  path?: "floatX" | "floatY" | "floatDiag";
}) {
  return (
    <div
      aria-hidden
      className={cn("motion-ok absolute rounded-full blur-3xl will-change-transform", className)}
      style={{
        width: size,
        height: size,
        animation: `${path} ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}
