"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Rodriguez",
    role: "Director de Operaciones",
    company: "LogiCorp Colombia",
    content: "SDW transformo completamente nuestra operacion logistica. El sistema que desarrollaron nos permitio reducir tiempos de entrega en un 40%.",
    avatar: "CR",
  },
  {
    name: "Maria Fernandez",
    role: "Gerente General",
    company: "Distribuidora Nacional",
    content: "Excelente equipo de trabajo. Entendieron nuestras necesidades desde el primer dia y entregaron una solucion que supero nuestras expectativas.",
    avatar: "MF",
  },
  {
    name: "Andres Mejia",
    role: "CTO",
    company: "TechStart SAS",
    content: "La calidad del codigo y la documentacion que entrega SDW es impecable. Son verdaderos profesionales en su campo.",
    avatar: "AM",
  },
]

const clients = [
  "TechCorp", "LogiSolutions", "DataPro", "CloudMax", "InnovateTech", "DigitalFirst"
]

export function Clients() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-accent mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Lo que Dicen <span className="text-gradient">Nuestros Clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            La satisfaccion de nuestros clientes es nuestra mayor recompensa y 
            el mejor indicador de la calidad de nuestro trabajo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 relative group hover:bg-card/60 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary">{testimonial.company}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-pretty leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Empresas que confian en nosotros
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
