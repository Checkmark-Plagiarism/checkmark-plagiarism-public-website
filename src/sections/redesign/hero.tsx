"use client";

import { useMemo, type CSSProperties } from "react";
import { IconArrow, IconCheck } from "./icons";
import LivePlayback from "./live-playback";

type Star = {
  left: string;
  top: string;
  size: number;
  dur: string;
  delay: string;
  max: string;
};

// Deterministic seeded starfield (matches the prototype so SSR/CSR agree).
function useStars(): Star[] {
  return useMemo(() => {
    let seed = 1337;
    const rand = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    };
    const arr: Star[] = [];
    for (let i = 0; i < 70; i++) {
      const size = 1 + Math.round(rand() * 2);
      arr.push({
        left: (rand() * 100).toFixed(2) + "%",
        top: (rand() * 78).toFixed(2) + "%",
        size,
        dur: (2.6 + rand() * 4).toFixed(2) + "s",
        delay: (rand() * 5).toFixed(2) + "s",
        max: (0.45 + rand() * 0.55).toFixed(2),
      });
    }
    return arr;
  }, []);
}

export function Hero() {
  const stars = useStars();

  return (
    <section
      className="relative overflow-hidden pt-16 pb-[100px] text-white"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--brand-900)) 0%, hsl(var(--brand-900)) 75%, var(--teal-deep) 100%)",
      }}
    >
      <div className="starfield" aria-hidden="true">
        {stars.map((st, i) => (
          <span
            key={i}
            className="star"
            style={
              {
                left: st.left,
                top: st.top,
                width: st.size,
                height: st.size,
                "--tw-dur": st.dur,
                "--tw-delay": st.delay,
                "--tw-max": st.max,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="absolute top-20 right-10 w-[360px] h-[360px] rounded-full bg-accent-cyan blur-[80px] opacity-[0.18] pointer-events-none" />

      <div className="shell relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-16 items-center">
          {/* Left column */}
          <div>
            <div className="chip mb-7 bg-white/[0.08] border border-white/[0.14] text-white/85">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              Reimagined Plagiarism Forensics
            </div>

            <h1 className="display mb-7 text-white text-[clamp(44px,5.6vw,76px)] leading-[1.05] text-balance">
              See the writer,
              <br />
              build the <em>thinker.</em>
            </h1>

            <p className="text-[19px] leading-[1.55] text-white/[0.78] max-w-[520px] mb-9 text-pretty">
              We give teachers{" "}
              <strong className="text-white font-bold">the writing process itself</strong>: every
              keystroke, every revision, every moment a student paused to think. Plus autograding
              designed by teachers, so feedback reaches students while it can still help them grow.
            </p>

            <div className="flex gap-3 flex-wrap mb-8">
              <a
                href="/demo"
                className="btn btn-coral bg-brand-500"
                style={{ boxShadow: "0 6px 20px -4px hsl(218 100% 59% / 0.5)" }}
              >
                Try Yourself <IconArrow size={16} />
              </a>
              <a href="/contact" className="btn btn-ghost text-white border-white/30">
                Contact Us <IconArrow size={14} />
              </a>
            </div>

            <div className="flex items-center gap-[18px] text-[13px] text-white/[0.65] flex-wrap">
              <div className="flex items-center gap-1.5">
                <IconCheck size={14} color="var(--accent-cyan)" /> No student logins
              </div>
              <div className="flex items-center gap-1.5">
                <IconCheck size={14} color="var(--accent-cyan)" /> Lives in your LMS
              </div>
              <div className="flex items-center gap-1.5">
                <IconCheck size={14} color="var(--accent-cyan)" /> 9-min setup
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="relative z-[1]">
              <LivePlayback />
            </div>
            <div className="absolute -top-7 right-4 px-3.5 py-2 bg-accent-cyan text-brand-900 rounded-[12px] shadow z-[2] inline-flex items-baseline gap-2 whitespace-nowrap font-bold rotate-2">
              <span className="text-sm">Essay Playback™</span>
              <span className="opacity-70 text-[10px] font-mono tracking-[0.04em] uppercase font-semibold">
                live · try it
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
