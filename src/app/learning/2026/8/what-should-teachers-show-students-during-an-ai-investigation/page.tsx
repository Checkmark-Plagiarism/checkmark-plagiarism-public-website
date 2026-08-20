import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "What Should Teachers Show Students During an AI Investigation?",
  description: "Learn what visual evidence to share with students during an AI conference—writing playback replays, paste timelines, and sentence heatmaps in Checkmark.",
  keywords: [
    "what should teachers show students during an AI investigation",
    "showing writing playback to students in conference",
    "how to present AI evidence to students",
    "de escalating AI cheating conferences with visual proof",
    "sharing keystroke replay in Canvas SpeedGrader",
    "Checkmark student conference visual guide",
    "transparent academic integrity meetings",
  ],
  openGraph: {
    images: ["/images/services/report-breakdown-sidebar.png"],
  },
};

const meta = {
  title: "What Should Teachers Show Students During an AI Investigation?",
  description: "Learn what visual evidence to share with students during an AI conference—writing playback replays, paste timelines, and sentence heatmaps in Checkmark.",
  "opengraph-image": "/images/services/report-breakdown-sidebar.png",
  date: "08-14-2026",
  readTime: "~17 min read",
  category: "Teacher Guide",
  categories: ["Teacher Guide", "Detection", "How It Works"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p><strong>During an AI investigation, teachers should turn their screen and show students four specific visual artifacts: 1) the 15-second Keystroke Writing Playback video in Checkmark (showing the exact physical timeline of how text entered the file); 2) the Clipboard Paste Log (highlighting the timestamp and character count of external paste events); 3) the Sentence-Level Neural Heatmap; and 4) the Source Verification Card (displaying unresolvable DOIs).</strong></p>

<p>How an educator presents evidence during a private integrity conference determines whether the conversation becomes an adversarial argument or a constructive learning experience. Telling a student <em>&quot;an AI detector gave your essay an 88%&quot;</em> triggers immediate panic, denial, and defensiveness because the student cannot see what the algorithm evaluated. In contrast, <strong>showing the student their own writing playback video creates an undeniable digital mirror</strong>. When a student sees that the entire essay appeared in 6 seconds with zero typing hours, denial evaporates and honest dialogue begins. Checkmark Plagiarism provides a student-facing conference mode built specifically for this workflow.</p>

<p>Below is a comprehensive guide on what visual evidence to present during student integrity meetings.</p>

<p><strong>Checkmark Plagiarism</strong> powers transparent student conferences by pairing <a href="/services/ai-detection">AI detection</a> with <a href="/services/writing-playback">essay writing playback</a>, <a href="/services/plagiarism-detection">plagiarism detection</a>, <a href="/services/autograder">autograding</a>, and integrations with <a href="/services/integrations/canvas-lms">Canvas</a> and <a href="/services/integrations/google-classroom">Google Classroom</a>.</p>

<h2>The 4 Visual Artifacts to Show During a Conference</h2>

<div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">1. The Keystroke Writing Playback Replay</p>
    <p className="text-xs text-muted-foreground">Hit play on the 15-second time-lapse in Checkmark: watch the document timeline together to visually examine typing bursts, pauses, and backspaces.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">2. The Clipboard Paste &amp; Deletion Timeline</p>
    <p className="text-xs text-muted-foreground">Point to the red paste markers on the timeline: show the exact timestamp and character payload (e.g., 1,240 words inserted in 0.05 seconds).</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">3. The Sentence-Level Perplexity Heatmap</p>
    <p className="text-xs text-muted-foreground">Walk through the highlighted sentences: explain how the model identified low perplexity, repetitive clause architecture, and synthetic transitions.</p>
  </div>
  <div className="rounded-xl bg-slate-50 p-4 border border-border text-sm">
    <p className="font-bold text-foreground mb-1">4. The Source Verification Status Card</p>
    <p className="text-xs text-muted-foreground">Show the Crossref database query results demonstrating that specific cited DOIs and journal articles do not exist in published literature.</p>
  </div>
</div>

<h2>Why Visual Telemetry De-Escalates Confrontation</h2>
<p>Understanding the psychological benefits of visual transparency:</p>

<ul>
  <li><strong>Removes the Accusatory Tone:</strong> The teacher is no longer saying <em>&quot;I think you cheated.&quot;</em> Instead, the teacher says: <em>&quot;Let's look at what the document history shows happened here.&quot;</em></li>
  <li><strong>Empowers Honest Confession:</strong> Seeing objective keystroke telemetry helps students realize that making false excuses is impossible, paving the way for sincere ownership.</li>
  <li><strong>Educates on Digital Footprints:</strong> Demonstrating how writing telemetry works teaches students that academic authenticity leaves a permanent, verifiable digital signature.</li>
</ul>

<p>Read more in <a href="/learning/2026/7/how-checkmark-writing-process-analysis-works">how Checkmark writing process analysis works</a>.</p>

<h2>Comparison: Showing an AI Percentage vs. Showing Writing Playback</h2>

<div className="my-6 rounded-2xl bg-slate-50 p-6 border border-border text-xs">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <p className="font-bold text-foreground mb-1 text-sm">Showing Writing Playback (Calm &amp; Transparent)</p>
      <ul className="space-y-1.5 list-disc pl-4 text-muted-foreground">
        <li>Student watches physical replay of document creation.</li>
        <li>Paste events and typing hours are undeniable facts.</li>
        <li>Fosters collaborative, reflective conversation.</li>
        <li>Leads to immediate understanding and resolution.</li>
      </ul>
    </div>
    <div>
      <p className="font-bold text-foreground mb-1 text-sm">Showing an AI Percentage (Adversarial &amp; Unclear)</p>
      <ul className="space-y-1.5 list-disc pl-4 text-muted-foreground">
        <li>Student sees only an abstract number (e.g., 91% AI).</li>
        <li>Student feels attacked by an unknown algorithm.</li>
        <li>Prompts defensive denial: <em>&quot;The detector is broken!&quot;</em></li>
        <li>Escalates into parent disputes and administrative appeals.</li>
      </ul>
    </div>
  </div>
</div>

<h2>A 5-Step Educator Protocol for Visual Conferences</h2>
<div className="my-6 rounded-2xl bg-slate-50 p-6 border border-border">
  <p className="font-bold text-foreground mb-3 text-base">Visual Conference Checklist:</p>
  <ol className="space-y-1.5 text-xs font-medium text-foreground">
    <li>1. Open the student's submission in Canvas SpeedGrader with Checkmark enabled.</li>
    <li>2. Sit side-by-side or share your screen in a private setting.</li>
    <li>3. Start with the Writing Playback video: <em>&quot;Let's take a look at the drafting timeline together.&quot;</em></li>
    <li>4. Point to the paste event calmly: <em>&quot;I noticed this entire section appeared all at once. Can you explain where this text was written?&quot;</em></li>
    <li>5. Guide the conversation toward a constructive resolution (e.g., supervised rewrite).</li>
  </ol>
</div>

<h2>How Checkmark Plagiarism Powers Visual Conferences</h2>
<p>Checkmark Plagiarism combines **AI detection, essay writing playback, static AI detection, plagiarism detection, autograding, and Canvas/Google Classroom integrations** to give teachers a dedicated, clean conference interface that turns difficult meetings into supportive coaching sessions.</p>

<h2>Frequently Asked Questions</h2>

<h3>Should I show the AI detector score to the student first?</h3>
<p>No. Show the writing playback replay first so the student focuses on their actual drafting actions rather than arguing about an abstract percentage score.</p>

<h3>What if the student says they wrote the essay in another program and pasted it in?</h3>
<p>Ask the student to open the other program (e.g., Word or Pages) on their laptop to verify the creation timestamps and incremental version history.</p>

<h3>How does writing playback show backspaces and edits?</h3>
<p>Playback visually animates keystroke insertions in green and backspace deletions in red, showing the organic rhythm of authentic revision.</p>

<h3>What if a student denies the paste log?</h3>
<p>The paste log is an immutable browser telemetry record; show the exact timestamp, character count, and duration (0.05 seconds).</p>

<h3>How does Checkmark Plagiarism integrate with Canvas LMS?</h3>
<p>Checkmark provides certified LTI 1.3 integration, SpeedGrader sidebar embeds, two-way grade passback, and single sign-on (SSO).</p>

<h3>Can students access their own playback before the conference?</h3>
<p>Yes. Allowing students to review their playback beforehand gives them time to reflect and prepare honest explanations.</p>

<h3>What tone should a teacher use during the visual review?</h3>
<p>Maintain a calm, curious, and supportive tone: focus on problem-solving, understanding writing habits, and upholding course expectations.</p>

<h3>How does showing visual evidence protect student dignity?</h3>
<p>By relying on neutral digital records rather than personal accusations, the conversation remains professional, objective, and respectful.</p>

<h3>Can the visual playback video be sent to parents?</h3>
<p>Yes. Checkmark allows educators to export a secure, time-stamped video replay link that parents can view at home.</p>

<h3>Why is visual evidence the gold standard for restorative justice?</h3>
<p>Because undeniable visual proof eliminates the need for arguments, allowing the teacher and student to focus immediately on learning and growth.</p>

<h2>Transforming Integrity Meetings into Teachable Moments</h2>
<p>Integrity conferences should inspire growth rather than fear. By sharing objective writing playback and multi-signal telemetry with Checkmark Plagiarism, educators create a transparent, supportive environment where students take ownership of their learning and build authentic writing mastery.</p>
<p><strong>Checkmark Plagiarism supports this comprehensive approach with AI detection, essay writing playback, static AI detection, plagiarism detection, autograding, and integrations with Canvas and Google Classroom.</strong></p>

<hr className="my-8 border-border" />

<p className="font-semibold text-lg text-foreground">See how Checkmark powers transparent student conferences with writing playback and multi-signal detection. <a href="https://teach.checkmarkplagiarism.com/example-report" target="_blank" rel="noopener noreferrer">View a sample report</a> or <a href="/solutions/schools">request a demonstration</a>.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/8/what-should-teachers-show-students-during-an-ai-investigation"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
