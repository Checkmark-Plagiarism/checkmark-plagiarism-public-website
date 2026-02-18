import { ShieldCheck, Brain, GraduationCap, Plug } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Plagiarism Detection",
        description: "Cross-reference student submissions against billions of web pages, academic papers, and previously submitted work. Get detailed similarity reports with source highlighting.",
        stats: "15B+ sources checked",
        color: "from-primary/20 to-primary/5",
    },
    {
        icon: Brain,
        title: "AI Writing Detection",
        description: "Industry-leading detection of AI-generated content from ChatGPT, Claude, Gemini, and more. Sentence-level highlighting shows exactly which passages were flagged.",
        stats: "99.2% accuracy",
        color: "from-accent/20 to-accent/5",
    },
    {
        icon: GraduationCap,
        title: "Autograding",
        description: "Set rubrics and let Checkmark provide instant, consistent feedback on student writing. Save hours per assignment while maintaining grading quality.",
        stats: "80% time saved",
        color: "from-primary/15 to-accent/5",
    },
    {
        icon: Plug,
        title: "Native LTI Integration",
        description: "Install once with LTI 1.3 and Checkmark lives inside Canvas. Submissions are automatically scanned, and results appear right in SpeedGrader.",
        stats: "Zero context-switching",
        color: "from-accent/15 to-primary/5",
    },
];

export const CanvasFeatures = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">What Checkmark Offers</p>
                    <h2 className="text-heading-2 text-foreground mb-4">
                        Everything you need for academic integrity
                    </h2>
                    <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                        Four powerful tools, one seamless integration — all built for Canvas.
                    </p>
                </div>

                <div className="flex flex-col gap-6 max-w-3xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl bg-gradient-to-br ${feature.color} border border-border p-8 hover:shadow-medium transition-all duration-300`}
                        >
                            <div className="flex items-start gap-5">
                                <div className="shrink-0 w-14 h-14 rounded-xl bg-white shadow-soft flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="h-7 w-7 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-3">{feature.description}</p>
                                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {feature.stats}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
