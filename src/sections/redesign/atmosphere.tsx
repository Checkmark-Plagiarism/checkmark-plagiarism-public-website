/* src/sections/redesign/atmosphere.tsx — UPDATED
   Same as before except placeClouds(): clouds are now random squircle-puff
   clusters built by createCloudElement() (cloud-puffs.ts) instead of the old
   box-shadow `.cloud` variants, which collapsed into fuzzy rectangles under
   blur/scale. Every refresh generates a different cloud pattern. */
"use client";

import { useEffect, useRef } from "react";
import { createCloudElement } from "./cloud-puffs";

function starField(n: number, w: number, h: number, rMin: number, rMax: number, color: string) {
  const p: string[] = [];
  for (let i = 0; i < n; i++) {
    const x = (Math.random() * w).toFixed(0);
    const y = (Math.random() * h).toFixed(0);
    const r = (rMin + Math.random() * (rMax - rMin)).toFixed(2);
    p.push(`radial-gradient(${r}px ${r}px at ${x}px ${y}px, ${color}, transparent)`);
  }
  return p.join(",");
}

export function Atmosphere() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const atmo = ref.current;
    const root = atmo?.parentElement; // .ck-redesign
    if (!atmo || !root) return;

    const q = <T extends Element>(sel: string) => atmo.querySelector(sel) as T | null;

    const s1 = q<HTMLElement>(".atmo-star-layer.s1");
    const s2 = q<HTMLElement>(".atmo-star-layer.s2");
    if (s1 && !s1.style.backgroundImage) {
      s1.style.backgroundImage = starField(64, 400, 520, 0.8, 1.7, "rgba(255,255,255,0.92)");
      s1.style.backgroundSize = "400px 520px";
    }
    if (s2 && !s2.style.backgroundImage) {
      s2.style.backgroundImage = starField(24, 520, 640, 1.4, 2.5, "rgba(206,228,255,0.95)");
      s2.style.backgroundSize = "520px 640px";
    }

    const cloudsWrap = q<HTMLElement>(".atmo-clouds");

    function placeClouds(pT: number, sT: number, fT: number) {
      if (!cloudsWrap || cloudsWrap.dataset.built) return;
      cloudsWrap.dataset.built = "1";
      const zoneTop = pT + (sT - pT) * 0.5;
      let zoneBot = fT - 360;
      if (zoneBot < zoneTop + 500) zoneBot = zoneTop + 500;
      const N = 24;
      for (let i = 0; i < N; i++) {
        const t = zoneTop + (i / (N - 1)) * (zoneBot - zoneTop) + (Math.random() * 180 - 90);
        const overDark = t < sT - 20;
        let depth = Math.random();
        if (overDark) depth *= 0.45;
        let op = 0.3 + depth * 0.55;
        if (overDark) op *= 0.6;
        const c = createCloudElement({
          topPx: Math.round(t),
          scale: 0.38 + depth * 1.25,
          flip: Math.random() < 0.5,
          blur: 1.5 + (1 - depth) * 6,
          opacity: op,
          durS: 110 - depth * 28 + Math.random() * 44,
          reverse: Math.random() < 0.5,
        });
        cloudsWrap.appendChild(c);
      }
    }

    function relayout() {
      const secs = root!.querySelectorAll(":scope > section, :scope > footer");
      if (secs.length < 4) return;
      const H = Math.max(root!.scrollHeight, root!.offsetHeight);
      atmo!.style.height = H + "px";

      const problem = secs[1] as HTMLElement;
      const sky = secs[2] as HTMLElement;
      const footer = secs[secs.length - 1] as HTMLElement;
      const pT = problem.offsetTop;
      const sT = sky.offsetTop;
      const fT = footer.offsetTop;

      const stops: [string, number][] = [
        ["hsl(234 64% 5%)", 0],
        ["hsl(230 60% 8%)", pT * 0.5],
        ["hsl(222 66% 13%)", pT],
        ["hsl(219 68% 17%)", pT + (sT - pT) * 0.45],
        ["hsl(213 74% 38%)", sT - 320],
        ["hsl(209 82% 55%)", sT - 60],
        ["hsl(207 82% 66%)", sT + 120],
        ["hsl(206 74% 73%)", sT + 360],
        ["hsl(205 66% 79%)", sT + (fT - sT) * 0.3],
        ["hsl(204 58% 85%)", sT + (fT - sT) * 0.52],
        ["hsl(203 52% 90%)", sT + (fT - sT) * 0.72],
        ["hsl(202 48% 94%)", sT + (fT - sT) * 0.88],
        ["hsl(201 46% 95%)", fT - 220],
        ["hsl(205 90% 58%)", fT - 30],
        ["hsl(212 88% 30%)", fT + 70],
        ["hsl(216 92% 12%)", H],
      ];
      const grad = q<HTMLElement>(".atmo-grad");
      if (grad) grad.style.backgroundImage = "linear-gradient(180deg," + stops.map((s) => s[0] + " " + Math.round(s[1]) + "px").join(",") + ")";

      const stars = q<HTMLElement>(".atmo-stars");
      if (stars) stars.style.height = Math.round(pT + (sT - pT) * 0.42) + "px";

      placeClouds(pT, sT, fT);

      const ocean = q<HTMLElement>(".atmo-ocean");
      if (ocean) {
        ocean.style.top = Math.round(fT - 200) + "px";
        ocean.style.height = Math.round(H - (fT - 200)) + "px";
      }
    }

    relayout();
    const t1 = setTimeout(relayout, 200);
    const t2 = setTimeout(relayout, 800);
    let ro: ResizeObserver | undefined;
    try {
      ro = new ResizeObserver(() => relayout());
      ro.observe(root);
    } catch {
      /* no-op */
    }
    window.addEventListener("resize", relayout);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      ro?.disconnect();
      window.removeEventListener("resize", relayout);
    };
  }, []);

  return (
    <div className="atmosphere" aria-hidden="true" ref={ref}>
      <div className="atmo-grad" />
      <div className="atmo-stars">
        <div className="atmo-star-layer s1" />
        <div className="atmo-star-layer s2" />
      </div>
      <div className="atmo-clouds" />
      <div className="atmo-ocean">
        <div className="glitter" />
        <div className="wave" />
        <div className="wave w2" />
      </div>
    </div>
  );
}

export default Atmosphere;
