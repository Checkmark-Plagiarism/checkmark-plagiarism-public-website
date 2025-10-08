import { Check, Search, Megaphone, FileText, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      description: "For your fundamental AI detection needs.",
      price: "$5",
      period: "month",
      annual: "Billed $60 annually.",
      icon: Search,
      features: [
        "Advanced AI Detection Scan",
        "Plagiarism Checker",
        "Keystroke Analysis",
        "Essay Playback",
        "Source Identifier",
        "100 Essay Submissions per month"
      ]
    },
    {
      name: "Premium",
      description: "All fundamentals, plus a helping hand.",
      price: "$8",
      period: "month",
      annual: "Billed $96 annually.",
      icon: Megaphone,
      features: [
        "Advanced AI Detection Scan",
        "Plagiarism Checker", 
        "Keystroke Analysis",
        "Essay Playback",
        "Source Identifier",
        "200 Essay Submissions per month",
        "Auto-Grading Tools",
        "Rubric Integration",
        "Grading Feedback",
        "Student Feedback"
      ],
      popular: true
    },
    {
      name: "Unlimited",
      description: "Everything you need for larger classrooms.",
      price: "$15",
      period: "month", 
      annual: "Billed $180 annually.",
      icon: FileText,
      features: [
        "All Premium features",
        "Unlimited Essay Submissions",
        "Advanced Analytics Dashboard",
        "Custom Rubric Creation",
        "Bulk Import/Export",
        "Priority Support",
        "API Access"
      ]
    },
    {
      name: "Enterprise",
      description: "Custom solutions for institutions.",
      price: "Contact Us",
      period: "",
      annual: "Custom pricing for your needs.",
      icon: Building,
      features: [
        "All Unlimited features",
        "Custom Integration",
        "Dedicated Account Manager",
        "Advanced Security Features",
        "Custom Training & Onboarding",
        "SLA Guarantees",
        "White-label Options"
      ],
      enterprise: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From individual educators to large institutions, we have a plan that fits your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.name} 
                className={`relative transition-all duration-300 hover:shadow-lg ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-foreground mb-2">
                      {plan.enterprise ? (
                        <span className="text-2xl">Contact Us</span>
                      ) : (
                        <>
                          {plan.price}
                          <span className="text-lg font-normal text-muted-foreground">
                            /{plan.period}
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      {plan.annual}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.popular ? "hero" : plan.enterprise ? "secondary" : "outline"} 
                    className="w-full"
                  >
                    {plan.enterprise ? "Contact Sales" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
