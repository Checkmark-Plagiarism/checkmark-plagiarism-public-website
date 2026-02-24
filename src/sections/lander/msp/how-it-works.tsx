import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Join the Partner Program",
        description: "Fill out our partner application. We'll schedule a call to understand your client base and align on goals.",
    },
    {
        number: "02",
        title: "Get Onboarded",
        description: "Receive access to the partner dashboard, API credentials, deployment guides, and co-branded marketing materials.",
    },
    {
        number: "03",
        title: "Deploy to Your Clients",
        description: "Roll out Checkmark to your school clients via LTI, API, or direct integration with Canvas, Google Classroom, and more.",
    },
    {
        number: "04",
        title: "Grow Together",
        description: "Earn recurring revenue on every seat. Our team supports you with sales enablement, technical assistance, and joint go-to-market.",
    },
];

export const MSPHowItWorks = () => {
    return (
        <section className="py-24" style={{ background: "hsl(220, 15%, 96%)" }}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">How It Works</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                        From partner to deployed in days
                    </h2>
                </div>

                <div className="flex flex-col gap-0 max-w-2xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-6">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shrink-0">
                                    {step.number}
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="w-px h-16 bg-primary/20" />
                                )}
                            </div>
                            <div className="pt-2 pb-8">
                                <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button size="lg" asChild>
                        <a href="#contact">
                            Become a Partner
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};
