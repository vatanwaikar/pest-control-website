import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ArrowRight } from "lucide-react"

const areas = [
  { name: "Wakad", url: "/pest-control-in-wakad-pune", description: "Rapidly developing residential hub" },
  { name: "Baner", url: "/pest-control-in-baner-pune", description: "Upscale residential and commercial area" },
  { name: "Hinjewadi", url: "/pest-control-in-hinjewadi-pune", description: "India's largest IT hub" },
  { name: "Kothrud", url: "/pest-control-in-kothrud-pune", description: "Educational and residential center" },
  { name: "Hadapsar", url: "/pest-control-in-hadapsar-pune", description: "Fast-growing residential and IT hub" },
  { name: "Viman Nagar", url: "/pest-control-in-viman-nagar-pune", description: "Premium area near airport" },
  { name: "Pimpri", url: "/pest-control-in-pimpri-pune", description: "Major industrial and residential hub" },
  { name: "Chinchwad", url: "/pest-control-in-chinchwad-pune", description: "Key industrial and residential area" },
  { name: "Aundh", url: "/pest-control-in-aundh-pune", description: "Well-planned upscale residential area" },
  { name: "Pimple Saudagar", url: "/pest-control-in-pimple-saudagar-pune", description: "Fast-growing modern residential hub" },
]

export function AreaLinks() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Pest Control Services Across Pune
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide professional pest control services in all major areas of Pune. 
            Click on your area to get specialized pest control solutions for your location.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Card key={area.name} className="border-border hover:border-primary/50 transition-colors group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {area.name}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {area.description}
                    </p>
                    <Link 
                      href={area.url}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Pest Control in {area.name}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Don't see your area listed? We serve all locations across Pune and PCMC.
          </p>
          <a 
            href="tel:+917350900022" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Call for Your Area: +91 7350900022
          </a>
        </div>
      </div>
    </section>
  )
}
