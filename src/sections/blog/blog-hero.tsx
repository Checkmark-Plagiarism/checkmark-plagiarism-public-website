"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BlogHero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to parallax movement (moves down as you scroll for parallax effect)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={sectionRef} className="text-center bg-brand-900 pt-40 pb-28 relative overflow-hidden">
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
          src="/images/hero/hero2.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          AI & Education Insights
        </h1>
        <p className="text-xl text-white max-w-3xl mx-auto px-4">
          Exploring trust, detection, and the evolving role of artificial intelligence in education.
        </p>
      </div>
    </section>
  );
}
