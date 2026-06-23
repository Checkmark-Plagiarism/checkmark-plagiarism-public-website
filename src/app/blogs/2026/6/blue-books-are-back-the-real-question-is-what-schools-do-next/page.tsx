import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "Blue Books Are Back. The Real Question Is What Schools Do Next.",
  description: "Princeton ended a 133-year-old honor code and blue book sales are surging as schools revert to handwritten, proctored, and oral exams to fight AI cheating. Why reverting the format is a tourniquet, not a treatment — and what a layered approach looks like.",
  keywords: [],
  openGraph: {
    images: ["/images/blogs/blue-books-are-back-the-real-question-is-what-schools-do-next/pexels-7972487.jpg"],
  },
};

export const meta = {
  title: "Blue Books Are Back. The Real Question Is What Schools Do Next.",
  description: "Princeton ended a 133-year-old honor code and blue book sales are surging as schools revert to handwritten, proctored, and oral exams to fight AI cheating. Why reverting the format is a tourniquet, not a treatment — and what a layered approach looks like.",
  "opengraph-image": "/images/blogs/blue-books-are-back-the-real-question-is-what-schools-do-next/pexels-7972487.jpg",
  date: "06-23-2026",
  readTime: "~7 min read",
  category: "Industry",
  categories: ["Industry", "News"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>When Princeton&#39;s faculty voted in May 2026 to require proctors at every in-person exam, they were not just changing a scheduling rule. They were ending a 133-year-old tradition. Since 1893, Princeton students had taken unproctored exams under an honor code that a student petition originally created to <em>get rid of</em> proctoring. The faculty reversed that arrangement with a single dissenting vote, citing AI and personal devices as the catalyst (<a href="https://www.insidehighered.com/news/faculty/learning-assessment/2026/05/15/princeton-introduces-proctoring-changing-honor-code">Inside Higher Ed</a>; <a href="https://www.dailyprincetonian.com/article/2026/05/princeton-news-adpol-proctoring-in-person-examinations-passed-faculty-133-years-precedent">The Daily Princetonian</a>).</p>
<p>Princeton is the headline, but it is not an outlier. Across higher education, instructors are quietly rolling assessment back to a pre-digital state: handwritten blue books, in-class essays, oral exams. The question worth asking is not whether this is happening — it clearly is — but whether reverting the <em>format</em> of assessment actually solves the <em>problem</em> it is reacting to. Our read, as a company that builds originality and AI-detection tools: the reversion is a reasonable emergency measure, but it is a blunt instrument, and the schools that lean on it alone will trade one set of failures for another.</p>
<h2>The blue book comeback is real, and the numbers show it</h2>
<p>The clearest evidence is commercial. According to <em>Wall Street Journal</em> reporting summarized by <a href="https://www.dailycardinal.com/article/2025/11/blue-books-are-back-the-revival-of-pen-and-paper-exams">The Daily Cardinal</a>, blue book sales at the University of Florida rose roughly 50% in the 2024–2025 academic year, and at UC Berkeley they jumped about 80%. At the University of Wisconsin–Madison, the 12-page books sold out in early September with no restock date, and smaller books faced three-week backorders. When a paper product that had been drifting toward obsolescence suddenly sells out, something structural is going on.</p>
<p>That something is a collapse in faculty confidence. A survey of 337 higher-education leaders — presidents, provosts, chancellors, and deans — run by the American Association of Colleges &amp; Universities and Elon University&#39;s Imagining the Digital Future Center between November 4 and December 7, 2024, found that 21% believed cheating on their campus had increased &quot;a lot&quot; and another 38% said it had increased &quot;a little&quot; since generative AI became widely available (<a href="https://www.govtech.com/education/higher-ed/survey-higher-ed-leaders-doubt-student-preparedness-for-ai">GovTech</a>). More telling was the second finding: more than half of those leaders said their faculty were &quot;not at all effective&quot; or &quot;not very effective&quot; at recognizing AI-generated work. That is the real driver. When you cannot trust your own eyes on a take-home essay, the in-class blue book starts to look like the only ground you can stand on.</p>
<p>Individual instructors describe exactly that reasoning. At Georgia State, associate professor Jason Coupet switched back to paper blue books for 2024–2025 after watching generative AI seep into students&#39; online work (<a href="https://www.kqed.org/mindshift/64992/taking-exams-in-blue-books-its-back-to-help-curb-ai-use-and-rampant-cheating">KQED</a>). St. Michael&#39;s College historian Alexandra Garrett never left them: &quot;I&#39;ve never not done blue books for exams and I have no incentive to change it.&quot; There is even a learning-science argument in the mix — Vanderbilt&#39;s Sophia Vinci-Booher researches the cognitive benefits of handwriting, noting that when &quot;note-taking and testing modes align, a student is more likely to perform better.&quot; The pen-and-paper revival is not pure nostalgia; some of it is defensible pedagogy.</p>
<h2>Oral exams and proctoring are the same instinct in different clothes</h2>
<p>The blue book is the low-tech end of a broader move back toward <em>witnessed</em> work. At the high-stakes end sits the oral exam. The <em>Washington Post</em> reported in December 2025 on professors reviving oral examinations specifically because a student can submit a flawless written assignment and then fail to explain it out loud (<a href="https://www.washingtonpost.com/education/2025/12/12/ai-artificial-intelligence-college-oral-exam/">Washington Post</a>). Education researchers have been making the case for a while that the spoken defense is one of the few formats a language model cannot sit in for (<a href="https://theconversation.com/why-universities-should-return-to-oral-exams-in-the-ai-and-chatgpt-era-203429">The Conversation</a>), and assessment specialists have floated &quot;sampled vivas&quot; — short oral checks on a random subset of students — as a scalable deterrent (<a href="https://www.timeshighereducation.com/opinion/sampled-vivas-are-pivotal-combating-ai-cheating">Times Higher Education</a>).</p>
<p>There is a genuine insight buried in the oral-exam enthusiasm, and it is worth stating plainly because it applies to detection too: oral exams do not merely <em>catch</em> AI use after the fact, they change how students study in the first place. If you know you will have to talk through your reasoning, you prepare to own the ideas rather than to assemble them. That incentive shift is the part of this trend most worth protecting.</p>
<h2>Why reversion alone is the wrong lesson to take</h2>
<p>Here is where we part company with the &quot;just go back to paper&quot; framing. Reverting the format addresses the symptom — unverifiable take-home work — without addressing the thing schools actually exist to do, which is teach students to write, research, and think over time. Three problems make pure reversion a poor long-term strategy.</p>
<p><strong>It penalizes the wrong students.</strong> Timed, single-draft handwriting is not a neutral test of knowledge; it is also a test of handwriting speed, working under pressure, and writing in your first language. The UW–Madison instructors quoted by The Daily Cardinal saw this immediately: many first-year students are &quot;taking their first semester of college in another country, in another language,&quot; which is why some instructors permit dictionaries during exams. Students with documented accommodations — extended time, assistive technology, processing differences — are disadvantaged by exactly the constraints that make a blue book &quot;AI-proof.&quot; An integrity measure that quietly lowers scores for multilingual and disabled students has simply swapped an academic-integrity problem for an equity problem.</p>
<p><strong>It throws out the skill it claims to protect.</strong> Real writing is iterative: you draft, you sit with an idea, you revise. UW–Madison&#39;s Clinton Castro responded to AI not by banning the keyboard but by building multi-step assessments with peer review and rewrites, precisely to preserve &quot;something really valuable about sitting with an idea, writing in stages, doing drafts.&quot; A semester of in-class, one-shot essays trains students to produce rushed first drafts under a clock — which is neither how good writing happens nor what employers say they want from graduates. Surveys of employers consistently rank communication and the ability to develop and explain ideas above raw speed.</p>
<p><strong>It does not scale, and it does not cover everything.</strong> Oral exams are hard to run fairly in a 300-person lecture, grading consistency suffers, and the lack of anonymity invites bias. Proctored in-class work says nothing about the take-home lab report, the semester project, the thesis. You cannot put every meaningful assignment in a blue book without gutting the curriculum.</p>
<h2>What a layered approach looks like — and where detection fits</h2>
<p>The honest position, even from a detection company, is that no single tool — not a blue book, not an oral exam, and not an AI detector — is a verdict on its own. What works is layering, where each method covers another&#39;s blind spot.</p>
<p>Start with <strong>assessment design</strong>, because it is the highest-leverage and least-discussed lever. Assignments that ask for personal connection to course material, that build on in-class discussion, that require students to critique an AI-generated draft rather than produce one — these are harder to outsource and more worth doing. This is the Castro model: redesign the task so that doing it honestly is also the best way to learn.</p>
<p>Layer in <strong>process evidence</strong>. Version history in Google Docs, draft submissions, brief in-person check-ins, the occasional sampled viva — these create a record of the work developing over time. A student who can walk you through their reasoning has demonstrated something a finished document never can, and the threat of being asked changes behavior up front.</p>
<p>Then use <strong>detection as a signal, not a sentence.</strong> This is where our own product lives, so we will be precise about what it is for. An AI or plagiarism detector is an early-warning flag that tells an instructor where to look more closely — not a tribunal that decides guilt. The same AAC&amp;U/Elon survey that explains the blue book panic also explains why: faculty do not trust their unaided judgment on AI text, and they are right not to. A good detector restores some of that signal. But it is a starting point for a conversation with a student, paired with process evidence and the instructor&#39;s knowledge of that student&#39;s prior work — never a number that ends the conversation. Detection tools have false positives, they can be unreliable on writing by multilingual authors, and treating a probability score as proof recreates the same equity failure as the blue book. Used as one input among several, detection lets schools keep assigning the take-home, iterative, real-world writing that reverting to paper forces them to abandon.</p>
<h2>The takeaway</h2>
<p>The blue book revival and the Princeton vote are rational reactions to a real loss of trust. We do not think instructors who reach for them are wrong to be worried — the survey data, the sold-out bookstores, and Princeton&#39;s own senior survey (where nearly 30% of seniors admitted to cheating and 44.6% knew of violations they never reported) all describe a genuine crisis. But reverting the <em>format</em> of assessment is a tourniquet, not a treatment. The schools that come out of this era strongest will not be the ones that retreat fastest to 1893. They will be the ones that redesign assessment so honest work is the path of least resistance, gather evidence of the writing process, and use detection the way a good clinician uses a lab result — as a signal that tells you where to look, not a diagnosis that ends the inquiry.</p>
<h2>Sources</h2>
<ul>
<li><a href="https://www.insidehighered.com/news/faculty/learning-assessment/2026/05/15/princeton-introduces-proctoring-changing-honor-code">Princeton Introduces Proctoring, Changing Honor Code — Inside Higher Ed</a></li>
<li><a href="https://www.dailyprincetonian.com/article/2026/05/princeton-news-adpol-proctoring-in-person-examinations-passed-faculty-133-years-precedent">Princeton faculty mandate proctoring for in-person exams — The Daily Princetonian</a></li>
<li><a href="https://www.dailycardinal.com/article/2025/11/blue-books-are-back-the-revival-of-pen-and-paper-exams">Blue books are back: The revival of pen and paper exams — The Daily Cardinal</a></li>
<li><a href="https://www.kqed.org/mindshift/64992/taking-exams-in-blue-books-its-back-to-help-curb-ai-use-and-rampant-cheating">Taking Exams in Blue Books? They&#39;re Back — KQED MindShift</a></li>
<li><a href="https://www.govtech.com/education/higher-ed/survey-higher-ed-leaders-doubt-student-preparedness-for-ai">Survey: Higher Ed Leaders Doubt Student Preparedness for AI — GovTech (AAC&amp;U / Elon University)</a></li>
<li><a href="https://www.washingtonpost.com/education/2025/12/12/ai-artificial-intelligence-college-oral-exam/">College professors use oral exams to combat AI — The Washington Post</a></li>
<li><a href="https://theconversation.com/why-universities-should-return-to-oral-exams-in-the-ai-and-chatgpt-era-203429">Why universities should return to oral exams in the AI and ChatGPT era — The Conversation</a></li>
<li><a href="https://www.timeshighereducation.com/opinion/sampled-vivas-are-pivotal-combating-ai-cheating">Sampled vivas are pivotal in combating AI cheating — Times Higher Education</a></li>
<li><a href="https://www.axios.com/2026/03/14/ai-blue-books-colleges-jobs">AI cheating shakes college writing and job prospects, so blue books are back — Axios</a></li>
</ul>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="blogs"
      currentSlug="2026/6/blue-books-are-back-the-real-question-is-what-schools-do-next"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
