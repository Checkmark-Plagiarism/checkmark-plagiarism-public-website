import { Shield, Layers, BarChart3, Headphones } from "lucide-react";

const features = [
    {
        icon: Layers,
        title: "Multi-Tenant Management",
        description: "Deploy and manage Checkmark across all your school clients from a single partner dashboard. Provision new districts in minutes, not days.",
    },
    {
        icon: Shield,
        title: "Enterprise-Grade Security",
        description: "FERPA-compliant, SOC 2 certified, and built with data isolation between tenants. Your clients' data stays secure and separated.",
    },
    {
        icon: BarChart3,
        title: "Usage Analytics & Reporting",
        description: "Track adoption, submission volume, and detection rates across every client. Generate branded reports to demonstrate the value you deliver.",
    },
    {
        icon: Headphones,
        title: "Dedicated Partner Support",
        description: "Get priority access to our engineering and support teams. We'll help you onboard clients, troubleshoot issues, and close deals.",
    },
];

export const MSPFeatures = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Why Partner With Us</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                        Everything you need to deliver academic integrity at scale
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Checkmark is purpose-built for MSPs who serve education. Add a high-value service to your portfolio with minimal lift.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-6">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <feature.icon className="h-7 w-7 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
