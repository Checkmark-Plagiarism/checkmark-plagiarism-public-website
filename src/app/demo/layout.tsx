import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Try Checkmark Demo — Checkmark Plagiarism",
  description: "Experience Checkmark's AI detection and autograding firsthand. Submit a Google Doc to see how our plagiarism detector and autograder work. Privacy guaranteed, essays auto-deleted after 7 days.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
