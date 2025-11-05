import { Metadata } from "next";
import { Check, ArrowRight, Building2, GraduationCap, School, HelpCircle, ShieldCheck, Zap, Users } from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pricing — Checkmark Plagiarism",
  description:
    "Simple, education-friendly pricing. Start with a pilot, then scale to departments and districts with SSO and LMS integrations.",
  openGraph: { images: [""] },
};

export default function PricingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="text-center mb-16 bg-brand-900 pt-32 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Simple pricing for schools & districts
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 px-4">
          Start with a pilot, then scale with Google Classroom™ and Canvas LMS. Transparent features,
          FERPA-friendly data practices, and admin controls included.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <LinkButton href="#plans" size="lg" variant="outline-white" className="bg-brand-600">See plans</LinkButton>
          <LinkButton href="/contact" size="lg" variant="hero">Talk to sales <ArrowRight className="ml-2 h-4 w-4" /></LinkButton>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <Plan
              badge="Pilot"
              icon={GraduationCap}
              color="from-emerald-600/20 via-emerald-500/10"
              title="Educator Pilot"
              price="Request access"
              blurb="Great for proofs-of-concept in a few classes."
              cta={{ label: "Join the waitlist", href: "/contact" }}
              features={[
                "AI & plagiarism checks (limited seats)",
                "Revision-aware evidence & clear reports",
                "Google Docs / Word file support",
                "Email support",
              ]}
            />
            <Plan
              badge="Most Popular"
              popular
              icon={School}
              color="from-blue-600/20 via-blue-500/10"
              title="Department"
              price="Contact sales"
              blurb="Scale to a team, grade level, or department."
              cta={{ label: "Contact sales", href: "/contact" }}
              features={[
                "All Pilot features, plus more seats",
                "Google Classroom™ / Canvas LMS integration",
                "SSO (Google / Microsoft) & role-based access",
                "Bulk scans & assignment automations",
                "Priority support",
              ]}
            />
            <Plan
              badge="Custom"
              icon={Building2}
              color="from-fuchsia-600/20 via-fuchsia-500/10"
              title="District"
              price="Custom quote"
              blurb="District-wide deployment with governance."
              cta={{ label: "Request quote", href: "/contact" }}
              features={[
                "Enterprise SSO & admin policies",
                "Data retention controls & audit logs",
                "Advanced reporting & exports",
                "Onboarding & educator training",
                "Dedicated success manager",
              ]}
            />
          </div>

          {/* Fine print / disclosure */}
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Pricing is currently quote-based and tailored to your org’s size, usage, and integrations.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-foreground">What&apos;s included</h2>
            <p className="mt-3 text-center text-muted-foreground">
              All plans focus on transparent evidence and student growth—no black-box flags.
            </p>

            <div className="mt-10 overflow-x-auto bg-white rounded-2xl shadow-soft">
              <table className="w-full text-sm">
                <thead className="text-left">
                  <tr className="border-b border-border">
                    <th className="py-4 pl-6 pr-4">Capability</th>
                    <th className="py-4 px-4">Educator Pilot</th>
                    <th className="py-4 px-4">Department</th>
                    <th className="py-4 pr-6 pl-4">District</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  {[
                    ["AI detection (revision-aware)", true, true, true],
                    ["Plagiarism similarity & paraphrase cues", true, true, true],
                    ["Explainable reports & confidence ranges", true, true, true],
                    ["Google Docs / Microsoft Word support", true, true, true],
                    ["Google Classroom™ / Canvas LMS", "Limited", true, true],
                    ["SSO (Google / Microsoft)", "—", true, true],
                    ["Bulk scans & automations", "—", true, true],
                    ["Admin controls & audit logs", "—", "—", true],
                    ["Onboarding & educator training", "—", "Optional", true],
                    ["Dedicated success manager", "—", "—", true],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/60">
                      <td className="py-3 pl-6 pr-4 text-foreground">{row[0] as string}</td>
                      {[row[1], row[2], row[3]].map((v, j) => (
                        <td key={j} className={`py-3 ${j === 2 ? 'pr-6' : ''} px-4`}>
                          {v === true ? (
                            <span className="inline-flex items-center gap-2 text-green-700 dark:text-emerald-300">
                              <Check className="h-4 w-4" /> Included
                            </span>
                          ) : typeof v === "string" ? (
                            <span className="text-muted-foreground">{v}</span>
                          ) : (
                            <span className="text-muted-foreground">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <LinkButton href="/contact" variant="outline">Ask about site-wide licensing</LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* EDU perks */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <Perk
              icon={ShieldCheck}
              title="Privacy by design"
              text="FERPA-friendly, least-privilege access, and clear audit trails."
            />
            <Perk
              icon={Zap}
              title="Works where you teach"
              text="Google Classroom™ and Canvas LMS integrations keep teachers in-flow."
            />
            <Perk
              icon={Users}
              title="Built for learning"
              text="Revision-aware evidence and plain-language reports support student growth."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground">Pricing FAQ</h2>
            <div className="mt-8 grid grid-cols-1 gap-4">
              <Faq q="Do you have a free trial or pilot?" a="Yes. We offer educator pilots to validate fit in real classes before scaling to a department or district." />
              <Faq q="How are quotes determined?" a="Based on number of educators/students, enabled integrations (Google Classroom™/Canvas), and support/training needs." />
              <Faq q="Can we use SSO?" a="Yes—Google and Microsoft SSO are available on Department and District plans." />
              <Faq q="Do you train on student work?" a="No. Student submissions aren't used to train general models. Processing is solely for integrity checks, grading, and reporting." />
              <Faq q="Where is data stored?" a="On secure cloud infrastructure with encryption in transit and at rest. Access is scoped to enabled classes/assignments with logs." />
            </div>

            <div className="mt-8 text-center">
              <LinkButton href="/privacy-policy" variant="outline">Read our Privacy Policy</LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-700 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-300 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to bring Checkmark to your school?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Start with a pilot and scale confidently—no surprises.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton href="/contact" variant="outline-white" size="xl">
                Request a quote <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
              <LinkButton href="/features" variant="outline-white" size="xl">
                Explore features
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- components ---------- */

function Plan({
  badge,
  icon: Icon,
  color,
  title,
  price,
  blurb,
  popular = false,
  cta,
  features,
}: {
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string; // tailwind gradient
  title: string;
  price: string;
  blurb: string;
  popular?: boolean;
  cta: { label: string; href: string };
  features: string[];
}) {
  return (
    <Card className={`relative overflow-hidden ring-1 ring-border ${popular ? "shadow-medium" : "shadow-soft"}`}>
      {/* gradient accent */}
      <div className={`h-2 bg-gradient-to-r ${color} to-transparent`} />
      {/* popular label */}
      {popular && (
        <div className="absolute right-3 top-3 text-[10px] uppercase tracking-wider text-primary bg-primary/10 rounded-full px-2 py-1">
          Most Popular
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
            <Icon className="h-5 w-5" />
          </div>
          <div className="text-xs px-2 py-1 rounded-full bg-background/60 backdrop-blur-sm ring-1 ring-border">
            {badge}
          </div>
        </div>
        <h3 className="mt-3 text-xl font-semibold">{title}</h3>
        <div className="mt-1 text-2xl font-bold">{price}</div>
        <p className="mt-2 text-sm text-muted-foreground">{blurb}</p>

        <ul className="mt-4 space-y-2 text-sm">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span className="text-muted-foreground">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <LinkButton href={cta.href} className="w-full">{cta.label}</LinkButton>
        </div>
      </CardContent>
    </Card>
  );
}

function Perk({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <Card className="ring-1 ring-border">
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
            <Icon className="h-5 w-5 text-foreground/80" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-start gap-3">
        <HelpCircle className="mt-0.5 h-5 w-5 text-muted-foreground" />
        <div>
          <h3 className="font-medium text-foreground">{q}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}
