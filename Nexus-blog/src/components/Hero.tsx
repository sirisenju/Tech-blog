"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const titles = [
    "Exploring Web3 & AI",
    "Decentralized Future",
    "Machine Learning Frontiers",
    "Blockchain Innovation"
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [titles.length])
  
  return (
    <section className="relative bg-gradient-to-b from-background to-secondary/20 py-16 md:py-24 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block">The Future is Here</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                className="block text-primary mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {titles[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dive into the latest insights on Web3, blockchain technology, artificial intelligence, 
            and the intersection of these revolutionary fields.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#latest-posts" 
              className="px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Read Latest Posts
            </a>
            <a 
              href="#categories" 
              className="px-8 py-3 rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
            >
              Explore Topics
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  )
}
