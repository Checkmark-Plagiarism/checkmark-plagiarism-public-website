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

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tips, and best practices for academic integrity, plagiarism detection, and modern teaching methods.
            </p>
          </div>
        </div>
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
