"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { ParticleBackground } from "./particle-background"
import Spline from '@splinetool/react-spline';

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if mobile on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <ParticleBackground />
      
      {/* Background Spline for mobile only */}
      {isMobile && (
        <div className="absolute inset-0 z-0 opacity-20">
          <Spline
            scene="https://prod.spline.design/TQjjqTkBIkcrhiEK/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      )}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-8 relative z-20">
            <div className="animate-slide-up">
              <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-bold text-balance leading-tight">
                Architect &<span className="text-shimmer"> Designer</span>
              </h1>
            </div>

            <div className="animate-slide-up animate-stagger-1">
              <p className="text-lg sm:text-xl md:text-xl lg:text-lg xl:text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
                I design and build exceptional architectural spaces that blend thoughtful design with innovative
                engineering. Currently crafting sustainable environments at{" "}
                <span className="text-white">Studio Arch</span>.
              </p>
            </div>

            <div className="animate-slide-up animate-stagger-2">
              <p className="text-base sm:text-lg md:text-base lg:text-sm xl:text-base text-muted-foreground max-w-2xl text-pretty">
                In the past, I've had the opportunity to develop projects across a variety of settings — from{" "}
                <span className="text-foreground font-medium">residential complexes</span> and{" "}
                <span className="text-foreground font-medium">commercial buildings</span> to{" "}
                <span className="text-foreground font-medium">public spaces</span> and{" "}
                <span className="text-foreground font-medium">cultural institutions</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-stagger-3">
              <Button className="github-button github-button-primary px-6 py-3 text-base hover-lift hover-glow">
                View my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="github-button github-button-secondary px-6 py-3 text-base bg-transparent hover-scale hover-bounce"
              >
                Download CV
              </Button>
            </div>

            <div className="flex items-center space-x-6 animate-slide-up animate-stagger-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 hover:scale-110 transform transition-transform"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 hover:scale-110 transform transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-blue-500 transition-colors duration-200 hover:scale-110 transform transition-transform"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Spline Animation - Right Side - Hidden on mobile */}
          <div className={`relative h-[500px] lg:h-[600px] xl:h-[700px] w-full animate-fade-in lg:translate-x-8 xl:translate-x-12 ${
            isMobile ? 'hidden' : 'block'
          }`}>
            <Spline
              scene="https://prod.spline.design/XNQyykKTpVUxbHli/scene.splinecode"
              className="w-full h-full scale-110"
              style={{ width: "150%" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}