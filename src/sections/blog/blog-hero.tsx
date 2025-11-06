"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function BlogHero({ className = "" }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to parallax movement
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-brand-900 pt-36 pb-40 overflow-hidden"
      aria-labelledby="blog-hero"
    >
      {/* Background essay clipart - dimmed with parallax (matching homepage) */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y, top: "80%", scale: 4.2 }}
      >
        <Image
          src="/images/essay-clipart.png"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Decorative elements (matching homepage) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display text-white mb-6 animate-fade-in leading-tight overflow-visible">
            Insights & Best Practices
            <br />
            <span className="inline-block font-[family-name:var(--font-caveat)] bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent py-2 px-2">
              for Modern Teaching
            </span>
          </h1>

          <div
            className="flex items-center justify-center gap-3 mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <Image
              src="/images/android-chrome-192x192.png"
              alt="Checkmark"
              width={56}
              height={56}
              className="flex-shrink-0 drop-shadow-[0_0_3px_rgba(255,255,255,0.6)]"
            />
            <p className="text-heading-3 text-white/90 leading-relaxed text-left">
              Academic Integrity,
              <br />
              AI Detection & More
            </p>
          </div>

          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Discover insights, tips, and best practices for academic integrity, plagiarism
            detection, and modern teaching methods.
          </p>
        </div>
      </div>

      {/* Wave decoration at bottom (matching homepage) */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>

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
