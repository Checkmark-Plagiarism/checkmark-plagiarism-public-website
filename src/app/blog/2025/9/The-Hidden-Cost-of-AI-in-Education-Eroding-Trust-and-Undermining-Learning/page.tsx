import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryVariant } from "@/lib/blog-category-utils";

export const metadata: Metadata = {
  title: "The Hidden Costs of AI on Education",
  description:
    "False AI accusations are eroding student–teacher trust. We unpack how AI is used by teachers and students, why detectors create false positives, and how essay playback can restore integrity.",
  keywords: [
    "AI in education",
    "student teacher trust",
    "AI detectors",
    "false positives",
    "academic integrity",
    "essay playback",
    "plagiarism detection",
  ],
  openGraph: {
    images: [
      "https://public.checkmarkplagiarism.com/images/blog/The-Hidden-Cost-of-AI-in-Education-Eroding-Trust-and-Undermining-Learning/hero.jpg",
    ],
  },
};

export const meta = {
  title: "The Hidden Costs of AI on Education",
  description:
    "Across classrooms, students face false AI accusations and strained relationships. Here’s how to rebuild trust—with better context, transparent practices, and essay playback.",
  "opengraph-image":
    "/images/blog/The-Hidden-Cost-of-AI-in-Education-Eroding-Trust-and-Undermining-Learning/hero.jpg",
  date: "10-09-2025",
  readTime: "~7 min read",
  category: "Education",
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
              <article className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5">
                {/* Intro */}
                <p className="font-semibold">
                  <strong>How can a student trust their teacher, when the teacher doesn’t trust them?</strong>
                </p>
                <p className="text-muted-foreground">
                  All across the world, students are struggling to prove the work they submit is truly theirs. With AI being both unregulated and unreliable, the issue of false accusations directed at students has grown. Far too often students are put in a position where they must tirelessly defend their work after getting falsely flagged for AI use. Not only do these interrogations put a strain on student–teacher relationships, but they also make students doubt the very educational system that is meant to prepare them for their futures.
                </p>
                <p className="text-muted-foreground">
                  While there is no foolproof detector, could there be a way for students to directly show that they are turning in honest work? How can we save the quickly disintegrating trust students have in their education?
                </p>

                {/* The Rise of AI In The Classroom */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">The Rise of AI in the Classroom</h3>
                <p className="text-muted-foreground">
                  As AI has become more integrated in people’s daily lives, it has just as much been finding its way into the classroom. Both students and teachers have shown to utilize AI as a tool and a shortcut.
                </p>
                <p className="text-muted-foreground">
                  Recently, teachers have used AI tools to help them plan lessons, outline assignments, and even gain valuable grading feedback. These tools significantly cut down on the time a teacher might spend outside of the classroom, providing them with more time to focus on their students individually rather than being saddled with increasingly draining tasks. According to All About AI, a whopping 60% of educators have said that they have used AI previously or currently in educational settings and classrooms, with 44% using it primarily for research purposes.
                </p>
                <p className="text-muted-foreground">
                  Students, on the other hand, have been shown to use AI for completing assignments, editing their work, and even generating complete essays or projects. Stemming from stress and pressure, many students’ use of AI is motivated by a desire to save time, or from their own personal insecurities. Students can turn to AI when they feel they lack the proper knowledge on a subject to complete an assignment, but are feeling the grading pressures that naturally come with education. This pressure—while originally meant to push and motivate students to seek out a deeper understanding of the subject on their own—now instead motivates them to seek out AI as a solution to fill the gaps.
                </p>
                <p className="text-muted-foreground">
                  Now, students might be thinking: <em>how is it fair that teachers get to use AI, but I don’t?</em>
                </p>
                <p className="text-muted-foreground">
                  This is a valid question and has left many students feeling a deep disconnect with their educators. The ways in which AI is employed by teachers and students varies vastly, mainly in the negative long‑term effects it might have on the individual. Where AI tools have proven to be largely helpful to teachers, providing a positive outcome when used as an organizational tool, AI has had the opposite effect for developing students. In a recent 2025 study published in Cornell University’s ASEE Annual Conference & Exposition<span className="align-super text-xs">[1]</span>, students themselves cited the loss of academic integrity, critical thinking skills, and accuracy of research as some of the top risks of AI usage in student learning.
                </p>

                {/* Breeding Ground for Distrust */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">Breeding Ground for Distrust</h3>
                <p className="text-muted-foreground">
                  What happens when students don’t use AI, but are accused of using it anyway? This is the reality for a lot of students today. With AI detection software becoming widely relied on in school environments, the rate of false positives has been concerning. With the power to severely harm both the career of a teacher and the future of a student, false positives bring significant stress to both parties.
                </p>
                <p className="text-muted-foreground">
                  For the students who pride themselves on their work and actively spend hours outside the classroom studying, an accusation of using AI for an assignment can feel like a slap in the face.
                </p>
                <p className="text-muted-foreground">
                  Not only is AI breaking trust on the student’s side, but also on the teacher’s. According to <em>The 74</em>, nearly two‑thirds of teachers said that generative AI has made them &quot;more distrustful&quot; of students and 90% said they suspect kids are using the tools to complete assignments. These preconceived notions that students are using AI to complete their assignments can sway a teacher’s perspective before they even set their eyes on a student’s work, drastically altering the relationship even before a false accusation is made.
                </p>

                {/* Undermining The Learning Environment */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">Undermining the Learning Environment</h3>
                <p className="text-muted-foreground">
                  Since the beginning of AI, there has been the question of how AI usage might be diminishing the educational impact of the learning environment. As concerns grow that the overuse of AI is causing students to lack certain important skills that are normally taught in the classroom, teachers are struggling to maintain the educational development that was the norm for hundreds of years before the AI era.
                </p>
                <p className="text-muted-foreground">
                  Overall student success rates in exams have been significantly affected. According to the academic paper &quot;Generative AI Usage and Exam Performance,&quot; published on SSRN, &quot;The results suggest that students using GenAI score 6.71 points lower in the final exam… about 15% lower than the mean non‑user… GenAI use can tip the scales toward failing the exam—at least statistically.&quot;<span className="align-super text-xs">[2]</span>
                </p>

                {/* A Way Forward: Essay Playback */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">A Way Forward: Essay Playback</h3>
                <p className="text-muted-foreground">
                  There could be a way to build back student trust and scores, while also providing teachers an honest way to detect AI—through a process called <strong>essay playback</strong>. Essay playback allows teachers to replay and observe a student’s essay as it was being written. Using data gathered from Google Docs and Microsoft Word as the student writes, the tool provides a video‑like review of the writing process. A teacher can then personally watch and, with a deeper understanding of the student’s creative process, decide—regardless of an automated detector’s score—whether AI was used.
                </p>
                <p className="text-muted-foreground">
                  With Checkmark Plagiarism, teachers have access to essay playback alongside other adjustable, regularly updated instruments for detecting AI <em>while protecting the student–teacher relationship</em>.
                </p>

                {/* Closing */}
                <p className="pt-2 text-muted-foreground">
                  While AI will inevitably grow, we need to do what we can to create an honest path for students to flourish both intellectually and creatively.
                </p>
                <p className="italic text-foreground/90">It’s time to change the rhetoric.</p>

                <p className="mt-8 italic text-muted-foreground">Written by The Checkmark Plagiarism Team.</p>

                {/* References */}
                <h4 className="mt-10 text-xl font-semibold tracking-tight">References</h4>
                <ol className="list-decimal pl-6 space-y-2 marker:text-muted-foreground">
                  <li className="text-muted-foreground">
                    [1] Pitts, Griffin, et al. &quot;Student perspectives on the benefits and risks of AI in Education.&quot; <em>2025 ASEE Annual Conference &amp; Exposition Proceedings</em>, 3 June 2025. <a className="underline underline-offset-4 hover:text-primary" href="https://doi.org/10.18260/1-2--57693" target="_blank" rel="noopener noreferrer">https://doi.org/10.18260/1-2--57693</a>.
                  </li>
                  <li className="text-muted-foreground">
                    [2] Wecks, Janik Ole, et al. &quot;Generative AI usage and academic performance.&quot; <em>SSRN Electronic Journal</em>, 18 Nov. 2024. <a className="underline underline-offset-4 hover:text-primary" href="https://doi.org/10.2139/ssrn.4812513" target="_blank" rel="noopener noreferrer">https://doi.org/10.2139/ssrn.4812513</a>.
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

      {/* COMMENTED OUT - Related Articles section for future implementation
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
