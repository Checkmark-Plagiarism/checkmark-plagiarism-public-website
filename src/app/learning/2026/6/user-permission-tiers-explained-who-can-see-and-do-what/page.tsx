import { Metadata } from 'next';
import ArticleLayout from "@/components/blog/article-layout";

export const metadata: Metadata = {
  title: "User Permission Tiers Explained: Who Can See and Do What",
  description: "A plain-English guide to user permission tiers in school software: what admin, teacher, and student roles can do, why the differences exist, and how to avoid common mistakes.",
  keywords: [],
  openGraph: {
    images: ["/images/learning/user-permission-tiers-explained-who-can-see-and-do-what/pexels-5060982.jpg"],
  },
};

export const meta = {
  title: "User Permission Tiers Explained: Who Can See and Do What",
  description: "A plain-English guide to user permission tiers in school software: what admin, teacher, and student roles can do, why the differences exist, and how to avoid common mistakes.",
  "opengraph-image": "/images/learning/user-permission-tiers-explained-who-can-see-and-do-what/pexels-5060982.jpg",
  date: "06-25-2026",
  readTime: "~7 min read",
  category: "How It Works",
  categories: ["How It Works"],
  author: "The Checkmark Plagiarism Team",
};

const bodyHtml = `<p>A user permission tier is a named bundle of rules that decides what a person can see and do inside a piece of software. In a school plagiarism and AI-detection platform, your tier is the difference between being able to read every report in the district and being able to read only your own. It is not a measure of how important you are. It is a description of your job, translated into software.</p>
<p>If you have ever logged in and wondered why a colleague can see a button you cannot, or why a student account never shows the originality score, the answer is almost always the permission tier. Once you understand how tiers are built and why they exist, the whole system stops feeling arbitrary and starts feeling like a map.</p>
<h2>How permission tiers actually work</h2>
<p>Under the hood, a permission tier is just a list of yes-or-no answers attached to a role. Can this role create a class? Yes. Can it delete another teacher&#39;s submission? No. Can it export the whole school&#39;s data? No. Software designers group these answers into roles so that nobody has to set permissions one checkbox at a time for every single user.</p>
<p>Three ideas do most of the work.</p>
<p>The first is the <strong>role</strong>. A role is a label like &quot;Teacher&quot; or &quot;Administrator&quot; that carries a default set of permissions. When you create a new teacher account, it inherits the teacher role&#39;s whole list automatically. This is why onboarding a new staff member takes seconds rather than an afternoon.</p>
<p>The second is <strong>scope</strong>. Two people can have the exact same role and still see different things, because scope controls <em>how much</em> the role applies to. A teacher&#39;s scope is usually their own classes. A department head might have a teacher role with a wider scope that covers a whole subject area. The verb is the same; the territory is different.</p>
<p>The third is <strong>inheritance</strong>. Higher tiers almost always include everything the tier below them can do, plus more. An administrator can typically do anything a teacher can do, and then some. This stacking keeps the system predictable: you rarely have to wonder whether a higher tier is missing a lower tier&#39;s ability.</p>
<p>Put together, your effective access is your role, narrowed or widened by your scope, stacked on top of whatever you inherit. That single sentence explains the vast majority of &quot;why can&#39;t I see this&quot; questions.</p>
<h2>The common tiers, from least to most access</h2>
<p>Most school platforms, including ours, settle on a small number of tiers. The names vary, but the shape is remarkably consistent across products.</p>
<p><strong>Student.</strong> The narrowest tier. Students can usually submit their own work, see whatever feedback a teacher chooses to release, and not much else. They generally cannot see their raw originality or AI-likelihood scores unless a teacher turns that on, and they can never see another student&#39;s submission. This is deliberate. The student tier is built to protect other students&#39; privacy and to keep the detection score in the teacher&#39;s hands, where context lives.</p>
<p><strong>Teacher or instructor.</strong> The working tier, where most of the day-to-day happens. Teachers create classes, collect submissions, run reports, read originality and AI-writing results, and leave feedback. Their scope is their own classes. A teacher generally cannot peer into a colleague&#39;s class or change account-wide settings. This boundary is not a lack of trust. It keeps each teacher&#39;s roster clean and prevents accidental edits to someone else&#39;s gradebook.</p>
<p><strong>Department head or team lead.</strong> A middle tier that many schools use and many overlook. It is essentially a teacher role with a broader scope: visibility across several classes or an entire subject area, often with the ability to compare results or pull a summary across the team. It usually stops short of billing, user creation, or deleting accounts.</p>
<p><strong>Administrator.</strong> The widest tier. Administrators manage users, set policies that apply to everyone, configure integrations, and see reporting across the whole school or district. They can create and remove accounts, decide whether students see their scores by default, and handle the settings that shape every other tier&#39;s experience. With that reach comes the most responsibility, which is exactly why this tier is given to the fewest people.</p>
<p><strong>Owner or billing contact.</strong> Sometimes folded into the administrator tier, sometimes separate. This is the person tied to the subscription, payment, and contract. Splitting it out means the people managing money are not necessarily the same people managing student data, which is a healthy separation in larger organizations.</p>
<h2>What the tiers mean in practice</h2>
<p>The tier names are easy. The implications are where schools get tripped up.</p>
<p><strong>Visibility flows downhill, not up.</strong> A higher tier can almost always see the work of a lower tier within its scope. A lower tier can almost never see up. An administrator can review a teacher&#39;s class reports; a teacher cannot review the administrator&#39;s account settings. When you are deciding who needs which tier, ask what they need to <em>see</em>, not just what they need to <em>do</em>. Visibility is the quieter half of permissions and the half that carries the most privacy weight.</p>
<p><strong>Destructive actions cluster at the top.</strong> Deleting a class, removing a user, exporting bulk data, changing a school-wide setting: these live in the higher tiers because they are hard to undo and they affect many people at once. This is why handing out administrator access casually is risky. It is not that you distrust the person; it is that a single mistaken click at that tier reaches further than a mistaken click at the teacher tier.</p>
<p><strong>Defaults are decisions.</strong> Many platforms ship with a default such as &quot;students do not see their AI score.&quot; That default was set by someone at the administrator tier, and it can be changed. If your students are seeing something you did not expect, or not seeing something you wanted them to, the cause is usually a default chosen above the teacher tier, not a bug.</p>
<p><strong>The tier follows the person, not the device.</strong> Permissions travel with the login, not the laptop. A teacher who logs in on a student&#39;s Chromebook still sees the teacher view. This is obvious once stated, but it matters: shared devices are safe precisely because the tier is tied to the account.</p>
<h2>Misconceptions worth clearing up</h2>
<p><strong>&quot;More access is better.&quot;</strong> It is not. The healthiest setup gives each person the <em>least</em> access that still lets them do their job. This is the principle of least privilege, and it is good for everyone. Fewer people with wide access means fewer accidental deletions, a smaller target for compromised passwords, and a clearer story if you ever have to explain who could see student data.</p>
<p><strong>&quot;Admins can read everything, so the tier is just for show.&quot;</strong> Administrators have broad reach, but well-built platforms log significant actions. The tier is not only a gate; it is also an accountability trail. Who exported the data and when is a question the system can usually answer.</p>
<p><strong>&quot;Changing someone&#39;s tier is a big technical job.&quot;</strong> It rarely is. Tiers exist precisely so that promoting a teacher to department head, or demoting a former administrator, is a quick change to one account rather than a rebuild. If your platform makes role changes painful, that is a product shortcoming, not a law of nature.</p>
<p><strong>&quot;Students are locked out of everything important.&quot;</strong> The student tier is narrow on purpose, but narrow is not powerless. Students still own their submissions and the feedback released to them. The restriction is about <em>other people&#39;s</em> data and <em>raw</em> scores, not about shutting students out of their own learning.</p>
<h2>A short checklist for getting tiers right</h2>
<p>Start every account at the lowest tier that fits the job, and widen only when there is a concrete need. Review your administrator list once a term and remove anyone who has changed roles or left. Decide your student-facing defaults on purpose rather than inheriting whatever shipped. And when someone asks why they cannot see a button, resist the urge to grant a higher tier on the spot; check the scope first, because the answer is usually there.</p>
<p>Permission tiers are not bureaucracy for its own sake. They are the quiet structure that lets a hundred people share one platform without stepping on each other or on a student&#39;s privacy. Get the tiers right, and the rest of the system mostly takes care of itself.</p>`;

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function Page({ searchParams }: PageProps) {
  const refValue = typeof searchParams?.ref === 'string' ? searchParams.ref : undefined;

  return (
    <ArticleLayout
      meta={meta}
      section="learning"
      currentSlug="2026/6/user-permission-tiers-explained-who-can-see-and-do-what"
      refValue={refValue}
    >
      <article
        className="lg:col-span-3 text-base leading-7 tracking-normal space-y-5 [&_p]:text-muted-foreground [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:pt-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_a]:text-primary [&_a]:underline [&_img]:rounded-xl [&_img]:my-6 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </ArticleLayout>
  );
}
