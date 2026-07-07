/* src/sections/redesign/problem.tsx — UPDATED
   - buildProbClouds() removed; clouds come from <ProblemClouds /> (random
     squircle-puff clusters, client-only).
   - CARDS palette lightened to pastels: light backgrounds, deeper accent
     text/icons, dark body copy. New `text` field per card. */
import type { ComponentType } from "react";
import { IconShield, IconClipboard, IconKeyboard, type IconProps } from "./icons";
import { ProblemClouds } from "./problem-clouds";

type ProblemCard = {
  head: string;
  icon: ComponentType<IconProps>;
  label: string;
  accent: string;
  tile: string;
  bg: string;
  line: string;
  text: string;
};

const CARDS: ProblemCard[] = [
  {
    head: "False accusations",
    icon: IconShield,
    label:
      "Teachers report that current AI detectors have wrongly flagged honest students, with no evidence to defend the call.",
    accent: "hsl(6 55% 42%)",
    tile: "hsla(6, 55%, 50%, 0.13)",
    bg: "hsl(6 72% 91%)",
    line: "hsla(6, 52%, 45%, 0.22)",
    text: "hsla(6, 30%, 24%, 0.85)",
  },
  {
    head: "Gaming the score",
    icon: IconClipboard,
    label:
      "Students rewrite whole essays just to dodge a detection score, spending effort to beat the tool instead of learning.",
    accent: "hsl(36 62% 36%)",
    tile: "hsla(38, 60%, 45%, 0.14)",
    bg: "hsl(40 78% 89%)",
    line: "hsla(38, 56%, 42%, 0.22)",
    text: "hsla(34, 30%, 22%, 0.85)",
  },
  {
    head: "Evidence, not guesses",
    icon: IconKeyboard,
    label:
      "Other detectors hand you a random percentage and leave you exposed to false accusations. We give you the actual writing evidence, so you can be fully confident if a case ever has to be made.",
    accent: "hsl(269 42% 44%)",
    tile: "hsla(270, 45%, 50%, 0.12)",
    bg: "hsl(270 55% 93%)",
    line: "hsla(270, 40%, 50%, 0.22)",
    text: "hsla(269, 25%, 26%, 0.85)",
  },
];

export function Problem() {
  return (
    <section
      className="relative -mt-px pb-[90px] text-bg"
      style={{
        background:
          "linear-gradient(180deg, var(--teal-deep) 0%, var(--teal) 420px, var(--teal) 40%, transparent 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="prob-clouds absolute inset-0 overflow-hidden pointer-events-none z-0"
      >
        <ProblemClouds />
      </div>

      <div className="shell-narrow text-center relative z-[1]">
        <div className="eyebrow mb-[22px] text-[rgba(251,247,239,0.6)]">
          <span className="dot bg-yellow" />
          Why detection alone is failing
        </div>

        <h2 className="display mb-7 text-bg text-balance text-[clamp(34px,4.6vw,52px)]">
          A score isn&apos;t <em className="text-yellow">evidence.</em>
          <br />
          And teachers know it.
        </h2>

        <p className="text-[19px] leading-[1.6] text-[rgba(251,247,239,0.82)] max-w-[680px] mx-auto mb-12">
          Telling a 16-year-old &quot;the AI thinks 73% of this is AI&quot; isn&apos;t a conversation
          a teacher can win, or one they should have to. Real evidence is watching the essay come
          into being: the dead-end sentences, the rewrites, the long pause before the right word, the
          very moments where real learning takes hold.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 text-left">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="relative p-[34px] rounded-[24px] text-left overflow-hidden"
                style={{ background: card.bg, border: "1px solid " + card.line }}
              >
                <div
                  className="relative w-[50px] h-[50px] rounded-[14px] grid place-items-center mb-5"
                  style={{ background: card.tile }}
                >
                  <Icon size={25} color={card.accent} />
                </div>
                <div
                  className="display relative text-[31px] leading-[1.12] mb-3.5"
                  style={{ color: card.accent }}
                >
                  {card.head}
                </div>
                <div
                  className="relative text-[17px] leading-[1.55]"
                  style={{ color: card.text }}
                >
                  {card.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Problem;
