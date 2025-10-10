import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
