import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "A Teacher's Guide to Google Docs Add-Ons and Extensions",
  description: "A plain-English guide to Google Docs add-ons and extensions: what they are, how they work, the types worth knowing, and how to install and manage them safely in a school.",
  keywords: [],
  openGraph: {
    images: ["/images/learning/a-teachers-guide-to-google-docs-add-ons-and-extensions/pexels-67112.jpg"],
  },
};

export const meta = {
  title: "A Teacher's Guide to Google Docs Add-Ons and Extensions",
  description: "A plain-English guide to Google Docs add-ons and extensions: what they are, how they work, the types worth knowing, and how to install and manage them safely in a school.",
  "opengraph-image": "/images/learning/a-teachers-guide-to-google-docs-add-ons-and-extensions/pexels-67112.jpg",
  date: "06-25-2026",
  readTime: "~9 min read",
  category: "How It Works",
  categories: ["How It Works", "Detection"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>A Google Docs add-on is a small piece of software that bolts new features onto the document you already work in every day. Instead of copying text into a separate website or app, you open a menu inside Google Docs and the extra tool runs right there, alongside your paragraph. Think of it like a power outlet built into the desk: Docs is the desk, and the add-on is whatever you decide to plug in.</p>
<p>For teachers, this is one of the most underrated parts of the Google ecosystem. Most schools live in Docs. Students draft there, teachers comment there, feedback flows back and forth there. Yet the menu that lets you extend Docs sits quietly at the top of the screen, and a lot of educators have never opened it. This guide walks through what add-ons actually are, how they work under the hood, the categories worth knowing, and how to install and manage them without creating a privacy headache.</p>
<h2>What an add-on actually is</h2>
<p>When people say &quot;Google Docs add-on,&quot; &quot;extension,&quot; or &quot;plug-in,&quot; they usually mean the same thing: a third-party tool that Google has approved to run inside Docs. These come from the Google Workspace Marketplace, which is the official storefront. An add-on is not the same as a Chrome extension. A Chrome extension lives in your browser and can touch almost any website you visit. A Workspace add-on lives inside a specific Google app and is scoped to that app. The distinction matters for safety, and we will come back to it.</p>
<p>Once installed, an add-on usually shows up in one of two places. Older add-ons appear under the <strong>Extensions</strong> menu (this used to be called the Add-ons menu). Newer ones appear as an icon in the right-hand sidebar, the same vertical strip where Calendar, Keep, and Tasks live. Clicking the icon opens a panel that floats next to your document so you can run the tool and keep reading your text at the same time.</p>
<p>The key idea is that the add-on works on the document in front of you. A grammar tool reads your sentences and suggests edits. A citation tool inserts a formatted reference where your cursor sits. A plagiarism or AI-writing checker scans the text and returns a report. You never have to leave the page or paste anything anywhere.</p>
<h2>How they work under the hood</h2>
<p>You do not need to be a developer to use add-ons, but a little mental model helps you trust them.</p>
<p>Most Google Docs add-ons are built with Google Apps Script, a coding platform Google maintains specifically for automating and extending Workspace apps. When a developer publishes an add-on, they declare exactly what it is allowed to do. Those declarations are called scopes, and they are the heart of the permission screen you see during installation.</p>
<p>A scope might say &quot;read and change the contents of this document&quot; or &quot;see your email address&quot; or &quot;connect to an external service.&quot; When you click Install and then Allow, you are agreeing to that specific list. Google enforces those boundaries, so an add-on that only asked to read the current document cannot quietly reach into your Drive or your inbox.</p>
<p>Here is the workflow in plain terms. You open the document. You launch the add-on. The add-on reads the text it has permission to read. If it needs to do heavy processing, such as running an AI-writing analysis, it sends the text to the company&#39;s servers, gets a result back, and displays it in the sidebar. Some lightweight add-ons do everything locally without sending anything out. The permission screen is your clue about which kind you are dealing with. If an add-on asks to connect to an external service, assume your students&#39; words may leave Google&#39;s servers, and check the provider&#39;s privacy policy before you roll it out to a class.</p>
<h2>The types worth knowing</h2>
<p>Add-ons cluster into a handful of practical categories. You do not need all of them. Pick the two or three that solve a problem you actually have.</p>
<p><strong>Writing and feedback tools.</strong> Grammar and style checkers are the most common. They underline issues and propose rewrites inside the doc. For teachers, the value is less about fixing your own writing and more about modeling revision for students who can see suggestions appear in real time.</p>
<p><strong>Citation and research tools.</strong> These insert formatted references in MLA, APA, or Chicago, and some pull in source details automatically. They save the part of essay writing that students dread and get wrong most often.</p>
<p><strong>Integrity tools: plagiarism and AI-writing detection.</strong> This is where a platform like Checkmark fits. Rather than asking students to export a file and upload it to a separate portal, an integrity add-on lets a teacher run a check on the open document and read the report in the sidebar. The friction drops to almost nothing, which means checks actually happen instead of being skipped on a busy day.</p>
<p><strong>Accessibility and language tools.</strong> Text-to-speech, translation, and readability scorers help you support multilingual learners and students with different needs without buying separate software.</p>
<p><strong>Workflow and formatting tools.</strong> Mail merge, table of contents builders, diagram inserters, and template managers fall here. They are quiet time-savers for the administrative side of teaching.</p>
<h2>A quick install walkthrough</h2>
<p>Installing an add-on takes about a minute.</p>
<ol>
<li>Open any Google Doc.</li>
<li>Click <strong>Extensions</strong> in the top menu, then <strong>Add-ons</strong>, then <strong>Get add-ons</strong>. This opens the Google Workspace Marketplace.</li>
<li>Search for the tool you want, or browse by category. Read the reviews and the listed permissions before you commit.</li>
<li>Click <strong>Install</strong>, then <strong>Continue</strong>, and sign in with the Google account you want it attached to.</li>
<li>Review the permission screen carefully. This is the single most important step. If the scopes feel broader than the job requires, stop and reconsider.</li>
<li>Click <strong>Allow</strong>. The add-on now appears under Extensions or as a sidebar icon.</li>
</ol>
<p>To use it, open the Extensions menu or the sidebar, pick the tool, and follow the panel that opens. To remove an add-on later, go back to <strong>Extensions</strong>, then <strong>Add-ons</strong>, then <strong>Manage add-ons</strong>, find the tool, and choose to uninstall it.</p>
<h2>Common misconceptions</h2>
<p><strong>&quot;Add-ons can read everything in my Drive.&quot;</strong> Not unless they explicitly asked for that scope and you agreed. Most document add-ons are limited to the file you have open. The permission screen is the contract, and it is specific.</p>
<p><strong>&quot;Add-ons and Chrome extensions are the same thing.&quot;</strong> They are not. Chrome extensions run in the browser and can touch many sites. Workspace add-ons run inside a Google app and are scoped to it. When safety matters, prefer the Marketplace add-on over a browser extension that does the same job.</p>
<p><strong>&quot;If it is in the Marketplace, the school is fine to use it.&quot;</strong> Marketplace listing means Google approved the technical behavior, not that the tool meets your district&#39;s privacy rules or laws like FERPA and COPPA. Student data is a separate question. Always check whether the provider signs a data agreement your school accepts.</p>
<p><strong>&quot;Students can install whatever they want.&quot;</strong> In a managed Google Workspace for Education domain, administrators control which add-ons are allowed. If yours is locked down, an add-on you want may need an admin to approve it first. That is a feature, not a bug.</p>
<h2>A short FAQ</h2>
<p><strong>Do add-ons cost money?</strong> Some are free, some are freemium, and some are paid or require a school subscription. The Marketplace listing says which.</p>
<p><strong>Will an add-on work on the mobile app?</strong> Most are designed for Docs in a desktop browser. Mobile support is limited, so plan classroom use around laptops or Chromebooks.</p>
<p><strong>Can an add-on change my document without asking?</strong> Only within the scope it requested. A tool with edit permission can insert or change text when you tell it to. It cannot act on documents you never opened it in.</p>
<p><strong>What should an administrator do first?</strong> Decide on an allowlist. Approve a small set of vetted add-ons for the domain, confirm each provider&#39;s data handling, and tell staff which tools are blessed. A short approved list beats a free-for-all every time.</p>
<p>The takeaway is simple: the most powerful upgrade to Google Docs is already built in, hiding behind the Extensions menu, and the only real skill is learning to read a permission screen before you click Allow.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/6/a-teachers-guide-to-google-docs-add-ons-and-extensions"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
