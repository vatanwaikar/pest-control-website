import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Service Areas in Pune",
  description:
    "Pest control services across all areas of Pune - Wakad, Hinjewadi, Baner, Kothrud, Hadapsar, Pimpri-Chinchwad, Aundh, Viman Nagar. Same-day service. Call +91 7350900022 ",
  keywords: [
    "pest control Wakad",
    "pest control Hinjewadi",
    "pest control Baner",
    "pest control Kothrud",
    "pest control Hadapsar",
    "pest control Pimpri-Chinchwad",
    "pest control Aundh",
    "pest control Viman Nagar",
    "pest control Pune",
  ],
}

const areas = [
  {
    name: "Wakad",
    description:
      "Complete pest control services in Wakad including cockroach, termite, and bed bug treatment for apartments, IT parks, and commercial complexes.",
    services: ["Cockroach Control", "Termite Control", "Bed Bug Treatment", "Rodent Control"],
    landmarks: ["Wakad Bridge", "Dmart Wakad", "Shankar Kalat Nagar"],
  },
  {
    name: "Hinjewadi",
    description:
      "Professional pest control for IT parks, offices, and residential societies in Hinjewadi Phases 1, 2, and 3. Same-day service available.",
    services: ["Office Pest Control", "Termite Control", "Cockroach Control", "Mosquito Fogging"],
    landmarks: ["Infosys", "Wipro", "Rajiv Gandhi IT Park"],
  },
  {
    name: "Baner",
    description:
      "Expert pest control services in Baner for high-rise apartments, bungalows, restaurants, and cafes. Eco-friendly solutions.",
    services: ["Residential Pest Control", "Restaurant Pest Control", "Termite Control", "General Pest Control"],
    landmarks: ["Baner Road", "ICC Trade Tower", "Westend Mall"],
  },
  {
    name: "Kothrud",
    description:
      "Trusted pest control services in Kothrud serving families since 2010. Safe chemicals for homes with children and pets.",
    services: ["Home Pest Control", "Cockroach Gel Treatment", "Termite Control", "Bed Bug Treatment"],
    landmarks: ["Kothrud Depot", "Dahanukar Colony", "Karve Road"],
  },
  {
    name: "Hadapsar",
    description:
      "Comprehensive pest control in Hadapsar for warehouses, IT companies, residential complexes, and individual homes.",
    services: ["Warehouse Pest Control", "Office Pest Control", "Residential Pest Control", "Rodent Control"],
    landmarks: ["Magarpatta City", "EON IT Park", "Hadapsar Industrial Estate"],
  },
  {
    name: "Pimpri-Chinchwad",
    description:
      "Industrial and residential pest control services in PCMC area. Specialized solutions for factories and manufacturing units.",
    services: ["Industrial Pest Control", "Factory Pest Control", "Residential Pest Control", "Fumigation"],
    landmarks: ["PCMC Building", "Bhosari", "Nigdi", "Akurdi"],
  },
  {
    name: "Aundh",
    description:
      "Premium pest control services in Aundh for homes, IT offices, and healthcare facilities. Government approved chemicals.",
    services: ["Residential Pest Control", "Office Pest Control", "Hospital Pest Control", "Termite Control"],
    landmarks: ["Aundh ITI", "Bremen Chowk", "University Road"],
  },
  {
    name: "Viman Nagar",
    description:
      "Professional pest control in Viman Nagar serving apartments, hotels, and commercial establishments near Pune Airport.",
    services: ["Hotel Pest Control", "Apartment Pest Control", "Cockroach Control", "Bed Bug Treatment"],
    landmarks: ["Phoenix Marketcity", "Pune Airport", "Symbiosis"],
  },
  {
    name: "Kalyani Nagar",
    description:
      "Expert pest control services in Kalyani Nagar for premium apartments, restaurants, and corporate offices.",
    services: ["Premium Pest Control", "Restaurant Pest Control", "Termite Control", "General Pest Control"],
    landmarks: ["Aga Khan Bridge", "Yerwada", "Weikfield IT Park"],
  },
  {
    name: "Koregaon Park",
    description:
      "Specialized pest control in Koregaon Park for boutique hotels, cafes, restaurants, and luxury residences.",
    services: ["Hotel Pest Control", "Cafe Pest Control", "Residential Pest Control", "Mosquito Control"],
    landmarks: ["Osho Ashram", "German Bakery", "North Main Road"],
  },
  {
    name: "Shivaji Nagar",
    description:
      "Commercial and residential pest control in Shivaji Nagar. Serving old Pune areas with modern pest control solutions.",
    services: ["Shop Pest Control", "Office Pest Control", "Home Pest Control", "Rodent Control"],
    landmarks: ["FC Road", "JM Road", "Deccan Gymkhana"],
  },
  {
    name: "Magarpatta",
    description:
      "Trusted pest control partner for Magarpatta City. Serving residential towers, IT companies, and retail establishments.",
    services: ["IT Park Pest Control", "Residential Pest Control", "Retail Pest Control", "Termite Control"],
    landmarks: ["Cybercity", "Aditi Garden", "Destination Centre"],
  },
]

export default function AreasPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Pest Control Services Across Pune
            </h1>
            <p className="text-lg text-primary-foreground/90">
              We provide professional pest control services in all areas of Pune and Pimpri-Chinchwad. Same-day service
              available in most locations.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Area Links */}
      <section className="border-b bg-card py-8">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-4 text-center text-sm text-muted-foreground">Quick Links to Service Areas:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {areas.map((area) => (
              <a
                key={area.name}
                href={`#${area.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
              >
                {area.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Area Details */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {areas.map((area) => (
              <Card key={area.name} id={area.name.toLowerCase().replace(/\s+/g, "-")} className="border-border">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Pest Control in {area.name}</h2>
                  </div>
                  <p className="mb-4 text-muted-foreground">{area.description}</p>
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-semibold text-foreground">Services Available:</p>
                    <div className="flex flex-wrap gap-2">
                      {area.services.map((service) => (
                        <span key={service} className="flex items-center gap-1 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-semibold text-foreground">Areas Covered:</p>
                    <p className="text-sm text-muted-foreground">{area.landmarks.join(", ")}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" asChild>
                      <a href="tel:+917350900022 " className="flex items-center gap-1">
                        <Phone className="h-4 w-4" /> Call Now
                      </a>
                    </Button>
                    
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={`https://wa.me/917350900022 ?text=Hi, I need pest control services in ${area.name}, Pune`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <MessageCircle className="h-4 w-4" /> WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Areas List */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">All Service Areas in Pune</h2>
          <div className="grid gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Wakad",
              "Hinjewadi",
              "Baner",
              "Kothrud",
              "Hadapsar",
              "Pimpri-Chinchwad",
              "Aundh",
              "Viman Nagar",
              "Kalyani Nagar",
              "Koregaon Park",
              "Shivaji Nagar",
              "Magarpatta",
              "Yerwada",
              "Kondhwa",
              "Bibwewadi",
              "Katraj",
              "Sinhagad Road",
              "Warje",
              "Bavdhan",
              "Pashan",
              "Sus",
              "Maan",
              "Tathawade",
              "Ravet",
              "Akurdi",
              "Nigdi",
              "Bhosari",
              "Chakan",
              "Talegaon",
              "Lonavala",
              "Kharadi",
              "Wagholi",
            ].map((area) => (
              <div key={area} className="rounded-lg bg-card p-3 shadow-sm">
                <p className="text-foreground">{area}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-muted-foreground">
            Don&apos;t see your area? Don&apos;t worry! We serve all areas of Pune and PCMC. Contact us to confirm
            service availability.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Need Pest Control in Your Area?</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Call us now for same-day pest control service anywhere in Pune!
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+917350900022 " className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call: +91 7350900022 
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  )
}
