export const CanvasHowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Install the LTI App",
            description: "Your Canvas admin adds Checkmark via LTI 1.3 in under 5 minutes. No server setup, no downloads.",
        },
        {
            number: "02",
            title: "Students Submit as Usual",
            description: "Nothing changes for students — they submit assignments through Canvas like they always have.",
        },
        {
            number: "03",
            title: "Automatic Scanning",
            description: "Checkmark instantly checks every submission for plagiarism, AI-generated content, and rubric alignment.",
        },
        {
            number: "04",
            title: "Results in SpeedGrader",
            description: "View detailed reports, similarity scores, and AI flags right inside Canvas SpeedGrader. Grade faster with confidence.",
        },
    ];

    return (
        <section className="py-24" style={{ background: "hsl(220, 15%, 96%)" }}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">How It Works</p>
                    <h2 className="text-heading-2 text-foreground mb-4">
                        Up and running in minutes, not months
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
            </div>
        </section>
    );
};
