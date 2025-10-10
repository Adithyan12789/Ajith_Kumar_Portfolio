"use client";

import { ScrollReveal } from "./scroll-reveal";
import { PixelBlastBackground } from "./3d-background";
import { useState } from "react";
import ProfileCard from "./reactBits/ProfileCard"; // ✅ Import ReactBits ProfileCard

  const services = [
    {
      title: "Architectural Design",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Interior Design",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2058&q=80",
    },
    {
      title: "Sustainable Design",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Project Management",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
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
              Bringing your architectural vision to life through design,
              innovation, and precision.
            </p>
          </div>
        </ScrollReveal>

        {/* ProfileCard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <ProfileCard
                name={service.title} // 👈 Title as main heading
                title="Professional Service" // 👈 Subtitle (optional)
                handle="" // 👈 Remove handle if not needed
                status="" // 👈 Remove status text
                contactText="Learn More"
                avatarUrl={service.image}
                miniAvatarUrl={service.image}
                showUserInfo={false} // 👈 hides the name/details overlay
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() =>
                  console.log(`Learn more about ${service.title}`)
                }
                behindGradient="linear-gradient(135deg, #0f172a, #1e3a8a)"
                innerGradient="linear-gradient(180deg, rgba(255,255,255,0.1), transparent)"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
