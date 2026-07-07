/* src/sections/redesign/cloud-puffs.ts
   Random squircle-cloud generator. One box per X step: each step advances X
   by a RANDOM amount and goes to EITHER the +Y set or the −Y set — never both
   at the same X. Every box crosses the baseline band, so the cloud is always
   connected. Each set's height envelope rises stepwise to a single peak then
   steps back down (thick middle, thin ends). If a step would open a
   horizontal gap against the previous box of the SAME set, the new box is
   widened back to cover it — so no C/O/U notches. +Y gets more steps and
   amplitude than −Y (top-heavy clouds, flatter belly).

   Uses unseeded Math.random — CLIENT-ONLY: call after mount (useEffect) or
   from imperative DOM code so the server never renders one. Every refresh
   gives a new sky, and createCloudElement regenerates its shape on every
   animation loop, so no cloud ever crosses the screen twice the same. */

export type Puff = { x: number; y: number; w: number; h: number };
export type CloudSpec = { w: number; h: number; puffs: Puff[] };

function unimodal(count: number, start: number, step: number, minV: number, maxV: number): number[] {
  const peak = count < 3 ? Math.floor(count / 2) : 1 + Math.floor(Math.random() * (count - 2));
  const vals: number[] = [];
  let v = start;
  for (let i = 0; i < count; i++) {
    vals.push(v);
    if (i < peak) v = Math.min(maxV, v + step * (0.6 + Math.random()));
    else v = Math.max(minV, v - step * (0.6 + Math.random()));
  }
  return vals;
}

export function randomCloudSpec(): CloudSpec {
  const U = 36 + Math.random() * 10; // one step unit, px
  const pad = U * 0.3; // how far every box crosses the baseline
  const n = 7 + Math.floor(Math.random() * 5);
  const nUp = Math.ceil(n * (0.55 + Math.random() * 0.15));
  const nDn = Math.max(n - nUp, 1);
  const upVals = unimodal(nUp, 0.7 + Math.random() * 0.4, 0.5, 0.6, 2.3);
  const dnVals = unimodal(nDn, 0.35 + Math.random() * 0.2, 0.3, 0.35, 1.1);

  // Random interleave of +Y / −Y steps
  const order: number[] = [];
  for (let i = 0; i < nUp; i++) order.push(1);
  for (let i = 0; i < nDn; i++) order.push(0);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = order[i];
    order[i] = order[j];
    order[j] = t;
  }

  const rects: Puff[] = [];
  let x = 0,
    iu = 0,
    id = 0;
  let lastUpR = -1e9,
    lastDnR = -1e9;
  let prevW = 0,
    prevH = 0;
  for (let s = 0; s < order.length; s++) {
    const isUp = order[s] === 1;
    const v = isUp ? upVals[iu++] : dnVals[id++];
    const hh = v * U + pad;
    // Width is tied to height (aspect 0.8-1.5), so no long slabs and no tall
    // bar-graph columns — every box stays squircle-ish.
    let w = hh * (0.8 + Math.random() * 0.7);
    // Avoid two similar-sized boxes back to back: nudge the width if this box
    // is within ~18% of the previous one in both dimensions.
    if (prevW && Math.abs(w - prevW) / prevW < 0.18 && Math.abs(hh - prevH) / prevH < 0.18) {
      w *= Math.random() < 0.5 ? 0.72 : 1.3;
    }
    w = Math.max(34, Math.min(w, 150));
    // Cover any horizontal gap vs the previous box of the SAME set by
    // shifting back (not stretching — keeps the aspect ratio bounded).
    let left = x;
    const lastR = isUp ? lastUpR : lastDnR;
    if (lastR > -1e8 && left > lastR - 12) left = lastR - 12;
    const y = isUp ? -v * U : -pad;
    rects.push({ x: left, y, w, h: hh });
    if (isUp) lastUpR = left + w;
    else lastDnR = left + w;
    prevW = w;
    prevH = hh;
    x = Math.max(x + 10, left + w * (0.55 + Math.random() * 0.35)); // random +X advance
  }

  let minX = 1e9,
    minY = 1e9,
    maxX = -1e9,
    maxY = -1e9;
  for (const r of rects) {
    minX = Math.min(minX, r.x);
    minY = Math.min(minY, r.y);
    maxX = Math.max(maxX, r.x + r.w);
    maxY = Math.max(maxY, r.y + r.h);
  }
  const puffs = rects.map((r) => ({ x: r.x - minX, y: r.y - minY, w: r.w, h: r.h }));
  return { w: maxX - minX, h: maxY - minY, puffs };
}

/* Rounded-rectangle puffs at alpha 0.88 inside an opacity-wrapped group:
   2 overlapping puffs composite to 0.986 (~1.12x one puff), 3 to 0.998 —
   a very subtle brightening on overlap instead of alpha doubling. */
export function fillCloudInner(inner: HTMLDivElement, spec: CloudSpec): void {
  inner.textContent = "";
  inner.style.width = spec.w + "px";
  inner.style.height = spec.h + "px";
  for (const p of spec.puffs) {
    const puff = document.createElement("div");
    puff.style.position = "absolute";
    puff.style.left = p.x.toFixed(1) + "px";
    puff.style.top = p.y.toFixed(1) + "px";
    puff.style.width = p.w.toFixed(1) + "px";
    puff.style.height = p.h.toFixed(1) + "px";
    puff.style.borderRadius = (Math.min(p.w, p.h) * 0.28).toFixed(0) + "px";
    puff.style.background = "rgba(255,255,255,0.88)";
    inner.appendChild(puff);
  }
}

/** Imperative builder used by <Atmosphere/>. Reuses the existing
    ck-cloud-drift keyframe (animates `left`). The shape regenerates on every
    animation loop, so each pass across the screen is a unique cloud. */
export function createCloudElement(o: {
  topPx: number;
  scale: number;
  flip: boolean;
  blur: number;
  opacity: number;
  durS: number;
  reverse: boolean;
}): HTMLDivElement {
  const wrap = document.createElement("div");
  wrap.style.position = "absolute";
  wrap.style.top = o.topPx + "px";
  wrap.style.left = "-900px";
  wrap.style.willChange = "left";
  wrap.style.animation = `ck-cloud-drift ${o.durS.toFixed(0)}s linear infinite`;
  wrap.style.animationDelay = (-Math.random() * o.durS).toFixed(1) + "s";
  if (o.reverse) wrap.style.animationDirection = "reverse";

  const inner = document.createElement("div");
  inner.style.position = "relative";
  inner.style.transformOrigin = "left center";
  inner.style.transform = `scale(${(o.flip ? -o.scale : o.scale).toFixed(2)},${o.scale.toFixed(2)})`;
  inner.style.filter = `blur(${o.blur.toFixed(1)}px)`;
  inner.style.opacity = o.opacity.toFixed(2);

  fillCloudInner(inner, randomCloudSpec());
  wrap.addEventListener("animationiteration", () => fillCloudInner(inner, randomCloudSpec()));
  wrap.appendChild(inner);
  return wrap;
}
