"use client";

// LivePlayback — interactive "try it yourself" box. Faithful port of the
// checkmark-homepage prototype (try-playback.js): soft glow, white rounded card,
// live status pills, keystroke/paste ticker, history-log modal, stepped scan
// overlay, and a locally-simulated report. Inline-style structure is preserved
// from the prototype; color tokens resolve from the .ck-redesign scope.

import React, { useState, useRef, useEffect, useMemo } from "react";
import { IconShield, IconArrow } from "./icons";

const h = React.createElement;

type Op = { o: "d" | "i"; p: number; s: string };
type Evt = { kind: "paste" | "type" | "del"; n: number; label: string; t: number };

function diffOps(oldStr: string, newStr: string): Op[] {
  if (oldStr === newStr) return [];
  let start = 0;
  const minLen = Math.min(oldStr.length, newStr.length);
  while (start < minLen && oldStr[start] === newStr[start]) start++;
  let endOld = oldStr.length;
  let endNew = newStr.length;
  while (endOld > start && endNew > start && oldStr[endOld - 1] === newStr[endNew - 1]) {
    endOld--;
    endNew--;
  }
  const removed = oldStr.slice(start, endOld);
  const added = newStr.slice(start, endNew);
  const ops: Op[] = [];
  if (removed) ops.push({ o: "d", p: start, s: removed });
  if (added) ops.push({ o: "i", p: start, s: added });
  return ops;
}

function Pill(label: string) {
  return h(
    "span",
    {
      key: label,
      style: {
        display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 16px",
        borderRadius: 16, background: "var(--accent-soft)", border: "1px solid hsl(199 92% 86%)",
        fontSize: 13, fontWeight: 700, color: "var(--accent-deep)", letterSpacing: "-0.01em",
        boxShadow: "var(--shadow-sm)",
      },
    },
    h("span", { className: "live-dot" }),
    label
  );
}

function closeBtn(onClick: () => void) {
  return h(
    "button",
    {
      onClick,
      style: { border: 0, background: "var(--surface-2)", borderRadius: 999, width: 36, height: 36, cursor: "pointer", fontSize: 16, color: "var(--ink-soft)" },
    },
    "✕"
  );
}

export function LivePlayback() {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState<string[]>([]);
  const [events, setEvents] = useState<Evt[]>([]);
  const [showLog, setShowLog] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scan, setScan] = useState<null | "running" | "done">(null);
  const [progress, setProgress] = useState(0);

  const snapRef = useRef("");
  const pasteRef = useRef(0);

  const words = useMemo(() => {
    const t = text.trim();
    return t ? t.split(/\s+/).filter(Boolean).length : 0;
  }, [text]);

  const pasteChars = useMemo(() => {
    return events.filter((e) => e.kind === "paste").reduce((a, e) => a + e.n, 0);
  }, [events]);

  useEffect(() => {
    const id = setInterval(() => {
      const prev = snapRef.current;
      if (text === prev) return;
      const ops = diffOps(prev, text);
      if (!ops.length) {
        snapRef.current = text;
        return;
      }
      const t = Date.now();
      const sid = String(t);
      const wasPaste = pasteRef.current > 0;
      setEntries((es) =>
        es.concat(
          ops.map(
            (op) =>
              '<e t="' + t + '" o="' + op.o + '" p="' + op.p + '" sid="' + sid + '"><s><![CDATA[' + op.s + "]]></s></e>"
          )
        )
      );
      const added = ops.find((o) => o.o === "i");
      const removed = ops.find((o) => o.o === "d");
      const isPaste = (wasPaste || (added && added.s.length >= 40)) && added;
      let ev: Evt;
      if (isPaste && added) ev = { kind: "paste", n: added.s.length, label: "Paste · " + added.s.length + " chars", t };
      else if (added && removed) ev = { kind: "type", n: added.s.length, label: "Replaced " + removed.s.length + " chars", t };
      else if (added) ev = { kind: "type", n: added.s.length, label: added.s.length > 1 ? "Typed " + added.s.length + " chars" : "Typed", t };
      else ev = { kind: "del", n: removed!.s.length, label: "Deleted " + removed!.s.length + " chars", t };
      setEvents((p) => [ev].concat(p).slice(0, 5));
      pasteRef.current = 0;
      snapRef.current = text;
    }, 120);
    return () => clearInterval(id);
  }, [text]);

  function onPaste(e: React.ClipboardEvent<HTMLTextAreaElement>) {
    const cd = e.clipboardData;
    const pasted = (cd && cd.getData("text")) || "";
    if (pasted.length >= 12) pasteRef.current = pasted.length;
  }

  function xml() {
    return '<l xmlns="http://checkmarkplagiarism.com/history-log">\n  ' + entries.join("\n  ") + "\n</l>";
  }
  function copyXml() {
    if (navigator.clipboard) navigator.clipboard.writeText(xml());
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }
  function runScan() {
    if (words < 50) return;
    setScan("running");
    setProgress(0);
    const id = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(id);
          setScan("done");
          return 100;
        }
        return Math.min(100, p + Math.max(2, Math.random() * 9));
      });
    }, 140);
  }
  function reset() {
    setScan(null);
    setProgress(0);
  }

  const report = useMemo(() => {
    const bigPaste = events.some((e) => e.kind === "paste" && e.n >= 80);
    const ai = bigPaste ? 58 + (pasteChars % 17) : 9 + (words % 11);
    return {
      ai,
      verdict: bigPaste
        ? "Large paste with no supporting keystrokes. Review recommended."
        : "Typed steadily with natural pauses, consistent with authentic work.",
      pasteChars,
    };
  }, [events, words, pasteChars]);

  // ── status pills + counter ──
  const pillRow = h(
    "div",
    { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 18, position: "relative", zIndex: 1 } },
    h("div", { style: { display: "flex", gap: 10, flexWrap: "wrap" } }, Pill("Keystroke analysis"), Pill("AI detection")),
    h("span", { style: { fontSize: 11, color: "var(--ink-mute)", fontFamily: "var(--font-mono)" } }, entries.length + " events logged")
  );

  // ── ticker ──
  const ticker = h(
    "div",
    { style: { display: "flex", gap: 8, flexWrap: "wrap", minHeight: 30, marginTop: 6 } },
    events.length === 0
      ? h("span", { style: { fontSize: 12, color: "var(--ink-mute)", fontStyle: "italic" } }, "No edits recorded yet. The timeline builds as you write.")
      : events.map((e, i) => {
          const paste = e.kind === "paste";
          return h(
            "span",
            {
              key: e.t + "-" + i,
              style: {
                display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", borderRadius: 999,
                fontSize: 11, fontFamily: "var(--font-mono)", opacity: 1 - i * 0.16,
                background: paste ? "var(--accent)" : "var(--surface-2)",
                color: paste ? "#fff" : "var(--ink-soft)",
                fontWeight: paste ? 700 : 500,
                border: paste ? "0" : "1px solid var(--line)",
              },
            },
            (paste ? "⚠ " : "") + e.label
          );
        })
  );

  const body = h(
    "div",
    { style: { flexGrow: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 1 } },
    h("textarea", {
      value: text,
      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value),
      onPaste,
      spellCheck: false,
      placeholder: "Paste student work here, or just start typing, to watch Checkmark capture every keystroke and paste in real time.",
      style: { width: "100%", flexGrow: 1, minHeight: 150, resize: "none", border: "none", outline: "none", background: "transparent", color: "var(--ink-soft)", fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 20, lineHeight: 1.6 },
    }),
    ticker
  );

  // ── footer ──
  const statusDot = h("span", { style: { width: 7, height: 7, borderRadius: 999, background: words < 50 ? "var(--yellow)" : "var(--accent)" } });
  const footer = h(
    "div",
    { style: { marginTop: 22, paddingTop: 22, borderTop: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap", position: "relative", zIndex: 1 } },
    h(
      "div",
      null,
      h("div", { style: { fontSize: 14, fontWeight: 700, color: words > 1000 ? "var(--coral)" : "var(--ink-soft)" } }, words.toLocaleString() + " / 1,000 words"),
      h(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 7, marginTop: 4 } },
        statusDot,
        h("span", { style: { fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: words < 50 ? "var(--ink-mute)" : "var(--accent-deep)" } }, words < 50 ? "Min 50 words (" + (50 - words) + " to go)" : "Ready for analysis")
      )
    ),
    h(
      "div",
      { style: { display: "flex", alignItems: "center", gap: 16 } },
      h(
        "button",
        {
          onClick: () => setShowLog(true),
          disabled: !entries.length,
          style: { display: "inline-flex", alignItems: "center", gap: 6, background: "transparent", border: 0, padding: 0, color: entries.length ? "var(--ink-mute)" : "var(--line-strong)", fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", cursor: entries.length ? "pointer" : "not-allowed" },
        },
        "History log"
      ),
      h(
        "div",
        { style: { display: "flex", alignItems: "center", gap: 6, color: "var(--ink-mute)" } },
        h(IconShield, { size: 15, color: "var(--ink-mute)" }),
        h("span", { style: { fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" } }, "Private")
      ),
      h(
        "button",
        {
          onClick: runScan,
          disabled: words < 50,
          style: { display: "inline-flex", alignItems: "center", gap: 8, padding: "0 26px", height: 52, borderRadius: 16, border: 0, background: words < 50 ? "var(--line-strong)" : "var(--ink)", color: words < 50 ? "var(--ink-mute)" : "#fff", fontSize: 16, fontWeight: 700, cursor: words < 50 ? "not-allowed" : "pointer", boxShadow: words < 50 ? "none" : "0 12px 24px -8px rgba(20,30,40,0.4)", transition: "transform .15s ease" },
        },
        "Scan now ",
        h(IconArrow, { size: 17, color: words < 50 ? "var(--ink-mute)" : "#fff" })
      )
    )
  );

  // ── history-log modal (blue terminal) ──
  const logModal = showLog
    ? h(
        "div",
        { style: { position: "absolute", inset: 0, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(6px)", zIndex: 50, padding: 26, display: "flex", flexDirection: "column", borderRadius: "inherit" } },
        h(
          "div",
          { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 } },
          h(
            "div",
            null,
            h("div", { className: "display", style: { fontSize: 22 } }, "History-log metadata"),
            h("div", { style: { fontSize: 12, color: "var(--ink-mute)" } }, "The replayable record behind Essay Playback: inserts and deletes, timestamped.")
          ),
          closeBtn(() => setShowLog(false))
        ),
        h(
          "div",
          { style: { flex: 1, overflow: "auto", background: "#0B1B2E", borderRadius: 16, padding: 18, fontFamily: "var(--font-mono)", fontSize: 12, lineHeight: 1.6, color: "#7FC4FF" } },
          h("div", { style: { color: "#4E6E92" } }, '<l xmlns="http://checkmarkplagiarism.com/history-log">'),
          entries.map((en, i) =>
            h(
              "div",
              { key: i, style: { paddingLeft: 14, whiteSpace: "pre-wrap", wordBreak: "break-all" } },
              h("span", { style: { color: "#33506E", userSelect: "none", marginRight: 12 } }, String(i + 1).padStart(3, "0")),
              en
            )
          ),
          h("div", { style: { color: "#4E6E92" } }, "</l>")
        ),
        h(
          "div",
          { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 } },
          h("span", { style: { fontSize: 13, color: "var(--ink-soft)", fontWeight: 600 } }, "Operations: " + entries.length),
          h("button", { onClick: copyXml, style: { display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 16px", borderRadius: 12, border: "1px solid var(--line-strong)", background: "var(--bg-elev)", fontSize: 13, fontWeight: 600, color: "var(--ink)", cursor: "pointer" } }, copied ? "✓ Copied" : "Copy XML")
        )
      )
    : null;

  // ── scanning overlay (stepped) ──
  const steps = [
    { label: "Fingerprinting", min: 10 },
    { label: "AI detection", min: 40 },
    { label: "Plagiarism scan", min: 70 },
    { label: "Finalizing", min: 90 },
  ];
  const scanning =
    scan === "running"
      ? h(
          "div",
          { style: { position: "absolute", inset: 0, background: "rgba(255,255,255,0.96)", backdropFilter: "blur(6px)", zIndex: 40, display: "grid", placeItems: "center", padding: 30, borderRadius: "inherit" } },
          h(
            "div",
            { style: { width: "100%", maxWidth: 380 } },
            h(
              "div",
              { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 } },
              h("span", { className: "display", style: { fontSize: 24 } }, "Analyzing document"),
              h("span", { className: "display", style: { fontSize: 34, color: "var(--accent-deep)" } }, Math.round(progress), h("span", { style: { fontSize: 17, color: "var(--ink-mute)" } }, "%"))
            ),
            h(
              "div",
              { style: { height: 12, borderRadius: 999, background: "var(--surface-2)", overflow: "hidden", padding: 2, border: "1px solid var(--line)" } },
              h("div", { style: { width: progress + "%", height: "100%", borderRadius: 999, transition: "width .14s linear", backgroundImage: "linear-gradient(90deg, hsl(218 100% 59%), hsl(199 92% 55%), hsl(218 100% 59%))" } })
            ),
            h(
              "div",
              { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 22 } },
              steps.map((st, i) => {
                const on = progress >= st.min;
                return h(
                  "div",
                  { key: i, style: { display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 16, border: "1px solid " + (on ? "hsl(199 92% 86%)" : "var(--line)"), background: on ? "var(--accent-soft)" : "var(--surface)", opacity: on ? 1 : 0.6, transition: "all .4s ease" } },
                  h("span", { style: { width: 8, height: 8, borderRadius: 999, background: on ? "var(--accent)" : "var(--line-strong)" } }),
                  h("span", { style: { fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: on ? "var(--accent-deep)" : "var(--ink-mute)" } }, st.label)
                );
              })
            )
          )
        )
      : null;

  // ── report overlay ──
  const reportOverlay =
    scan === "done"
      ? h(
          "div",
          { style: { position: "absolute", inset: 0, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(6px)", zIndex: 45, padding: 26, display: "flex", flexDirection: "column", borderRadius: "inherit" } },
          h(
            "div",
            { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 } },
            h("div", { className: "display", style: { fontSize: 24 } }, "Checkmark report"),
            closeBtn(reset)
          ),
          h(
            "div",
            { style: { display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14 } },
            h("span", { className: "display", style: { fontSize: 58, color: report.ai > 50 ? "var(--accent-deep)" : "var(--teal)", lineHeight: 1 } }, report.ai + "%"),
            h("span", { style: { fontSize: 14, color: "var(--ink-soft)" } }, "AI signal")
          ),
          h(
            "div",
            { style: { height: 10, borderRadius: 999, background: "var(--surface-2)", overflow: "hidden", marginBottom: 20 } },
            h("div", { style: { width: report.ai + "%", height: "100%", background: report.ai > 50 ? "var(--accent)" : "var(--teal)" } })
          ),
          h(
            "div",
            { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 } },
            h(
              "div",
              { style: { padding: 16, borderRadius: 14, background: "var(--surface)", border: "1px solid var(--line)" } },
              h("div", { style: { fontSize: 11, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" } }, "Pasted"),
              h("div", { className: "display", style: { fontSize: 26, color: report.pasteChars ? "var(--accent-deep)" : "var(--ink)" } }, report.pasteChars + " chars")
            ),
            h(
              "div",
              { style: { padding: 16, borderRadius: 14, background: "var(--surface)", border: "1px solid var(--line)" } },
              h("div", { style: { fontSize: 11, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" } }, "Edits logged"),
              h("div", { className: "display", style: { fontSize: 26 } }, entries.length)
            )
          ),
          h(
            "div",
            { style: { padding: 16, borderRadius: 14, background: "var(--accent-soft)", fontSize: 13, lineHeight: 1.55, color: "var(--ink-soft)", marginBottom: 16 } },
            h("strong", { style: { color: "var(--ink)" } }, "Keystroke evidence: "),
            report.verdict
          ),
          h(
            "div",
            { style: { marginTop: "auto", display: "flex", gap: 10 } },
            h("button", { onClick: () => setShowLog(true), style: { flex: 1, padding: "13px", borderRadius: 14, border: "1px solid var(--line-strong)", background: "var(--bg-elev)", fontWeight: 600, fontSize: 13, color: "var(--ink)", cursor: "pointer" } }, "View history log"),
            h("button", { onClick: reset, style: { flex: 1, padding: "13px", borderRadius: 14, border: 0, background: "var(--ink)", color: "#fff", fontWeight: 700, fontSize: 13, cursor: "pointer" } }, "Try again")
          ),
          h("div", { style: { marginTop: 12, fontSize: 11, color: "var(--ink-mute)", textAlign: "center" } }, "Demo report generated locally. The live product scans against Checkmark's models.")
        )
      : null;

  // ── card + glow ──
  const glow = h("div", { "aria-hidden": "true", style: { position: "absolute", inset: -18, borderRadius: 48, background: "radial-gradient(60% 60% at 70% 20%, rgba(46,123,255,0.30), transparent 70%), radial-gradient(60% 60% at 20% 90%, rgba(35,196,255,0.22), transparent 70%)", filter: "blur(36px)", opacity: 0.85, pointerEvents: "none" } });
  const blob = h("div", { "aria-hidden": "true", style: { position: "absolute", top: -90, right: -70, width: 200, height: 200, borderRadius: 999, background: "var(--accent)", opacity: 0.06, filter: "blur(20px)", pointerEvents: "none" } });

  const card = h(
    "div",
    { style: { position: "relative", background: "var(--bg-elev)", borderRadius: 36, border: "1px solid var(--line)", boxShadow: "0 24px 56px -16px rgba(20,30,50,0.20)", padding: 30, minHeight: 520, display: "flex", flexDirection: "column", overflow: "hidden" } },
    blob,
    pillRow,
    body,
    footer,
    logModal,
    scanning,
    reportOverlay
  );

  return h("div", { style: { position: "relative" } }, glow, card);
}

export default LivePlayback;
