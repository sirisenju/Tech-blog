"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { cn, formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/data/blog-posts"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-200",
        featured ? "lg:flex-row" : ""
      )}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category tag */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center rounded-full bg-black/70 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
          {post.category}
        </span>
      </div>

      {/* Image container */}
      <div className={cn(
        "relative h-60 w-full overflow-hidden bg-muted",
        featured ? "lg:h-auto lg:w-2/5" : ""
      )}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered ? "scale-105" : "scale-100"
          )}
          priority={featured}
        />
      </div>

      {/* Content */}
      <div className={cn(
        "flex flex-1 flex-col justify-between p-6",
        featured ? "lg:p-8" : ""
      )}>
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            {/* Author avatar */}
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
            <span>•</span>
            <span>{post.readingTime} read</span>
          </div>
          
          <Link href={`/blog/${post.id}`} className="group">
            <h3 className={cn(
              "font-bold tracking-tight text-foreground transition-colors mb-3 group-hover:text-primary",
              featured ? "text-2xl" : "text-xl"
            )}>
              {post.title}
            </h3>
          </Link>
          
          <p className="line-clamp-3 text-muted-foreground mb-6">
            {post.excerpt}
          </p>
        </div>
        
        <Link href={`/blog/${post.id}`}>
          <Button 
            variant="outline"
            size="sm"
            className="w-full sm:w-auto mt-4"
          >
            Read More <ChevronRight className="ml-1 h-3 w-3" />
          </Button>
        </Link>
      </div>
    </motion.article>
  )
}
