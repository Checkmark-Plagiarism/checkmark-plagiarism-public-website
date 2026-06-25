import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "ChatGPT Detection, Explained: How Tools Decide Whether AI Wrote It",
  description: "A plain-English guide to how ChatGPT detection actually works, what the scores mean, why detectors disagree, and how teachers should read the results.",
  keywords: [],
  openGraph: {
    images: ["/images/learning/chatgpt-detection-explained-how-tools-decide-whether-ai-wrote-it/pexels-17810854.jpg"],
  },
};

export const meta = {
  title: "ChatGPT Detection, Explained: How Tools Decide Whether AI Wrote It",
  description: "A plain-English guide to how ChatGPT detection actually works, what the scores mean, why detectors disagree, and how teachers should read the results.",
  "opengraph-image": "/images/learning/chatgpt-detection-explained-how-tools-decide-whether-ai-wrote-it/pexels-17810854.jpg",
  date: "06-25-2026",
  readTime: "~9 min read",
  category: "How It Works",
  categories: ["How It Works", "Detection"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>A ChatGPT detector is a tool that reads a piece of writing and estimates the probability that a large language model, rather than a person, produced it. That is the whole job described in one sentence. Everything else, all the statistics and the confidence bars and the highlighted sentences, is in service of that single guess: human or machine.</p>
<p>The word &quot;estimates&quot; is doing a lot of work in that sentence, and most of the confusion around these tools comes from skipping over it. A ChatGPT detector does not know who wrote anything. It has never seen the student, the assignment, or the draft history. It is looking at the finished text and making a statistical bet. Understanding how it places that bet is the difference between using a detector well and misusing it badly.</p>
<p>This guide walks through what is actually happening under the hood, what the numbers mean, why two detectors can look at the same paragraph and disagree, and how a teacher or administrator should read a result without either ignoring it or trusting it blindly.</p>
<h2>What a detector is actually measuring</h2>
<p>Start with a strange but useful fact: ChatGPT and a human writing about the same topic will often use many of the same words. The detector is not looking for forbidden vocabulary or secret watermarks. It is looking at the shape of the writing, the statistical texture that emerges when you measure how predictable each word is given the words around it.</p>
<p>Two concepts carry most of the weight here.</p>
<p>The first is <strong>perplexity</strong>. Loosely, perplexity measures how surprised a language model is by a piece of text. If every word is exactly what the model would have predicted, perplexity is low. If the writing keeps zigging where the model expected it to zag, perplexity is high. Human writing tends to be a little surprising. We reach for an odd word, we leave a thought half-finished, we make a strange comparison because it amused us at the time. Models trained to predict the most likely next word tend to produce text that is, by design, less surprising. So low perplexity is one fingerprint a detector looks for.</p>
<p>The second is <strong>burstiness</strong>, which measures variation in sentence structure and rhythm. Humans write in bursts. A long winding sentence followed by a short one. A fragment. Then a paragraph that runs on because the writer got excited. Machine-generated prose, especially from a default ChatGPT prompt, often settles into a smoother, more even cadence where sentences cluster around a similar length and complexity. Low burstiness is the second fingerprint.</p>
<p>A detector combines signals like these, usually many more than two, and produces a probability. That is the engine. Now the details.</p>
<h2>How the score is produced, step by step</h2>
<p>Modern detectors do not eyeball perplexity and call it a day. The typical pipeline looks like this.</p>
<p>First, the text is broken into tokens, the small chunks (roughly word-pieces) that language models actually operate on. The detector runs a model over those tokens and records, for each one, how likely the model thought that token was. This produces a long sequence of probabilities, a kind of confidence trace through the whole document.</p>
<p>Second, the tool computes features from that trace. Average predictability, the variance of predictability, how the predictability rises and falls across sentences, where the most &quot;model-like&quot; stretches are. Some detectors also feed the raw text into a separate classifier that has been trained on thousands of labeled human and AI samples, learning patterns no hand-written rule would catch.</p>
<p>Third, those features are scored, often passage by passage rather than all at once. This is why good detectors can highlight specific sentences as more or less likely to be AI-generated instead of stamping a single number on the whole essay. A document is rarely all human or all machine. A student might draft most of it themselves and paste in two AI paragraphs, and a sentence-level detector is built to surface exactly that.</p>
<p>Fourth, everything is rolled up into the summary you actually see: a percentage, a band like &quot;likely AI,&quot; or a color. That final number is a compression of all the underlying signal, which is both convenient and dangerous, because it hides how confident the tool really is.</p>
<h2>Why detectors disagree with each other</h2>
<p>Run the same paragraph through three ChatGPT checkers and you may get three different answers. This is not a glitch. It is a direct consequence of how they are built.</p>
<p>Each detector uses a different underlying model to measure predictability, and was trained on a different mix of human and AI text. One might have been tuned heavily on student essays, another on news articles, another on generic web text. They weight perplexity and burstiness differently. They set their decision thresholds in different places, with some erring toward catching more AI at the cost of more false alarms, and others doing the reverse.</p>
<p>There is also the moving-target problem. Detectors are trained on outputs from particular model versions. When OpenAI ships a new version of ChatGPT, or a student asks it to &quot;write more casually&quot; or &quot;vary your sentence length,&quot; the statistical fingerprint shifts. A detector tuned on last year&#39;s output can lag behind this year&#39;s. Detection and generation are locked in a quiet arms race, and the detectors are always responding to a model that has already moved.</p>
<p>So disagreement is the normal state of affairs. The right response is not to pick whichever tool gives the answer you want, but to treat each score as one noisy reading rather than a verdict.</p>
<h2>What the percentage does and does not mean</h2>
<p>Here is the single most important thing to internalize: a result of &quot;90% AI&quot; does not mean there is a 90% chance a student cheated. It means the text has statistical properties the tool associates with AI-generated writing about 90% of the time in its training data. Those are completely different claims.</p>
<p>Why the gap matters in practice:</p>
<ul>
<li><strong>Some humans naturally write &quot;machine-like&quot; prose.</strong> Highly structured, even-paced, formulaic writing scores as AI even when a person produced every word. English-language learners, students taught rigid five-paragraph templates, and technical writers are especially prone to false positives because their style is, by training, low in burstiness.</li>
<li><strong>Short samples are unreliable.</strong> Perplexity and burstiness need room to show themselves. A 40-word answer simply does not contain enough signal, and detectors are far less trustworthy on anything under a few hundred words.</li>
<li><strong>Light editing can flip the score.</strong> Paraphrasing a few sentences, swapping vocabulary, or asking the AI to write less predictably can pull a confident &quot;AI&quot; result down toward the middle, where the tool is honestly unsure.</li>
</ul>
<p>A detector score is evidence, in the way a smoke alarm is evidence. It is a reason to look more closely. It is not a conviction.</p>
<h2>Common misconceptions</h2>
<p><strong>&quot;The detector found proof.&quot;</strong> It found a probability. There is no proof inside the text itself, because ChatGPT does not leave a signature. Anyone selling certainty is overselling.</p>
<p><strong>&quot;A 0% AI score clears the student.&quot;</strong> Low scores can be false negatives. A student who edited AI output, or used a tool specifically built to evade detection, may sail through clean. Absence of a flag is not evidence of original work.</p>
<p><strong>&quot;If I run it twice I will get the same number.&quot;</strong> Many detectors are deterministic, but plenty produce slightly different results across runs or across small text changes. The number has a margin of error even if the interface does not show one.</p>
<p><strong>&quot;Detectors can tell which AI model was used.&quot;</strong> Some make a guess, but reliably distinguishing ChatGPT from a competing model from a heavily-edited hybrid is far harder than detecting machine involvement at all. Treat any specific model attribution with extra skepticism.</p>
<h2>How to actually use a ChatGPT detector</h2>
<p>The tool is a starting point for a conversation, not the end of one. A few practices keep it honest.</p>
<p>Read the sentence-level highlights, not just the headline percentage. A document flagged 70% overall is much more useful when you can see which two paragraphs drove that number.</p>
<p>Weight the score against everything you already know: the student&#39;s prior writing, the draft history, whether the voice in the essay sounds like them. A detector that contradicts a folder full of consistent earlier work deserves suspicion of the detector, not automatically the student.</p>
<p>Use a score as a reason to ask, never as the answer. &quot;This came back with a high AI signal, walk me through how you wrote it&quot; is a fair conversation. &quot;The computer says you cheated&quot; is not, and it does not survive contact with a false positive.</p>
<p>And give the writing enough text to judge. Run full assignments, not fragments, and be openly cautious about anything short.</p>
<p>ChatGPT detection is real, it is useful, and it is getting better. It is also probabilistic, fallible, and easy to misread as something more certain than it is. The teachers who get the most out of these tools are the ones who understand exactly that: a detector hands you a well-informed guess, and the judgment of what to do with it stays human.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/6/chatgpt-detection-explained-how-tools-decide-whether-ai-wrote-it"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
