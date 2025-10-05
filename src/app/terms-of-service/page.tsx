import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, ShieldCheck, Calendar, Share2, Link as LinkIcon, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Terms of Service — Checkmark Plagiarism',
  description:
    'Terms governing the use of the Checkmark Plagiarism add-on for Google Classroom™ and related integrations.',
  openGraph: { images: [''] },
} as any;

export const meta = {
  title: 'Terms of Service',
  description:
    'Terms governing the use of the Checkmark Plagiarism add-on for Google Classroom™ and related integrations.',
  date: 'April 14, 2025',
  category: 'Legal',
  readTime: '~7 min read',
};

export default function TermsOfServicePage() {
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
                <span className="font-medium text-foreground">Checkmark Plagiarism for Google Classroom™</span> — Terms of Service
              </p>

              <Section id="1-agreement" title="1. Agreement to Terms">
                <p>
                  By accessing or using the Checkmark Plagiarism add-on for Google Classroom™ ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, you may not access the Service.
                </p>
              </Section>

              <Section id="2-description" title="2. Description of Service">
                <p>
                  Checkmark Plagiarism is an educational tool that integrates with Google Classroom™ to help teachers detect potential plagiarism and AI-generated content in student submissions by analyzing typing patterns and revision history.
                </p>
              </Section>

              <Section id="3-accounts" title="3. Account Registration and Requirements">
                <p><strong>3.1</strong> To use the Service, you must:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li>Be at least 18 years of age or have authorization from your educational institution or guardian</li>
                  <li>Create an account with valid and accurate information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Have an active educational email address or institutional authorization</li>
                </ul>
                <p className="mt-3"><strong>3.2</strong> You are responsible for all activities that occur under your account.</p>
              </Section>

              <Section id="4-license" title="4. Licensing and Restrictions">
                <p><strong>4.1</strong> Subject to these Terms, Checkmark Plagiarism grants you a limited, non-exclusive, non-transferable license to use the Service for educational purposes.</p>
                <p><strong>4.2</strong> You may not:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li>Use the Service for commercial purposes outside your educational institution</li>
                  <li>Reverse engineer, decompile, or attempt to extract the source code</li>
                  <li>Remove proprietary notices or labels from the Service</li>
                  <li>Use the Service in any manner that could damage or overburden systems</li>
                  <li>Create derivative works based on the Service</li>
                  <li>Access the Service through automated means or interfaces not provided</li>
                </ul>
              </Section>

              <Section id="5-subscriptions" title="5. Subscription and Payment">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>5.1</strong> Use of the Service requires an active institutional or individual subscription.</li>
                  <li><strong>5.2</strong> Subscription fees are billed according to the plan selected at registration or as later modified.</li>
                  <li><strong>5.3</strong> All fees are non-refundable except as required by law or as explicitly stated in these Terms.</li>
                </ul>
              </Section>

              <Section id="6-privacy" title="6. Data Usage and Privacy">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>6.1</strong> Your use of the Service is also governed by our Privacy Policy, which is incorporated by reference.</li>
                  <li><strong>6.2</strong> By using the Service, you authorize Checkmark Plagiarism to collect and process data as described in the Privacy Policy.</li>
                  <li><strong>6.3</strong> You represent that you have all necessary rights and permissions to submit any student information to the Service, and that such submission complies with applicable education privacy laws.</li>
                </ul>
              </Section>

              <Section id="7-ferpa" title="7. Educational Use and FERPA Compliance">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>7.1</strong> The Service is designed for use in educational settings and aims to comply with the Family Educational Rights and Privacy Act (FERPA) when applicable.</li>
                  <li><strong>7.2</strong> You agree to use the Service in compliance with FERPA and any applicable educational privacy laws in your jurisdiction.</li>
                </ul>
              </Section>

              <Section id="8-ip" title="8. Intellectual Property">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>8.1</strong> All rights, title, and interest in and to the Service, including all intellectual property rights, are and will remain the exclusive property of Checkmark Plagiarism and its licensors.</li>
                  <li><strong>8.2</strong> Google Classroom™, Google Docs™, Google Drive™, Google Cloud Storage™, Firestore™, and other Google-related products mentioned are trademarks of Google LLC.</li>
                </ul>
              </Section>

              <Section id="9-disclaimer" title="9. Disclaimer of Warranties">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>9.1</strong> THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</li>
                  <li><strong>9.2</strong> Checkmark Plagiarism does not warrant that the Service will be uninterrupted or error-free, that defects will be corrected, or that the Service is free of viruses or other harmful components.</li>
                </ul>
              </Section>

              <Section id="10-limitation" title="10. Limitation of Liability">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>10.1</strong> IN NO EVENT SHALL CHECKMARK PLAGIARISM™ BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</li>
                  <li><strong>10.2</strong> Checkmark Plagiarism's total liability for any claims arising from these Terms shall not exceed the amount you paid for the Service in the past 12 months.</li>
                </ul>
              </Section>

              <Section id="11-indemnification" title="11. Indemnification">
                <p>
                  You agree to defend, indemnify, and hold harmless Checkmark Plagiarism and its officers, directors, employees, and agents from any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising from your use of the Service or violation of these Terms.
                </p>
              </Section>

              <Section id="12-term" title="12. Term and Termination">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>12.1</strong> These Terms shall remain in effect until terminated by you or Checkmark Plagiarism.</li>
                  <li><strong>12.2</strong> Checkmark Plagiarism may suspend or terminate your access to the Service for violations of these Terms or for any other reason at our discretion.</li>
                  <li><strong>12.3</strong> Upon termination, your right to use the Service will immediately cease.</li>
                </ul>
              </Section>

              <Section id="13-changes" title="13. Changes to Terms">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>13.1</strong> Checkmark Plagiarism reserves the right to modify or replace these Terms at any time.</li>
                  <li><strong>13.2</strong> Material changes to the Terms will be notified to users at least 14 days prior to implementation.</li>
                  <li><strong>13.3</strong> Continued use of the Service after any modifications constitutes acceptance of the updated Terms.</li>
                </ul>
              </Section>

              <Section id="14-law" title="14. Governing Law">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of California, without regard to its conflict of law principles.
                </p>
              </Section>

              <Section id="15-contact" title="15. Contact Information">
                <p>
                  For questions or concerns regarding these Terms, please contact us at{' '}
                  <Link className="underline underline-offset-4 hover:text-primary" href="mailto:support@checkmarkplagiarism.com">
                    <Mail className="inline-block w-4 h-4 mr-1" /> support@checkmarkplagiarism.com
                  </Link>.
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
                    <ShieldCheck className="w-4 h-4" /> Terms Overview
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
                        <a className="hover:text-primary" href="#1-agreement">Agreement</a>
                        <a className="hover:text-primary" href="#2-description">Service</a>
                        <a className="hover:text-primary" href="#3-accounts">Accounts</a>
                        <a className="hover:text-primary" href="#4-license">License</a>
                        <a className="hover:text-primary" href="#5-subscriptions">Subscriptions</a>
                        <a className="hover:text-primary" href="#6-privacy">Privacy</a>
                        <a className="hover:text-primary" href="#7-ferpa">FERPA</a>
                        <a className="hover:text-primary" href="#8-ip">Intellectual Property</a>
                        <a className="hover:text-primary" href="#9-disclaimer">Disclaimer</a>
                        <a className="hover:text-primary" href="#10-limitation">Liability</a>
                        <a className="hover:text-primary" href="#11-indemnification">Indemnification</a>
                        <a className="hover:text-primary" href="#12-term">Termination</a>
                        <a className="hover:text-primary" href="#13-changes">Changes</a>
                        <a className="hover:text-primary" href="#14-law">Governing Law</a>
                        <a className="hover:text-primary" href="#15-contact">Contact</a>
                      </nav>
                    </div>
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

// Small helper component to apply consistent anchor spacing and heading style
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h3 className="mt-10 text-xl font-semibold text-foreground flex items-center gap-2">
        {title}
      </h3>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
