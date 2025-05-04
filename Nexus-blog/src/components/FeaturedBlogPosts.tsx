import { BlogPost } from "@/data/blog-posts"
import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface FeaturedBlogPostsProps {
  posts: BlogPost[]
}

export default function FeaturedBlogPosts({ posts }: FeaturedBlogPostsProps) {
  // Take the first 3 posts for the featured section
  const featuredPosts = posts.slice(0, 3)
  
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main featured post */}
        <div className="lg:col-span-2">
          <FeaturedPostLarge post={featuredPosts[0]} />
        </div>
        
        {/* Secondary featured posts */}
        <div className="space-y-8">
          <FeaturedPostSmall post={featuredPosts[1]} />
          <FeaturedPostSmall post={featuredPosts[2]} />
        </div>
      </div>
    </section>
  )
}

function FeaturedPostLarge({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`} className="group block h-full">
      <div className="relative h-full rounded-xl overflow-hidden border border-border bg-card flex flex-col">
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center rounded-full bg-black/70 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <div className="relative h-6 w-6 rounded-full overflow-hidden">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span>{post.author.name}</span>
            <span>•</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          
          <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground mb-6 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="mt-auto flex items-center text-primary font-medium">
            Read Article <ArrowRight size={16} className="ml-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}

function FeaturedPostSmall({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`} className="group block">
      <div className="rounded-xl overflow-hidden border border-border bg-card flex flex-col h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center rounded-full bg-black/70 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readingTime} read</span>
          </div>
          
          <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  )
}
