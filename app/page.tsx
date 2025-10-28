"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import CountdownTimer from "@/components/countdown-timer"
import AboutTeaser from "@/components/about-teaser"
import Footer from "@/components/footer"
import SubscriptionModal from "@/components/subscription-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />
      <Hero onNotifyClick={() => setIsModalOpen(true)} />
      <CountdownTimer />
      <AboutTeaser />
      <Footer />
      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
