import HeroSection from "@/sections/home/hero-section";
import ProblemStatementSection from "@/sections/home/problem-statement-section";
import ExampleReportSection from "@/sections/home/example-report-section";
import AccuracySection from "@/sections/home/accuracy-section";
import IntegrationsSection from "@/sections/home/integrations-section";
import CompetitiveSection from "@/sections/home/competitive-section";
import FinalCTA from "@/sections/home/final-cta-section";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <ProblemStatementSection />
      <ExampleReportSection />
      <AccuracySection />
      <IntegrationsSection />
      <CompetitiveSection />
      <FinalCTA />
    </main>
  );
}
