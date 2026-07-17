import { Metadata } from "next";
import {
  GraduationCap,
  PencilRuler,
  Library,
  Upload,
  MessageSquareText,
  Eye,
  CheckCircle2,
} from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import {
  ServiceHero,
  Screenshot,
  IconFeature,
  NumberedStep,
  RelatedLink,
  ServiceCta,
} from "@/sections/services/shared";

export const metadata: Metadata = {
  title: "AI Autograder & Rubrics — Checkmark Plagiarism",
  description:
    "Rubric-based AI grading with per-criterion scores, written justifications, and quote-anchored feedback. Teachers edit everything and publish on their terms — grades can push straight to Canvas, Buzz, or Google Classroom.",
  openGraph: { images: ["/images/services/report-grading-view.png"] },
};

export default function AutograderServicePage() {
  return (
    <main>
      <ServiceHero
        title="First-draft grades in minutes. Final say always yours."
        sub="The autograder scores every submission against your rubric and writes out its reasoning, criterion by criterion. You review, edit, and publish — and the grade lands back in your LMS gradebook."
      >
        <LinkButton href="#grading-view" variant="hero">
          See a graded essay
        </LinkButton>
        <LinkButton href="/demo" variant="outline-white">
          Grade one in the demo
        </LinkButton>
      </ServiceHero>

      {/* Grading view screenshot */}
      <section id="grading-view" className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Screenshot
              src="/images/services/report-grading-view.png"
              alt="Checkmark grading view: per-criterion scores with written justifications, and quote-anchored feedback cards next to the essay"
              width={2000}
              height={1250}
              priority
              caption="The grading view of a real report: per-criterion scores with editable justifications up top, quote-anchored feedback cards beside the essay."
            />
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3 gap-6">
            <IconFeature
              icon={GraduationCap}
              title="Scores per criterion"
              text="Each rubric category gets its own score out of its own point value — Thesis 7/10, Evidence 8/10 — not one opaque total."
              tone="emerald"
            />
            <IconFeature
              icon={MessageSquareText}
              title="Written justifications"
              text="Every score comes with a paragraph explaining why, tied to what the student actually wrote. Edit it inline if you'd put it differently."
              tone="blue"
            />
            <IconFeature
              icon={Eye}
              title="Quote-anchored feedback"
              text="Feedback items highlight the exact sentences they refer to. Add your own by selecting text in the essay and clicking Add Feedback."
              tone="amber"
            />
          </div>
        </div>
      </section>

      {/* Rubrics */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              Your rubric, however you have it
            </h2>
            <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
              The autograder grades against <em>your</em> criteria — there&apos;s no house rubric
              you have to adopt.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <IconFeature
                icon={PencilRuler}
                title="Build it in the app"
                text="A rubric builder with criteria, rating levels, and live point totals — the same shape Canvas rubrics use."
                tone="emerald"
              />
              <IconFeature
                icon={Upload}
                title="Upload what you have"
                text="Drop in an existing rubric as a document or even a photo — Checkmark normalizes it into gradable criteria."
                tone="blue"
              />
              <IconFeature
                icon={Library}
                title="Reuse from your library"
                text="Save rubrics once and attach them across courses and assignments; duplicate and archive as terms roll over."
                tone="fuchsia"
              />
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Using Canvas, Buzz, or Google Classroom? Rubrics attached to the assignment sync in
              automatically with it.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center">
              Teacher-in-the-loop, end to end
            </h2>
            <div className="mt-10 space-y-8">
              <NumberedStep
                n="1"
                title="Attach a rubric to the assignment"
                text="Build, upload, pick from your library — or let it sync from your LMS assignment."
              />
              <NumberedStep
                n="2"
                title="Grades draft themselves as work arrives"
                text="Each submission is scored per criterion with a written justification, alongside its plagiarism, AI, and writing-process results."
              />
              <NumberedStep
                n="3"
                title="Review and edit anything"
                text="Adjust scores with a click, rewrite justifications, add or remove feedback. Students see nothing until you say so."
              />
              <NumberedStep
                n="4"
                title="Publish — straight into your gradebook"
                text="Push to Canvas, push to Buzz, sync to Google Classroom, or publish in Checkmark. Bulk-publish a whole assignment when you're done."
              />
            </div>
            <div className="mt-10">
              <Screenshot
                src="/images/services/report-rubric-tiles.png"
                alt="Per-criterion autograder scores across the top of a report"
                width={2000}
                height={100}
                caption="Rubric scores across the top of every graded report — click any pencil to adjust."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust note + links */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-start gap-3 rounded-2xl bg-brand-100 p-5">
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-brand-700 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Published means published by you.
                </span>{" "}
                Autograder output is a draft until a teacher publishes it. What students see is
                the snapshot you approved — with the scores and feedback exactly as you left them.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <RelatedLink
                href="/teacher-support/autograder-and-rubrics"
                label="Guide: autograder & rubrics"
              />
              <RelatedLink href="/services/integrations" label="Send grades to your LMS" />
            </div>
          </div>
        </div>
      </section>

      <ServiceCta
        title="Grade an essay against a real rubric"
        text="The demo ships with a sample rubric so you can see the scores and justifications it writes — create a free account to grade with your own."
      />
    </main>
  );
}
