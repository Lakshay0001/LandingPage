"use client"

import { motion } from "framer-motion"
import { LuxuryIcon } from "./luxury-icons"

export default function AboutTeaser() {
  return (
    <section className="relative pt-10 pb-24 px-4 bg-gradient-to-b from-transparent to-black/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-balance">Redefining Luxury Living</h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4 text-balance max-w-3xl mx-auto">
            We believe that exceptional real estate is more than just buildings—it's about creating spaces where life
            unfolds beautifully. Our curated collection of premium properties combines architectural innovation with
            timeless elegance, offering discerning clients an unparalleled living experience.
          </p>

          <motion.div
            className="glass px-8 py-6 rounded-lg inline-block"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-primary font-light text-lg">
              ✨ Handpicked Properties • Architectural Excellence • Timeless Design
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <LuxuryIcon icon="building" label="Premium Properties" delay={0} />
          <LuxuryIcon icon="key" label="Exclusive Access" delay={0.1} />
          <LuxuryIcon icon="star" label="Award Winning" delay={0.2} />
          <LuxuryIcon icon="gem" label="Timeless Elegance" delay={0.3} />
        </div>
      </div>
    </section>
  )
}
