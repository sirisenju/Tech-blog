import { Suspense } from "react"
import { blogPosts } from "@/data/blog-posts"
import BlogFilters from "@/components/BlogFilters"
import FeaturedBlogPosts from "@/components/FeaturedBlogPosts"
import Newsletter from "@/components/Newsletter"

export const metadata = {
  title: "Blog | Web3 & AI Insights",
  description: "Explore our collection of articles on Web3, blockchain, AI, and machine learning technologies.",
}

export default function BlogPage() {
  // Calculate categories and counts
  const categories = [
    { name: "Web3", count: blogPosts.filter(post => post.category === "Web3").length },
    { name: "AI", count: blogPosts.filter(post => post.category === "AI").length },
    { name: "Blockchain", count: blogPosts.filter(post => post.category === "Blockchain").length },
    { name: "Machine Learning", count: blogPosts.filter(post => post.category === "Machine Learning").length },
  ]

  return (
    <>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Dive into our latest insights on Web3, blockchain technology, artificial intelligence, 
            and the intersection of these revolutionary fields.
          </p>
        </header>
        
        {/* Featured Posts Section */}
        <Suspense fallback={<FeaturedPostsSkeleton />}>
          <FeaturedBlogPosts posts={blogPosts} />
        </Suspense>
        
        {/* Blog filters and posts */}
        <section>
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          <Suspense fallback={<BlogFiltersSkeleton />}>
            <BlogFilters posts={blogPosts} categories={categories} />
          </Suspense>
        </section>
      </div>
      
      {/* Newsletter Section */}
      <Newsletter />
    </>
  )
}

function FeaturedPostsSkeleton() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 h-[500px] bg-muted animate-pulse rounded-xl"></div>
        <div className="space-y-8">
          <div className="h-[220px] bg-muted animate-pulse rounded-xl"></div>
          <div className="h-[220px] bg-muted animate-pulse rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}

function BlogFiltersSkeleton() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="h-10 bg-secondary/50 animate-pulse rounded-full w-full max-w-md"></div>
        <div className="h-10 bg-secondary/50 animate-pulse rounded-lg w-full max-w-xs"></div>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array(6).fill(0).map((_, i) => (
          <div key={i} className="flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm h-[400px]">
            <div className="h-60 w-full bg-muted animate-pulse"></div>
            <div className="p-6 space-y-4">
              <div className="h-4 bg-muted animate-pulse rounded-full w-3/4"></div>
              <div className="h-6 bg-muted animate-pulse rounded-full w-full"></div>
              <div className="h-4 bg-muted animate-pulse rounded-full w-full"></div>
              <div className="h-4 bg-muted animate-pulse rounded-full w-2/3"></div>
              <div className="h-8 bg-muted animate-pulse rounded-md w-1/3 mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
