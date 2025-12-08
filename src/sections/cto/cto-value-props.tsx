import { BarChart3, Clock, Shield } from "lucide-react";

export default function CTOValueProps() {
  const benefits = [
    {
      icon: BarChart3,
      title: "Replace Vendor Pitches with Data",
      description: "Stop wasting time in sales demos. See exactly how AI tools impact your schools with real behavioral analytics.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Clock,
      title: "Reduce Teacher Administrative Burden",
      description: "Teachers save 6+ minutes per assignment. That's 480+ hours saved across 94 teachers per semester.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Shield,
      title: "Protect Student Data",
      description: "SOC 2 Type II certified. FERPA compliant. End-to-end encryption. Your data never trains our models.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-heading-2 text-brand-900 mb-4">
            Why CTOs Choose Checkmark
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Built for technical leaders who need evidence, efficiency, and enterprise-grade security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className={`w-14 h-14 ${benefit.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
