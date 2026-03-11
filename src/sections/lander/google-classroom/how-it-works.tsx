import Image from "next/image";

const steps = [
    {
        number: "01",
        title: "Install the Add-on",
        description:
            "Your Google Workspace admin installs Checkmark from the Google Workspace Marketplace. Takes less than 2 minutes.",
    },
    {
        number: "02",
        title: "Students Submit as Usual",
        description:
            "Nothing changes for students — they submit assignments through Google Classroom exactly as they always do.",
    },
    {
        number: "03",
        title: "Automatic Scanning",
        description:
            "Checkmark instantly checks every submission for plagiarism, AI-generated content, and rubric alignment.",
    },
    {
        number: "04",
        title: "View Results Inline",
        description:
            "See detailed reports, similarity scores, and AI flags right alongside student work in Google Classroom.",
    },
];

export const GoogleClassroomHowItWorks = () => {
    return (
        <section className="py-28 bg-background relative overflow-hidden">
            {/* Sticker illustration */}
            <Image
                src="/images/man.png"
                alt="Person illustration"
                width={300}
                height={300}
                className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-3 -z-0 pointer-events-none hidden lg:block"
            />
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-20">
                    <p className="text-base md:text-lg font-bold tracking-widest text-primary uppercase mb-3">How It Works</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Up and running in minutes</h2>
                </div>

                <div className="flex flex-col gap-0 max-w-2xl mx-auto">
                    {steps.map((step, i) => (
                        <div key={i} className="flex items-start gap-6">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold shrink-0">
                                    {step.number}
                                </div>
                                {i < steps.length - 1 && <div className="w-px h-16 bg-primary/20" />}
                            </div>
                            <div className="pt-2 pb-8">
                                <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
