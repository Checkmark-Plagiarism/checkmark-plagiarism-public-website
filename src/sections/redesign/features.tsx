"use client";

import { useState, type CSSProperties } from "react";
import { SectionHead } from "./section-head";
import { CheckmarkReport } from "./report-modules";

type Feature = {
  id: string;
  name: string;
  title: string;
  desc: string;
  accent: string;
  bg: string;
  mockKey: string;
};

const FEATURES: Feature[] = [
  {
    id: "playback",
    name: "Essay Playback",
    title: "Watch the writing happen.",
    desc: "Checkmark reconstructs how every essay was written, keystroke by keystroke, so you can guide students toward their best, most authentic work. Scrub through any assignment like a video: every keystroke, pause, paste, and revision in order. The flagship of Checkmark, patent-pending.",
    accent: "hsl(218 100% 60%)",
    bg: "hsl(218 100% 95.5%)",
    mockKey: "FeaturePlayback",
  },
  {
    id: "transcription",
    name: "Transcription Detection",
    title: "Catch copying that’s typed by hand.",
    desc: "When a student retypes an essay from another screen, the keystrokes give it away: steady cadence, no revisions, no composing pauses. We score how much of the draft was transcribed rather than written.",
    accent: "hsl(212 90% 50%)",
    bg: "hsl(212 100% 94.5%)",
    mockKey: "FeatureTranscription",
  },
  {
    id: "paste",
    name: "Copy / Paste Detection",
    title: "Know where the words came from.",
    desc: "Pastes are caught the moment they happen, sized and timestamped. A sibling tab, a chatbot, or a friend’s doc all show up in the timeline, sourced when possible.",
    accent: "hsl(40 92% 50%)",
    bg: "hsl(44 88% 92%)",
    mockKey: "FeaturePaste",
  },
  {
    id: "ai",
    name: "AI Detection",
    title: "A second opinion, not a verdict.",
    desc: "We still run a state-of-the-art classifier, but it never stands alone. Every AI flag is paired with the keystroke evidence that supports or contradicts it.",
    accent: "hsl(2 75% 60%)",
    bg: "hsl(2 80% 95.5%)",
    mockKey: "FeatureAI",
  },
  {
    id: "grade",
    name: "Autograder + Feedback",
    title: "Save the time you spend on the obvious.",
    desc: "Rubric-aware drafts of feedback land in your queue. Approve, edit, or reject. You stay the teacher; we just do the typing.",
    accent: "#6941C6",
    bg: "#F3E8FF",
    mockKey: "FeatureGrade",
  },
];

function LmsMock() {
  const rows = [
    { name: "Canvas", glyph: "C", color: "#D2492A" },
    { name: "Google Classroom", glyph: "G", color: "#1A73E8" },
    { name: "Buzz LMS", glyph: "B", color: "var(--teal)", special: true },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="p-[18px] rounded-[16px] bg-teal text-white">
        <div className="text-[11px] font-mono opacity-75 tracking-[0.06em] uppercase mb-1.5">Only on Checkmark</div>
        <div className="font-display text-[19px] leading-[1.25]">
          Native keystroke capture inside Buzz LMS text boxes. No other tool does this.
        </div>
      </div>
      {rows.map((r) => (
        <div key={r.name} className="flex items-center gap-3 px-3.5 py-3 rounded-[14px] bg-bg-elev border border-line">
          <div
            className="w-9 h-9 rounded-[9px] text-white grid place-items-center font-display italic font-semibold text-[18px] shrink-0"
            style={{ background: r.color }}
          >
            {r.glyph}
          </div>
          <div className="flex-1 font-semibold text-[15px] text-ink">{r.name}</div>
          {r.special && (
            <span className="text-[10px] font-bold font-mono tracking-[0.04em] px-2 py-1 rounded-full bg-yellow text-ink">
              EXCLUSIVE
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function Mock({ f }: { f: Feature }) {
  const M = CheckmarkReport[f.mockKey];
  return M ? <M /> : <LmsMock />;
}

function Card({ f }: { f: Feature }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="ed-card relative rounded-[28px] pt-[30px] px-[30px] pb-[84px] mb-6"
      style={{ breakInside: "avoid", background: f.bg } as CSSProperties}
    >
      <div className="mb-[22px] pr-2">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-[11px] font-bold font-mono tracking-[0.07em] uppercase" style={{ color: f.accent }}>
            {f.name}
          </span>
          {f.id === "playback" && (
            <span
              className="text-[10px] font-bold font-mono tracking-[0.04em] px-[7px] py-[3px] rounded-[4px] text-white"
              style={{ background: f.accent }}
            >
              FLAGSHIP
            </span>
          )}
        </div>
        <h3 className="display text-[clamp(24px,2.4vw,30px)] leading-[1.12] text-ink m-0 text-balance">{f.title}</h3>
      </div>
      <div className="relative">
        <Mock f={f} />
      </div>
      {open && (
        <div className="ed-desc mt-[18px]">
          <p className="text-[15px] leading-[1.6] text-ink-soft m-0">{f.desc}</p>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Hide details" : "Show details"}
        className="ed-fab absolute bottom-[26px] right-[26px] w-[52px] h-[52px] rounded-full border-0 cursor-pointer text-white grid place-items-center"
        style={{ background: f.accent, boxShadow: "0 6px 18px -4px " + f.accent }}
      >
        <svg
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "transform .25s ease", transform: open ? "rotate(180deg)" : "none" }}
        >
          <path d="M5 9l7 7 7-7" />
        </svg>
      </button>
    </div>
  );
}

export function Features() {
  const byId: Record<string, Feature> = {};
  FEATURES.forEach((f) => (byId[f.id] = f));
  const colA = ["playback", "paste", "grade"].map((id) => byId[id]);
  const colB = ["transcription", "ai"].map((id) => byId[id]);

  return (
    <section id="features" className="bg-bg-tint">
      <div className="shell">
        <SectionHead
          eyebrow="Features"
          title="The whole writing process, in one <em style='font-family: var(--font-display); font-style: italic; color: var(--teal);'>report.</em>"
          sub="Five tools that work together, lead with the playback, and the rest fills in the picture."
        />
        <div className="ed-grid">
          <div className="ed-col">
            {colA.map((f) => (
              <Card key={f.id} f={f} />
            ))}
          </div>
          <div className="ed-col">
            {colB.map((f) => (
              <Card key={f.id} f={f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
