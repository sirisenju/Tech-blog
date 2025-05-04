import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"
import { formatDate } from "@/lib/utils"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.id === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.id === params.slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <article className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link 
        href="/"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to all posts
      </Link>
      
      {/* Post Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-medium text-foreground">{post.author.name}</div>
            <div className="flex items-center gap-2">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{post.readingTime} read</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          {post.title}
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          {post.excerpt}
        </p>
      </header>
      
      {/* Cover Image */}
      <div className="relative w-full h-72 md:h-96 mb-12 rounded-lg overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Post Content */}
      <div 
        className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      {/* Related posts would go here */}
      <div className="mt-16 pt-12 border-t border-border">
        <h2 className="text-2xl font-bold mb-8">Keep Reading</h2>
        <div className="flex flex-wrap gap-6">
          {blogPosts
            .filter(p => p.id !== post.id && p.category === post.category)
            .slice(0, 2)
            .map(relatedPost => (
              <div key={relatedPost.id} className="flex-1 min-w-[280px]">
                <Link 
                  href={`/blog/${relatedPost.id}`}
                  className="block group"
                >
                  <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mt-2">
                  {relatedPost.readingTime} read
                </p>
              </div>
            ))}
        </div>
      </div>
    </article>
  )
}
