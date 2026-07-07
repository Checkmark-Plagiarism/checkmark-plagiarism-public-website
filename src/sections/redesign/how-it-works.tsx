"use client";

/* Tabbed 3-step "how it works" with animated SVG pipeline visuals and a
   sample-report modal.

   Changes in this revision:
   - Tabs are visually connected to the panel (see globals.css .hiw-tab rules).
   - The "STEP N OF 3" label is removed from the detail block.
   - Step 3 is a looping skeleton "report replay": a report page with colored
     flag lines and margin comment cards; a playback box pops in, the essay
     "types" back line by line, then the box fades and the loop restarts.
     No real text — all skeleton bars.
   - The sample-report modal now loads the app's public example report. */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect } from "react";
import { SectionHead } from "./section-head";

const h = React.createElement;
// Baked-in static sample report (public/sample-report.html) — no runtime
// dependency on the Laravel app.
const LIVE_REPORT_URL = "/sample-report.html";

// Brand-accurate file icons on a 0 0 48 48 grid.
function iconWord() {
  return [
    h("rect", { key: "pg", x: 13, y: 5, width: 30, height: 38, rx: 3, fill: "#fff", stroke: "#DCE3EE", strokeWidth: 1.2 }),
    h("rect", { key: "l1", x: 19, y: 12, width: 18, height: 2.4, rx: 1.2, fill: "#B7C4DA" }),
    h("rect", { key: "l2", x: 19, y: 17, width: 18, height: 2.4, rx: 1.2, fill: "#B7C4DA" }),
    h("rect", { key: "l3", x: 19, y: 22, width: 11, height: 2.4, rx: 1.2, fill: "#B7C4DA" }),
    h("rect", { key: "bd", x: 3, y: 26, width: 24, height: 17, rx: 3, fill: "#2B579A" }),
    h("text", { key: "w", x: 15, y: 39, textAnchor: "middle", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 700, fontSize: 13, fill: "#fff" }, "W"),
  ];
}
function iconDocs() {
  return [
    h("path", { key: "pg", d: "M15 4 H30 L40 14 V41 a2 2 0 0 1 -2 2 H15 a2 2 0 0 1 -2 -2 V6 a2 2 0 0 1 2 -2 Z", fill: "#4285F4" }),
    h("path", { key: "fold", d: "M30 4 L40 14 H30 Z", fill: "#A8C7FA" }),
    h("rect", { key: "l1", x: 19, y: 21, width: 16, height: 2.4, rx: 1.2, fill: "#fff" }),
    h("rect", { key: "l2", x: 19, y: 26, width: 16, height: 2.4, rx: 1.2, fill: "#fff" }),
    h("rect", { key: "l3", x: 19, y: 31, width: 16, height: 2.4, rx: 1.2, fill: "#fff" }),
    h("rect", { key: "l4", x: 19, y: 36, width: 10, height: 2.4, rx: 1.2, fill: "#fff" }),
  ];
}
function iconLms() {
  return [
    h("rect", { key: "box", x: 6, y: 12, width: 36, height: 24, rx: 4, fill: "var(--teal-soft)", stroke: "var(--teal)", strokeWidth: 2 }),
    h("rect", { key: "l1", x: 12, y: 20, width: 13, height: 2.6, rx: 1.3, fill: "var(--teal)" }),
    h("rect", { key: "l2", x: 12, y: 27, width: 20, height: 2.6, rx: 1.3, fill: "var(--teal)", opacity: 0.55 }),
    h("rect", { key: "cur", x: 27, y: 17, width: 2, height: 9, rx: 1, fill: "var(--teal)" }),
  ];
}

const ENTRIES = [
  { name: "Microsoft Word", sub: ".doc / .docx", icon: iconWord },
  { name: "Google Doc", sub: "Shared link", icon: iconDocs },
  { name: "LMS Textbox", sub: "Native capture", icon: iconLms },
];

const SCANS = [
  { label: "AI content", bg: "#FEE2E2", fg: "#B42318" },
  { label: "Transcription", bg: "#DBEAFE", fg: "#1849A9" },
  { label: "Plagiarism", bg: "#F3E8FF", fg: "#6941C6" },
  { label: "Copy / Paste", bg: "#FEF9C3", fg: "#854A0E" },
  { label: "Rubric grading", bg: "hsl(158 44% 91%)", fg: "hsl(160 52% 30%)" },
];

// Step 1: an infinite upload loop, pure CSS. Three cards cycle
// back -> mid -> front -> fly up into the cloud (hiw-cycle keyframes,
// staggered by -2.3s) so there are always more cards in the stack; a
// checkmark pops on the cloud as each card lands (hiw-check-loop).
function Step1Visual() {
  const cardStyle = (delay: string): any => ({
    position: "absolute",
    left: "50%",
    top: 0,
    width: 176,
    height: 236,
    marginLeft: -88,
    borderRadius: 22,
    background: "#ffffff",
    border: "1.5px solid rgba(20,40,80,0.10)",
    boxShadow: "0 14px 26px rgba(20,30,60,0.14)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
    animation: "hiw-cycle 6.9s ease-in-out " + delay + " infinite",
  });
  const skeleton = () =>
    h(
      "div",
      { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8 } },
      h("span", { style: { display: "block", width: 92, height: 8, borderRadius: 4, background: "var(--line-strong)", opacity: 0.6 } }),
      h("span", { style: { display: "block", width: 60, height: 8, borderRadius: 4, background: "var(--line-strong)", opacity: 0.45 } })
    );
  const card = (delay: string, icon: () => any[], key: string) =>
    h("div", { key, style: cardStyle(delay) }, h("svg", { width: 84, height: 84, viewBox: "0 0 48 48" }, icon()), skeleton());
  const puff = (l: number, t: number, w: number, hh: number, key: string) =>
    h("span", { key, style: { position: "absolute", left: l, top: t, width: w, height: hh, borderRadius: Math.min(w, hh) * 0.46, background: "#ffffff", display: "block" } });
  return h(
    "div",
    { className: "hiw-art" },
    h("div", { "aria-hidden": "true", style: { position: "absolute", inset: 0, background: "radial-gradient(70% 80% at 50% 34%, rgba(46,123,255,0.12), transparent 70%)" } }),
    card("-4.6s", iconDocs, "a"),
    card("-2.3s", iconWord, "b"),
    card("0s", iconLms, "c"),
    h(
      "div",
      { style: { position: "absolute", left: "50%", top: 30, width: 340, height: 104, marginLeft: -170, zIndex: 20, filter: "drop-shadow(0 16px 30px rgba(46,123,255,0.28)) drop-shadow(0 2px 6px rgba(20,40,80,0.10))" } },
      puff(0, 42, 110, 56, "p1"),
      puff(66, 8, 134, 88, "p2"),
      puff(158, 24, 122, 70, "p3"),
      puff(238, 44, 100, 52, "p4")
    ),
    h(
      "div",
      { style: { position: "absolute", left: "50%", top: 62, width: 46, height: 46, marginLeft: -23, zIndex: 25, borderRadius: 999, background: "var(--teal)", display: "grid", placeItems: "center", boxShadow: "0 10px 22px -8px rgba(46,123,255,0.55)", opacity: 0, animation: "hiw-check-loop 2.3s ease 2.2s infinite" } },
      h("svg", { width: 24, height: 24, viewBox: "0 0 24 24" }, h("path", { d: "M5 12.5 L10 17.5 L19 7.5", stroke: "#fff", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }))
    )
  );
}

// Step 2: document on the left, scan beam, five detections fanning out.
function Step2Visual() {
  const DOC = { x: 70, y: 92, w: 360, h: 276 };
  const LINES = [
    { y: 140, w: 248, c: null },
    { y: 168, w: 288, c: null },
    { y: 196, w: 200, c: "#FEE2E2" },
    { y: 224, w: 276, c: null },
    { y: 252, w: 232, c: "#F3E8FF" },
    { y: 280, w: 288, c: null },
    { y: 308, w: 176, c: "#DBEAFE" },
    { y: 336, w: 248, c: null },
  ];
  const node = { x: 540, y: 230 };
  const CHIPS = [
    { label: "AI content", bg: "#FEE2E2", fg: "#B42318", cy: 70 },
    { label: "Transcription", bg: "#DBEAFE", fg: "#1849A9", cy: 152 },
    { label: "Plagiarism", bg: "#F3E8FF", fg: "#6941C6", cy: 234 },
    { label: "Copy / Paste", bg: "#FEF9C3", fg: "#854A0E", cy: 316 },
    { label: "Rubric grading", bg: "hsl(158 44% 91%)", fg: "hsl(160 52% 30%)", cy: 398 },
  ];
  const lanePath = (cy: number) => "M" + node.x + " " + node.y + " C " + (node.x + 90) + " " + node.y + " " + (node.x + 90) + " " + cy + " " + (node.x + 180) + " " + cy;
  const pipe = "M" + (DOC.x + DOC.w) + " " + node.y + " L " + node.x + " " + node.y;
  const beamVals = "0 0; " + (DOC.w - 64) + " 0; 0 0";
  const dot = (d: string, begin: string, key: string) =>
    h("circle", { key, r: 5, fill: "hsl(218 100% 59%)", opacity: 0.9 }, h("animateMotion", { dur: "2.4s", begin, repeatCount: "indefinite", path: d, calcMode: "linear" }));
  return h(
    "div",
    { className: "hiw-art" },
    h("div", { "aria-hidden": "true", style: { position: "absolute", inset: 0, background: "radial-gradient(70% 80% at 55% 50%, rgba(46,123,255,0.10), transparent 70%)" } }),
    h(
      "svg",
      { viewBox: "0 0 1100 460", preserveAspectRatio: "xMidYMid meet", style: { position: "absolute", inset: 0, width: "100%", height: "100%" } },
      h(
        "defs",
        null,
        h("clipPath", { id: "hiwScanDoc" }, h("rect", { x: DOC.x, y: DOC.y, width: DOC.w, height: DOC.h, rx: 18 })),
        h("linearGradient", { id: "hiwBeam", x1: "0", y1: "0", x2: "1", y2: "0" }, h("stop", { offset: "0%", stopColor: "hsl(218 100% 59%)", stopOpacity: 0 }), h("stop", { offset: "100%", stopColor: "hsl(218 100% 59%)", stopOpacity: 0.32 }))
      ),
      h("rect", { x: DOC.x, y: DOC.y, width: DOC.w, height: DOC.h, rx: 18, fill: "var(--surface)", stroke: "var(--line-strong)", strokeWidth: 2 }),
      LINES.map((ln, i) => h("rect", { key: "ln" + i, x: DOC.x + 28, y: ln.y, width: ln.w, height: 9, rx: 4.5, fill: ln.c || "var(--line-strong)", opacity: ln.c ? 0.95 : 0.65 })),
      h(
        "g",
        { clipPath: "url(#hiwScanDoc)" },
        h("rect", { x: DOC.x, y: DOC.y, width: 64, height: DOC.h, fill: "url(#hiwBeam)" }, h("animateTransform", { attributeName: "transform", type: "translate", values: beamVals, dur: "3.4s", repeatCount: "indefinite", calcMode: "spline", keyTimes: "0;0.5;1", keySplines: "0.4 0 0.2 1;0.4 0 0.2 1" })),
        h("rect", { x: DOC.x + 60, y: DOC.y, width: 4, height: DOC.h, fill: "hsl(218 100% 59%)", opacity: 0.85 }, h("animateTransform", { attributeName: "transform", type: "translate", values: beamVals, dur: "3.4s", repeatCount: "indefinite", calcMode: "spline", keyTimes: "0;0.5;1", keySplines: "0.4 0 0.2 1;0.4 0 0.2 1" }))
      ),
      h("path", { d: pipe, fill: "none", stroke: "var(--teal)", strokeWidth: 13, strokeLinecap: "round" }),
      CHIPS.map((c) => h("path", { key: "lp" + c.label, d: lanePath(c.cy), fill: "none", stroke: "var(--line-strong)", strokeWidth: 9, strokeLinecap: "round", opacity: 0.5 })),
      dot(pipe, "0s", "dpipe"),
      CHIPS.map((c, i) => dot(lanePath(c.cy), i * 0.4 + "s", "do" + i)),
      h("circle", { cx: node.x, cy: node.y, r: 22, fill: "none", stroke: "var(--teal)", strokeWidth: 2, opacity: 0.4 }, h("animate", { attributeName: "r", values: "14;26;14", dur: "2.4s", repeatCount: "indefinite" }), h("animate", { attributeName: "opacity", values: "0.5;0;0.5", dur: "2.4s", repeatCount: "indefinite" })),
      h("circle", { cx: node.x, cy: node.y, r: 13, fill: "var(--teal)" }),
      h("text", { x: node.x, y: node.y + 44, textAnchor: "middle", fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.06em", fill: "var(--ink-mute)" }, "SCAN"),
      CHIPS.map((c) =>
        h(
          "g",
          { key: "chip" + c.label },
          h("rect", { x: node.x + 180, y: c.cy - 26, width: 300, height: 52, rx: 14, fill: c.bg }),
          h("circle", { cx: node.x + 208, cy: c.cy, r: 8, fill: c.fg }),
          h("text", { x: node.x + 230, y: c.cy + 6, fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 18, fill: c.fg }, c.label)
        )
      )
    )
  );
}

// Step 3: skeleton report replay. All skeleton bars — no real text.
// Loop: playback box pops in → lines "type" out (flag segments in scan
// colors, margin comments land as their flag appears) → box fades → restart.
const R_LINES: { segs: { w: number; c?: string }[] }[] = [
  { segs: [{ w: 88 }] },
  { segs: [{ w: 30 }, { w: 48, c: "#FEE2E2" }] },
  { segs: [{ w: 96 }] },
  { segs: [{ w: 56 }, { w: 28, c: "#F3E8FF" }] },
  { segs: [{ w: 90 }] },
  { segs: [{ w: 20, c: "#DBEAFE" }, { w: 64 }] },
  { segs: [{ w: 84 }] },
  { segs: [{ w: 40 }, { w: 32, c: "#FEF9C3" }] },
  { segs: [{ w: 62 }] },
];
const R_COMMENTS = [
  { line: 1, bg: "#FEE2E2", fg: "#B42318", top: 117 },
  { line: 3, bg: "#F3E8FF", fg: "#6941C6", top: 181 },
  { line: 5, bg: "#DBEAFE", fg: "#1849A9", top: 245 },
  { line: 7, bg: "#FEF9C3", fg: "#854A0E", top: 309 },
];

function Step3Visual() {
  const [p, setP] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setP(0.85); // static, fully-typed frame
      return;
    }
    const T = 9000;
    const start = performance.now();
    const id = setInterval(() => setP(((performance.now() - start) % T) / T), 80);
    return () => clearInterval(id);
  }, []);
  const cl = (v: number) => Math.max(0, Math.min(1, v));
  const pIn = cl(p / 0.06); // playback box entrance
  const tp = cl((p - 0.08) / 0.72); // typing progress
  const out = cl((p - 0.9) / 0.06); // everything fades before restart
  const n = R_LINES.length;
  const boxOp = pIn * (1 - out);

  const lines = R_LINES.map((ln, i) => {
    const lp = cl(tp * n - i);
    const total = ln.segs.reduce((a, s) => a + s.w, 0);
    let acc = 0;
    const segs = ln.segs.map((s, j) => {
      const cs = acc / total;
      acc += s.w;
      const sp = cl((lp - cs) / (acc / total - cs));
      return h("span", { key: j, style: { display: "block", width: s.w * sp + "%", height: 10, borderRadius: 5, background: s.c || "var(--line-strong)", opacity: s.c ? 0.95 : 0.6, flexShrink: 0 } });
    });
    const caret = lp > 0 && lp < 1 ? h("span", { key: "crt", style: { display: "block", width: 3, height: 14, borderRadius: 1.5, background: "var(--teal)", flexShrink: 0 } }) : null;
    return h("div", { key: "rl" + i, style: { display: "flex", alignItems: "center", gap: 6, height: 10, marginBottom: 22 } }, segs, caret);
  });

  return h(
    "div",
    { className: "hiw-art" },
    h("div", { "aria-hidden": "true", style: { position: "absolute", inset: 0, background: "radial-gradient(70% 80% at 45% 50%, rgba(46,123,255,0.10), transparent 70%)" } }),
    h(
      "div",
      { style: { position: "absolute", left: 44, top: 40, bottom: 40, width: "52%", background: "var(--bg-elev)", border: "1px solid var(--line-strong)", borderRadius: 18, padding: 26, boxSizing: "border-box", boxShadow: "0 18px 40px -24px rgba(20,40,80,0.25)" } },
      h("div", { style: { width: "42%", height: 14, borderRadius: 7, background: "var(--line-strong)", opacity: 0.75, marginBottom: 24 } }),
      h("div", { style: { opacity: 1 - out } }, lines)
    ),
    R_COMMENTS.map((c, k) => {
      const on = tp * n >= c.line + 0.95;
      const op = on ? 1 - out : 0;
      return h(
        "div",
        { key: "cm" + k },
        h("div", { style: { position: "absolute", left: "calc(52% + 46px)", top: c.top + 23, width: 28, height: 2, background: c.fg, opacity: op * 0.4, transition: "opacity .35s ease" } }),
        h(
          "div",
          { style: { position: "absolute", left: "calc(52% + 74px)", top: c.top, right: 44, maxWidth: 260, borderRadius: 12, background: c.bg, padding: "12px 14px", boxSizing: "border-box", opacity: op, transform: on ? "translateY(0)" : "translateY(8px)", transition: "opacity .35s ease, transform .35s ease", boxShadow: "0 10px 22px -14px rgba(20,40,80,0.28)" } },
          h("div", { style: { display: "flex", alignItems: "center", gap: 7, marginBottom: 9 } }, h("span", { style: { width: 8, height: 8, borderRadius: 999, background: c.fg } }), h("span", { style: { width: "38%", height: 6, borderRadius: 3, background: c.fg, opacity: 0.55 } })),
          h("div", { style: { width: "100%", height: 6, borderRadius: 3, background: c.fg, opacity: 0.28, marginBottom: 6 } }),
          h("div", { style: { width: "64%", height: 6, borderRadius: 3, background: c.fg, opacity: 0.28 } })
        )
      );
    }),
    h(
      "div",
      { style: { position: "absolute", left: "27%", bottom: 24, width: 320, borderRadius: 16, background: "var(--teal-deep)", padding: "16px 18px", boxSizing: "border-box", display: "flex", alignItems: "center", gap: 14, boxShadow: "0 26px 48px -18px rgba(10,30,70,0.5)", opacity: boxOp, transform: "translateY(" + (1 - pIn) * 16 + "px) scale(" + (0.9 + 0.1 * pIn) + ")", transformOrigin: "center bottom" } },
      h("span", { style: { width: 34, height: 34, borderRadius: 999, background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.25)", display: "grid", placeItems: "center", flexShrink: 0 } }, h("span", { style: { width: 0, height: 0, borderLeft: "9px solid #fff", borderTop: "6px solid transparent", borderBottom: "6px solid transparent", marginLeft: 3 } })),
      h("div", { style: { flex: 1, height: 6, borderRadius: 999, background: "rgba(255,255,255,0.22)", overflow: "hidden" } }, h("div", { style: { width: tp * 100 + "%", height: "100%", borderRadius: 999, background: "hsl(195 100% 70%)" } })),
      h("span", { style: { width: 34, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.35)", flexShrink: 0 } })
    )
  );
}

const STEPS: any[] = [
  {
    n: 1,
    title: "Input your text or file",
    visual: Step1Visual,
    blurb: "However the work is written, it all flows into one pipeline:",
    detail: () =>
      h(
        "div",
        { className: "flex flex-wrap gap-2.5" },
        ENTRIES.map((e) =>
          h(
            "div",
            { key: e.name, className: "flex items-center gap-3 px-3.5 py-[11px] rounded-[12px] bg-bg-elev border border-line" },
            h("div", { className: "w-9 h-9 rounded-[9px] bg-surface border border-line grid place-items-center shrink-0" }, h("svg", { width: 26, height: 26, viewBox: "0 0 48 48" }, e.icon())),
            h("div", { className: "leading-[1.25]" }, h("div", { className: "text-sm font-semibold text-ink" }, e.name), h("div", { className: "text-[11.5px] font-mono text-ink-mute" }, e.sub))
          )
        )
      ),
  },
  {
    n: 2,
    title: "Scan the writing",
    visual: Step2Visual,
    blurb: "Every submission is checked, all at once, for:",
    detail: () =>
      h(
        "div",
        { className: "flex flex-wrap gap-[9px]" },
        SCANS.map((s) => h("span", { key: s.label, className: "text-[13px] font-semibold px-3.5 py-[7px] rounded-full whitespace-nowrap", style: { background: s.bg, color: s.fg } }, s.label))
      ),
  },
  {
    n: 3,
    title: "View the report",
    visual: Step3Visual,
    slotId: "hiw-report",
    blurb: "Everything lands in one place, ready to act on.",
    detail: () => h("div", { className: "text-[15px] leading-[1.6] text-ink-soft max-w-[560px]" }, "Flagged passages, the writing playback, and per-category scores, side by side, so you can respond while it still makes a difference."),
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [reportOpen, setReportOpen] = useState(false);
  const openReport = () => setReportOpen(true);
  const closeReport = () => setReportOpen(false);

  useEffect(() => {
    if (!reportOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setReportOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [reportOpen]);

  const tabs = h(
    "div",
    { className: "hiw-tabs" },
    STEPS.map((s, i) => {
      const on = i === active;
      return h(
        "button",
        { key: s.n, type: "button", onClick: () => setActive(i), className: "hiw-tab" + (on ? " is-active" : "") },
        h("span", { className: "display text-[26px] leading-none", style: { color: on ? "var(--teal)" : "var(--ink-mute)" } }, "0" + s.n),
        h("span", { className: "text-[15px] font-semibold text-left", style: { color: on ? "var(--ink)" : "var(--ink-soft)" } }, s.title)
      );
    })
  );

  const step = STEPS[active];

  const detail = h(
    "div",
    { key: "d" + active, className: "hiw-detail" },
    h("p", { className: "text-[16px] leading-[1.6] text-ink-soft mt-0 mb-4 text-pretty" }, step.blurb),
    step.detail()
  );

  const picture = h(
    "div",
    { className: "hiw-picture" },
    STEPS.map((s, i) => {
      const isReport = s.slotId === "hiw-report";
      const overlay = isReport
        ? h(
            "button",
            { type: "button", className: "folder-btn folder-btn--overlay", onClick: openReport, "aria-label": "View sample report" },
            h("span", { className: "fb-paper", "aria-hidden": "true" }, h("span", { className: "fb-line" }), h("span", { className: "fb-line short" })),
            h("span", { className: "fb-folder" }, h("span", { className: "fb-tab" }), h("span", { className: "fb-label" }, "View Sample Report"))
          )
        : null;
      return h("div", { key: s.slotId || "step" + i, className: i === active ? "block relative" : "hidden" }, h(s.visual), overlay);
    })
  );

  return h(
    "section",
    { id: "how-it-works", className: "bg-bg-tint" },
    h(
      "div",
      { className: "shell" },
      h(SectionHead, {
        eyebrow: "How it works",
        title: "From draft to report in <em style='font-family: var(--font-display); font-style: italic; color: var(--teal);'>three steps.</em>",
        sub: "However a student writes, Checkmark reads it, scans it, and hands you a report you can act on, so feedback reaches students in time to help them grow.",
      }),
      tabs,
      h("div", { className: "hiw-panel" }, detail, picture)
    ),
    reportOpen
      ? h(
          "div",
          { className: "report-modal-overlay", onClick: (e: any) => { if (e.target === e.currentTarget) closeReport(); } },
          h(
            "div",
            { className: "report-modal", role: "dialog", "aria-modal": "true", "aria-label": "Sample report" },
            h(
              "div",
              { className: "report-modal-bar" },
              h("div", { className: "report-modal-title" }, h("span", { className: "report-modal-dot" }), "Sample report"),
              h("button", { type: "button", className: "report-modal-close", onClick: closeReport, "aria-label": "Close" }, "✕")
            ),
            h("iframe", { className: "report-modal-frame", src: LIVE_REPORT_URL, title: "Sample report", allowFullScreen: true })
          )
        )
      : null
  );
}

export default HowItWorks;
