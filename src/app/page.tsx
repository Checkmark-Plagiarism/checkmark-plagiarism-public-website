import { Metadata } from "next";
import HeroSection from "@/sections/home/hero-section";
import ProblemStatementSection from "@/sections/home/problem-statement-section";
import AutograderSection from "@/sections/home/autograder-section";
import AccuracySection from "@/sections/home/accuracy-section";
import IntegrationsSection from "@/sections/home/integrations-section";
import CompetitiveSection from "@/sections/home/competitive-section";
import FinalCTA from "@/sections/home/final-cta-section";

export const metadata: Metadata = {
  title: "Checkmark Plagiarism - AI Detection & Autograding for Teachers",
  description: "Stop guessing, start trusting. Checkmark detects AI-generated content and plagiarism with keystroke analysis, Essay Playback, and autograding. Designed by teachers for real classrooms.",
};

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ProblemStatementSection />
      <AutograderSection />
      <AccuracySection />
      <IntegrationsSection />
      <CompetitiveSection />
      <FinalCTA />
    </main>
  );
}
