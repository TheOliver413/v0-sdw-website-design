"use client"

import { motion } from "framer-motion"
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cloud, 
  Cog, 
  BarChart3,
  ArrowRight 
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y escalables con las ultimas tecnologias. Interfaces intuitivas y experiencias de usuario excepcionales.",
    features: ["React / Next.js", "APIs REST", "Bases de datos"],
  },
  {
    icon: Smartphone,
    title: "Apps Moviles",
    description: "Aplicaciones nativas e hibridas para iOS y Android. Diseño centrado en el usuario con alto rendimiento.",
    features: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    icon: Database,
    title: "Sistemas ERP",
    description: "Sistemas empresariales integrados que optimizan todos los procesos de tu organizacion en una sola plataforma.",
    features: ["Gestion integral", "Reportes", "Automatizacion"],
  },
  {
    icon: Cloud,
    title: "Soluciones Cloud",
    description: "Migracion y gestion de infraestructura en la nube. Escalabilidad, seguridad y disponibilidad garantizadas.",
    features: ["AWS / Azure", "DevOps", "Seguridad"],
  },
  {
    icon: Cog,
    title: "Automatizacion",
    description: "Automatiza procesos repetitivos y optimiza la eficiencia operativa de tu empresa con soluciones inteligentes.",
    features: ["RPA", "Workflows", "Integraciones"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transforma tus datos en decisiones estrategicas con dashboards interactivos y analisis predictivo.",
    features: ["Dashboards", "KPIs", "Analytics"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Services() {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-accent mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Soluciones <span className="text-gradient">Tecnologicas</span> Integrales
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Ofrecemos un portafolio completo de servicios tecnologicos para impulsar 
            la transformacion digital de tu empresa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:bg-card/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 text-pretty">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-accent group/btn"
                >
                  Saber mas
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
