import type { CSSProperties } from "react";
import { IconCheck } from "./icons";

const BULLETS = [
  "Write in the assignment text box, or submit a Word or Google Doc",
  "No student account, no extension, no app",
  "Single SSO install for the whole district",
  "Data stays in your existing LMS gradebook",
];

type Lms = { name: string; tag: string; color: string; glyph: string };

const PLATFORMS: Lms[] = [
  { name: "Canvas", tag: "Most-used LMS in higher ed", color: "#D2492A", glyph: "C" },
  { name: "Google Classroom", tag: "Most-used in K–12", color: "#1A73E8", glyph: "G" },
  { name: "Buzz LMS", tag: "Native keystroke capture", color: "var(--teal)", glyph: "B" },
];

export function Lms() {
  return (
    <section id="integrations">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div>
            <div className="eyebrow mb-[18px]">
              <span className="dot" />
              Native LMS integration
            </div>
            <h2 className="display text-[clamp(34px,4.2vw,48px)] mb-[22px] leading-[1.05] text-balance">
              The only tool with <em>native Buzz LMS</em> keystroke capture.
            </h2>
            <p className="text-[17px] leading-[1.6] text-ink-soft mb-7">
              Most integrity tools redirect students to a third-party site. We don&apos;t. Checkmark
              reads the assignment text box where students already write, across Canvas, Google
              Classroom, and Buzz LMS, without breaking their focus or their flow of thinking.
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {BULLETS.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[15px] text-ink-soft">
                  <div className="w-[22px] h-[22px] rounded-full bg-teal-soft grid place-items-center shrink-0">
                    <IconCheck size={13} color="var(--teal)" stroke={2.4} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 px-5 py-[18px] rounded-[16px] bg-bg-tint border border-line">
              <div className="text-[11px] font-bold font-mono tracking-[0.07em] uppercase text-teal mb-2">
                No keystroke data? Still covered.
              </div>
              <p className="text-[14.5px] leading-[1.6] text-ink-soft m-0">
                Submit <strong className="text-ink">any file type</strong> to run the static AI
                detector on its own.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3.5">
            {PLATFORMS.map((l, i) => (
              <div
                key={i}
                className="px-6 py-5 rounded-[18px] bg-bg-elev flex items-center gap-[18px] relative"
                style={{ border: "1px solid var(--line)" } as CSSProperties}
              >
                <div
                  className="w-[52px] h-[52px] rounded-[14px] text-white grid place-items-center font-display italic font-semibold text-[26px] shrink-0"
                  style={{ background: l.color }}
                >
                  {l.glyph}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[17px]">{l.name}</div>
                  <div className="text-[13px] text-ink-mute">{l.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lms;
