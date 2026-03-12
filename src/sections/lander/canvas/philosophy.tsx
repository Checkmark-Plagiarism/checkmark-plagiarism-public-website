import Image from "next/image";
import { MessageCircle, Search, Scale } from "lucide-react";

const pillars = [
    {
        icon: Search,
        title: "Forensics, not flags",
        description: "Checkmark traces a student's revision history and keystroke data to surface where content was copied in rather than typed. You get a detailed picture, not a red stamp.",
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
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Sticker illustration */}
            <Image
                src="/images/teacher-convo.png"
                alt="Teacher having a conversation with a student"
                width={420}
                height={420}
                className="absolute -right-8 top-1/2 -translate-y-1/2 rotate-3 -z-0 pointer-events-none hidden lg:block"
            />
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-16">
                    <p className="text-base md:text-lg font-bold tracking-widest text-primary uppercase mb-3">Our Philosophy</p>
                    <h2 className="text-heading-2 text-foreground mb-4">
                        More Conversations, Not Accusations
                    </h2>
                    <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                        Checkmark analyzes a student&apos;s revision history and actual keystrokes to show teachers exactly where AI-generated content was likely copied in. It gives you evidence to start a conversation, not an algorithm to hand down a verdict.
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
