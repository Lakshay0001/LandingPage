"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set launch date to 60 days from now
      const launchDate = new Date()
      launchDate.setDate(launchDate.getDate() + 60)

      const difference = launchDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({
    value,
    label,
  }: {
    value: number
    label: string
  }) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass px-6 py-4 rounded-lg mb-2 min-w-20">
        <p className="text-3xl md:text-4xl font-light text-primary">{String(value).padStart(2, "0")}</p>
      </div>
      <p className="text-sm text-muted-foreground uppercase tracking-widest">{label}</p>
    </motion.div>
  )

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-light text-center mb-16 text-balance"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Time Until Launch
        </motion.h2>

        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  )
}
