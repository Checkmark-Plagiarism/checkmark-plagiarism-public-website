import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryVariant } from "@/lib/blog-category-utils";

export const metadata: Metadata = {
  title: "The Canvas Breach Should Change How Schools Buy Their Next AI Tool",
  description: "ShinyHunters hit 9,000 schools and exposed years of student messages. The breach should reshape how every district vets its next AI vendor contract.",
  keywords: [],
  openGraph: {
    images: ["/images/blog/the-canvas-breach-should-change-how-schools-buy-their-next-ai-tool/pexels-photo-17323801.jpeg"],
  },
};

export const meta = {
  title: "The Canvas Breach Should Change How Schools Buy Their Next AI Tool",
  description: "ShinyHunters hit 9,000 schools and exposed years of student messages. The breach should reshape how every district vets its next AI vendor contract.",
  "opengraph-image": "/images/blog/the-canvas-breach-should-change-how-schools-buy-their-next-ai-tool/pexels-photo-17323801.jpeg",
  date: "05-08-2026",
  readTime: "~9 min read",
  category: "Education",
  categories: ["Education", "Technology"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>On Thursday, May 7, 2026, students at thousands of schools and universities logged into Canvas to find their final exams replaced by a ransom note. ShinyHunters, the criminal group already behind the AT&amp;T, Ticketmaster, and PowerSchool breaches, had defaced login pages with a message demanding payment by May 12 or they would dump the data they claimed to have taken: roughly 3.65 terabytes from 8,809 schools, names and email addresses and student ID numbers and, more troublingly, messages between students and teachers (TechCrunch, 2026; K-12 Dive, 2026).</p>
<p>For a few hours that morning, finals week stopped. Then Instructure pulled Canvas, Canvas Beta, and Canvas Test offline, restored them after rotating credentials, and reassured customers that no passwords or financial data had been compromised (K-12 Dive, 2026). The platform is back. The exams will be rescheduled. The story will fade.</p>
<p>But there is a bigger story underneath, and schools should not let it fade. The breach matters less for what was stolen, which is real but recoverable, than for what it reveals about how schools have been quietly building data archives over the last decade. And it should make every district pause before signing the next AI vendor contract.</p>
<h2>What the Hackers Got</h2>
<p>The officially confirmed exposure is, by breach standards, not catastrophic. Names. School-issued email addresses. Student ID numbers. Messages exchanged among Canvas users (K-12 Dive, 2026). No Social Security numbers, no payment data, no birthdates.</p>
<p>It is the messages that are worth dwelling on. Canvas&#39;s inbox is where teachers and students ask each other questions outside of class. It is where a student requests an extension because of a death in the family, where another asks a teacher to clarify what counts as plagiarism, where a third confesses they do not understand the readings and falls behind. It is where parents email when something is wrong at home. It is, in many districts, the closest thing to a private channel between students and the adults responsible for them.</p>
<p>The soft tissue of a school&#39;s relational life now sits on a criminal data leak site, awaiting publication.</p>
<h2>This Isn&#39;t the First Time, and It Won&#39;t Be the Last</h2>
<p>About sixteen months earlier, in December 2024, PowerSchool disclosed a breach that exposed records of 62 million students and 9.5 million educators across thousands of districts. That breach included Social Security numbers for some students, dates of birth, medical alert information, and contact data (TechTarget, 2025). PowerSchool paid the ransom. Five months later, in May 2025, the attackers came back and tried to extort individual school districts directly using the data they had supposedly deleted (TechTarget, 2025).</p>
<p>The same group that hit Canvas, ShinyHunters, ran a 2024 campaign against customers of the cloud-data provider Snowflake. That campaign cascaded into breaches at AT&amp;T (110 million customer records), Ticketmaster (560 million), and roughly 163 other organizations, all reached through one vendor&#39;s infrastructure (Wikipedia, &quot;ShinyHunters&quot;).</p>
<p>The pattern repeats because it works. Attack a vendor, get data on every customer the vendor serves. The smaller the number of vendors that hold student data, the bigger the prize when one of them falls. PowerSchool serves a majority of the U.S. K-12 student information system market. Canvas dominates higher ed. When a district migrates to either, it is making a structural bet not just on uptime but on the security of a single counterparty whose own posture it cannot inspect.</p>
<p>This is not a problem that better firewalls will solve. It is a problem of data accumulation. And right now, schools are accumulating faster than ever.</p>
<h2>The AI Boom Is a Data-Layering Machine</h2>
<p>The Center on Reinventing Public Education found that the number of districts implementing AI roughly doubled between the 2023-24 and 2024-25 school years (CRPE, 2025). EdWeek&#39;s reporting describes districts crafting AI policy &quot;on the fly&quot; as new tools land in classrooms before legal review can catch up (Education Week, 2025). Common Sense Media&#39;s August 2025 review of AI teacher assistants like Khanmigo, Curipod, and MagicSchool rated the entire category &quot;moderate risk,&quot; noting that teachers were entering grades, family information, and birth dates into systems whose data flows they had not been trained to evaluate (Common Sense Media, 2025).</p>
<p>Each new tool is, technically and legally, another vendor that holds copies of student records. AI-detection products receive student essays. AI tutors receive transcripts of conversations between students and a model. AI-powered student-monitoring systems like Gaggle, GoGuardian, and Securly already capture device activity, search history, message content, and AI flags on writing tone, applied to roughly 82 percent of K-12 students according to a 2023 survey, with 38 percent of teachers reporting that monitoring continues outside school hours (New America, 2025; CDT, 2024).</p>
<p>The Center for Democracy and Technology&#39;s &quot;Off Task&quot; report calls this what it is: a surveillance infrastructure. Many of the companies operating it produce, in CDT&#39;s words, &quot;unsubstantiated marketing claims&quot; and engage in data collection and sharing practices that lack transparency (CDT, 2024). Districts buy because the tools promise to solve the problem of the moment, which right now is AI cheating. Each purchase nests another data store inside the school&#39;s digital footprint, with its own auth, its own retention policy, its own breach exposure, and its own incentive to share data with downstream partners.</p>
<blockquote>
<p>The reach extends beyond school hours.</p>
</blockquote>
<p>That single sentence from New America&#39;s reporting is the part most parents have not fully absorbed. The data being collected to monitor students for AI misuse, for self-harm risk, for academic integrity, does not stop being collected when the student walks out of school. It accumulates. And until a vendor is breached, it accumulates invisibly.</p>
<h2>Why Data Minimization Is a Structural Defense, Not a Privacy Nicety</h2>
<p>The phrase &quot;data minimization&quot; sounds like compliance jargon. It is not. It is the only design principle that bounds the damage of an inevitable breach. And it is more nuanced than &quot;delete everything fast.&quot;</p>
<p>Twelve U.S. states have already issued formal guidance pushing schools to apply minimization principles when adopting AI: collect only the data the tool actually needs, remove direct identifiers before submission, prefer pseudonymized or aggregated inputs, and tie retention windows to a documented pedagogical purpose rather than to vendor convenience (Student Privacy Compass, 2025). Vendor contracts should specify, in writing, what is collected, what is shared, what training is permitted on student data, and how quickly data is deleted.</p>
<p>Some kinds of data justify long retention. A plagiarism corpus has to span multiple years to catch a sophomore who turned in the essay an older sibling wrote three classes earlier. A grade history outlasts the course. An IEP file is a multi-year document by definition. The argument is not that schools should store less of everything. It is that every category of data they store should be doing identifiable work, and the categories that aren&#39;t, like the years of casual chat threads sitting in a Canvas inbox, should be aging out by default.</p>
<p>The reason this matters for the Canvas breach is simple. If Canvas had not stored years of message history that nobody was using, the messages stolen would have been smaller. If Canvas&#39;s &quot;Free-For-Teacher&quot; tier, which Instructure&#39;s spokesperson identified as the entry point for the unauthorized access, had isolated authentication paths from production student data, the blast radius would have been smaller (TechCrunch, 2026). Instead, the architecture optimized for the universe in which the data is occasionally useful and ignored the universe in which it leaks.</p>
<p>Every AI tool a district buys today is being designed under the same first universe. The vendor&#39;s marketing focuses on what the data enables when everything works. The district&#39;s security review, if it happens, focuses on encryption at rest and in transit. Almost no one asks the question that matters most: what is the worst version of the news story when this vendor is breached, and how do we shrink it before that headline writes itself?</p>
<h2>Five Questions to Ask the Next Vendor</h2>
<p>If this is going to change, it changes at the procurement level, before the contract is signed. Five questions, in order.</p>
<p>First, what student data does this tool need to function, and what will it actually store? &quot;Need&quot; and &quot;store&quot; are different categories. A model that can run on de-identified essays should not be sent identifiable ones. A tool that needs the prompt for thirty days should not retain it for five years.</p>
<p>Second, where does the data live, and which third parties does it touch? Most modern AI vendors are layered on top of OpenAI, Anthropic, Google, AWS, or Microsoft inference endpoints. Each layer is a potential breach surface, and each contract that goes unread is a layer of accountability the district has agreed to inherit.</p>
<p>Third, what is the retention policy, and is it tied to a specific pedagogical use? &quot;Forever, just in case&quot; is not a retention policy. Some categories of data, like a plagiarism corpus that has to compare across cohorts or a grade history that follows a transcript, justify long retention because the cross-time comparison is the whole point. Most do not. Casual chat threads, AI-tutor transcripts, and browsing logs should age out on a documented schedule that the vendor enforces in code, not on faith. Auditable retention, calibrated to use, is the bar.</p>
<p>Fourth, what is the breach notification SLA, in writing? PowerSchool&#39;s affected districts learned about the breach more than a month after the unauthorized access began, and learned about the second extortion wave from the attackers themselves (TechTarget, 2025). SLAs of 24 to 72 hours are not unreasonable to demand.</p>
<p>Fifth, is there a less data-hungry alternative that would do the pedagogical work nearly as well? Often the answer is yes, and the only reason it loses the procurement battle is that the data-hungry version has better marketing and more aggressive sales.</p>
<p>None of this is glamorous. None of it shows up in a strategic plan. But the alternative is the slow accumulation of student data in vendors whose internal security postures the district will never see, on a timeline that ends in a ransom note pasted across login pages during finals week.</p>
<h2>What Comes Next</h2>
<p>The conversation about AI in schools has so far been dominated by two camps. One side wants to ban AI tools, on the theory that they corrupt student work. The other wants to embrace them, on the theory that the future is already here. Both camps are arguing about whether students should use AI. Almost no one is arguing about how much student data the AI vendors should hold afterward.</p>
<p>That is the conversation the Canvas breach should force. Not because the breach itself was uniquely catastrophic; it was not. Because it makes vivid what the next breach, and the one after that, will look like. The kids in your district today will, statistically, be involved in another major EdTech breach before they graduate. Schools cannot choose whether the breach happens. They can choose how much hangs in the balance when it does.</p>
<p>A school&#39;s job is to teach students to think, to write, to argue, to make mistakes and recover. The data that genuinely serves that work, like a writing corpus kept long enough to do its pedagogical job or a transcript that follows a student from year to year, earns its place. The casual messages, the half-finished AI-tutor sessions, the years of browsing logs collected in the name of safety: those should be aging out by default. The pedagogy is the point. The data serves it or it goes. When the AI vendors come selling the next round of tools, that ordering is the only thing worth defending.</p>
<h2>Sources</h2>
<ol>
<li>K-12 Dive (2026). Instructure confirms cybersecurity incident. <a href="https://www.k12dive.com/news/instructure-confirms-cybersecurity-incident/819362/">https://www.k12dive.com/news/instructure-confirms-cybersecurity-incident/819362/</a></li>
<li>TechCrunch (2026). Hackers deface school login pages after claiming another Instructure hack. <a href="https://techcrunch.com/2026/05/07/hackers-deface-school-login-pages-after-claiming-another-instructure-hack/">https://techcrunch.com/2026/05/07/hackers-deface-school-login-pages-after-claiming-another-instructure-hack/</a></li>
<li>TechTarget (2025). PowerSchool data breach: Explaining how it happened. <a href="https://www.techtarget.com/whatis/feature/PowerSchool-data-breach-Explaining-how-it-happened">https://www.techtarget.com/whatis/feature/PowerSchool-data-breach-Explaining-how-it-happened</a></li>
<li>Wikipedia. ShinyHunters. <a href="https://en.wikipedia.org/wiki/ShinyHunters">https://en.wikipedia.org/wiki/ShinyHunters</a></li>
<li>Center on Reinventing Public Education (2025). Districts and AI: Early Adopters Focus More on Students in 2025-26. <a href="https://crpe.org/districts-and-ai-early-adopters-focus-more-on-students-in-2025-26/">https://crpe.org/districts-and-ai-early-adopters-focus-more-on-students-in-2025-26/</a></li>
<li>Education Week (2025). How School Districts Are Crafting AI Policy on the Fly. <a href="https://www.edweek.org/technology/how-school-districts-are-crafting-ai-policy-on-the-fly/2025/10">https://www.edweek.org/technology/how-school-districts-are-crafting-ai-policy-on-the-fly/2025/10</a></li>
<li>Common Sense Media (2025). AI Teacher Assistants Need Better Safety Measures, Common Sense Media Report Finds. <a href="https://www.commonsensemedia.org/press-releases/ai-teacher-assistants-need-better-safety-measures-common-sense-media-report-finds">https://www.commonsensemedia.org/press-releases/ai-teacher-assistants-need-better-safety-measures-common-sense-media-report-finds</a></li>
<li>New America (2025). Public Schools, Private Eyes: How EdTech Monitoring Is Reshaping Public Schools. <a href="https://www.newamerica.org/education-policy/edcentral/how-edtech-monitoring-is-reshaping-public-schools/">https://www.newamerica.org/education-policy/edcentral/how-edtech-monitoring-is-reshaping-public-schools/</a></li>
<li>Center for Democracy and Technology (2024). Off Task: EdTech Threats to Student Privacy and Equity in the Age of AI. <a href="https://cdt.org/insights/report-off-task-edtech-threats-to-student-privacy-and-equity-in-the-age-of-ai/">https://cdt.org/insights/report-off-task-edtech-threats-to-student-privacy-and-equity-in-the-age-of-ai/</a></li>
<li>Student Privacy Compass (2025). State Guidance on the Use of Generative AI in K-12 Education. <a href="https://studentprivacycompass.org/state-guidance-on-the-use-of-generative-ai-in-k-12-education/">https://studentprivacycompass.org/state-guidance-on-the-use-of-generative-ai-in-k-12-education/</a></li>
</ol>`;

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
