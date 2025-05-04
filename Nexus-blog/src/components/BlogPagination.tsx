"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function BlogPagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: BlogPaginationProps) {
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []
    
    // Always show first page
    pages.push(1)
    
    // Calculate range around current page
    let start = Math.max(2, currentPage - 1)
    let end = Math.min(totalPages - 1, currentPage + 1)
    
    // Add ellipsis after first page if needed
    if (start > 2) {
      pages.push('ellipsis-start')
    }
    
    // Add pages in range
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
    
    // Add ellipsis before last page if needed
    if (end < totalPages - 1) {
      pages.push('ellipsis-end')
    }
    
    // Always show last page if more than 1 page
    if (totalPages > 1) {
      pages.push(totalPages)
    }
    
    return pages
  }
  
  const pageNumbers = getPageNumbers()
  
  if (totalPages <= 1) return null
  
  return (
    <nav className="flex justify-center items-center mt-12" aria-label="Pagination">
      {/* Previous page button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-border mr-2 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>
      
      {/* Page numbers */}
      <div className="flex items-center space-x-2">
        {pageNumbers.map((page, index) => {
          if (page === 'ellipsis-start' || page === 'ellipsis-end') {
            return (
              <span 
                key={`ellipsis-${index}`} 
                className="flex items-center justify-center h-10 w-10 text-muted-foreground"
              >
                ...
              </span>
            )
          }
          
          const isActive = page === currentPage
          
          return (
            <motion.button
              key={`page-${page}`}
              onClick={() => onPageChange(page as number)}
              className={`
                relative flex items-center justify-center h-10 w-10 rounded-md border text-sm font-medium
                ${isActive 
                  ? "border-primary bg-primary text-primary-foreground" 
                  : "border-border hover:border-primary/50"
                }
              `}
              whileHover={!isActive ? { scale: 1.05 } : {}}
              whileTap={!isActive ? { scale: 0.95 } : {}}
            >
              {page}
              {isActive && (
                <motion.span
                  layoutId="activePage"
                  className="absolute inset-0 bg-primary rounded-md"
                  style={{ zIndex: -1 }}
                  initial={false}
                />
              )}
            </motion.button>
          )
        })}
      </div>
      
      {/* Next page button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-border ml-2 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  )
}
