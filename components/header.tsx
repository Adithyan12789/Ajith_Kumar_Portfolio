"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeSelector } from "./theme-selector"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="animate-slide-in-left">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <Image src="/profile-img-2.jpeg" className="rounded-full" alt="profile-img" width={52} height={52}/>
              </div>
              <span className="text-lg font-semibold">Ajith Kumar</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8 animate-fade-in animate-stagger-2">
            <a href="#" className="github-nav-link py-2">
              About
            </a>
            <a href="#services" className="github-nav-link py-2">
              Services
            </a>
            <a href="#projects" className="github-nav-link py-2">
              Projects
            </a>
            <a href="#contact" className="github-nav-link py-2">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4 animate-slide-in-right animate-stagger-3">
            
            <Button className="github-button github-button-primary px-4 py-2">Get in touch</Button>

            <ThemeSelector />
          </div>
        </nav>
      </div>
    </header>
  )
}
