import { IconArrow } from "./icons";

export function Cta() {
  return (
    <section className="py-[100px]">
      <div className="shell">
        <div
          className="rounded-[32px] text-bg relative overflow-hidden text-center"
          style={{
            padding: "clamp(48px, 8vw, 96px) clamp(32px, 6vw, 80px)",
            background: "linear-gradient(135deg, var(--teal) 0%, var(--teal-deep) 100%)",
          }}
        >
          <div
            className="absolute -top-[100px] -right-[100px] w-[360px] h-[360px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(232, 181, 71, 0.5), transparent 65%)" }}
          />
          <div className="relative max-w-[720px] mx-auto">
            <h2 className="display text-[clamp(40px,5vw,64px)] mb-6 text-bg leading-[1.05] text-balance">
              Built with students <em className="text-yellow">in mind.</em>
              <br />
              Trusted by educators.
            </h2>
            <p className="text-[18px] leading-[1.6] text-[rgba(251,247,239,0.82)] max-w-[560px] mx-auto mb-9">
              Try Checkmark on a real assignment in your own LMS. No credit card, no sales call, no
              obligation. Just see what your students&apos; writing looks like with the lights on, and
              how much further they go when their own thinking is what counts.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="/demo" className="btn btn-coral">
                Start a free trial <IconArrow size={16} />
              </a>
              <a href="/contact" className="btn btn-ghost text-bg border-[rgba(251,247,239,0.3)]">
                Schedule a demo
              </a>
            </div>
            <div className="mt-8 flex gap-6 justify-center flex-wrap text-[13px] text-[rgba(251,247,239,0.6)]">
              <span>Used in 1,200+ schools</span>
              <span>·</span>
              <span>FERPA &amp; SOC 2 Type II</span>
              <span>·</span>
              <span>Set up in 9 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
