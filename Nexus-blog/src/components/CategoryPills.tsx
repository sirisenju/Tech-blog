"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface Category {
  name: string
  count: number
}

interface CategoryPillsProps {
  categories: Category[]
  activeCategory: string
  onChange: (category: string) => void
}

export default function CategoryPills({ 
  categories, 
  activeCategory, 
  onChange 
}: CategoryPillsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <CategoryPill
        name="All"
        count={categories.reduce((sum, cat) => sum + cat.count, 0)}
        isActive={activeCategory === "all"}
        onClick={() => onChange("all")}
      />
      
      {categories.map(category => (
        <CategoryPill
          key={category.name}
          name={category.name}
          count={category.count}
          isActive={activeCategory === category.name.toLowerCase()}
          onClick={() => onChange(category.name.toLowerCase())}
        />
      ))}
    </div>
  )
}

interface CategoryPillProps {
  name: string
  count: number
  isActive: boolean
  onClick: () => void
}

function CategoryPill({ name, count, isActive, onClick }: CategoryPillProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.button
      className={cn(
        "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
        isActive 
          ? "bg-primary text-primary-foreground"
          : "bg-secondary/80 text-foreground hover:bg-secondary"
      )}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name} 
      <span className={cn(
        "ml-1 rounded-full px-1.5 py-0.5 text-xs",
        isActive 
          ? "bg-primary-foreground/20 text-primary-foreground" 
          : "bg-accent text-accent-foreground"
      )}>
        {count}
      </span>
      
      {/* Animated underline for non-active pills when hovered */}
      {!isActive && isHovered && (
        <motion.div 
          className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary/70 mx-auto w-4/5"
          layoutId="categoryUnderline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.button>
  )
}
