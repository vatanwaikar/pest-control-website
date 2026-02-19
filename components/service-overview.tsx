import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bug, BugIcon, BedDouble, Bug as Cockroach, Mouse, Bug as Mosquito, Shield, Clock, Award } from "lucide-react"

const services = [
  {
    icon: BugIcon,
    title: "Termite Control",
    description: "Complete termite treatment for homes and offices. Pre and post-construction solutions with warranty.",
    features: ["Pre-construction treatment", "Post-construction control", "Wood protection", "Annual maintenance"],
    href: "/services/termite-control"
  },
  {
    icon: BedDouble,
    title: "Bed Bug Control",
    description: "Effective bed bug treatment for residential and commercial properties. Chemical and heat treatment options.",
    features: ["Chemical treatment", "Heat treatment", "Steam treatment", "Prevention tips"],
    href: "/services/bed-bug-control"
  },
  {
    icon: Cockroach,
    title: "Cockroach Control",
    description: "Professional cockroach control for kitchens, restaurants, and homes. Gel and spray treatments.",
    features: ["Gel baiting", "Spray treatment", "Insect growth regulators", "Sanitation advice"],
    href: "/services/cockroach-control"
  },
  {
    icon: Mouse,
    title: "Rodent Control",
    description: "Comprehensive rodent management for residential and commercial properties. Safe and effective solutions.",
    features: ["Trapping", "Baiting", "Exclusion", "Prevention"],
    href: "/services/rodent-control"
  },
  {
    icon: Mosquito,
    title: "Mosquito Control",
    description: "Complete mosquito control for residential societies and commercial areas. Fogging and larvicide treatment.",
    features: ["Fogging", "Larvicide treatment", "Source reduction", "Prevention"],
    href: "/services/mosquito-control"
  },
  {
    icon: Bug,
    title: "General Pest Control",
    description: "Complete pest management for all types of pests. Customized solutions for your specific needs.",
    features: ["Customized treatment", "Integrated pest management", "Regular maintenance", "Emergency service"],
    href: "/services/general-pest-control"
  }
]

const features = [
  {
    icon: Shield,
    title: "Government Approved",
    description: "All our treatments are approved by relevant authorities and completely safe for your family and pets."
  },
  {
    icon: Clock,
    title: "Same Day Service",
    description: "We offer same-day pest control service across all areas of Pune for urgent pest problems."
  },
  {
    icon: Award,
    title: "Expert Technicians",
    description: "Our team consists of certified and experienced pest control professionals."
  }
]

export function ServiceOverview() {
  return (
    <section className="py-16 bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Our Professional Pest Control Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive pest control solutions for all types of pests. 
            Our expert team uses advanced techniques and eco-friendly products to ensure complete eradication.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" asChild>
                    <Link href={service.href}>
                      Learn More About {service.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
