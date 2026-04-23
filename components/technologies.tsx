"use client"

import { motion } from "framer-motion"

const technologies = [
  { name: "C#", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "SQL Server", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "DevOps" },
]

const categoryColors: Record<string, string> = {
  Backend: "from-purple-500 to-violet-600",
  Frontend: "from-cyan-500 to-blue-600",
  Database: "from-emerald-500 to-teal-600",
  Cloud: "from-orange-500 to-amber-600",
  DevOps: "from-pink-500 to-rose-600",
}

export function Technologies() {
  return (
    <section id="tecnologias" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-sm text-accent mb-4">
            Stack Tecnologico
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tecnologias que <span className="text-gradient">Dominamos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Trabajamos con las herramientas y frameworks mas modernos del mercado 
            para entregar soluciones de alta calidad.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden py-8">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-6"
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 glass-card rounded-xl p-6 min-w-[180px] hover:bg-card/60 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${categoryColors[tech.category]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold text-lg">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex overflow-hidden py-8">
            <motion.div
              animate={{ x: [-1920, 0] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex gap-6"
            >
              {[...technologies.reverse(), ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-reverse-${index}`}
                  className="flex-shrink-0 glass-card rounded-xl p-6 min-w-[180px] hover:bg-card/60 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${categoryColors[tech.category]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-white font-bold text-lg">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.category}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto"
        >
          {Object.entries(categoryColors).map(([category, gradient]) => (
            <div
              key={category}
              className="glass-card rounded-lg p-4 text-center"
            >
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient} mx-auto mb-2`} />
              <span className="text-sm text-muted-foreground">{category}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
