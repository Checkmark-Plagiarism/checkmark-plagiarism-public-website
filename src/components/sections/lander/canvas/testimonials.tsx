export const CanvasTestimonial = () => {
    return (
        <section className="py-24" style={{ background: "hsl(220, 15%, 96%)" }}>
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <p className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Trusted by Educators</p>
                <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-snug mb-8">
                    "Checkmark's Canvas integration changed our workflow entirely. What used to take us hours of manual checking now happens automatically — and with better accuracy than we ever had."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">DR</span>
                    </div>
                    <div className="text-left">
                        <p className="font-bold text-foreground">Dr. Rebecca Torres</p>
                        <p className="text-sm text-muted-foreground">Director of Academic Integrity, State University</p>
                    </div>
                </div>

                {/* Logos / trust bar */}
                <div className="mt-16 pt-12 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-8">Used by leading institutions across North America</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-40">
                        {["Stanford", "MIT", "UCLA", "UBC", "Duke"].map((name) => (
                            <span key={name} className="text-xl font-extrabold text-foreground tracking-tight">{name}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
