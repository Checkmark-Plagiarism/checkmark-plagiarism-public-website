import { Button } from "@/components/ui/button";
import { Upload, Star, Edit, FileCheck } from "lucide-react";
import Image from "next/image";

const gradingDashboardImage = '/images/home/example_dashboard.jpg';

const GradingSection = () => {
  const features = [
    {
      icon: Upload,
      title: "Upload Any Rubric Format",
      description: "Works with your existing rubrics (PDF, DOC, PNG, etc.)."
    },
    {
      icon: Star,
      title: "Scores + Evidence",
      description: "Justifications and highlighted examples for each score."
    },
    {
      icon: Edit,
      title: "Easy to Override",
      description: "Adjust AI scores or feedback instantly."
    },
    {
      icon: FileCheck,
      title: "One Complete Report",
      description: "Grading + plagiarism results in one place."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Grade Essays in{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Seconds, Not Hours
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI-powered grading with your rubrics, plus plagiarism detection. Don&apos;t spend hours reviewing AI-generated essays.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <IconComponent className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button variant="hero" size="lg" className="mt-8">
              Try Grading Demo
            </Button>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl shadow-large overflow-hidden border">
              <Image
                src={gradingDashboardImage}
                height="500"
                width="500"
                alt="Grading dashboard interface"
                className="w-full h-auto"
              />
            </div>

            {/* Floating score indicator */}
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg shadow-medium font-semibold">
              Score: 87/100
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradingSection;
