import type { CSSProperties, ComponentType } from "react";
import { IconShield, IconClipboard, IconKeyboard, type IconProps } from "./icons";

// Deterministic drifting clouds for the Problem section background (seeded RNG,
// so server and client agree). Ported from all.js buildProbClouds().
function buildProbClouds() {
  let s = 7;
  const r = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  const variants = ["", "c3", "c6"];
  const spots = [
    { top: "15%", op: 0.34, scl: 1.15, blur: 5 },
    { top: "52%", op: 0.6, scl: 1.3, blur: 3 },
    { top: "80%", op: 0.4, scl: 0.85, blur: 5 },
  ];
  return spots.map((sp, i) => {
    const du = (84 + r() * 44).toFixed(0);
    const sign = r() < 0.5 ? -1 : 1;
    const style: CSSProperties = {
      top: sp.top,
      opacity: sp.op,
      transform: `scale(${(sign * sp.scl).toFixed(2)},${sp.scl.toFixed(2)})`,
      filter: `blur(${sp.blur}px)`,
      animationDuration: du + "s",
      animationDelay: (-r() * Number(du)).toFixed(1) + "s",
      animationDirection: r() < 0.5 ? "reverse" : "normal",
    };
    return (
      <div key={"pc" + i} className={"cloud" + (variants[i] ? " " + variants[i] : "")} style={style} />
    );
  });
}

type ProblemCard = {
  head: string;
  icon: ComponentType<IconProps>;
  label: string;
  accent: string;
  tile: string;
  bg: string;
  line: string;
};

const CARDS: ProblemCard[] = [
  {
    head: "False accusations",
    icon: IconShield,
    label:
      "Teachers report that current AI detectors have wrongly flagged honest students, with no evidence to defend the call.",
    accent: "hsl(6 52% 71%)",
    tile: "hsla(6, 52%, 71%, 0.15)",
    bg: "hsl(353 26% 28%)",
    line: "hsla(6, 52%, 71%, 0.22)",
  },
  {
    head: "Gaming the score",
    icon: IconClipboard,
    label:
      "Students rewrite whole essays just to dodge a detection score, spending effort to beat the tool instead of learning.",
    accent: "hsl(40 56% 64%)",
    tile: "hsla(40, 56%, 64%, 0.15)",
    bg: "hsl(34 32% 26%)",
    line: "hsla(40, 56%, 64%, 0.22)",
  },
  {
    head: "Evidence, not guesses",
    icon: IconKeyboard,
    label:
      "Other detectors hand you a random percentage and leave you exposed to false accusations. We give you the actual writing evidence, so you can be fully confident if a case ever has to be made.",
    accent: "hsl(270 46% 80%)",
    tile: "hsla(270, 46%, 80%, 0.15)",
    bg: "hsl(269 24% 31%)",
    line: "hsla(270, 46%, 80%, 0.22)",
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
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {buildProbClouds()}
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
                <div className="relative text-[17px] leading-[1.55] text-[rgba(251,247,239,0.82)]">
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
