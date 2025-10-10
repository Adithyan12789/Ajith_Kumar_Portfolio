"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"
import { ParticleBackground } from "./particle-background"
import Spline, { HeroSpline3DBackground, LightRaysBackground } from "./3d-background"

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
      <LightRaysBackground />
      
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
                I am an Architect with 3 years of experience delivering creative solutions in 3D design, animation, interior design, and graphic design. My expertise lies in producing high-quality architectural visualizations, realistic renders, and engaging presentations for residential, commercial, and resort projects. With strong technical skills in SketchUp, D5 Render, Lumion, Photoshop, and Premiere Pro, I help clients communicate their ideas effectively through detailed visuals, creative layouts, and immersive design storytelling.
              </p>
            </div>

            {/* About Me Section */}
            <div className="animate-slide-up animate-stagger-2">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl font-semibold text-white mb-4">
                About Me
              </h2>
              <p className="text-base sm:text-lg md:text-base lg:text-sm xl:text-base text-muted-foreground max-w-2xl text-pretty">
                I'm <span className="text-white font-medium">Ajith Kumar T S</span>, an Architect from Thrissur, Kerala, with a Bachelor's in Architecture from Calicut University. I design and build exceptional architectural spaces that blend thoughtful design with innovative engineering.
              </p>
            </div>

            <div className="animate-slide-up animate-stagger-3">
              <p className="text-base sm:text-lg md:text-base lg:text-sm xl:text-base text-muted-foreground max-w-2xl text-pretty">
                I've worked with firms like{" "}
                <span className="text-foreground font-medium">5 Dots Architecture</span>,{" "}
                <span className="text-foreground font-medium">Tropical Axiom</span>,{" "}
                <span className="text-foreground font-medium">Beyond Lines</span>,{" "}
                <span className="text-foreground font-medium">WDPL Builders</span>, and{" "}
                <span className="text-foreground font-medium">ZAFR Builders</span>, 
                managing projects from concept to completion. Skilled in{" "}
                <span className="text-foreground font-medium">SketchUp</span>,{" "}
                <span className="text-foreground font-medium">AutoCAD</span>,{" "}
                <span className="text-foreground font-medium">D5 Render</span>,{" "}
                <span className="text-foreground font-medium">Lumion</span>,{" "}
                <span className="text-foreground font-medium">Photoshop</span>, and{" "}
                <span className="text-foreground font-medium">Premiere Pro</span>, 
                I combine creativity and technical precision to design residential and commercial spaces that are both functional and visually engaging.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-stagger-4">
              <Button className="group github-button github-button-primary px-6 py-3 text-base hover-lift hover-glow">
                View my work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button
                variant="outline"
                className="group github-button github-button-secondary px-6 py-3 text-base bg-transparent hover-scale hover-bounce border-2"
              >
                <FileText className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                Download CV
              </Button>
            </div>

            {/* Updated Social Icons */}
            <div className="animate-slide-up animate-stagger-5">
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-white group-hover:text-blue-300 transition-colors duration-200" />
                </a>
                <a
                  href="#"
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-white group-hover:text-blue-400 transition-colors duration-200" />
                </a>
                <a
                  href="#"
                  className="group p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-white group-hover:text-red-400 transition-colors duration-200" />
                </a>
                <div className="h-8 w-px bg-white/30 mx-2"></div>
                <div className="text-sm text-muted-foreground">
                  Let's connect
                </div>
              </div>
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