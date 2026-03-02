import { MessageCircle, Search, Scale } from "lucide-react";

const pillars = [
    {
        icon: Search,
        title: "Forensics, not flags",
        description: "Checkmark traces a student's revision history and keystroke data to surface where content was pasted in rather than typed. You get a detailed picture, not a red stamp.",
    },
    {
        icon: MessageCircle,
        title: "Conversation starters, not verdicts",
        description: "There is no perfect AI detector, and we don't pretend otherwise. Checkmark gives teachers the evidence they need to have an informed conversation with a student.",
    },
    {
        icon: Scale,
        title: "Support teachers, not police students",
        description: "Academic integrity isn't about catching students. It's about helping them learn. Checkmark is built to give educators better tools, not to make students feel surveilled.",
    },
];

export const CanvasPhilosophy = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Philosophy</p>
                    <h2 className="text-heading-2 text-foreground mb-4">
                        Less policing. More conversations.
                    </h2>
                    <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                        Checkmark analyzes a student&apos;s revision history and actual keystrokes to show teachers exactly where AI-generated content was likely pasted in. It gives you evidence to start a conversation, not an algorithm to hand down a verdict.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="flex flex-col items-start gap-4 p-6 rounded-2xl border border-border bg-muted/30">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <pillar.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
