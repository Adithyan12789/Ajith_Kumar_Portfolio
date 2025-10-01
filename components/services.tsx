import { Building, Lightbulb, Leaf, Settings } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { ServiceSpline3DBackground } from "./spline-3d-background";

const services = [
  {
    icon: Building,
    title: "Architectural Design",
    description:
      "Complete architectural design services from concept to construction documentation.",
    features: [
      "Conceptual Design",
      "Design Development",
      "Construction Documents",
      "3D Visualization",
    ],
  },
  {
    icon: Lightbulb,
    title: "Interior Design",
    description:
      "Thoughtful interior spaces that complement architectural vision and enhance user experience.",
    features: [
      "Space Planning",
      "Material Selection",
      "Furniture Design",
      "Lighting Design",
    ],
  },
  {
    icon: Leaf,
    title: "Sustainable Design",
    description:
      "Environmentally conscious design solutions that minimize impact and maximize efficiency.",
    features: [
      "LEED Certification",
      "Energy Modeling",
      "Sustainable Materials",
      "Green Building Strategies",
    ],
  },
  {
    icon: Settings,
    title: "Project Management",
    description:
      "Comprehensive project oversight ensuring quality, timeline, and budget adherence.",
    features: [
      "Construction Administration",
      "Vendor Coordination",
      "Quality Control",
      "Timeline Management",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20 relative">
      <ServiceSpline3DBackground />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              Services
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
              Comprehensive architectural services tailored to bring your vision
              to life with precision and creativity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={200 + index * 100}>
              <div className="github-card hover-lift animate-scale-in-bounce p-4 sm:p-6">
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8 mb-3 sm:mb-4 text-blue-500 animate-float" />
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 group-hover:text-blue-500 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 text-pretty text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={feature}
                      className="text-xs sm:text-sm flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 animate-fade-in-stagger"
                      style={{ animationDelay: `${featureIndex * 50}ms` }}
                    >
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent rounded-full mr-2 sm:mr-3 flex-shrink-0 animate-pulse-slow" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
