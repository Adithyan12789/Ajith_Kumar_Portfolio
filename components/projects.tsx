"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { ParticleBackground } from "./particle-background";
import { Modern3DBackground } from "./modern-3d-background";

const projects = [
  {
    id: 1,
    title: "Zenith Residence",
    category: "Residential",
    year: "2024",
    location: "Los Angeles, CA",
    image: "/modern-minimalist-house-with-glass-walls.jpg",
    description:
      "A contemporary family home that seamlessly blends indoor and outdoor living through expansive glass walls and sustainable materials.",
    tags: ["Sustainable", "Modern", "Glass Design"],
  },
  {
    id: 2,
    title: "Urban Oasis",
    category: "Commercial",
    year: "2023",
    location: "New York, NY",
    image: "/modern-office-building-with-green-walls.jpg",
    description:
      "A biophilic office design that brings nature into the urban workspace, promoting wellness and productivity.",
    tags: ["Biophilic", "Office", "Green Building"],
  },
  {
    id: 3,
    title: "Coastal Retreat",
    category: "Residential",
    year: "2023",
    location: "Malibu, CA",
    image: "/modern-beach-house-with-ocean-views.jpg",
    description:
      "A sustainable coastal home designed to withstand environmental challenges while maximizing ocean views.",
    tags: ["Coastal", "Sustainable", "Views"],
  },
  {
    id: 4,
    title: "Innovation Hub",
    category: "Commercial",
    year: "2022",
    location: "San Francisco, CA",
    image: "/modern-tech-office-collaboration.png",
    description:
      "A flexible workspace designed for creativity and collaboration, featuring modular spaces and cutting-edge technology integration.",
    tags: ["Tech", "Flexible", "Collaboration"],
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Residential", "Commercial"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <Modern3DBackground />
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
            A collection of architectural projects that showcase innovative
            design and sustainable building practices.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 animate-slide-up animate-stagger-1">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`github-button ${
                selectedCategory === category
                  ? "github-button-primary"
                  : "github-button-secondary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`github-card group cursor-pointer animate-scale-in animate-stagger-${
                index + 2
              }`}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full aspect-[16/10] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <ExternalLink className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                </div>

                <p className="text-muted-foreground text-pretty leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-accent/10 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-slide-up animate-stagger-6">
          <Button
            variant="outline"
            className="github-button github-button-secondary px-6 py-3 bg-transparent"
          >
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
}
