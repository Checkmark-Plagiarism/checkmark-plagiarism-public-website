"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LinkButton } from "@/components/ui/link";
import { ArrowRight } from "lucide-react";

export default function PricingHero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to parallax movement (moves down as you scroll for parallax effect)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={sectionRef} className="text-center mb-16 bg-brand-900 pt-32 pb-16 relative overflow-hidden">
      {/* Background hero image with parallax */}
      <motion.div
        className="absolute opacity-25"
        style={{
          y,
          top: "22%",
          left: 0,
          width: "100%",
          height: "150%"
        }}
      >
        <Image
          src="/images/hero/hero1.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Simple pricing
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 px-4">
          Choose the plan that fits your needs—from individual teachers to entire districts.
          All plans include AI detection, plagiarism checking, and Essay Playback™.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <LinkButton href="/contact" size="lg" variant="hero">Schedule a consultation <ArrowRight className="ml-2 h-4 w-4" /></LinkButton>
        </div>
      </div>
    </section>
  );
}
