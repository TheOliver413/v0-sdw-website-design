import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustedBy } from "@/components/trusted-by"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Clients } from "@/components/clients"
import { CTASection } from "@/components/cta-section"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustedBy />
      <Services />
      <About />
      <Stats />
      <Clients />
      <CTASection />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
