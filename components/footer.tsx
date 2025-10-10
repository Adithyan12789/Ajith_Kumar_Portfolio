import { ScrollReveal } from "./scroll-reveal"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 border-t border-border bg-muted/20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="animate-slide-up">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
              {/* Brand Section */}
              <div className="md:col-span-2 animate-fade-in-stagger flex flex-col items-center md:items-start">
                <h3 className="font-bold text-2xl mb-3 text-shimmer">AJITH KUMAR</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Architect & Design Consultant crafting exceptional spaces that blend innovation with sustainability.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a
                    title="Github"
                    href="#"
                    className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 hover:scale-110 animate-float"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    title="Linkedin"
                    href="#"
                    className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 hover:scale-110 animate-float animate-stagger-1"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    title="Mail"
                    href="#"
                    className="w-10 h-10 bg-background border border-border rounded-full flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-300 hover:scale-110 animate-float animate-stagger-2"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="animate-fade-in-stagger animate-stagger-1 flex flex-col items-center md:items-start">
                <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 hover:translate-x-1 transform block"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 hover:translate-x-1 transform block"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 hover:translate-x-1 transform block"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 hover:translate-x-1 transform block"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="animate-fade-in-stagger animate-stagger-2 flex flex-col items-center md:items-start">
                <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                    hello@ajithkumar.design
                  </p>
                  <p className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                    +1 (555) 123-4567
                  </p>
                  <p className="hover:text-blue-500 transition-colors duration-200 cursor-pointer">
                    Los Angeles, CA
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-border pt-8 animate-fade-in-stagger animate-stagger-3">
              <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors duration-200 hover:scale-105 transform"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="hover:text-blue-500 transition-colors duration-200 hover:scale-105 transform"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1 hover:text-blue-500 transition-colors duration-200 hover:scale-105 transform"
                  >
                    Back to Top
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  &copy; 2025 Ajith Kumar. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
