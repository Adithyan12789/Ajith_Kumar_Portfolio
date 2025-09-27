import { Building, Lightbulb, Leaf, Settings } from "lucide-react"

const services = [
  {
    icon: Building,
    title: "Architectural Design",
    description: "Complete architectural design services from concept to construction documentation.",
    features: ["Conceptual Design", "Design Development", "Construction Documents", "3D Visualization"],
  },
  {
    icon: Lightbulb,
    title: "Interior Design",
    description: "Thoughtful interior spaces that complement architectural vision and enhance user experience.",
    features: ["Space Planning", "Material Selection", "Furniture Design", "Lighting Design"],
  },
  {
    icon: Leaf,
    title: "Sustainable Design",
    description: "Environmentally conscious design solutions that minimize impact and maximize efficiency.",
    features: ["LEED Certification", "Energy Modeling", "Sustainable Materials", "Green Building Strategies"],
  },
  {
    icon: Settings,
    title: "Project Management",
    description: "Comprehensive project oversight ensuring quality, timeline, and budget adherence.",
    features: ["Construction Administration", "Vendor Coordination", "Quality Control", "Timeline Management"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive architectural services tailored to bring your vision to life with precision and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.title} className={`github-card animate-scale-in animate-stagger-${index + 1}`}>
              <service.icon className="h-8 w-8 mb-4" />
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-pretty text-sm">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
