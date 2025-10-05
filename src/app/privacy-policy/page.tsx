import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, Shield, Mail, Calendar, Share2, Link as LinkIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Privacy Policy — Checkmark Plagiarism',
  description:
    'How the Checkmark Plagiarism add-on for Google Classroom™ and other LMS integrations handle data, permissions, and security.',
  openGraph: { images: [''] },
} as any;

export const meta = {
  title: 'Privacy Policy',
  description:
    'How the Checkmark Plagiarism add-on for Google Classroom™ and other LMS integrations handle data, permissions, and security.',
  date: 'July 30, 2025',
  category: 'Legal',
  readTime: '~8 min read',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Header */}
      <section className="py-8 border-b border-border bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <Button size="sm" variant="outline" className="hidden sm:inline-flex">
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
          </div>

          <div className="max-w-4xl mx-auto mt-6">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-3">
              <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">{meta.category}</span>
              <span>•</span>
              <span>{meta.date}</span>
              <span>•</span>
              <span>{meta.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">{meta.title}</h1>
            <p className="text-base text-muted-foreground">Last updated: {meta.date}</p>
            <p className="text-xl text-muted-foreground mt-4 leading-relaxed">{meta.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main article */}
            <article className="lg:col-span-3 prose prose-neutral dark:prose-invert max-w-none leading-relaxed">
              <p className="text-muted-foreground">
                We are committed to protecting the privacy and ensuring the security of both your data and your students' data. This policy explains how our Checkmark Plagiarism add-on for Google Classroom™ handles information.
              </p>

              <Section id="data-collection" title="1. Data Collection and Use Across Educational Platforms">
                <p>
                  Our service integrates with various Learning Management Systems (LMS) to provide our features. We collect and process data strictly for the purposes of analyzing writing authenticity in student submissions, providing teachers with detailed reports on student writing processes, and enabling teachers to manage assignments and review results.
                </p>
                <p>We collect the following types of data:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>Teacher Account Information:</strong> Email address and name (for authentication and service delivery).</li>
                  <li><strong>Course and Assignment Information:</strong> Details about courses and assignments where Checkmark Plagiarism is enabled.</li>
                  <li><strong>Student Submission Metadata and Content:</strong> This includes the content of student essays and assignments.</li>
                  <li><strong>Document Revision History:</strong> Historical changes made to student documents.</li>
                </ul>
                <p>Checkmark Plagiarism uses this data exclusively for:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li>Analyzing writing authenticity in student submissions.</li>
                  <li>Detecting instances of copied, pasted, or transcribed content through behavioral analysis.</li>
                  <li>Providing teachers with detailed reports on student writing processes and potential integrity concerns.</li>
                  <li>Enabling teachers to manage assignments, view student work, and review results within the Checkmark Plagiarism dashboard.</li>
                </ul>
              </Section>

              <Section id="google-apis" title="2. Google API Services and Data Access">
                <p>Our add-on for Google Classroom™ uses the following Google API scopes to function correctly:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><code>https://www.googleapis.com/auth/classroom.courses.readonly</code>: To view course information.</li>
                  <li><code>https://www.googleapis.com/auth/classroom.rosters.readonly</code>: To view student rosters within courses.</li>
                  <li><code>https://www.googleapis.com/auth/classroom.profile.emails</code>: To access teacher email addresses for authentication.</li>
                  <li><code>https://www.googleapis.com/auth/classroom.coursework.students</code>: To access student coursework.</li>
                  <li><code>https://www.googleapis.com/auth/classroom.student-submissions.students.readonly</code>: To read student submissions for analysis.</li>
                  <li><code>https://www.googleapis.com/auth/classroom.addons.teacher</code>: To allow teachers to manage add-on settings.</li>
                  <li><code>https://www.googleapis.com/auth/classroom.push-notifications</code>: To receive notifications about classroom events (e.g., new submissions).</li>
                  <li><code>https://www.googleapis.com/auth/drive.file</code>: To access specific files in Google Drive that are part of assignments where our add-on is enabled.</li>
                  <li><code>https://www.googleapis.com/auth/documents.readonly</code>: To read the content of student documents for plagiarism detection and behavioral analysis.</li>
                  <li><code>https://www.googleapis.com/auth/userinfo.email</code>: To access the teacher's email address for authentication.</li>
                  <li><code>https://www.googleapis.com/auth/userinfo.profile</code>: To access basic profile information (e.g., name) for authentication.</li>
                </ul>
                <p>Through these scopes, we access:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li>Course information and rosters.</li>
                  <li>Student submission data and content.</li>
                  <li>Student document revision history and typing patterns (behavioral data).</li>
                  <li>Teacher email addresses and names (for authentication and service delivery).</li>
                </ul>
              </Section>

              <Section id="canvas" title="3. Canvas LMS Integration and Data Access">
                <p>
                  Our integration with Canvas LMS allows us to access similar data to provide our services. We use the Canvas API to access the following endpoints:
                </p>
                <p className="font-semibold">Assignments:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><code>GET|/api/v1/courses/:course_id/assignments</code></li>
                  <li><code>GET|/api/v1/courses/:course_id/assignments/:id</code></li>
                  <li className="text-muted-foreground">Purpose: To retrieve information about assignments within a course, enabling us to identify assignments for plagiarism detection.</li>
                </ul>
                <p className="font-semibold">Courses:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><code>GET|/api/v1/courses/:course_id/users</code></li>
                  <li><code>GET|/api/v1/users/:user_id/courses</code></li>
                  <li className="text-muted-foreground">Purpose: To identify users enrolled in courses and the courses a user is associated with, which helps in linking submissions to the correct students and courses.</li>
                </ul>
                <p className="font-semibold">Enrollments:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><code>GET|/api/v1/courses/:course_id/enrollments</code></li>
                  <li><code>GET|/api/v1/sections/:section_id/enrollments</code></li>
                  <li><code>GET|/api/v1/users/:user_id/enrollments</code></li>
                  <li className="text-muted-foreground">Purpose: To access enrollment data to accurately identify students within courses and sections.</li>
                </ul>
                <p className="font-semibold">OAuth2:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><code>/auth/userinfo</code></li>
                  <li className="text-muted-foreground">Purpose: To retrieve basic user information (like user ID and email) for authentication and to identify the teacher using the service.</li>
                </ul>
                <p className="font-semibold">Sections:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><code>GET|/api/v1/courses/:course_id/sections</code></li>
                  <li><code>GET|/api/v1/sections/:id</code></li>
                  <li className="text-muted-foreground">Purpose: To access information about course sections, which aids in organizing and processing student submissions.</li>
                </ul>
                <p className="font-semibold">Submissions:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><code>GET|/api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id</code></li>
                  <li><code>POST|/api/v1/sections/:section_id/assignments/:assignment_id/submissions</code></li>
                  <li><code>POST|/api/v1/sections/:section_id/assignments/:assignment_id/submissions/:user_id/files</code></li>
                  <li><code>PUT|/api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id</code></li>
                  <li className="text-muted-foreground">Purpose: To retrieve student submissions for analysis, and potentially to facilitate the submission of analysis reports or feedback back into Canvas (though current focus is on reading for detection).</li>
                </ul>
                <p>This data is used for the same purposes outlined in Section 1 (Data Collection and Use).</p>
              </Section>

              <Section id="student-data" title="4. Student Data Protection and Ownership">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li>Schools maintain ownership of students' work. We act as a processor of this data on behalf of the educational institution.</li>
                  <li>We never use student submissions to train our AI models for general purposes. Our AI models are designed to analyze writing authenticity without "learning" from specific student content, ensuring student work remains their own.</li>
                  <li>Unlike other services, we have no incentive to grow our database with student submissions for commercial gain.</li>
                  <li>Student submission data is only accessible to authorized teachers associated with the respective courses.</li>
                </ul>
              </Section>

              <Section id="consent" title="5. User Consent and Data Access">
                <p>
                  By installing and using our add-on or integration, you consent to the data practices described in this policy. You grant permission for data access when you accept the respective OAuth screens during the add-on/integration installation process for Google Classroom, Canvas, or other platforms.
                </p>
              </Section>

              <Section id="retention" title="6. Data Retention">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>Teacher Account Data:</strong> Retained until you request its deletion.</li>
                  <li><strong>Student Submission Data:</strong> Retained for plagiarism detection purposes for a maximum period of seven (7) years from the date of submission, unless earlier deletion is requested by the school or the student. Upon request from the school or student, specific data will be deleted promptly.</li>
                </ul>
              </Section>

              <Section id="access-control" title="7. Data Access and Control">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>Teachers:</strong> Have access to review work submitted by students enrolled in your classes through the Checkmark Plagiarism dashboard.</li>
                  <li><strong>Students:</strong> Cannot access other students' work; can only view their own submissions and request deletion of their data.</li>
                  <li><strong>Researchers:</strong> Do not view any student-submitted text content. Research and improvements to our detection algorithms are conducted using anonymized and aggregated data only, ensuring no individual student work is identifiable.</li>
                  <li><strong>Automated Processing:</strong> Document content is processed automatically by our AI detection algorithms without human viewing. Human access is only granted in rare, specific circumstances (e.g., for technical support at the explicit request of a school administrator) and is strictly logged and audited.</li>
                </ul>
              </Section>

              <Section id="security" title="8. Data Storage and Security">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li>All data is stored securely on Google Cloud Storage™ and managed through Firestore™ (for Google Classroom integration) and equivalent secure cloud infrastructure for other platforms.</li>
                  <li>Data is encrypted in transit and at rest.</li>
                  <li>We implement industry-standard security measures and undergo regular security assessments as required by Google for applications accessing Sensitive and Restricted Scopes.</li>
                  <li>We continuously review and update our security practices to protect against unauthorized access, disclosure, alteration, or destruction of data.</li>
                </ul>
              </Section>

              <Section id="prohibited" title="9. Prohibited Uses">
                <p>We strictly prohibit the use of Google user data (and data from other integrated platforms) for:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li>Targeted advertising.</li>
                  <li>Selling to data brokers.</li>
                  <li>Providing to information resellers.</li>
                  <li>Determining credit-worthiness.</li>
                  <li>Lending purposes.</li>
                  <li>User advertisements, personalized advertisements, retargeted advertisements, or interest-based advertisements.</li>
                  <li>Creating databases for purposes other than improving our service.</li>
                  <li>Training AI models for purposes unrelated to improving our service.</li>
                </ul>
                <p>
                  Student data collected through Checkmark Plagiarism is never used to train AI models that could compromise student privacy or intellectual property, and is never shared or read by anyone except their authorized instructor (unless explicitly requested by the institution for support or legal compliance reasons).
                </p>
              </Section>

              <Section id="teacher-files" title="10. Teacher Files and Content">
                <p>
                  We do not access, read, or analyze any of your personal Google Drive™ files or documents, or any other personal files on integrated platforms. Our access is strictly limited to student submissions for assignments where Checkmark Plagiarism has been enabled by the teacher.
                </p>
              </Section>

              <Section id="compliance" title="11. Compliance">
                <p>
                  We ensure that our employees, agents, contractors, and successors comply with this privacy policy, Google's API Services User Data Policy, and relevant data privacy regulations such as FERPA, COPPA, and GDPR where applicable. We are committed to upholding the highest standards of student data privacy.
                </p>
              </Section>

              <Section id="changes" title="12. Changes to This Policy">
                <p>
                  We may update this policy periodically to reflect changes in our practices or legal requirements. Significant changes will be notified through our website and/or integrated platforms, and may require renewed consent from users. We encourage you to review this policy regularly.
                </p>
              </Section>

              <Section id="contact" title="13. Contact Us">
                <p>
                  For questions about this policy, to request data deletion, or for any concerns about our data practices, please contact us at:
                </p>
                <p>
                  <Link className="underline underline-offset-4 hover:text-primary" href="mailto:support@checkmarkplagiarism.com">
                    <Mail className="inline-block w-4 h-4 mr-1" /> support@checkmarkplagiarism.com
                  </Link>
                </p>
              </Section>

              <div className="mt-10">
                <Link href="#" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
                  <LinkIcon className="h-4 w-4 mr-2" />
                  Copy page link
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Shield className="w-4 h-4" /> Policy Info
                  </h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Last updated: {meta.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>{meta.readTime}</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <h4 className="font-medium text-foreground mb-2">Quick Links</h4>
                      <nav className="grid gap-1">
                        <a className="hover:text-primary" href="#data-collection">Data Collection</a>
                        <a className="hover:text-primary" href="#google-apis">Google APIs</a>
                        <a className="hover:text-primary" href="#canvas">Canvas LMS</a>
                        <a className="hover:text-primary" href="#student-data">Student Data</a>
                        <a className="hover:text-primary" href="#retention">Retention</a>
                        <a className="hover:text-primary" href="#access-control">Access & Control</a>
                        <a className="hover:text-primary" href="#security">Security</a>
                        <a className="hover:text-primary" href="#prohibited">Prohibited Uses</a>
                        <a className="hover:text-primary" href="#teacher-files">Teacher Files</a>
                        <a className="hover:text-primary" href="#compliance">Compliance</a>
                        <a className="hover:text-primary" href="#changes">Changes</a>
                        <a className="hover:text-primary" href="#contact">Contact</a>
                      </nav>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <Button variant="outline" size="sm" className="w-full">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Policy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

// Helper component for consistent anchor spacing and heading style
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h3 className="mt-10 text-xl font-semibold text-foreground">{title}</h3>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
