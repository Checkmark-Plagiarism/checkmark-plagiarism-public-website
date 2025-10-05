import { Button } from "@/components/ui/button";
import Image from "next/image";

const heroImage = '';
const plagiarismReportImage = '';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Plagiarism Detection{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Designed by Teachers,
                </span>{" "}
                For Teachers
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Checkmark Plagiarism & Auto Grading automates plagiarism detection by analyzing typing behavior and revision history — just like teachers already do manually.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <Image
                src={heroImage}
                height="80"
                width="80"
                alt="Teacher using laptop in classroom"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>

            {/* Floating UI Preview */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-large border p-4 max-w-xs animate-fade-up animation-delay-300">
              <Image
                src={plagiarismReportImage}
                alt="Plagiarism report preview"
                className="w-full h-auto rounded-lg"
                height="80"
                width="80"
              />
              <p className="text-sm text-muted-foreground mt-2">Live plagiarism analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
