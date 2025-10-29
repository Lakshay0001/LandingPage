"use client"

import { useRef } from "react"
import { motion, Variants } from "framer-motion"
import dynamic from "next/dynamic"
import CountdownTimer from "@/components/countdown-timer"

const ThreeDBackground = dynamic(() => import("./three-d-background"), {
  ssr: false,
})

interface HeroProps {
  onNotifyClick: () => void
}

export default function Hero({ onNotifyClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Framer Motion Variants with correct easing type
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }, // ✅ corrected easing
    },
  }

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }, // ✅ corrected easing
    },
  }

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }, // ✅ corrected easing
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ThreeDBackground />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Content */}
      <motion.div
        className="relative pt-15 z-20 text-center px-4 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {/* Logo/Company Name */}
        {/* <motion.div variants={titleVariants} className="">
          <div className="inline-block glass px-6 py-2 rounded-full mb-6  glow-gold">
            <p className="text-lg font-light tracking-widest text-primary">
              FAIR STONE
            </p>
          </div>
        </motion.div> */}

        {/* Main Title */}
        <motion.h1
          variants={titleVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 text-balance"
        >
          <span className="text-foreground">Launching</span>
          <br />
          <span className="text-primary font-light">Soon</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={subtitleVariants}
          className="text-lg md:text-xl text-muted-foreground md:mb-10 max-w-2xl mx-auto text-balance"
        >
          Premium real estate experiences crafted for those who appreciate
          architectural excellence and timeless elegance.
        </motion.p>

        <CountdownTimer />

        {/* CTA Button */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          onClick={onNotifyClick}
          className="glass px-8 py-4 rounded-full text-foreground font-medium hover:bg-white/20 transition-all duration-300 glow-gold"
        >
          Notify Me
        </motion.button>
      </motion.div>

      {/* Decorative motion lines */}
      <motion.div
        className="absolute top-20 left-4 w-1 h-24 bg-gradient-to-b from-primary/50 to-transparent rounded-full"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute bottom-20 right-4 w-1 h-32 bg-gradient-to-t from-primary/50 to-transparent rounded-full"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      />
    </section>
  )
}
