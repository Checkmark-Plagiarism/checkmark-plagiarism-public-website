import type { Metadata } from "next";
import BlogHero from "@/sections/blog/blog-hero";
import PostList from "@/components/blog/post-list";
import { SECTION_META } from "@/lib/sections";

const SECTION = "learning" as const;
const config = SECTION_META[SECTION];

export const metadata: Metadata = {
  title: "Learning | Checkmark Plagiarism",
  description: config.heroSubtitle,
  openGraph: { images: [] },
};

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Page({ searchParams }: PageProps) {
  const selectedCategory =
    typeof searchParams?.category === "string" ? searchParams.category : "All";

  return (
    <main>
      <BlogHero title={config.heroTitle} subtitle={config.heroSubtitle} />
      <PostList
        section={SECTION}
        basePath={config.basePath}
        categories={config.categories}
        selectedCategory={selectedCategory}
      />
    </main>
  );
}
