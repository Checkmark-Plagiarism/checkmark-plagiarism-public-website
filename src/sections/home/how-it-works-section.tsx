import { Upload, Brain, FileCheck, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Connect or Upload",
    description:
      "Link Canvas or Google Classroom—or drop in files (DOCX, Google Docs).",
  },
  {
    icon: Brain,
    title: "Analyze with AI",
    description:
      "Detect AI-written text and plagiarism with clear, explainable signals.",
  },
  {
    icon: FileCheck,
    title: "Originality Report",
    description:
      "See confidence scores, inline highlights, and what needs review—instantly.",
  },
  {
    icon: BarChart3,
    title: "Insights & Autograding",
    description:
      "Track class trends, apply rubric-aligned autograding, and export to your LMS.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-30 bg-brand-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-heading-1 text-white mb-4">How it works</h2>
          <p className="text-body-lg text-white/90 max-w-2xl mx-auto">
            From upload to trustworthy results—in minutes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth h-full border-2 border-transparent hover:border-brand-500/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-brand-500 flex items-center justify-center shadow-medium">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-brand-500/10">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-brand-400 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
