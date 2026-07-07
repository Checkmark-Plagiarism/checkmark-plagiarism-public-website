/* src/sections/redesign/hero.tsx — UPDATED
   Starfield changes:
   - ~220 stars (was 70), slightly larger, truly random per refresh: generated in useEffect
     (server renders none, so no SSR/CSR mismatch, no seed needed).
   - Random twinkle duration/delay/peak per star; ~20% get a faint blue tint.
   - Occasional 4-pointed sparkle star that flashes for ~0.7s at a random spot
     every 1–4s, then vanishes (needs the ck-sparkle keyframe from
     globals.css.additions.css). */
"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { IconArrow, IconCheck } from "./icons";
import LivePlayback from "./live-playback";

type Star = {
  left: string;
  top: string;
  size: number;
  dur: string;
  delay: string;
  max: string;
  tint: boolean;
};

type Sparkle = { id: number; left: string; top: string; size: number };

function useStars(count = 220): Star[] {
  const [stars, setStars] = useState<Star[]>([]);
  useEffect(() => {
    const arr: Star[] = [];
    for (let i = 0; i < count; i++) {
      const big = Math.random() < 0.2;
      arr.push({
        left: (Math.random() * 100).toFixed(2) + "%",
        top: (Math.random() * 82).toFixed(2) + "%",
        size: big ? 3 + Math.round(Math.random()) : 2 + Math.round(Math.random()),
        dur: (2.2 + Math.random() * 4.5).toFixed(2) + "s",
        delay: (Math.random() * 6).toFixed(2) + "s",
        max: (0.35 + Math.random() * 0.6).toFixed(2),
        tint: Math.random() < 0.2,
      });
    }
    setStars(arr);
  }, [count]);
  return stars;
}

function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  useEffect(() => {
    let alive = true;
    let id = 0;
    let t: ReturnType<typeof setTimeout>;
    const queue = () => {
      t = setTimeout(() => {
        if (!alive) return;
        const sp: Sparkle = {
          id: ++id,
          left: (3 + Math.random() * 94).toFixed(2) + "%",
          top: (3 + Math.random() * 68).toFixed(2) + "%",
          size: 12 + Math.random() * 16,
        };
        setSparkles((s) => [...s, sp]);
        setTimeout(() => {
          if (alive) setSparkles((s) => s.filter((x) => x.id !== sp.id));
        }, 750);
        queue();
      }, 900 + Math.random() * 2800);
    };
    queue();
    return () => {
      alive = false;
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      {sparkles.map((sp) => (
        <span
          key={sp.id}
          style={{
            position: "absolute",
            left: sp.left,
            top: sp.top,
            width: sp.size,
            height: sp.size,
            animation: "ck-sparkle .7s ease-out both",
            filter: "drop-shadow(0 0 6px rgba(255,255,255,.8))",
            pointerEvents: "none",
          }}
        >
          <svg viewBox="0 0 24 24" width="100%" height="100%">
            <path
              d="M12 0C13.2 7.6 16.4 10.8 24 12C16.4 13.2 13.2 16.4 12 24C10.8 16.4 7.6 13.2 0 12C7.6 10.8 10.8 7.6 12 0Z"
              fill="#fff"
            />
          </svg>
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const stars = useStars();

  return (
    <section
      className="relative overflow-hidden pt-32 pb-[100px] text-white"
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
                background: st.tint ? "rgba(206,228,255,0.95)" : "#fff",
                "--tw-dur": st.dur,
                "--tw-delay": st.delay,
                "--tw-max": st.max,
              } as CSSProperties
            }
          />
        ))}
        <Sparkles />
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
              <a href="/contact" className="btn btn-ghost btn-ghost-dark text-white border-white/30">
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
