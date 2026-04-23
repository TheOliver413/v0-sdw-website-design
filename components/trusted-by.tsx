"use client"

import { motion } from "framer-motion"

const companies = [
  "LogiCorp",
  "TechStart",
  "Distribuidora Nacional",
  "CloudMax",
  "InnovateTech",
  "DataPro",
]

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Ellos ya confian en nosotros:
          </p>
          
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 md:mx-12"
                >
                  <div className="text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors whitespace-nowrap">
                    {company}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
