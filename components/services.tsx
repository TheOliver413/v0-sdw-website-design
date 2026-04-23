"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Code2, 
  Smartphone, 
  Database, 
  Cloud, 
  Cog, 
  BarChart3,
  FileText,
  Shield,
  Zap,
  Layers,
  RefreshCw,
  MonitorSmartphone
} from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  {
    id: "desarrollo",
    name: "Desarrollo de Software",
    services: [
      {
        icon: Code2,
        title: "Desarrollo Web",
        description: "Aplicaciones web modernas y escalables con tecnologias como React, Next.js, Angular y .NET. Interfaces intuitivas y experiencias de usuario excepcionales.",
      },
      {
        icon: Smartphone,
        title: "Apps Moviles",
        description: "Aplicaciones nativas e hibridas para iOS y Android. Diseño centrado en el usuario con alto rendimiento y sincronizacion en tiempo real.",
      },
      {
        icon: Database,
        title: "Sistemas a la Medida",
        description: "Software personalizado que se adapta a los procesos unicos de tu empresa. Desde ERPs hasta sistemas de gestion especializados.",
      },
      {
        icon: Layers,
        title: "APIs e Integraciones",
        description: "Conectamos tus sistemas existentes con nuevas plataformas. APIs REST robustas y documentadas para una integracion perfecta.",
      },
    ],
  },
  {
    id: "infraestructura",
    name: "Infraestructura",
    services: [
      {
        icon: Cloud,
        title: "Soluciones Cloud",
        description: "Migracion y gestion de infraestructura en AWS, Azure o Google Cloud. Escalabilidad, seguridad y disponibilidad garantizadas.",
      },
      {
        icon: Shield,
        title: "Seguridad Informatica",
        description: "Proteccion de datos y sistemas criticos. Auditorias de seguridad, implementacion de protocolos y monitoreo continuo.",
      },
      {
        icon: RefreshCw,
        title: "DevOps & CI/CD",
        description: "Automatizacion de despliegues y gestion de infraestructura como codigo. Entregas continuas y ambientes consistentes.",
      },
      {
        icon: MonitorSmartphone,
        title: "Soporte y Mantenimiento",
        description: "Soporte tecnico 24/7 para tus sistemas. Actualizaciones, optimizacion de rendimiento y resolucion de incidentes.",
      },
    ],
  },
  {
    id: "consultoria",
    name: "Consultoria",
    services: [
      {
        icon: Cog,
        title: "Automatizacion de Procesos",
        description: "Identificamos y automatizamos procesos repetitivos para aumentar la eficiencia operativa de tu empresa.",
      },
      {
        icon: BarChart3,
        title: "Business Intelligence",
        description: "Transforma tus datos en decisiones estrategicas con dashboards interactivos y analisis predictivo.",
      },
      {
        icon: FileText,
        title: "Transformacion Digital",
        description: "Acompañamiento integral en la digitalizacion de tu empresa. Desde el diagnostico hasta la implementacion.",
      },
      {
        icon: Zap,
        title: "Optimizacion de Procesos",
        description: "Analizamos tus flujos de trabajo actuales y proponemos mejoras basadas en tecnologia y mejores practicas.",
      },
    ],
  },
]

export function Services() {
  const [activeCategory, setActiveCategory] = useState("desarrollo")
  const activeData = categories.find(c => c.id === activeCategory)

  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-accent mb-4">
            Que hacemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Que es <span className="text-gradient">SDW</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            SDW es tu aliado estrategico en tecnologia. Somos la empresa donde podras 
            desarrollar sistemas de informacion a la medida, automatizar procesos y 
            llevar tu empresa al siguiente nivel. Todo esto, en un solo lugar.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white border-0"
                  : "border-border hover:border-primary/50 hover:bg-primary/10"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {activeData?.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 group hover:bg-card/60 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
