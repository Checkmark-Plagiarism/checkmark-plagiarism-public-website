"use client";

/* Tabbed 3-step "how it works" with animated SVG pipeline visuals and a
   sample-report modal. Ported from how-it-works.js; the prototype's step-3
   image-slot is replaced with a report placeholder + the folder button. */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect, useRef } from "react";
import { SectionHead } from "./section-head";

const h = React.createElement;
const LIVE_REPORT_URL = "https://teach.checkmarkplagiarism.com/demo";

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

// Step 1: an auto-flipping carousel deck feeding the Checkmark pipeline.
function Step1Visual() {
  const CAROUSEL = [
    { name: "Google Doc", sub: "Shared link", icon: iconDocs },
    { name: "Microsoft Word", sub: ".doc / .docx", icon: iconWord },
    { name: "LMS Text Box", sub: "Native capture", icon: iconLms },
  ];
  const [idx, setIdx] = useState(0);
  const [shuffling, setShuffling] = useState<number | null>(null);
  const prevRef = useRef(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % CAROUSEL.length), 2800);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const leaving = prevRef.current;
    prevRef.current = idx;
    if (leaving === idx) return;
    setShuffling(leaving);
    const t = setTimeout(() => setShuffling(null), 520);
    return () => clearTimeout(t);
  }, [idx]);
  const line = "M336 230 L 894 230";
  const dot = (begin: string, key: string) =>
    h("circle", { key, r: 6.5, fill: "var(--teal)", opacity: 0.9 }, h("animateMotion", { dur: "1.9s", begin, repeatCount: "indefinite", path: line, calcMode: "linear" }));
  const L = CAROUSEL.length;
  let deck = CAROUSEL.map((c, i) => ({ c, i, depth: (i - idx + L) % L })).sort((a, b) => b.depth - a.depth);
  if (shuffling != null) {
    deck = deck.filter((x) => x.i !== shuffling).concat(deck.filter((x) => x.i === shuffling));
  }
  const card = (item: any) => {
    const d = item.depth;
    const tx = -d * 30,
      ty = -d * 24,
      sc = 1 - d * 0.085;
    const isShuffling = item.i === shuffling;
    const fill = d === 0 ? "#ffffff" : d === 1 ? "#EEF3FA" : "#DFE7F2";
    const shadow =
      d === 0 ? "drop-shadow(0 18px 30px rgba(20,30,60,0.18))" : d === 1 ? "drop-shadow(0 11px 20px rgba(20,30,60,0.12))" : "drop-shadow(0 6px 12px rgba(20,30,60,0.08))";
    return h(
      "g",
      {
        key: "card" + item.i,
        className: "hiw-deck-card" + (isShuffling ? " hiw-shuffle" : ""),
        style: { transformBox: "fill-box", transformOrigin: "center center", transform: "translate(" + tx + "px, " + ty + "px) scale(" + sc + ")", filter: isShuffling ? "drop-shadow(0 22px 34px rgba(20,30,60,0.22))" : shadow },
      },
      h("rect", { x: 108, y: 70, width: 224, height: 320, rx: 26, fill, stroke: "rgba(20,40,80,0.10)", strokeWidth: 1.5 }),
      h("rect", { x: 108.75, y: 70.75, width: 222.5, height: 158, rx: 25, fill: "url(#hiwSheen)" }),
      h("svg", { x: 136, y: 146, width: 168, height: 168, viewBox: "0 0 48 48" }, item.c.icon())
    );
  };
  return h(
    "div",
    { className: "hiw-art" },
    h("div", { "aria-hidden": "true", style: { position: "absolute", inset: 0, background: "radial-gradient(70% 80% at 58% 50%, rgba(46,123,255,0.10), transparent 70%)" } }),
    h(
      "svg",
      { viewBox: "0 0 1100 460", preserveAspectRatio: "xMidYMid meet", style: { position: "absolute", inset: 0, width: "100%", height: "100%" } },
      h(
        "defs",
        null,
        h("linearGradient", { id: "hiwSheen", x1: "0", y1: "0", x2: "0", y2: "1" }, h("stop", { offset: "0%", stopColor: "#ffffff", stopOpacity: 0.55 }), h("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: 0 }))
      ),
      h("path", { d: "M336 230 L 620 230", fill: "none", stroke: "var(--line-strong)", strokeWidth: 11, strokeLinecap: "round", opacity: 0.55 }),
      h("path", { d: "M620 230 L 894 230", fill: "none", stroke: "var(--teal)", strokeWidth: 13, strokeLinecap: "round" }),
      dot("0s", "da"),
      dot("0.47s", "db"),
      dot("0.95s", "dc"),
      dot("1.42s", "dd"),
      h("circle", { cx: 336, cy: 230, r: 9, fill: "var(--line-strong)" }),
      h("circle", { cx: 620, cy: 230, r: 11, fill: "var(--teal)" }),
      deck.map(card),
      h(
        "svg",
        { x: 884, y: 156, width: 148, height: 148, viewBox: "0 0 32 32" },
        h("rect", { width: 32, height: 32, rx: 7, fill: "var(--teal-deep)" }),
        h("rect", { x: 2.5, y: 2.5, width: 12.5, height: 12.5, rx: 1.5, fill: "#fff" }),
        h("circle", { cx: 8.75, cy: 8.75, r: 2, fill: "var(--teal-deep)" }),
        h("circle", { cx: 23.25, cy: 8.75, r: 2, fill: "none", stroke: "#fff", strokeWidth: 1.4 }),
        h("rect", { x: 17, y: 17, width: 12.5, height: 12.5, rx: 1.5, fill: "#fff" }),
        h("path", { d: "M19.5 23.5 L22.5 26.2 L27 20.7", stroke: "var(--teal-deep)", strokeWidth: 2.4, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" })
      )
    )
  );
}

// Step 2: document on the left, scan beam, four detections fanning out.
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
    h("div", { className: "flex items-baseline gap-3 mb-3" }, h("span", { className: "text-[11px] font-bold font-mono tracking-[0.08em] uppercase text-teal" }, "Step " + step.n + " of 3")),
    h("p", { className: "text-[16px] leading-[1.6] text-ink-soft mt-0 mb-4 text-pretty" }, step.blurb),
    step.detail()
  );

  const picture = h(
    "div",
    { className: "hiw-picture" },
    STEPS.map((s, i) => {
      const isReport = s.slotId === "hiw-report";
      const content = s.visual
        ? h(s.visual)
        : h(
            "div",
            { className: "hiw-art grid place-items-center", style: { background: "var(--bg-elev)" } },
            h(
              "div",
              { style: { textAlign: "center", maxWidth: 360, padding: 24 } },
              h("div", { className: "display", style: { fontSize: 22, color: "var(--ink)", marginBottom: 8 } }, "Your full report"),
              h("p", { style: { fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.5, margin: 0 } }, "Flagged passages, the writing playback, and per-category scores, in one place, ready to act on.")
            )
          );
      const overlay = isReport
        ? h(
            "button",
            { type: "button", className: "folder-btn folder-btn--overlay", onClick: openReport, "aria-label": "View sample report" },
            h("span", { className: "fb-paper", "aria-hidden": "true" }, h("span", { className: "fb-line" }), h("span", { className: "fb-line short" })),
            h("span", { className: "fb-folder" }, h("span", { className: "fb-tab" }), h("span", { className: "fb-label" }, "View Sample Report"))
          )
        : null;
      return h("div", { key: s.slotId || "step" + i, className: i === active ? "block relative" : "hidden" }, content, overlay);
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
              h("div", { className: "report-modal-title" }, h("span", { className: "report-modal-dot" }), "Sample report · Analytics export"),
              h("button", { type: "button", className: "report-modal-close", onClick: closeReport, "aria-label": "Close" }, "✕")
            ),
            h("iframe", { className: "report-modal-frame", src: LIVE_REPORT_URL, title: "Sample report", allowFullScreen: true })
          )
        )
      : null
  );
}

export default HowItWorks;
