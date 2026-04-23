"use client"

import { motion } from "framer-motion"
import { ArrowRight, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 animate-gradient" />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-secondary/30 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8 animate-pulse-glow"
          >
            <Rocket className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Listo para <span className="text-gradient">Transformar</span>
            <br />tu Empresa?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Agenda una reunion con nuestro equipo y descubre como podemos 
            ayudarte a alcanzar tus objetivos de negocio con tecnologia de vanguardia.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-lg shadow-xl shadow-primary/30 group"
            >
              Comenzar Ahora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 hover:bg-card/50 px-8 py-6 text-lg"
            >
              Ver Casos de Exito
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
