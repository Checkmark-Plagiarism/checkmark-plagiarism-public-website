import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardList,
  Clipboard,
  ExternalLink,
  Highlighter,
  KeyRound,
  Lock,
  Minus,
  MousePointerClick,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  ServiceHero,
  Screenshot,
  IconFeature,
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
      "No. Checkmark attaches to essay questions you already have. A teacher pastes one line into the question's feedback area and the report appears underneath it. The prompt, points, and rubric stay exactly as authored, and students see no change at all.",
  },
  {
    question: "Where do teachers see the report?",
    answer:
      "Under the question, inside Buzz's own grading view, so nobody leaves the gradebook. The first time a teacher opens a native essay report they click an Auth Link that Checkmark writes into the grade editor's private note, a channel only course graders can see. On Custom Question that step is handled by the question itself, so the report is simply there.",
  },
  {
    question: "Does Checkmark interfere with BusyBee?",
    answer:
      "No, and that is enforced in code rather than left to configuration. Autograding is included with Checkmark, but on a native essay question it is off unless you switch it on. Leave it off and Checkmark writes no rubric scores and no per-criterion feedback at all, so BusyBee keeps grading exactly as it does now. Where Checkmark does write to Buzz, it merges into the current teacher response, so anything already there survives.",
  },
  {
    question: "What does Custom Question add?",
    answer:
      "Writing-process evidence. On a native essay question Checkmark reads the finished text after the fact, so the report shows plagiarism and AI likeness. On Custom Question the student writes in Checkmark's editor, so the report adds Playback of the session, the share that arrived as a paste, and the share typed in a transcription rhythm. Access and autograding are built in on that path too.",
  },
  {
    question: "Can Checkmark return grades to the Buzz gradebook?",
    answer:
      "Yes. Per-criterion scores and feedback are written into the rubric already attached to the question, via Buzz's DLAP API, so the teacher reviews and submits in Buzz's own grading pane. The teacher's grade is always final: Checkmark pre-fills, it does not post. Criteria the model could not match are left blank rather than scored zero.",
  },
  {
    question: "Does the integration support Buzz rubrics?",
    answer:
      "Yes. Checkmark reads the rubric attached to the question and uses it as authored: the same criteria, point values, and level descriptions. Because it keys on Buzz's own criterion identifiers, scores land in the correct rows. Attach the rubric to the question itself. A rubric pasted into a question variable cannot support per-criterion write-back.",
  },
  {
    question: "What does a Buzz administrator need to set up?",
    answer:
      "One DLAP service account in the Buzz Admin App with exactly two read permissions (Domains: Read and Courses: Read full) and nothing else. Those credentials go into Checkmark once, at the school or reseller level. A reseller managing many subdomains can hold a single credential at the parent domain. There is no per-teacher authorization.",
  },
  {
    question: "Do you support LTI 1.3?",
    answer:
      "Yes, with dynamic registration, single sign-on, deep linking, and roster sync. It is the right choice when you want a standalone Checkmark assignment, where students upload a document or import from Drive or OneDrive. For essay questions inside assessments you already run, the native Buzz path needs less setup and less for students to learn.",
  },
  {
    question: "How does Checkmark report AI writing?",
    answer:
      "As AI likeness, not a verdict about a student. Checkmark reports the share of an essay that crosses a high-confidence threshold and underlines those passages, so a teacher sees which parts rather than one number. Text alone cannot establish authorship, which is why on Custom Question the same report also shows how the writing was produced.",
  },
];

const tileComparison: Array<[string, boolean, boolean, string]> = [
  ["Uncited source matches", true, true, "Matched text with its source and a side-by-side quote."],
  ["AI likeness", true, true, "Passage level, with a confidence reading on each."],
  ["Autograding against your rubric", true, true, "Off by default on native essays, on by default on Custom Question."],
  ["Pasted text", false, true, "Text that arrived from the clipboard rather than the keyboard."],
  ["Transcribed text", false, true, "Typed, but in a copying rhythm rather than a composing one."],
  ["Playback of the writing session", false, true, "Replay the essay as it was written."],
  ["Why a passage was flagged", false, true, "The timing patterns behind a transcription flag."],
  ["Rubric shown to the student while writing", false, true, "The same rubric already attached in Buzz."],
  ["Report opens with no unlock step", false, true, "Handled by the question itself."],
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
      </ServiceHero>

      {/* Native essay integration */}
      <section id="native" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              The native Buzz integration
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              Yes, we support LTI 1.3. On Buzz we can do better than that.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dynamic registration, single sign-on, deep linking, roster sync: all of it works. But
              an LTI assignment is still a separate activity a teacher has to build and a student
              has to find. On Buzz, Checkmark attaches to the essay questions already sitting in
              your assessments.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <IconFeature
              icon={CheckCircle2}
              title="Students write in Buzz"
              text="Same assessment, same essay question, Buzz's own editor. Nothing to install and nothing new for a student to learn. A teacher connects a question by pasting one line into its feedback area."
              tone="cyan"
            />
            <IconFeature
              icon={ClipboardList}
              title="Reports open in the gradebook"
              text="The report renders under the question, inside Buzz's grading view, so nobody leaves the gradebook to read it. Similarity matches show their sources; AI likeness is marked passage by passage."
              tone="emerald"
            />
            <IconFeature
              icon={Highlighter}
              title="Grading included, or keep BusyBee"
              text="Autograding against the question's own rubric comes with Checkmark, switched on per course. Already running BusyBee and happy with it? Leave ours off. The two are fully compatible."
              tone="purple"
            />
          </div>

          <div className="mt-12 mx-auto max-w-5xl">
            <Screenshot
              src="/images/services/buzz/essay-report-in-buzz.png"
              alt="A Checkmark report under a native Buzz essay question, beside Buzz's own rubric"
              width={2646}
              height={1714}
              caption="A native essay question in Buzz: the report sits under the question, and grading stays where it was."
            />
          </div>

          <div className="mt-10 mx-auto max-w-4xl rounded-3xl bg-emerald-100 p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="h-11 w-11 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Already using BusyBee? Keep it.
                </h3>
                <p className="text-sm leading-relaxed text-foreground/75">
                  With Checkmark&apos;s grading left off, a native essay question gets the integrity
                  report and nothing else: no rubric scores, no per-criterion comments, nothing
                  written into a grading field. That is enforced in code, not left to configuration.
                  Where Checkmark does write to Buzz, it merges into the current teacher response,
                  so anything already there survives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Go beyond with Custom Question */}
      <section id="custom-question" className="py-16 bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700">
              The upgrade
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              Go beyond the finished essay with Custom Question
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Switch the same question to Custom and the student writes in Checkmark&apos;s editor
              instead. The report stops being a verdict on the text and becomes a record of how it
              came to exist.
            </p>
          </div>

          <div className="mt-12 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <CardContent className="p-0 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Clipboard className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Paste detection</h3>
                <p className="text-sm text-muted-foreground">
                  Clipboard text is marked with the moment it landed. A paste is a fact about the
                  session, not an inference from the finished text, so it holds up in a conversation
                  with a student.
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
                  Retyping defeats paste detection, so Checkmark reads timing as a separate signal.
                  Composing and copying produce different rhythms, and the report names the patterns
                  behind each flag rather than asking you to trust a score.
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
                  student&apos;s account of how they wrote just as readily as it raises a question,
                  and turns an accusation into something you can watch together.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <CardContent className="p-0 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
                  <KeyRound className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Access built in</h3>
                <p className="text-sm text-muted-foreground">
                  The question handles access, so the report is there when the teacher opens it. No
                  link to find, nothing to redo on another device. Both paths confirm the reader can
                  already grade the course; this one takes fewer steps.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <CardContent className="p-0 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Autograding built in</h3>
                <p className="text-sm text-muted-foreground">
                  BusyBee does not grade custom questions, so here Checkmark fills your rubric
                  rather than competing for it. Per-criterion scores land in the rows you authored
                  in Buzz, for the teacher to accept or change before submitting.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <CardContent className="p-0 space-y-3">
                <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                  <Highlighter className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Anchored feedback</h3>
                <p className="text-sm text-muted-foreground">
                  One paragraph per criterion, written to the student, without restating the number.
                  Feedback quotes the span it refers to and highlights it, so a student can see what
                  the comment is about instead of guessing.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 mx-auto max-w-6xl overflow-x-auto bg-white rounded-2xl shadow-soft border border-border">
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

          <div className="mt-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
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

          <div className="mt-8 flex justify-center">
            <RelatedLink href="/services/autograder" label="How Checkmark's autograder works" />
          </div>
        </div>
      </section>

      {/* AI likeness */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl bg-brand-50 border border-brand-100 p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-lg bg-brand-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                AI likeness, not AI likelihood
              </h2>
            </div>
            <div className="mt-5 space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Checkmark does not claim to know who wrote something. No tool can. What it measures
                is resemblance: AI writing carries interconnected signatures across word choice,
                phrasing, syntax, and rhythm, and Checkmark reports the share of an essay that
                resembles that pattern to a high degree.
              </p>
              <p>
                So passages are underlined individually rather than reduced to one number, and short
                answers are reported as not applicable instead of guessed at. On Custom Question the
                same report also shows how the text was produced, so a signal can be corroborated,
                or cleared, by the writing process behind it.
              </p>
            </div>
            <div className="pt-6">
              <RelatedLink href="/services/ai-detection" label="More on how AI likeness is measured" />
            </div>
          </div>
        </div>
      </section>

      {/* Setup & admin */}
      <section id="setup" className="py-16 bg-muted/30">
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
                    One service account, two read permissions, entered once. A reseller can hold one
                    credential at the parent domain and cover every school beneath it.
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
                    FERPA compliant. Encrypted in transit and at rest. Student submissions are never
                    used to train generative AI models.
                  </p>
                </div>
              </div>
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
                    report to read. Connect a question by hand and this is the setting to check.
                  </span>
                </li>
              </ul>
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
