import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const logoImage = '/images/android-chrome-192x192.png';

const Header = () => {
  return (
    <div className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoImage}
              height="35"
              width="35"
              alt="Checkmark Plagiarism Logo"
              className=""
            />
            <span className="text-xl font-bold text-foreground">Checkmark Plagiarism</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#grading" className="text-muted-foreground hover:text-foreground transition-colors">Auto Grading</a>
            <a href="#reports" className="text-muted-foreground hover:text-foreground transition-colors">Reports</a>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
