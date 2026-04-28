"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Instagram, Github, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  servicios: [
    { label: "Desarrollo Web", href: "#" },
    { label: "Apps Moviles", href: "#" },
    { label: "Sistemas ERP", href: "#" },
    { label: "Business Intelligence", href: "#" },
    { label: "Automatizacion", href: "#" },
  ],
  empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Equipo", href: "#" },
    { label: "Carreras", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contacto", href: "#contacto" },
  ],
  recursos: [
    { label: "Documentacion", href: "#" },
    { label: "Casos de Exito", href: "#" },
    { label: "FAQ", href: "#faq" },
    { label: "Soporte", href: "#" },
    { label: "Politica de Privacidad", href: "#" },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-6 h-6 text-white">
                  <circle cx="20" cy="12" r="6" fill="currentColor" opacity="0.9"/>
                  <circle cx="20" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 35 L20 20 L32 35" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="20" r="2" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">SDW</span>
                <p className="text-xs text-muted-foreground">Soluciones Tecnologicas SAS</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6 text-pretty">
              Tecnologia que optimiza la logistica y los procesos empresariales. 
              Desarrollamos soluciones a la medida para tu negocio.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-2 md:col-span-1"
          >
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">info@sdw.com.co</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a 
                  href="https://wa.me/573334010363?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios%20tecnológicos%20y%20desarrollo%20de%20software."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +57 (333) 401 0363
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">Colombia</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              2024 SDW Soluciones Tecnologicas SAS. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terminos y Condiciones
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Politica de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
