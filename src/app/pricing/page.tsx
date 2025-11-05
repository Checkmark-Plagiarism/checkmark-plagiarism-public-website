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
          <LinkButton href="/contact" size="lg" variant="hero">Talk to sales <ArrowRight className="ml-2 h-4 w-4" /></LinkButton>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <Plan
              icon={GraduationCap}
              color="from-emerald-600/20 via-emerald-500/10"
              title="Basic"
              price="$14/mo"
              priceSubtitle="billed annually"
              blurb="Perfect for individual teachers. $18/mo if billed monthly."
              cta={{ label: "Get Started", href: "/contact" }}
              features={[
                "AI & plagiarism detection (~50 reports/month)",
                "Keystroke & copy/paste analysis",
                "Essay Playback™",
                "Google Docs support",
                "Google Classroom integration",
              ]}
            />
            <Plan
              icon={School}
              color="from-blue-600/20 via-blue-500/10"
              title="Pro"
              price="$17/mo"
              priceSubtitle="billed annually"
              blurb="Advanced features for power users with more capacity. $21/mo if billed monthly."
              cta={{ label: "Get Started", href: "/contact" }}
              features={[
                "Everything in Basic",
                { text: "Autograding", highlight: true },
                { text: "Writing Feedback", highlight: true },
                "~120 reports/month",
              ]}
            />
            <Plan
              icon={Building2}
              color="from-fuchsia-600/20 via-fuchsia-500/10"
              title="School & District"
              price="Custom quote"
              blurb="Full deployment with integrations and admin controls."
              cta={{ label: "Contact Sales", href: "/contact" }}
              features={[
                "Everything in Pro",
                "Google Classroom & Canvas LMS integration",
                "Microsoft Word support",
                "Google & Microsoft SSO",
                "Admin controls & reporting",
                "Onboarding & training",
              ]}
            />
          </div>

          {/* Fine print / disclosure */}
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Basic and Pro plans have fixed pricing. School & District pricing is customized based on size, integrations, and support needs.
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
                    <th className="py-4 px-4">Basic</th>
                    <th className="py-4 px-4">Pro</th>
                    <th className="py-4 pr-6 pl-4">School & District</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  {[
                    ["Monthly report limit", "~50", "~120", "Custom"],
                    ["Keystroke Analysis (patent pending)", true, true, true],
                    ["Essay Playback™", true, true, true],
                    ["AI detection (static analysis)", true, true, true],
                    ["Plagiarism similarity & paraphrase cues", true, true, true],
                    ["Explainable reports & confidence ranges", true, true, true],
                    ["Google Docs support", true, true, true],
                    ["Microsoft Word support", "—", "—", true],
                    ["Google Classroom integration", true, true, true],
                    ["Canvas LMS integration", "—", "—", true],
                    ["Autograding", "—", true, true],
                    ["Writing Feedback", "—", true, true],
                    ["Google / Microsoft SSO", "—", "—", true],
                    ["Admin controls & reporting", "—", "—", true],
                    ["Onboarding & training", "—", "—", true],
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
              <LinkButton href="/#features" variant="outline-white" size="xl">
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
  icon: Icon,
  color,
  title,
  price,
  priceSubtitle,
  blurb,
  cta,
  features,
}: {
  icon: React.ComponentType<{ className?: string }>;
  color: string; // tailwind gradient
  title: string;
  price: string;
  priceSubtitle?: string;
  blurb: string;
  cta: { label: string; href: string };
  features: Array<string | { text: string; highlight: boolean }>;
}) {
  return (
    <Card className="relative overflow-hidden ring-1 ring-border shadow-soft flex flex-col">
      {/* gradient accent */}
      <div className={`h-2 bg-gradient-to-r ${color} to-transparent`} />
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="mt-3 text-2xl font-bold">{price}</div>
        {priceSubtitle && (
          <div className="text-sm text-muted-foreground">{priceSubtitle}</div>
        )}
        <p className="mt-2 text-sm text-muted-foreground">{blurb}</p>

        <ul className="mt-4 space-y-2 text-sm">
          {features.map((f, i) => {
            const isHighlighted = typeof f === 'object' && f.highlight;
            const text = typeof f === 'string' ? f : f.text;

            return (
              <li key={i} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-emerald-600 flex-shrink-0" />
                <span className={isHighlighted
                  ? "bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold"
                  : "text-muted-foreground"
                }>
                  {text}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto pt-6">
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
