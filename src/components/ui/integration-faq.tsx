"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface IntegrationFaqProps {
  faqs: FaqItem[];
  lmsName: string;
}

export function IntegrationFaq({ faqs, lmsName }: IntegrationFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl font-bold text-foreground">
            {lmsName} integration FAQ
          </h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Everything you need to know about Checkmark and {lmsName}.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-border border border-border rounded-2xl overflow-hidden bg-white shadow-soft">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-foreground text-base md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`shrink-0 h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
