"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "Que es SDW y como ayuda a mi empresa?",
    answer: "SDW es una empresa de desarrollo de software especializada en crear sistemas de informacion a la medida. Ayudamos a las empresas a optimizar su logistica y procesos mediante soluciones tecnologicas personalizadas que se adaptan a sus necesidades especificas, desde ERPs hasta aplicaciones moviles y sistemas de automatizacion.",
  },
  {
    question: "Cual es el tiempo y costo de desarrollo de un proyecto?",
    answer: "El tiempo y costo varian segun la complejidad del proyecto. Proyectos simples pueden tomar de 4 a 8 semanas, mientras que sistemas mas complejos pueden requerir de 3 a 6 meses. Ofrecemos una cotizacion gratuita y detallada despues de entender tus necesidades en una reunion inicial sin compromiso.",
  },
  {
    question: "Que tecnologias utilizan para el desarrollo?",
    answer: "Trabajamos con un stack tecnologico moderno y robusto: C#/.NET para backend, React/Angular/Next.js para frontend, MySQL/PostgreSQL/SQL Server para bases de datos, y AWS/Azure para infraestructura cloud. Elegimos las tecnologias mas adecuadas segun los requerimientos de cada proyecto.",
  },
  {
    question: "Ofrecen soporte y mantenimiento despues de la entrega?",
    answer: "Si, ofrecemos planes de soporte y mantenimiento continuo. Esto incluye actualizaciones de seguridad, optimizaciones de rendimiento, resolucion de incidentes y mejoras evolutivas. Nuestro equipo esta disponible para asegurar que tu sistema funcione de manera optima.",
  },
  {
    question: "Pueden integrar el nuevo sistema con mis herramientas actuales?",
    answer: "Absolutamente. Una de nuestras especialidades es la integracion de sistemas. Podemos conectar tu nuevo software con ERPs, CRMs, sistemas de contabilidad, plataformas de e-commerce y cualquier otra herramienta que utilices actualmente mediante APIs y conectores personalizados.",
  },
  {
    question: "Como es el proceso de desarrollo de un proyecto?",
    answer: "Seguimos una metodologia agil: 1) Reunion de descubrimiento para entender tus necesidades, 2) Propuesta tecnica y comercial, 3) Diseño y prototipado, 4) Desarrollo iterativo con entregas parciales, 5) Pruebas y ajustes, 6) Implementacion y capacitacion, 7) Soporte post-lanzamiento. Mantemos comunicacion constante durante todo el proceso.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-accent mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Resolvemos tus <span className="text-gradient">Dudas</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl border-0 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Tienes mas preguntas? Estamos aqui para ayudarte.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
          >
            Contactanos
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
