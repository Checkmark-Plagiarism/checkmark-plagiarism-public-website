import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryVariant } from "@/lib/blog-category-utils";

export const metadata: Metadata = {
  title: "Is AI Helping or Hurting My Child’s Learning?",
  description:
    "An exploration of the dual nature of AI in education, balancing the promise of personalized tutoring with the risks of cognitive offloading and the illusion of understanding.",
  keywords: [
    "AI in education",
    "ChatGPT learning",
    "parenting and AI",
    "cognitive offloading",
    "personalized tutoring",
    "educational technology",
    "critical thinking",
    "student motivation",
  ],
  openGraph: {
    images: [
      "/images/blog/is-ai-helping-or-hurting/hero.jpg",
    ],
  },
};

export const meta = {
  title: "Is AI Helping or Hurting My Child’s Learning?",
  description:
    "An exploration of the dual nature of AI in education, balancing the promise of personalized tutoring with the risks of cognitive offloading and the illusion of understanding.",
  "opengraph-image":
    "/images/blog/is-ai-helping-or-hurting/hero.jpg",
  date: "03-23-2026",
  readTime: "~8 min read",
  category: "Education",
  categories: ["Education", "Parents"],
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
                  It’s 8:47 p.m. Your child is hunched over a laptop, toggling between a half-written essay and a chat window. You hear typing, then silence, then a sudden burst of productivity. Ten minutes later, they announce: “I’m done.”
                </p>
                <p className="text-muted-foreground">
                  You pause. Done?
                </p>
                <p className="text-muted-foreground">
                  For many parents, this moment captures the quiet tension of modern education. Tools like ChatGPT promise efficiency, clarity, and support, but they also raise an uncomfortable question: what actually happened inside your child’s brain during those ten minutes? Did they learn, or did the machine learn for them?
                </p>
                <p className="text-muted-foreground">
                  This question has quickly become one of the defining educational dilemmas of our time. Artificial intelligence is no longer theoretical or distant; it is embedded in classrooms, homework routines, and increasingly, in childhood itself. By 2025, 84% of high school students reported using AI tools for schoolwork, with ChatGPT leading adoption<sup>[2]</sup>. Even younger children are beginning to engage with AI, often before they fully understand how it works.
                </p>
                <p className="text-muted-foreground">
                  The reality is not simple. AI is neither purely beneficial nor inherently harmful. Instead, it functions as an amplifier, strengthening both productive learning behaviors and problematic ones. To understand its impact, we must examine both sides carefully.
                </p>

                {/* Section 1 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">The Promise: A Personalized Tutor in Every Home</h3>
                <p className="text-muted-foreground">
                  To understand why AI has spread so rapidly, it is important to acknowledge what it does well. Imagine a child struggling with fractions. In a traditional classroom, that child might hesitate to ask questions or fall behind as the lesson progresses. Now imagine that same child asking an AI system to explain fractions in simple terms. Within seconds, they receive a tailored explanation, examples, and opportunities to ask follow-up questions.
                </p>
                <p className="text-muted-foreground">
                  This is the central promise of AI in education: immediate, personalized support that adapts to the learner.
                </p>
                <p className="text-muted-foreground">
                  A large-scale meta-analysis conducted in 2025, examining 51 studies, found that ChatGPT has a statistically significant positive effect on student learning performance, along with a moderate impact on higher-order thinking when used in structured ways<sup>[1]</sup>. These tools are capable of breaking down complex topics, offering step-by-step reasoning, and adjusting explanations based on a student’s level of understanding. For students who struggle in traditional classroom environments, this kind of responsiveness can be transformative.
                </p>
                <p className="text-muted-foreground">
                  AI also plays a meaningful role in supporting diverse learning needs. It can help bridge language barriers, provide alternative explanations for students with learning differences, and offer additional practice opportunities outside of school hours. In this sense, AI has the potential to democratize access to educational support, extending resources that were once limited to tutoring or specialized instruction<sup>[9]</sup>.
                </p>

                {/* Section 2 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">When Learning Becomes Too Easy</h3>
                <p className="text-muted-foreground">
                  Despite these advantages, there is a growing body of research suggesting that the very features that make AI appealing may also undermine deep learning. To see this, consider a different version of the earlier scenario. Instead of asking for help understanding a concept, a student asks AI to generate an entire essay. Within seconds, the assignment is complete, requiring minimal effort from the student.
                </p>
                <p className="text-muted-foreground">
                  While the task is technically finished, the learning process was bypassed.
                </p>
                <p className="text-muted-foreground">
                  A study conducted by researchers at MIT’s Media Lab found that students who relied on AI tools like ChatGPT exhibited lower levels of brain activity during learning tasks compared to those who worked independently. Over time, these students also demonstrated reduced engagement and a greater tendency to depend on AI-generated outputs. Perhaps most concerning, they struggled to recall or reproduce the material later, suggesting weaker memory formation<sup>[5]</sup>.
                </p>
                <p className="text-muted-foreground">
                  This phenomenon aligns with the concept of cognitive offloading, in which individuals rely on external tools to perform mental tasks. While such offloading can increase efficiency, it may also reduce the mental effort required for learning, which is essential for building durable knowledge.
                </p>
                <p className="text-muted-foreground">
                  Another concern is the illusion of understanding. AI systems are designed to produce fluent and confident responses, even when the user’s comprehension is limited. As a result, students may feel as though they understand a concept when they have only passively consumed an explanation. Research indicates that while AI can improve short-term performance, such as completing assignments or preparing for tests, it weakens long-term retention and the ability to apply knowledge in new contexts<sup>[6]</sup>.
                </p>
                <p className="text-muted-foreground">
                  Closely related to this is what some researchers describe as “metacognitive laziness.” When students rely heavily on AI, they may skip critical stages of the learning process, such as planning, monitoring their understanding, and revising their work. Instead of engaging deeply with material, they may accept the first answer provided. This reduction in self-regulation can limit the development of critical thinking skills, which are essential for independent learning<sup>[7]</sup>.
                </p>

                {/* Section 3 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">The Developing Brain and Why Age Matters</h3>
                <p className="text-muted-foreground">
                  The impact of AI may be particularly significant for younger children, whose brains are still developing. Childhood and adolescence are critical periods for building executive function, memory systems, and reasoning abilities. These cognitive systems are strengthened through effortful learning, which involves grappling with challenges, making mistakes, and refining understanding over time.
                </p>
                <p className="text-muted-foreground">
                  Experts have raised concerns that early and unstructured exposure to AI could alter how these systems develop. If children consistently rely on AI to generate ideas or solve problems, they have fewer opportunities to practice independent reasoning and persistence. Over time, this could affect their ability to form strong mental models and engage in complex thinking<sup>[4]</sup>.
                </p>
                <p className="text-muted-foreground">
                  Recent findings also suggest that AI may encourage faster but shallower thinking. Students who frequently use AI tools may become more efficient at completing tasks but less inclined to reflect deeply or explore alternative approaches. While speed and efficiency are valuable, they can come at the cost of creativity and critical analysis, particularly if they replace rather than complement traditional learning processes<sup>[10]</sup>.
                </p>
                <p className="text-muted-foreground">
                  While students have rapidly embraced AI, educators are still navigating how to respond. Surveys indicate that teachers hold mixed views on the role of AI in education. According to research from the Pew Research Center, approximately one-quarter of teachers believe AI tools do more harm than good, while others see a balance of benefits and risks<sup>[3]</sup>.
                </p>
                <p className="text-muted-foreground">
                  This uncertainty reflects a broader shift in how learning is understood and assessed. AI has complicated traditional notions of authorship and originality, raising questions about what constitutes independent work. Teachers are now tasked with determining not only whether a student’s answer is correct, but also how it was produced.
                </p>
                <p className="text-muted-foreground">
                  As a result, many educators report spending more time verifying student work and addressing issues related to academic integrity. At the same time, some are experimenting with integrating AI into their teaching practices, using it as a tool for feedback, differentiation, and instruction. This dual role, as both a resource and a challenge, makes AI uniquely complex within the educational landscape.
                </p>

                {/* Section 4 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">Motivation, Ownership, and Reinforcement</h3>
                <p className="text-muted-foreground">
                  Beyond its cognitive effects, AI also influences how students perceive their own learning. When a student submits work that has been heavily assisted by AI, questions of ownership and achievement arise. If success becomes associated with AI-generated output rather than personal effort, students may experience a decline in intrinsic motivation.
                </p>
                <p className="text-muted-foreground">
                  This shift can have subtle but lasting consequences. Learning is not only about acquiring knowledge but also about developing a sense of agency and confidence. When students feel disconnected from their work, they may be less likely to engage deeply or take intellectual risks.
                </p>
                <p className="text-muted-foreground">
                  The distinction between AI as a partner and AI as a crutch is critical here. When students use AI to explore ideas, refine their thinking, and receive feedback, it can enhance learning. However, when AI replaces the thinking process entirely, it can erode the very skills education is meant to build.
                </p>
                <p className="text-muted-foreground">
                  Another important consideration is the accuracy and influence of AI-generated information. While AI systems are highly capable, they are not infallible. They can produce incorrect or misleading responses, often presented with confidence.
                </p>
                <p className="text-muted-foreground">
                  Research suggests that AI may reinforce existing misconceptions, particularly when users do not critically evaluate its outputs. Because AI tends to align with user input and avoid contradiction, it may unintentionally validate flawed reasoning. For developing learners, this can be especially problematic, as it may strengthen misunderstandings rather than correct them<sup>[10]</sup>.
                </p>

                {/* Section 5 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">A Balanced Perspective: AI as an Amplifier</h3>
                <p className="text-muted-foreground">
                  Given these complexities, the question of whether AI is helping or hurting learning does not have a simple answer. The evidence suggests that AI functions best when viewed as an amplifier. It can enhance effective learning strategies, but it can also magnify poor habits.
                </p>
                <p className="text-muted-foreground">
                  When used thoughtfully, AI can support understanding, provide valuable feedback, and encourage curiosity. When used as a shortcut, it can reduce effort, weaken memory, and limit the development of critical thinking.
                </p>
                <p className="text-muted-foreground">
                  The difference lies not in the technology itself, but in how it is used.
                </p>

                {/* Section 6 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">What Can Parents Do?</h3>
                <p className="text-muted-foreground">
                  For parents, navigating this landscape requires a shift in perspective. Rather than focusing solely on whether a child uses AI, it is more productive to consider how it is being used. Encouraging children to explain concepts in their own words after interacting with AI can help reinforce understanding and reveal gaps in knowledge.
                </p>
                <p className="text-muted-foreground">
                  Establishing boundaries around AI use is also important. For example, children can be encouraged to attempt problems independently before turning to AI for assistance. This preserves the role of productive struggle, which is essential for learning. Equally important is fostering AI literacy. Children should be taught to question AI outputs, verify information, and recognize limitations. By developing a critical approach to AI, they can use it more effectively and responsibly.
                </p>

                {/* Section 7 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">The Future of Learning</h3>
                <p className="text-muted-foreground">
                  Returning to that late-night homework scene, the presence of AI is no longer the question. It is already part of the learning environment. The more important question is what role it will play in shaping how children think. AI has the potential to support learning in powerful ways, but it also carries risks that cannot be ignored. It can either deepen understanding or replace it, depending on how it is used.
                </p>
                <p className="text-muted-foreground">
                  For parents and educators, the challenge is not to resist AI, but to guide its use. In a world where answers are increasingly immediate, the value of thinking, of questioning, struggling, and reflecting, becomes even more important.
                </p>
                <p className="text-muted-foreground">
                  Ultimately, the goal is not to raise children who can simply access information, but those who can engage with it critically, creatively, and independently. AI may change the tools of learning, but the core purpose of education remains the same: to develop minds capable of thinking for themselves.
                </p>

                <p className="mt-8 italic text-muted-foreground">Written by The Checkmark Plagiarism Team.</p>

                {/* Sources - smaller, visually separated */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-lg font-semibold tracking-tight mb-4 text-muted-foreground">Sources</h4>
                  <ol className="list-none pl-0 space-y-1.5 marker:text-muted-foreground/60">
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      [1] Wang, J. & Fan, W. (2025). The effect of ChatGPT on students’ learning performance. Nature.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      [2] College Board (2025). High school students’ AI usage report.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      [3] Pew Research Center (2024). Teachers’ views on AI in education.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      [4] Harvard Graduate School of Education (2024). AI and children’s development.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      [5] MIT Media Lab / TIME (2025). AI and critical thinking study.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      [6] Edutopia (2025). AI and long-term learning retention.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      [7] Fan et al. (2024). Metacognitive laziness and AI. arXiv.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      [8] Lademann et al. (2024). AI as personalized tutor. arXiv.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      [9] Motlagh et al. (2023). AI transforming education. arXiv.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      [10] Various reports on AI cognition and bias (2025).
                    </li>
                  </ol>
                </div>
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
