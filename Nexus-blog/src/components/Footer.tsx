import Link from "next/link"
import { cn } from "@/lib/utils"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight">
                Mind<span className="text-primary">lit</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Exploring the frontiers of Web3 and AI technologies. Stay informed with the latest insights and developments.
            </p>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
            {/* Categories */}
            <div>
              <h3 className="text-sm font-medium mb-4">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#web3" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Web3
                  </Link>
                </li>
                <li>
                  <Link href="#ai" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="#blockchain" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blockchain
                  </Link>
                </li>
                <li>
                  <Link href="#machine-learning" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Machine Learning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-sm font-medium mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter size={18} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={18} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin size={18} />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={18} />
                </Link>
              </div>
              {/* <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Subscribe to our newsletter
                </p>
                <form className="mt-2 flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full min-w-0 rounded-l-md border border-input bg-background px-3 py-2 text-sm"
                  />
                  <button
                    type="submit"
                    className="rounded-r-md border border-l-0 border-input bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
                  >
                    Subscribe
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Mindlit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
