"use client"

import { useState } from "react"
import CategoryPills from "@/components/CategoryPills"

interface Category {
  name: string
  count: number
}

interface CategoryFiltersProps {
  categories: Category[]
}

export default function CategoryFilters({ categories }: CategoryFiltersProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    console.log(`Category selected: ${category}`)
    // In a real app, you would filter posts here or use URL params
  }
  
  return (
    <CategoryPills 
      categories={categories}
      activeCategory={activeCategory}
      onChange={handleCategoryChange}
    />
  )
}
