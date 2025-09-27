"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
                Architect &<span> Designer</span>
              </h1>
            </div>

            <div className="animate-slide-up animate-stagger-1">
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
                I design and build exceptional architectural spaces that blend thoughtful design with innovative
                engineering. Currently crafting sustainable environments at{" "}
                <span>Studio Arch</span>.
              </p>
            </div>

            <div className="animate-slide-up animate-stagger-2">
              <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
                In the past, I've had the opportunity to develop projects across a variety of settings — from{" "}
                <span className="text-foreground">residential complexes</span> and{" "}
                <span className="text-foreground">commercial buildings</span> to{" "}
                <span className="text-foreground">public spaces</span> and{" "}
                <span className="text-foreground">cultural institutions</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-stagger-3">
              <Button className="github-button github-button-primary px-6 py-3 text-base">
                View my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="github-button github-button-secondary px-6 py-3 text-base bg-transparent"
              >
                Download CV
              </Button>
            </div>

            <div className="flex items-center space-x-6 animate-slide-up animate-stagger-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-blue-500 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-blue-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-blue-500 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            </div>

            {/* Photo Section */}
            <div className="flex justify-center lg:justify-end animate-slide-up animate-stagger-2">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/10">
                  <Image
                    src="/profile-img-2.jpeg"
                    alt="Ajith Kumar - Architect & Designer"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
