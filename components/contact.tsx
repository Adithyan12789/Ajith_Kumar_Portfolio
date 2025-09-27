import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Let's Create Something
              <br />
              <span>Extraordinary</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Ready to bring your architectural vision to life? Let's discuss your project and explore the possibilities
              together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground">hello@marcuschen.design</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Studio</h4>
                  <p className="text-muted-foreground">
                    123 Design District
                    <br />
                    Los Angeles, CA 90028
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Follow</h4>
                  <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                      LinkedIn
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-blue-500 transition-colors">
                      Behance
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                  >
                    <option>Select project type</option>
                    <option>Residential Design</option>
                    <option>Commercial Design</option>
                    <option>Interior Design</option>
                    <option>Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
