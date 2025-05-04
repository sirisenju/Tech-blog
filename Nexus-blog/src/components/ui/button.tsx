"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "whileHover" | "whileTap"> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    // Extract any motion-specific props to avoid type conflicts
    const { disabled, ...restProps } = props;
    
    return (
      <motion.button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground": variant === "ghost",
            "h-8 px-4 text-xs": size === "sm",
            "h-10 px-6 py-2": size === "md",
            "h-12 px-8 py-3 text-lg": size === "lg",
            "cursor-not-allowed opacity-70": isLoading || disabled,
          },
          className
        )}
        whileHover={{ scale: isLoading || disabled ? 1 : 1.02 }}
        whileTap={{ scale: isLoading || disabled ? 1 : 0.98 }}
        disabled={disabled}
        {...restProps as any}
      >
        {isLoading ? (
          <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            ></path>
          </svg>
        ) : null}
        {children}
      </motion.button>
    )
  }
)

Button.displayName = "Button"

export { Button }
