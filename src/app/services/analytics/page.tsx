import { Metadata } from "next";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Users,
  Timer,
  FileDown,
  Building2,
  Armchair,
  LineChart,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import {
  ServiceHero,
  IconFeature,
  RelatedLink,
  ServiceCta,
} from "@/sections/services/shared";

export const metadata: Metadata = {
  title: "School & District Analytics — Checkmark Plagiarism",
  description:
    "Integrity trends, writing metrics, grade distributions, and teacher comparisons for school and district admins — with seat management and CSV export built in.",
  openGraph: { images: ["/images/services/report-originality-tiles.png"] },
};

const metrics = [
  { label: "Total Submissions", desc: "Volume across every course and teacher in scope" },
  { label: "Flagged Submissions", desc: "How many needed a closer look" },
  { label: "Plagiarism Rate", desc: "Share of submissions crossing your integrity threshold" },
  { label: "Writing Efficiency", desc: "Average time-per-word, from real writing sessions" },
];

export default function AnalyticsServicePage() {
  return (
    <main>
      <ServiceHero
        title="See integrity and writing trends across your whole school"
        sub="Individual reports answer “what happened on this essay?” The admin dashboard answers the bigger ones: where integrity issues cluster, how writing is trending, and whether interventions are working."
      >
        <LinkButton href="/contact" variant="hero">
          Talk to us about your school
        </LinkButton>
        <LinkButton href="/pricing" variant="outline-white">
          School &amp; district pricing
        </LinkButton>
      </ServiceHero>

      {/* Metric cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              The numbers on one screen
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-3xl bg-brand-100 p-6">
                  <p className="text-sm font-semibold text-brand-700 uppercase tracking-wide">
                    {m.label}
                  </p>
                  <p className="mt-2 text-sm text-foreground/70">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">Trends, not anecdotes</h2>
            <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
              Filter by teacher, course, and time period — daily or monthly granularity.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <IconFeature
                icon={TrendingUp}
                title="Plagiarism rate over time"
                text="Track integrity incidents as a rate, so growth in submissions doesn't read as growth in cheating."
                tone="cyan"
              />
              <IconFeature
                icon={PieChart}
                title="Plagiarism by type"
                text="Pasted vs. transcribed vs. uncited vs. AI — the mix tells you what to teach next."
                tone="fuchsia"
              />
              <IconFeature
                icon={LineChart}
                title="Scores over time"
                text="Average autograder scores by rubric category show whether writing is actually improving."
                tone="emerald"
              />
              <IconFeature
                icon={BarChart3}
                title="Grade distribution"
                text="Spot compression, inflation, or bimodal classes at a glance."
                tone="amber"
              />
              <IconFeature
                icon={Timer}
                title="Writing efficiency"
                text="Time-per-word from real sessions — a leading indicator reports alone can't give you."
                tone="blue"
              />
              <IconFeature
                icon={Users}
                title="Compare up to 4 teachers"
                text="Side-by-side trends across teachers or courses, color-coded — useful for calibration, not gotchas."
                tone="purple"
              />
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground inline-flex items-center gap-2 w-full justify-center">
              <FileDown className="h-4 w-4" /> Every view exports to CSV for your own analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Admin management */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              Built for how schools actually run
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <IconFeature
                icon={Armchair}
                title="Seat management"
                text="See seats used vs. available at a glance; grant and revoke student seats individually or in bulk."
                tone="emerald"
              />
              <IconFeature
                icon={Users}
                title="User management"
                text="Admins manage teachers and students per school, with roles that map to how your district delegates."
                tone="blue"
              />
              <IconFeature
                icon={Building2}
                title="District & multi-school views"
                text="District admins see every school in one place; education partners can manage licenses across schools they serve."
                tone="amber"
              />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <RelatedLink href="/security" label="Security & privacy" />
              <RelatedLink href="/cto" label="For technology directors" />
            </div>
          </div>
        </div>
      </section>

      <ServiceCta
        title="Bring analytics to your school"
        text="School and district plans include the admin dashboard, seat management, and analytics export. We'll walk you through it live."
      />
    </main>
  );
}
