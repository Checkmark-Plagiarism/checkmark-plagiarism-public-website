import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "How Canvas Integrations Work: A Practical Guide for Schools",
  description: "A plain-English guide to how LTI integrations connect tools like a plagiarism checker to Canvas, how to set one up, and the best practices that keep it reliable.",
  keywords: [],
  openGraph: {
    images: ["/images/learning/how-canvas-integrations-work-a-practical-guide-for-schools/pexels-6816590.jpg"],
  },
};

export const meta = {
  title: "How Canvas Integrations Work: A Practical Guide for Schools",
  description: "A plain-English guide to how LTI integrations connect tools like a plagiarism checker to Canvas, how to set one up, and the best practices that keep it reliable.",
  "opengraph-image": "/images/learning/how-canvas-integrations-work-a-practical-guide-for-schools/pexels-6816590.jpg",
  date: "06-25-2026",
  readTime: "~9 min read",
  category: "How It Works",
  categories: ["How It Works", "Detection"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>A Canvas integration is a piece of software that plugs an outside tool, such as a plagiarism checker, a video platform, or a grading assistant, directly into the Canvas learning management system so it behaves like a native part of the course. Instead of asking students and teachers to leave Canvas, log into a separate website, copy files back and forth, and then re-enter grades by hand, an integration brings that outside tool inside the assignment workflow they already use every day.</p>
<p>If you have ever clicked a button inside a Canvas assignment that opened a third party tool without a second login, you have used an integration. Most of them run on a behind-the-scenes standard called LTI, which is what makes the whole thing feel seamless. This guide explains what that standard does, how a typical integration is set up, and the habits that keep it working smoothly once it is live.</p>
<h2>What an integration actually is</h2>
<p>Under the hood, a Canvas integration is a controlled conversation between two systems. Canvas knows who the user is, which course they are in, and what assignment they opened. The external tool knows how to do one specific job well, whether that is checking a paper for plagiarism or hosting a video lecture. An integration is the agreement that lets these two systems share just enough information to cooperate without handing over everything.</p>
<p>The most common form this takes is called Learning Tools Interoperability, almost always shortened to LTI. LTI is an open standard, which means it is not owned by Canvas or by any single tool vendor. It is a shared set of rules, currently in version 1.3, that any compliant tool and any compliant learning management system can speak. Because it is a standard, the same plagiarism checker that integrates with Canvas can usually integrate with Blackboard, Moodle, or Schoology too, with only minor configuration differences.</p>
<p>That is the conceptual heart of it. An integration is not a plugin you install onto a server. It is a trusted handshake between Canvas and an external service, defined by a standard both sides agree to follow.</p>
<h2>How the handshake works</h2>
<p>When a teacher opens an integrated tool from inside a Canvas assignment, a quick sequence happens that students and instructors never see. It is worth understanding because almost every setup problem traces back to one of these steps.</p>
<p>First, Canvas launches the tool and sends along a small, signed package of information. This is the launch. The package answers a few questions the external tool needs: who is this person, are they a teacher or a student, which course and assignment are we in, and is this request genuinely coming from your Canvas instance. The signature is the important part. It is cryptographic proof that the request really came from your school&#39;s Canvas and was not forged by someone trying to sneak in.</p>
<p>Second, the external tool verifies that signature against keys it exchanged with Canvas during setup. If the keys match, the tool trusts the request and opens. If they do not match, the launch fails, which is exactly the behavior you want from a security standpoint.</p>
<p>Third, once the tool finishes its work, it can send results back to Canvas through what is called a service. A plagiarism checker, for example, can pass a similarity score and an originality report back into the SpeedGrader screen so the teacher never leaves Canvas to see them. Under LTI 1.3 these return trips are governed by named services, the most common being Assignment and Grade Services, which handles passing grades and scores back into the gradebook, and Names and Role Provisioning Services, which lets the tool see the course roster.</p>
<p>The whole exchange usually takes under a second, and the user experience is simply that a button worked. But that one button represents identity, permission, security, and data flow all negotiated automatically.</p>
<h2>Setting one up, step by step</h2>
<p>The exact screens differ by tool, but nearly every Canvas integration follows the same shape. At an institutional level a Canvas administrator does the heavy lifting once, and individual teachers then add the tool to their own assignments.</p>
<p>The administrator&#39;s part generally looks like this:</p>
<ol>
<li><p><strong>Get the configuration details from the tool vendor.</strong> For an LTI 1.3 tool this is usually a client ID and a configuration URL, or a JSON file describing the tool.</p>
</li>
<li><p><strong>Register the tool as a Developer Key in Canvas.</strong> In the Admin area, under Developer Keys, the administrator adds an LTI key using the details from step one. Canvas generates its own client ID in return.</p>
</li>
<li><p><strong>Enable the key and set its scope.</strong> The administrator turns the key on and decides which courses or sub-accounts can use it. Many schools enable it account-wide so every teacher has access; others restrict it to a pilot group first.</p>
</li>
<li><p><strong>Add the tool as an external app.</strong> Using the client ID, the tool is installed at the account or course level so it appears in menus and assignment settings.</p>
</li>
</ol>
<p>Once that is done, a teacher&#39;s part is much shorter. When creating or editing an assignment, the teacher chooses the integrated tool as the submission type, often labeled as an external tool. They pick the specific tool from a list, confirm a few options such as whether scores should flow back automatically, and save. From then on, student submissions route through that tool without anyone thinking about the plumbing.</p>
<p>If you are integrating a plagiarism and AI writing detector specifically, the only extra decision is usually whether the originality report is visible to students, visible only to the teacher, or hidden until after the due date. That is a policy choice, not a technical one, and it is worth making deliberately.</p>
<h2>Best practices that keep it reliable</h2>
<p>An integration that is set up carelessly will technically work and then quietly cause headaches for a semester. A few habits prevent almost all of them.</p>
<p><strong>Pilot before you go school-wide.</strong> Enable the tool in one or two willing teachers&#39; courses first, run real assignments through it, and confirm scores land in the gradebook correctly. A two week pilot surfaces problems while they are cheap to fix.</p>
<p><strong>Match permissions to need.</strong> LTI tools request access to specific data, such as the roster or the gradebook. Grant what the tool actually uses and nothing more. If a plagiarism checker only needs to read submissions and write back scores, it does not need broad account access.</p>
<p><strong>Decide the student visibility policy on purpose.</strong> Whether students see their own originality reports changes how they use the tool. Showing reports can teach students to self-correct citations before the deadline; hiding them keeps the focus on a final check. Neither is wrong, but the choice should be intentional and communicated.</p>
<p><strong>Write down who owns the integration.</strong> When a key expires or a launch starts failing, someone needs to know it is their job to fix it. Name that person before you need them.</p>
<p><strong>Watch for expiring keys and version changes.</strong> LTI 1.1, the older version, is being retired across the ecosystem in favor of the more secure 1.3. If your tool still uses 1.1, plan the upgrade rather than waiting for it to stop working.</p>
<p><strong>Test the failure case.</strong> Submit as a student in a test course and confirm what happens when something goes wrong. A clear error is fine; a silent failure where a paper never gets checked is the dangerous one.</p>
<h2>Common misconceptions</h2>
<p>A few beliefs about integrations cause more confusion than the technology itself.</p>
<p><strong>&quot;An integration means the tool can see everything in my Canvas.&quot;</strong> It cannot. LTI is built around limited, declared scopes. A tool sees only the data it was granted, and the launch tells it only about the current course and user, not your entire institution.</p>
<p><strong>&quot;If the button doesn&#39;t work, the tool is broken.&quot;</strong> Far more often the problem is a configuration mismatch: an expired key, a wrong client ID, or a scope that was never enabled. The tool and Canvas are usually fine; their handshake just was not set up cleanly.</p>
<p><strong>&quot;Once it&#39;s integrated, students can bypass it.&quot;</strong> With the assignment configured to route submissions through the external tool, students cannot opt out of the check while still submitting normally. The routing is enforced at the assignment level, not left to student choice.</p>
<p><strong>&quot;Every integration needs IT to install software.&quot;</strong> Modern LTI integrations install no software on your servers. They are a registration and a trusted link, which is why a teacher can often add an approved tool to an assignment in under a minute.</p>
<h2>The short version</h2>
<p>A Canvas integration is a trusted, standards-based handshake that lets an outside tool work inside your courses without extra logins or manual data shuffling. The standard doing the work is LTI, the setup is a one-time administrator task followed by a quick per-assignment choice, and the difference between a smooth integration and a frustrating one comes down to piloting, permissions, and knowing who owns it. Get those right and the technology disappears, which is exactly what a good integration is supposed to do.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/6/how-canvas-integrations-work-a-practical-guide-for-schools"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
