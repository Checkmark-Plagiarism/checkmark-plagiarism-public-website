import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/layout";

export const metadata = {
  title: 'Test Blog',
  description: 'Test Description',
  keywords: '',
  'opengraph-image':'',
  date: '10-05-2025',
  readTime: '7 mins',
  category: 'Teaching Tips'
};

export default function page() {
  return (
    <div className="min-h-screen bg-background">
      <Layout>
        <main>
          {/* Article Header */}
          <section className="py-8 border-b border-border">
            <div className="container mx-auto px-4">
              <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                    {metadata.category}
                  </span>
                  <span>•</span>
                  <span>{metadata.date}</span>
                  <span>•</span>
                  <span>{metadata.readTime}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {metadata.title}
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  {metadata.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{metadata.author}</span>
                  </div>

                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <Image
                    src={metadata.image}
                    alt={metadata.title}
                    height={"250"}
                    width={"250"}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Article Content */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-3">
                    Content Here
                  </div>

                  <div className="lg:col-span-1">
                    <Card className="sticky top-24">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-foreground mb-4">Article Info</h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{metadata.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{metadata.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span>{metadata.author}</span>
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-border">
                          <h4 className="font-medium text-foreground mb-3">Share this article</h4>
                          <Button variant="outline" size="sm" className="w-full">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share Article
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link href="/blog/effective-rubric-design" className="group">
                    <Card className="hover:shadow-medium transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                            Education
                          </span>
                          <span>•</span>
                          <span>10 min read</span>
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          Designing Effective Rubrics for Automated Grading
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Best practices for creating rubrics that work seamlessly with AI-powered grading systems.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link href="/blog/academic-integrity-digital-age" className="group">
                    <Card className="hover:shadow-medium transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs">
                            Academic Integrity
                          </span>
                          <span>•</span>
                          <span>7 min read</span>
                        </div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          Maintaining Academic Integrity in the Digital Age
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Strategies for fostering honest academic work while embracing educational technology.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
}

