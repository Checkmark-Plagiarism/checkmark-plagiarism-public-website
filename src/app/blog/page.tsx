import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Checkmark Plagiarism Blogs",
  description: "",
  openGraph: {
    images: [],
  },
};

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Page({ searchParams }: PageProps) {
  // if you want to keep using `query`, just alias it:
  // const query = searchParams ?? {};

  const categories = ["All", "Teaching Tips", "Technology", "Education", "Academic Integrity"] as const;

  const getCategoryVariant = (category: string | undefined) => {
    switch (category) {
      case "Teaching Tips":
        return "teaching";
      case "Technology":
        return "technology";
      case "Education":
        return "education";
      case "Academic Integrity":
        return "academic";
      default:
        return "outline";
    }
  };

  const posts = await getAllBlogPosts();
console.log(posts);
  return (
    <main>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#2F58A5] via-[#2A4E93] to-[#1F3E76] py-20">
        {/* subtle grid / glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60rem 30rem at 50% -10%, rgba(255,255,255,0.10), transparent 40%), linear-gradient(transparent 0, rgba(255,255,255,0.04) 1px), linear-gradient(90deg, transparent 0, rgba(255,255,255,0.04) 1px)",
            backgroundSize: "auto, 30px 30px, 30px 30px",
          }}
        />

        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/80 ring-1 ring-white/20 backdrop-blur">
              Checkmark Plagiarism Blog
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white">
              Blog
            </h1>

            <p className="mt-4 text-lg md:text-xl text-[#E6ECF3]">
              Insights, tips, and best practices for academic integrity, plagiarism
              detection, and modern teaching methods.
            </p>
          </div>
        </div>

        {/* light gray base to echo site palette */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-[#E9EEF6]" />
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={getCategoryVariant(category)}
                className="px-4 py-2 cursor-pointer transition-all hover:scale-105"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full overflow-hidden hover:shadow-medium transition-shadow">
                  <div className="aspect-video bg-muted overflow-hidden" />
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Badge variant={getCategoryVariant(post.category)} className="text-xs">
                        {post.category}
                      </Badge>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
