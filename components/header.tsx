"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-black/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <span className="text-foreground font-bold text-lg">F</span>
          </div>
          <span className="text-foreground font-light tracking-widest text-lg">FairStone</span>
        </motion.div>

        {/* CTA */}
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block glass px-6 py-2 rounded-full text-foreground text-sm font-medium hover:bg-white/20 transition-all"
        >
          Get Updates
        </motion.button> */}
      </div>
    </motion.header>
  )
}
