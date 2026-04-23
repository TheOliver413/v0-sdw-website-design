import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Technologies } from "@/components/technologies"
import { Clients } from "@/components/clients"
import { CTASection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Clients />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  )
}
