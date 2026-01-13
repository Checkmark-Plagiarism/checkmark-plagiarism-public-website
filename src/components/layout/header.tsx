"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://teach.checkmarkplagiarism.com/';

const logoImage = "/images/android-chrome-384x384.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
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
            className={`font-medium transition-smooth ${
              scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className={`font-medium transition-smooth ${
              scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className={`font-medium transition-smooth ${
              scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            Blog
          </Link>
          {/* Contact Dropdown */}
          <div className="relative group">
            <button className={`font-medium transition-smooth flex items-center gap-1 ${
              scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
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
            <button className={`font-medium transition-smooth flex items-center gap-1 ${
              scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
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
        <div className="flex items-center gap-3">
          <Link
            href={`${APP_URL}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-smooth h-9 px-4 ${
              scrolled
              ? "hover:bg-brand-700 hover:text-white"
              : "border-2 border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-bold"
            }`}
          >
            Sign In
          </Link>
          <Link
            href="/demo"
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-smooth h-9 px-4 ${
              scrolled
              ? "bg-brand-300 text-brand-700 hover:bg-brand-400 shadow-soft hover:shadow-medium"
              : "bg-white text-brand-900 hover:bg-white/90 shadow-medium hover:shadow-strong font-bold"
            }`}
          >
            Try Demo
          </Link>
        </div>
      </div>
    </header>
  );
};
