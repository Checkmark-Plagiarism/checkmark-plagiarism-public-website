import type { ReactNode } from "react";

// Custom-drawn line icons (1.6 stroke, rounded) — ported from the
// checkmark-homepage prototype (components.jsx).

export type IconProps = {
  size?: number;
  stroke?: number;
  color?: string;
};

function Icon({
  size = 22,
  stroke = 1.6,
  color = "currentColor",
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const IconCheck = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 12.5l5 5L20 6.5" />
  </Icon>
);

export const IconArrow = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const IconHeart = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 20s-7-4.5-7-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 21 10c0 5.5-9 10-9 10z" />
  </Icon>
);

export const IconShield = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
);

export const IconPlug = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 7V3M15 7V3M6 7h12v4a6 6 0 0 1-6 6 6 6 0 0 1-6-6V7zM12 17v4" />
  </Icon>
);

export const IconBrain = (p: IconProps) => (
  <Icon {...p}>
    <path d="M9 4.5a3 3 0 0 0-3 3v.5a3 3 0 0 0-2 5 3 3 0 0 0 2 5v.5a3 3 0 0 0 5 2 3 3 0 0 0 5-2v-.5a3 3 0 0 0 2-5 3 3 0 0 0-2-5v-.5a3 3 0 0 0-5-2 3 3 0 0 0-2 0z" />
    <path d="M11 8v8M11 12h-2" />
  </Icon>
);

export const IconKeyboard = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M7 10h.01M11 10h.01M15 10h.01M7 14h10" />
  </Icon>
);

export const IconClipboard = (p: IconProps) => (
  <Icon {...p}>
    <rect x="6" y="4" width="12" height="17" rx="2" />
    <path d="M9 4v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11h6M9 15h4" />
  </Icon>
);

export const IconSparkle = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M6 18l4-4M14 10l4-4" />
  </Icon>
);

export const IconGrade = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 13l3 3 5-7" />
  </Icon>
);

export const IconLayers = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5" />
  </Icon>
);

export const IconClock = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
);

export const IconDollar = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3v18M16 7H10a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H8" />
  </Icon>
);
