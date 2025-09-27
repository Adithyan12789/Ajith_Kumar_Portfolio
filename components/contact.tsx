import { Button } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-reveal"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Let's Create Something
                <br />
                <span className="text-blue-500">Extraordinary</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
                Ready to bring your architectural vision to life? Let's discuss your project and explore the possibilities
                together.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16 text-center md:text-left">
            {/* Left Side: Contact Info */}
            <ScrollReveal className="animate-slide-in-left flex flex-col items-center md:items-start" delay={200}>
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                <div className="space-y-6">
                  <div className="animate-fade-in-stagger">
                    <h4 className="font-semibold mb-2">Email</h4>
                    <p className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                      hello@marcuschen.design
                    </p>
                  </div>

                  <div className="animate-fade-in-stagger animate-stagger-1">
                    <h4 className="font-semibold mb-2">Phone</h4>
                    <p className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                      +1 (555) 123-4567
                    </p>
                  </div>

                  <div className="animate-fade-in-stagger animate-stagger-2">
                    <h4 className="font-semibold mb-2">Studio</h4>
                    <p className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                      123 Design District
                      <br />
                      Los Angeles, CA 90028
                    </p>
                  </div>

                  <div className="animate-fade-in-stagger animate-stagger-3">
                    <h4 className="font-semibold mb-2">Follow</h4>
                    <div className="flex gap-4 justify-center md:justify-start">
                      <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 hover:scale-105 transform">
                        Instagram
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 hover:scale-105 transform">
                        LinkedIn
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 hover:scale-105 transform">
                        Behance
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Side: Form */}
            <ScrollReveal className="animate-slide-in-right" delay={400}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="animate-fade-in-stagger">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 hover:border-blue-500/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="animate-fade-in-stagger animate-stagger-1">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 hover:border-blue-500/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="animate-fade-in-stagger animate-stagger-2">
                  <label htmlFor="project" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 hover:border-blue-500/50"
                  >
                    <option>Select project type</option>
                    <option>Residential Design</option>
                    <option>Commercial Design</option>
                    <option>Interior Design</option>
                    <option>Consultation</option>
                  </select>
                </div>

                <div className="animate-fade-in-stagger animate-stagger-3">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-200 hover:border-blue-500/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="animate-fade-in-stagger animate-stagger-4">
                  <Button size="lg" className="w-full hover-lift">
                    Send Message
                  </Button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
