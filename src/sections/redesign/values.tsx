import Image from "next/image";
import type { ComponentType, CSSProperties } from "react";
import { IconDollar, IconPlug, IconHeart, type IconProps } from "./icons";
import { SectionHead } from "./section-head";

// "What we believe" — a staggered cascade of 3 wide, overlapping blue boxes,
// each with copy on one side and a photo on the other. Ported from
// values-cascade.js; the prototype's <image-slot> is replaced with next/image.

type Value = {
  icon: ComponentType<IconProps>;
  eyebrow: string;
  title: string;
  body: string;
  tag: string;
  img: string;
  bg: string;
  align: "flex-start" | "flex-end";
};

const VALUES: Value[] = [
  {
    icon: IconDollar,
    eyebrow: "Accessibility",
    title: "Priced so every school can afford it.",
    body: "Real academic integrity tools shouldn’t be a luxury for well-funded districts. Our pricing fits a Title I budget and a private-school budget the same way, because students at both deserve a fair process.",
    tag: "Pricing that fits any budget",
    img: "/redesign/classroom.jpg",
    bg: "hsl(204 84% 53%)",
    align: "flex-start",
  },
  {
    icon: IconPlug,
    eyebrow: "Simplicity",
    title: "Deploys once. Then disappears.",
    body: "Drop it into Canvas, Google Classroom, or Buzz. No student downloads, no new logins, no Chrome extensions to police. Teachers see signals where they already grade, right inside the assignment.",
    tag: "Set up in under 10 minutes",
    img: "/redesign/lms-desk.png",
    bg: "hsl(216 82% 47%)",
    align: "flex-end",
  },
  {
    icon: IconHeart,
    eyebrow: "Productive struggle",
    title: "Protects the part that matters.",
    body: "Real growth happens when a student wrestles with a sentence. Checkmark exists to keep that struggle real, to make sure the work that arrives in your inbox is the work a student actually did.",
    tag: "Essay Playback · Keystroke analysis",
    img: "/redesign/student-test.png",
    bg: "hsl(224 70% 33%)",
    align: "flex-start",
  },
];

function Box({ v, i }: { v: Value; i: number }) {
  const Icon = v.icon;
  return (
    <div
      className="vc-box relative flex w-[82%] min-h-[208px] rounded-[26px] overflow-hidden shadow-[0_24px_48px_-22px_rgba(15,30,60,0.55)]"
      style={
        { alignSelf: v.align, marginTop: i === 0 ? 0 : -26, zIndex: i + 1, background: v.bg } as CSSProperties
      }
    >
      <div className="vc-text flex-1 pt-[34px] px-10 pb-[42px] text-white flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-[42px] h-[42px] rounded-[12px] bg-white/[0.18] grid place-items-center shrink-0">
            <Icon size={22} color="#fff" />
          </div>
          <span className="text-[11px] font-bold font-mono tracking-[0.08em] uppercase text-white/[0.82]">
            {v.eyebrow}
          </span>
        </div>
        <h3 className="display text-[clamp(24px,2.4vw,30px)] leading-[1.1] mb-3 text-white text-balance">
          {v.title}
        </h3>
        <p className="text-[15px] leading-[1.6] text-white/[0.88] mb-[18px] max-w-[520px]">{v.body}</p>
        <div className="mt-auto text-xs font-mono text-white/[0.78] pt-3.5 border-t border-dashed border-white/[0.28]">
          {v.tag}
        </div>
      </div>
      <div className="vc-photo w-[36%] shrink-0 relative bg-white/[0.08]">
        <Image src={v.img} alt="" fill sizes="(max-width: 760px) 100vw, 36vw" className="object-cover" />
      </div>
    </div>
  );
}

export function Values() {
  return (
    <section id="values" className="pt-14">
      <div className="shell">
        <SectionHead
          eyebrow="What we believe"
          title="Three things every <em style='font-family: var(--font-display); font-style: italic; color: var(--teal);'>school</em> should expect."
          sub="Checkmark isn't a stricter version of what's already on the market. It's built around a different idea of what these tools are for."
        />
        <div className="vc-stack">
          {VALUES.map((v, i) => (
            <Box key={i} v={v} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
