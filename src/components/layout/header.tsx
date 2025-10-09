import { LinkButton } from "@/components/ui/link";
import Link from "next/link";
import Image from "next/image";

const logoImage = "/images/android-chrome-384x384.png";

const Header = () => {
  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-border
        /* glass core */
        bg-background/55 backdrop-blur-lg backdrop-saturate-150
        /* fallback if no backdrop support: slightly more opaque */
        supports-[backdrop-filter]:bg-background/45
      "
    >
      {/* subtle glass highlight */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/30 dark:bg-white/10" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/10 to-transparent dark:from-white/5" />
      </div>

      <div className="container mx-auto px-4">
        <div className="relative flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoImage}
              height={35}
              width={35}
              alt="Checkmark Plagiarism Logo"
              className=""
            />
            <span className="text-xl font-bold text-foreground">Checkmark Plagiarism</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-muted-background hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/blog" className="text-muted-background hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/features/pricing" className="text-muted-background hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-muted-background hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://teach.checkmarkplagiarism.com" className="backdrop-blur-0 mr-5">
              Sign In
            </a>
            <LinkButton href="/contact" variant="hero" className="shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] hover:cursor-pointer">
              Get Started
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
