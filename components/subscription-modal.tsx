"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setEmail("")
        setSubmitted(false)
        onClose()
      }, 2000)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md px-4"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass rounded-lg p-8">
              {!submitted ? (
                <>
                  <h3 className="text-2xl font-light mb-2 text-balance">Get Notified</h3>
                  <p className="text-muted-foreground mb-6">
                    Be the first to know when we launch our exclusive collection.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      Notify Me
                    </button>
                  </form>

                  <button
                    onClick={onClose}
                    className="w-full mt-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Close
                  </button>
                </>
              ) : (
                <motion.div className="text-center py-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-xl font-light text-primary mb-2">✓ Thank you!</p>
                  <p className="text-muted-foreground">We'll notify you when we launch.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
