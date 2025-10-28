"use client"

import { useEffect, useState, useMemo } from "react"

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

  const launchDate = useMemo(() => {
    const d = new Date()
    d.setDate(d.getDate() + 60)
    return d
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = launchDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [launchDate])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center relative">
      {/* 🔥 Glow behind number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full blur-2xl opacity-40 bg-gradient-to-r from-amber-500 to-yellow-600"></div>
      </div>

      {/* 🕒 Number Box */}
      <div
        className="
          bg-white/10 
          backdrop-blur-md 
          border border-white/20 
          rounded-lg 
          px-8 py-6 
          mb-2 
          min-w-[5rem] 
          text-center
          shadow-md
          relative
          z-10
        "
      >
        <p className="text-4xl font-light text-amber-400">
          {String(value).padStart(2, "0")}
        </p>
      </div>

      <p className="text-sm text-muted-foreground uppercase tracking-widest">{label}</p>
    </div>
  )

  return (
    <section className="relative pt-5 pb-10 px-4 bg-gradient-to-b from-transparent via-black/20 to-transparent">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  )
}
