import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getCategoryVariant } from "@/lib/blog-category-utils";

export const metadata: Metadata = {
  title:
    'False Positives and Academic Integrity: The Risk of Current AI Detection Tools',
  description:
    'AI detectors can misfire—with lasting consequences for students, teachers, and schools. Here’s why false positives happen and how keystroke-based essay playback can help.',
  keywords: [
    'AI detection',
    'false positives',
    'academic integrity',
    'education technology',
    'keystroke analysis',
    'essay playback',
  ],
  openGraph: {
    images: [
      'https://public.checkmarkplagiarism.com/images/blog/false-positives-and-academic-integrity-the-risk-of-current-ai-detection/hero.jpg',
    ],
  },
};

export const meta = {
  title:
    'False Positives and Academic Integrity: The Risk of Current AI Detection Tools — What Happens When AI Detection Fails?',
  description:
    'When detectors get it wrong, trust breaks. We explain misfires, the human cost, and a path forward using transparent process data and essay playback.',
  'opengraph-image':
    '/images/blog/false-positives-and-academic-integrity-the-risk-of-current-ai-detection/hero.jpg',
  date: '08-15-2025',
  readTime: '~7 min read',
  category: 'Technology',
  author: 'The Checkmark Plagiarism Team',
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
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
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
                src={meta['opengraph-image']}
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
              <article className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5">
                {/* Attribution Row */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground -mt-2">
                  <span>Published on</span>
                  <time className="tabular-nums" dateTime={new Date(meta.date).toISOString()}>
                    August 15, 2025
                  </time>
                  <span aria-hidden>•</span>
                  <span>Checkmark Plagiarism</span>
                </div>

                {/* Epigraph */}
                <blockquote className="border-l-4 border-border pl-4 py-3 rounded-md bg-muted/40 text-muted-foreground">
                  <p>
                    “Where will things be in two year and a half years? And how do you prepare students for that world that&apos;s rapidly evolving?” — <span className="font-medium">Eddie Watson</span> (Teaching in Higher Ed, Ep. 517)
                  </p>
                </blockquote>

                {/* Intro */}
                <p className="text-muted-foreground">
                  AI is quickly becoming an unwelcome guest for teachers in educational institutes across the country. As students use AI more to complete assignments and essays, teachers have been saddled with the time consuming task of weeding out generated text from hundreds of assignments. As this new chore was placed on teachers shoulders, AI detectors emerged to lessen the load. What happens when AI detectors fail though? Are current AI detectors reliable?
                </p>

                {/* Misfires and Why They Occur */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">Misfires and Why They Occur</h3>
                <p className="text-muted-foreground">
                  In a 2024 study done by Steven R. Cooperman and Roberto A. Brandão on the accuracy and frequency of false positives using various AI detectors such as GPT Zero and Copyleaks, it was found that after six rounds of testing scientific texts and retesting three months afterwards, the average accuracy concluded was 64%. That means that 36% of the time, the AI detectors were incorrect in their evaluation of a piece of text. That is astonishingly high considering the life-altering effects a false detection can have on a professional or educational career.
                </p>
                <p className="text-muted-foreground">
                  Why is this? Tools such as Turnitin and GPT Zero both use pattern recognition, predictability, and intermittency for their detection methods. However, these things have proven themselves to be easily spoofed and bypassed by students, even more so as AI continues to grow and students become more familiar with how to use it. Though it is now more accepted that AI detectors do have a margin of error, this is an issue that companies still race to fix, for the lasting effects of a false detection can be catastrophic.
                </p>
                <p className="text-muted-foreground">
                  Even OpenAI themselves, in response to the question as to if AI current detectors work, said:
                </p>
                <blockquote className="border-l-4 border-border pl-4 py-3 rounded-md bg-muted/40 text-muted-foreground">
                  <p>
                    “In short, not in our experience. Our research into detectors didn&apos;t show them to be reliable enough given that educators could be making judgments about students with potentially lasting consequences.”
                  </p>
                </blockquote>

                <p className="font-semibold">So, where does that leave everyone?</p>

                {/* Consequences and Broken Trust */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">Consequences and Broken Trust: The Real-World Impact of False Positives</h3>
                <p className="text-muted-foreground">
                  Being falsely accused of using AI to complete an assignment can be an incredibly demoralizing experience for a student. With their integrity being questioned, a false positive can make students who’ve poured hours into writing, researching, and editing their own work, feel like their work no longer matters. It breeds a sense of mistrust and anxiety, causing them to wonder if their future efforts will be flagged again, or worse, if they’ll be punished unfairly. This is not unheard of, unfortunately, with many students having shared experiences where they were accused of using AI unjustly and sent down the lengthy and exhausting path of having to plead their case in an integrity investigation.
                </p>
                <p className="text-muted-foreground">
                  Teachers, on the other hand, are often placed in an uncomfortable and difficult position when a detector identifies a student’s work as AI written. They may feel pressure to act, even if they personally believe in the student’s honesty, which can cause oversight that could’ve been avoided. This tension puts strain on the very teacher-student relationships that build the foundation of a classroom environment. Then there’s the guilt that may come after the realization that a student didn’t use AI. These situations can sow paranoia and suspicion, leading to a hesitance towards discussion in a place where transparency and communication should be encouraged.
                </p>
                <p className="text-muted-foreground">
                  For the administrators and educators who oversee academic integrity policies, this is also a serious issue. They want to uphold academic standards and help students build their critical thinking skills, but they also must ensure that innocent students aren’t being penalized by faulty systems. Ultimately, if we rely too heavily on the tools we currently have, we risk replacing thoughtful human judgment with flawed automation—serving no one.
                </p>

                <figure className="my-8">
                  <Image
                    src="/images/blog/false-positives-and-academic-integrity-the-risk-of-current-ai-detection/hero2.jpg"
                    height={700}
                    width={700}
                    alt="graph showing the difference with using ai in the classroom for school work"
                    className="rounded-lg shadow-sm ring-1 ring-border/60"
                  />
                </figure>

                {/* Solutions and A New Path in Detection */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">Solutions and a New Path in Detection</h3>
                <p className="text-muted-foreground">
                  This all begs the question, what can we do moving forward to make sure that we safeguard the trust between students and teachers, while not normalizing the use of AI in the classroom?
                </p>
                <p className="text-muted-foreground">
                  In order to improve the situation, the simplest answer would be to expand on the methods used to detect AI in written assignments. Checkmark Plagiarism introduces a new method through their patent-pending keystroke analysis software. Keystroke analysis is the process of taking data on human writing patterns and using it to identify inconsistencies in the writing stream of a student’s work. Instead of only relying on text patterns and burstiness, Checkmark Plagiarism breaks down the writing process itself for teachers to reference while grading. This provides teachers and admin with the opportunity to observe for themselves how the student in question interacts with the keyboard as they compose their assignment through a playback system. This creates an environment of transparency for both the student and the teacher.
                </p>
                <p className="text-muted-foreground">
                  This new method encourages process writing, the act of drafting, revising, and outlining. Process writing is closely linked with and promotes critical thinking skills, which often are the thing that suffer the most when AI is involved in the writing process. According to the Purdue Global Writing Center, the writing process is:
                </p>
                <blockquote className="border-l-4 border-border pl-4 py-3 rounded-md bg-muted/40 text-muted-foreground">
                  <p>
                    “not just a mirror image of the thinking process: it is the thinking process. Confronted with a topic, an effective critical thinker/writer: asks questions, seeks answers, evaluates evidence, questions assumptions, tests hypotheses, makes inferences, employs logic, draws conclusions, predicts readers’ responses, creates order, drafts content, seeks others’ responses, weighs feedback, criticizes their own work, revises content and structure, seeks clarity and coherence”
                  </p>
                </blockquote>
                <p className="text-muted-foreground">
                  In order to help students go forward into the world with a toolbox of their own skills at their disposal, teachers, parents, and educators should encourage their students to explore process writing and in turn, show their educators what they’re truly made of through Checkmark Plagiarism.
                </p>

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
                        <Share2 className="w-4 h-4 mr-2" /> Share Article
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
