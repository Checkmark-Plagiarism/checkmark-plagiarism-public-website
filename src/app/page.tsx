import type { Metadata } from "next";
import Atmosphere from "@/sections/redesign/atmosphere";
import Nav from "@/sections/redesign/nav";
import Hero from "@/sections/redesign/hero";
import Problem from "@/sections/redesign/problem";
import Values from "@/sections/redesign/values";
import HowItWorks from "@/sections/redesign/how-it-works";
import Features from "@/sections/redesign/features";
import Lms from "@/sections/redesign/lms";
import Faq from "@/sections/redesign/faq";
import Cta from "@/sections/redesign/cta";
import Blog from "@/sections/redesign/blog";
import SiteFooter from "@/sections/redesign/site-footer";

export const metadata: Metadata = {
  title: "Checkmark Plagiarism - AI Detection & Autograding for Teachers",
  description:
    "Stop guessing, start trusting. Checkmark detects AI-generated content and plagiarism with keystroke analysis, Essay Playback, and autograding. Designed by teachers for real classrooms.",
};

// The homepage ships the redesign's own chrome (Nav + SiteFooter), so the global
// site Header/Footer are suppressed on "/" via SiteChrome in the root layout.
export default function Page() {
  return (
    <div className="ck-redesign">
      <Atmosphere />
      <Nav />
      <Hero />
      <Problem />
      <Values />
      <HowItWorks />
      <Features />
      <Lms />
      <Faq />
      <Cta />
      <Blog />
      <SiteFooter />
    </div>
  );
}
