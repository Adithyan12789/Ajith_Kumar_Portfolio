"use client";

import { ScrollReveal } from "./scroll-reveal";
import { LiquidEtherBackground } from "./3d-background";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
// import "../app/globals.css"

const services = [
  {
    title: "Architectural Design",
    description: "Innovative architectural solutions tailored to your vision",
    details:
      "From concept to completion, we create stunning architectural designs that blend form and function while meeting all regulatory requirements.",
    features: [
      "3D Modeling",
      "Construction Documents",
      "Site Planning",
      "Code Compliance",
    ],
    gradient: "from-blue-500/20 to-purple-600/20",
    accent: "blue",
  },
  {
    title: "Interior Design",
    description: "Creating beautiful and functional interior spaces",
    details:
      "Transform your spaces with our interior design expertise. We focus on aesthetics, functionality, and creating environments that reflect your personality.",
    features: [
      "Space Planning",
      "Material Selection",
      "Furniture Design",
      "Lighting Solutions",
    ],
    gradient: "from-emerald-500/20 to-cyan-600/20",
    accent: "emerald",
  },
  {
    title: "Sustainable Design",
    description: "Eco-friendly designs for a sustainable future",
    details:
      "Our sustainable approach integrates green technologies and materials to create energy-efficient, environmentally responsible buildings.",
    features: [
      "LEED Certification",
      "Energy Analysis",
      "Green Materials",
      "Passive Design",
    ],
    gradient: "from-green-500/20 to-teal-600/20",
    accent: "green",
  },
  {
    title: "Project Management",
    description: "End-to-end project coordination and execution",
    details:
      "We manage your project from initial concept through construction, ensuring timelines, budgets, and quality standards are met.",
    features: [
      "Budget Management",
      "Timeline Coordination",
      "Quality Control",
      "Stakeholder Communication",
    ],
    gradient: "from-orange-500/20 to-red-600/20",
    accent: "orange",
  },
];

const Buttons = [
  {
    title: "Experience",
    details: "2+",
    gradient: "from-blue-500/20 to-purple-600/20",
    accent: "blue",
  },
  {
    title: "Works",
    details: "+50",
    gradient: "from-emerald-500/20 to-cyan-600/20",
    accent: "emerald",
  },
  {
    title: "Feedback",
    details: "+12",
    gradient: "from-green-500/20 to-teal-600/20",
    accent: "green",
  },
  {
    title: "Rate us",
    details: (
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="flex items-center justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-6 h-6 text-yellow-400 fill-current animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="text-center">
          <span className="text-sm font-bold text-yellow-400">4.9/5</span>
        </div>
      </div>
    ),
    gradient: "from-orange-500/20 to-red-600/20",
    accent: "orange",
  },
];

export function Services() {
  const router = useRouter();

  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeButtons, setActiveButtons] = useState<{ [key: number]: boolean }>({});
  
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  if (cardRefs.current.length !== services.length) {
    cardRefs.current = Array(services.length).fill(null);
  }
  if (dropdownRefs.current.length !== services.length) {
    dropdownRefs.current = Array(services.length).fill(null);
  }

  const handleCardClick = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleButtonClick = (index: number) => {
    setActiveButtons((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleMouseMove = (index: number, e: React.MouseEvent) => {
    if (flippedCards[index]) return;

    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

    // Parallax effect for background
    const bg = card.querySelector(".card-bg-glow") as HTMLElement;
    if (bg) {
      const moveX = (x - centerX) * 0.1;
      const moveY = (y - centerY) * 0.1;
      bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";

      const bg = card.querySelector(".card-bg-glow") as HTMLElement;
      if (bg) {
        bg.style.transform = "translate(0px, 0px)";
      }
    }
    setHoveredCard(null);
  };

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  const getAccentColor = (accent: string) => {
    const colors = {
      blue: "rgba(59, 130, 246, 0.8)",
      emerald: "rgba(16, 185, 129, 0.8)",
      green: "rgba(34, 197, 94, 0.8)",
      orange: "rgba(249, 115, 22, 0.8)",
    };
    return colors[accent as keyof typeof colors] || colors.blue;
  };

  return (
    <section
      id="services"
      className="min-h-screen py-20 md:py-28 relative overflow-hidden"
    >
      <LiquidEtherBackground />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <ScrollReveal className="text-center mb-16">
          <div className="animate-slide-up text-left w-full max-w-md mr-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Services
            </h2>
          </div>
        </ScrollReveal>

        {/* Advanced Flipping Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center w-full">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="w-full flex flex-col items-center"
            >
              <ScrollReveal delay={index * 100} className="w-full">
                <div
                  ref={setCardRef(index)}
                  className="advanced-card w-full h-120 cursor-pointer group relative"
                  onClick={() => handleCardClick(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseMove={(e) => handleMouseMove(index, e)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Advanced Background Effects */}
                  <div
                    className={`card-bg-glow absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl`}
                    style={{
                      transform: "translateZ(-10px)",
                    }}
                  />

                  {/* Animated Border Gradient */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${getAccentColor(
                        service.accent
                      )}, transparent)`,
                      filter: "blur(8px)",
                      transform: "translateZ(-5px)",
                    }}
                  />

                  {/* Main Card Container */}
                  <div
                    className={`advanced-card-inner relative w-full h-full transition-all duration-600 ${
                      flippedCards[index] ? "rotate-y-180" : ""
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Front of Card with Advanced Effects */}
                    <div
                      className="advanced-card-front absolute w-full h-full backface-hidden rounded-2xl p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-900/90 to-black/90 border border-slate-700/30 shadow-2xl backdrop-blur-sm"
                      style={{
                        transform: "translateZ(1px)",
                      }}
                    >
                      {/* Animated Background Pattern */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at center, ${getAccentColor(
                            service.accent
                          )} 0%, transparent 70%)`,
                          filter: "blur(40px)",
                        }}
                      />

                      {/* Content Container */}
                      <div className="relative z-10 w-full">
                        {/* Floating Icon with Gradient Border */}
                        <div className="relative mb-6">
                          <div
                            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse-slow"
                            style={{
                              background: `linear-gradient(45deg, ${getAccentColor(
                                service.accent
                              )}, transparent)`,
                              filter: "blur(12px)",
                              transform: "scale(1.2)",
                            }}
                          />
                          
                        </div>

                        {/* Text Content with Stagger Animation */}
                        <div className="space-y-4">
                          <h3
                            className="text-xl font-bold text-white mb-3 group-hover:scale-105 transition-transform duration-300"
                            style={{
                              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                            }}
                          >
                            {service.title}
                          </h3>
                          <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-all duration-300">
                            {service.description}
                          </p>
                        </div>

                        {/* Animated CTA */}
                        <div className="mt-6">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-600/30 group-hover:border-slate-400/50 transition-all duration-300">
                            <span className="text-blue-400 text-sm font-medium">
                              Click for more
                            </span>
                            <div className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                              <svg viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card with Enhanced Design */}
                    <div
                      className="advanced-card-back absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl p-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-600/30 shadow-2xl backdrop-blur-sm overflow-hidden"
                      style={{
                        transform: "translateZ(1px) rotateY(180deg)",
                      }}
                    >
                      {/* Animated Background */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(45deg, transparent, ${getAccentColor(
                            service.accent
                          )}10, transparent)`,
                        }}
                      />

                      <div className="relative z-10 h-full flex flex-col">
                        <h3
                          className="text-xl font-bold text-white mb-4 text-center group-hover:scale-105 transition-transform duration-300"
                          style={{
                            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                          }}
                        >
                          {service.title}
                        </h3>

                        <p className="text-slate-300 text-sm mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                          {service.details}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-blue-400 font-semibold text-sm mb-4 group-hover:text-blue-300 transition-colors duration-300">
                            Core Features
                          </h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-center text-slate-300 text-sm group-hover:text-slate-200 transition-all duration-300 hover:translate-x-2"
                              >
                                <div className="relative mr-3">
                                  <div
                                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                      background: getAccentColor(
                                        service.accent
                                      ),
                                      filter: "blur(8px)",
                                    }}
                                  />
                                  <div
                                    className="w-2 h-2 rounded-full relative"
                                    style={{
                                      backgroundColor: getAccentColor(
                                        service.accent
                                      ),
                                    }}
                                  />
                                </div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-auto pt-4 border-t border-slate-700/30 group-hover:border-slate-600/50 transition-colors duration-300">
                          <div className="flex items-center justify-center gap-2 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                            <svg
                              className="w-4 h-4 rotate-180"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                            </svg>
                            Click to return
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Border Effect */}
                  <div
                    className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                    style={{
                      border: `1px solid ${getAccentColor(service.accent)}`,
                      filter: "blur(0.5px)",
                      transform: "translateZ(2px)",
                    }}
                  />
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Enhanced Buttons Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center w-full mt-10">
          {Buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`advanced-button w-full px-10 py-9 bg-gradient-to-br from-slate-900/90 to-black/90 hover:${btn.gradient} text-white rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 font-medium border border-slate-700/30 shadow-2xl backdrop-blur-sm relative overflow-hidden group`}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Button Background Effects */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${btn.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl`}
                style={{
                  transform: "translateZ(-10px)",
                }}
              />

              {/* Animated Border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, transparent, ${getAccentColor(
                    btn.accent
                  )}, transparent)`,
                  filter: "blur(8px)",
                }}
              />

              {/* Content Container */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="text-center transition-all duration-500 transform">
                  {/* Title - Hidden when active */}
                  <div
                    className={`transition-all duration-500 ${
                      activeButtons[index] 
                        ? "opacity-0 -translate-y-4 scale-95" 
                        : "opacity-100 translate-y-0 scale-100"
                    }`}
                  >
                    <span className="text-lg font-bold text-white">
                      {btn.title}
                    </span>
                  </div>

                  {/* Details - Shown when active */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center p-4 transition-all duration-500 ${
                      activeButtons[index]
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-4 scale-95"
                    }`}
                  >
                    <span className="text-sm font-medium text-slate-200 leading-tight">
                      {btn.details}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <span>Click for details</span>
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" />
                  </svg>
                </div>
              </div>

              {/* Active State Border */}
              <div
                className={`absolute inset-0 rounded-2xl border opacity-0 transition-all duration-500 pointer-events-none ${
                  activeButtons[index] ? "opacity-100" : ""
                }`}
                style={{
                  border: `1px solid ${getAccentColor(btn.accent)}`,
                  filter: "blur(0.5px)",
                  boxShadow: activeButtons[index] 
                    ? `0 0 20px ${getAccentColor(btn.accent)}40`
                    : "none",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .advanced-card {
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        .advanced-card-inner {
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .advanced-card-front,
        .advanced-card-back {
          backface-visibility: hidden;
          transform-style: preserve-3d;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .advanced-button {
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        /* Advanced floating animations */
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-180deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 25s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        /* Smooth transitions for 3D effects */
        .advanced-card {
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        /* Enhanced shadow effects */
        .advanced-card-front,
        .advanced-card-back {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        .group:hover .advanced-card-front,
        .group:hover .advanced-card-back {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            0 0 50px -12px var(--glow-color, rgba(59, 130, 246, 0.3));
        }
      `}</style>
    </section>
  );
}