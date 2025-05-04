"use client"

import { useState, useEffect } from "react"
import { BlogPost } from "@/data/blog-posts"
import BlogSearch from "@/components/BlogSearch"
import CategoryPills from "@/components/CategoryPills"
import BlogList from "@/components/BlogList"
import BlogPagination from "@/components/BlogPagination"

interface Category {
  name: string
  count: number
}

interface BlogFiltersProps {
  posts: BlogPost[]
  categories: Category[]
}

export default function BlogFilters({ posts, categories }: BlogFiltersProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  
  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, searchQuery])
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
  }
  
  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of results
    window.scrollTo({
      top: document.getElementById('blog-results')?.offsetTop ?? 0,
      behavior: 'smooth'
    })
  }
  
  // Filter posts by category and search query
  const filteredPosts = posts.filter(post => {
    // Filter by category
    const categoryMatch = 
      activeCategory === "all" || 
      post.category.toLowerCase() === activeCategory.toLowerCase()
    
    // Filter by search query
    const searchMatch = 
      !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    
    return categoryMatch && searchMatch
  })
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <CategoryPills 
          categories={categories}
          activeCategory={activeCategory}
          onChange={handleCategoryChange}
        />
        
        <BlogSearch onSearch={handleSearch} />
      </div>
      
      <div id="blog-results">
        {filteredPosts.length > 0 ? (
          <>
            <BlogList posts={currentPosts} />
            <BlogPagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No posts found</h3>
            <p className="text-muted-foreground">
              Try changing your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
