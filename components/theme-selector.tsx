"use client"

import { useTheme } from "./theme-provider"
import { Button } from "@/components/ui/button"
import { Palette, Check } from "lucide-react"
import { useState } from "react"

const themes = [
  { name: "light", label: "Light", color: "bg-white border-gray-200" },
  { name: "dark", label: "Dark", color: "bg-gray-900 border-gray-700" },
  { name: "blue", label: "Ocean", color: "bg-blue-600 border-blue-500" },
  { name: "green", label: "Forest", color: "bg-green-600 border-green-500" },
  { name: "purple", label: "Cosmic", color: "bg-purple-600 border-purple-500" },
  { name: "orange", label: "Sunset", color: "bg-orange-600 border-orange-500" },
  { name: "red", label: "Crimson", color: "bg-red-600 border-red-500" },
] as const

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="github-button github-button-secondary flex items-center gap-2"
      >
        <Palette className="w-4 h-4" />
        <span className="hidden sm:inline">Theme</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg p-2 z-50 animate-scale-in">
          <div className="text-sm font-medium text-foreground mb-2 px-2">Choose Theme</div>
          <div className="space-y-1">
            {themes.map((themeOption) => (
              <button
                key={themeOption.name}
                onClick={() => {
                  setTheme(themeOption.name as any)
                  setIsOpen(false)
                }}
                className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-accent/50 transition-colors"
              >
                <div className={`w-4 h-4 rounded-full border-2 ${themeOption.color}`} />
                <span className="text-sm text-foreground">{themeOption.label}</span>
                {theme === themeOption.name && <Check className="w-4 h-4 text-foreground ml-auto" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
