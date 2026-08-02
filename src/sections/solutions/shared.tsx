"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  GraduationCap,
  Sparkles,
  School,
  Building2,
  Check,
  ExternalLink,
  FileSearch,
  History,
  Plug,
  BarChart3,
  Copy,
  AlertCircle,
  Clock,
  BookOpen,
  Award,
  Smile,
  PenTool,
  MessageSquare,
  BookMarked,
  Lightbulb,
  Workflow,
  Server,
  Lock,
  Sliders,
  HelpCircle,
  FileCheck2,
  FileSpreadsheet,
  Users,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import ContactForm from "@/sections/contact/contact-form";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  fileSearch: FileSearch,
  sparkles: Sparkles,
  history: History,
  graduationCap: GraduationCap,
  plug: Plug,
  barChart3: BarChart3,
  copy: Copy,
  alertCircle: AlertCircle,
  clock: Clock,
  shieldCheck: ShieldCheck,
  bookOpen: BookOpen,
  award: Award,
  smile: Smile,
  penTool: PenTool,
  messageSquare: MessageSquare,
  bookMarked: BookMarked,
  lightbulb: Lightbulb,
  building2: Building2,
  workflow: Workflow,
  server: Server,
  lock: Lock,
  sliders: Sliders,
  checkCircle2: CheckCircle2,
  helpCircle: HelpCircle,
  fileCheck2: FileCheck2,
  fileSpreadsheet: FileSpreadsheet,
  check: Check,
  school: School,
  users: Users,
};

export function IconByName({ name, className }: { name: string; className?: string }) {
  const IconComponent = ICON_MAP[name] || Sparkles;
  return <IconComponent className={className} />;
}

export function SolutionHero({
  badge = "Solutions for K–12 Schools",
  title,
  sub,
  primaryCtaText = "Request a School Demo",
  primaryCtaHref = "#request-demo",
  secondaryCtaText = "View Sample Assignment Report",
  secondaryCtaHref = "https://teach.checkmarkplagiarism.com/example-report",
}: {
  badge?: string;
  title: string;
  sub: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}) {
  return (
    <section className="text-center bg-brand-900 pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="relative z-10 container mx-auto px-4">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
            <School className="w-4 h-4 text-brand-300" />
            <span>{badge}</span>
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto text-balance leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4 leading-relaxed mb-8">
          {sub}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <LinkButton href={primaryCtaHref} variant="hero">
            {primaryCtaText} <ArrowRight className="ml-2 h-4 w-4" />
          </LinkButton>
          <a
            href={secondaryCtaHref}
            target={secondaryCtaHref.startsWith("http") ? "_blank" : "_self"}
            rel={secondaryCtaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-smooth h-11 px-6 border-2 border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
          >
            {secondaryCtaText} <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function ProblemsGrid({
  title = "Problems Checkmark Helps Solve",
  subtitle = "Modern classrooms face unprecedented challenges with digital writing, generative AI, and academic integrity.",
  problems,
}: {
  title?: string;
  subtitle?: string;
  problems: {
    icon: string;
    title: string;
    description: string;
  }[];
}) {
  return (
    <section className="py-16 bg-brand-50/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 border border-border/80 shadow-soft hover:shadow-medium transition-smooth flex flex-col justify-between"
            >
              <div>
                <div className="h-12 w-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <IconByName name={p.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CapabilitiesSection({
  title = "Core Capabilities Built for Education",
  subtitle = "Checkmark provides transparent evidence across all aspects of student writing.",
  capabilities,
}: {
  title?: string;
  subtitle?: string;
  capabilities: {
    icon: string;
    title: string;
    description: string;
    tag?: string;
  }[];
}) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 border border-border shadow-soft hover:border-brand-300 transition-smooth"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-11 w-11 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center">
                  <IconByName name={c.icon} className="w-5 h-5" />
                </div>
                {c.tag && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-100 text-brand-800">
                    {c.tag}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SchoolTypesGrid() {
  const schoolTypes = [
    {
      title: "Middle Schools",
      href: "/solutions/middle-schools",
      icon: School,
      desc: "Focus on teaching proper paraphrasing, citation fundamentals, and building early academic integrity habits.",
    },
    {
      title: "High Schools",
      href: "/solutions/high-schools",
      icon: GraduationCap,
      desc: "Empower teachers to review AI writing indicators alongside authorship playback for essays and AP coursework.",
    },
    {
      title: "School Districts",
      href: "/solutions/school-districts",
      icon: Building2,
      desc: "Standardize policies, centralize administrative reporting, and deploy seamlessly across your LMS infrastructure.",
    },
    {
      title: "Private & Independent",
      href: "/solutions/private-schools",
      icon: ShieldCheck,
      desc: "Uphold rigorous academic standards and honor codes with customizable, policy-aligned investigation workflows.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-foreground">Solutions Tailored by School Type</h2>
          <p className="mt-3 text-muted-foreground">
            Explore features specifically tailored to your institution&apos;s academic standards and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schoolTypes.map((st, idx) => (
            <Link key={idx} href={st.href} className="group">
              <div className="h-full rounded-2xl bg-white p-6 border border-border shadow-soft hover:shadow-medium hover:border-brand-500 transition-smooth flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-brand-600 text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-smooth">
                    <st.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-brand-700 transition-smooth mb-2">
                    {st.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{st.desc}</p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  <span>Explore solution</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LmsIntegrationsSection() {
  const integrations = [
    {
      name: "Google Classroom",
      logo: "/images/Google-Classroom-Logo-700x394.png",
      href: "/services/integrations/google-classroom",
      desc: "One-click assignment sync and automatic submission checking directly within Google Workspace for Education.",
    },
    {
      name: "Canvas LMS",
      logo: "/images/Canvas_Bug_Color_RGB.png",
      href: "/services/integrations/canvas-lms",
      desc: "Deep SpeedGrader integration. Reports and score cards embed right in teacher evaluation views.",
    },
    {
      name: "Buzz LMS",
      logo: "/images/services/buzz_icon.png",
      href: "/services/integrations/buzz-lms",
      desc: "Full LTI 1.3 integration supporting district-wide course rosters, automated grading, and reporting.",
    },
    {
      name: "LTI 1.3 & SSO",
      logo: "/images/services/clever-c.png",
      href: "/services/integrations",
      desc: "Universal standard compatibility with Clever, ClassLink, SAML 2.0, and OAuth 2.0 single sign-on.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-foreground">Supported LMS Integrations</h2>
          <p className="mt-3 text-muted-foreground">
            Checkmark fits right into your existing learning management system so teachers and students never have to switch tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((item, idx) => (
            <Link key={idx} href={item.href} className="group">
              <div className="h-full rounded-2xl bg-white p-6 border border-border shadow-soft hover:shadow-medium hover:border-brand-400 transition-smooth flex flex-col justify-between">
                <div>
                  <div className="h-16 w-full flex items-center justify-center mb-4 p-2 bg-slate-50 rounded-xl">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={120}
                      height={60}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-brand-700 transition-smooth mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-700">
                  <span>View integration details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialCard({
  quote,
  author,
  role,
  school,
}: {
  quote: string;
  author: string;
  role: string;
  school: string;
}) {
  return (
    <div className="my-10 max-w-4xl mx-auto rounded-3xl bg-brand-900 text-white p-8 md:p-10 shadow-medium relative overflow-hidden">
      <div className="text-brand-300/20 text-8xl font-serif absolute -top-4 left-6 select-none pointer-events-none">
        &ldquo;
      </div>
      <div className="relative z-10">
        <p className="text-lg md:text-xl font-medium leading-relaxed mb-6 italic text-white/95">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="border-t border-white/20 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="font-bold text-white text-base">{author}</div>
            <div className="text-white/80 text-sm">{role} &bull; {school}</div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-brand-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Educator Partner
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResourcesGrid({
  title = "Academic Integrity Resources",
  subtitle = "Guides, templates, and frameworks to support your faculty, students, and administration.",
  resources,
}: {
  title?: string;
  subtitle?: string;
  resources: {
    title: string;
    description: string;
    href: string;
    category?: string;
  }[];
}) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-foreground">{title}</h2>
          <p className="mt-3 text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((r, idx) => (
            <Link key={idx} href={r.href} className="group">
              <div className="h-full rounded-2xl bg-white p-6 border border-border shadow-soft hover:shadow-medium hover:border-brand-400 transition-smooth flex flex-col justify-between">
                <div>
                  {r.category && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 inline-block mb-3">
                      {r.category}
                    </span>
                  )}
                  <h3 className="text-base font-bold text-foreground group-hover:text-brand-700 transition-smooth mb-2 line-clamp-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{r.description}</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-700">
                  <span>Read resource</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactFormSection({
  title = "Request a School Demo or Consultation",
  subtitle = "See how Checkmark brings clarity, speed, and fairness to academic integrity across your institution.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id="request-demo" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Direct Consultation
            </div>
            <h2 className="text-3xl font-bold text-foreground leading-tight">{title}</h2>
            <p className="text-muted-foreground leading-relaxed">{subtitle}</p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Tailored for K–12 & Higher Ed</h4>
                  <p className="text-xs text-muted-foreground">Custom seat counts, LMS setups, and policy alignment.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Interactive Sample Reports</h4>
                  <p className="text-xs text-muted-foreground">Test with actual student assignments in real time.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">Dedicated Onboarding</h4>
                  <p className="text-xs text-muted-foreground">Full support for district admins, IT staff, and teachers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-slate-50 p-6 md:p-8 rounded-3xl border border-border shadow-soft">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
