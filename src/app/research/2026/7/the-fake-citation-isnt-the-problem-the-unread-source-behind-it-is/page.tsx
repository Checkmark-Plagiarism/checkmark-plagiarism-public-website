import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "The Fake Citation Isn't the Problem. The Unread Source Behind It Is.",
  description: "AI-fabricated citations are showing up everywhere from Lancet papers to high school bibliographies. The deeper issue is that source verification, once implicit in research, now has to be explicitly taught.",
  keywords: [],
  openGraph: {
    images: ["/images/research/the-fake-citation-isnt-the-problem-the-unread-source-behind-it-is/pexels-photo-6649320.jpeg"],
  },
};

export const meta = {
  title: "The Fake Citation Isn't the Problem. The Unread Source Behind It Is.",
  description: "AI-fabricated citations are showing up everywhere from Lancet papers to high school bibliographies. The deeper issue is that source verification, once implicit in research, now has to be explicitly taught.",
  "opengraph-image": "/images/research/the-fake-citation-isnt-the-problem-the-unread-source-behind-it-is/pexels-photo-6649320.jpeg",
  date: "07-13-2026",
  readTime: "~9 min read",
  category: "Teaching",
  categories: ["Teaching", "AI Research"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>In May 2023, a federal judge in Manhattan fined two lawyers $5,000 for filing a brief built around six cases that did not exist. The cases had names, docket numbers, and internal quotations. They also had nothing on the other end. ChatGPT had invented them, and the attorneys, when opposing counsel could not find the rulings, doubled down rather than check (Wikipedia, Mata v. Avianca, 2023). The story became the canonical cautionary tale about lawyers and AI.</p>
<p>The same thing is happening, quietly and at scale, in classrooms. Students paste citations into bibliographies without opening a single one. Teachers spot-check, find the source does not exist, and a meeting follows. The cheating angle gets the headline. The deeper problem is what the fabricated citation reveals: the student never read anything. They never even tried to.</p>
<p>That is the part worth talking about. The fake citation is a tell, not the disease. The disease is that source verification, the skill that used to be cultivated through the slow work of writing a paper, is being skipped entirely. We can keep chasing the cheat. Or we can finally make the verification itself the assignment.</p>
<h2>The Hallucination Rate Is Not a Rounding Error</h2>
<p>When Walters and Wilder asked ChatGPT-3.5 and ChatGPT-4 to produce literature reviews on 42 multidisciplinary topics, they ended up with 636 citations to evaluate. Fifty-five percent of the GPT-3.5 citations were fabricated. Eighteen percent of the GPT-4 citations were fabricated. Of the real citations GPT-4 produced, 24 percent still contained substantive errors in authorship, year, journal, or pagination (Walters &amp; Wilder, 2023, <em>Scientific Reports</em>).</p>
<p>The newer models are better, but they are not clean. A Columbia University School of Nursing audit published in <em>The Lancet</em> in May 2026 analyzed 2.5 million biomedical papers and found 4,046 fabricated references across 2,810 papers. The rate climbed from one fabricated-citation paper per 2,828 in 2023, to one per 458 in 2025, to one per 277 in the first seven weeks of 2026. A twelve-fold increase, tracking almost exactly with the spread of generative writing tools (Columbia Nursing, 2026; <em>The Lancet</em>, 2026).</p>
<p>If working scientists are letting hallucinated references slip past peer review, the question is not whether ninth graders are catching them. The question is what the ninth grader is doing instead.</p>
<h2>What the Fake Citation Reveals About the Student</h2>
<p>A real citation, the kind a student earns by working through a source, leaves a trail. The student found the article, read enough of it to know what it argued, decided it belonged in the paper, and put it where it would land. The bibliography entry is the last gesture in a sequence of decisions.</p>
<p>The hallucinated citation is the first gesture, and the only one. There is no upstream work. The student asked for a literature review, took what came back, and pasted. The footnote looks the same on the page. The labor behind it is gone.</p>
<p>This is why fabricated citations are a fundamentally different problem from the old copy-paste plagiarism. Copy-paste plagiarism at least implied the student found a real source, read it well enough to decide it was useful, and stole it. Theft requires you to recognize value. Fabrication requires only that you not care whether anything you wrote is true.</p>
<blockquote>
<p>&quot;We need students to do the boring work of opening the article, reading the abstract, and deciding whether it actually supports what they&#39;re claiming. That&#39;s the skill. The citation is just the receipt.&quot; That is from Heiss, a high school teacher quoted in NPR&#39;s January 2026 reporting on classrooms going analog (NPR, 2026). She had started checking footnotes after watching plausible-sounding journals appear in student papers that did not exist (NPR, 2026).</p>
</blockquote>
<p>The receipts have always been fakeable. What changed is that producing fake ones now requires zero effort and zero embarrassment.</p>
<h2>Why the &quot;Just Detect It&quot; Reflex Will Fail Again</h2>
<p>Anyone watching the AI-detection industry over the past two years has seen this movie. Detectors flag honest writing. They miss obvious cheating. They produce false positives that ruin honest students and consume teacher time in appeals. We have written about it here before.</p>
<p>Fabricated citations look like a chance to retire detection in favor of something cleaner: just verify the source exists. And to a point, it is. Cross-referencing a DOI against Crossref or running a title through Google Scholar takes seconds per citation. Some universities are now classifying unverified AI citations as misconduct on the theory that a student who submits a fabricated reference is by definition not exercising due diligence (Tandfonline, 2026).</p>
<p>But verification as catch-and-punish runs into the same trap. It can scale up to the point of consuming a teacher&#39;s afternoon, or it can be done by spot check and miss almost everything. Even at NeurIPS 2025, with three to five expert reviewers per paper, roughly one hundred hallucinated citations slipped through (arXiv preprint, 2026). The reviewers were not lazy. Verification is genuinely hard to do well at volume, and we should stop pretending it is the kind of thing a teacher does in the margins of a Sunday evening.</p>
<p>The interesting move is the opposite. Instead of treating verification as the teacher&#39;s last line of defense, make it the student&#39;s first job.</p>
<h2>The Skill We Used to Take for Granted</h2>
<p>The Stanford History Education Group spent years comparing how undergraduates, professors, and professional fact-checkers evaluate online sources. The undergraduates and professors, by and large, stayed on the page and read down it, vertically, judging the source by its logo, its tone, its apparent authority. The fact-checkers did something different. They opened new tabs. They left the page within seconds to see what the rest of the web said about the page. They were faster and more accurate. Wineburg and McGrew named the move &quot;lateral reading&quot; (Wineburg &amp; McGrew, 2019, <em>Teachers College Record</em>).</p>
<p>Lateral reading is the exact skill a student needs to handle an AI-generated bibliography. You do not evaluate the citation by looking at the citation. You leave the citation. You check the DOI, the journal, the author&#39;s other work, the paper itself. You read laterally before you read at all.</p>
<p>That is teachable. Wineburg&#39;s group has shown a four-hour intervention can move undergraduates measurably toward fact-checker behavior (McGrew et al., 2018, <em>HKS Misinformation Review</em>). The challenge in school is not that lateral reading is too hard to teach. It is that a great deal of student work used to operate as if source evaluation happened automatically because the act of finding a source forced you to look at it. Generative AI broke that coupling. Now sources arrive pre-found. The evaluation step has to be explicit, named, and graded, or it does not happen.</p>
<h2>Students Already Sense Something Is Off</h2>
<p>The RAND American Youth Panel surveyed 1,214 students aged 12 to 29 in December 2025. The share using AI for homework climbed from 48 percent in May 2025 to 62 percent by December. Middle schoolers nearly doubled their reported use over the same window, from 30 percent to 46 percent (RAND, 2026).</p>
<p>The same survey found something teachers should sit with. Sixty-seven percent of students said using AI for schoolwork harms critical thinking. Up from 54 percent the previous spring. Among female students, the figure was 75 percent (RAND, 2026). Only one in three middle and high schoolers reported their school had any policy at all on AI use in homework (RAND, 2026).</p>
<p>The students are not unaware. They are using a tool they suspect is hurting them because it is faster than not using it and nobody told them what the rules were. That is not a discipline problem. It is a curriculum problem.</p>
<h2>What the Assignment Looks Like When Verification Is the Point</h2>
<p>A few moves are doing real work in classrooms now, and none of them require new technology.</p>
<p>Have students annotate every source in their bibliography with three things: where they found it, what specifically it claims that supports their argument, and the URL or DOI they used to verify it exists. Mark off any citation without all three. The labor of annotation is the labor of having actually read the source. The annotation is the assignment.</p>
<p>Run an AI-generated bibliography as a class exercise. Give every student the same prompt, have AI produce a list of ten sources, and split the class into teams to verify each one. Which exist. Which exist but are described inaccurately. Which are real but the AI got the year wrong. This is what librarians have been quietly demonstrating for two years (TCS Library, 2025), and it teaches more than a lecture on academic integrity ever did.</p>
<p>Ask students to bring in the worst hallucinated citation their AI tool has produced and explain how they caught it. Reward the catching. It re-routes the moral frame from &quot;I should not use AI&quot; to &quot;I am responsible for what is in my paper, and I have tools to check.&quot; The first frame is unenforceable. The second is the skill we want.</p>
<p>Build the rubric so that an unverifiable citation is a zero for that paragraph, not a discipline referral. The point is not to punish the AI use. The point is to make the citation worth something only when it is real.</p>
<h2>So What</h2>
<p>The fabricated citation is going to keep showing up in student work because the underlying behavior, asking a tool for a list of sources and pasting the result, is too convenient to disappear. The Mata v. Avianca sanctions did not stop lawyers from doing the same thing. Courts have sanctioned attorneys for AI-fabricated citations in dozens of subsequent filings. It is not stopping anywhere else either.</p>
<p>What can change is what the student does between the tool and the page. That space, the verification step, used to be implicit in the act of doing research. It is not anymore. It has to be taught, modeled, and graded directly. The good news is that lateral reading is a teachable skill with measurable interventions behind it. The harder news is that no detector, no honor code, and no oral defense will substitute for it.</p>
<p>We have spent two years debating whether students are using AI. They are. The question is whether they are reading anything along the way. The fake citation is the simplest test we have for the answer, and it does not require a detector to administer. It requires a teacher who insists, every time, on seeing what is on the other end of the link.</p>
<h2>Sources</h2>
<ol>
<li>Walters, W. H., &amp; Wilder, E. I. (2023). Fabrication and errors in the bibliographic citations generated by ChatGPT. <em>Scientific Reports</em>, 13, 14045. <a href="https://www.nature.com/articles/s41598-023-41032-5">https://www.nature.com/articles/s41598-023-41032-5</a></li>
<li>Hua, M., et al. (2026). Fabricated citations: an audit across 2.5 million biomedical papers. <em>The Lancet</em>. Columbia University School of Nursing press release, May 2026. <a href="https://www.nursing.columbia.edu/news/nearly-3-000-peer-reviewed-medical-papers-have-fake-citations-columbia-nursing-ai-assisted-audit-finds">https://www.nursing.columbia.edu/news/nearly-3-000-peer-reviewed-medical-papers-have-fake-citations-columbia-nursing-ai-assisted-audit-finds</a></li>
<li>Mata v. Avianca, Inc., 678 F. Supp. 3d 443 (S.D.N.Y. 2023). Wikipedia summary: <a href="https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc">https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc</a>.</li>
<li>Wineburg, S., &amp; McGrew, S. (2019). Lateral reading and the nature of expertise. <em>Teachers College Record</em>, 121(11). <a href="https://journals.sagepub.com/doi/10.1177/016146811912101102">https://journals.sagepub.com/doi/10.1177/016146811912101102</a></li>
<li>McGrew, S., et al. (2018). Can students evaluate online sources? Lateral reading training. <em>HKS Misinformation Review</em>. <a href="https://misinforeview.hks.harvard.edu/article/lateral-reading-college-students-learn-to-critically-evaluate-internet-sources-in-an-online-course/">https://misinforeview.hks.harvard.edu/article/lateral-reading-college-students-learn-to-critically-evaluate-internet-sources-in-an-online-course/</a></li>
<li>RAND Corporation. (2026, March). More students use AI for homework, and more believe it harms critical thinking. American Youth Panel survey, December 2025. <a href="https://www.rand.org/pubs/research_reports/RRA4742-1.html">https://www.rand.org/pubs/research_reports/RRA4742-1.html</a></li>
<li>National Public Radio. (2026, January 28). To keep AI out of her classroom, this high school English teacher went analog. <a href="https://www.npr.org/2026/01/28/nx-s1-5631779/ai-schools-teachers-students">https://www.npr.org/2026/01/28/nx-s1-5631779/ai-schools-teachers-students</a></li>
<li>NeurIPS 2025 fabricated-citation audit. (2026). Compound deception in elite peer review: a failure mode taxonomy of 100 fabricated citations. arXiv preprint. <a href="https://arxiv.org/pdf/2602.05930">https://arxiv.org/pdf/2602.05930</a></li>
<li>The Chicago School Library at TCS Education System. (2025). Information literacy and AI: classroom exercises. <a href="https://library.thechicagoschool.edu/artificialintelligence/ailiteracy">https://library.thechicagoschool.edu/artificialintelligence/ailiteracy</a></li>
</ol>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="research"
      currentSlug="2026/7/the-fake-citation-isnt-the-problem-the-unread-source-behind-it-is"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
