import Layout from "@/components/layout/layout";
import HeroSection from "@/sections/home/hero-section";
import HowItWorksSection from "@/sections/home/how-it-works-section";
import BenefitsSection from "@/sections/home/benefits-section";
import GradingSection from "@/sections/home/grading-section";
import ReportSection from "@/sections/home/report-section";
import PricingSection from "@/sections/home/pricing-section";
import CTASection from "@/sections/home/cta-section";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <GradingSection />
      <ReportSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}
