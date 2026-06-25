import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "AI Detection Granularity: From Whole Documents Down to Single Sentences",
  description: "A plain-English guide to how AI detection works at different levels of granularity, from document and paragraph scores down to sentence and token analysis, and what each one can and cannot tell you.",
  keywords: [],
  openGraph: {
    images: ["/images/learning/ai-detection-granularity-from-whole-documents-down-to-single-sentences/pexels-247781.jpg"],
  },
};

export const meta = {
  title: "AI Detection Granularity: From Whole Documents Down to Single Sentences",
  description: "A plain-English guide to how AI detection works at different levels of granularity, from document and paragraph scores down to sentence and token analysis, and what each one can and cannot tell you.",
  "opengraph-image": "/images/learning/ai-detection-granularity-from-whole-documents-down-to-single-sentences/pexels-247781.jpg",
  date: "06-25-2026",
  readTime: "~9 min read",
  category: "How It Works",
  categories: ["How It Works", "Detection"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>When a teacher pastes a student essay into an AI detector and gets back &quot;68 percent likely AI,&quot; a fair question follows: 68 percent of what? The whole paper? Some of the sentences? A vague overall mood the software picked up on? The honest answer is that the number means something specific, and that specificity is the most important thing to understand about how these tools work.</p>
<p>AI detection happens at different levels of zoom. You can analyze a document as one big block, break it into paragraphs, drill down to individual sentences, or go all the way to the level of single words and the statistical fingerprints between them. Each level of zoom is called a <em>granularity</em>, and each one answers a different question. Knowing which question you are asking, and which one the detector is answering, is the difference between using these tools well and being misled by them.</p>
<p>This guide walks through the granularities from widest to narrowest, explains the shared machinery underneath, and ends with the misconceptions that trip people up.</p>
<h2>A plain-English definition</h2>
<p>AI detection granularity is the size of the text chunk a detector evaluates before assigning it a score. A coarse-grained detector looks at the entire submission and produces one verdict. A fine-grained detector slices the text into smaller units and scores each unit on its own, then often rolls those small scores back up into a document summary.</p>
<p>That is the whole idea. Everything else is detail about how the slicing works and what the scores actually measure.</p>
<p>The reason granularity matters is that real student writing is rarely all-or-nothing. A paper might be entirely the student&#39;s own work, entirely machine-generated, or, increasingly, a blend: a human draft polished by a chatbot, an AI outline filled in by hand, or three honest paragraphs followed by one that was clearly pasted from somewhere else. A single document-level percentage flattens all of those situations into one number. Finer granularities try to preserve the texture.</p>
<h2>Document level: the headline number</h2>
<p>Document-level detection treats the submission as a single sample. It measures overall statistical properties of the text and returns one probability, the &quot;68 percent&quot; headline.</p>
<p>The two properties most detectors lean on are <em>perplexity</em> and <em>burstiness</em>. Perplexity measures how surprised a language model is by the next word in a sequence. Human writing tends to be less predictable, so it carries higher perplexity. Machine writing, optimized to choose likely words, tends to be smoother and lower. Burstiness measures variation in sentence length and complexity across the text. People write in fits and starts, a long winding sentence followed by a short one. Models often produce a more even, uniform rhythm.</p>
<p>Document-level scores are useful as a first glance. They are fast, they are easy to communicate, and they are reasonable at flagging text that is wholly machine-generated. Their weakness is also obvious: averaging hides everything. A paper that is 80 percent original and 20 percent pasted can land at the same headline number as one that is uniformly half-and-half. The headline tells you the average temperature of the room, not where the fire is.</p>
<h2>Paragraph level: finding the hot spots</h2>
<p>Paragraph-level detection splits the document at its natural breaks and scores each block separately. Now the report can say something more useful than a single percentage. It can say: paragraphs one through three read as human, paragraph four spikes.</p>
<p>This granularity is often the most practical for teachers. Paragraphs are large enough to carry stable statistical signal, which keeps the false-alarm rate down, but small enough to localize a problem. When a detector highlights one suspicious paragraph in an otherwise clean essay, that is a far more actionable result than a flat document score. It gives you a specific place to look, a specific passage to ask the student about, and a concrete starting point for a conversation rather than an accusation.</p>
<h2>Sentence level: maximum zoom, maximum noise</h2>
<p>Sentence-level detection scores each sentence on its own. This is the finest granularity that most commercial tools expose to users, and it is genuinely powerful for spotting the seams in mixed documents, the exact sentence where a student stopped writing and a model took over.</p>
<p>But sentence-level detection comes with a hard statistical tradeoff that every user should internalize: short text is unreliable text. Perplexity and burstiness are properties of <em>distributions</em>, and a single sentence is a tiny sample. A fifteen-word sentence simply does not contain enough information to confidently separate human from machine. Plenty of perfectly human sentences are short, clean, and predictable. &quot;The Civil War began in 1861.&quot; reads as low-perplexity no matter who typed it.</p>
<p>Because of this, sentence-level highlights swing toward false positives. A sentence flagged in isolation is a lead, not a verdict. The right way to read sentence-level output is as a magnifying glass over a paragraph the detector already finds suspicious, not as a standalone judgment on each line. When a tool lights up scattered individual sentences across an otherwise clean paper, the more likely explanation is statistical noise, not a student cheating one sentence at a time.</p>
<h2>Token level: the layer underneath</h2>
<p>Beneath the sentence sits the token, the smallest unit a language model actually processes. A token is roughly a word or a fragment of one, and at this level a detector is not really producing a human-readable verdict so much as the raw material that all the higher levels are built from.</p>
<p>Token-level analysis looks at the probability the model assigns to each token given everything before it, and at the relationships between adjacent tokens. This is the actual measurement; perplexity is a token-level quantity, averaged upward. Most users never see token-level output directly, and that is appropriate, because a per-word probability is almost meaningless to a human reader. Its job is to feed the sentence, paragraph, and document scores above it. When you understand that every granularity is ultimately a different way of aggregating the same token-level signal, the whole stack makes more sense. The higher you zoom out, the more samples you average, and the more stable and trustworthy the number becomes.</p>
<h2>The terms worth knowing</h2>
<p>A few pieces of vocabulary recur across every level and are worth keeping straight.</p>
<p><strong>Perplexity</strong> is predictability. Low perplexity, more machine-like; high perplexity, more human-like. <strong>Burstiness</strong> is variation in rhythm and complexity from sentence to sentence; humans are burstier. A <strong>classifier</strong> is the model that takes these features and outputs a probability. A <strong>false positive</strong> is human writing wrongly flagged as AI, the error that matters most in a school, because it lands on a real student. A <strong>confidence score</strong> is the probability itself, and it should always be read together with the granularity it came from. Ninety percent confidence on a full document and ninety percent confidence on one sentence are not the same claim, even though they share a number.</p>
<h2>Common misconceptions</h2>
<p><strong>&quot;A higher percentage means more cheating.&quot;</strong> It means more statistical resemblance to machine text, at whatever granularity produced it. Resemblance is evidence, not proof, and the granularity changes how much weight that evidence deserves.</p>
<p><strong>&quot;Sentence-level is the most accurate because it is the most detailed.&quot;</strong> Backwards. Finer granularity gives you better <em>localization</em> and worse <em>reliability per unit</em>. The detail tells you where to look; it does not tell you more certainly what you found. The most trustworthy single number is usually the document or paragraph score, precisely because it averages over more text.</p>
<p><strong>&quot;The detector knows which model wrote it.&quot;</strong> Almost none do, at any granularity. They measure how machine-like the text is, not which chatbot produced it.</p>
<p><strong>&quot;A clean document score means every sentence is clean.&quot;</strong> No. Averaging can bury a single pasted paragraph inside an otherwise original paper. If you care about mixed authorship, you have to look at the finer levels, not just the headline.</p>
<h2>How to actually read a detection report</h2>
<p>Start wide, then zoom. The document score tells you whether the paper is worth a closer look. The paragraph view tells you where to look. The sentence view, used carefully and skeptically, tells you exactly which seams to ask about. Never let a single highlighted sentence become an accusation on its own, and never let a clean headline convince you the whole paper is clean.</p>
<p>Granularity is not a feature to shop for, it is a lens to choose deliberately. The number is only as meaningful as the chunk of text behind it, so before you trust any AI detection result, ask the question that started this whole piece: 68 percent of what?</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/6/ai-detection-granularity-from-whole-documents-down-to-single-sentences"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
