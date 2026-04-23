"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Carlos Rodriguez",
    role: "Director de Operaciones",
    company: "LogiCorp Colombia",
    content: "SDW transformo completamente nuestra operacion logistica. El sistema que desarrollaron nos permitio reducir tiempos de entrega en un 40% y tener visibilidad total de nuestros procesos.",
    avatar: "CR",
    rating: 5,
  },
  {
    name: "Maria Fernandez",
    role: "Gerente General",
    company: "Distribuidora Nacional",
    content: "Excelente equipo de trabajo. Entendieron nuestras necesidades desde el primer dia y entregaron una solucion que supero nuestras expectativas. El soporte post-implementacion ha sido excepcional.",
    avatar: "MF",
    rating: 5,
  },
  {
    name: "Andres Mejia",
    role: "CTO",
    company: "TechStart SAS",
    content: "La calidad del codigo y la documentacion que entrega SDW es impecable. Son verdaderos profesionales en su campo. Hemos trabajado juntos en multiples proyectos.",
    avatar: "AM",
    rating: 5,
  },
  {
    name: "Laura Martinez",
    role: "Directora Administrativa",
    company: "Grupo Empresarial ABC",
    content: "Gracias a SDW pudimos automatizar procesos que antes tomaban dias. Ahora tenemos mas tiempo para enfocarnos en lo estrategico. Altamente recomendados.",
    avatar: "LM",
    rating: 5,
  },
]

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-accent mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ellos ya <span className="text-gradient">Confiaron</span> en Nosotros
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl p-8 md:p-12"
              >
                <Quote className="w-12 h-12 text-primary/30 mb-6" />
                
                <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed text-pretty">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>
                
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-sm text-primary">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-500"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-border hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-border hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
