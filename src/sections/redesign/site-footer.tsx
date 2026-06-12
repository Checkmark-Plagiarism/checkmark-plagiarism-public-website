import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const logoImage = "/images/android-chrome-384x384.png";

const socialLinks = {
  twitter: "#",
  linkedin: "https://www.linkedin.com/company/checkmark-plagiarism/",
  facebook: "#",
  instagram: "https://www.instagram.com/checkmark_plagiarism/?igsh=MW9vZGY0dTRrNWw3Zg%3D%3D",
};

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Integrations", href: "/#integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Image src={logoImage} alt="Checkmark Plagiarism Logo" width={50} height={50} />
              </div>
              <span className="font-bold text-2xl text-white">Checkmark Plagiarism</span>
            </div>
            <p className="text-white/70 mb-6 max-w-xs">
              Empowering educators with transparent AI detection tools built for the modern classroom.
            </p>
            <div className="flex gap-4">
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-white mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/70 hover:text-white transition-smooth">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© 2025 Checkmark Plagiarism. All rights reserved.</p>
          <p className="text-white/60 text-sm">Built with transparency and trust for education</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
