"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Renders the global site header/footer, except on routes that ship their own
 * chrome — the redesigned homepage ("/") carries its own nav + footer. Header
 * and footer are passed in as already-rendered server components.
 */
export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome = pathname === "/";

  return (
    <>
      {!hideChrome && header}
      {children}
      {!hideChrome && footer}
    </>
  );
}
