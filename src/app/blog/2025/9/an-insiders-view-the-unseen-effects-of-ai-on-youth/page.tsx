import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "An Insider's View: The Unseen Effects of AI on Youth",
  description:
    "We spoke with a team lead from a major California school district about how AI is changing young students—from reliance on ChatGPT to declining confidence and lost foundational skills.",
  keywords: [],
  openGraph: {
    images: [
      "/images/blog/an-insiders-view-the-unseen-effects-of-ai-on-youth/hero.jpg",
    ],
  },
};

export const meta = {
  title: "An Insider's View: The Unseen Effects of AI on Youth",
  description:
    "We spoke with a team lead from a major California school district about how AI is changing young students—from reliance on ChatGPT to declining confidence and lost foundational skills.",
  "opengraph-image":
    "/images/blog/an-insiders-view-the-unseen-effects-of-ai-on-youth/hero.jpg",
  date: "09-08-2025",
  readTime: "~6 min read",
  category: "Education",
  author: "The Checkmark Plagiarism Team",
};

export default function Page() {
  return (
    <main>
      {/* Article Header */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                {meta.category}
              </span>
              <span>•</span>
              <span>{meta.date}</span>
              <span>•</span>
              <span>{meta.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {meta.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8">
              {meta.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-foreground font-medium">{meta.author}</span>
              </div>

              <Button variant="outline" size="sm">
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
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <Image
                src={meta["opengraph-image"]}
                alt={meta.title}
                height={720}
                width={1280}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <article className="lg:col-span-3 prose prose-neutral dark:prose-invert max-w-none">
                {/* Intro */}
                <p>
                  AI in all forms has crept its way into the education system over the years. As students find ways to utilize it in assignments and take-home exams, it eats away at the current guided structure that schools provide their developing students. For people who grew up without AI and went through the education system the traditional way, it can seem mind-boggling that students as young as kindergarten are using AI as a way to short-cut assignments.
                </p>
                <p>
                  <strong>Yes….kindergarten.</strong>
                </p>
                <p>
                  During the vital years where young children normally learn skills that will serve them their entire lives, these children are instead using sites like Chat GPT to avoid learning all together. This is causing a widespread epidemic where children are lacking not only the basic skills necessary to read, write, and do simple maths, but they are also severely lacking in confidence. Even the most brilliant students are having a crisis of insecurity.
                </p>
                <p>
                  We sat down for a chat with a team lead from one of California&apos;s major school districts to discuss the sudden and detrimental shift that she&apos;s been seeing happen with the children around her. She frequently teaches and counsels students from kindergarten to seventh grade in the district&apos;s after school program.
                </p>
                <p>
                  For the sake of this interview, the team lead will be referred to as <span className="font-semibold">M</span> and our team at Checkmark Plagiarism will be using the initials <span className="font-semibold">CMP</span>.
                </p>

                {/* Q&A Section */}
                <h3 className="mt-10">Interview</h3>

                <div className="not-prose divide-y divide-border rounded-lg border border-border">
                  {/* Q1 */}
                  <div className="p-5">
                    <p className="mb-2"><span className="font-semibold text-foreground">CMP:</span> Have you observed students using AI tools (e.g., ChatGPT, Khanmigo, Grammarly) in their schoolwork? If so, how often and in what contexts?</p>
                    <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">M:</span> Yeah. So it&apos;s actually hilarious you asked. They (parents) have to tell us what websites they (students) need to go on for homework–not the students, the parents. And on at least half of these write ups for grades third through sixth, the parents, not the students, the parents have written in ChatGPT. I have witnessed kids being like, “yeah, no, my parents told me that I should just put in any of, like, these prompts into chat GPT, and then that&apos;s just my homework–like, that&apos;s what I&apos;ll do.” And if I had a nickel for this summer alone, how many times I heard about Chat GPT for schoolwork from any of the kids? I heard about it from a second grader at one point this summer. A second grader being like: “yeah, Chat GPT, like, it answers everything.” There probably is not a single day that I go without hearing about their (students) love of AI. Kids don&apos;t ask me to Google things anymore, kids ask me to ask Chat GPT.
                      </p>
                    </blockquote>
                  </div>

                  {/* Q2 */}
                  <div className="p-5">
                    <p className="mb-2"><span className="font-semibold text-foreground">CMP:</span> How do students typically use AI in their assignments—research, writing assistance, tutoring, coding, etc.?</p>
                    <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">M:</span> From what I&apos;ve seen, oh, majority of the time, it&apos;s using them to fully complete the assignment, or even, like, they don&apos;t open a calculator app anymore if they&apos;re struggling with their math assignment. They open Chat GPT. Like, genuinely, I&apos;ve been helping kids with math homework, and I open the calculator app and they go “why are you on calculator, not ChatGPT?” It&apos;s just a bunch of algorithms and patterns, and they do not understand that and they use it for every single type of assignment. I know a lot of people lean towards English with it, but, like, it is prevalent in math right now. They are so heavily reliant on it. It&apos;s my school site in particular. Again, I even heard about them during summer unprompted from people talking about using AI on assignments. Like, it&apos;s their new norm in a lot of ways is what I&apos;m seeing here.
                      </p>
                    </blockquote>
                    <p className="mt-3"><span className="font-semibold text-foreground">CMP:</span> So they&apos;re (students) mainly using it as a shortcut?</p>
                    <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">M:</span> Essentially. Yeah.
                      </p>
                    </blockquote>
                  </div>

                  {/* Context paragraph after Q2 */}
                  <div className="p-5">
                    <p>
                      Students have listed previously that some common perceived benefits and motivations for using AI are feedback &amp; study support, instruction, access to information, productivity, and creative support. The data for this list was collected from university students. At that age, students have already developed their basic life skills, and are able to utilize AI in a strategic manner. However, young students in elementary and middle school struggle to understand how to use AI as a productive learning tool when they do choose to use it. This has massively detrimental costs to their educational growth.
                    </p>
                  </div>

                  {/* Q3 */}
                  <div className="p-5">
                    <p className="mb-2"><span className="font-semibold text-foreground">CMP:</span> Do you think students understand how these tools work?</p>
                    <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">M:</span> No. They know they put the thing in, and they get what they want out. And that&apos;s legitimately as much as they know about it. Any of them. I asked seventh graders what GPT stands for, partially because I also, myself at the moment, did not know, and I just was like: &quot;hey. You guys talk about it enough.&quot; Yeah, and they didn&apos;t know. Like, they legitimately do not understand anything about this other than you put in what you want it to do and then it doesn&apos;t.
                      </p>
                    </blockquote>
                  </div>

                  {/* Q4 */}
                  <div className="p-5">
                    <p className="mb-2"><span className="font-semibold text-foreground">CMP:</span> Are there specific age groups that seem more inclined to use AI tools than others?</p>
                    <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">M:</span> It&apos;s genuinely everywhere. I had kindergarteners tell me their favorite website was ChatGPT, like, three days ago. Like, it&apos;s everywhere right now with them, and it&apos;s absolutely mind boggling to watch happen. There’s yet to be a child that I have seen that knows about any of the negative effects of it.
                      </p>
                    </blockquote>
                  </div>

                  {/* Q5 */}
                  <div className="p-5">
                    <p className="mb-2"><span className="font-semibold text-foreground">CMP:</span> Have you seen AI use affecting students&apos; creativity, critical thinking, or written communication skills besides what we’ve already spoken about—positively or negatively?</p>
                    <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">M:</span> It&apos;s confidence – students&apos; confidence in their own ability is, in my opinion, I&apos;ve been working with kids since I myself was a kid, since I was twelve. Yeah. I&apos;ve been working with elementary schoolers for thirteen years now. It is the least confident I&apos;ve ever seen kids be in their own intelligence. It&apos;s ungodly the way they&apos;re just like: &quot;no, but I can&apos;t do anything.&quot; They&apos;re so insecure about their own intelligence and their ability to actually do things. They&apos;re very aware of the fact that they&apos;re reliant on other things. But they do not want to actually become independent. And this is everyone from kindergarteners to seventh graders.
                      </p>
                    </blockquote>
                  </div>

                  {/* Section: Insecurities Rising */}
                  <div className="p-5">
                    <h4 className="text-lg font-semibold mb-3">How are insecurities on the rise as children use AI?</h4>
                    <p>
                      M was kind enough to tell us a story of what she&apos;s been observing happen to one of the students she&apos;s worked with.
                    </p>
                    <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">M:</span>  I have a sixth grader right now who genuinely is one of our smartest kids, knows more than probably anyone else, the best well behaved kid. The exact stereotype you were thinking of in your head when you think of, like, a future straight A student. Like, that&apos;s this girl to a T. Except even she is just like: “yeah, no, Chat GPT just makes my life easier. It makes it so I don&apos;t know…everything takes less time. It&apos;s so much easier because it&apos;s really so hard to think.” I&apos;ve been with her for I think, a year and a half now, and I&apos;ve watched it get worse with her. I&apos;ve kept track of it because I&apos;m with these kids way too often not to. She&apos;s making more friends, actually, so it&apos;s not a friend issue. Yeah. These are, like, friends who are exactly on par with her. This isn&apos;t that influence that&apos;s coming in. Nothing&apos;s changing at home. The only difference really is how long she&apos;s been using ChatGPT. Like intellectually, they don&apos;t understand the difference, that doing it by yourself is gonna boost you way more than doing it like your peers are doing. It&apos;s part of why it&apos;s fascinating with her in particular because these friends don&apos;t use chat GPT as much as she does. They still use it. So it&apos;s legitimately just her who is using it as often as she is for her homework assignments. I&apos;ve seen her go through this as she&apos;s also had to use it more and more on assignments because of those building blocks. She&apos;s missing them. She started using ChatGPT for time saving reasons, she said, and the issue now is that she is reliant on it because of the fact that she did it on those early assignments for productivity. That means then she&apos;s missing those blocks that you get from those assignments. That framework, that exercise, it&apos;s gone. She doesn&apos;t know how to do it herself. Then she had an entire year of doing that, so now she&apos;s even further behind. It&apos;s just the longer you use it for, the more reliant you become on it. It&apos;s scary.
                      </p>
                    </blockquote>
                  </div>

                  {/* Q6 */}
                  <div className="p-5">
                    <p className="mb-2"><span className="font-semibold text-foreground">CMP:</span> Is there anything you wish parents or administrators better understood about AI and its role in children&apos;s education?</p>
                    <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">M:</span> I know. It&apos;s hard, but just forcing them to sit through, like, a three hour lecture that actually tells you the benefits and downsides of AI and actually lays them out to them. Realistically, I would like them to just hear the bad things, but, you know, you and the improper. It really would be some understanding of the fact that, like, it&apos;s very easy to say AI is cutting corners, and it&apos;s very easy to write that off for a lot of parents, I think. But I think if there was a way to more explicitly say: “hey. I&apos;m watching your kids not know how to do things, like basic things because of the fact that they are using ChatGPT for it.” If there could be some way for parents to actually hear:
                      </p>
                      <p className="mt-3">“Hey, it&apos;s not helping in all the ways you think it is.”</p>
                    </blockquote>
                  </div>
                </div>

                {/* Closing section */}
                <p className="mt-8">
                  It was made increasingly clear, from the stories heard, just how much AI is taking a toll on the younger generation. It is preventing them from learning the proper skills that they need to excel in very basic aspects of life. It also brought to light that parents seem to be enabling and encouraging their young children to use ChatGPT as a substitute for doing the work themselves.
                </p>
                <p>
                  Where does that leave the child? <span className="font-semibold">Stranded.</span>
                </p>
                <p>
                  With the rise of insecurity in our children, feeling alone can make those insecurities grow even more. How would you feel, if your parents told you to let ChatGPT solve it, without even encouraging you to try? You too would lose confidence in yourself.
                </p>
                <p className="italic">It&apos;s time to change the rhetoric.</p>

                <p className="mt-10 italic">
                  Written by The Checkmark Plagiarism Team.
                </p>
              </article>

              <aside className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Article Info</h3>
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
                      <h4 className="font-medium text-foreground mb-3">Share this article</h4>
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

      {/* Related Articles */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/effective-rubric-design" className="group">
                <Card className="hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                        Education
                      </span>
                      <span>•</span>
                      <span>10 min read</span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      Designing Effective Rubrics for Automated Grading
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Best practices for creating rubrics that work seamlessly with AI-powered grading systems.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/blog/academic-integrity-digital-age" className="group">
                <Card className="hover:shadow-medium transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                        Academic Integrity
                      </span>
                      <span>•</span>
                      <span>7 min read</span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
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
    </main>
  );
}
