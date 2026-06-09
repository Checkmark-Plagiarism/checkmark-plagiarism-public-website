import { CheckmarkLogo } from "./checkmark-logo";
import { IconArrow } from "./icons";

// Top navigation for the homepage redesign — ported from the prototype (all.js
// Nav). The prototype's Mobile/Desktop preview toggle is dropped (it was a
// prototyping affordance, not real site chrome).

const navLink =
  "text-sm text-white/[0.78] no-underline font-medium hover:text-white transition-colors";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0B1733] text-white border-b border-white/[0.08]">
      <div className="shell flex items-center justify-between gap-6 h-[72px]">
        <CheckmarkLogo light="#fff" />
        <div className="hidden md:flex items-center gap-6 whitespace-nowrap">
          <a href="#features" className={navLink}>
            Product
          </a>
          <a href="#values" className={navLink}>
            Why Checkmark
          </a>
          <a href="#integrations" className={navLink}>
            Integrations
          </a>
          <a href="/pricing" className={navLink}>
            Pricing
          </a>
        </div>
        <div className="flex items-center gap-2.5 whitespace-nowrap">
          <a href="/demo" className="btn px-4 py-2.5 text-sm bg-brand-500 text-white">
            Try it free <IconArrow size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
