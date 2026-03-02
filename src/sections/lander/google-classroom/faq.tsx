"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Does Google Classroom have built-in AI or plagiarism detection?",
        answer: "Google Classroom does not include AI detection or plagiarism checking out of the box. Checkmark adds both directly inside your Google Classroom workflow, with no extra logins or tab-switching required.",
    },
    {
        question: "How much does Checkmark's Google Classroom integration cost?",
        answer: "Checkmark offers flexible enterprise/institutional plans for departments, institutions, and districts. Contact our team for a quote tailored to your institution's size and needs.",
    },
    {
        question: "How accurate is Checkmark?",
        answer: "Checkmark achieves 99.2% accuracy on AI detection and 98.7% on plagiarism detection. We recommend using these results as strong signals to inform your review, not as a substitute for it.",
    },
    {
        question: "Will student work be stored or used to train AI models?",
        answer: "No. Student submissions are never used to train AI models and never sold to third parties. Your students' work stays private.",
    },
    {
        question: "Is Checkmark FERPA compliant?",
        answer: "Yes. Checkmark is fully FERPA compliant. Student data is encrypted at rest, processed securely, and never shared outside your institution.",
    },
    {
        question: "What file types does Checkmark support?",
        answer: "Checkmark supports Google Docs and .docx (Microsoft Word) files. Because our AI detection relies on a document's revision history, we're unable to support PDFs or other static file formats.",
    },
    {
        question: "Does Checkmark work with Microsoft Word?",
        answer: "Yes. To enable AI detection for Word documents, you'll need to install Checkmark's Microsoft Word add-in, which captures the revision history Checkmark uses for its analysis.",
    },
];

export const GoogleClassroomFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <p className="text-sm font-bold tracking-widest text-primary uppercase mb-3">FAQ</p>
                    <h2 className="text-heading-2 text-foreground">Frequently asked questions</h2>
                </div>

                <div className="flex flex-col divide-y divide-border border border-border rounded-2xl overflow-hidden">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <button
                                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/40 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-foreground">{faq.question}</span>
                                <ChevronDown
                                    className={`shrink-0 h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                                    {faq.answer || <span className="italic text-muted-foreground/60">Answer coming soon.</span>}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};