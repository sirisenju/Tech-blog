import { BlogPost } from "@/data/blog-posts"
import BlogCard from "@/components/BlogCard"

interface BlogListProps {
  posts: BlogPost[]
  category?: string
}

export default function BlogList({ posts, category }: BlogListProps) {
  // Filter posts by category if provided
  const filteredPosts = category 
    ? posts.filter(post => post.category.toLowerCase() === category.toLowerCase())
    : posts

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium">No posts found</h3>
        <p className="text-muted-foreground mt-2">
          Try changing your search or filter criteria
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredPosts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}
