import Link from "next/link"
import { Bug, Home, BedDouble, Zap, MousePointer2, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Bug,
    title: "Cockroach Control",
    description: "Complete cockroach elimination with gel treatment. Safe for kitchens and food areas.",
    href: "/services/cockroach-control",
    keywords: "cockroach control Pune",
  },
  {
    icon: Home,
    title: "Termite Control",
    description: "Anti-termite treatment for pre and post construction. Protect your property from damage.",
    href: "/services/termite-control",
    keywords: "termite control Pune",
  },
  {
    icon: BedDouble,
    title: "Bed Bug Control",
    description: "Effective bed bug treatment for homes and hotels. Sleep peacefully again.",
    href: "/services/bed-bug-control",
    keywords: "bed bug treatment Pune",
  },
  {
    icon: Zap,
    title: "Mosquito Control",
    description: "Fogging and larviciding for dengue and malaria prevention. Protect your family.",
    href: "/services/mosquito-control",
    keywords: "mosquito control Pune",
  },
  {
    icon: MousePointer2,
    title: "Rodent Control",
    description: "Rat and mice control with safe baiting systems. Keep your space rodent-free.",
    href: "/services/rodent-control",
    keywords: "rodent control Pune",
  },
]

export function Services() {
  return (
    <section className="py-16 md:py-24" id="services">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Professional Pest Control Services in Pune
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer comprehensive pest control solutions for residential and commercial properties 
            across Pune, including Wakad, Hinjewadi, Baner, Kothrud, and more.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group border-border transition-shadow hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-secondary">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <Link 
                  href={service.href} 
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
