import { blogPosts } from "@/data/blog-posts"
import Hero from "@/components/Hero"
import FeaturedPost from "@/components/FeaturedPost"
import BlogList from "@/components/BlogList"
import CategoryFilters from "@/components/CategoryFilters"
import Newsletter from "@/components/Newsletter"

export default function HomePage() {
  // Get the featured post (latest one)
  const featuredPost = blogPosts[0]
  
  // Get the rest of the posts
  const recentPosts = blogPosts.slice(1)
  
  // Calculate categories and counts
  const categories = [
    { name: "Web3", count: blogPosts.filter(post => post.category === "Web3").length },
    { name: "AI", count: blogPosts.filter(post => post.category === "AI").length },
    { name: "Blockchain", count: blogPosts.filter(post => post.category === "Blockchain").length },
    { name: "Machine Learning", count: blogPosts.filter(post => post.category === "Machine Learning").length },
  ]

  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Featured Post */}
        <FeaturedPost post={featuredPost} />
        
        {/* Latest Posts Section */}
        <section id="latest-posts" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
          </div>
          
          {/* Categories filter */}
          <div id="categories" className="mb-8">
            <CategoryFilters 
              categories={categories}
            />
          </div>
          
          {/* Blog posts grid */}
          <BlogList posts={recentPosts} />
        </section>
        
        {/* Newsletter Section */}
        <Newsletter />
      </div>
    </div>
  )
}
