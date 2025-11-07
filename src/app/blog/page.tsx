import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blog";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogHero from "@/sections/blog/blog-hero";
import { getCategoryVariant, getHoverVariant } from "@/lib/blog-category-utils";

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
  const categories = ["All", "Teaching", "AI Research", "Technology", "Education", "Parents"] as const;

  // Get selected cat from URL params
  const selectedCategory = typeof searchParams?.category === 'string' 
    ? searchParams.category
    : "All";
  
  const posts = await getAllBlogPosts();
  console.log("Debug posts with categories:", posts.map(p => ({ slug: p.slug, category: p.category, categories: p.categories })));

  // Filter posts based on URL parameter
  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => {
      // Support both single category and multiple categories
      if (post.categories && Array.isArray(post.categories)) {
        return post.categories.includes(selectedCategory);
      }
      return post.category === selectedCategory;
    });
  console.log(posts);

  return (
    <main>
      {/* Hero Section */}
      <BlogHero/>

      {/* Categories */}
      <section id="categories" className="py-12 bg-background border-b border-border scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;

              return (
                <Link
                  key={category}
                  href={category === "All" ? "/blog#categories" : `/blog?category=${encodeURIComponent(category)}#categories`}
                >
                  <Badge 
                    className={`px-4 py-2 cursor-pointer transition-all hover:scale-105 border ${
                      isSelected
                        ? getCategoryVariant(category)
                        : `bg-gray-50 text-gray-600 border-gray-200 ${getHoverVariant(category)}`
                    }`}
                  >
                    {category}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section id="posts" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}?ref=${selectedCategory}`} className="group">
                <Card className="h-full overflow-hidden rounded-xl shadow-medium border-2 border-border hover:shadow-lg transition-shadow">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover bg-muted"
                    height={"250"}
                    width={"450"}
                  />
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      {/* Show all categories if available, otherwise show single category */}
                      {post.categories && post.categories.length > 0 ? (
                        <>
                          {post.categories.map((cat, index) => (
                            <Badge key={index} className={`text-xs ${getCategoryVariant(cat)}`}>
                              {cat}
                            </Badge>
                          ))}
                        </>
                      ) : (
                        <Badge className={`text-xs ${getCategoryVariant(post.category)}`}>
                          {post.category}
                        </Badge>
                      )}
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
