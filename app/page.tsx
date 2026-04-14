import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Impact } from "@/components/impact"
import { Allies } from "@/components/allies"
import { Funding } from "@/components/funding"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Impact />
      <Allies />
      <Funding />
      <Contact />
      <Footer />
    </main>
  )
}
