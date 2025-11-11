import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, Shield, Calendar, Link as LinkIcon, Mail, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Security — Checkmark Plagiarism',
  description:
    'Our comprehensive security measures, data protection practices, and compliance standards for educational data safety.',
  openGraph: { images: [''] },
};

export const meta = {
  title: 'Security',
  description:
    'Our comprehensive security measures, data protection practices, and compliance standards for educational data safety.',
  date: 'November 11, 2025',
  category: 'Security',
  readTime: '~6 min read',
};

export default function SecurityPage() {
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
                We prioritize the security and privacy of educational data. Our comprehensive security framework ensures that student information and academic content remain protected at all times.
              </p>

              <Section id="hecvat-compliance" title="HECVAT Compliance">
                <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-foreground">HECVAT-Lite Completed</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Our Higher Education Community Vendor Assessment Toolkit (HECVAT) has been completed to demonstrate our commitment to educational security standards.
                  </p>
                </div>
                <p>
                  To request our completed HECVAT form for your institution&apos;s review, please contact us at{' '}
                  <Link className="underline underline-offset-4 hover:text-primary" href="mailto:support@checkmarkplagiarism.com">
                    support@checkmarkplagiarism.com
                  </Link>.
                </p>
              </Section>

              <Section id="data-encryption" title="Data Encryption">
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>In Transit:</strong> All data transmission is protected using TLS 1.2+ encryption protocols, ensuring secure communication between your browser and our servers.</li>
                  <li><strong>At Rest:</strong> All stored data is encrypted using AES-256 encryption standards via Google Cloud&apos;s enterprise-grade security infrastructure.</li>
                  <li><strong>Key Management:</strong> Encryption keys are managed through Google Cloud&apos;s secure key management system with regular rotation protocols.</li>
                </ul>
              </Section>

              <Section id="data-storage" title="Data Storage and Location">
                <p><strong>Geographic Location:</strong> All data is stored exclusively in United States-based Google Cloud data centers, ensuring compliance with domestic data residency requirements.</p>
                <p><strong>Storage Infrastructure:</strong> We utilize Google Cloud Platform (GCP) for all data storage needs, leveraging their industry-leading security certifications and infrastructure reliability.</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li>Cloud-based storage with 99.9% uptime guarantee</li>
                  <li>Redundant storage across multiple data centers</li>
                  <li>Automated backup systems with point-in-time recovery</li>
                </ul>
              </Section>

              <Section id="data-retention" title="Data Retention Policy">
                <p>We maintain a strict data retention policy to ensure student privacy while providing necessary educational services:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>Active Data:</strong> Student data is retained only as long as necessary for analysis and teacher access to support educational objectives.</li>
                  <li><strong>Deletion Requests:</strong> Data may be deleted upon request by educators or institutions at any time, with immediate processing of such requests.</li>
                  <li><strong>Automatic Purging:</strong> Inactive data is routinely purged after 12 months to minimize data storage and maintain privacy standards.</li>
                  <li><strong>Legal Compliance:</strong> Retention practices align with FERPA requirements and institutional data governance policies.</li>
                </ul>
              </Section>

              <Section id="incident-management" title="Incident Management and Response">
                <p>We maintain a comprehensive incident response framework to address any potential security concerns:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>Response Plan:</strong> A documented incident response plan is in place with clear escalation procedures and communication protocols.</li>
                  <li><strong>Monitoring:</strong> Continuous security monitoring through Google Cloud tools with automated alerts for suspicious activities.</li>
                  <li><strong>Testing:</strong> Formal policy testing and incident response drills are conducted quarterly to ensure readiness.</li>
                  <li><strong>Notification:</strong> Affected institutions will be notified promptly in the event of any security incident affecting their data.</li>
                </ul>
              </Section>

              <Section id="disaster-recovery" title="Disaster Recovery and Business Continuity">
                <p>Our business continuity planning ensures minimal service disruption and data protection:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>Daily Backups:</strong> Automated daily backups are maintained in separate Google Cloud Platform regions for geographic redundancy.</li>
                  <li><strong>High Availability:</strong> Systems are designed with high availability architecture to minimize downtime and ensure consistent access.</li>
                  <li><strong>Recovery Protocols:</strong> Documented recovery procedures are in place and tested biannually to verify effectiveness.</li>
                  <li><strong>Service Restoration:</strong> Recovery time objectives (RTO) and recovery point objectives (RPO) are defined to ensure rapid service restoration.</li>
                </ul>
              </Section>

              <Section id="security-certifications" title="Security Standards and Certifications">
                <p>Our infrastructure leverages Google Cloud&apos;s comprehensive security certifications and compliance standards:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>SOC 2 Type II:</strong> Service Organization Control 2 certification for security, availability, and confidentiality.</li>
                  <li><strong>ISO 27001:</strong> International standard for information security management systems.</li>
                  <li><strong>FedRAMP:</strong> Federal Risk and Authorization Management Program compliance for government-standard security.</li>
                  <li><strong>GDPR:</strong> General Data Protection Regulation compliance for international data protection standards.</li>
                </ul>
              </Section>

              <Section id="access-controls" title="Third-Party Testing and Access Controls">
                <p>We implement industry-standard security practices and access management:</p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li><strong>Authentication:</strong> Multi-factor authentication (MFA) requirements for all administrative access.</li>
                  <li><strong>Role-Based Access:</strong> Strict role-based access controls (RBAC) limit system access to authorized personnel only.</li>
                  <li><strong>Regular Audits:</strong> Periodic security audits and penetration testing to identify and address potential vulnerabilities.</li>
                  <li><strong>Third-Party Assessments:</strong> Independent security assessments conducted by qualified security firms.</li>
                  <li><strong>Least Privilege:</strong> All system access follows the principle of least privilege, granting only necessary permissions.</li>
                </ul>
              </Section>

              <Section id="privacy-integration" title="Privacy and Security Integration">
                <p>
                  Our security measures work hand-in-hand with our privacy commitments outlined in our{' '}
                  <Link className="underline underline-offset-4 hover:text-primary" href="/privacy-policy">
                    Privacy Policy
                  </Link>
                  . This includes:
                </p>
                <ul className="marker:text-muted-foreground list-disc pl-6">
                  <li>Secure processing of student data for educational purposes only</li>
                  <li>No use of student data for AI training or commercial purposes</li>
                  <li>Institutional ownership and control of all submitted academic content</li>
                  <li>Transparent data handling practices with full audit trails</li>
                </ul>
              </Section>

              <Section id="contact-security" title="Security Contact">
                <p>
                  For security-related questions, incident reports, or to request security documentation, please contact our security team:
                </p>
                <p>
                  <Link className="underline underline-offset-4 hover:text-primary" href="mailto:support@checkmarkplagiarism.com">
                    <Mail className="inline-block w-4 h-4 mr-1" /> support@checkmarkplagiarism.com
                  </Link>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Security reports are monitored 24/7 and will receive priority response within 24 hours.
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
                    <Shield className="w-4 h-4" /> Security Info
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
                        <a className="hover:text-primary" href="#hecvat-compliance">HECVAT Compliance</a>
                        <a className="hover:text-primary" href="#data-encryption">Data Encryption</a>
                        <a className="hover:text-primary" href="#data-storage">Data Storage</a>
                        <a className="hover:text-primary" href="#data-retention">Data Retention</a>
                        <a className="hover:text-primary" href="#incident-management">Incident Management</a>
                        <a className="hover:text-primary" href="#disaster-recovery">Disaster Recovery</a>
                        <a className="hover:text-primary" href="#security-certifications">Certifications</a>
                        <a className="hover:text-primary" href="#access-controls">Access Controls</a>
                        <a className="hover:text-primary" href="#privacy-integration">Privacy Integration</a>
                        <a className="hover:text-primary" href="#contact-security">Contact</a>
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

// Helper component for consistent anchor spacing and heading style
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h3 className="mt-10 text-xl font-semibold text-foreground">{title}</h3>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
