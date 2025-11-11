import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, Accessibility, Calendar, Link as LinkIcon, Mail, CheckCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Accessibility — Checkmark Plagiarism',
  description:
    'Our commitment to inclusive design and WCAG 2.1 AA conformance for all users, including those using assistive technologies.',
  openGraph: { images: [''] },
};

export const meta = {
  title: 'Accessibility',
  description:
    'Our commitment to inclusive design and WCAG 2.1 AA conformance for all users, including those using assistive technologies.',
  date: 'November 11, 2025',
  category: 'Accessibility',
  readTime: '~5 min read',
};

// WCAG audit results data
const wcagResults = [
  { guideline: '1.1.1 Non-text Content', status: 'Pass', notes: 'All images and custom UI elements include alternative text or accessible names.' },
  { guideline: '1.2.x Multimedia (Audio/Video)', status: 'Pass', notes: 'Captions and audio descriptions are provided for prerecorded content.' },
  { guideline: '1.3.1 Info and Relationships', status: 'Pass', notes: 'Semantic structure, table markup, and ARIA roles are properly used.' },
  { guideline: '1.3.2 Meaningful Sequence', status: 'Pass', notes: 'Content is presented in a logical reading order even without CSS.' },
  { guideline: '1.3.3 Sensory Characteristics', status: 'Pass', notes: 'Instructions do not rely on color or sensory cues alone.' },
  { guideline: '1.4.x Visual Presentation (Reflow, Spacing)', status: 'Pass', notes: 'All visual components support zoom and spacing adjustments.' },
  { guideline: '2.1.1 Keyboard', status: 'Pass', notes: 'All functionality is keyboard-accessible, including modals and playback tools.' },
  { guideline: '2.1.2 No Keyboard Trap', status: 'Pass', notes: 'Users can tab in/out of all interactive components.' },
  { guideline: '2.4.3 Focus Order', status: 'Pass', notes: 'Logical tab order is preserved across views.' },
  { guideline: '2.4.7 Focus Visible', status: 'Pass', notes: 'All focusable elements show a visible focus ring.' },
  { guideline: '3.3.1 Error Identification', status: 'Pass', notes: 'Forms and validation errors are clearly identified and described.' },
  { guideline: '4.1.2 Name, Role, Value', status: 'Pass', notes: 'All widgets expose appropriate ARIA names, roles, and states.' },
];

export default function AccessibilityPage() {
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
                Checkmark Plagiarism is committed to providing an inclusive experience for all users. Our platform is developed in alignment with accessibility best practices to ensure educators and students, including those using assistive technologies, can use our tools effectively.
              </p>

              <Section id="wcag-conformance" title="WCAG Conformance">
                <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-foreground">WCAG 2.1 Level AA Conformance</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We have completed an accessibility audit in June 2025 based on the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. The assessment found that Checkmark Plagiarism substantially conforms to the guidelines.
                  </p>
                </div>
                <p>
                  Our commitment to accessibility ensures that all users, regardless of their abilities or the assistive technologies they use, can effectively access and interact with our educational tools.
                </p>
              </Section>

              <Section id="audit-results" title="Audit Results Summary">
                <p>The following table summarizes our WCAG 2.1 Level AA conformance results from our June 2025 accessibility audit:</p>
                
                <div className="not-prose overflow-x-auto mt-4">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">WCAG Guideline</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Status</th>
                        <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wcagResults.map((result, index) => (
                        <tr key={index} className="hover:bg-muted/30">
                          <td className="border border-border px-4 py-3 text-sm font-medium text-foreground">
                            {result.guideline}
                          </td>
                          <td className="border border-border px-4 py-3 text-sm">
                            <span className="inline-flex items-center gap-1 text-green-700 dark:text-green-400">
                              <CheckCircle className="w-4 h-4" />
                              {result.status}
                            </span>
                          </td>
                          <td className="border border-border px-4 py-3 text-sm text-muted-foreground">
                            {result.notes}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6">
                  <Link 
                    href="https://drive.google.com/file/d/1CeAW6PezCpUlYIVSvqJNKw_fx6i53JTd/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <FileText className="w-4 h-4" />
                    View Full WCAG Audit Report
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <p className="text-sm text-muted-foreground mt-2">
                    Complete technical audit report with detailed WCAG criteria assessment.
                  </p>
                </div>
              </Section>

              <Section id="key-features" title="Key Accessibility Features">
                <p>Our platform includes the following accessibility features:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>Keyboard Navigation:</strong> Full keyboard accessibility for all interactive elements, including modals, forms, and navigation components.</li>
                  <li><strong>Screen Reader Support:</strong> Comprehensive ARIA labeling and semantic HTML structure for optimal screen reader compatibility.</li>
                  <li><strong>Visual Design:</strong> High contrast ratios, scalable text, and focus indicators that meet or exceed WCAG requirements.</li>
                  <li><strong>Responsive Design:</strong> Content reflows appropriately at 200% zoom without loss of functionality.</li>
                  <li><strong>Error Handling:</strong> Clear, descriptive error messages and form validation that works with assistive technologies.</li>
                  <li><strong>Alternative Text:</strong> All meaningful images and UI elements include appropriate alternative text descriptions.</li>
                </ul>
              </Section>

              <Section id="vpat" title="Voluntary Product Accessibility Template (VPAT)">
                <p>
                  We are currently preparing a comprehensive VPAT based on WCAG 2.1 AA criteria. This document provides detailed information about how our product conforms to accessibility standards and is particularly useful for institutional procurement and compliance reviews.
                </p>
                <p>
                  If your institution requires VPAT documentation for procurement or compliance review, we are happy to provide a working draft. Please contact our accessibility team for the most current version.
                </p>
              </Section>

              <Section id="ongoing-commitment" title="Ongoing Accessibility Commitment">
                <p>Accessibility is not a one-time effort but an ongoing commitment. We continuously work to:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>Regular Testing:</strong> Conduct periodic accessibility audits and user testing with assistive technology users.</li>
                  <li><strong>Staff Training:</strong> Ensure our development team stays current with accessibility best practices and guidelines.</li>
                  <li><strong>User Feedback:</strong> Actively incorporate feedback from users with disabilities to improve our platform.</li>
                  <li><strong>Standards Compliance:</strong> Stay updated with evolving accessibility standards and implement improvements accordingly.</li>
                  <li><strong>Design Integration:</strong> Consider accessibility requirements from the initial design phase of all new features.</li>
                </ul>
              </Section>

              <Section id="assistive-technologies" title="Supported Assistive Technologies">
                <p>Our platform has been tested and verified to work with:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>Screen Readers:</strong> NVDA, JAWS, VoiceOver, and TalkBack</li>
                  <li><strong>Voice Recognition:</strong> Dragon NaturallySpeaking and similar voice control software</li>
                  <li><strong>Keyboard Navigation:</strong> External keyboards and switch-based input devices</li>
                  <li><strong>Magnification:</strong> ZoomText, built-in browser zoom, and operating system magnifiers</li>
                  <li><strong>Alternative Input:</strong> Head mice, eye-tracking systems, and other alternative input devices</li>
                </ul>
              </Section>

              <Section id="feedback-contact" title="Feedback and Contact">
                <p>
                  If you encounter any accessibility issues or have suggestions for improvement, please reach out to us. We value user feedback and actively work to improve the accessibility of our platform.
                </p>
                <p>
                  <Link className="underline underline-offset-4 hover:text-primary" href="mailto:support@checkmarkplagiarism.com">
                    <Mail className="inline-block w-4 h-4 mr-1" /> support@checkmarkplagiarism.com
                  </Link>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Accessibility reports and feedback are monitored daily and receive priority response.
                </p>

                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-foreground mb-2">When reporting accessibility issues, please include:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>The specific page or feature where you encountered the issue</li>
                    <li>The assistive technology or browser you were using</li>
                    <li>A description of what you expected to happen vs. what actually happened</li>
                    <li>Your operating system and browser version</li>
                  </ul>
                </div>
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
                    <Accessibility className="w-4 h-4" /> Accessibility Info
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
                        <a className="hover:text-primary" href="#wcag-conformance">WCAG Conformance</a>
                        <a className="hover:text-primary" href="#audit-results">Audit Results</a>
                        <a className="hover:text-primary" href="#key-features">Key Features</a>
                        <a className="hover:text-primary" href="#vpat">VPAT</a>
                        <a className="hover:text-primary" href="#ongoing-commitment">Ongoing Commitment</a>
                        <a className="hover:text-primary" href="#assistive-technologies">Assistive Tech</a>
                        <a className="hover:text-primary" href="#feedback-contact">Feedback</a>
                      </nav>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-2">Accessibility Standard</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-muted-foreground">WCAG 2.1 Level AA</span>
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

// Helper component for consistent anchor spacing and heading style
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h3 className="mt-10 text-xl font-semibold text-foreground">{title}</h3>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
