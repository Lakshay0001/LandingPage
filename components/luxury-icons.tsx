"use client"

import { motion } from "framer-motion"

interface LuxuryIconProps {
  icon: "building" | "key" | "star" | "gem"
  label: string
  delay?: number
}

export function LuxuryIcon({ icon, label, delay = 0 }: LuxuryIconProps) {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  }

  const renderIcon = () => {
    switch (icon) {
      case "building":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
            <line x1="9" y1="5" x2="9" y2="9" />
            <line x1="15" y1="5" x2="15" y2="9" />
          </svg>
        )
      case "key":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 2l-9 4m0 0L5 2m7 4v16m0-16a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
            <path d="M9 12h12" />
          </svg>
        )
      case "star":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )
      case "gem":
        return (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-5-6.5 5 2-7-5.5-4h7z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      variants={iconVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      className="flex flex-col items-center gap-3"
    >
      <div className="glass p-4 rounded-lg text-primary hover:bg-white/20 transition-all">{renderIcon()}</div>
      <p className="text-sm font-light text-muted-foreground">{label}</p>
    </motion.div>
  )
}
