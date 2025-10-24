import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const logoImage = "/images/android-chrome-384x384.png";

const Footer = () => {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/checkmark-plagiarism/",
    instagram: "https://www.instagram.com/checkmark_plagiarism/?igsh=MW9vZGY0dTRrNWw3Zg%3D%3D",
    facebook: "#", // TODO: Get link once profile is up
    twitter: "#", // TODO: Get link once profile is up
  }
  
  
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Integrations", "Pricing", "Security", "Updates"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API Reference", "Case Studies", "Blog", "Webinars"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press Kit", "Partners", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "FERPA Compliance"],
    },
  ];

  const getLinkHref = (linkText: string): string => {
    const linkMap: { [key: string]: string } = {
      // Product
      "Features": "/features",
      "Integrations": "/#integrations",
      "Pricing": "/pricing",
      "Security": "#", // TODO: Create / find page
      "Updates": "#", // TODO: Create / find page
      // Resources
      "Documentation": "#", // TODO: Create / find page
      "API Reference": "#", // TODO: Create / find page
      "Case Studies": "#", // TODO: Create / find page
      "Blog": "/blog",
      "Webinars": "#", // TODO: Create / find page
      // Company
      "About Us": "/about",
      "Careers": "#", // TODO: Create / find page
      "Press Kit": "#", // TODO: Create / find page 
      "Partners": "#", // TODO: Create / find page 
      "Contact": "/contact",
      // Legal
      "Privacy Policy": "/privacy-policy",
      "Terms of Service": "/terms-of-service",
      "Cookie Policy": " #", // TODO: Create / find page
      "FERPA Compliance": "#", // TODO: Create / find page
    };
    return linkMap[linkText] || "#";
  };

  return (
    <footer className="bg-brand-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Image
                  src={logoImage}
                  alt="Checkmark Plagiarism Logo"
                  width="50"
                  height="50"
                />
              </div>
              <span className="font-bold text-2xl text-white">Checkmark Plagiarism</span>
            </div>
            <p className="text-white/70 mb-6 max-w-xs">
              Empowering educators with transparent AI detection tools built for the modern classroom.
            </p>
            <div className="flex gap-4">
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-smooth flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={getLinkHref(link)} className="text-white/70 hover:text-white transition-smooth">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2025 Checkmark Plagiarism. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Built with transparency and trust for education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
