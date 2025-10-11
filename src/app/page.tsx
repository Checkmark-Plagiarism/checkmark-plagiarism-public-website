import HeroSection from "@/sections/home/hero-section";
import ProblemStatementSection from "@/sections/home/problem-statement-section";
import HowItWorksSection from "@/sections/home/how-it-works-section";
import AccuracySection from "@/sections/home/accuracy-section";
import IntegrationsSection from "@/sections/home/integrations-section";
import FinalCTA from "@/sections/home/final-cta-section";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ProblemStatementSection />
      <HowItWorksSection />
      <AccuracySection />
      <IntegrationsSection />
      <FinalCTA />
    </main>
  );
}
