import { GoogleAnalytics } from '@next/third-parties/google';
import Script from "next/script";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Checkmark Plagiarism",
  description: "AI-powered plagiarism detection and autograding designed by teachers, for teachers. Detect AI-generated content, analyze keystrokes, and grade faster with transparent, revision-aware tools.",
  openGraph: {
    images: [
      "https://public.checkmarkplagiarism.com/images/android-chrome-384x384.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={caveat.variable}>
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "vezozokq4l");
        `}
      </Script>
      <GoogleAnalytics gaId="G-MKJNRM77E4" />
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
