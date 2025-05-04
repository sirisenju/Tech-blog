import BlogCard from "@/components/BlogCard"
import type { BlogPost } from "@/data/blog-posts"

interface FeaturedPostProps {
  post: BlogPost
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Featured Post</h2>
      </div>
      
      <BlogCard post={post} featured />
    </section>
  )
}
