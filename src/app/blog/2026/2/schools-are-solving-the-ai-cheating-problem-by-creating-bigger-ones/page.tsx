import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryVariant } from "@/lib/blog-category-utils";

export const metadata: Metadata = {
  title: "Schools Are Solving the AI Cheating Problem by Creating Bigger Ones",
  description:
    "Schools are retreating to timed in-class essays to prevent AI cheating—but they're sacrificing the cognitive skills writing was designed to build. There's a better way.",
  keywords: [
    "AI cheating",
    "timed essays",
    "academic integrity",
    "productive struggle",
    "AI detection",
    "writing process",
    "essay forensics",
    "critical thinking",
    "education",
  ],
  openGraph: {
    images: [
      "https://public.checkmarkplagiarism.com/images/blog/schools-are-solving-the-ai-cheating-problem-by-creating-bigger-ones/hero.jpg",
    ],
  },
};

export const meta = {
  title: "Schools Are Solving the AI Cheating Problem by Creating Bigger Ones",
  description:
    "Schools are retreating to timed in-class essays to prevent AI cheating—but they're sacrificing the cognitive skills writing was designed to build. There's a better way.",
  "opengraph-image":
    "/images/blog/schools-are-solving-the-ai-cheating-problem-by-creating-bigger-ones/hero.jpg",
  date: "02-04-2026",
  readTime: "~10 min read",
  category: "Education",
  categories: ["Education", "Teaching"],
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
              {meta.categories && meta.categories.length > 0 ? (
                meta.categories.map((cat, index) => (
                  <span key={index} className={`px-2 py-1 rounded-full text-xs ${getCategoryVariant(cat)}`}>
                    {cat}
                  </span>
                ))
              ) : (
                <span className={`px-2 py-1 rounded-full text-xs ${getCategoryVariant(meta.category)}`}>
                  {meta.category}
                </span>
              )}
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
              <article className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5">
                {/* Intro */}
                <p className="text-muted-foreground">
                  After hundreds of conversations with teachers, administrators, and school districts, I keep seeing the same pattern: schools panicking about AI-generated essays and reaching for solutions that sacrifice the very skills writing assignments were designed to build.
                </p>
                <p className="text-muted-foreground">
                  The most common reaction? Retreating to timed, in-class essays. On the surface, it seems logical: if students can&apos;t access ChatGPT during a 45-minute class period, they can&apos;t cheat. Problem solved.
                </p>
                <p className="font-semibold">
                  <strong>Except it&apos;s not solved. It&apos;s traded for a worse one.</strong>
                </p>

                {/* The Point of the Assignment */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">The Point of the Assignment</h3>
                <p className="text-muted-foreground">
                  Before asking how to prevent cheating, schools should be asking a more fundamental question: what is this assignment actually for?
                </p>
                <p className="text-muted-foreground">
                  Long-form, take-home essays exist because they develop cognitive skills that timed writing simply cannot. When a student sits with an idea over several days, drafts and restructures an argument, rearranges paragraphs, and revisits their thesis after sleeping on it, they are doing something fundamentally different from producing text under time pressure.
                </p>
                <p className="text-muted-foreground">
                  Research backs this up. A peer-reviewed study by Quitadamo and Kurtz (2007) compared students who completed writing-intensive lab treatments with those who took traditional quizzes in a general education biology course. The writing group significantly improved their critical thinking skills, specifically in analysis and inference, while the non-writing group did not (Quitadamo &amp; Kurtz, 2007, <em>CBE Life Sciences Education</em>).
                </p>
                <p className="text-muted-foreground">
                  Writing is not just a way to demonstrate thinking. It is a mechanism for developing it. As Menary (2007) argues in <em>Language Sciences</em>, writing functions as a form of thinking itself, not merely a record of thought that happened elsewhere. The act of organizing, restructuring, and refining ideas on a page is where cognitive development happens.
                </p>
                <p className="text-muted-foreground">
                  A research summary from MSU Denver&apos;s Writing Center reinforces this, noting that writing facilitates deeper engagement with subject material because it &quot;requires focusing of attention, planning and forethought, organization of one&apos;s thinking, and reflective thought&quot; (MSU Denver, &quot;Writing as a Thinking Tool&quot;).
                </p>
                <p className="text-muted-foreground">
                  Timed essays strip away most of this. As Olivia Henderson argued in a piece for UCSB&apos;s Interdisciplinary Humanities Center, timed essays &quot;reward the ability to write and think quickly rather than write and think well.&quot; They don&apos;t allow students to conduct research while writing, and they don&apos;t evaluate the ability to gather information, digest it, and form independent thoughts about it. Henderson notes that &quot;taking the time to think about the nuances of a text and craft a meaningful argument is a more difficult, but rewarding and critical, skill than writing quickly&quot; (Henderson, 2022, UCSB IHC).
                </p>
                <p className="text-muted-foreground">
                  If in-class essays were a better pedagogical tool, we never would have moved to take-home writing in the first place.
                </p>

                {/* The Productive Struggle That AI Erases */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">The Productive Struggle That AI Erases</h3>
                <p className="text-muted-foreground">
                  Cognitive psychologist Robert Bjork&apos;s research on &quot;desirable difficulties&quot; (1992, 2011) shows that learning conditions which create short-term challenges actually enhance long-term retention and transfer. Effortful learning outperforms easy learning because the struggle itself creates stronger neural connections. Information becomes deeply encoded through meaningful connections rather than surface-level repetition (Bjork &amp; Bjork, 2011).
                </p>
                <p className="text-muted-foreground">
                  A 2025 report from Bellwether Education Partners, titled &quot;Productive Struggle: How Artificial Intelligence Is Changing Learning, Effort, and Youth Development in Education,&quot; directly addresses this in the AI context. The report defines productive struggle as &quot;the process of engaging with challenging tasks or problems that require effort, critical thinking, and persistence to solve,&quot; and notes that it typically includes running into obstacles, making mistakes, and experiencing discomfort while still working toward a solution (Bellwether, 2025).
                </p>
                <blockquote className="border-l-4 border-border pl-4 py-1 rounded-md bg-muted/40 italic text-muted-foreground">
                  <p>&quot;When does ease enable greater learning, and when is ease a shortcut with a hidden cost?&quot;</p>
                </blockquote>
                <p className="text-muted-foreground">
                  This is exactly what many teachers I talk to are missing. The ones who have adopted the position that &quot;AI is here to stay, just teach kids to use it&quot; have a point, but they haven&apos;t followed the logic far enough. When an AI feedback tool explains what is wrong with a student&apos;s argument in real time, or generates alternative phrasings on demand, it removes the productive friction that makes writing valuable. The student gets a polished essay. They do not get the cognitive development that comes from wrestling with their own ideas.
                </p>

                {/* Why Typed Essays Still Matter */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">Why Typed Essays Still Matter (More Than Handwritten Ones)</h3>
                <p className="text-muted-foreground">
                  Some schools are going even further, switching to handwritten essays to eliminate the possibility of digital cheating entirely. This creates its own set of problems.
                </p>
                <p className="text-muted-foreground">
                  Yes, research from van der Meer and van der Weel (2024), covered in <em>Scientific American</em>, shows that handwriting is better for note-taking and memory retention because it forces selective processing. You can&apos;t write down everything a lecturer says, so you have to actively prioritize and consolidate information.
                </p>
                <p className="text-muted-foreground">
                  But note-taking and essay composition are fundamentally different cognitive tasks. For essays, typing has distinct advantages that matter for developing thinking skills:
                </p>
                <p className="text-muted-foreground">
                  Students who type produce significantly more text, which allows for more developed arguments (Thomas, Paine, &amp; Price, 2003). More importantly, typed essays enable the iterative revision process&mdash;including creating drafts, rearranging paragraphs, restructuring arguments, and refining ideas across multiple sessions&mdash;that is central to developing higher-order thinking. This revision cycle (adding, rearranging, removing, and replacing) is where the deepest learning in writing actually occurs.
                </p>
                <p className="text-muted-foreground">
                  Digital composition also enables something handwriting cannot: a verifiable record of the writing process. When students type in a monitored environment, every keystroke, paste, deletion, and revision is captured. This creates a forensic trail that serves two purposes: it protects honest students by providing evidence of authentic work, and it gives teachers actionable data rather than gut feelings when something looks off.
                </p>
                <p className="text-muted-foreground">
                  This brings me to a problem I see constantly.
                </p>

                {/* AI Detectors Don't Work */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">AI Detectors Don&apos;t Work. But Neither Does &quot;Just Trust Your Gut.&quot;</h3>
                <p className="text-muted-foreground">
                  Most teachers I talk to still believe they can tell when a student has used AI. We built a &quot;Spot the AI Essay&quot; game to test this, and the results consistently surprise educators. Students are getting increasingly sophisticated at humanizing AI-generated text, and the gap between what teachers think they can detect and what they actually catch is widening.
                </p>
                <p className="text-muted-foreground">
                  Meanwhile, AI detection tools have been shown to be unreliable. A landmark 2023 study by Weber-Wulff et al. found that even the best AI detection software is only correct about 80% of the time, and simple paraphrasing can drop detection rates dramatically. Stanford researchers found that these tools disproportionately flag non-native English speakers&apos; writing. OpenAI shut down its own AI detection tool in 2023 due to its low accuracy rate (Weber-Wulff et al., 2023; Liang et al., 2023).
                </p>
                <p className="text-muted-foreground">
                  So if AI detection doesn&apos;t work, and teachers can&apos;t reliably spot AI writing by instinct, what&apos;s the alternative?
                </p>
                <p className="font-semibold">
                  <strong>The answer is not detection. It&apos;s forensics.</strong>
                </p>
                <p className="text-muted-foreground">
                  Rather than asking &quot;was this written by AI?&quot; after the fact, the better approach is to monitor the writing process itself. When you can see that a student drafted an outline, wrote a rough first paragraph, deleted it, started over, gradually built their argument over three sessions, and revised their conclusion twice, you don&apos;t need an AI detector. The process IS the evidence.
                </p>
                <p className="text-muted-foreground">
                  And when you can see that a student opened a blank document, pasted 800 words at 2 AM, changed two commas, and submitted it, you don&apos;t need an AI detector for that either. You have concrete behavioral data to point to, which transforms an accusation into a conversation grounded in evidence.
                </p>
                <p className="text-muted-foreground">
                  This is fundamentally different from free playback tools like Draftback or Google Docs version history. Those tools require teachers to manually watch a replay of every student&apos;s writing session&mdash;an impossible task at scale when you have 150 students. They also require students to share their documents, creating opportunities for manipulation: a student could submit a plagiarized copy while sharing a clean document, forcing the teacher to manually compare versions. The approach doesn&apos;t just fail to scale; it adds work instead of removing it.
                </p>
                <p className="text-muted-foreground">
                  What schools need is a system that automatically captures and analyzes the writing process, categorizes different types of potential integrity issues (copy-paste, AI generation, collaboration where it wasn&apos;t permitted), and surfaces only the cases that warrant teacher attention&mdash;with the evidence already organized.
                </p>

                {/* The Real Question Schools Should Be Asking */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">The Real Question Schools Should Be Asking</h3>
                <p className="text-muted-foreground">
                  Everyone agrees that banning AI entirely is not the answer. But &quot;embrace AI&quot; has become a thought-terminating cliche that lets schools skip the harder conversation about what learning actually requires.
                </p>
                <p className="text-muted-foreground">
                  The administrators I talk to often discuss &quot;embracing AI&quot; without distinguishing between fundamentally different use cases. A teacher using AI to generate quiz questions is not the same as a student using AI to write their essay. The teacher is not the one who needs to learn the material. This distinction seems obvious, but it is routinely collapsed in school-level AI policy discussions. I&apos;ve heard the argument &quot;if teachers are allowed to use AI, why shouldn&apos;t students?&quot; more times than I can count, and it misses the point entirely.
                </p>
                <p className="text-muted-foreground">
                  The real question is not &quot;how do we catch cheaters?&quot; or &quot;how do we embrace AI?&quot; It is: how do we preserve the cognitive processes that make students better thinkers?
                </p>
                <p className="text-muted-foreground">
                  That means protecting the conditions under which productive struggle happens. It means keeping long-form, typed, take-home essays as a core part of writing instruction rather than retreating to timed writes that test speed over depth. And it means monitoring the writing process itself rather than trying to reverse-engineer whether the final product was AI-generated.
                </p>
                <p className="text-muted-foreground">
                  The assignments that matter most are the ones where students sit with discomfort, wrestle with complexity, and come out the other side with ideas they built themselves. If we let the fear of AI cheating eliminate those assignments, we will have done more damage to student learning than AI ever could.
                </p>

                <p className="mt-8 italic text-muted-foreground">Written by The Checkmark Plagiarism Team.</p>

                {/* Sources */}
                <h4 className="mt-10 text-xl font-semibold tracking-tight">Sources</h4>
                <ol className="list-decimal pl-6 space-y-2 marker:text-muted-foreground">
                  <li className="text-muted-foreground">
                    Bjork, R. A., &amp; Bjork, E. L. (2011). Making things hard on yourself, but in a good way: Creating desirable difficulties to enhance learning. In M. A. Gernsbacher, R. W. Pew, L. M. Hough, &amp; J. R. Pomerantz (Eds.), <em>Psychology and the real world: Essays illustrating fundamental contributions to society</em>. Worth Publishers.
                  </li>
                  <li className="text-muted-foreground">
                    Bellwether Education Partners. (2025). Productive Struggle: How Artificial Intelligence Is Changing Learning, Effort, and Youth Development in Education. <a className="underline underline-offset-4 hover:text-primary" href="https://bellwether.org/publications/productive-struggle/" target="_blank" rel="noopener noreferrer">https://bellwether.org/publications/productive-struggle/</a>
                  </li>
                  <li className="text-muted-foreground">
                    Henderson, O. (2022). Time&apos;s Up!: Why We Should Stop Assigning Timed Essays. Interdisciplinary Humanities Center, University of California, Santa Barbara. <a className="underline underline-offset-4 hover:text-primary" href="https://ihc.ucsb.edu/times-up-why-we-should-stop-assigning-timed-essays/" target="_blank" rel="noopener noreferrer">https://ihc.ucsb.edu/times-up-why-we-should-stop-assigning-timed-essays/</a>
                  </li>
                  <li className="text-muted-foreground">
                    Liang, W., Yuksekgonul, M., Mao, Y., Wu, E., &amp; Zou, J. (2023). GPT detectors are biased against non-native English writers. <em>arXiv preprint arXiv:2304.02819</em>.
                  </li>
                  <li className="text-muted-foreground">
                    Menary, R. (2007). Writing as thinking. <em>Language Sciences</em>, 29, 621&ndash;632.
                  </li>
                  <li className="text-muted-foreground">
                    MSU Denver Writing Center. Writing as a Thinking Tool. <a className="underline underline-offset-4 hover:text-primary" href="https://www.msudenver.edu/writing-center/faculty-resources/writing-as-a-thinking-tool/" target="_blank" rel="noopener noreferrer">https://www.msudenver.edu/writing-center/faculty-resources/writing-as-a-thinking-tool/</a>
                  </li>
                  <li className="text-muted-foreground">
                    Quitadamo, I. J., &amp; Kurtz, M. J. (2007). Learning to improve: Using writing to increase critical thinking performance in general education biology. <em>CBE Life Sciences Education</em>, 6(2), 140&ndash;154.
                  </li>
                  <li className="text-muted-foreground">
                    Thomas, M. H., Paine, B. J., &amp; Price, T. S. (2003). Referenced in Mogey, N., Paterson, J., Burk, J., &amp; Purcell, M. (2010). Typing compared with handwriting for essay examinations at university. <em>Alt-J</em>, 18(1), 29&ndash;47.
                  </li>
                  <li className="text-muted-foreground">
                    van der Meer, A., &amp; van der Weel, R. (2024). Referenced in Scientific American: Why Writing by Hand Is Better for Memory and Learning.
                  </li>
                  <li className="text-muted-foreground">
                    Weber-Wulff, D., et al. (2023). Testing of Detection Tools for AI-Generated Text. <em>arXiv preprint arXiv:2306.15666</em>.
                  </li>
                </ol>
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
