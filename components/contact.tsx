"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contacto@sdw.com.co",
    href: "mailto:contacto@sdw.com.co",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+57 (1) 234 5678",
    href: "tel:+5712345678",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Bogota, Colombia",
    href: "#",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-accent mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hablemos de tu <span className="text-gradient">Proyecto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Estamos listos para ayudarte a transformar tu empresa con soluciones 
            tecnologicas innovadoras. Cuentanos tu idea.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Agenda una Reunion
              </h3>
              <p className="text-muted-foreground mb-8 text-pretty">
                Nuestro equipo esta disponible para discutir tus necesidades 
                y crear una solucion personalizada para tu negocio.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      <info.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg shadow-primary/25"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Agendar Cita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Enviar Mensaje
              </h3>
              
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Nombre completo
                    </label>
                    <Input
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Empresa
                  </label>
                  <Input
                    placeholder="Nombre de tu empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="Cuentanos sobre tu proyecto..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg shadow-primary/25"
                >
                  Enviar Mensaje
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
