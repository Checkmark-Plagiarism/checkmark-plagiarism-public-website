import { Shield, Eye, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Linguistic Fingerprinting",
    description: "Advanced pattern recognition analyzes writing style, vocabulary complexity, and sentence structure to identify AI-generated content with precision.",
  },
  {
    icon: Eye,
    title: "Explainable AI Model",
    description: "No black-box predictions. Every detection comes with clear reasoning, highlighted sections, and confidence scores educators can trust.",
  },
  {
    icon: Lock,
    title: "Secure Data Handling",
    description: "Student privacy comes first. All submissions are encrypted, never used for training, and automatically deleted after analysis.",
  },
];

export const AccuracySection = () => {
  return (
    <section id="features" className="py-30 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 text-foreground mb-4">
            Built on Explainable AI,
            <br />
            Not Black-Box Predictions
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Transparency and accuracy are at the core of everything we build
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 shadow-soft hover:shadow-medium transition-smooth border-2 bg-white group hover:border-brand-500/30"
            >
              <div className="w-16 h-16 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-smooth">
                <feature.icon className="w-8 h-8 text-brand-500 group-hover:text-white transition-smooth" />
              </div>
              <h3 className="text-heading-3 text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-body text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-brand-900/5 to-brand-500/5 border-2 border-brand-500/20">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-lg bg-brand-500 flex items-center justify-center flex-shrink-0">
              <code className="text-white text-xl font-bold">{"</>"}</code>
            </div>
            <div>
              <h4 className="text-xl font-bold text-foreground mb-2">
                Built for Education, By Educators
              </h4>
              <p className="text-body text-muted-foreground">
                Our detection algorithms are developed in collaboration with academic institutions,
                tested against real-world student submissions, and continuously refined based on
                educator feedback. We understand the nuances of teaching and learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccuracySection;
