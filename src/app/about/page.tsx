// app/company/team/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Mail, ShieldCheck, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FeatureHero from "@/sections/features/feature-hero";

export const metadata: Metadata = {
  title: "Our Team — Checkmark Plagiarism",
  description:
    "Meet the team building fair, transparent plagiarism detection and AI-aware grading for real classrooms.",
  openGraph: { images: [""] },
};

type Member = {
  name: string;
  role: string;
  email: string;
  img?: string; // optional, can be wired to CMS later
};

const TEAM: Member[] = [
  {
    name: "Nicholas Mark",
    role: "Chief Executive",
    email: "nicholas@checkmarkplagiarism.com",
  },
  {
    name: "Emma Ritto",
    role: "Chief Operations",
    email: "erittoo@checkmarkplagiarism.com".replace("oo","o"), // simple guard if pasted wrong
  },
  {
    name: "Tony Li",
    role: "Chief Operations",
    email: "tony.li@checkmarkplagiarism.com".replace("oo","o"), // simple guard if pasted wrong
  },
  {
    name: "Jaron King",
    role: "Senior Software Developer",
    email: "jaron.king@checkmarkplagiarism.com",
  },
];

export default function TeamPage() {
  return (
    <main>
      {/* Hero */}
      <FeatureHero bgTint="bg-blue-200">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-blue-900 ring-1 ring-blue-300/60">
            <Users2 className="h-3.5 w-3.5" />
            Meet the Team
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            People behind Checkmark Plagiarism
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Educators, builders, and researchers focused on academic integrity
            and classroom-ready tooling.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="inline-flex">
              <Button size="sm">Contact us</Button>
            </Link>
            <Link href="/features/pricing" className="inline-flex">
              <Button size="sm" variant="outline">
                Try it at your school
              </Button>
            </Link>
          </div>
        </div>
      </FeatureHero>

      {/* Team grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {TEAM.map((m) => (
              <TeamCard key={m.email} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Values / footer CTA for cohesion with feature pages */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Built for fairness and transparency
            </h2>
            <p className="mt-3 text-muted-foreground">
              We design detection grounded in revision history, with clear
              explanations and privacy-respecting data practices.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="/privacy-policy">
                <Button variant="outline">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Read our Privacy Policy
                </Button>
              </Link>
              <Link href="/features/pricing">
                <Button>Get started</Button>
              </Link>
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
    <Card className="overflow-hidden ring-1 ring-border">
      <div className="h-24 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-transparent" />
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          {member.img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={member.img}
              alt={member.name}
              className="h-14 w-14 rounded-xl object-cover ring-1 ring-border"
            />
          ) : (
            <div className="h-14 w-14 rounded-xl bg-blue-600/10 ring-1 ring-blue-300/40 flex items-center justify-center text-blue-900 font-semibold">
              {initials}
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              {member.name}
            </h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </div>
        </div>

        <div className="mt-4">
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            {member.email}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
