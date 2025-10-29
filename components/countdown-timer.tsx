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

  // ✅ Responsive, centered, golden-themed TimeUnit box
  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center relative">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full blur-3xl opacity-40 bg-gradient-to-r from-amber-500 to-yellow-600"></div>
      </div>

      {/* Number box */}
      <div
        className="
          bg-white/10 
          backdrop-blur-md 
          border border-white/10 
          rounded-2xl 
          flex items-center justify-center
          shadow-md
          relative
          z-10
          w-[60px] h-[60px]
          sm:w-[80px] sm:h-[80px]
          md:w-[90px] md:h-[90px]
          lg:w-[100px] lg:h-[100px]
          mb-3
        "
      >
        <p className="text-2xl sm:text-3xl md:text-4xl font-light text-amber-400">
          {String(value).padStart(2, "0")}
        </p>
      </div>

      <p className="text-[0.7rem] sm:text-xs md:text-sm tracking-widest uppercase text-gray-300">
        {label}
      </p>
    </div>
  )

  // ✅ Colon separator (responsive)
  const Separator = () => (
    <div className="flex items-center justify-center mb-10">
      <span className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-400">:</span>
    </div>
  )

  return (
    <section className="relative py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div
          className="
flex justify-center items-center gap-3 sm:gap-5 md:gap-8
          "
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          <Separator />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <Separator />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <Separator />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  )
}
