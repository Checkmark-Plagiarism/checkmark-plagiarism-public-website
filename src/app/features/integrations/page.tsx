import { Metadata } from "next";
import Image from "next/image";
import {
  KeyRound,
  Link2,
  FileText,
  FileUp,
  Cloud,
  CloudUpload,
  ShieldCheck,
  Settings2,
  ArrowRight,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import { Card, CardContent } from "@/components/ui/card";
import FeatureHero from "@/sections/features/feature-hero";

export const metadata: Metadata = {
  title: "Integrations — Checkmark Plagiarism",
  description:
    "Single Sign-On with Google and Microsoft, deep integrations with Google Docs and Microsoft Word, plus uploads from Google Drive and OneDrive.",
  openGraph: { images: [""] },
};

export default function IntegrationsPage() {
  return (
    <main>
      {/* Hero */}
      <FeatureHero bgTint="bg-cyan-200">
        <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Integrations that fit your stack
        </h1>
        <p className="mt-4 text-center max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          Sign in with Google or Microsoft. Work in Google Docs or Microsoft Word. Upload directly
          from Google Drive or OneDrive—no extra steps.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <LinkButton href="#highlights" size="sm">See highlights</LinkButton>
          <LinkButton href="/pricing" size="sm" variant="outline">
            Try it at your school
          </LinkButton>
        </div>
      </FeatureHero>

      {/* Highlights */}
      <section id="highlights" className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <Highlight
              icon={KeyRound}
              title="Single Sign-On"
              text="Authenticate with your district’s Google Workspace or Microsoft Entra ID (Azure AD)."
              accent="from-cyan-600/20 via-cyan-500/10"
            />
            <Highlight
              icon={FileText}
              title="Docs & Word"
              text="Analyze drafts written in Google Docs or Microsoft Word—no copy/paste required."
              accent="from-emerald-600/20 via-emerald-500/10"
            />
            <Highlight
              icon={CloudUpload}
              title="Drive & OneDrive"
              text="Upload or sync directly from Google Drive and OneDrive with scoped, logged access."
              accent="from-fuchsia-600/20 via-fuchsia-500/10"
            />
          </div>
        </div>
      </section>

      {/* Logos / visual row */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            <Logo src="/images/google_logo.png" alt="Google Workspace " />
            <Logo src="/images/microsoft_logo.png" alt="Microsoft Entra ID " />
            <Logo src="/images/google_docs_logo.png" alt="Google Docs " />
            <Logo src="/images/microsoft_word_logo.png" alt="Microsoft Word " />
            <Logo src="/images/google_drive_logo.png" alt="Google Drive " />
            <Logo src="/images/microsoft_one_drive_logo.png" alt="Microsoft OneDrive " />
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Replace the logo paths above with your real assets when ready.
          </p>
        </div>
      </section>

      {/* Deep dive sections */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card className="ring-1 ring-cyan-300/60 dark:ring-cyan-900/50">
              <CardContent className="p-6">
                <Badge color="bg-cyan-600/15 text-cyan-800 dark:text-cyan-200">SSO</Badge>
                <h3 className="mt-2 text-xl font-semibold text-foreground">Google & Microsoft SSO</h3>
                <p className="mt-2 text-muted-foreground">
                  Skip new passwords. Teachers and students sign in with district credentials via
                  Google Workspace or Microsoft Entra ID (Azure AD). Roles and permissions follow
                  your directory—fast onboarding, easy offboarding.
                </p>
                <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>SAML/OAuth flows with minimal scopes</li>
                  <li>Role-aware access for teachers & students</li>
                  <li>Audit logs for compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="ring-1 ring-emerald-300/60 dark:ring-emerald-900/50">
              <CardContent className="p-6">
                <Badge color="bg-emerald-600/15 text-emerald-800 dark:text-emerald-200">Editors</Badge>
                <h3 className="mt-2 text-xl font-semibold text-foreground">Google Docs & Microsoft Word</h3>
                <p className="mt-2 text-muted-foreground">
                  Analyze drafts from the tools your writers already use. We read revision history where
                  available and map changes into behavior-aware signals for AI and plagiarism checks.
                </p>
                <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Google Docs change history signals</li>
                  <li>Microsoft Word (.docx) support</li>
                  <li>No copy/paste shenanigans</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="ring-1 ring-fuchsia-300/60 dark:ring-fuchsia-900/50">
              <CardContent className="p-6">
                <Badge color="bg-fuchsia-600/15 text-fuchsia-800 dark:text-fuchsia-200">Storage</Badge>
                <h3 className="mt-2 text-xl font-semibold text-foreground">Google Drive & OneDrive</h3>
                <p className="mt-2 text-muted-foreground">
                  Pull submissions directly from your cloud storage—scoped to the assignment and class you enable.
                  Files are processed securely; access is time-boxed and logged.
                </p>
                <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Folder-level or per-file consent</li>
                  <li>Restricted scopes and least-privilege access</li>
                  <li>Automatic cleanup and revocation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="ring-1 ring-slate-300/60 dark:ring-slate-800/60">
              <CardContent className="p-6">
                <Badge color="bg-slate-600/15 text-slate-800 dark:text-slate-200">Admin</Badge>
                <h3 className="mt-2 text-xl font-semibold text-foreground">District controls</h3>
                <p className="mt-2 text-muted-foreground">
                  Centralized settings for SSO providers, data retention windows, and which apps are allowed at your org.
                </p>
                <ul className="mt-4 text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>Toggle providers and required factors</li>
                  <li>Org-wide or course-level policies</li>
                  <li>Exports and audit trails</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connection steps */}
      <section id="connect" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">Connect in three quick steps</h2>
            <p className="mt-3 text-center text-muted-foreground">
              Minimal scopes, clear prompts, and you’re off to the races.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <ConnectStep
                k="01"
                title="Pick your provider"
                text="Choose Google Workspace or Microsoft Entra ID. You can enable both."
                icon={Settings2}
                color="from-cyan-600/30 via-cyan-500/20 to-transparent"
              />
              <ConnectStep
                k="02"
                title="Authorize & scope"
                text="Grant the minimum permissions for classes, assignments, and storage folders."
                icon={Link2}
                color="from-emerald-600/30 via-emerald-500/20 to-transparent"
              />
              <ConnectStep
                k="03"
                title="Start syncing"
                text="Sync rosters, pull docs, and accept Drive/OneDrive uploads—all within your LMS flow."
                icon={Cloud}
                color="from-fuchsia-600/30 via-fuchsia-500/20 to-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security & compliance */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card className="ring-1 ring-slate-300/60 dark:ring-slate-800/60">
              <CardContent className="p-6">
                <div className="inline-flex items-center gap-2 text-sm">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="font-semibold">Privacy by design</span>
                </div>
                <p className="mt-2 text-muted-foreground">
                  We request only the scopes we need, keep access scoped to enabled courses and assignments,
                  and log every sensitive action for auditability.
                </p>
              </CardContent>
            </Card>
            <Card className="ring-1 ring-slate-300/60 dark:ring-slate-800/60">
              <CardContent className="p-6">
                <div className="inline-flex items-center gap-2 text-sm">
                  <FileUp className="h-4 w-4" />
                  <span className="font-semibold">No content reuse</span>
                </div>
                <p className="mt-2 text-muted-foreground">
                  Student submissions aren’t used to train general models. Processing is solely for integrity checks,
                  grading, and reporting—full stop.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <LinkButton href="/privacy-policy" variant="outline">Read our Privacy Policy</LinkButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold">Connect once. Teach everywhere.</h2>
            <p className="mt-2 text-muted-foreground">
              Bring SSO, Google Docs, Microsoft Word, Drive, and OneDrive into a single integrity workflow.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <LinkButton href="/pricing">
                Get started <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
              <LinkButton href="/contact" variant="outline">Talk to sales</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- small components ---------- */

function Highlight({
  icon: Icon,
  title,
  text,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  accent: string; // tailwind gradient
}) {
  return (
    <Card className="overflow-hidden ring-1 ring-border">
      <div className={`h-2 bg-gradient-to-r ${accent} to-transparent`} />
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

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-10 w-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition">
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}

function Badge({ color, children }: { color: string; children: React.ReactNode }) {
  return <span className={`inline-flex text-xs px-2 py-1 rounded-full ${color}`}>{children}</span>;
}

function ConnectStep({
  k,
  title,
  text,
  icon: Icon,
  color,
}: {
  k: string;
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string; // gradient classes
}) {
  return (
    <Card className="overflow-hidden ring-1 ring-border">
      <div className={`relative h-24 bg-gradient-to-br ${color}`}>
        <div className="absolute left-4 top-4">
          <span className="text-xs px-2 py-1 rounded-full bg-background/60 backdrop-blur-sm ring-1 ring-border">
            Step {k}
          </span>
        </div>
        <div className="absolute right-4 top-4 opacity-40">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}
