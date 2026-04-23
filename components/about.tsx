"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Target, Users, Zap, Award } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Enfoque Estrategico",
    description: "Cada proyecto es abordado con una vision estrategica que alinea la tecnologia con tus objetivos de negocio.",
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales altamente capacitados en las tecnologias mas demandadas del mercado.",
  },
  {
    icon: Zap,
    title: "Metodologia Agil",
    description: "Implementamos Scrum y metodologias agiles para entregas rapidas y resultados medibles.",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Procesos de QA rigurosos que aseguran productos robustos y confiables.",
  },
]

const achievements = [
  "Mas de 10 anos en el mercado colombiano",
  "Equipo multidisciplinario de expertos",
  "Clientes en diversos sectores industriales",
  "Soporte tecnico especializado 24/7",
  "Alianzas estrategicas con lideres tecnologicos",
  "Certificaciones en metodologias agiles",
]

export function About() {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-64 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-accent mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Tecnologia que <span className="text-gradient">Optimiza</span> tu Negocio
            </h2>
            <p className="text-muted-foreground text-lg mb-8 text-pretty">
              En <strong className="text-foreground">SDW Soluciones Tecnologicas</strong> somos 
              una empresa colombiana dedicada al desarrollo de software empresarial. 
              Nos especializamos en crear soluciones a la medida que transforman 
              la manera en que las empresas operan y crecen.
            </p>
            <p className="text-muted-foreground mb-8 text-pretty">
              Nuestro compromiso es entregar productos de alta calidad que no solo 
              cumplan con los requerimientos tecnicos, sino que generen un impacto 
              real en la productividad y competitividad de nuestros clientes.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass-card rounded-2xl p-6 hover:bg-card/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
