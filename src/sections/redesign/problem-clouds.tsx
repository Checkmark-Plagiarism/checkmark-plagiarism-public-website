/* src/sections/redesign/problem-clouds.tsx
   Client-only replacement for buildProbClouds() in problem.tsx.
   Clouds are random squircle clusters (see cloud-puffs.ts), generated after
   mount so every refresh produces a different sky — and each cloud gets a
   brand-new random shape every time its drift animation loops, so no cloud
   ever crosses the screen twice the same. */
"use client";

import { useEffect, useState } from "react";
import { randomCloudSpec, type CloudSpec } from "./cloud-puffs";

const SPOTS = [
  { top: "15%", op: 0.34, scl: 1.15, blur: 4 },
  { top: "52%", op: 0.6, scl: 1.3, blur: 2.5 },
  { top: "80%", op: 0.4, scl: 0.85, blur: 4 },
];

type Drift = { dur: number; delay: string; dir: "reverse" | "normal"; sign: number };

export function ProblemClouds() {
  const [specs, setSpecs] = useState<CloudSpec[] | null>(null);
  const [drifts, setDrifts] = useState<Drift[] | null>(null);

  useEffect(() => {
    setSpecs(SPOTS.map(() => randomCloudSpec()));
    setDrifts(
      SPOTS.map(() => {
        const dur = 84 + Math.random() * 44;
        return {
          dur,
          delay: (-Math.random() * dur).toFixed(1) + "s",
          dir: Math.random() < 0.5 ? "reverse" : "normal",
          sign: Math.random() < 0.5 ? -1 : 1,
        };
      })
    );
  }, []);

  if (!specs || !drifts) return null;

  return (
    <>
      {SPOTS.map((sp, i) => {
        const spec = specs[i];
        const d = drifts[i];
        return (
          <div
            key={"pc" + i}
            onAnimationIteration={() =>
              setSpecs((prev) => prev && prev.map((s, j) => (j === i ? randomCloudSpec() : s)))
            }
            style={{
              position: "absolute",
              top: sp.top,
              left: "-900px",
              willChange: "left",
              animation: `ck-cloud-drift ${d.dur.toFixed(0)}s linear infinite`,
              animationDelay: d.delay,
              animationDirection: d.dir,
            }}
          >
            <div
              style={{
                position: "relative",
                width: spec.w,
                height: spec.h,
                transformOrigin: "left center",
                transform: `scale(${(d.sign * sp.scl).toFixed(2)},${sp.scl.toFixed(2)})`,
                filter: `blur(${sp.blur}px)`,
                opacity: sp.op,
              }}
            >
              {spec.puffs.map((p, j) => (
                <div
                  key={j}
                  style={{
                    position: "absolute",
                    left: p.x,
                    top: p.y,
                    width: p.w,
                    height: p.h,
                    borderRadius: Math.min(p.w, p.h) * 0.28,
                    background: "rgba(255,255,255,0.88)",
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProblemClouds;
