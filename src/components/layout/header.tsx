"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { sendGAEvent } from '@next/third-parties/google';
import { Menu, X, ChevronDown } from "lucide-react";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://teach.checkmarkplagiarism.com/';

const logoImage = "/images/android-chrome-384x384.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [supportExpanded, setSupportExpanded] = useState(false);
  const [contactExpanded, setContactExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're on the home page, scroll to top
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Otherwise let the link navigate normally
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-md shadow-soft py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" onClick={handleScrollToTop} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Image
              src={logoImage}
              alt="Checkmark Plagiarism Logo"
              width="50"
              height="50"
            />
          </div>
          <span className={`font-bold text-xl ${scrolled ? "text-brand-700" : "text-white"}`}>
            Checkmark Plagiarism
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {/* TODO: Features page temporarily disabled - uncomment if needed
          <Link
            href="/features"
            className={`font-medium transition-smooth ${
              scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            Features
          </Link>
          */}
          <Link
            href="/"
            onClick={handleScrollToTop}
            className={`font-medium transition-smooth ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-medium transition-smooth ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
          >
            About
          </Link>
          <Link
            href="/pricing"
            className={`font-medium transition-smooth ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className={`font-medium transition-smooth ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
          >
            Blog
          </Link>
          {/* Contact Dropdown */}
          <div className="relative group">
            <button className={`font-medium transition-smooth flex items-center gap-1 ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}>
              Contact
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-smooth">
                  Contact Us
                </Link>
                <Link href="/cto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-smooth">
                  Contact for CTOs
                </Link>
              </div>
            </div>
          </div>
          {/* Support Dropdown*/}
          <div className="relative group">
            <button className={`font-medium transition-smooth flex items-center gap-1 ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}>
              Support
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link href="/teacher-support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-smooth">
                  Teacher Support
                </Link>
                <Link href="/student-support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-smooth">
                  Student Support
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {/* Desktop CTAs - hidden on mobile */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={`${APP_URL}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendGAEvent({ event: 'signin_button_clicked' })}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-smooth h-9 px-4 ${scrolled
              ? "hover:bg-brand-700 hover:text-white"
              : "border-2 border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-bold"
              }`}
          >
            Sign In
          </Link>
          <Link
            href="/demo"
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-smooth h-9 px-4 ${scrolled
              ? "bg-brand-300 text-brand-700 hover:bg-brand-400 shadow-soft hover:shadow-medium"
              : "bg-white text-brand-900 hover:bg-white/90 shadow-medium hover:shadow-strong font-bold"
              }`}
          >
            Try Demo
          </Link>
        </div>

        {/* Mobile hamburger button */}
        <button
          className={`md:hidden p-2 rounded-lg transition-smooth ${
            scrolled ? "text-foreground hover:bg-gray-100" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-[280px] max-w-[80vw] bg-white shadow-strong transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="font-bold text-lg text-brand-700">Menu</span>
          <button
            className="p-2 rounded-lg text-foreground hover:bg-gray-100 transition-smooth"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col p-4 gap-1 overflow-y-auto h-[calc(100%-140px)]">
          <Link
            href="/"
            onClick={(e) => { handleScrollToTop(e); setMobileMenuOpen(false); }}
            className="px-4 py-3 rounded-lg text-foreground font-medium hover:bg-brand-50 hover:text-brand-700 transition-smooth"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 rounded-lg text-foreground font-medium hover:bg-brand-50 hover:text-brand-700 transition-smooth"
          >
            About
          </Link>
          <Link
            href="/pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 rounded-lg text-foreground font-medium hover:bg-brand-50 hover:text-brand-700 transition-smooth"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-3 rounded-lg text-foreground font-medium hover:bg-brand-50 hover:text-brand-700 transition-smooth"
          >
            Blog
          </Link>

          {/* Contact accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-foreground font-medium hover:bg-brand-50 hover:text-brand-700 transition-smooth"
              onClick={() => setContactExpanded(!contactExpanded)}
            >
              Contact
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${contactExpanded ? "rotate-180" : ""}`} />
            </button>
            {contactExpanded && (
              <div className="ml-4 flex flex-col gap-1">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-700 transition-smooth"
                >
                  Contact Us
                </Link>
                <Link
                  href="/cto"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-700 transition-smooth"
                >
                  Contact for CTOs
                </Link>
              </div>
            )}
          </div>

          {/* Support accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-foreground font-medium hover:bg-brand-50 hover:text-brand-700 transition-smooth"
              onClick={() => setSupportExpanded(!supportExpanded)}
            >
              Support
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${supportExpanded ? "rotate-180" : ""}`} />
            </button>
            {supportExpanded && (
              <div className="ml-4 flex flex-col gap-1">
                <Link
                  href="/teacher-support"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-700 transition-smooth"
                >
                  Teacher Support
                </Link>
                <Link
                  href="/student-support"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-700 transition-smooth"
                >
                  Student Support
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* CTAs at bottom of mobile menu */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white flex flex-col gap-3">
          <Link
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { sendGAEvent({ event: 'signin_button_clicked' }); setMobileMenuOpen(false); }}
            className="inline-flex items-center justify-center rounded-lg text-sm font-semibold h-11 px-4 border border-brand-300 text-brand-700 hover:bg-brand-50 transition-smooth"
          >
            Sign In
          </Link>
          <Link
            href="/demo"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-lg text-sm font-semibold h-11 px-4 bg-brand-600 text-white hover:bg-brand-700 shadow-soft transition-smooth"
          >
            Try Demo
          </Link>
        </div>
      </div>
    </header>
  );
};
