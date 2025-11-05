// app/company/team/page.tsx
import { Metadata } from "next";
import { ShieldCheck, Eye, Scale, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link";

export const metadata: Metadata = {
  title: "Our Team — Checkmark Plagiarism",
  description:
    "Meet the team building fair, transparent plagiarism detection and AI-aware grading for real classrooms.",
  openGraph: { images: [""] },
};

type Member = {
  name: string;
  role: string;
  img?: string;
};

const TEAM: Member[] = [
  {
    name: "Nicholas Mark",
    role: "Chief Executive",
    img: "/images/headshots/nicholas-headshot.png",
  },
  {
    name: "Vince Plaza",
    role: "VP Business",
  },
  {
    name: "Emma Ritto",
    role: "VP of Marketing",
    img: "/images/headshots/emma-headshot.png",
  },
  {
    name: "Tony Li",
    role: "VP of Sales",
    img: "/images/headshots/tony-headshot.png",
  },
  {
    name: "Jaron King",
    role: "Senior Software Developer",
    img: "/images/headshots/jaron-headshot.png",
  },
  {
    name: "Kevin Lee",
    role: "Machine Learning Developer",
    img: "/images/headshots/kevin-headshot.png",
  },
];

export default function TeamPage() {
  return (
    <main>
      {/* Hero */}
      <section className="text-center mb-16 bg-brand-700 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            People behind Checkmark Plagiarism
          </h1>
          <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
            Educators, builders, and researchers focused on academic integrity
            and helping student writing.
          </p>

          <div className="mt-8">
            <LinkButton href="/contact" size="lg" variant="outline-white">
              Contact us
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-3xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {TEAM.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide how we build tools for academic integrity
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <ValueCard
              icon={Eye}
              title="Transparency"
              description="Clear evidence and explanations, no black-box decisions. Every detection is backed by revision history and concrete examples."
            />
            <ValueCard
              icon={Scale}
              title="Fairness"
              description="Revision-aware detection that supports student growth. We focus on understanding writing processes, not just flagging outcomes."
            />
            <ValueCard
              icon={ShieldCheck}
              title="Privacy"
              description="FERPA-friendly data practices and student data protection. Your students' work is secure and never used for training models."
            />
            <ValueCard
              icon={GraduationCap}
              title="Education-First"
              description="Built by educators, for educators and students. We understand classroom realities and design tools that actually help teaching."
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-brand-700 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-300 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built for fairness and transparency
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              We design detection grounded in revision history, with clear
              explanations and privacy-respecting data practices.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton href="/privacy-policy" variant="outline-white" size="xl">
                <ShieldCheck className="mr-2 h-4 w-4" />
                Read our Privacy Policy
              </LinkButton>
              <LinkButton href="/pricing" variant="outline-white" size="xl">
                Get started
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- small components ---------- */

function TeamCard({ member }: { member: Member }) {
  const initials = member.name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="flex flex-col items-center">
      {/* Profile circle */}
      {member.img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={member.img}
          alt={member.name}
          className="h-44 w-44 rounded-full object-cover ring-4 ring-white shadow-medium"
        />
      ) : (
        <div className="h-44 w-44 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white text-4xl font-bold shadow-medium">
          {initials}
        </div>
      )}

      {/* Info card that overlaps the circle */}
      <Card className="w-full -mt-6 ring-1 ring-border shadow-soft relative z-10">
        <CardContent className="py-4 px-3 text-center flex flex-col justify-center h-20">
          <h3 className="text-lg font-semibold text-foreground">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
        </CardContent>
      </Card>
    </div>
  );
}

function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <Card className="ring-1 ring-border shadow-soft">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0">
            <Icon className="h-6 w-6 text-brand-600" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
