"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LinkButton } from "@/components/ui/link";

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to parallax movement
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} className="text-center mb-16 bg-gradient-to-br from-brand-700 to-brand-700/99 pt-32 pb-16 relative overflow-hidden">
      {/* Translucent hero image with parallax */}
      <motion.div className="absolute inset-0 opacity-20" style={{ y }}>
        <Image
          src="/images/hero/hero1.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          People behind Checkmark Plagiarism
        </h1>
        <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
          Educators, builders, and researchers focused on academic integrity
          and helping student writing.
        </p>

        <div className="mt-8">
          <LinkButton href="/contact" size="lg" variant="outline-white">
            Contact us
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
