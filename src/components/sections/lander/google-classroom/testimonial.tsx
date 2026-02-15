export const GoogleClassroomTestimonial = () => {
    return (
        <section className="py-28 bg-background">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <p className="text-sm font-bold tracking-widest text-primary uppercase mb-6">
                    Trusted by Educators
                </p>
                <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-snug mb-8">
                    "We switched from manual plagiarism checks to Checkmark in Google Classroom and it's been transformational. Our teachers save hours every week and students get faster feedback."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">MJ</span>
                    </div>
                    <div className="text-left">
                        <p className="font-bold text-foreground">Maria Johnson</p>
                        <p className="text-sm text-muted-foreground">
                            Technology Coordinator, Westfield School District
                        </p>
                    </div>
                </div>

                {/* Trust bar */}
                <div className="mt-16 pt-12 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-8">
                        Used by schools and districts across the country
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-40">
                        {["LAUSD", "Chicago PS", "NYCDOE", "Houston ISD", "Fairfax County"].map((name) => (
                            <span key={name} className="text-xl font-extrabold text-foreground tracking-tight">
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
