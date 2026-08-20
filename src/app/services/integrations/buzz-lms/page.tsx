import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardList,
  Clipboard,
  ExternalLink,
  FileText,
  History,
  Highlighter,
  KeyRound,
  Layers,
  Lock,
  Minus,
  MousePointerClick,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  ServiceHero,
  Screenshot,
  IconFeature,
  NumberedStep,
  RelatedLink,
  ServiceCta,
} from "@/sections/services/shared";
import { IntegrationFaq } from "@/components/ui/integration-faq";

export const metadata: Metadata = {
  title: "Buzz LMS Plagiarism & AI Detection Integration | Checkmark",
  description:
    "Add plagiarism checking, AI likeness, and writing-process evidence to the Buzz questions your teachers already use. Works alongside BusyBee.",
  alternates: {
    canonical: "https://checkmarkplagiarism.com/services/integrations/buzz-lms",
  },
  openGraph: {
    title: "Buzz LMS Plagiarism & AI Detection Integration | Checkmark",
    description:
      "Add plagiarism checking, AI likeness, and writing-process evidence to the Buzz questions your teachers already use. Works alongside BusyBee.",
    url: "https://checkmarkplagiarism.com/services/integrations/buzz-lms",
    siteName: "Checkmark Plagiarism",
    images: [{ url: "/images/services/buzz_icon.png", width: 400, height: 400 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzz LMS Plagiarism & AI Detection Integration | Checkmark",
    description:
      "Add plagiarism checking, AI likeness, and writing-process evidence to the Buzz questions your teachers already use. Works alongside BusyBee.",
    images: ["/images/services/buzz_icon.png"],
  },
};

const faqs = [
  {
    question: "Do teachers have to rebuild their Buzz assessments?",
    answer:
      "No. Two of the three ways to connect Checkmark attach to essay questions you already have. For a native Buzz essay question, a teacher pastes one line into the question's feedback area and the report appears underneath. For Custom Question, the question type is switched to Custom and given a Checkmark URL. Either way the prompt, points, and rubric stay exactly as authored, and a supplied script can convert a whole course in bulk or reverse it.",
  },
  {
    question: "Does Checkmark interfere with BusyBee?",
    answer:
      "No, and that is enforced in code rather than left to configuration. On a native Buzz essay question Checkmark writes no rubric scores and no per-criterion feedback. It posts the report and nothing else, so BusyBee stays the only thing writing into grading fields. Where Checkmark does write, it merges into the current teacher response, so anything already there survives.",
  },
  {
    question: "What does Custom Question add that a native essay question cannot?",
    answer:
      "Writing-process evidence. On a native essay question Checkmark reads the finished text after the fact, so the report shows plagiarism and AI likeness. On Custom Question the student writes in Checkmark's editor, so the report adds Playback of the session, the share that arrived as a paste, and the share typed in a transcription rhythm.",
  },
  {
    question: "Can Checkmark write grades back into the Buzz gradebook?",
    answer:
      "Yes, on Custom Question. Per-criterion scores and feedback are written into the rubric already attached to the question, via Buzz's DLAP API, so the teacher reviews and submits in Buzz's own grading pane. The teacher's grade is always final: Checkmark pre-fills, it does not post. Criteria the model could not match are left blank rather than scored zero.",
  },
  {
    question: "Does the integration support Buzz rubrics?",
    answer:
      "Yes. Checkmark reads the rubric attached to the question in Buzz and uses it as authored: the same criteria, point values, and level descriptions. Because it keys on Buzz's own criterion identifiers, scores land in the correct rows. Attach the rubric to the question itself. A rubric pasted into a question variable cannot support per-criterion write-back.",
  },
  {
    question: "What does a Buzz administrator need to set up?",
    answer:
      "One DLAP service account in the Buzz Admin App with exactly two read permissions (Domains: Read and Courses: Read full) and nothing else. Those credentials go into Checkmark once, at the school or reseller level. A reseller managing many subdomains can hold a single credential at the parent domain. There is no per-teacher authorization.",
  },
  {
    question: "Does Checkmark also support LTI 1.3 with Buzz?",
    answer:
      "Yes, with dynamic registration, single sign-on, deep linking, and roster sync. It is the right choice for a standalone Checkmark assignment where students upload a document or import from Drive or OneDrive. The trade-off is that the teacher creates a dedicated activity. For evidence on questions inside assessments you already run, use the native essay or Custom Question path.",
  },
  {
    question: "How does Checkmark report AI writing?",
    answer:
      "As AI likeness, not a verdict about a student. Checkmark reports the share of an essay that crosses a high-confidence threshold and underlines those passages, so a teacher sees which parts rather than one number. Text alone cannot establish authorship, which is why on Custom Question the same report also shows how the writing was produced.",
  },
];

const tileComparison: Array<[string, boolean, boolean, string]> = [
  ["Overall flagged content", true, true, "Union of everything below."],
  ["Uncited source matches", true, true, "Matched text with its source and a side-by-side quote."],
  ["AI likeness", true, true, "Passage level, with a confidence reading on each."],
  ["Pasted text", false, true, "Text that arrived from the clipboard rather than the keyboard."],
  ["Transcribed text", false, true, "Typed, but in a copying rhythm rather than a composing one."],
  ["Playback of the writing session", false, true, "Replay the essay as it was written."],
  ["Why a passage was flagged", false, true, "The timing patterns behind a transcription flag."],
  ["Rubric shown to the student while writing", false, true, "The same rubric already attached in Buzz."],
  ["Per-criterion scores into Buzz's rubric", false, true, "Teacher accepts or changes them before submitting."],
];

export default function BuzzLMSIntegrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://checkmarkplagiarism.com" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://checkmarkplagiarism.com/services" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Integrations",
            item: "https://checkmarkplagiarism.com/services/integrations",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Buzz LMS",
            item: "https://checkmarkplagiarism.com/services/integrations/buzz-lms",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-brand-900 border-b border-white/10 pt-24 pb-4">
        <div className="container mx-auto px-4">
          <nav aria-label="Breadcrumb" className="text-xs text-white/70">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services/integrations" className="hover:text-white transition-colors">
                  Integrations
                </Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium" aria-current="page">
                Buzz LMS
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <ServiceHero
        title="Integrity evidence inside the Buzz questions you already use"
        sub="No rebuilt courses, no separate assignment for students to find, and no change to how you grade."
      >
        <LinkButton href="/demo" variant="hero">
          Request a Demo
        </LinkButton>
        <LinkButton href="#ways-in" variant="outline-white">
          Compare the three paths
        </LinkButton>
        <LinkButton href="#setup" variant="outline-white">
          Setup requirements
        </LinkButton>
      </ServiceHero>

      {/* Interface preview */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl bg-white p-4 sm:p-6 border border-border shadow-soft">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-cyan-50 flex items-center justify-center p-6">
                    <Image
                      src="/images/services/buzz_icon.png"
                      alt="Checkmark integration for Buzz LMS by Agilix"
                      width={160}
                      height={160}
                      className="object-contain max-h-36 w-auto"
                      priority
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
                    <Sparkles className="h-3.5 w-3.5" /> Built for Buzz assessments
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">
                    The report lives under the question, not in another tab
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Checkmark renders its report inside the Buzz question, so similarity matches
                    and AI likeness sit next to the answer being graded. On Custom Question, the
                    writing-process evidence sits there too.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Attaches to essay questions already in Buzz</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Reads your rubric exactly as authored</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Coexists with BusyBee rather than replacing it</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three ways in */}
      <section id="ways-in" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground">Three ways to connect Checkmark</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              They differ in one thing: how much a teacher has to change. The less you change, the
              faster you are live. The more the student writes inside Checkmark, the more the report
              can show.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <IconFeature
              icon={Puzzle}
              title="Native Buzz essay question"
              text="Paste one line into the question's feedback area. Students keep using Buzz's own editor and never see a change. The report appears beneath the question."
              tone="cyan"
            />
            <IconFeature
              icon={History}
              title="Checkmark Custom Question"
              text="The same question, switched to Custom. Students write in Checkmark's editor, so the report adds Playback, pasted text, transcription, and per-criterion grading into your rubric."
              tone="emerald"
            />
            <IconFeature
              icon={Layers}
              title="LTI 1.3"
              text="Dynamic registration, single sign-on, deep linking, and roster sync for a standalone Checkmark assignment. The right fit for uploaded documents, Google Drive, or OneDrive."
              tone="purple"
            />
          </div>

          <p className="mx-auto max-w-3xl mt-8 text-center text-sm text-muted-foreground">
            The native essay path is the fastest way to go live. Move individual courses to Custom
            Question where process evidence matters most. You can run all three at once.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              How the Buzz integration works
            </h2>
            <p className="mt-3 text-center text-muted-foreground">
              One administrator setup, then it is per question from there.
            </p>

            <div className="mt-10 space-y-6">
              <NumberedStep
                n="1"
                title="A Buzz administrator creates one service account"
                text="A service account with two read permissions: Domains: Read and Courses: Read full. Nothing else."
              />
              <NumberedStep
                n="2"
                title="Those credentials go into Checkmark once"
                text="Entered at the school, or once at a reseller's parent domain. No per-teacher authorization, no per-course setup."
              />
              <NumberedStep
                n="3"
                title="A teacher connects an existing question"
                text="Paste one line into the feedback area, or switch the question type to Custom. A supplied script does it in bulk for a whole course, and can reverse it."
              />
              <NumberedStep
                n="4"
                title="Students answer in Buzz as usual"
                text="Same assessment, prompt, points, and rubric. On Custom Question they write in Checkmark's editor, which shows them the rubric and a live word count."
              />
              <NumberedStep
                n="5"
                title="The report appears under the question"
                text="Similarity matches with their sources, and AI likeness marked passage by passage. On Custom Question the report adds Playback, pasted text, and transcription."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Works alongside BusyBee */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                Compatibility
              </span>
              <h2 className="text-3xl font-bold text-foreground">
                Already using BusyBee? On native essay questions, nothing changes.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                On native essay questions the two never write to the same fields, and that is
                built into how Checkmark writes to Buzz rather than something an administrator has
                to configure. Custom Question is different by design: BusyBee does not grade custom
                questions, so on those Checkmark fills the rubric instead of competing for it.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">On a native essay question, Checkmark
                    writes no grades at all.</strong> No rubric scores, no per-criterion comments.
                    It posts the report and stops there.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Where Checkmark does write, it merges.</strong>{" "}
                    It reads the current teacher response first, so anything already there is carried
                    through, not replaced.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Its own content stays separable.</strong>{" "}
                    Anything Checkmark adds is a marked block, so a later update replaces only that
                    block and leaves teacher-written text alone.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Your gradebook, your workflow.</strong>{" "}
                    Checkmark never submits a grade on a teacher&apos;s behalf.
                  </span>
                </li>
              </ul>
            </div>
            <Screenshot
              src="/images/services/buzz/essay-report-in-buzz.png"
              alt="A Checkmark report under a native Buzz essay question, beside Buzz's own rubric"
              width={2646}
              height={1714}
              caption="A native essay question: the report sits under the question, and grading stays where it was."
            />
          </div>
        </div>
      </section>

      {/* Upgrade to Custom Question */}
      <section id="custom-question" className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                The upgrade
              </span>
              <h2 className="mt-2 text-3xl font-bold text-foreground">
                What Custom Question adds
              </h2>
              <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
                A finished essay only tells you so much. When the student writes in
                Checkmark&apos;s editor, the report stops being a verdict on the text and becomes a
                record of how it came to exist.
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-soft border border-border">
              <table className="w-full text-sm min-w-[640px]">
                <thead className="text-left">
                  <tr className="border-b border-border">
                    <th className="py-4 pl-6 pr-4 font-semibold">In the report</th>
                    <th className="py-4 px-4 font-semibold">Native essay</th>
                    <th className="py-4 px-4 font-semibold">Custom Question</th>
                    <th className="py-4 pr-6 pl-4 font-semibold">What it shows</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  {tileComparison.map(([label, native, custom, note], i) => (
                    <tr key={i} className="border-b border-border/60 last:border-0">
                      <td className="py-3 pl-6 pr-4 text-foreground font-medium">{label}</td>
                      {[native, custom].map((v, j) => (
                        <td key={j} className="py-3 px-4">
                          {v ? (
                            <span className="inline-flex items-center gap-2 text-brand-700">
                              <Check className="h-4 w-4" /> Yes
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-2 text-muted-foreground">
                              <Minus className="h-4 w-4" /> No
                            </span>
                          )}
                        </td>
                      ))}
                      <td className="py-3 pr-6 pl-4 text-muted-foreground">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Clipboard className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Paste</h3>
                  <p className="text-sm text-muted-foreground">
                    Clipboard text is marked with the moment it landed. A paste is a fact about
                    the session, not an inference from the finished text, so it holds up in a
                    conversation with a student.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Timer className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Transcription</h3>
                  <p className="text-sm text-muted-foreground">
                    Retyping defeats paste detection, so Checkmark reads timing as a separate
                    signal. Composing and copying produce different rhythms, and the report names
                    the patterns behind each flag rather than asking you to trust a score.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <MousePointerClick className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Playback</h3>
                  <p className="text-sm text-muted-foreground">
                    Replay the session from blank page to submission. It can support a
                    student&apos;s account of how they wrote just as readily as it raises a
                    question, and turns an accusation into something you can watch together.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                    <KeyRound className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Nothing to unlock</h3>
                  <p className="text-sm text-muted-foreground">
                    The question handles access, so the report is there when the teacher opens it.
                    No link to find, nothing to redo on another device.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Screenshot
                src="/images/services/buzz/cq-report-in-buzz.png"
                alt="A Custom Question report in the Buzz grading view showing pasted, transcribed, uncited and AI tiles"
                width={2646}
                height={1714}
                caption="Custom Question adds the Pasted and Transcribed tiles, and Playback."
              />
              <Screenshot
                src="/images/services/buzz/cq-playback.png"
                alt="Playback replaying a student's writing session inside the Buzz grading view"
                width={2646}
                height={1714}
                caption="Playback replays the session from blank page to submission."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grading */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
                Grading on Custom Question
              </span>
              <h2 className="text-3xl font-bold text-foreground">
                Feedback in the shape teachers already expect
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                On Custom Question, Checkmark also grades against the rubric already attached to
                the question. Teachers used to per-criterion written feedback get exactly that, with
                two additions.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Highlighter className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Comments are anchored.</strong> Feedback
                    quotes the span it refers to and highlights it in the essay, so a student can
                    see what the comment is about instead of guessing.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ClipboardList className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Scores land in your rubric rows.</strong>{" "}
                    Not a separate Checkmark score, but the rubric you authored in Buzz, filled in
                    for the teacher to accept or change. Criteria the model could not confidently
                    match are left blank rather than scored zero.
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                One paragraph per criterion, written to the student, without restating the number.
                Scores are calibrated against essays graded by people, across a wide range of
                assessment programs and rubric styles.
              </p>
              <div className="pt-2">
                <RelatedLink
                  href="/services/autograder"
                  label="How Checkmark's autograder works"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI likeness */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl bg-rose-100 p-8 md:p-10">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-lg bg-rose-500 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  AI likeness, not AI likelihood
                </h2>
              </div>
              <div className="mt-5 space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Checkmark does not claim to know who wrote something. No tool can. Text alone
                  cannot establish authorship.
                </p>
                <p>
                  Resemblance can be measured. AI writing carries interconnected signatures across
                  word choice, phrasing, syntax, and rhythm: not one giveaway punctuation mark, but
                  the relationships among all of them at once. Checkmark reports the share of an
                  essay that resembles that pattern to a high degree. Writing this way by
                  coincidence is rare, which is what makes the signal worth attention. It is still a
                  statement about the text, not about the student.
                </p>
                <p>
                  So passages are underlined individually rather than reduced to one number, and
                  short answers are reported as not applicable instead of guessed at. On Custom
                  Question the same report also shows how the text was produced, so an AI signal can
                  be corroborated, or cleared, by the writing process behind it.
                </p>
              </div>
              <div className="pt-6">
                <RelatedLink href="/services/ai-detection" label="More on how AI likeness is measured" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup & admin */}
      <section id="setup" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="rounded-3xl bg-brand-900 text-white p-8 md:p-12 shadow-medium">
              <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                    <Lock className="h-3.5 w-3.5" /> Administrators &amp; IT
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    What setup actually requires
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                    One service account, two read permissions, entered once. A reseller can hold
                    one credential at the parent domain and cover every school beneath it.
                  </p>
                </div>
                <LinkButton href="/contact" variant="hero" className="shrink-0">
                  Talk to us <ExternalLink className="ml-2 h-4 w-4" />
                </LinkButton>
              </div>

              <div className="mt-8 border-t border-white/15 pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-white/90">
                <div>
                  <h3 className="font-semibold text-white mb-1">Service account</h3>
                  <p className="text-white/70 text-xs">
                    Created in the Buzz Admin App. Encrypted at rest in Checkmark.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Permissions</h3>
                  <p className="text-white/70 text-xs">
                    Domains: Read and Courses: Read full. Nothing else. Anything more widens the
                    credential for no benefit.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Scope</h3>
                  <p className="text-white/70 text-xs">
                    School level, or once at a reseller&apos;s parent domain. No per-teacher step.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Privacy</h3>
                  <p className="text-white/70 text-xs">
                    FERPA compliant. Encrypted in transit and at rest. Student submissions are
                    never used to train generative AI models.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Connecting questions in bulk
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Checkmark supplies a conversion script, generated for your domain, that
                    connects every essay question across every course in one pass, preserving the
                    prompt, points, and rubric. Run it in preview first, and reverse it at any time.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <CardContent className="p-0 space-y-3">
                  <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <KeyRound className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    How teachers get access
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Both paths confirm the reader can already grade the course, and neither asks
                    teachers to create a Checkmark account. They differ only in steps. On a native
                    essay the teacher opens a link from the grade editor&apos;s private note, a
                    channel only course graders see. Custom Question runs the same check inside the
                    question exchange, so there is no link to open.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-3xl bg-amber-100 p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground">
                Two things worth getting right up front
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                <li className="flex gap-3">
                  <ArrowRight className="h-4 w-4 text-amber-700 shrink-0 mt-1" />
                  <span>
                    <strong className="text-foreground">Attach rubrics to the question.</strong> A
                    rubric on the question can be scored row by row. One pasted into a question
                    variable cannot support per-criterion write-back.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ArrowRight className="h-4 w-4 text-amber-700 shrink-0 mt-1" />
                  <span>
                    <strong className="text-foreground">Let the assessment show answers on
                    review.</strong> If it hides answers after submission, there is nothing for a
                    report to read. The script sets this for you; check it if you connect a question
                    by hand.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-10">
              Why Buzz schools and curriculum providers choose Checkmark
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <IconFeature
                icon={CheckCircle2}
                title="Nothing to rebuild"
                text="Courses, prompts, points, and rubrics stay as authored. Connect an entire catalog in one pass, and reverse it just as easily."
                tone="cyan"
              />
              <IconFeature
                icon={ShieldCheck}
                title="Evidence a teacher can act on"
                text="Matched sources side by side, AI likeness passage by passage, and on Custom Question, a replayable record of how the essay was written."
                tone="purple"
              />
              <IconFeature
                icon={Lock}
                title="One setup for the whole tenant"
                text="One read-only service account covers every course, and a reseller covers every subdomain beneath it. No per-teacher onboarding."
                tone="emerald"
              />
            </div>
          </div>
        </div>
      </section>

      <IntegrationFaq faqs={faqs} lmsName="Buzz LMS" />

      <ServiceCta
        title="See it on one of your own Buzz assessments"
        text="We can connect a single question in a course you already run. Look at the report before deciding anything."
      />
    </main>
  );
}
