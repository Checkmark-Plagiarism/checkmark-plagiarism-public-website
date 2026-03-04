import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryVariant } from "@/lib/blog-category-utils";

export const metadata: Metadata = {
  title: "Timed vs. Untimed Essays: What the Research Actually Says",
  description:
    "A comprehensive research synthesis on timed versus untimed writing assignments — covering cognitive science, assessment validity, equity, AI cheating, and expert recommendations.",
  keywords: [
    "timed essays",
    "untimed essays",
    "writing assessment",
    "AI cheating",
    "academic integrity",
    "essay writing",
    "critical thinking",
    "education research",
    "writing process",
    "assessment validity",
    "equity in education",
  ],
  openGraph: {
    images: [
      "/images/blog/timed-vs-untimed-essays-what-the-research-actually-says/hero.jpg",
    ],
  },
};

export const meta = {
  title: "Timed vs. Untimed Essays: What the Research Actually Says",
  description:
    "A comprehensive research synthesis on timed versus untimed writing assignments — covering cognitive science, assessment validity, equity, AI cheating, and expert recommendations.",
  "opengraph-image":
    "/images/blog/timed-vs-untimed-essays-what-the-research-actually-says/hero.jpg",
  date: "03-04-2026",
  readTime: "~25 min read",
  category: "Education",
  categories: ["Education", "AI Research"],
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
                  The evidence on timed versus untimed writing assignments is clear: they measure fundamentally different constructs, and the current retreat to timed in-class writing as an AI countermeasure risks sacrificing the cognitive benefits that made long-form essays valuable in the first place. The research doesn&apos;t support an &quot;either-or&quot; approach &mdash; it supports a &quot;both-and&quot; strategy, where timed writing verifies authorship and develops performance fluency, while untimed writing builds the deep thinking skills that define genuine learning. This tension sits at the center of a post-ChatGPT reckoning in education, and the data offers a clear path through it.
                </p>
                <p className="text-muted-foreground">
                  What follows is a comprehensive research synthesis across eight areas: cognitive science, assessment validity, equity, academic integrity, standardized testing, and expert recommendations &mdash; with specific studies, statistics, and expert quotes throughout.
                </p>

                {/* Section 1 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">1. What timed essays actually develop and measure</h3>
                <p className="text-muted-foreground">
                  Timed essays activate a specific and narrow set of cognitive skills: rapid recall, organizational efficiency under constraint, improvisational synthesis, and what composition researchers call &quot;knowledge-telling&quot; &mdash; the ability to externalize existing knowledge quickly without deep processing.
                </p>
                <p className="text-muted-foreground">
                  The cognitive process theory of writing, established by Flower and Hayes (1981), describes writing as a recursive loop of planning, translating, and reviewing. Under time pressure, writers are forced to truncate this loop. The reviewing and revision components &mdash; where the deepest learning occurs &mdash; get compressed or eliminated entirely. Inexperienced writers under time constraints &quot;become trapped in tiny loops in the process, repetitively correcting sentence-level mistakes before moving forward&quot; (Perl, 1979; Sommers, 1980).
                </p>
                <p className="text-muted-foreground">
                  Les Perelman, former Director of Undergraduate Writing at MIT, conducted perhaps the most damning analysis of timed essay assessment. Studying SAT essay samples, he found a greater than 90% correlation between essay length and score &mdash; he could predict scores &quot;from across a room&quot; based solely on length. His direct assessment: &quot;What they are actually testing is the ability to bullshit on demand. There is no other writing situation in the world where people have to write on a topic that they&apos;ve never thought about, on demand, in 25 minutes.&quot; Perelman&apos;s advocacy contributed to the College Board&apos;s decision to abolish the mandatory SAT Writing section.
                </p>
                <p className="text-muted-foreground">
                  Research from Schirner et al. (2023), cited in a University of Notre Dame review, found that students with higher intelligence scores solve easy problems faster but are consistently slower when solving difficult problems. Slower response times correlated with higher accuracy. As Andrew Browning summarized: &quot;Instead of assessing student knowledge, timed tests evaluate how well a student can reason under stress and guess answers quickly.&quot;
                </p>
                <p className="text-muted-foreground">
                  That said, timed writing does develop real skills. North Avenue Education (2025) identifies four genuine benefits: quick thinking and rapid argument structuring, clearer writing through forced efficiency, stronger grammar and mechanics through pressure-driven clean composition, and mental stamina for sustained focused effort. These are not trivial &mdash; they map directly to professional and academic contexts. The key insight from the research is captured well: &quot;Untimed writing supports reflection; timed writing supports performance.&quot;
                </p>

                {/* Section 2 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">2. Untimed essays build the thinking that matters most</h3>
                <p className="text-muted-foreground">
                  Extended, untimed writing develops a fundamentally different &mdash; and according to most composition scholars, more valuable &mdash; set of cognitive skills. These include deep research integration, iterative revision, critical analysis, argument development across multiple sessions, and what Bereiter and Scardamalia (1987) call &quot;knowledge-transforming&quot; &mdash; where the act of writing itself generates new understanding, rather than simply recording existing knowledge.
                </p>
                <p className="text-muted-foreground">
                  This distinction between &quot;knowledge-telling&quot; (common in timed settings) and &quot;knowledge-transforming&quot; (requiring extended time) is central. As Richard Menary argued in <em>Language Sciences</em> (2007), writing functions as a form of thinking itself, not merely a record of thought that happened elsewhere. The act of organizing, restructuring, and refining ideas on a page is where cognitive development happens.
                </p>
                <p className="text-muted-foreground">
                  A peer-reviewed study by Quitadamo and Kurtz (2007) in <em>CBE Life Sciences Education</em> compared students completing writing-intensive lab treatments with those taking traditional quizzes. The writing group significantly improved their critical thinking skills, specifically in analysis and inference, while the non-writing group did not.
                </p>
                <p className="text-muted-foreground">
                  Nancy Sommers&apos;s landmark research (1980) demonstrated that &quot;revision, as it is carried out by skilled writers, is not an end-of-the-line repair process, but is a constant process of &apos;re-vision&apos; or re-seeing that goes on while they are composing.&quot; Her work showed dramatic differences between student revisers (who focus on word-level changes) and experienced writers (who make global, meaning-level changes). Untimed writing provides the essential space for this higher-order cognitive work.
                </p>
                <p className="text-muted-foreground">
                  A meta-analysis by Graham and Hebert (2011) of 55 studies found that writing activities improved students&apos; reading comprehension with a mean effect size of d = 0.50 &mdash; a substantial educational impact.
                </p>
                <p className="text-muted-foreground">
                  MSU Denver&apos;s Writing Center research summary reinforces this, noting that writing facilitates deeper engagement because it &quot;requires focusing of attention, planning and forethought, organization of one&apos;s thinking, and reflective thought.&quot; As Olivia Henderson argued for UCSB&apos;s Interdisciplinary Humanities Center (2022), timed essays &quot;reward the ability to write and think quickly rather than write and think well&quot; &mdash; and &quot;taking the time to think about the nuances of a text and craft a meaningful argument is a more difficult, but rewarding and critical, skill than writing quickly.&quot;
                </p>

                {/* Section 3 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">3. The research on measurement validity is genuinely split</h3>
                <p className="text-muted-foreground">
                  The academic literature on whether timed or untimed essays better measure &quot;real&quot; writing ability is more nuanced than advocates on either side typically acknowledge. The findings break into two camps, with a meaningful methodological insight underneath.
                </p>
                <p className="font-semibold">
                  <strong>Studies showing higher scores with more time:</strong>
                </p>
                <p className="text-muted-foreground">
                  Powers and Fowles (1996), studying ~300 prospective GRE test-takers, found performance was significantly better when given 60 minutes versus 40 minutes. Crucially, there was no interaction between test-taking style (fast vs. slow) and time limits &mdash; slow writers did not disproportionately benefit. Their conclusion: &quot;When test takers are given more time, they write more and their scores are higher also.&quot; Additional studies by Biola (1982), Crone, Wright &amp; Baron (1993), Khuder &amp; Harwood (2015), and Younkin (1986) all found similar patterns.
                </p>
                <p className="font-semibold">
                  <strong>Studies finding no significant difference:</strong>
                </p>
                <p className="text-muted-foreground">
                  Caudery (1990), in a widely-cited study of L2 adolescent students, found &quot;surprisingly, no significant difference in the scores&quot; between timed and untimed essays. Crawford, Helwig &amp; Tindal (2004), Ewing (1992), Hale (1992), Knoch &amp; Elder (2010), and Kroll (1990) reached similar conclusions. Wu and Erlam (2016), studying 23 L2 learners, found that &quot;the timed condition had a significant effect on the length and content quality, but did not impact on accuracy nor complexity of writing&quot; &mdash; suggesting time limits primarily reduce elaboration and depth, not basic mechanics.
                </p>
                <p className="text-muted-foreground">
                  A 2025 study by Yu, Rosca, and Andrade, published in <em>Assessing Writing</em>, provided striking evidence for untimed assessment validity. Using the DAACS diagnostic system with 2,719 non-traditional students at Western Governors University, they found that untimed writing scores predict students&apos; future performance in college writing courses &mdash; and &quot;correlate more strongly with GPA than SAT Writing among traditional college students.&quot; Their conclusion: &quot;A writing assessment does not have to be expensive, high-stakes, proctored, or timed to be useful.&quot;
                </p>
                <p className="text-muted-foreground">
                  The field&apos;s most respected voices have landed in different places. Edward M. White championed timed impromptu essays in his influential &quot;An Apologia for the Timed Impromptu Essay Test&quot; (<em>CCC</em>, 1995), arguing they offer standardized conditions, cost-effectiveness, and reasonable reliability. Peter Elbow and Pat Belanoff countered that portfolio assessment is &quot;even more valid than timed essay tests because it focuses on multiple samples of student writing that have been composed in the authentic context of the classroom.&quot;
                </p>

                {/* Section 4 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">4. Equity and accessibility concerns are substantial and well-documented</h3>
                <p className="text-muted-foreground">
                  The equity implications of timed writing are among the strongest arguments against relying on it as the primary assessment format. The research documents significant disparate impacts across multiple student populations.
                </p>
                <p className="text-muted-foreground">
                  <strong>Students with disabilities</strong> represent the most studied group. Extended time is the most frequently provided test accommodation &mdash; accounting for 55% of all accommodations requested and granted on standardized tests (GAO data). On the ACT specifically, 94% of students receiving accommodations get extra time, most commonly time-and-a-half. Learning disabilities account for ~45% of accommodations, with ADHD at nearly 25%. The &quot;Differential-Boost Hypothesis&quot; holds that while all students benefit from extra time, students with disabilities benefit disproportionately more. One key study found that under timed conditions, there was a significant difference between scores of LD versus non-LD students, but no significant differences under untimed conditions &mdash; suggesting time limits create artificial performance gaps. However, a 2017 study found that while students with LD demonstrated increased writing fluency with extended time, &quot;the organizational and thematic quality of their essays continued to be lower&quot; &mdash; extra time helps but doesn&apos;t fully close the gap.
                </p>
                <p className="text-muted-foreground">
                  <strong>ESL/ELL students</strong> face compounding challenges. A 2005 IEEE study found timed writing assessment resulted in an &quot;unproportionally high failure rate among ESL students.&quot; ETS guidelines explicitly recommend extended testing time as an accommodation for English Language Learners, noting the need to separate language processing speed from content knowledge assessment. Wu and Erlam&apos;s (2016) L2 research confirms that untimed conditions allow &quot;planning, organizing, correcting, and editing that could lead to a greater number of words and better writing qualities.&quot;
                </p>
                <p className="text-muted-foreground">
                  <strong>Test anxiety</strong> affects an estimated 15&ndash;20% of students at high levels (Hill &amp; Wigfield), with broader anxiety prevalence among college students pooled at 31% across a meta-analysis of 13 studies (Chang et al., 2021). A landmark study by Ramirez and Beilock (2011), published in <em>Science</em>, found that highly anxious students who wrote about their fears before tests received an average grade of B+, compared to B&ndash; for those who didn&apos;t &mdash; nearly a full grade point improvement. Onwuegbuzie and Seaman (1995) found unlimited time improved performance specifically for students with the highest levels of test anxiety.
                </p>
                <p className="text-muted-foreground">
                  <strong>Gender effects</strong> are notable: Montolio and Taberner (2021) found male students outperform females on high-stakes timed exams by 0.132 standard deviations, but as stakes decrease, the gap reverses in favor of females by 0.08 SD. Both genders scored better on lower-pressure exams, but females&apos; scores improved significantly more (0.153 SD vs. 0.018 SD).
                </p>
                <p className="text-muted-foreground">
                  <strong>Racial bias</strong> in writing assessment compounds these issues, though it operates through grading rather than timing per se. Quinn (2020), in a randomized experiment with 1,549 teachers, found that on a vague evaluation scale, teachers rated writing lower when randomly signaled to have a Black author &mdash; but clear rubrics eliminated this bias entirely.
                </p>

                {/* Section 5 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">5. AI cheating has fundamentally changed the timed-vs-untimed calculus</h3>
                <p className="text-muted-foreground">
                  The rise of generative AI has created a seismic shift in how educators approach writing assignments, with data showing that the take-home essay is becoming an endangered species.
                </p>
                <p className="text-muted-foreground">
                  The statistics on student AI use are staggering. The Digital Education Council&apos;s 2024 global survey found 86% of students use AI in their studies, with 54% using it weekly and 24% daily. In the UK, the HEPI/Kortext 2025 survey found 92% of undergraduates use AI tools in academic work (up from 66% in 2024), with student use of AI for assessments surging from 53% to 88% in a single year. Use of AI to generate text doubled from 30% to 64%. The College Board (2025) reports 69% of high school students used ChatGPT for schoolwork. In the UK, nearly 7,000 university students were formally caught cheating with AI in 2023&ndash;24 &mdash; triple the previous year &mdash; while a Taylor &amp; Francis study using list experiment methodology estimates 22% of UK students cheated with GenAI that same year.
                </p>
                <p className="text-muted-foreground">
                  This has triggered a visible retreat to in-class writing. Casey Cuny, a 23-year English teacher and 2024 California Teacher of the Year, told Fortune/AP (September 2025): &quot;The cheating is off the charts. It&apos;s the worst I&apos;ve seen in my entire career. Anything you send home, you have to assume is being AI&apos;ed.&quot; His students now do most writing in class with lockdown software monitoring screens. Kelly Gibson in Oregon: &quot;I used to give a writing prompt and say, &apos;In two weeks, I want a five-paragraph essay.&apos; These days, I can&apos;t do that. That&apos;s almost begging teenagers to cheat.&quot; Carnegie Mellon told faculty that a blanket AI ban &quot;is not a viable policy&quot; unless instructors change assessment methods, with many returning to in-class writing and lockdown browsers. Only 34% of teachers say their school has consistent AI-related cheating policies (RAND, 2025).
                </p>
                <p className="text-muted-foreground">
                  Meanwhile, AI detection tools have proven unreliable. Weber-Wulff et al. (2023) found even the best AI detection software is only correct about 80% of the time, with simple paraphrasing dropping detection rates dramatically. Stanford researchers (Liang et al., 2023) found these tools disproportionately flag non-native English speakers&apos; writing as AI-generated. OpenAI shut down its own detection tool in 2023 due to low accuracy. A University of Reading study found 94% of AI-written exam submissions went completely undetected by human markers.
                </p>
                <p className="text-muted-foreground">
                  The emerging alternative is process-based assessment &mdash; monitoring how writing is produced, not just evaluating the final product. Crossley et al. (2024), presenting at the International Conference on Educational Data Mining, found that authentic writing shows more pauses before sentences, more insertions, and more deletions and revisions, while transcribed or AI-pasted writing is more linear with fewer revisions. Their key finding: &quot;AI detection models that focus on the product alone will not be successful at identifying or combatting plagiarism, especially as AI evolves.&quot; Allen et al. (2016) found keystroke indices accounted for 76% of variance in essay quality. Jiang et al. (2024) and Deane (2026), both in the <em>Journal of Educational Measurement</em>, confirmed that keystroke dynamics are effective in identifying nonauthentic texts.
                </p>
                <p className="text-muted-foreground">
                  Tricia Bertram Gallant, a 20+ year academic integrity specialist associated with ICAI, warns in <em>Liberal Education</em> against &quot;returning to an overreliance on secure assessments&quot; while recommending schools &quot;proctor at least one assessment&quot; and combine it with meaningful coursework that reduces cheating temptation.
                </p>

                {/* Section 6 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">6. Expert organizations recommend multiple measures, not a single format</h3>
                <p className="text-muted-foreground">
                  Every major professional organization in writing education recommends a balanced, multi-measure approach &mdash; none endorses exclusive reliance on timed writing.
                </p>
                <p className="text-muted-foreground">
                  The CCCC (Conference on College Composition and Communication) Writing Assessment Position Statement (revised April 2022) establishes six foundational principles, emphasizing that &quot;best assessment practice uses multiple measures to ensure successful formative and summative assessment,&quot; and that &quot;admissions, placement, and proficiency-based assessment practices are high-stakes processes with a history of exclusion and academic gatekeeping.&quot; The statement explicitly calls for assessment methods that &quot;provide multiple paths to success, accounting for a range of diverse language users.&quot;
                </p>
                <p className="text-muted-foreground">
                  The WPA Outcomes Statement for First-Year Composition (Version 3.0, 2014) defines five outcome areas &mdash; rhetorical knowledge, critical thinking, processes, conventions, and composing in electronic environments &mdash; and intentionally frames writing as process-based: drafting, revising, editing, not single-sitting production.
                </p>
                <p className="text-muted-foreground">
                  The Universal Design for Learning (UDL) framework, developed by CAST, recommends offering &quot;different methods for students to demonstrate what they are learning&quot; and specifically advises that if a learning goal is not specifically about writing speed, &quot;then a timed written exam can be a barrier for many learners.&quot; UDL Guidelines 3.0 addresses &quot;critical barriers rooted in biases and systems of exclusion.&quot;
                </p>
                <p className="text-muted-foreground">
                  In the AI era specifically, Dawson, Bearman, Dollinger, and Boud (2024) argued in <em>Assessment &amp; Evaluation in Higher Education</em> that &quot;assessment quality, not cheating prevention, should drive AI-era reforms.&quot; The CCCC/CWPA Joint COVID-19 Statement established a principle that remains relevant: &quot;assessments and pedagogical choices should prioritize learning and students&apos; successful demonstration of stated course objectives and learning outcomes, not time spent in an LMS or behavioral measures.&quot;
                </p>
                <p className="text-muted-foreground">
                  The emerging consensus among AI-era assessment researchers points toward a hybrid model: process-based assessment (watching the writing unfold) combined with some timed, proctored writing for verification, supplemented by formative assessments throughout the writing process. As the AWAC 2025 Statement recommends: &quot;Use AI detection tools, if at all, only as part of a multi-pronged approach, supplemented by process-based assessment.&quot;
                </p>

                {/* Section 7 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">7. Standardized testing makes timed writing practice unavoidable</h3>
                <p className="text-muted-foreground">
                  Regardless of the pedagogical arguments, the practical reality is that students face high-stakes timed writing on multiple standardized assessments, making some timed writing practice a pragmatic necessity.
                </p>
                <p className="text-muted-foreground">
                  AP English Language and Composition requires 3 essays in 2 hours 15 minutes (~40 minutes each), worth 55% of the total exam score. AP English Literature follows the same format. AP History exams (US, World, European) include a Document-Based Question at 60 minutes and a Long Essay at 40 minutes, totaling 40% of the exam score. As of 2025, AP essays are typed into the Bluebook digital application.
                </p>
                <p className="text-muted-foreground">
                  The GRE Analytical Writing section (post-September 2023 &quot;Shorter GRE&quot;) requires one &quot;Analyze an Issue&quot; essay in 30 minutes, scored by both a human grader and an AI grader, with the human grader spending approximately 30 seconds per essay. The SAT Essay was discontinued in June 2021 after being made optional in 2016, though some states continued requiring it through SAT School Day programs.
                </p>
                <p className="text-muted-foreground">
                  At the K&ndash;12 level, Florida&apos;s B.E.S.T. Writing Assessment tests all students in grades 4&ndash;10 on computer-based timed writing. South Carolina&apos;s SC READY introduced Text-Dependent Writing items in 2024&ndash;25 across grades 3&ndash;8. Multiple states maintain timed writing components through Smarter Balanced and PARCC assessments aligned to Common Core standards.
                </p>
                <p className="text-muted-foreground">
                  The connection between practice and performance is well-established by test prep organizations: students who practice under timed conditions build planning, outlining, and time management skills transferable to these high-stakes contexts. The counter-argument, articulated by multiple researchers, is that over-emphasis on timed practice rewards formulaic structures (the 5-paragraph essay) over complex thinking &mdash; and as Perelman demonstrated, scoring systems often reward length over quality.
                </p>

                {/* Section 8 */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">8. The reference blog&apos;s style offers a template for evidence-based thought leadership</h3>
                <p className="text-muted-foreground">
                  The reference article (&quot;Schools Are Solving the AI Cheating Problem by Creating Bigger Ones&quot;) provides a clear stylistic template for the target blog post. Key characteristics to replicate:
                </p>
                <p className="text-muted-foreground">
                  The tone is confident, authoritative, and editorially provocative without being aggressive &mdash; reading like a seasoned industry insider who is frustrated but constructive. It uses first person sparingly to establish credibility through direct experience rather than academic distance. The provocative framing operates at the thesis level, not through inflammatory language.
                </p>
                <p className="text-muted-foreground">
                  Structurally, the article runs approximately 2,200 words across 5 headed sections plus an untitled opening hook, following a problem &rarr; deeper problem &rarr; failed solutions &rarr; real solution &rarr; reframing arc. Each section dismantles one wrong approach before arriving at the right one. Headers function as mini-thesis statements.
                </p>
                <p className="text-muted-foreground">
                  The writing alternates between longer, complex sentences (for research presentation) and very short, punchy declaratives for emphasis. The article is research-dense &mdash; citing roughly 10 academic sources &mdash; with statistics used surgically rather than in data dumps. Quotes are woven into the argument as support for claims already made, never standing alone.
                </p>
                <p className="text-muted-foreground">
                  Most critically for a company blog, the article never names the company or product. The product is described as what schools need, not as a sales pitch. Competitor alternatives are dismissed on evidence, not marketing. The article earns credibility by leading with pedagogy, citing academic research, acknowledging complexity, and framing everything around student outcomes rather than institutional convenience. A reader could absorb the entire article without realizing they were on a company blog &mdash; the conceptual sell is implicit, not explicit.
                </p>

                {/* Conclusion */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">Conclusion: the path forward is process, not either-or</h3>
                <p className="text-muted-foreground">
                  The research converges on several actionable insights that go beyond the false binary of timed versus untimed. First, timed and untimed essays measure genuinely different cognitive constructs &mdash; one measures performance under constraint, the other measures the depth of thinking that education exists to develop. Neither is a substitute for the other.
                </p>
                <p className="text-muted-foreground">
                  Second, the equity data is unambiguous: time pressure creates artificial performance gaps for students with disabilities, ESL students, and those with test anxiety &mdash; gaps that narrow or disappear when time constraints are removed. Any assessment system built primarily on timed writing will systematically disadvantage these populations.
                </p>
                <p className="text-muted-foreground">
                  Third, the AI cheating crisis has created legitimate pressure to verify student authorship, but the retreat to timed-only, handwritten-only, or proctored-only assessment sacrifices the extended cognitive work that makes writing pedagogically valuable. The most promising research points toward process-based assessment &mdash; monitoring the writing process through keystroke dynamics and behavioral analysis &mdash; as a way to preserve long-form writing&apos;s cognitive benefits while maintaining integrity verification.
                </p>
                <p className="text-muted-foreground">
                  Fourth, standardized testing realities (AP exams, state assessments) make timed writing practice a practical necessity &mdash; students cannot avoid it, so they need structured preparation for it.
                </p>
                <p className="font-semibold">
                  <strong>The emerging expert consensus recommends a portfolio approach: timed writing for baseline verification and test preparation, untimed writing for developing deep thinking, and process-based monitoring as the bridge that makes both possible without sacrificing either. The question isn&apos;t whether to use timed or untimed essays &mdash; it&apos;s how to design a system where both serve their proper pedagogical purpose while keeping the writing authentic.</strong>
                </p>

                <p className="mt-8 italic text-muted-foreground">Written by The Checkmark Plagiarism Team.</p>

                {/* Works Cited - smaller, visually separated */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-lg font-semibold tracking-tight mb-4 text-muted-foreground">Works Cited</h4>
                  <ol className="list-decimal pl-6 space-y-1.5 marker:text-muted-foreground/60">
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Allen, Laura K., et al. &quot;Investigating Bored Readers: Using Keystroke and Self-Report Data to Predict Essay Quality.&quot; <em>Proceedings of the International Conference on Educational Data Mining</em>, 2016.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Bereiter, Carl, and Marlene Scardamalia. <em>The Psychology of Written Composition</em>. Lawrence Erlbaum Associates, 1987.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Bertram Gallant, Tricia. &quot;How Do We Maintain Academic Integrity in the ChatGPT Era?&quot; <em>Liberal Education</em>, Association of American Colleges and Universities, 2023. <a className="underline underline-offset-4 hover:text-primary" href="https://www.aacu.org/liberaleducation/articles/how-do-we-maintain-academic-integrity-in-the-chatgpt-era" target="_blank" rel="noopener noreferrer">https://www.aacu.org/liberaleducation/articles/how-do-we-maintain-academic-integrity-in-the-chatgpt-era</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Biola, H. &quot;Time Limits and the Performance of Adults in Timed Writing.&quot; 1982.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Browning, Andrew. &quot;Timed Tests and Their Effect on Student Performance.&quot; <em>Fresh Writing</em>, University of Notre Dame. <a className="underline underline-offset-4 hover:text-primary" href="https://freshwriting.nd.edu/essays/timed-tests-and-their-effect-on-student-performance/" target="_blank" rel="noopener noreferrer">https://freshwriting.nd.edu/essays/timed-tests-and-their-effect-on-student-performance/</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Caudery, Tim. &quot;The Validity of Timed Essay Tests in the Assessment of Writing Skills.&quot; <em>ELT Journal</em>, vol. 44, no. 2, Oxford University Press, 1990, pp. 122&ndash;131.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      CCCC (Conference on College Composition and Communication). &quot;Writing Assessment: A Position Statement.&quot; Revised April 2022. <a className="underline underline-offset-4 hover:text-primary" href="https://cccc.ncte.org/cccc/resources/positions/writingassessment" target="_blank" rel="noopener noreferrer">https://cccc.ncte.org/cccc/resources/positions/writingassessment</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Chang, Jiajin, et al. &quot;Anxiety Disorders and English Academic Writing Performance Among College Students.&quot; <em>Psychology Research and Behavior Management</em>, 2021.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      College Board. &quot;New Research: Majority of High School Students Use Generative AI for Schoolwork.&quot; 2025. <a className="underline underline-offset-4 hover:text-primary" href="https://newsroom.collegeboard.org/new-research-majority-high-school-students-use-generative-ai-schoolwork" target="_blank" rel="noopener noreferrer">https://newsroom.collegeboard.org/new-research-majority-high-school-students-use-generative-ai-schoolwork</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Crossley, Scott, et al. &quot;Plagiarism Detection Using Keystroke Logs.&quot; <em>Proceedings of the International Conference on Educational Data Mining</em>, 2024. <a className="underline underline-offset-4 hover:text-primary" href="https://educationaldatamining.org/edm2024/proceedings/2024.EDM-short-papers.47/index.html" target="_blank" rel="noopener noreferrer">https://educationaldatamining.org/edm2024/proceedings/2024.EDM-short-papers.47/index.html</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      CWPA and CCCC. &quot;Joint Statement in Response to the COVID-19 Pandemic.&quot; Council of Writing Program Administrators. <a className="underline underline-offset-4 hover:text-primary" href="https://wpacouncil.org/aws/CWPA/pt/sd/news_article/309074/_PARENT/layout_details/false" target="_blank" rel="noopener noreferrer">https://wpacouncil.org/aws/CWPA/pt/sd/news_article/309074/_PARENT/layout_details/false</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Dawson, Phillip, et al. &quot;Assessment Quality, Not Cheating Prevention, Should Drive AI-Era Reforms.&quot; <em>Assessment &amp; Evaluation in Higher Education</em>, 2024.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Deane, Paul. &quot;Remodeling Writers&apos; Composing Processes: Implications for Writing Assessment.&quot; <em>Assessing Writing</em>, vol. 49, 2021.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Digital Education Council. &quot;2024 Global AI Student Survey.&quot; 2024.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Elbow, Peter, and Pat Belanoff. &quot;Portfolios as a Substitute for Proficiency Examinations.&quot; <em>College Composition and Communication</em>, vol. 37, no. 3, 1986, pp. 336&ndash;339.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Flower, Linda, and John R. Hayes. &quot;A Cognitive Process Theory of Writing.&quot; <em>College Composition and Communication</em>, vol. 32, no. 4, 1981, pp. 365&ndash;387.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Florida Department of Education. &quot;2024&ndash;25 B.E.S.T. Writing Fact Sheet.&quot; <a className="underline underline-offset-4 hover:text-primary" href="https://www.fldoe.org/core/fileparse.php/20102/urlt/2425BESTWritingFactSheet.pdf" target="_blank" rel="noopener noreferrer">https://www.fldoe.org/core/fileparse.php/20102/urlt/2425BESTWritingFactSheet.pdf</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Graham, Steve, and Michael Hebert. &quot;Writing to Read: A Meta-Analysis of the Impact of Writing and Writing Instruction on Reading.&quot; <em>Harvard Educational Review</em>, vol. 81, no. 4, 2011, pp. 710&ndash;744.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      HEPI/Kortext. &quot;2025 Student Academic Experience Survey.&quot; Higher Education Policy Institute, 2025.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Hill, Kennedy T., and Allan Wigfield. &quot;Test Anxiety: A Major Educational Problem and What Can Be Done About It.&quot; <em>The Elementary School Journal</em>, vol. 85, no. 1, 1984, pp. 105&ndash;126.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Jiang, Yue, et al. &quot;Using Keystroke Behavior Patterns to Detect Nonauthentic Texts in Writing Assessments.&quot; <em>Journal of Educational Measurement</em>, vol. 61, no. 2, 2024.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Khuder, Bashar, and Nigel Harwood. &quot;L2 Writing in Test and Non-Test Situations.&quot; <em>Journal of Writing Research</em>, 2015.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Knoch, Ute, and Catherine Elder. &quot;Validity and Fairness of Timed Writing Assessment.&quot; <em>Language Assessment Quarterly</em>, 2010.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Liang, Weixin, et al. &quot;GPT Detectors Are Biased Against Non-Native English Writers.&quot; Stanford University, 2023.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Menary, Richard. &quot;Writing as Thinking.&quot; <em>Language Sciences</em>, vol. 29, no. 5, 2007, pp. 621&ndash;632.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Montolio, Daniel, and Pere A. Taberner. &quot;Gender Differences Under Test Pressure and Their Impact on Academic Performance.&quot; <em>Journal of Economic Behavior &amp; Organization</em>, 2021.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Onwuegbuzie, Anthony J., and Mark A. Seaman. &quot;The Effect of Time Constraints and Statistics Test Anxiety on Test Performance in a Statistics Course.&quot; <em>The Journal of Experimental Education</em>, vol. 63, no. 2, 1995, pp. 115&ndash;124.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Perelman, Les. As cited in &quot;Testing, Testing.&quot; <em>Salon</em>, May 17, 2005. <a className="underline underline-offset-4 hover:text-primary" href="https://www.salon.com/2005/05/17/sat_5/" target="_blank" rel="noopener noreferrer">https://www.salon.com/2005/05/17/sat_5/</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Perl, Sondra. &quot;The Composing Processes of Unskilled College Writers.&quot; <em>Research in the Teaching of English</em>, vol. 13, no. 4, 1979, pp. 317&ndash;336.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Powers, Donald E., and Mary E. Fowles. &quot;Effects of Applying Different Time Limits to a Proposed GRE Writing Test.&quot; ETS Research Report, 1996. <a className="underline underline-offset-4 hover:text-primary" href="https://www.ets.org/research/policy_research_reports/publications/report/1996/hxuq.html" target="_blank" rel="noopener noreferrer">https://www.ets.org/research/policy_research_reports/publications/report/1996/hxuq.html</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Quinn, David M. &quot;Experimental Evidence on Teachers&apos; Racial Bias in Student Evaluation: The Role of Grading Scales.&quot; <em>Educational Evaluation and Policy Analysis</em>, vol. 42, no. 3, 2020, pp. 375&ndash;392.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Quitadamo, Ian J., and Martha J. Kurtz. &quot;Learning to Improve: Using Writing to Increase Critical Thinking Performance in General Education Biology.&quot; <em>CBE Life Sciences Education</em>, vol. 6, no. 2, 2007, pp. 140&ndash;154.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Ramirez, Gerardo, and Sian L. Beilock. &quot;Writing About Testing Worries Boosts Exam Performance in the Classroom.&quot; <em>Science</em>, vol. 331, no. 6014, 2011, pp. 211&ndash;213.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      RAND Corporation. &quot;AI Use in Schools Is Quickly Increasing but Guidance Lags Behind.&quot; 2025. <a className="underline underline-offset-4 hover:text-primary" href="https://www.rand.org/pubs/research_reports/RRA4180-1.html" target="_blank" rel="noopener noreferrer">https://www.rand.org/pubs/research_reports/RRA4180-1.html</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Schirner, Sarah, et al. &quot;Intelligence and Response Speed in Timed Assessments.&quot; 2023. As cited in Browning, &quot;Timed Tests and Their Effect on Student Performance.&quot;
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Sommers, Nancy. &quot;Revision Strategies of Student Writers and Experienced Adult Writers.&quot; <em>College Composition and Communication</em>, vol. 31, no. 4, 1980, pp. 378&ndash;388.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      South Carolina Department of Education. &quot;Writing Component: SC READY.&quot; <a className="underline underline-offset-4 hover:text-primary" href="https://ed.sc.gov/tests/middle/sc-ready/writing-component/" target="_blank" rel="noopener noreferrer">https://ed.sc.gov/tests/middle/sc-ready/writing-component/</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Taylor &amp; Francis. &quot;How Vulnerable Are UK Universities to Cheating with New GenAI Tools?&quot; <em>Assessment &amp; Evaluation in Higher Education</em>, 2025.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      University of Reading. &quot;94% of AI-Written Exam Submissions Went Undetected.&quot; 2023.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      CAST. &quot;Universal Design for Learning Guidelines, Version 3.0.&quot; 2024. <a className="underline underline-offset-4 hover:text-primary" href="https://udlguidelines.cast.org/" target="_blank" rel="noopener noreferrer">https://udlguidelines.cast.org/</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Weber-Wulff, Debora, et al. &quot;Testing of Detection Tools for AI-Generated Text.&quot; <em>International Journal for Educational Integrity</em>, 2023.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      White, Edward M. &quot;An Apologia for the Timed Impromptu Essay Test.&quot; <em>College Composition and Communication</em>, vol. 46, no. 1, 1995, pp. 30&ndash;45.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      WPA (Council of Writing Program Administrators). &quot;WPA Outcomes Statement for First-Year Composition, Version 3.0.&quot; Approved July 17, 2014. <a className="underline underline-offset-4 hover:text-primary" href="https://wpacouncil.org/aws/CWPA/pt/sd/news_article/243055/_PARENT/layout_details/false" target="_blank" rel="noopener noreferrer">https://wpacouncil.org/aws/CWPA/pt/sd/news_article/243055/_PARENT/layout_details/false</a>
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Wu, Xueyan, and Rosemary Erlam. &quot;The Effect of Timing on the Quantity and Quality of Test-Takers&apos; Writing.&quot; <em>Papers in Language Testing and Assessment</em>, 2016.
                    </li>
                    <li className="text-xs text-muted-foreground/80 leading-5">
                      Yu, Jing, Iuliana Rosca, and Heidi L. Andrade. &quot;Predictive Validity Evidence for a No-Stakes, Untimed, Machine-Scored Diagnostic Writing Assessment.&quot; <em>Assessing Writing</em>, vol. 63, 2025.
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
