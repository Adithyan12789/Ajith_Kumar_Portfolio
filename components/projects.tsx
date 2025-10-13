"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Play, Pause, Grid3X3 } from "lucide-react";
import Image from "next/image";
import { ParticleBackground } from "./particle-background";

const projects = [
  {
    id: 1,
    title: "Zenith Residence",
    category: "Residential",
    year: "2024",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    video: "https://player.vimeo.com/video/834456347?h=6c8b5c5a5a",
    description: "A contemporary family home that seamlessly blends indoor and outdoor living through expansive glass walls and sustainable materials.",
    tags: ["Sustainable", "Modern", "Glass Design"],
    specs: ["4500 sq ft", "4 Bedrooms", "3 Bathrooms", "Solar Powered"],
  },
  {
    id: 2,
    title: "Urban Oasis",
    category: "Commercial",
    year: "2023",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    video: "https://player.vimeo.com/video/834456347?h=6c8b5c5a5a",
    description: "A biophilic office design that brings nature into the urban workspace, promoting wellness and productivity.",
    tags: ["Biophilic", "Office", "Green Building"],
    specs: ["12 Floors", "LEED Platinum", "Rooftop Garden"],
  },
  {
    id: 3,
    title: "Coastal Retreat",
    category: "Residential",
    year: "2023",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    video: "https://player.vimeo.com/video/834456347?h=6c8b5c5a5a",
    description: "A sustainable coastal home designed to withstand environmental challenges while maximizing ocean views.",
    tags: ["Coastal", "Sustainable", "Views"],
    specs: ["3200 sq ft", "Ocean Front", "Hurricane Resistant"],
  },
  {
    id: 4,
    title: "Innovation Hub",
    category: "Commercial",
    year: "2022",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    video: "https://player.vimeo.com/video/834456347?h=6c8b5c5a5a",
    description: "A flexible workspace designed for creativity and collaboration, featuring modular spaces and cutting-edge technology integration.",
    tags: ["Tech", "Flexible", "Collaboration"],
    specs: ["8 Floors", "Modular Design", "AI Integration"],
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "masonry" | "carousel">("grid");
  const [magneticHover, setMagneticHover] = useState({ x: 0, y: 0 });

  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  const categories = ["All", "Residential", "Commercial"];
  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  // Magnetic cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const magneticX = (clientX / window.innerWidth - 0.5) * 40;
      const magneticY = (clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x: magneticX, y: magneticY });
      setMagneticHover({
        x: (clientX / window.innerWidth - 0.5) * 20,
        y: (clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Initialize projectRefs array
  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, filteredProjects.length);
    videoRefs.current = videoRefs.current.slice(0, filteredProjects.length);
  }, [filteredProjects]);

  // Enhanced Intersection Observer with advanced animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleProjects(prev => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '-80px 0px -80px 0px' }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Enhanced title observer with GSAP-like effects
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-advanced-slide');
          }
        });
      },
      { threshold: 0.4 }
    );

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (filterRef.current) titleObserver.observe(filterRef.current);

    return () => {
      observer.disconnect();
      titleObserver.disconnect();
    };
  }, [filteredProjects]);

  // Video control functions
  const toggleVideo = (projectId: number) => {
    if (activeVideo === projectId) {
      setActiveVideo(null);
      setIsPlaying(false);
    } else {
      setActiveVideo(projectId);
      setIsPlaying(true);
    }
  };

  // Reset visible projects when category changes
  useEffect(() => {
    setVisibleProjects([]);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <ParticleBackground />
      
      {/* Advanced 3D Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-3xl animate-float-3d"
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 rounded-full blur-3xl animate-float-3d delay-2000"
        />
        <div 
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-3d delay-1000"
        />
        
        {/* Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Advanced Header Section */}
        <div ref={titleRef} className="mb-20 text-center opacity-0">
          <div className="inline-flex items-center gap-3 text-sm text-blue-400 bg-blue-500/10 px-5 py-3 rounded-2xl mb-8 border border-blue-500/20 backdrop-blur-xl animate-glow">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping" />
            <span className="font-medium">Featured Projects</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping delay-1000" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              ARCHI
            </span>
            <br />
            <span 
              className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x"
              style={{ backgroundSize: '200% 200%' }}
            >
              TECTURE
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Redefining boundaries through <span className="text-blue-400 font-medium">innovative design</span>, sustainable solutions, and cutting-edge technology that transforms spaces into experiences.
          </p>
        </div>

        {/* Advanced Control Bar */}
        <div ref={filterRef} className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-16 p-6 bg-gray-900/30 rounded-3xl border border-gray-700/50 backdrop-blur-xl opacity-0">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-6 py-3 rounded-2xl font-semibold transition-all duration-500 overflow-hidden group transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-500/30"
                    : "bg-gray-800/50 text-gray-400 hover:text-white border border-gray-600/50 hover:border-gray-500 backdrop-blur-sm"
                }`}
              >
                <span className="relative z-10 text-sm tracking-wide">{category}</span>
                {selectedCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600" />
                )}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-3 bg-gray-800/50 rounded-2xl p-2 border border-gray-600/50 backdrop-blur-sm">
            {[
              { mode: "grid" as const, icon: Grid3X3 },
              { mode: "masonry" as const, icon: Grid3X3 },
              { mode: "carousel" as const, icon: Grid3X3 },
            ].map(({ mode, icon: Icon }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  viewMode === mode
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Projects Grid */}
        <div className={`space-y-32 max-w-full ${
          viewMode === 'masonry' ? 'columns-1 lg:columns-2 gap-8' : ''
        }`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el: HTMLDivElement | null) => {
                projectRefs.current[index] = el;
              }}
              data-index={index}
              className={`group relative min-h-[90vh] flex items-center transition-all duration-1000 ${
                viewMode === 'masonry' ? 'break-inside-avoid mb-8' : ''
              } ${
                visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: visibleProjects.includes(index) ? `${index * 200}ms` : '0ms',
                transform: `translate3d(0, ${visibleProjects.includes(index) ? 0 : 50}px, 0)`,
              }}
            >
              {/* Advanced Project Card */}
              <div className={`w-full ${
                viewMode === 'grid' ? 'grid lg:grid-cols-2 gap-16 items-center' : ''
              } ${
                viewMode === 'masonry' ? 'bg-gray-900/30 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-xl' : ''
              }`}>
                {/* Enhanced Media Section */}
                <div className={`relative group/card ${
                  viewMode === 'grid' && index % 2 === 1 ? 'lg:col-start-2' : ''
                } ${
                  viewMode === 'masonry' ? 'mb-8' : ''
                }`}>
                  <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden">
                    {/* Video/Image Toggle */}
                    {activeVideo === project.id ? (
                      <div className="relative w-full h-full bg-black rounded-3xl">
                        <iframe
                          ref={(el: HTMLIFrameElement | null) => {
                            videoRefs.current[index] = el;
                          }}
                          src={project.video}
                          className="w-full h-full rounded-3xl"
                          allow="autoplay; fullscreen"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover/card:scale-110"
                        priority={index === 0}
                      />
                    )}

                    {/* Advanced Overlay System */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover/card:opacity-20 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover/card:opacity-100 transition-all duration-500" />

                    {/* Interactive Controls */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-white/10 animate-pulse">
                        <div className="text-2xl font-bold text-white">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-6 right-6 z-20 flex gap-3">
                      <button
                        onClick={() => toggleVideo(project.id)}
                        className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-blue-500 hover:bg-blue-500/20 transition-all duration-300 group/btn hover:scale-110"
                      >
                        {activeVideo === project.id ? (
                          <Pause className="h-5 w-5 text-white group-hover/btn:scale-110" />
                        ) : (
                          <Play className="h-5 w-5 text-white group-hover/btn:scale-110" />
                        )}
                      </button>
                      <button
                        title="ExternalLink"
                        className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-cyan-500 hover:bg-cyan-500/20 transition-all duration-300 group/btn hover:scale-110"
                      >
                        <ExternalLink className="h-5 w-5 text-white group-hover/btn:scale-110" />
                      </button>
                    </div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-emerald-500/50 opacity-0 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:scale-105" />
                  </div>

                  {/* Holographic Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-emerald-500/10 rounded-3xl blur-2xl -z-10 opacity-0 group-hover/card:opacity-100 transition-all duration-500" />
                </div>

                {/* Enhanced Content Section */}
                <div className={`space-y-8 ${
                  viewMode === 'grid' && index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                } ${
                  viewMode === 'masonry' ? 'bg-transparent' : 'bg-gray-900/30 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-xl'
                }`}>
                  {/* Category and Meta with Advanced Animation */}
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="text-blue-400 font-semibold text-sm bg-blue-500/20 px-4 py-2 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-2xl backdrop-blur-sm text-sm border border-gray-600/50">
                        <Calendar className="h-4 w-4" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-2xl backdrop-blur-sm text-sm border border-gray-600/50">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Title */}
                  <h3 className="text-4xl lg:text-5xl font-black tracking-tight">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {project.title.split(' ')[0]}
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {project.title.split(' ').slice(1).join(' ')}
                    </span>
                  </h3>

                  {/* Technical Specifications */}
                  <div className="flex flex-wrap gap-3">
                    {project.specs.map((spec, specIndex) => (
                      <span
                        key={spec}
                        className="px-4 py-2 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-gray-300 text-sm font-medium backdrop-blur-sm hover:border-blue-500 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300 cursor-pointer hover:scale-105"
                        style={{ animationDelay: `${specIndex * 100}ms` }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Description */}
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Interactive Tags with Magnetic Effect */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-gray-300 hover:text-white hover:border-cyan-500 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 cursor-pointer text-sm font-medium transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Advanced CTA Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button className="group/btn bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25 transform hover:-translate-y-1">
                      <span className="flex items-center gap-3">
                        Explore Project
                        <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-400 hover:text-white hover:border-gray-500 px-7 py-4 rounded-2xl font-semibold backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
                    >
                      View Gallery
                    </Button>
                  </div>
                </div>
              </div>

              {/* Connection Line Animation */}
              {index < filteredProjects.length - 1 && (
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-blue-500/50 to-transparent rounded-full animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Advanced Footer Section */}
        <div className="flex flex-col text-center mt-24 space-y-8">
          <div className="inline-flex flex-col items-center gap-4 text-gray-400">
            <span className="text-sm font-medium tracking-wider">THANK YOU FOR EXPLORING</span>
          </div>
        </div>
      </div>

      {/* Advanced CSS Animations */}
      <style jsx>{`
        @keyframes float-3d {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          33% { transform: translate3d(30px, -30px, 0) rotate(120deg) scale(1.1); }
          66% { transform: translate3d(-20px, 20px, 0) rotate(240deg) scale(0.9); }
        }
        
        @keyframes advanced-slide {
          0% { opacity: 0; transform: translate3d(0, 80px, 0) rotateX(10deg); }
          100% { opacity: 1; transform: translate3d(0, 0, 0) rotateX(0deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(6, 182, 212, 0.6); }
        }
        
        .animate-float-3d {
          animation: float-3d 8s ease-in-out infinite;
        }
        
        .animate-advanced-slide {
          animation: advanced-slide 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #06b6d4);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}