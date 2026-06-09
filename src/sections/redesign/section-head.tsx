import type { CSSProperties } from "react";

// Centered (or left-aligned) section header: eyebrow + display heading + sub.
// `title` may contain inline HTML (e.g. an <em> accent), matching the prototype.
export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";
  const wrap: CSSProperties = {
    textAlign: align,
    maxWidth: centered ? 720 : 600,
    margin: centered ? "0 auto 56px" : "0 0 56px",
  };
  return (
    <div style={wrap}>
      <div className="eyebrow" style={{ marginBottom: 18 }}>
        <span className="dot" />
        {eyebrow}
      </div>
      <h2
        className="display"
        style={{ fontSize: "clamp(36px, 5vw, 56px)", marginBottom: 18, textWrap: "balance" }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {sub && (
        <p
          style={{
            fontSize: 18,
            color: "var(--ink-soft)",
            maxWidth: 620,
            margin: centered ? "0 auto" : 0,
            textWrap: "pretty",
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export default SectionHead;
