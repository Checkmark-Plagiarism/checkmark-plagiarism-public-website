// src/components/blog/post-list.tsx
// Server component. The category filter + post grid shared by all three section
// listing pages (/research, /blogs, /learning).
import Link from "next/link";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCategoryVariant, getHoverVariant } from "@/lib/blog-category-utils";
import { getPostsForSection, type Section } from "@/lib/blog";

type PostListProps = {
  section: Section;
  basePath: string;            // "/research" | "/blogs" | "/learning"
  categories: readonly string[];
  selectedCategory: string;
};

export default function PostList({
  section,
  basePath,
  categories,
  selectedCategory,
}: PostListProps) {
  const posts = getPostsForSection(section);

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => {
          if (post.categories && Array.isArray(post.categories)) {
            return post.categories.includes(selectedCategory);
          }
          return post.category === selectedCategory;
        });

  return (
    <>
      {/* Categories */}
      <section id="categories" className="py-12 bg-background border-b border-border scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <Link
                  key={category}
                  href={
                    category === "All"
                      ? `${basePath}#categories`
                      : `${basePath}?category=${encodeURIComponent(category)}#categories`
                  }
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

      {/* Posts Grid */}
      <section id="posts" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No articles here yet. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`${basePath}/${post.slug}?ref=${selectedCategory}`}
                  className="group"
                >
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
          )}
        </div>
      </section>
    </>
  );
}
