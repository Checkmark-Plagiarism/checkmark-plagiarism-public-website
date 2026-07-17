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
import { Card, CardContent } from "@/components/ui/card";
import FeatureHero from "@/sections/features/feature-hero";
import { IconFeature, RelatedLink, ServiceCta } from "@/sections/services/shared";

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
      <FeatureHero bgTint="bg-cyan-200">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          See integrity and writing trends across your whole school
        </h1>
        <p className="mt-4 text-center max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Individual reports answer &ldquo;what happened on this essay?&rdquo; The admin dashboard
          answers the bigger ones: where integrity issues cluster, how writing is trending, and
          whether interventions are working.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <LinkButton href="/contact" size="sm">
            Talk to us about your school
          </LinkButton>
          <LinkButton href="/pricing" size="sm" variant="outline">
            School & district pricing
          </LinkButton>
        </div>
      </FeatureHero>

      {/* Metric cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              The numbers on one screen
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((m) => (
                <Card key={m.label} className="ring-1 ring-border">
                  <CardContent className="p-6">
                    <p className="text-sm font-semibold text-brand-700 uppercase tracking-wide">
                      {m.label}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                  </CardContent>
                </Card>
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
                accent="from-cyan-600/25 via-cyan-500/10"
              />
              <IconFeature
                icon={PieChart}
                title="Plagiarism by type"
                text="Pasted vs. transcribed vs. uncited vs. AI — the mix tells you what to teach next."
                accent="from-fuchsia-600/25 via-fuchsia-500/10"
              />
              <IconFeature
                icon={LineChart}
                title="Scores over time"
                text="Average autograder scores by rubric category show whether writing is actually improving."
                accent="from-emerald-600/25 via-emerald-500/10"
              />
              <IconFeature
                icon={BarChart3}
                title="Grade distribution"
                text="Spot compression, inflation, or bimodal classes at a glance."
                accent="from-amber-600/25 via-amber-500/10"
              />
              <IconFeature
                icon={Timer}
                title="Writing efficiency"
                text="Time-per-word from real sessions — a leading indicator reports alone can't give you."
                accent="from-blue-600/25 via-blue-500/10"
              />
              <IconFeature
                icon={Users}
                title="Compare up to 4 teachers"
                text="Side-by-side trends across teachers or courses, color-coded — useful for calibration, not gotchas."
                accent="from-purple-600/25 via-purple-500/10"
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
                accent="from-emerald-600/25 via-emerald-500/10"
              />
              <IconFeature
                icon={Users}
                title="User management"
                text="Admins manage teachers and students per school, with roles that map to how your district delegates."
                accent="from-blue-600/25 via-blue-500/10"
              />
              <IconFeature
                icon={Building2}
                title="District & multi-school views"
                text="District admins see every school in one place; education partners can manage licenses across schools they serve."
                accent="from-amber-600/25 via-amber-500/10"
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
