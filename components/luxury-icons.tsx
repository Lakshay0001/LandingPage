"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useRef } from "react"
import { Building2, KeyRound, Award, Star, Gem } from "lucide-react"

interface LuxuryIconProps {
  icon: "building" | "key" | "award" | "star" | "gem"
  label: string
  delay?: number
}

export function LuxuryIcon({ icon, label, delay = 0 }: LuxuryIconProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [15, -15])
  const rotateY = useTransform(x, [-50, 50], [-15, 15])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2
    x.set(offsetX)
    y.set(offsetY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay },
    },
  }

  const renderIcon = () => {
    const iconProps = {
      size: 48,
      strokeWidth: 1.5,
      className:
        "text-amber-500 drop-shadow-[0_0_10px_rgba(255,191,73,0.5)] transition-transform duration-300",
    }

    switch (icon) {
      case "building":
        return <Building2 {...iconProps} />
      case "key":
        return <KeyRound {...iconProps} />
      case "award":
        return <Award {...iconProps} />
      case "star":
        return <Star {...iconProps} />
      case "gem":
        return <Gem {...iconProps} />
      default:
        return null
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      variants={iconVariants}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col items-center gap-3 select-none"
    >
      <motion.div
        className="glass p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-amber-500/40 hover:shadow-[0_0_20px_rgba(255,191,73,0.2)] transition-all duration-300"
        whileHover={{ scale: 1.1 }}
      >
        {renderIcon()}
      </motion.div>
      <p className="text-sm font-light text-muted-foreground">{label}</p>
    </motion.div>
  )
}
