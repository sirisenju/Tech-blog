"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface BlogSearchProps {
  onSearch: (query: string) => void
}

export default function BlogSearch({ onSearch }: BlogSearchProps) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  
  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [query, onSearch])
  
  const handleClear = () => {
    setQuery("")
    onSearch("")
  }
  
  return (
    <div className="relative w-full max-w-md">
      <div 
        className={`
          flex items-center border rounded-lg px-3 py-2 transition-all duration-200
          ${isFocused 
            ? "border-primary shadow-sm ring-1 ring-primary/20" 
            : "border-border"
          }
        `}
      >
        <Search size={18} className="text-muted-foreground mr-2" />
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
        />
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleClear}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <X size={16} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
