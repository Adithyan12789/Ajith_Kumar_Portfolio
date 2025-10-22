"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Calendar,
  MapPin,
  Play,
  Pause,
  Grid3X3,
} from "lucide-react";
import Image from "next/image";
import { ParticleBackground } from "./particle-background";

const projects = [
  {
    id: 1,
    title: "Terramod - RESIDENTIAL BUILDING",
    category: "Residential",
    year: "2024",
    location: "Mullurkaro, Thrissur, Kerala",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    video: "./1000206006.mp4",
    description:
      "The residence is designed to offer a practical and comfortable living environment for a family, with a clear focus on space optimization and natural ventilation. The layout includes 2 bedrooms, a spacious living and dining area, and a well-shaded sit-out, all efficiently arranged on a compact plot. Blending traditional Kerala architecture elements with a modern touch, the project addresses climatic responsiveness and privacy while ensuring functional flow throughout the house.",
    tags: ["Modern Family Living", "Functional Spaces", "Regional Aesthetics"],
    specs: ["Land Area: 13514 m²", "Ground Floor Area: 13152 m²"],
    status: "Architectural Design",
    typology: "Residential",
    vision: "Modern Family Living, Functional Spaces, Regional Aesthetics",
  },
  {
    id: 2,
    title: "Urban Oasis",
    category: "Commercial",
    year: "2023",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    video: "https://player.vimeo.com/video/834456347?h=6c8b5c5a5a",
    description:
      "A biophilic office design that brings nature into the urban workspace, promoting wellness and productivity.",
    tags: ["Biophilic", "Office", "Green Building"],
    specs: ["12 Floors", "LEED Platinum", "Rooftop Garden"],
    status: "Completed",
    typology: "Commercial",
    vision: "Biophilic design for urban wellness",
  },
  {
    id: 3,
    title: "Coastal Retreat",
    category: "Residential",
    year: "2023",
    location: "Malibu, CA",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    video: "https://player.vimeo.com/video/834456347?h=6c8b5c5a5a",
    description:
      "A sustainable coastal home designed to withstand environmental challenges while maximizing ocean views.",
    tags: ["Coastal", "Sustainable", "Views"],
    specs: ["3200 sq ft", "Ocean Front", "Hurricane Resistant"],
    status: "Under Construction",
    typology: "Residential",
    vision: "Sustainable coastal living",
  },
  {
    id: 4,
    title: "Innovation Hub",
    category: "Commercial",
    year: "2022",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    video: "https://player.vimeo.com/video/834456347?h=6c8b5c5a5a",
    description:
      "A flexible workspace designed for creativity and collaboration, featuring modular spaces and cutting-edge technology integration.",
    tags: ["Tech", "Flexible", "Collaboration"],
    specs: ["8 Floors", "Modular Design", "AI Integration"],
    status: "Completed",
    typology: "Commercial",
    vision: "Innovative workspace solutions",
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const categories = ["All", "Residential", "Commercial"];
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const currentProject = filteredProjects[selectedProject];
  const nextProjects = filteredProjects
    .filter((_, index) => index !== selectedProject)
    .slice(0, 3);

  // Video control functions
  const toggleVideo = () => {
    const video = videoRefs.current[selectedProject];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProjectSelect = (index: number) => {
    setSelectedProject(index);
    setIsPlaying(true);
  };

  // Auto-play video when project changes
  useEffect(() => {
    const video = videoRefs.current[selectedProject];
    if (video) {
      video.play().catch(() => {
        // Auto-play might be blocked by browser, we'll handle it gracefully
        setIsPlaying(false);
      });
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <ParticleBackground />

      {/* Advanced 3D Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-3xl animate-float-3d" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 rounded-full blur-3xl animate-float-3d delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-3d delay-1000" />

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Advanced Header Section */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter">
            <span className=" bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              ARCHITECTURE
            </span>
          </h1>
        </div>

        {/* Main Content Area - Single Project Display with Video Background */}
        <div className="relative rounded-3xl overflow-hidden mb-16 bg-black">
          {/* Video Background */}
          <div className="absolute inset-0">
            <video
              ref={(el: HTMLVideoElement | null) => {
                videoRefs.current[selectedProject] = el;
              }}
              src={currentProject.video}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            {/* Dark Overlay for Better Readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 lg:p-12 min-h-[80vh]">
            {/* Left Side - Video Controls */}
            <div className="flex items-center justify-center">
              {/* Empty - Video background is the focus */}
            </div>

            {/* Content Section - Right Side */}
            <div className="space-y-6 rounded-3xl p-8">
              {/* Project Number and Title */}
              <div className="space-y-4 text-right">
                <div className="text-5xl font-black text-white opacity-80">
                  {String(selectedProject + 1).padStart(2, "0")}
                </div>
                <h3 className="text-2xl lg:text-3xl font-black tracking-tight">
                  <span className="text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {currentProject.title}
                  </span>
                </h3>
                <p className="text-base font-medium">{currentProject.vision}</p>
              </div>

              {/* Status and Meta Information */}
              <div className="space-y-3 text-right">
                <div className="flex flex-wrap items-center gap-2 justify-end">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-xl text-xs">
                    <span className="text-white text-xs">
                      Status: {currentProject.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-xl text-xs">
                    <Calendar className="h-3 w-3 text-white" />
                    <span className="text-white text-xs">
                      Year: {currentProject.year}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 justify-end">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-xl text-xs">
                    <span className="text-white text-xs">
                      Typology: {currentProject.typology}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-xl text-xs">
                    <MapPin className="h-3 w-3 text-white" />
                    <span className="text-white text-xs">
                      {currentProject.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-2 text-right">
                <h4 className="text-sm font-medium text-white opacity-90">
                  Specifications
                </h4>
                <div className="flex flex-wrap gap-1 justify-end">
                  {currentProject.specs.map((spec, specIndex) => (
                    <span
                      key={spec}
                      className="px-2 py-1 rounded-xl text-white text-xs font-normal"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced Description */}
              <div className="space-y-2 text-right">
                <h4 className="text-sm font-medium text-white opacity-90">
                  Vision
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {currentProject.description}
                </p>
              </div>

              {/* Interactive Tags */}
              <div className="space-y-2 text-right">
                <h4 className="text-sm font-medium text-white opacity-90">
                  Features
                </h4>
                <div className="flex flex-wrap gap-1 justify-end">
                  {currentProject.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-xl text-gray-300 text-xs font-normal"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Advanced CTA Buttons */}
              {/* <div className="flex gap-2 pt-4 justify-end">
                <Button className="group/btn bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 transform hover:-translate-y-1 text-xs">
                  <span className="flex items-center gap-1">
                    Explore Project
                    <ExternalLink className="h-3 w-3 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-gray-300 hover:text-white hover:border-white/40 px-3 py-2 rounded-xl font-medium backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 text-xs"
                >
                  View Gallery
                </Button>
              </div> */}

              
              {/* Next Projects Cards - Bottom Section (Images Only) */}
              <div className="space-y-6 bg-black/40 px-4 py-5 rounded-xl backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold text-gray-300 text-center">
                  More Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {nextProjects.map((project, index) => {
                    const originalIndex = filteredProjects.findIndex(
                      (p) => p.id === project.id
                    );
                    return (
                      <div
                        key={project.id}
                        onClick={() => handleProjectSelect(originalIndex)}
                        className={`group relative h-48 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                          originalIndex === selectedProject
                            ? "ring-2 ring-blue-500"
                            : ""
                        }`}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-all duration-500" />

                        {/* Content */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-white font-semibold text-sm mb-1">
                            {project.title}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-300">
                              {project.category}
                            </span>
                            <span className="text-xs text-blue-400 bg-blue-500/20 px-2 py-1 rounded-lg">
                              {String(originalIndex + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Advanced Footer Section */}
        <div className="flex flex-col text-center mt-16 space-y-8">
          <div className="inline-flex flex-col items-center gap-4 text-gray-400">
            <span className="text-sm font-medium tracking-wider">
              THANK YOU FOR EXPLORING
            </span>
          </div>
        </div>
      </div>

      {/* Advanced CSS Animations */}
      <style jsx>{`
        @keyframes float-3d {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
          }
          33% {
            transform: translate3d(30px, -30px, 0) rotate(120deg) scale(1.1);
          }
          66% {
            transform: translate3d(-20px, 20px, 0) rotate(240deg) scale(0.9);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8),
              0 0 60px rgba(6, 182, 212, 0.6);
          }
        }

        .animate-float-3d {
          animation: float-3d 8s ease-in-out infinite;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
