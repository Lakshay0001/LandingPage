"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <span className="text-foreground font-bold text-lg">L</span>
          </div>
          <span className="text-foreground font-light tracking-widest text-sm">LUXE ESTATES</span>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <motion.a
            whileHover={{ color: "#d4af37" }}
            href="#about"
            className="text-muted-foreground text-sm font-light hover:text-primary transition-colors"
          >
            About
          </motion.a>
          <motion.a
            whileHover={{ color: "#d4af37" }}
            href="#features"
            className="text-muted-foreground text-sm font-light hover:text-primary transition-colors"
          >
            Features
          </motion.a>
          <motion.a
            whileHover={{ color: "#d4af37" }}
            href="#contact"
            className="text-muted-foreground text-sm font-light hover:text-primary transition-colors"
          >
            Contact
          </motion.a>
        </nav>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block glass px-6 py-2 rounded-full text-foreground text-sm font-medium hover:bg-white/20 transition-all"
        >
          Get Updates
        </motion.button>
      </div>
    </motion.header>
  )
}
