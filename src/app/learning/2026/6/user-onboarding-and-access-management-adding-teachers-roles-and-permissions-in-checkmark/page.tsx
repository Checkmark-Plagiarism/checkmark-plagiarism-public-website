import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "User Onboarding and Access Management: Adding Teachers, Roles, and Permissions in Checkmark",
  description: "A plain-English guide to adding users, assigning roles, and managing access in Checkmark Plagiarism, so your whole school is set up safely in minutes.",
  keywords: [],
  openGraph: {
    images: ["/images/learning/user-onboarding-and-access-management-adding-teachers-roles-and-permissions-in-checkmark/pexels-27742642.jpg"],
  },
};

export const meta = {
  title: "User Onboarding and Access Management: Adding Teachers, Roles, and Permissions in Checkmark",
  description: "A plain-English guide to adding users, assigning roles, and managing access in Checkmark Plagiarism, so your whole school is set up safely in minutes.",
  "opengraph-image": "/images/learning/user-onboarding-and-access-management-adding-teachers-roles-and-permissions-in-checkmark/pexels-27742642.jpg",
  date: "06-25-2026",
  readTime: "~8 min read",
  category: "How It Works",
  categories: ["How It Works"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>User onboarding is the process of getting new people into your account and giving each of them exactly the access they need, no more and no less. Access management is what keeps that tidy over time as teachers join, switch departments, and leave. In a school setting these two jobs are the quiet backbone of everything else. If a teacher cannot log in, they cannot check a single paper. If a long departed substitute still has full administrator rights, you have a security problem nobody is watching.</p>
<p>This guide walks through how onboarding and access work in Checkmark Plagiarism, in plain language, so an administrator can set up a department, a building, or an entire district without guesswork. You do not need to be technical. You just need ten quiet minutes and a list of names.</p>
<h2>What roles actually mean</h2>
<p>Before you add anyone, it helps to understand the vocabulary, because every access decision flows from it.</p>
<p>A <strong>role</strong> is a bundle of permissions. Instead of toggling thirty individual settings for each person, you assign one role and the permissions come along for the ride. Checkmark uses a small, deliberate set of roles so the choices stay simple.</p>
<ul>
<li>An <strong>administrator</strong> can add and remove users, manage billing and seats, see usage across the account, and configure account wide settings. This is the person holding the keys. Keep the number small.</li>
<li>A <strong>teacher</strong> (sometimes called an instructor or standard user) can submit documents, run plagiarism and AI writing checks, view their own reports, and manage their own classes or folders. This is the role most of your people will have.</li>
<li>A <strong>viewer</strong> or <strong>read only</strong> role, where available, can open and read reports but cannot submit new documents or change settings. This is useful for a department head who wants visibility without doing the day to day checking, or for an aide.</li>
</ul>
<p>The guiding idea is <strong>least privilege</strong>: give each person the smallest role that lets them do their job. It feels generous to make everyone an administrator. It is not generous, it is risky. Every extra administrator is one more account that, if compromised or simply forgotten, can change billing or delete users.</p>
<h2>How to add a single user</h2>
<p>Adding one person is the most common task, so start here.</p>
<ol>
<li>Sign in as an administrator and open the account or team area, usually labeled <strong>Users</strong>, <strong>Team</strong>, or <strong>Manage Members</strong> in the main menu.</li>
<li>Click <strong>Add user</strong> (or <strong>Invite member</strong>). A short form appears.</li>
<li>Enter the person&#39;s name and their school email address. Use the school email, not a personal one. It makes future audits far easier and ties the account to an address your district actually controls.</li>
<li>Choose a <strong>role</strong> from the dropdown. For most teachers this is the standard teacher role. Reserve administrator for the one or two people who genuinely manage the account.</li>
<li>Send the invite. The new user receives an email with a link to set their password and finish creating their account.</li>
</ol>
<p>That is the whole flow. The person is not fully active until they accept the invite and set a password, which is a deliberate safety feature. It means you can never accidentally create a live account with a password someone else chose.</p>
<p>If an invite seems to vanish, the culprit is almost always a spam filter or an overzealous district email gateway. Ask the recipient to check spam, and ask your IT team to allowlist email from Checkmark&#39;s sending domain. You can usually resend the invite from the same user list.</p>
<h2>How to add many users at once</h2>
<p>Inviting one teacher is easy. Inviting forty before the term starts is where people groan. Bulk onboarding solves this.</p>
<p>Most accounts support a <strong>bulk invite</strong> or <strong>CSV import</strong>. The pattern is consistent:</p>
<ol>
<li>Download the sample CSV template from the import screen so your columns match what the system expects. Typically that means a column for name, one for email, and one for role.</li>
<li>Fill it in with your staff list. A quick way to build this is to export from your student information system or your existing email group, then trim it to the columns you need.</li>
<li>Upload the file. The system validates it and shows you a preview, flagging duplicates or malformed email addresses before anything is created.</li>
<li>Confirm. Every valid row gets an invite email, and your user list fills in.</li>
</ol>
<p>Two habits make bulk imports painless. First, <strong>clean the email column</strong> before you upload; a stray space or a typo is the number one cause of failed rows. Second, <strong>import in batches by group</strong> (one department or building at a time) rather than one giant file. If something looks off, you only have to re-check twenty rows, not two hundred.</p>
<h2>Managing access after onboarding</h2>
<p>Onboarding is a moment. Access management is forever. People change roles, take leave, and move on, and the account needs to keep up.</p>
<p><strong>Changing a role.</strong> When a teacher becomes a department lead, open their entry in the user list and change the role in the dropdown. The change takes effect immediately the next time they sign in. There is no need to delete and re-invite them, which would lose their history.</p>
<p><strong>Suspending versus removing.</strong> These are not the same, and the difference matters.</p>
<ul>
<li><strong>Suspending</strong> (or deactivating) freezes an account. The person cannot sign in, but their reports and history stay intact. This is the right move for a teacher on parental leave, a summer gap, or anyone you expect to return.</li>
<li><strong>Removing</strong> deletes the user from your account and frees the seat. Use this when someone leaves for good. Before you remove anyone, check whether their reports need to be preserved or handed to a colleague, because removal can take that access with it.</li>
</ul>
<p><strong>Reclaiming seats.</strong> Your plan includes a set number of seats. Suspended and removed accounts free those seats up so you are not paying for people who left. A good rhythm is to review your user list at the end of each term, suspend the inactive, and remove the truly gone. Ten minutes of housekeeping keeps your bill honest and your account secure.</p>
<h2>Common misconceptions</h2>
<p>A few beliefs trip up new administrators, so it is worth naming them directly.</p>
<p><strong>&quot;Everyone needs to be an administrator to do their job.&quot;</strong> Almost never true. A teacher can submit papers, run checks, and read every report they create with the standard role. Administrator is only for managing people, billing, and settings.</p>
<p><strong>&quot;Deleting a user is how you free up a seat.&quot;</strong> Suspending also frees the seat in most plans, and it keeps the person&#39;s history. Reach for suspend first, delete second.</p>
<p><strong>&quot;Once I invite someone, they are in.&quot;</strong> Not quite. An invited user is pending until they accept and set a password. If a colleague says they cannot log in, your first check is whether the invite was ever accepted.</p>
<p><strong>&quot;Sharing one login is simpler than adding everyone.&quot;</strong> It is simpler right up until it is a disaster. Shared logins destroy accountability (you cannot tell who submitted what), break personalized report history, and violate most district security policies. Individual accounts are the only safe way.</p>
<h2>A simple onboarding checklist</h2>
<p>If you remember nothing else, remember this short sequence.</p>
<ol>
<li>Decide your roles first: who needs administrator, who is a standard teacher, who only needs to view.</li>
<li>Gather a clean list of names and <strong>school</strong> email addresses.</li>
<li>Add people one by one for a small team, or via CSV import for a large one.</li>
<li>Tell your staff to expect an invite email and to check spam if it does not arrive.</li>
<li>At the end of each term, review the list and suspend or remove anyone who has left.</li>
</ol>
<p>Good access management is invisible when it works. Nobody thanks you for it, but the day a login fails during a deadline or an auditor asks who can see what, the quiet ten minutes you spent setting roles correctly will be the best ten minutes you ever spent.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/6/user-onboarding-and-access-management-adding-teachers-roles-and-permissions-in-checkmark"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
