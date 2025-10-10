"use client";

import { Building, Lightbulb, Leaf, Settings, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { ServiceSpline3DBackground, PixelBlastBackground } from "./3d-background";
import { useState } from "react";

const services = [
  {
    icon: Building,
    title: "Architectural Design",
    description:
      "Complete architectural design services from concept to construction documentation with innovative spatial solutions.",
    features: [
      "Conceptual Design & Development",
      "3D Modeling & Visualization",
      "Construction Documentation",
      "Building Information Modeling",
      "Site Analysis & Planning",
      "Code Compliance Review"
    ],
    theme: "blue",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: Lightbulb,
    title: "Interior Design",
    description:
      "Thoughtful interior spaces that complement architectural vision and enhance user experience through intelligent design.",
    features: [
      "Space Planning & Layout",
      "Material & Finish Selection",
      "Custom Furniture Design",
      "Lighting Design Solutions",
      "Color Scheme Development",
      "FF&E Specification"
    ],
    theme: "purple",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
  },
  {
    icon: Leaf,
    title: "Sustainable Design",
    description:
      "Environmentally conscious design solutions that minimize impact and maximize efficiency for a greener future.",
    features: [
      "LEED Certification Support",
      "Energy Efficiency Analysis",
      "Sustainable Material Selection",
      "Green Building Strategies",
      "Environmental Impact Assessment",
      "Renewable Energy Integration"
    ],
    theme: "green",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: Settings,
    title: "Project Management",
    description:
      "Comprehensive project oversight ensuring quality, timeline, and budget adherence from conception to completion.",
    features: [
      "Construction Administration",
      "Vendor & Contractor Coordination",
      "Quality Control & Assurance",
      "Timeline & Budget Management",
      "Stakeholder Communication",
      "Risk Assessment & Mitigation"
    ],
    theme: "orange",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
];

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({...prev, [index]: true}));
  };

  const fallbackImages = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1503387769-00ec6e56d2c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <PixelBlastBackground />
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <ScrollReveal className="text-center mb-16">
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Services
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive architectural solutions tailored to bring your vision to life with precision and creativity
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const imageUrl = imageErrors[index] ? fallbackImages[index] : service.image;

            return (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div
                  className="relative group cursor-pointer transition-all duration-300 h-full bg-card border border-border rounded-xl shadow-sm hover:shadow-md overflow-hidden flex flex-col"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image Header */}
                  <div className="h-32 bg-muted relative overflow-hidden">
                    <img 
                      src={imageUrl} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => handleImageError(index)}
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    
                    {/* Icon Overlay */}
                    <div className={`absolute -bottom-4 right-4 p-3 rounded-lg bg-card border border-border shadow-lg`}>
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start text-card-foreground text-sm leading-relaxed"
                        >
                          <div className="w-1.5 h-1.5 rounded-full mt-2 bg-primary mr-3 flex-shrink-0" />
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-muted-foreground pl-5">
                          +{service.features.length - 3} more services
                        </li>
                      )}
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-auto pt-4 border-t border-border">
                      <button className="
                        w-full py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300
                        flex items-center justify-center gap-2
                        bg-secondary hover:bg-secondary/80 text-secondary-foreground
                        group-hover:shadow-sm
                      ">
                        Learn More
                        <ArrowRight 
                          className={`h-4 w-4 transition-transform duration-300 ${
                            hoveredCard === index ? 'translate-x-1' : 'translate-x-0'
                          }`} 
                        />
                      </button>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={400} className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-border rounded-xl bg-card/50 backdrop-blur-sm max-w-4xl mx-auto w-full shadow-sm">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold text-card-foreground mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground text-lg">
                Let's discuss how we can bring your architectural vision to life
              </p>
            </div>
            <button className="
              px-8 py-4 rounded-lg font-semibold text-lg
              bg-primary hover:bg-primary/90 text-primary-foreground
              flex items-center gap-3 group transition-all duration-300
              shadow-md hover:shadow-lg
              min-w-[180px]
            ">
              Get Started
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}