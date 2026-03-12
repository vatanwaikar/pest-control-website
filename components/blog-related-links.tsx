import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface BlogRelatedLinksProps {
  services?: { title: string; href: string }[]
  locations?: { name: string; href: string }[]
}

export function BlogRelatedLinks({ services = [], locations = [] }: BlogRelatedLinksProps) {
  if (services.length === 0 && locations.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
          Pest Control Services & Locations
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {services.length > 0 && (
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-foreground">Our Services</h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-background transition-colors group"
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {locations.length > 0 && (
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-foreground">Service Areas</h3>
              <div className="space-y-3">
                {locations.map((location) => (
                  <Link
                    key={location.href}
                    href={location.href}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-background transition-colors group"
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {location.name}
                    </span>
                    <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
