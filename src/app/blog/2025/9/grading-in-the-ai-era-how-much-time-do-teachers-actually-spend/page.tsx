import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryVariant } from "@/lib/blog-category-utils";

export const metadata: Metadata = {
  title: "Grading in the AI Era: How Much Time Do Teachers Actually Spend?",
  description:
    "AI has changed grading workloads, trust, and workflow. Here’s how teachers are adapting with detection tools and auto‑grading—plus what it means for student feedback and burnout.",
  keywords: [
    "AI grading",
    "teacher workload",
    "auto-grading",
    "AI detection",
    "academic integrity",
    "education technology",
  ],
  openGraph: {
    images: [
      "https://public.checkmarkplagiarism.com/images/blog/grading-in-the-ai-era-how-much-time-do-teachers-actually-spend/hero.jpg",
    ],
  },
};

export const meta = {
  title: "Grading in the AI Era: How Much Time Do Teachers Actually Spend?",
  description:
    "From long nights of marking to new tools like detection and auto‑grading, we explore how AI is reshaping teacher time—and how to protect both learning and educator well‑being.",
  "opengraph-image": "/images/blog/grading-in-the-ai-era-how-much-time-do-teachers-actually-spend/hero.jpg",
  date: "08-20-2025",
  readTime: "~7 min read",
  category: "Teaching",
  author: "The Checkmark Plagiarism Team",
};

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <main className="bg-background text-foreground">
      {/* Article Header */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className={`px-2 py-1 rounded-full text-xs ${getCategoryVariant(meta.category)}`}>
                {meta.category}
              </span>
              <span aria-hidden>•</span>
              <time className="tabular-nums" dateTime={new Date(meta.date).toISOString()}>
                {meta.date}
              </time>
              <span aria-hidden>•</span>
              <span>{meta.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {meta.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-8">
              {meta.description}
            </p>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium">{meta.author}</span>
              </div>

              <Button variant="outline" size="sm" className="shrink-0">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <figure className="aspect-video bg-muted rounded-xl overflow-hidden ring-1 ring-border/60">
              <Image
                src={meta["opengraph-image"]}
                alt={meta.title}
                height={720}
                width={1280}
                className="w-full h-full object-cover"
                priority
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <article
                className="lg:col-span-3 text-base leading-7 tracking-normal text-foreground space-y-5"
              >
                {/* Intro */}
                <p className="font-semibold">
                  <strong>Grading, either you love it or you hate it.</strong>
                </p>
                <p className="text-muted-foreground">
                  Sitting at the desk, with their eyes glued to the computer screen, is an exhausted teacher who’s on their third coffee of the day and ran their fingers through their hair one too many times as the stress of the night builds. They’ve read through enough essays that their eyes ache, yet they still keep at it. Though they’ve been grading for hours, with each new page comes new curiosity and pride, as they soak up their students’ creativity.
                </p>
                <p className="text-muted-foreground">
                  Now imagine, multiple hours added onto what can already be a protracted task. However, this time there’s less imagination and originality to look forward to. This is the reality of grading for many teachers since the introduction of AI.
                </p>
                <p className="text-muted-foreground">
                  The rise of AI has prompted discussions of academic integrity and critical thinking, and has caused many teachers to resort to AI detection software in an effort to lessen the load. Now responsible for combing through essays to try and identify AI, teachers are saddled with a task they weren’t originally trained for. Along with the extra hours put in, teachers must deal with the anxiety of potentially making a wrong call. What happens if they—or the detector they were told would work—falsely flags a student’s work? How will that affect their student‑teacher dynamic?
                </p>
                <p className="font-semibold">
                  <strong>How much is AI taking a toll on our teachers?</strong>
                </p>

                {/* Before the Era of AI */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">Before the Era of AI: Cheating and Grading</h3>
                <p className="text-muted-foreground">
                  Before the era of AI, teachers and professors could generally trust that a student’s work was their own. Though there were always a few mischievous students who found a way to cheat, they were often caught with concrete evidence of plagiarism from a direct source or copying off another student.
                </p>
                <p className="italic text-foreground/90">Is using AI considered cheating?</p>
                <p className="text-muted-foreground">
                  This question is still being debated. As it’s treated right now, the answer often depends on the individual teacher’s rules on using AI in the classroom. Many teachers outright ban any use of AI for the completion of assignments—including outlining and proofreading—as it can deter the development of students’ critical‑thinking skills and can be unreliable. There isn’t yet a clear consensus, but many educators would rather ban it than risk it interfering with learning.
                </p>

                {/* Old vs. New */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">Old vs. New</h3>
                <p className="text-muted-foreground">
                  As AI evolved, so too did the schedule of a teacher. Now having to weed out assignments that use AI, what once took minutes to do can take hours. Traditionally, teachers spent about 5 hours grading per week—roughly 140 hours in a 28‑week school year—excluding report cards and other adjacent tasks. According to both CalMatters and educators posting on r/education, an essay or project assignment could take on average 5–10 minutes to grade.
                </p>
                <blockquote className="border-l-4 border-border pl-4 py-3 pr-4 rounded-md bg-muted/40 text-muted-foreground">
                  <p>
                    “One friend estimated 10–15 minutes per paper, 176 students, 4× or so per year. So over 7000 minutes of grading per teacher per year. In just English, it’s over 2000 hours of yearly grading.” — Redditor on r/education describing what their English‑teacher friends shared with them.
                  </p>
                </blockquote>

                <figure className="my-8">
                  <Image
                    src="/images/blog/grading-in-the-ai-era-how-much-time-do-teachers-actually-spend/hero2.png"
                    height={700}
                    width={700}
                    alt="graph showing the difference with using ai in the classroom for school work"
                    className="rounded-lg shadow-sm ring-1 ring-border/60"
                  />
                </figure>

                <p className="text-muted-foreground">
                  This is already without having to comb through each assignment looking for AI usage. It’s unsurprising that teachers are getting burnt out. The National Education Association (NEA) quoted an educator on burnout and its causes:
                </p>
                <blockquote className="border-l-4 border-border pl-4 py-3 pr-4 rounded-md bg-muted/40 text-muted-foreground">
                  <p>
                    “As more tasks and responsibilities are added, the profession has been transformed—and not for the better,” says Becky Bissegger, an elementary school teacher in Salt Lake City.
                  </p>
                </blockquote>
                <p className="text-muted-foreground">It’s a race to adapt and a struggle to keep honesty in the classroom.</p>

                {/* The Efficiency of Auto‑Grading */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">The Efficiency of Auto‑Grading</h3>
                <p className="text-muted-foreground">
                  Though AI may be the thorn in educators’ sides right now, it could also provide a solution to grading woes.
                </p>
                <p className="font-semibold">
                  <strong>How can teachers use AI to their advantage? And how are they already doing so?</strong>
                </p>
                <p className="text-muted-foreground">
                  AI detectors are being used across the nation by teachers and administrators. Though not foolproof, detectors can help reduce time spent pouring over assignments. Some tools analyze text patterns; others—including Checkmark—incorporate keystroke dynamics to better determine whether AI contributed to a student’s work.
                </p>
                <p className="text-muted-foreground">
                  Early reports note time savings and reduced overwhelm. Best AI Pro Insights summarized that a University of Michigan study found instructors using AI‑assisted grading reduced marking time by ~60% on average while maintaining high student satisfaction with feedback; EdTech Impact (UK) reported 74% of secondary teachers using AI tools felt “less overwhelmed” during exam periods.
                </p>
                <p className="text-muted-foreground">
                  AI‑assisted grading also powers <strong>auto‑grading</strong>. Software suggests scores mapped to a teacher’s rubric, then drafts feedback. With Checkmark Plagiarism, teachers can upload a rubric that’s parsed to analyze the assignment and generate scoring and feedback suggestions within seconds. What once took 5–10 minutes—or longer—can be triaged in moments. For students, this means more timely, personalized critiques—often within hours rather than days or weeks. This is meant to <em>assist</em> teachers, not replace their professional judgment.
                </p>

                {/* Closing */}
                <p className="pt-2 text-muted-foreground">
                  With rapid changes in AI and limited regulation, it’s no wonder teachers feel spent. What already consumed a large chunk of their schedules has become a colossal undertaking. While opinions on AI in the classroom are still evolving, most agree that protecting both student learning and teacher health should be top priorities. As AI detection improves, tools like auto‑grading can help shield educators from overwhelming fatigue—so they can keep focusing on students.
                </p>

                {/* References */}
                <h4 className="mt-10 text-xl font-semibold tracking-tight">References</h4>
                <ol className="list-decimal pl-6 space-y-2 marker:text-muted-foreground">
                  <li className="text-muted-foreground">
                    CalMatters reporting on teacher grading time. <em>Insert final link</em>.
                  </li>
                  <li className="text-muted-foreground">
                    Reddit, r/education thread on grading workloads (anecdotal). <em>Insert final link</em>.
                  </li>
                  <li className="text-muted-foreground">
                    National Education Association (NEA). Article quoting Becky Bissegger on burnout. <em>Insert final link</em>.
                  </li>
                  <li className="text-muted-foreground">
                    Best AI Pro Insights. Roundup citing University of Michigan AI‑assisted grading time‑savings and EdTech Impact UK survey. <em>Insert final link</em>.
                  </li>
                  <li className="text-muted-foreground">
                    University of Michigan study on AI‑assisted grading time reduction. <em>Insert final link</em>.
                  </li>
                  <li className="text-muted-foreground">
                    EdTech Impact (UK) survey on AI tools and teacher overwhelm (74%). <em>Insert final link</em>.
                  </li>
                </ol>

                <p className="mt-8 italic text-muted-foreground">Written by The Checkmark Plagiarism Team.</p>
              </article>

              <aside className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Article Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{meta.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{meta.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="w-4 h-4" />
                        <span>{meta.author}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="font-medium mb-3">Share this article</h4>
                      <Button variant="outline" size="sm" className="w-full">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Article
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENTED OUT - Related Articles section for future implementation
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/academic-integrity-digital-age" className="group">
                <Card className="transition-shadow hover:shadow-medium">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                        Academic Integrity
                      </span>
                      <span aria-hidden>•</span>
                      <span>7 min read</span>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                      Maintaining Academic Integrity in the Digital Age
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Strategies for fostering honest academic work while embracing educational technology.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/effective-rubric-design" className="group">
                <Card className="transition-shadow hover:shadow-medium">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                        Education
                      </span>
                      <span aria-hidden>•</span>
                      <span>10 min read</span>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                      Designing Effective Rubrics for Automated Grading
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Best practices for creating rubrics that work seamlessly with AI‑powered grading systems.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
      END COMMENTED SECTION */}
      {/* Back to Blog Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href={`/blog${refValue ? `?category=${encodeURIComponent(refValue)}#categories` : '#categories'}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
