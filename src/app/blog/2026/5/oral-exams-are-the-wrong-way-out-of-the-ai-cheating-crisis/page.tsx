import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryVariant } from "@/lib/blog-category-utils";

export const metadata: Metadata = {
  title: "Oral Exams Are the Wrong Way Out of the AI Cheating Crisis",
  description: "Schools pivoting to oral exams to beat AI cheating are swapping forensic guesswork for performance bias — and exporting the cost to the students already struggling.",
  keywords: [],
  openGraph: {
    images: ["/images/blog/oral-exams-are-the-wrong-way-out-of-the-ai-cheating-crisis/pexels-rdne-8500670.jpg"],
  },
};

export const meta = {
  title: "Oral Exams Are the Wrong Way Out of the AI Cheating Crisis",
  description: "Schools pivoting to oral exams to beat AI cheating are swapping forensic guesswork for performance bias — and exporting the cost to the students already struggling.",
  "opengraph-image": "/images/blog/oral-exams-are-the-wrong-way-out-of-the-ai-cheating-crisis/pexels-rdne-8500670.jpg",
  date: "05-08-2026",
  readTime: "~9 min read",
  category: "Education",
  categories: ["Education", "Teaching"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>Last fall at NYU Stern, thirty-six students filed in for the final exam in a course on AI product management. There was no blue book. There was no essay. Each student spent about twenty-five minutes talking to a voice AI that asked follow-up questions and scored the answers. Total cost to the professor: fifteen dollars. That works out to forty-two cents a head. One undergraduate later told a reporter the format was &quot;awkward,&quot; like &quot;talking to what was pretty much a blank screen.&quot; On the post-exam survey, 83 percent said the experience was more stressful than a traditional test. Around 70 percent also called it the most honest measurement of their understanding they&#39;d ever taken (The Decoder, 2025).</p>
<p>That tension, more anxiety on one hand and more honesty on the other, is the implicit pitch behind the biggest shift in college assessment in decades. Writing assignments are suspect now. ChatGPT can do them. So Cornell, UPenn, NYU, and UC San Diego are spinning up oral exam programs. Clay Shirky, NYU&#39;s Vice Provost for AI and Technology in Education, has called for a &quot;medieval&quot; return to in-person, face-to-face demonstration of learning (Fortune, 2025). Professors in the trenches agree. Chris Schaffer, a biomedical engineer at Cornell, added an oral defense requirement last semester and put it bluntly to a reporter: &quot;You won&#39;t be able to AI your way through an oral exam&quot; (San Diego Today, 2026). It sounds bulletproof.</p>
<p>It isn&#39;t. The oral exam revival does solve a real problem (a teacher who receives a polished, AI-smoothed essay has no reliable way to evaluate the thinking behind it), but it does so by creating a different one. Oral exams don&#39;t measure thinking. They measure the ability to perform thinking under pressure, on demand, often in a second language, to an authority figure, through vocal cords that may or may not cooperate on a given day. Those aren&#39;t the same skill. Pretending they are is how we end up punishing the students who were already losing under the old system.</p>
<h2>The research on what oral exams actually measure</h2>
<p>Shirky, to his credit, has already conceded the core problem. &quot;Timed assessment may benefit students who are good at thinking quickly, not students who are good at thinking deeply,&quot; he wrote in the same essay arguing for oral exams (Fortune, 2025). The caveat usually gets folded into a logistics line (how do you give oral exams in a lecture of four hundred?) and then dropped. But it isn&#39;t a logistics problem. It&#39;s the pedagogical core of the objection.
Ray Hembree&#39;s foundational 1988 meta-analysis of 562 studies found that test anxiety depresses performance, inversely tracks self-esteem, and varies by ability, gender, and grade level (Hembree, 1988). A thirty-year follow-up confirmed the association hasn&#39;t weakened. If anything, the effect is stronger in high-stakes evaluative settings (von der Embse et al., 2018). Oral assessments reliably elicit more anxiety than written ones. In the second-language literature the finding is even starker: oral performance is more anxiety-sensitive than any other modality, and high-stakes speaking tasks produce the largest anxiety spikes in English-language learners (Liu &amp; Yan, 2025). The Foreign Language Classroom Anxiety Scale, the workhorse instrument in the field since Horwitz&#39;s 1986 paper, is so oral-biased that researchers have had to build new scales just to measure written anxiety cleanly.</p>
<p>What this means in practice: an oral exam doesn&#39;t just add some honest friction that filters for the students who &quot;really know it.&quot; It filters for a specific cognitive profile. Fast retrieval under surveillance. Comfort improvising in the evaluator&#39;s primary language. Tolerance for being looked at while thinking. Some students have that profile and the subject knowledge behind it. Some have the subject knowledge and not the profile. The exam can&#39;t tell them apart.</p>
<h2>The students who quietly pay</h2>
<p>Consider who walks into an oral exam carrying a handicap the rubric doesn&#39;t name.</p>
<p>English-language learners are the clearest case. The ACTFL guidelines treat oral proficiency as its own construct, distinct from reading and writing competence, because the research says it is. A student can write lucid, argued English prose and still freeze when asked to produce the same thought in real time. Anxiety research on L2 speakers shows speech rate drops, accent thickens, and comprehensibility ratings fall under evaluation pressure. Graders register all of this, often unconsciously, as weaker understanding (Saito et al., 2025). In a district where 20 or 30 percent of students are English learners (which describes a lot of American public schools) converting a writing assessment into an oral one is, quantitatively, a redistribution of grades away from those students.</p>
<p>&quot;Speaking is often regarded as the most anxiety-provoking modality in second language performance.&quot;
Annual Review of Applied Linguistics on L2 anxiety (Gkonou et al., 2017)</p>
<p>Students with speech-related disabilities are another group. Stuttering is explicitly recognized under the ADA as a qualifying disability when it substantially limits speaking, and recommended accommodations include &quot;written or typed responses in lieu of continuous speaking&quot; and &quot;alternative assessment formats&quot; (ASHA, 2024). A school that defaults to oral examination is, procedurally, asking every student who stutters (along with every student with selective mutism, social anxiety disorder, or certain autism-spectrum profiles) to either disclose and request an accommodation or perform through the impediment. Neither is a reasonable tax to levy on a student who can write a good essay.</p>
<p>The quieter population is introverts and socially reticent students. Research distinguishes introversion from shyness, but both groups participate less in oral settings, and teachers systematically rate lower-participation students as less capable even when actual assessment performance is controlled for (Caspi et al., 2006). &quot;Educators should avoid relying exclusively on oral presentations or timed verbal assessments,&quot; one recent secondary-school review concludes, because doing so reliably underestimates the capabilities of a quarter to a third of the class (Condliffe et al., 2023).</p>
<h2>The rarer problem no one wants to talk about</h2>
<p>Even if every student walked in with identical nerves and identical fluency, oral assessment has a second failure mode: the grader. Written essays can be anonymized. An oral exam can&#39;t.</p>
<p>Medical education gives us the cleanest evidence on what happens when evaluators have to assign real-time performance grades. A review covering more than 107,000 students across up to 113 medical schools found statistically significant racial and ethnic disparities in clerkship grades, which is the closest analogue in professional education to an oral performance evaluation (Low et al., 2019). Three studies of nearly 95,000 written evaluations found that the same students get systematically different adjectives depending on race and gender: fewer &quot;exceptional&quot; and &quot;outstanding&quot; descriptors for women and underrepresented minorities, more hedging language, more faint praise (Teherani et al., 2018). These weren&#39;t written exam grades. They were clinical performance assessments, the exact format Cornell and UPenn are expanding.</p>
<p>Stereotype threat is the other piece. The classic Spencer, Steele, and Quinn (1999) findings on women&#39;s math performance under threat conditions have been replicated, challenged, and narrowed in the years since. The current consensus is that the effects are real but more contextual than the early lab studies suggested. What hasn&#39;t been challenged is that live, high-stakes, evaluator-present assessment is exactly the condition where threat effects tend to surface. An oral exam is almost the ideal stimulus for the mechanism the literature describes.</p>
<p>When a teacher reads an essay, bias still operates, but it operates against a stable text that can be re-read, anonymized, cross-graded, or appealed. In an oral exam, the evaluation happens in the same room and the same second as the performance. There&#39;s no artifact to recheck. If a student wants to appeal, the best they can produce is their own recollection of the conversation against the professor&#39;s.</p>
<h2>What oral exams are good for</h2>
<p>None of this is an argument that oral defense is worthless. In the right place it&#39;s extremely valuable. A graduate thesis defense, a capstone project presentation, an oral component that follows and supplements a written product: these are well-designed because they test something the writing alone can&#39;t, namely the student&#39;s ability to hold the argument under pushback, revise in real time, and acknowledge what they don&#39;t know.</p>
<p>The problem is the slide from &quot;oral exams are good for some things&quot; to &quot;oral exams are the answer to AI cheating.&quot; The first is a claim about the format&#39;s proper niche. The second is a claim that because ChatGPT broke take-home writing, we should replace take-home writing with live performance, and that students who do worse in the new regime must have been cheating in the old one. They weren&#39;t. They were writing essays. Some of those essays are now suspect because of the tool, not the student. The collateral damage is not evenly distributed.</p>
<p>It&#39;s also worth saying what oral exams cost the teacher. Panos Ipeirotis, the NYU professor who ran the AI voice exam, was explicit about why he automated it: human oral exams for thirty-six students would have taken a research week and cost around seven hundred and fifty dollars in grader time (The Decoder, 2025). The human version does not scale to a hundred-student lecture, let alone a high school English department. So the realistic future of &quot;oral exams as AI-proofing&quot; isn&#39;t a thoughtful Socratic dialogue. It&#39;s a student talking to a voice agent for twenty minutes and getting scored by a model. We have replaced &quot;evaluating writing a student may not have written&quot; with &quot;evaluating speech a student gave to a robot.&quot; It isn&#39;t obvious this is progress.</p>
<h2>The thing oral exams are reaching for, and can&#39;t deliver</h2>
<p>The deeper reason oral exams are appealing right now is that they promise something every teacher wants: visibility into the thinking behind the product. You want to see the student reason in real time. You want to hear them struggle. You want evidence they own the answer.</p>
<p>That&#39;s the right goal. The answer is just that oral performance isn&#39;t the only way to see thinking, and it isn&#39;t the best one. Writing is thinking. That has been the entire pedagogical premise English teachers have defended for a century, and when a student drafts, revises, and revises again, the drafting process already contains all the evidence you need. The problem isn&#39;t that writing doesn&#39;t show thinking. The problem is that the only artifact we&#39;ve been collecting is the final essay, which (with AI) is no longer a reliable proxy for the process.</p>
<p>Process-visible writing, where the keystrokes, the revision timeline, the planning notes, and the false starts are part of what gets submitted, turns a take-home essay back into evidence of learning without replacing it with a performance. It keeps writing instruction intact. It doesn&#39;t tax the students who think deeply but slowly, or write fluently in English but speak hesitantly, or have a stutter, or freeze in front of an authority figure. It just asks the question the oral exam is really trying to ask, in a modality that doesn&#39;t punish the wrong people.</p>
<p>If the reason we&#39;re going medieval is that we can no longer tell whose thinking an essay represents, the answer is not to stop assigning essays. It&#39;s to stop pretending that a clean final draft was ever the only thing worth looking at.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <main className="bg-background text-foreground">
      <section className="pt-24 pb-10 border-b border-border">
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

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <article
                className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />

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
