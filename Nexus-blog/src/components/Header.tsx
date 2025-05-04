"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X, Search, Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Handle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold tracking-tight">
              Mind<span className="text-primary">lit</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              All Posts
            </Link>
            <Link 
              href="#categories" 
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Categories
            </Link>
            <Link 
              href="#about" 
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search button */}
            <button 
              aria-label="Search" 
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <Search size={20} />
            </button>

            {/* Theme toggle */}
            <button 
              onClick={toggleDarkMode} 
              aria-label="Toggle theme" 
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 py-3 space-y-1 bg-background border-b border-border">
            <Link 
              href="/" 
              className="block py-2 px-3 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="block py-2 px-3 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Posts
            </Link>
            <Link 
              href="#categories" 
              className="block py-2 px-3 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              href="#about" 
              className="block py-2 px-3 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
