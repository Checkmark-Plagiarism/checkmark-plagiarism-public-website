import { CheckCircle, Zap, Shield, Eye, FileText, Award } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Works Inside Your LMS",
      description: "Full integration with Google Classroom & Canvas. No extra logins or uploads.",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "AI-Powered Auto-Grading",
      description: "Accurate, consistent grades in seconds.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Detects Copied Writing",
      description: "Analyzes revision history & typing behavior to flag pasted text.",
      color: "text-primary"
    },
    {
      icon: Eye,
      title: "Tracks Uncited Text",
      description: "Flags passages borrowed without citations.",
      color: "text-secondary"
    },
    {
      icon: FileText,
      title: "See How an Essay Was Written",
      description: "Replay typing process step-by-step.",
      color: "text-accent"
    },
    {
      icon: Award,
      title: "Patent-Pending Technology",
      description: "Reliable detection built on typing behavior & revision history.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to detect plagiarism and grade essays efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border"
              >
                <div className={`${benefit.color} mb-4`}>
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
