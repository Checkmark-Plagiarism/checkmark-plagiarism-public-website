import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "Pangram AI Detection, ESL Writing, and Reasoning Models: An Honest Look",
  description: "A fair, teacher-focused evaluation of how Pangram's AI detector handles non-native English writing and the new wave of reasoning models, and what the claims actually mean for your classroom.",
  keywords: [],
  openGraph: {
    images: ["/images/blogs/pangram-ai-detection-esl-writing-and-reasoning-models-an-honest-look/pexels-25626448.jpg"],
  },
};

export const meta = {
  title: "Pangram AI Detection, ESL Writing, and Reasoning Models: An Honest Look",
  description: "A fair, teacher-focused evaluation of how Pangram's AI detector handles non-native English writing and the new wave of reasoning models, and what the claims actually mean for your classroom.",
  "opengraph-image": "/images/blogs/pangram-ai-detection-esl-writing-and-reasoning-models-an-honest-look/pexels-25626448.jpg",
  date: "06-25-2026",
  readTime: "~7 min read",
  category: "Industry",
  categories: ["Industry", "Product"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>Every few months a new AI detector arrives with a headline number attached. Ninety-nine percent accuracy. Near-zero false positives. Detects the latest model on day one. Pangram is one of the more talked-about names in that conversation right now, and it has published its own posts on two of the questions teachers actually care about: how it handles writing from English language learners, and how well it catches output from the new reasoning models like the o-series and their cousins. Those are exactly the right questions. They are also the two places where almost every detector quietly struggles. So it is worth slowing down and asking what the claims really mean before you let them shape how you grade.</p>
<p>This is not a takedown and it is not an ad. We build a detection product ourselves, so we have every incentive to be skeptical of a competitor and every reason to be honest about where the whole category is hard. Here is the fair version.</p>
<h2>Why ESL writing is the hardest case for any detector</h2>
<p>Start with the uncomfortable truth that predates Pangram and applies to all of us. AI detectors learn to recognize statistical fingerprints of machine text: smoother word choices, more predictable sentence rhythm, a certain flattened evenness. The problem is that fluent-but-non-idiomatic human writing can look the same to a model. A student writing in their second or third language often produces simpler vocabulary, more regular structure, and fewer of the quirky, low-probability word choices that detectors treat as a signature of being human.</p>
<p>That overlap is not a Pangram-specific bug. It is the central fairness problem of the field, and it has real history. A widely cited 2023 Stanford study found that several popular detectors flagged essays by non-native English speakers as AI-generated at strikingly high rates while rarely misclassifying native writers. When a detector&#39;s mistakes land disproportionately on one group of students, that is not a rounding error. That is a civil rights problem wearing a percentage sign.</p>
<p>So when Pangram publishes a post arguing it performs well on ESL text, the instinct should be neither to believe it nor to dismiss it. The instinct should be to ask the follow-up questions that separate a real result from a marketing line.</p>
<h2>Reading the ESL claim like a teacher, not a buyer</h2>
<p>A claim like &quot;accurate on ESL writing&quot; is only as good as the test behind it. Here is what actually matters.</p>
<p>First, what was the false positive rate specifically on human ESL writing? Overall accuracy can stay high while the error concentrates entirely on the group you are worried about. The number you want is not &quot;how often is Pangram right,&quot; it is &quot;how often does Pangram call a real ESL student&#39;s real essay AI.&quot; If that figure is not stated plainly and separately, the headline does not answer your question.</p>
<p>Second, where did the test essays come from? A detector tuned on one population of non-native writers, say university applicants from a handful of countries, may behave very differently on a tenth-grade ELL classroom with a different first language and a different level. Generalization is the whole game, and a clean in-house benchmark does not prove it.</p>
<p>Third, what is the confidence band on a single essay? A detector can be calibrated well across thousands of documents and still be shaky on the one paper sitting in front of you. Aggregate accuracy is a property of a pile of essays. A grade is a decision about one student.</p>
<p>To Pangram&#39;s credit, the company tends to publish more methodology than the average vendor, and treating ESL detection as a named problem worth a dedicated post is better than pretending it does not exist. That is the right posture. The caution is simply that no published number, from Pangram or from us, should ever be the thing that decides a case on its own.</p>
<h2>The reasoning-model problem is newer and stranger</h2>
<p>The second post tackles a moving target. Reasoning models, the ones that generate long internal chains of thought before answering, write differently from the chatbots detectors were originally trained on. They produce more structured arguments, more deliberate transitions, and sometimes a slightly more &quot;considered&quot; texture than a quick GPT reply. For a detector, a new model is a new distribution, and the honest baseline expectation is that detection accuracy dips when a model arrives that nobody has trained against yet.</p>
<p>Pangram&#39;s argument is essentially that its approach holds up against these newer models. There is a plausible mechanism for that. Detectors built to capture broad statistical properties of machine text, rather than memorizing the quirks of one specific model, can transfer better to unseen models than people expect. But &quot;can&quot; is doing heavy lifting in that sentence. The only way to know is continuous testing against each new release, and the only honest framing is that today&#39;s number is a snapshot with a short shelf life.</p>
<p>There is also a subtler wrinkle with reasoning models. Students rarely paste raw output. They paraphrase it, run it through a humanizer, mix it with their own sentences, or ask the model to write &quot;like a tired teenager.&quot; Every one of those steps degrades a detector&#39;s signal. A score against clean, unedited reasoning-model text is a best case, not a typical case. The messy real-world version is where detection gets genuinely hard, and it is the version your students are actually living in.</p>
<h2>What none of these numbers can do</h2>
<p>Here is the part that matters most, and it is true of every detector including our own. A probability is evidence, not a verdict. A score of ninety percent AI is a reason to look closer. It is not proof, and it is certainly not grounds for an academic integrity charge on its own.</p>
<p>The danger with a strong, confident number is that it invites teachers to outsource judgment to a dashboard. That is exactly backwards. The right workflow treats any detector as one input alongside the things software cannot see: the student&#39;s draft history, their performance in class, a quick conversation, a comparison to their earlier writing. Tools like version history and revision tracking often tell you more than a single percentage ever will, because they show the work being built rather than guessing at the finished product.</p>
<p>This is especially urgent for the two cases Pangram is writing about. The ESL student wrongly flagged and the reasoning-model essay missed are mirror images of the same lesson: the cost of a mistake is not symmetric. A missed case of cheating is a missed teaching moment. A false accusation against a vulnerable student can derail a kid&#39;s year. Treat those outcomes with the gravity they deserve and the percentage stops being the headline.</p>
<h2>The bottom line for your classroom</h2>
<p>Pangram is doing something we respect, which is publishing on the hard cases instead of hiding from them. ESL writing and reasoning models are the two frontiers where the entire detection field is being tested, and naming them openly is the right move. Read its posts. Read ours. Run your own informal trials on writing you already know the origin of, because nothing builds calibrated trust like watching a tool succeed and fail on samples you can verify yourself.</p>
<p>Then keep the percentage in its proper place: a flag that starts a conversation, never a gavel that ends one. The best AI detector in the world is still just the second-best teacher in the room.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="blogs"
      currentSlug="2026/6/pangram-ai-detection-esl-writing-and-reasoning-models-an-honest-look"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
