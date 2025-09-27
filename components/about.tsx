import { Award, Users, Clock, Target } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const stats = [
  { icon: Award, label: "Awards Won", value: "12+" },
  { icon: Users, label: "Happy Clients", value: "50+" },
  { icon: Clock, label: "Years Experience", value: "15+" },
  { icon: Target, label: "Projects Completed", value: "80+" },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-shimmer">About me</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <ScrollReveal delay={100}>
                <p className="text-pretty animate-fade-in-stagger">
                  I'm an architect passionate about crafting accessible, sustainable spaces that blend thoughtful design
                  with innovative engineering. My work focuses on creating environments that not only look great but are
                  meticulously built for performance and longevity.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-pretty animate-fade-in-stagger">
                  Currently, I'm a Senior Architect at <span className="text-foreground font-semibold animate-typing">Studio Arch</span>, specializing in
                  sustainable design. I contribute to the creation and maintenance of architectural projects that push the
                  boundaries of environmental responsibility, ensuring our buildings meet the highest standards of green
                  building practices.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <p className="text-pretty animate-fade-in-stagger">
                  In the past, I've had the opportunity to develop projects across a variety of settings — from{" "}
                  <span className="text-foreground font-semibold hover-glow cursor-pointer">residential complexes</span> and{" "}
                  <span className="text-foreground font-semibold hover-glow cursor-pointer">commercial buildings</span> to{" "}
                  <span className="text-foreground font-semibold hover-glow cursor-pointer">public spaces</span> and{" "}
                  <span className="text-foreground font-semibold hover-glow cursor-pointer">cultural institutions</span>. Additionally, I also released a{" "}
                  <span className="text-foreground font-semibold text-shimmer cursor-pointer">comprehensive design course</span> a few years ago, guiding learners
                  through building sustainable architecture with modern techniques.
                </p>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          <ScrollReveal className="animate-slide-in-right" delay={400}>
            <div className="space-y-8">
              <div className="github-card hover-lift animate-scale-in-bounce">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold animate-fade-in-up">Senior Architect, Sustainability</h3>
                    <p className="animate-slide-up-stagger">Studio Arch</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded animate-rotate-in">2020 — Present</span>
                </div>
                <p className="text-muted-foreground text-pretty animate-fade-in-stagger">
                  Build and maintain critical architectural projects used to construct sustainable buildings across the
                  portfolio. Work closely with cross-functional teams, including engineers, designers, and project
                  managers, to implement and advocate for best practices in green architecture.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-xs bg-accent/10 px-2 py-1 rounded-full hover-scale hover-glow cursor-pointer animate-flip-in">LEED</span>
                  <span className="text-xs bg-accent/10 px-2 py-1 rounded-full hover-scale hover-glow cursor-pointer animate-flip-in animate-stagger-1">Sustainable Design</span>
                  <span className="text-xs bg-accent/10 px-2 py-1 rounded-full hover-scale hover-glow cursor-pointer animate-flip-in animate-stagger-2">BIM</span>
                  <span className="text-xs bg-accent/10 px-2 py-1 rounded-full hover-scale hover-glow cursor-pointer animate-flip-in animate-stagger-3">Project Management</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <ScrollReveal key={stat.label} delay={500 + index * 100}>
                    <div className="github-card text-center hover-lift hover-glow animate-zoom-in">
                      <stat.icon className="h-8 w-8 mx-auto mb-2 animate-float" />
                      <div className="text-2xl font-bold mb-1 text-shimmer">{stat.value}</div>
                      <div className="text-sm text-muted-foreground animate-fade-in-up">{stat.label}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
