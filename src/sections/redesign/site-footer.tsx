import { CheckmarkLogo } from "./checkmark-logo";

const COLUMNS = [
  { title: "Product", links: ["Essay Playback", "AI Detection", "Autograder", "Integrations", "Pricing"] },
  { title: "For schools", links: ["K–12", "Higher ed", "Districts", "Implementation", "FAQ"] },
  { title: "Company", links: ["About", "Trust & privacy", "Research", "Contact", "Careers"] },
];

export function SiteFooter() {
  return (
    <footer className="pt-12 pb-10 border-t border-line">
      <div className="shell grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-10">
        <div>
          <CheckmarkLogo />
          <p className="text-sm text-ink-mute mt-4 max-w-[280px] leading-[1.55]">
            Plagiarism forensics for K–12 and higher ed. Built to protect the part of school that
            matters: actual learning.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className="text-[13px] font-semibold mb-3.5">{col.title}</div>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-ink-mute no-underline hover:text-ink transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="shell flex justify-between items-center pt-6 border-t border-line gap-4 flex-wrap">
        <span className="text-xs text-ink-mute">© 2026 Checkmark. FERPA-compliant. SOC 2 Type II.</span>
        <span className="text-xs text-ink-mute font-mono">checkmarkplagiarism.com</span>
      </div>
    </footer>
  );
}

export default SiteFooter;
