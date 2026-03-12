import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Bug, Droplets, Zap } from "lucide-react"

interface LocationServiceLinksProps {
  area: string
  areaUrl: string
}

const services = [
  {
    title: "Termite Control",
    href: "/services/termite-control",
    icon: Droplets,
    description: "Professional termite treatment and prevention"
  },
  {
    title: "Cockroach Control",
    href: "/services/cockroach-control",
    icon: Bug,
    description: "Effective cockroach elimination services"
  },
  {
    title: "Bed Bug Control",
    href: "/services/bed-bug-control",
    icon: Bug,
    description: "Comprehensive bed bug treatment"
  },
  {
    title: "Rodent Control",
    href: "/services/rodent-control",
    icon: Zap,
    description: "Safe rodent removal and prevention"
  },
  {
    title: "Mosquito Control",
    href: "/services/mosquito-control",
    icon: Bug,
    description: "Mosquito prevention and treatment"
  },
  {
    title: "General Pest Control",
    href: "/services/general-pest-control",
    icon: Droplets,
    description: "Complete pest management solutions"
  },
]

export function LocationServiceLinks({ area, areaUrl }: LocationServiceLinksProps) {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Pest Control Services Available in {area}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive pest control solutions for all common pests in {area}. 
            Each service is tailored to your specific pest control needs.
          </p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {service.description}
                      </p>
                      <Link 
                        href={service.href}
                        className="text-primary hover:text-primary/80 transition-colors text-sm font-medium inline-block"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
