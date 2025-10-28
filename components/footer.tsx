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
            <h3 className="text-2xl font-light mb-2 text-primary">Fair Stone</h3>
            <p className="text-muted-foreground text-sm">Premium real estate experiences for the discerning.</p>
          </motion.div>
          <div className="flex flex-column justify-start">
            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-50">
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
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-50">
                <h4 className="font-light mb-4 text-foreground">Follow Us</h4>
                <ul className="space-y-2 list-none p-0 m-0">
                  {socialLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} Fair Stone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
