import Image from "next/image";
import { ShieldCheck, Brain, GraduationCap, Plug } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Plagiarism Detection",
        description:
            "Cross-reference student submissions against billions of web pages, academic papers, and previously submitted work. Detailed similarity reports highlight every source.",
        stat: "15B+ sources checked",
    },
    {
        icon: Brain,
        title: "AI Writing Detection",
        description:
            "Detect AI-generated content from ChatGPT, Claude, Gemini, and more. Sentence-level highlighting shows exactly which passages were flagged.",
        stat: "99.2% accuracy",
    },
    {
        icon: GraduationCap,
        title: "Autograding",
        description:
            "Set rubrics and let Checkmark provide instant, unbiased feedback on student writing. Save hours per assignment while maintaining grading quality.",
        stat: "80% time saved",
    },
    {
        icon: Plug,
        title: "Google Classroom Add-on",
        description:
            "Install once as a Google Classroom add-on. Submissions are automatically scanned and results appear alongside student work — zero context-switching.",
        stat: "Seamless integration",
    },
];

export const GoogleClassroomFeatures = () => {
    return (
        <section className="py-28 bg-secondary relative overflow-hidden">
            {/* Sticker illustration */}
            <Image
                src="/images/essay-scale.png"
                alt="Balance scale with essay"
                width={300}
                height={300}
                className="absolute -left-8 top-1/2 -translate-y-full -rotate-6 -z-0 pointer-events-none hidden lg:block"
            />
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Section header */}
                <div className="text-center mb-20">
                    <p className="text-base md:text-lg font-bold tracking-widest text-primary uppercase mb-3">
                        What Checkmark Offers
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                        Everything you need for academic integrity
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Four powerful tools, one seamless add-on — all built for Google Classroom.
                    </p>
                </div>

                {/* Feature cards — 2x2 grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="group bg-card rounded-2xl border border-border p-10 hover:shadow-medium transition-all duration-300"
                        >
                            <div className="flex items-start gap-5">
                                <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="h-7 w-7 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {feature.stat}
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
