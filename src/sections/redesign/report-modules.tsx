"use client";

/* Faithful ports of the Checkmark report modules embedded in the Features grid:
   StatRibbon, the interactive PlaybackModule (keystroke replay with play/pause/
   scrub), and the five Feature* card mocks. Ported from report-modules.js;
   inline-style structure preserved. (--font-body in the prototype maps here to
   --font-sans.) */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useRef, useEffect, useMemo, useCallback, type ReactNode } from "react";

const h = React.createElement;

// ── panel + StatRibbon ──────────────────────────────────────────────
function panel(children: ReactNode) {
  return h(
    "div",
    { style: { padding: 24, borderRadius: 18, background: "var(--bg)", border: "1px solid var(--line)" } },
    children
  );
}

const RIBBON_TILES = [
  { key: "overall", value: 71, l1: "Overall", l2: null, bg: "#F3F4F6" },
  { key: "pasted", value: 34, l1: "Total", l2: "Pasted", bg: "#FEF9C3" },
  { key: "transcribed", value: 63, l1: "Total", l2: "Transcribed", bg: "#DBEAFE" },
  { key: "uncited", value: 8, l1: "Total", l2: "Uncited", bg: "#F3E8FF" },
  { key: "ai", value: 17, l1: "Total", l2: "AI", bg: "#FEE2E2" },
];

function StatRibbon({ focus }: { focus?: string }) {
  return h(
    "div",
    { style: { display: "flex", gap: 5 } },
    RIBBON_TILES.map((t) => {
      const isFocus = t.key === focus;
      return h(
        "div",
        {
          key: t.key,
          title: t.l2 ? "Total " + t.l2.toLowerCase() : "Overall flagged content",
          style: { flex: "1 1 0", minWidth: 0, height: 64, borderRadius: 8, background: t.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 3px", position: "relative", boxShadow: isFocus ? "0 0 0 2px var(--ink)" : "none" },
        },
        h("div", { style: { fontSize: 14, fontWeight: 700, lineHeight: 1.05, color: "var(--ink)" } }, t.value === null ? "N/A" : t.value.toFixed(1) + "%"),
        h(
          "div",
          { style: { marginTop: 5, height: 26, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: 9.5, lineHeight: 1.12, color: "var(--ink-soft)", letterSpacing: "-0.01em" } },
          t.l1 ? h("div", null, t.l1) : null,
          t.l2 ? h("div", null, t.l2) : null
        )
      );
    })
  );
}

// ── PlaybackModule — keystroke replay (ported from PlaybackModal.tsx) ──
function buildSteps(): any[] {
  const steps: any[] = [];
  let cursor = 0;
  function typeChunked(str: string, msPerChunk: number, chunkLen: number) {
    let i = 0;
    while (i < str.length) {
      const seg = str.slice(i, i + chunkLen);
      steps.push({ t: "t", o: "i", i: cursor, s: seg, d: msPerChunk });
      cursor += seg.length;
      i += chunkLen;
    }
  }
  typeChunked("The fall of the Roman Empire was a slow process, not one event but ", 520, 6);
  typeChunked("many small failures compounding over centuries. ", 600, 6);
  const paste = "Historians often cite economic instability, military overreach, and political corruption as primary causes of the collapse.";
  steps.push({ t: "m", m: "Large paste detected · " + paste.length + " chars", d: 1500 });
  steps.push({ t: "t", o: "i", i: cursor, s: paste, d: 240 });
  cursor += paste.length;
  typeChunked(" These pressures fed on one another until the empire could no longer hold.", 560, 6);
  return steps;
}

const BLOCK_THRESHOLD = 30;

function PlaybackModule() {
  const steps = useMemo(buildSteps, []);
  const stepStartTimes = useMemo(() => {
    const times = [0];
    let cum = 0;
    for (let i = 0; i < steps.length; i++) {
      cum += steps[i].d || 0;
      times.push(cum);
    }
    return times;
  }, [steps]);
  const totalDuration = useMemo(() => steps.reduce((a, s) => a + (s.d || 0), 0), [steps]);

  const [currentStep, setCurrentStep] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [content, setContent] = useState("");
  const [cursorPos, setCursor] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [interp, setInterp] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [message, setMessage] = useState<any>(null);
  const [typingComplete, setTypingComplete] = useState(false);

  const timeoutRef = useRef<any>(null);
  const startRef = useRef<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const caretRef = useRef<HTMLSpanElement>(null);

  function findStepByTime(time: number) {
    let acc = 0;
    for (let i = 0; i < steps.length; i++) {
      acc += steps[i].d || 0;
      if (acc > time) return i - 1;
    }
    return steps.length - 1;
  }

  const updateContentToStep = useCallback(
    (target: number) => {
      let nc = "";
      let msg: any = null;
      let acc = 0;
      let cur = 0;
      if (target < 0) {
        setContent("");
        setCursor(0);
        setMessage(null);
        setElapsed(0);
        return;
      }
      for (let i = 0; i <= target && i < steps.length; i++) {
        const st = steps[i];
        acc += st.d || 0;
        if (st.t === "t") {
          if (st.o === "i" && st.s) {
            nc = nc.slice(0, st.i || 0) + st.s + nc.slice(st.i || 0);
            cur = (st.i || 0) + st.s.length;
          } else if (st.o === "d") {
            nc = nc.slice(0, st.i || 0) + nc.slice((st.e || st.i || 0) + 1);
            cur = st.i || 0;
          }
        } else if (st.t === "m") {
          msg = { text: st.m || "", start: acc - (st.d || 0), end: acc };
        }
      }
      setContent(nc);
      setCursor(cur);
      setMessage(msg);
      setElapsed(acc);
    },
    [steps]
  );

  useEffect(() => {
    updateContentToStep(currentStep);
  }, [currentStep, updateContentToStep]);

  useEffect(() => {
    if (playing && steps.length && currentStep < steps.length - 1) {
      const step = steps[currentStep + 1];
      if (!step) return;
      const delay = step.d || 0;
      if (step.t === "t" && step.o === "i" && step.s && step.s.length < BLOCK_THRESHOLD && delay > 0) {
        const insertIndex = step.i || 0;
        const chars = step.s.split("");
        const typeChar = (index: number) => {
          if (index < chars.length) {
            setContent((prev) => prev.slice(0, insertIndex + index) + chars[index] + prev.slice(insertIndex + index));
            setCursor(insertIndex + index + 1);
            timeoutRef.current = setTimeout(() => typeChar(index + 1), delay / (chars.length * speed));
          } else {
            setCurrentStep((p) => p + 1);
            setElapsed((prev) => {
              const nt = prev + delay;
              if (startRef.current) startRef.current = { realTime: Date.now(), playbackTime: nt };
              return nt;
            });
          }
        };
        typeChar(0);
      } else if (step.t === "m") {
        const ms = elapsed;
        setMessage({ text: step.m || "", start: ms, end: ms + 1500 });
        timeoutRef.current = setTimeout(() => {
          setMessage(null);
          setCurrentStep((p) => p + 1);
          setElapsed((prev) => {
            const nt = prev + delay;
            if (startRef.current) startRef.current = { realTime: Date.now(), playbackTime: nt };
            return nt;
          });
        }, 1500 / speed);
      } else {
        const apply = () => {
          const idx = step.i || 0;
          if (step.o === "i") {
            const s = step.s || "";
            setContent((prev) => prev.slice(0, idx) + s + prev.slice(idx));
            setCursor(idx + s.length);
          } else if (step.o === "d") {
            const end = (step.e == null ? idx : step.e) + 1;
            setContent((prev) => prev.slice(0, idx) + prev.slice(end));
            setCursor(idx);
          }
          setCurrentStep(currentStep + 1);
          setElapsed((prev) => {
            const nt = prev + delay;
            if (startRef.current) startRef.current = { realTime: Date.now(), playbackTime: nt };
            return nt;
          });
        };
        if (delay === 0) apply();
        else timeoutRef.current = setTimeout(apply, delay / speed);
      }
    } else if (playing) {
      setPlaying(false);
      setTypingComplete(true);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, currentStep, steps, speed, elapsed]);

  useEffect(() => {
    if (caretRef.current && scrollRef.current) {
      const c = scrollRef.current;
      const cur = caretRef.current;
      const cr = c.getBoundingClientRect();
      const kr = cur.getBoundingClientRect();
      if (kr.bottom > cr.bottom || kr.top < cr.top) {
        c.scrollTo({ top: cur.offsetTop - c.clientHeight / 2, behavior: "smooth" });
      }
    }
  }, [cursorPos, content]);

  function play() {
    if (!steps.length) return;
    setPlaying(true);
    setTypingComplete(false);
    if (currentStep === -1) setCurrentStep(0);
    else setCurrentStep(findStepByTime(elapsed));
  }
  function pause() {
    setPlaying(false);
  }
  function skip(amount: number) {
    const nt = Math.max(0, Math.min(elapsed + amount, totalDuration));
    setElapsed(nt);
    setInterp(nt);
    const ns = findStepByTime(nt);
    setCurrentStep(ns);
    updateContentToStep(ns);
  }
  function onScrub(e: any) {
    const val = Number(e.target.value);
    setInterp(val);
    setDragging(true);
    const ds = findStepByTime(val);
    setCurrentStep(ds);
    updateContentToStep(ds);
    setElapsed(val);
  }
  function onScrubCommit(e: any) {
    const val = Number(e.target.value);
    let nearest = 0;
    let minDiff = Math.abs(val);
    stepStartTimes.forEach((time) => {
      const d = Math.abs(val - time);
      if (d < minDiff) {
        minDiff = d;
        nearest = time;
      }
    });
    if (Math.abs(val - totalDuration) < minDiff) nearest = totalDuration;
    setElapsed(nearest);
    setInterp(nearest);
    const ns = findStepByTime(nearest);
    setCurrentStep(ns);
    updateContentToStep(ns);
    setDragging(false);
    setPlaying(false);
  }
  function fmt(ms: number) {
    const sec = Math.floor(ms / 1000);
    const m = Math.floor(sec / 60);
    const r = sec % 60;
    return m + ":" + (r < 10 ? "0" + r : r);
  }

  const displayTime = dragging ? interp : elapsed;
  const before = content.slice(0, cursorPos);
  const after = content.slice(cursorPos);
  const showMsg = message && elapsed >= message.start && elapsed <= message.end;

  const IC: Record<string, string> = {
    play: "M8 5v14l11-7z",
    pause: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
    replay10:
      "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-1.1 11H10v-3.3L9 13v-.7l1.8-.6h.1V16z",
    forward10:
      "M4 13c0 4.4 3.6 8 8 8s8-3.6 8-8h-2c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6v4l5-5-5-5v4c-4.4 0-8 3.6-8 8zm6.8 3H9.7v-3.3l-1 .3v-.8l1.9-.7h.2V16z",
  };
  function micon(path: string, size?: number) {
    return h("svg", { width: size || 22, height: size || 22, viewBox: "0 0 24 24", fill: "currentColor" }, h("path", { d: path }));
  }
  function iconBtn(onClick: () => void, path: string) {
    return h(
      "button",
      { onClick, className: "pb-iconbtn", style: { border: 0, background: "transparent", cursor: "pointer", display: "grid", placeItems: "center", flexShrink: 0, width: 40, height: 40, borderRadius: 999, color: "rgba(0,0,0,0.54)", padding: 0 } },
      micon(path)
    );
  }

  return h(
    "div",
    { style: { background: "#fff", borderRadius: 8, boxShadow: "0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12)", display: "flex", flexDirection: "column", padding: "12px 20px 16px", width: "100%" } },
    h(
      "div",
      { style: { display: "flex", alignItems: "center", minHeight: 40 } },
      h("div", { style: { flex: 1, fontSize: 13, color: "rgba(0,0,0,0.55)", fontFamily: "var(--font-sans)" } }, "Causes of Roman Decline · Draft 1"),
      h(
        "div",
        { style: { flex: 1, display: "flex", justifyContent: "center" } },
        showMsg ? h("div", { style: { background: "#B6D7A8", borderRadius: 6, padding: "4px 12px", fontSize: 13, color: "#1f2937", textAlign: "center", whiteSpace: "nowrap" } }, message.text) : null
      ),
      h("div", { style: { flex: 1, display: "flex", justifyContent: "flex-end" } })
    ),
    h(
      "div",
      {
        ref: scrollRef,
        style: { position: "relative", height: 210, overflow: "auto", margin: "4px auto 0", width: "100%", padding: "26px 30px", borderRadius: 4, background: "#fff", boxShadow: "0 2px 1px -1px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.14), 0 1px 3px rgba(0,0,0,0.12)", fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.75, color: "#202124", whiteSpace: "pre-wrap", wordBreak: "break-word" },
      },
      content
        ? h(React.Fragment, null, before, h("span", { ref: caretRef, className: "pb-caret" + (!typingComplete ? " blink" : "") }), after)
        : h("span", { style: { color: "rgba(0,0,0,0.4)" } }, "Press play to replay how this essay was written.")
    ),
    h(
      "div",
      { style: { display: "flex", alignItems: "center", marginTop: 16 } },
      iconBtn(() => skip(-10000), IC.replay10),
      iconBtn(playing ? pause : play, playing ? IC.pause : IC.play),
      iconBtn(() => skip(10000), IC.forward10),
      h(
        "select",
        { value: speed, onChange: (e: any) => setSpeed(Number(e.target.value)), className: "pb-select" },
        [1, 2, 4, 8].map((x) => h("option", { key: x, value: x }, x + "x"))
      ),
      h(
        "div",
        { style: { flex: 1, position: "relative", display: "flex", alignItems: "center", margin: "0 16px" } },
        h(
          "div",
          { style: { position: "absolute", left: 0, right: 0, top: "50%", height: 4, transform: "translateY(-50%)", pointerEvents: "none" } },
          stepStartTimes.length < 50
            ? stepStartTimes.map((tm, i) =>
                h("div", { key: i, style: { position: "absolute", left: (totalDuration ? (tm / totalDuration) * 100 : 0) + "%", top: -1, width: 2, height: 6, background: "rgba(0,0,0,0.26)", transform: "translateX(-50%)", borderRadius: 1 } })
              )
            : null
        ),
        h("input", { type: "range", min: 0, max: totalDuration, value: displayTime, step: 10, onChange: onScrub, onMouseUp: onScrubCommit, onTouchEnd: onScrubCommit, className: "pb-range", style: { width: "100%" } })
      ),
      h("span", { style: { fontSize: 14, color: "rgba(0,0,0,0.75)", fontFamily: "var(--font-sans)", minWidth: 88, textAlign: "right" } }, fmt(displayTime) + " / " + fmt(totalDuration))
    )
  );
}

// ── Feature card mocks ──────────────────────────────────────────────
function FeatureAI() {
  return panel([
    h(
      "div",
      { key: "top", style: { marginBottom: 14 } },
      h(StatRibbon, { focus: "ai" }),
      h("div", { style: { fontSize: 12.5, fontFamily: "var(--font-mono)", color: "var(--ink-mute)", marginTop: 10 } }, "AI signal low, not a standalone verdict")
    ),
    h(
      "div",
      { key: "excerpt", style: { padding: "16px 18px", borderRadius: 12, background: "var(--surface)", border: "1px solid var(--line)", marginBottom: 14, fontFamily: "var(--font-display)", fontSize: 16, lineHeight: 1.7, color: "var(--ink)" } },
      "Most of the essay reads in the student’s own voice. ",
      h("mark", { style: { background: "rgba(217,45,32,0.20)", color: "var(--ink)", padding: "1px 3px", borderRadius: 3, boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" } }, "The multifaceted socioeconomic ramifications of imperial overextension precipitated a systemic decline across the empire’s administrative institutions."),
      ", the one passage the classifier flags."
    ),
    h(
      "div",
      { key: "v", style: { padding: 16, background: "var(--teal-soft)", borderRadius: 12, fontSize: 13, lineHeight: 1.5, color: "var(--ink-soft)", marginBottom: 14 } },
      h("strong", { style: { color: "var(--ink)" } }, "Cross-checked against keystrokes: "),
      "The 17% signal sits in paragraph 3, which was typed continuously over 8 minutes with normal pauses. ",
      h("strong", { style: { color: "var(--teal)" } }, "Likely a false positive.")
    ),
    h(
      "div",
      { key: "acc", style: { display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderRadius: 14, background: "linear-gradient(135deg, hsl(218 100% 59%), hsl(224 80% 42%))", color: "#fff", boxShadow: "0 12px 28px -10px hsla(218, 100%, 50%, 0.55)" } },
      h("div", { className: "display", style: { fontSize: 46, lineHeight: 1, flexShrink: 0 } }, "95%"),
      h(
        "div",
        { style: { lineHeight: 1.35 } },
        h("div", { style: { fontSize: 14, fontWeight: 700 } }, "Classifier accuracy"),
        h("div", { style: { fontSize: 12, color: "rgba(255,255,255,0.85)" } }, "And it never stands alone, every flag is checked against the keystrokes.")
      )
    ),
  ]);
}

function FeaturePaste() {
  return panel([
    h(
      "div",
      { key: "top", style: { marginBottom: 14 } },
      h(StatRibbon, { focus: "pasted" }),
      h("div", { style: { fontSize: 12.5, fontFamily: "var(--font-mono)", color: "var(--ink-mute)", marginTop: 10 } }, "Pasted passages highlighted in the essay")
    ),
    h(
      "div",
      { key: "excerpt", style: { padding: "16px 18px", borderRadius: 12, background: "var(--surface)", border: "1px solid var(--line)", fontFamily: "var(--font-display)", fontSize: 16, lineHeight: 1.7, color: "var(--ink)" } },
      "The fall of the Roman Empire was a slow process, not one event. ",
      h("mark", { style: { background: "#FEF08A", color: "var(--ink)", padding: "1px 3px", borderRadius: 3, boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" } }, "Historians often cite economic instability, military overreach, and political corruption as primary causes of the collapse."),
      " These pressures fed on one another until the empire could no longer hold."
    ),
  ]);
}

function FeaturePlayback() {
  return h(PlaybackModule, null);
}

function FeatureGrade() {
  return panel([
    h(
      "div",
      { key: "h", style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 } },
      h("span", { style: { fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-mute)", letterSpacing: "0.06em", textTransform: "uppercase" } }, "Thesis & Argument"),
      h("span", { className: "display", style: { fontSize: 22, color: "var(--ink)" } }, "22", h("span", { style: { fontSize: 15, color: "var(--ink-mute)" } }, " / 30"))
    ),
    h("div", { key: "bar", style: { height: 8, borderRadius: 999, background: "var(--bg-tint)", overflow: "hidden", marginBottom: 16 } }, h("div", { style: { width: "73%", height: "100%", background: "var(--teal)", borderRadius: 999 } })),
    h(
      "div",
      { key: "fb", style: { padding: 16, background: "var(--bg-tint)", borderRadius: 12, fontSize: 14, lineHeight: 1.55, color: "var(--ink-soft)", marginBottom: 14 } },
      "“Maria, your thesis lands, but paragraph 2 introduces a new claim without evidence. Tie it back to the source you used in paragraph 1, or cut it. ",
      h("strong", { style: { color: "var(--ink)" } }, "Proficient."),
      "”"
    ),
    h(
      "div",
      { key: "btns", style: { display: "flex", gap: 8 } },
      h("button", { style: { flex: 1, padding: "10px 14px", borderRadius: 10, border: 0, background: "var(--teal)", color: "var(--bg)", fontWeight: 600, fontSize: 13, cursor: "pointer" } }, "Approve"),
      h("button", { style: { flex: 1, padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line-strong)", background: "var(--bg)", color: "var(--ink)", fontWeight: 600, fontSize: 13, cursor: "pointer" } }, "Edit"),
      h("button", { style: { padding: "10px 14px", borderRadius: 10, border: "1px solid var(--line-strong)", background: "var(--bg)", color: "var(--ink-mute)", fontWeight: 600, fontSize: 13, cursor: "pointer" } }, "Skip")
    ),
  ]);
}

function FeatureTranscription() {
  return panel([
    h(
      "div",
      { key: "top", style: { marginBottom: 14 } },
      h(StatRibbon, { focus: "transcribed" }),
      h("div", { style: { fontSize: 12.5, fontFamily: "var(--font-mono)", color: "var(--ink-mute)", marginTop: 10 } }, "63% typed from another source")
    ),
    h(
      "div",
      { key: "excerpt", style: { padding: "14px 16px 16px", borderRadius: 12, background: "var(--surface)", border: "1px solid var(--line)", marginBottom: 14 } },
      h(
        "div",
        { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 11 } },
        h("span", { style: { fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-mute)", letterSpacing: "0.05em", textTransform: "uppercase" } }, "Transcribed passage"),
        h(
          "button",
          { type: "button", title: "Replay how this was typed", style: { display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 11px 5px 8px", borderRadius: 999, border: "1px solid var(--accent)", background: "var(--accent-soft)", color: "var(--accent-deep)", cursor: "pointer", fontSize: 12, fontWeight: 600, fontFamily: "var(--font-mono)" } },
          h("span", { style: { width: 18, height: 18, borderRadius: 999, background: "var(--accent)", color: "#fff", display: "grid", placeItems: "center", flexShrink: 0 } }, h("svg", { width: 8, height: 9, viewBox: "0 0 8 9", fill: "currentColor" }, h("path", { d: "M0 0v9l8-4.5z" }))),
          "Replay"
        )
      ),
      h(
        "div",
        { style: { fontFamily: "var(--font-display)", fontSize: 16, lineHeight: 1.7, color: "var(--ink)" } },
        "Rome’s decline had many tangled causes. ",
        h("mark", { style: { background: "rgba(46,123,255,0.24)", color: "var(--ink)", padding: "1px 3px", borderRadius: 3, boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" } }, "The empire’s overextended borders, currency debasement, and reliance on mercenary armies steadily eroded the state’s capacity to govern its provinces."),
        " Each pressure fed the next."
      )
    ),
    h(
      "div",
      { key: "v", style: { padding: 16, background: "var(--accent-soft)", borderRadius: 12, fontSize: 13, lineHeight: 1.5, color: "var(--ink-soft)" } },
      h("strong", { style: { color: "var(--ink)" } }, "Signature: "),
      "Steady, evenly-spaced keystrokes with almost no revisions or composing pauses, consistent with copying text from another screen rather than writing it."
    ),
  ]);
}

export const CheckmarkReport: Record<string, () => any> = {
  FeatureAI,
  FeaturePaste,
  FeaturePlayback,
  FeatureGrade,
  FeatureTranscription,
};
