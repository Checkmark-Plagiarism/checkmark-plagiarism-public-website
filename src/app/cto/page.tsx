import { Metadata } from "next";
import CTOHeroInfographic from "@/sections/cto/cto-hero-infographic";
import CTODataInfographic from "@/sections/cto/cto-data-infographic";
import CTOIntegrationsSimple from "@/sections/cto/cto-integrations-simple";
import CTOCTASection from "@/sections/cto/cto-cta-section";

export const metadata: Metadata = {
  title: "For CTOs — Checkmark Plagiarism",
  description: "Make smart adoption decisions with real instructional data. District-wide analytics on AI usage, writing patterns, and teacher workflow efficiency. Schedule a 15-minute demo.",
  openGraph: {
    title: "For CTOs — Checkmark Plagiarism",
    description: "District intelligence layer for academic integrity. Real behavioral analytics, not vendor pitches.",
    type: "website",
  },
};

export default function CTOPage() {
  return (
    <>
      {/* Hero Section - Infographic style with embedded contact form */}
      <CTOHeroInfographic />

      {/* Data Infographic - Use-case driven analytics showcase */}
      <CTODataInfographic />

      {/* Integrations - Simple */}
      <CTOIntegrationsSimple />

      {/* CTA Section - Schedule Demo & Contact Sales */}
      <CTOCTASection />
    </>
  );
}
