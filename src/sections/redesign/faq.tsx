"use client";

import { useState } from "react";
import { SectionHead } from "./section-head";

const FAQS = [
  {
    q: "What does Checkmark actually detect?",
    a: "Checkmark surfaces AI-generated writing, plagiarism, and copy-paste activity, and reconstructs the writing process itself through keystroke playback, so you see how a piece of work came to be, not just a score.",
  },
  {
    q: "How much does Checkmark cost?",
    a: "Checkmark offers flexible enterprise/institutional plans for departments, institutions, and districts. Contact our team for a quote tailored to your institution's size and needs.",
  },
  {
    q: "How accurate is Checkmark?",
    a: "Checkmark achieves 99.2% accuracy on AI detection and 98.7% on plagiarism detection. We recommend using these results as strong signals to inform your review, not as a substitute for it.",
  },
  {
    q: "Will student work be stored or used to train AI models?",
    a: "No. Student submissions are never used to train AI models and never sold to third parties. Your students' work stays private.",
  },
  {
    q: "Is Checkmark FERPA compliant?",
    a: "Yes. Checkmark is fully FERPA compliant. Student data is encrypted at rest, processed securely, and never shared outside your institution.",
  },
  {
    q: "What file types does Checkmark support?",
    a: "Checkmark supports Google Docs and .docx (Microsoft Word) files. Because our AI detection relies on a document's revision history, we're unable to support PDFs or other static file formats.",
  },
  {
    q: "Does Checkmark work with Microsoft Word?",
    a: "Yes. To enable AI detection for Word documents, you'll need to install Checkmark's Microsoft Word add-in, which captures the revision history Checkmark uses for its analysis.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 text-ink-mute"
      style={{ transition: "transform 0.24s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Row({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-[18px] px-[26px] py-[22px] text-left border-none cursor-pointer [font:inherit] transition-colors duration-[0.18s]"
        style={{ background: open ? "var(--bg-tint)" : "transparent" }}
      >
        <span className="font-semibold text-[17.5px] text-ink leading-[1.35]">{q}</span>
        <Chevron open={open} />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-[0.28s] ease"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-[26px] pt-0 pb-6 text-[16px] leading-[1.62] text-ink-mute max-w-[640px]">{a}</div>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq">
      <div className="shell">
        <SectionHead
          eyebrow="FAQ"
          title="Frequently asked <em style='font-family: var(--font-display); font-style: italic; color: var(--teal);'>questions.</em>"
        />
        <div className="max-w-[760px] mx-auto mt-2 bg-bg-elev border border-line rounded-[24px] overflow-hidden shadow-[0_30px_70px_-34px_rgba(15,35,75,0.45)]">
          {FAQS.map((f, i) => (
            <div key={i} className={i === 0 ? "" : "border-t border-line"}>
              <Row q={f.q} a={f.a} open={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
