"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { LinkButton } from "@/components/ui/link";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Image
              src={logoImage}
              alt="Checkmark Plagiarism Logo"
              width="50"
              height="50"
            />
          </div>
          <span className={`font-bold text-xl ${scrolled ? "text-brand-900" : "text-white"}`}>
            Checkmark Plagiarism
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/features"
            className={`font-medium transition-smooth ${
              scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className={`font-medium transition-smooth ${
              scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            How It Works
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
          <Link
            href="/contact"
            className={`font-medium transition-smooth ${
              scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LinkButton
            href="/"
            variant={scrolled ? "ghost" : "outline-white"}
            size="sm"
          >
            Sign In
          </LinkButton>
          <LinkButton
            href="/"
            variant={scrolled ? "default" : "hero"}
            size="sm"
          >
            Try Demo
          </LinkButton>
        </div>
      </div>
    </header>
  );
};
