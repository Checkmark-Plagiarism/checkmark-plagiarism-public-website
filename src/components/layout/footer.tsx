import Image from "next/image";

const logoImage = '/images/android-chrome-192x192.png';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={logoImage}
                height="35"
                width="35"
                alt="Checkmark Plagiarism Logo"
                className=""
              />
              <span className="text-xl font-bold text-foreground">Checkmark</span>
            </div>
            <p className="text-muted-foreground">
              Plagiarism detection and auto-grading designed by teachers, for teachers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Auto Grading</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Canvas LMS</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Google Classroom</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="/blog" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="/terms-of-service" className="hover:text-foreground transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Checkmark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
