"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight,Facebook, Linkedin, Instagram, Mail, FileText } from "lucide-react";
import { ParticleBackground } from "./particle-background";
import Spline, {
  HeroSpline3DBackground,
  LightRaysBackground,
} from "./3d-background";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <ParticleBackground />
      <LightRaysBackground />

      {/* Background Spline for mobile */}
      {isMobile && (
        <div className="absolute inset-0 z-0 opacity-20">
          <Spline
            scene="https://prod.spline.design/TQjjqTkBIkcrhiEK/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      )}

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Text Content */}
          <div className="space-y-6 relative z-20 mx-4 md:mx-8 lg:mx-10">
            {/* Title */}
            <div className="animate-slide-up">
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Architect &<span className="text-shimmer"> Designer</span>
              </h1>
            </div>

            {/* Intro */}
            <div className="animate-slide-up animate-stagger-1">
              <p className="text-sm sm:text-base md:text-base lg:text-sm xl:text-base text-muted-foreground max-w-3xl leading-relaxed">
                I am an Architect with 3 years of experience delivering creative
                solutions in 3D design, animation, interior design, and graphic
                design. My expertise lies in producing high-quality
                architectural visualizations, realistic renders, and engaging
                presentations for residential, commercial, and resort projects.
              </p>
            </div>

            {/* About Me */}
            <div className="animate-slide-up animate-stagger-2 mb-10">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                About Me
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                I'm{" "}
                <span className="text-white font-medium">Ajith Kumar T S</span>,
                an Architect from Thrissur, Kerala, with a Bachelor's in
                Architecture from Calicut University. I design and build
                exceptional architectural spaces that blend thoughtful design
                with innovative engineering. I've worked with firms like{" "}
                <span className="font-medium text-foreground">
                  5 Dots Architecture
                </span>
                ,{" "}
                <span className="font-medium text-foreground">
                  Tropical Axiom
                </span>
                ,{" "}
                <span className="font-medium text-foreground">
                  Beyond Lines
                </span>
                ,{" "}
                <span className="font-medium text-foreground">
                  WDPL Builders
                </span>
                , and{" "}
                <span className="font-medium text-foreground">
                  ZAFR Builders
                </span>
                . Skilled in{" "}
                <span className="font-medium text-foreground">SketchUp</span>,{" "}
                <span className="font-medium text-foreground">AutoCAD</span>,{" "}
                <span className="font-medium text-foreground">D5 Render</span>,{" "}
                <span className="font-medium text-foreground">Lumion</span>,{" "}
                <span className="font-medium text-foreground">Photoshop</span>,
                and{" "}
                <span className="font-medium text-foreground">
                  Premiere Pro
                </span>
                , I create spaces that are both functional and visually
                engaging.
              </p>
            </div>


            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 animate-slide-up animate-stagger-4">
              {/* Social Icons */}
              <div className="flex items-center space-x-3 gap-4">
                {[Facebook, Linkedin, Instagram, Mail].map((Icon, i) => (
                  <a
                    title="icon"
                    key={i}
                    href="#"
                    className="group p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <Icon className="h-4 w-4 text-white group-hover:text-blue-300 transition-colors duration-200" />
                  </a>
                ))}
              </div>

              {/* Download CV Button */}
              <div className="flex items-center sm:ml-auto">
                <Button
                  variant="outline"
                  className="group px-5 py-2 text-sm bg-transparent border-2 hover-scale hover-bounce"
                >
                  <FileText className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  Portfolio
                </Button>
              </div>
            </div>
          </div>

          {/* Spline Animation */}
          <div
            className={`relative h-[400px] lg:h-[550px] xl:h-[650px] w-full animate-fade-in ${
              isMobile ? "hidden" : "block"
            }`}
          >
            <Spline
              scene="https://prod.spline.design/XNQyykKTpVUxbHli/scene.splinecode"
              className="w-full h-full scale-105"
              style={{ width: "140%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
