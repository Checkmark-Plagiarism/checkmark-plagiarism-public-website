import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "The Plain-English AI Glossary for Teachers and Parents",
  description: "A jargon-free glossary of the AI terms showing up in classrooms, with simple definitions and real usage examples for teachers, administrators, and parents.",
  keywords: [],
  openGraph: {
    images: ["/images/learning/the-plain-english-ai-glossary-for-teachers-and-parents/pexels-8419515.jpg"],
  },
};

export const meta = {
  title: "The Plain-English AI Glossary for Teachers and Parents",
  description: "A jargon-free glossary of the AI terms showing up in classrooms, with simple definitions and real usage examples for teachers, administrators, and parents.",
  "opengraph-image": "/images/learning/the-plain-english-ai-glossary-for-teachers-and-parents/pexels-8419515.jpg",
  date: "06-25-2026",
  readTime: "~9 min read",
  category: "AI Basics",
  categories: ["AI Basics", "How It Works"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>Every few years a new vocabulary sneaks into the staff room. A decade ago it was &quot;flipped classroom&quot; and &quot;growth mindset.&quot; Now it is &quot;prompt,&quot; &quot;hallucination,&quot; and &quot;large language model.&quot; The difference this time is that the words are not just pedagogical fashion. They describe tools your students are already using, sometimes in ways that land on your desk as a discipline question or an academic integrity case.</p>
<p>You do not need a computer science degree to keep up. You need a working vocabulary, the kind that lets you read a news article, understand a vendor pitch, or talk to a student without nodding along to words you cannot define. This glossary is built for that. Each term gets a plain-English definition and a short example of how it actually shows up in a school setting. Skim it, bookmark it, share it with a colleague who keeps asking what these words mean.</p>
<h2>The foundation: what the technology actually is</h2>
<p>Start here, because most of the confusion downstream comes from fuzzy definitions up top.</p>
<p><strong>Artificial intelligence (AI)</strong> is the broad umbrella term for software that performs tasks we used to think required human judgment, like recognizing a face, recommending a video, or writing a paragraph. It is a marketing word as much as a technical one. When a product says it is &quot;powered by AI,&quot; that could mean almost anything.</p>
<p><em>Example: A reading app that adjusts difficulty based on a student&#39;s answers is using AI, and so is the chatbot that writes their essay. The label alone tells you very little.</em></p>
<p><strong>Machine learning</strong> is the most common kind of AI today. Instead of a programmer writing out every rule by hand, the system learns patterns from large amounts of example data. Show it enough labeled photos of cats and it learns to spot cats it has never seen.</p>
<p><em>Example: A plagiarism checker that learns to flag suspicious writing was &quot;trained&quot; on millions of documents rather than programmed with a fixed list of rules.</em></p>
<p><strong>Large language model (LLM)</strong> is the engine behind tools like ChatGPT, Claude, and Gemini. It is a machine learning system trained on an enormous amount of text, and its core skill is predicting what word should come next. String enough of those predictions together and you get fluent sentences, essays, and code.</p>
<p><em>Example: When a student types &quot;write me a 500-word essay on the causes of World War One,&quot; an LLM produces it one likely word at a time. It is not looking up a saved essay. It is generating a new one on the spot.</em></p>
<p><strong>Generative AI</strong> is the family of tools that create new content, text, images, audio, or video, rather than just analyzing existing content. LLMs are the text branch of this family.</p>
<p><em>Example: The same student could use generative AI to write the essay, then use a different generative tool to make an illustration for the cover page.</em></p>
<h2>The words you will hear when students use these tools</h2>
<p>This is the vocabulary of daily use, the terms a student would recognize even if they could not define them.</p>
<p><strong>Prompt</strong> is the instruction you give an AI tool. The quality of the prompt heavily shapes the quality of the output, which is why &quot;prompting&quot; has quietly become a skill of its own.</p>
<p><em>Example: &quot;Summarize this article&quot; is a weak prompt. &quot;Summarize this article in three bullet points a sixth grader could understand&quot; is a strong one. Teaching students the difference is becoming part of digital literacy.</em></p>
<p><strong>Token</strong> is the unit an LLM reads and writes in. A token is roughly three quarters of a word. You will mostly run into this term when a tool talks about length limits or pricing.</p>
<p><em>Example: A tool that allows &quot;8,000 tokens&quot; can handle roughly 6,000 words of input and output combined, which matters if a student tries to paste an entire textbook chapter.</em></p>
<p><strong>Context window</strong> is how much text a model can hold in its working memory at once, measured in tokens. Go past it and the model starts to forget the beginning of the conversation.</p>
<p><em>Example: In a long back-and-forth, a chatbot may &quot;forget&quot; an instruction you gave twenty messages ago. That is the context window filling up, not the tool being defiant.</em></p>
<p><strong>Hallucination</strong> is the polite industry term for when an AI confidently states something false. Because the model is predicting plausible text rather than retrieving verified facts, it can invent quotes, sources, statistics, and even court cases that never existed.</p>
<p><em>Example: A student cites a study in their bibliography that does not exist anywhere. They did not necessarily lie. The chatbot hallucinated the citation, and the student trusted it. This is one of the most important terms for any educator to understand.</em></p>
<p><strong>Fine-tuning</strong> is the process of taking a general-purpose model and training it further on a narrower set of examples so it specializes. It is the difference between a general practitioner and a specialist.</p>
<p><em>Example: A company might fine-tune a model on thousands of graded essays so it can give feedback in a particular rubric&#39;s style.</em></p>
<h2>The detection vocabulary</h2>
<p>This is the part of the glossary most relevant to academic integrity, and the part most often misunderstood.</p>
<p><strong>AI detector</strong> is a tool that estimates whether a piece of writing was produced by a human or a generative AI. It does not &quot;catch&quot; AI the way a metal detector catches metal. It produces a probability based on statistical signals in the text.</p>
<p><em>Example: A detector might report that a passage is &quot;85 percent likely AI-generated.&quot; That is an estimate, not a confession, and it should open a conversation rather than close a case.</em></p>
<p><strong>Perplexity</strong> measures how predictable a piece of text is to a language model. AI-generated writing tends to be smoother and more predictable, so it often scores low. Human writing tends to be more surprising, so it often scores higher. Detectors lean on this signal.</p>
<p><em>Example: A student who writes in short, formulaic, predictable sentences may trip a detector even when the work is entirely their own, because their natural style happens to be low in perplexity.</em></p>
<p><strong>Burstiness</strong> measures variation in sentence structure and length. Humans tend to mix long sentences with short ones. Some AI text is more uniform. Detectors use this alongside perplexity.</p>
<p><em>Example: An essay where every sentence is roughly the same length and rhythm may raise a flag, which is one reason detector results should never stand alone as proof.</em></p>
<p><strong>False positive</strong> is when a detector flags human work as AI-generated. <strong>False negative</strong> is the opposite, when AI work slips through as human. Both happen, which is why responsible policy treats detector scores as evidence to investigate, not verdicts to act on.</p>
<p><em>Example: A multilingual student writing in careful, textbook-style English is at higher risk of a false positive, because that style can look statistically similar to AI text.</em></p>
<p><strong>Watermarking</strong> is an emerging technique where AI companies embed a hidden statistical signal in generated text so it can be identified later. It is not yet widespread or reliable, but you will hear it pitched as a future solution.</p>
<p><em>Example: A vendor may claim their tool can detect &quot;watermarked&quot; AI text. Ask which models actually watermark, because most do not yet.</em></p>
<h2>The terms that get misused</h2>
<p>A few words get thrown around loosely, and knowing what they really mean protects you from both hype and panic.</p>
<p><strong>Plagiarism versus AI-generated writing</strong> are not the same thing, even though they often share a policy page. Plagiarism is copying someone else&#39;s work and passing it off as your own. AI-generated writing is text a student did not author themselves, but it is original in the sense that it was not copied from an existing source. A traditional plagiarism checker may pass an AI essay cleanly, because there is no original to match it against.</p>
<p><em>Example: A student submits an AI-written essay. A plagiarism checker finds zero matches and reports it as original. The work is still not the student&#39;s own thinking. This is exactly why the two kinds of detection exist side by side.</em></p>
<p><strong>Algorithm</strong> simply means a set of step-by-step instructions a computer follows. It is not sinister and it is not magic. Every recipe is an algorithm.</p>
<p><strong>Training data</strong> is the collection of text, images, or other examples a model learned from. Concerns about bias, privacy, and copyright almost always trace back to what was in the training data.</p>
<p><em>Example: If a model was trained mostly on formal, published English, it may handle a student&#39;s casual dialect poorly. The behavior reflects the diet it was fed.</em></p>
<h2>A short word on staying current</h2>
<p>This vocabulary will keep changing, and that is fine. You do not have to chase every new term. The goal is not fluency in computer science. It is enough literacy to ask good questions, read a vendor claim with a healthy eyebrow raised, and talk to a student about their work without either panicking or pretending nothing has changed.</p>
<p>Print this page, hand it to the colleague who keeps asking what a &quot;hallucination&quot; is, and you have done more for your school&#39;s AI literacy than most professional development days manage. The jargon is only intimidating until someone defines it plainly. Now someone has.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/6/the-plain-english-ai-glossary-for-teachers-and-parents"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
