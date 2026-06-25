import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "Nano Banana Pro and the New Reflex of Building Slides by Asking",
  description: "Nano Banana Pro can now generate Google Slides decks from a prompt. Here is what that means for teachers, students, and the slow craft of explaining things.",
  keywords: [],
  openGraph: {
    images: ["/images/blogs/nano-banana-pro-and-the-new-reflex-of-building-slides-by-asking/pexels-13537707.jpg"],
  },
};

export const meta = {
  title: "Nano Banana Pro and the New Reflex of Building Slides by Asking",
  description: "Nano Banana Pro can now generate Google Slides decks from a prompt. Here is what that means for teachers, students, and the slow craft of explaining things.",
  "opengraph-image": "/images/blogs/nano-banana-pro-and-the-new-reflex-of-building-slides-by-asking/pexels-13537707.jpg",
  date: "06-25-2026",
  readTime: "~6 min read",
  category: "Product",
  categories: ["Product", "Industry"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>There is a particular kind of Sunday night that every teacher knows. The lesson is clear in your head, but the slides do not exist yet, and the gap between the two is an hour of dragging text boxes, hunting for a clip-art volcano, and fighting Google Slides over why your bullet points will not align. Into that very specific misery walks Nano Banana Pro, Google&#39;s high-end image model, now wired into the tools that build presentations. You type what you want. It builds the deck. The volcano renders itself.</p>
<p>This is one of those product shifts that sounds small and turns out not to be. We have had AI write text for a while now. What is newer, and what Nano Banana Pro pushes forward, is the ability to generate the <em>visual</em> object directly: a titled slide, a labeled diagram, an infographic with readable text baked into the image, all from a sentence or two. For schools, that changes the math on who can make a polished deck and how fast. It is worth slowing down to look at what we are actually trading.</p>
<h2>What Nano Banana Pro actually does here</h2>
<p>Nano Banana Pro is the nickname that stuck to Google&#39;s flagship image generation model in the Gemini family. The headline trick, and the reason it matters for slides specifically, is that it is unusually good at rendering legible text inside an image. Older image generators famously turned any attempt at words into a soup of melted letters, which made them useless for the one thing a slide needs most: a heading you can read from the back of the room.</p>
<p>When people talk about using it for Google Slides, they usually mean one of two flows. The first is generating slide <em>images</em>, full backgrounds, title cards, diagrams, that you then drop into a Slides file. The second, growing fast through third-party tools and Google&#39;s own Gemini integration, is generating an entire structured deck from a prompt: &quot;make me a ten-slide intro to the water cycle for fifth graders,&quot; and getting back something close to finished. You are no longer decorating a slide. You are describing one and receiving it.</p>
<p>The prompts that work best are specific in the way a good assignment is specific. Audience, tone, number of slides, the one idea per slide. Vague in, vague out. That detail matters later, so hold onto it.</p>
<h2>Why teachers will reach for it anyway</h2>
<p>Let us be honest about the appeal, because pretending it is not appealing helps no one. A first-year teacher with five preps and no time is the exact person this was built for. A deck that used to cost ninety minutes now costs ten, and the ten minutes are spent editing rather than building from a blank page. That is real, and it is not lazy. The slowest part of making a lesson visual was never the thinking. It was the software.</p>
<p>There is also an accessibility angle that does not get enough credit. Teachers who are not designers, who never learned the dark arts of alignment guides and color theory, can now hand off the part they were bad at and keep the part they are good at, which is knowing their students and their subject. A history teacher who can describe exactly the timeline she wants, but could never make it look like anything, suddenly can.</p>
<p>And students benefit in the obvious way: clearer visuals, more of them, made quickly enough that a teacher can actually generate a custom diagram for the specific confusion in <em>this</em> class period rather than reusing last year&#39;s blurry scan. Used well, this is a tool for responsiveness.</p>
<h2>The catch nobody puts on the marketing page</h2>
<p>Here is where the essayist in me has to spoil the demo. A deck that takes ten minutes to generate is a deck that took ten minutes to think about. The friction we are so eager to remove was, sometimes, doing quiet work. Building a slide forced you to decide what the single most important idea on it was. When the machine makes that decision for you, it makes a confident, average decision, and average is the enemy of memorable teaching.</p>
<p>You see this in the output. AI-generated decks have a house style now: balanced, competent, faintly generic, the visual equivalent of a stock photo of a handshake. They are never wrong and never surprising. For a quick reference deck, fine. For the lesson you want students to remember in June, the generic slide is a quiet failure, because the thing that makes a visual stick is usually the specific, slightly weird choice a person made on purpose.</p>
<p>There is also a factual hazard. An image model that confidently renders text will, just as confidently, render <em>wrong</em> text. It will mislabel the parts of a cell, swap two dates on a timeline, or invent a tidy diagram of a process that does not work that way. Because the output looks finished and authoritative, the errors are camouflaged. The old melted-letters problem was at least honest about being broken. A clean, readable, incorrect slide is more dangerous in a classroom than an obviously bad one.</p>
<h2>How to use it without outsourcing the thinking</h2>
<p>The move is not to ban the tool or to surrender to it. It is to keep the human on the part that matters. A few habits hold up well.</p>
<p>Treat the generated deck as a first draft, never a final one. Generate the scaffold, then go through and make at least one deliberate, non-generic choice per slide, the example only you would use, the question that fits this room. That is where the teaching lives.</p>
<p>Fact-check every rendered word and label as if a student wrote it, because functionally, a model did. Diagrams especially. If the slide makes a claim, you are the one standing behind it.</p>
<p>Be specific in the prompt, because specificity is where your judgment enters. The teacher who writes &quot;explain photosynthesis&quot; gets a textbook. The teacher who writes &quot;explain photosynthesis using the analogy of a kitchen making food from sunlight, for kids who keep mixing it up with respiration&quot; gets something that reflects an actual pedagogical decision. The prompt is the lesson plan now. Treat it like one.</p>
<h2>What this means for student work</h2>
<p>Schools should also see the obvious next beat: students have the same button. The polished deck a student turns in tomorrow may have been described rather than built, and the line between &quot;used a tool&quot; and &quot;did the work&quot; gets blurry exactly where we used to look for effort. A beautiful, coherent presentation is no longer evidence that a student wrestled with the material. It might just be evidence that they wrote a good prompt, which is a real skill, but a different one than we were grading for.</p>
<p>This is not a reason to panic, and it is not a reason to ban anything. It is a reason to grade the thinking instead of the artifact: the choices, the explanation, the ability to defend a slide out loud, the messy in-between work. The deck was never the point. The understanding was. Tools like Nano Banana Pro just make that distinction impossible to keep ignoring, which, annoying as it is, might be the most useful thing they do.</p>
<p>The slides will keep getting easier to make. The job was always to make sure something real was underneath them, and that part still cannot be prompted.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="blogs"
      currentSlug="2026/6/nano-banana-pro-and-the-new-reflex-of-building-slides-by-asking"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
