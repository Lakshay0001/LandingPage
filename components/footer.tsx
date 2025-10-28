"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
  ]

  return (
    <footer className="relative py-16 px-4 border-t border-white/10 bg-gradient-to-t from-black/60 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-light mb-2 text-primary">Luxury Estates</h3>
            <p className="text-muted-foreground text-sm">Premium real estate experiences for the discerning.</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-light mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Properties", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-light mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Luxury Estates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
