"use client";

import { ScrollReveal } from "./scroll-reveal";
import { PixelBlastBackground } from "./3d-background";
import { useState } from "react";
import ProfileCard from "./reactBits/ProfileCard"; // ✅ Import ReactBits ProfileCard

const services = [
  {
    title: "Architectural Design",
    description: "Innovative architectural solutions tailored to your vision",
  },
  {
    title: "Interior Design", 
    description: "Creating beautiful and functional interior spaces",
  },
  {
    title: "Sustainable Design",
    description: "Eco-friendly designs for a sustainable future",
  },
  {
    title: "Project Management",
    description: "End-to-end project coordination and execution",
  },
];

export function Services() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const fallbackImages = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1503387769-00ec6e56d2c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
  ];

  return (
    <section id="services" className="min-h-screen py-20 md:py-28 relative">
      <PixelBlastBackground />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <ScrollReveal className="text-center mb-16">
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bringing your architectural vision to life through design,
              innovation, and precision.
            </p>
          </div>
        </ScrollReveal>
        {/* ProfileCard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <ProfileCard
                name={service.title}
                title={service.description}
                handle=""
                status=""
                contactText="Learn More"
                avatarUrl="" // Empty since we don't want images
                miniAvatarUrl=""
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() =>
                  console.log(`Learn more about ${service.title}`)
                }
                behindGradient="linear-gradient(135deg, #0f172a, rgb(0, 0, 0))"
                innerGradient="linear-gradient(180deg, rgba(255,255,255,0.1), transparent)"
                className="text-only-card" // New class for text-only cards
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
