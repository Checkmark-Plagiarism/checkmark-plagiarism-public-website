import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCategoryVariant } from "@/lib/blog-category-utils";

export const metadata: Metadata = {
  title: "The Reason Students Use AI to Cheat Has Nothing to Do With AI",
  description:
    "Research shows students cheat on assignments they see as meaningless. The most effective anti-cheating strategy costs nothing: explain why the work matters.",
  keywords: [
    "AI cheating",
    "academic integrity",
    "student motivation",
    "transparent teaching",
    "TILT framework",
    "busywork",
    "self-determination theory",
    "assignment design",
    "education",
    "AI in schools",
  ],
  openGraph: {
    images: [
      "https://public.checkmarkplagiarism.com/images/blog/the-reason-students-use-ai-to-cheat-has-nothing-to-do-with-ai/hero.jpg",
    ],
  },
};

export const meta = {
  title: "The Reason Students Use AI to Cheat Has Nothing to Do With AI",
  description:
    "Research shows students cheat on assignments they see as meaningless. The most effective anti-cheating strategy costs nothing: explain why the work matters.",
  "opengraph-image":
    "/images/blog/the-reason-students-use-ai-to-cheat-has-nothing-to-do-with-ai/hero.jpg",
  date: "03-04-2026",
  readTime: "~15 min read",
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
                  The most effective strategy for reducing AI-driven academic dishonesty is not a detection tool, a lockdown browser, or a ban. It is a sentence. Specifically, it is the sentence a teacher says before handing out an assignment: &quot;Here is why we are doing this.&quot;
                </p>
                <p className="text-muted-foreground">
                  That may sound reductive, but it is not. Research in motivation science, transparent pedagogy, and academic integrity all converge on a finding that should reshape how schools think about the AI cheating crisis: students are far more likely to cheat on assignments they perceive as meaningless. And right now, a staggering number of students think their assignments are meaningless.
                </p>
                <p className="text-muted-foreground">
                  Research from Challenge Success, the Stanford-affiliated education nonprofit co-founded by Denise Pope, found that roughly half of surveyed middle and high school students believe most of their homework is busywork. In Pope&apos;s testimony to the California State Assembly, she cited data from approximately 15,000 high school students showing 52% felt most assignments were little more than busywork. A separate analysis of over 300,000 students across 300+ schools reported similar numbers. Meanwhile, an APA summary of Pope and Galloway&apos;s research found only 20 to 30 percent of students described their homework as useful or meaningful.
                </p>
                <p className="text-muted-foreground">
                  Now add generative AI into the mix. When a student believes an assignment exists to fill time rather than build skills, using ChatGPT to complete it does not feel like cheating&mdash;it feels like efficiency. AI did not create the motivation problem; it simply revealed that it was already there.
                </p>

                {/* When students see busywork */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">When students see busywork, cheating becomes rational</h3>
                <p className="text-muted-foreground">
                  The connection between perceived assignment value and academic dishonesty is not speculative. It is documented across decades of research.
                </p>
                <p className="text-muted-foreground">
                  James Lang, in his influential <em>Cheating Lessons: Learning from Academic Dishonesty</em> (Harvard University Press, 2013), synthesized the empirical literature and identified the course design features most correlated with cheating: emphasis on performance rather than learning, high-stakes single assessments, arbitrary grading criteria, and extrinsic rather than intrinsic motivation. His central finding is that students do not cheat because they are lazy or morally deficient. Students cheat because their learning environments give them ample incentive to try.
                </p>
                <blockquote className="border-l-4 border-border pl-4 py-1 rounded-md bg-muted/40 italic text-muted-foreground">
                  <p>&quot;The features of a course that do tend to induce cheating were also ones that tend to reduce learning.&quot;</p>
                </blockquote>
                <p className="text-muted-foreground">
                  This maps directly onto what criminologists call neutralization theory. Sykes and Matza (1957) identified a set of cognitive techniques people use to justify rule-breaking, one of which is &quot;condemning the condemners,&quot; or blaming authorities for creating conditions that make the rules feel illegitimate. When students perceive an assignment as pointless, they deploy this technique effortlessly: the teacher assigned busywork, so completing it with AI is not dishonesty but a reasonable response to an unreasonable demand.
                </p>
                <p className="text-muted-foreground">
                  The University of Rochester&apos;s academic integrity guidance states this plainly: &quot;Students cheat more frequently when they don&apos;t find assignments to be meaningful. If they fail to see the purpose in an assignment or see it as pointless busywork, they are more likely to resort to dishonesty.&quot; The data from the International Center for Academic Integrity reinforces the scale of the problem. Across surveys of over 71,000 undergraduates, 68% admitted to cheating on tests or written assignments at least once. Among high school students, that number reaches 95% for some form of academic dishonesty. These are not bad students. These are students responding to incentive structures.
                </p>
                <p className="font-semibold">
                  <strong>The implication for the AI era is straightforward. If you want students to stop outsourcing their thinking to ChatGPT, give them a reason to do the thinking themselves.</strong>
                </p>

                {/* Two transparent assignments */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">Two transparent assignments can change an entire course</h3>
                <p className="text-muted-foreground">
                  There is a way out and forward, and it starts with transparency. Mary-Ann Winkelmes, who developed the Transparency in Learning and Teaching (TILT) framework beginning in 1999 at Harvard&apos;s Bok Center, ran one of the most compelling intervention studies in recent higher education research. In 2014&ndash;2015, working with the AAC&amp;U and funded by TG Philanthropy, Winkelmes and her team conducted a controlled study across seven Minority Serving Institutions involving 1,180 students and 35 faculty members. Each instructor taught a control group and an intervention group of the same course in the same term.
                </p>
                <p className="text-muted-foreground">
                  The intervention was remarkably simple. Faculty made just two take-home assignments per course more transparent by explicitly communicating three things: the purpose of the assignment (what skills it develops and why those matter), the task itself (what exactly students should do), and the criteria for success (what good work looks like). That is it. No curriculum overhaul. No new technology. Just clarity about why the work matters.
                </p>
                <p className="text-muted-foreground">
                  The results were statistically significant across the board. Students who received transparent assignments reported meaningful gains in academic confidence, sense of belonging, and mastery of employer-valued skills. For first-generation, low-income, and underrepresented students, the effects were even larger, reaching a medium-to-large magnitude of effect. A simultaneous study at UNLV tracked 1,143 students and found that 90.2% of undergraduates in transparent courses returned the following year, compared to the university&apos;s average first-year retention rate of 74.1%. That is a 16-percentage-point improvement from explaining the purpose of assignments.
                </p>
                <p className="text-muted-foreground">
                  Faculty reported practical benefits too: assignments were turned in on time at higher rates, students participated more meaningfully in discussion, and there were fewer grade disputes and fewer logistical questions. When students understand why they are doing something, they stop arguing about whether they should be doing it.
                </p>
                <p className="text-muted-foreground">
                  The psychological mechanism underneath these findings is well-established. Self-determination theory, developed by Edward Deci and Richard Ryan across hundreds of studies spanning decades, identifies three innate psychological needs that drive human motivation: autonomy (feeling ownership over one&apos;s actions), competence (feeling capable of growth and mastery), and relatedness (feeling connected to a community). When these needs are met, students are intrinsically motivated. When they are thwarted, students disengage.
                </p>
                <p className="text-muted-foreground">
                  Explaining the purpose of an assignment directly supports autonomy. A 2002 study by Reeve, Jang, Hardr&eacute;, and Omura, published in <em>Motivation and Emotion</em>, tested this explicitly. They found that providing a rationale for tasks&mdash;even uninteresting ones&mdash;in an autonomy-supportive way increased participants&apos; identification with the task&apos;s personal value, which in turn predicted their subsequent effort. The rationale did not make the task more interesting. It made the task feel personally meaningful. That is the difference between a student who writes their own essay and one who pastes in a ChatGPT response at 2 AM.
                </p>

                {/* The fairness gap */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">The fairness gap that no AI policy can survive</h3>
                <p className="text-muted-foreground">
                  There is a second, more volatile dynamic at play. Across the country, students are watching their teachers use AI for lesson planning, rubric creation, feedback generation, and grading&mdash;while being told that they themselves cannot use AI for their schoolwork. They are calling it exactly what it looks like: hypocrisy.
                </p>
                <p className="text-muted-foreground">
                  Lucy Adjemian, a student at Oyster River High School in New Hampshire, wrote an op-ed in the <em>Union Leader</em> in 2025 describing being falsely accused of using AI on major assignments four times, while watching teachers at the same school openly use AI to write rubrics, give feedback, and grade student work.
                </p>
                <blockquote className="border-l-4 border-border pl-4 py-1 rounded-md bg-muted/40 italic text-muted-foreground">
                  <p>&quot;If we&apos;re going to hold students accountable for AI use, we must do the same for educators. Until then, the system isn&apos;t just unfair. It&apos;s artificial.&quot;</p>
                </blockquote>
                <p className="text-muted-foreground">
                  She is not an outlier. Education Week reported in February 2025 that students directly confronted English teacher Heather Van Otterloo when they learned she used AI to help grade their papers. The teacher described the students&apos; reaction: &quot;I feel like they had a bit of a &apos;you&apos;re kind of lazy&apos; feeling.&quot; The <em>New York Times</em> separately reported teenagers expressing the view that it was unethical for teachers to use AI to assess their work when students were barred from consulting it during the writing process.
                </p>
                <p className="text-muted-foreground">
                  The data on this gap is stark. The RAND Corporation&apos;s 2025 survey found 54% of students and 53% of teachers used AI for school that year, increases of over 15 percentage points each. The Center for Democracy and Technology reported 85% of K&ndash;12 teachers have used AI. In the UK, the HEPI/Kortext survey found 92% of undergraduates now use AI tools. The usage is nearly symmetrical. The rules are not.
                </p>
                <p className="text-muted-foreground">
                  This matters because of a principle that decades of social psychology research has validated. Tom Tyler&apos;s procedural justice framework, developed through research at Yale Law School, demonstrates that people comply with rules primarily when they perceive the process as fair&mdash;not when the punishments are severe. Fair treatment is a stronger predictor of perceived legitimacy than fair outcomes. A 2022 study of over 1,000 Polish university students, published in <em>Higher Education</em>, confirmed this in academic settings: students who experienced procedural justice showed higher trust in academic authorities, greater engagement, and lower burnout. Students who did not experienced the opposite.
                </p>
                <p className="text-muted-foreground">
                  When students perceive an AI policy as a double standard, the policy loses legitimacy regardless of how clearly it is written. And 50% of students now worry about being falsely accused of using AI to cheat, according to RAND&apos;s 2025 data. That is not a compliance environment. That is an adversarial one.
                </p>

                {/* A chef can use a food processor */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">A chef can use a food processor because they already know how to use a knife</h3>
                <p className="text-muted-foreground">
                  The double standard perception is not actually a double standard, but schools are doing a terrible job explaining why.
                </p>
                <p className="text-muted-foreground">
                  When a teacher uses AI to generate a quiz or draft lesson plan feedback, they are applying AI to a domain they have already mastered. They know the material. They have the pedagogical judgment to evaluate whether the AI output is accurate and useful. They are using a tool to accelerate work they could do manually&mdash;the same way an architect uses CAD software or a chef uses a food processor.
                </p>
                <p className="text-muted-foreground">
                  When a student uses AI to write an essay on a topic they have not yet learned, they are skipping the learning entirely. They are not accelerating existing knowledge. They are substituting for knowledge they do not yet have. This is the difference between a licensed engineer using a calculator and a third-grader using one to avoid learning multiplication.
                </p>
                <p className="text-muted-foreground">
                  This distinction is intuitive once articulated, and the historical parallel is exact. In 1975, a survey published in <em>Mathematics Teacher</em> found that 72% of teachers, mathematicians, and non-specialists opposed giving seventh graders calculators. One professor asked what students would do &quot;when the battery runs out.&quot; Within a decade, calculators went from controversial to required on exams. As Michael Crow, president of Arizona State University, wrote in <em>Scientific American</em> in 2024: &quot;The introduction of calculators into classrooms didn&apos;t set in motion the demise of mathematics education; instead, it significantly broadened its scope while inspiring educators and academics to rethink the educational limits of mathematics.&quot;
                </p>
                <p className="text-muted-foreground">
                  The calculator debate resolved itself because educators eventually developed a clear framework: students learn the foundational skills first, then graduate to using the tool. Nobody argues that engineers should not use calculators. Nobody argues that first-graders should. The question was never whether the tool is useful. It was when the student is ready for it.
                </p>
                <p className="text-muted-foreground">
                  Carol Dweck&apos;s growth mindset research provides the language for this framing. Her work demonstrates that word choices and assignment frames directly affect student motivation and reception. Telling a student &quot;AI is banned because you might cheat&quot; is a fixed-mindset frame. It positions the restriction as a judgment of the student&apos;s character. Telling a student &quot;We are building your analytical thinking skills first, so that when you do use AI, you will be able to evaluate whether its output is any good&quot; is a growth-mindset frame. It positions the restriction as a stage in a developmental trajectory. Same policy. Radically different reception.
                </p>
                <p className="text-muted-foreground">
                  The research on scaffolding supports this directly. Cognitive scientist Tina Grotzer at the Harvard Graduate School of Education describes the expert-novice gap: &quot;Experts pay attention to a very different set of patterns than novices often do. Novices get caught up in the surface features and can&apos;t necessarily see the deep principles.&quot; Scaffolding, as Wood, Bruner, and Ross defined it in 1976, is a temporary adaptive structure designed to move students toward independence. AI restrictions framed as scaffolding feel purposeful. AI restrictions framed as prohibition feel arbitrary.
                </p>

                {/* What this looks like when it works */}
                <h3 className="pt-4 text-2xl font-semibold tracking-tight">What this looks like when it works</h3>
                <p className="text-muted-foreground">
                  The schools and districts getting this right share a common pattern. They are not banning AI, and they are not uncritically embracing it. They are doing something harder: explaining themselves.
                </p>
                <p className="text-muted-foreground">
                  Canyons School District in Utah developed an AI policy that asks students a single clarifying question: &quot;Is how I am using AI helping support my learning, or is it doing the learning for me?&quot; That question only works if the student understands what the learning is supposed to be. Gwinnett County Public Schools in Georgia, serving roughly 200,000 students, built their AI framework around a skills architecture that specifies what graduates need to know: data modeling, computational thinking, design thinking, logical reasoning. AI policy is a downstream consequence of educational purpose, not a freestanding rule.
                </p>
                <p className="text-muted-foreground">
                  These districts have something in common with the TILT research. They lead with purpose. They explain the why before enforcing the how. And the compliance follows&mdash;not because students are afraid of being caught, but because the rules make sense.
                </p>
                <p className="text-muted-foreground">
                  In my previous piece on this blog, I wrote about the retreat to timed, in-class essays as an AI countermeasure and why that trade sacrifices the cognitive benefits that made long-form writing valuable in the first place. Writing is not just a way to demonstrate thinking. It is a mechanism for developing it. Robert Bjork&apos;s research on desirable difficulties, Richard Menary&apos;s work on writing as cognitive extension, Quitadamo and Kurtz&apos;s finding that writing-intensive coursework significantly improved critical thinking: all of this research points to the same conclusion. The assignments worth protecting are the ones that require productive struggle. Productive struggle can only happen when students understand why the struggle is productive.
                </p>
                <p className="text-muted-foreground">
                  The transparency gap is the connective thread. When a student does not understand why they are writing a take-home essay, they see busywork, and AI becomes the obvious shortcut. When a teacher does not explain why students cannot use AI while the teacher can, students see hypocrisy, and the policy loses legitimacy. When a school does not frame AI restrictions as skill-building, students see punishment, and compliance collapses.
                </p>
                <p className="text-muted-foreground">
                  The solution to all three problems is the same. It costs nothing. It requires no new technology, and the research says it takes as little as two assignments per course to produce statistically significant results.
                </p>
                <p className="font-semibold">
                  <strong>Tell them the &quot;why.&quot;</strong>
                </p>

                <p className="mt-8 italic text-muted-foreground">Written by The Checkmark Plagiarism Team.</p>

                {/* Works Cited */}
                <div className="mt-12 pt-8 border-t border-border">
                  <h4 className="text-sm font-semibold tracking-tight text-muted-foreground mb-4">Works Cited</h4>
                  <ol className="list-decimal pl-5 space-y-1.5 text-xs text-muted-foreground/80 leading-5">
                    <li>
                      Adjemian, Lucy. &quot;AI Has Exposed a Double Standard in Education.&quot; <em>Union Leader</em>, 2025. <a className="underline underline-offset-2 hover:text-primary" href="https://www.unionleader.com/opinion/op-eds/lucy-adjemian-ai-has-exposed-a-double-standard-in-education/article_68fbd7f7-2f2a-4e24-8a60-898d51f2acdd.html" target="_blank" rel="noopener noreferrer">Link</a>
                    </li>
                    <li>
                      Bjork, Robert A. &quot;Memory and Metamemory Considerations in the Training of Human Beings.&quot; <em>Metacognition: Knowing About Knowing</em>, edited by Janet Metcalfe and Arthur P. Shimamura, MIT Press, 1994, pp. 185&ndash;205.
                    </li>
                    <li>
                      Challenge Success. &quot;Homework Guide.&quot; Stanford University Graduate School of Education. <a className="underline underline-offset-2 hover:text-primary" href="https://challengesuccess.org/resources/homework-guide/" target="_blank" rel="noopener noreferrer">Link</a>
                    </li>
                    <li>
                      Crow, Michael. &quot;AI Can Transform the Classroom Just Like the Calculator.&quot; <em>Scientific American</em>, 2024. <a className="underline underline-offset-2 hover:text-primary" href="https://www.scientificamerican.com/article/ai-can-transform-the-classroom-just-like-the-calculator/" target="_blank" rel="noopener noreferrer">Link</a>
                    </li>
                    <li>
                      Deci, Edward L., and Richard M. Ryan. &quot;Self-Determination Theory.&quot; <em>Handbook of Theories of Social Psychology</em>, vol. 1, SAGE Publications, 2012, pp. 416&ndash;437.
                    </li>
                    <li>
                      Dweck, Carol S. <em>Mindset: The New Psychology of Success</em>. Random House, 2006.
                    </li>
                    <li>
                      Grotzer, Tina. &quot;The Novice to Expert Shift.&quot; Harvard Graduate School of Education, Usable Knowledge, 2019. <a className="underline underline-offset-2 hover:text-primary" href="https://www.gse.harvard.edu/ideas/usable-knowledge/19/12/novice-expert-shift" target="_blank" rel="noopener noreferrer">Link</a>
                    </li>
                    <li>
                      International Center for Academic Integrity. &quot;Statistics.&quot; <a className="underline underline-offset-2 hover:text-primary" href="https://academicintegrity.org/resources/facts-and-statistics" target="_blank" rel="noopener noreferrer">Link</a>
                    </li>
                    <li>
                      Lang, James M. <em>Cheating Lessons: Learning from Academic Dishonesty</em>. Harvard University Press, 2013.
                    </li>
                    <li>
                      Menary, Richard. &quot;Writing as Thinking.&quot; <em>Language Sciences</em>, vol. 29, no. 5, 2007, pp. 621&ndash;632.
                    </li>
                    <li>
                      Niemiec, Christopher P., and Richard M. Ryan. &quot;Autonomy, Competence, and Relatedness in the Classroom: Applying Self-Determination Theory to Educational Practice.&quot; <em>Theory and Research in Education</em>, vol. 7, no. 2, 2009, pp. 133&ndash;144.
                    </li>
                    <li>
                      Pope, Denise, and Maureen Galloway. &quot;Nonacademic Effects of Homework in Privileged, High-Performing High Schools.&quot; <em>The Journal of Experimental Education</em>, vol. 81, no. 4, 2013, pp. 490&ndash;510.
                    </li>
                    <li>
                      Quitadamo, Ian J., and Martha J. Kurtz. &quot;Learning to Improve: Using Writing to Increase Critical Thinking Performance in General Education Biology.&quot; <em>CBE Life Sciences Education</em>, vol. 6, no. 2, 2007, pp. 140&ndash;154.
                    </li>
                    <li>
                      RAND Corporation. &quot;AI Use in Schools Is Quickly Increasing but Guidance Lags Behind.&quot; 2025. <a className="underline underline-offset-2 hover:text-primary" href="https://www.rand.org/pubs/research_reports/RRA4180-1.html" target="_blank" rel="noopener noreferrer">Link</a>
                    </li>
                    <li>
                      Reeve, Johnmarshall, Hyungshim Jang, Pat Hardr&eacute;, and Mimi Omura. &quot;Providing a Rationale in an Autonomy-Supportive Way as a Strategy to Motivate Others During an Uninteresting Activity.&quot; <em>Motivation and Emotion</em>, vol. 26, no. 3, 2002, pp. 183&ndash;207.
                    </li>
                    <li>
                      Sykes, Gresham M., and David Matza. &quot;Techniques of Neutralization: A Theory of Delinquency.&quot; <em>American Sociological Review</em>, vol. 22, no. 6, 1957, pp. 664&ndash;670.
                    </li>
                    <li>
                      Tyler, Tom R. <em>Why People Obey the Law</em>. Princeton University Press, 2006.
                    </li>
                    <li>
                      University of Rochester. &quot;Prevention: Academic Honesty.&quot; <a className="underline underline-offset-2 hover:text-primary" href="https://www.rochester.edu/college/honesty/instructors/prevention.html" target="_blank" rel="noopener noreferrer">Link</a>
                    </li>
                    <li>
                      Van Otterloo, Heather. As quoted in &quot;Is It Ethical to Use AI to Grade?&quot; <em>Education Week</em>, February 2025. <a className="underline underline-offset-2 hover:text-primary" href="https://www.edweek.org/technology/is-it-ethical-to-use-ai-to-grade/2025/02" target="_blank" rel="noopener noreferrer">Link</a>
                    </li>
                    <li>
                      Winkelmes, Mary-Ann, et al. &quot;A Teaching Intervention that Increases Underserved College Students&apos; Success.&quot; <em>Peer Review</em>, vol. 18, no. 1/2, Association of American Colleges and Universities, 2016.
                    </li>
                    <li>
                      Winkelmes, Mary-Ann. &quot;Transparency in Learning and Teaching (TILT).&quot; TILT Higher Ed. <a className="underline underline-offset-2 hover:text-primary" href="https://tilthighered.com/abouttilt" target="_blank" rel="noopener noreferrer">Link</a>
                    </li>
                    <li>
                      Wojcieszak, Aleksandra, et al. &quot;(In)justice in Academia: Procedural Fairness, Students&apos; Academic Identification, and Perceived Legitimacy of University Authorities.&quot; <em>Higher Education</em>, 2022. <a className="underline underline-offset-2 hover:text-primary" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9360702/" target="_blank" rel="noopener noreferrer">Link</a>
                    </li>
                    <li>
                      Wood, David, Jerome S. Bruner, and Gail Ross. &quot;The Role of Tutoring in Problem Solving.&quot; <em>Journal of Child Psychology and Psychiatry</em>, vol. 17, no. 2, 1976, pp. 89&ndash;100.
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
