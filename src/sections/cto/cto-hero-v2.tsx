"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import ScheduleDemoButton from "@/components/schedule-demo-button";
import Link from "next/link";

export default function CTOHeroV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={sectionRef} className="relative bg-brand-900 pt-32 pb-20 overflow-hidden">
      {/* Full-width background image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero/hero1.png"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/80 via-brand-900/70 to-brand-900/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-heading-1 text-white mb-6 leading-tight">
            Make Smart Adoption Decisions with Real Instructional Data — Not Sales Pitches
          </h1>
          <p className="text-body-lg text-white/90 max-w-3xl mx-auto mb-10">
            District-wide analytics on AI usage, writing patterns, student performance, and teacher workflow efficiency — all from real classroom behavior.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <ScheduleDemoButton variant="primary" size="lg">
              Schedule 15-Minute Demo
            </ScheduleDemoButton>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-lg font-bold transition-smooth h-14 px-10 bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 shadow-medium hover:shadow-strong"
            >
              Contact Sales
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-10 pt-6 border-t border-white/20">
            <p className="text-sm text-white/70">
              SOC 2 Type II Certified • FERPA Compliant • Trusted by School Districts Nationwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
