// Checkmark wordmark + logo mark — ported from the checkmark-homepage prototype.

export function CheckmarkLogo({
  size = 30,
  light,
}: {
  size?: number;
  /** Pass a light color (e.g. "#fff") to render the wordmark on a dark background. */
  light?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        fontSize: 19,
        color: light ?? "var(--ink)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/redesign/logo.png"
        width={size}
        height={size}
        alt="Checkmark Plagiarism logo"
        style={{ display: "block", flexShrink: 0 }}
      />
      <span style={{ display: "inline-flex", alignItems: "baseline", gap: 6 }}>
        <span style={{ color: light ?? "hsl(var(--brand-700))" }}>Checkmark</span>
        <span
          style={{
            color: light ? "rgba(255, 255, 255, 0.62)" : "var(--ink-mute)",
            fontWeight: 500,
            fontSize: "0.78em",
          }}
        >
          Plagiarism
        </span>
      </span>
    </div>
  );
}

export default CheckmarkLogo;
