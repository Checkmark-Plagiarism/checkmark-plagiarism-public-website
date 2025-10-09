import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Checkmark Plagiarism",
  description: "",
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
    <html lang="en">
      <GoogleAnalytics gaId="G-BC30LJNV0K" />
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
