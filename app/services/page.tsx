import type { Metadata } from "next"
import Link from "next/link"
import { Bug, Home, BedDouble, Zap, MousePointer2, ArrowRight, Phone, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pest Control Services in Pune",
  description:
    "Complete pest control services in Pune. Cockroach control, termite treatment, bed bug control, mosquito control, and rodent control. Safe, effective, government approved. Call +91 7350900022 ",
}

const services = [
  {
    icon: Bug,
    title: "Cockroach Control",
    description:
      "Complete cockroach elimination using advanced gel treatment and spray methods. Safe for kitchens, restaurants, and food processing areas. Includes treatment for German, American, and Oriental cockroaches.",
    features: ["Gel Bait Treatment", "Spray Treatment", "Kitchen Safe", "6 Month Warranty"],
    href: "/services/cockroach-control",
    price: "Starting Rs. 999",
  },
  {
    icon: Home,
    title: "Termite Control",
    description:
      "Professional anti-termite treatment for pre and post construction. Protect your property from termite damage with our drilling and chemical barrier method. Complete protection for wooden furniture and structures.",
    features: ["Pre-Construction", "Post-Construction", "Drilling Method", "5 Year Warranty"],
    href: "/services/termite-control",
    price: "Starting Rs. 2,999",
  },
  {
    icon: BedDouble,
    title: "Bed Bug Control",
    description:
      "Effective bed bug treatment for homes, hotels, and hostels. Our heat and chemical treatment eliminates bed bugs at all life stages. Sleep peacefully without bed bug bites.",
    features: ["Heat Treatment", "Chemical Spray", "Mattress Safe", "3 Month Warranty"],
    href: "/services/bed-bug-control",
    price: "Starting Rs. 1,499",
  },
  {
    icon: Zap,
    title: "Mosquito Control",
    description:
      "Comprehensive mosquito control with fogging and larviciding. Protect your family from dengue, malaria, and chikungunya. Ideal for homes, societies, and commercial spaces.",
    features: ["Fogging Treatment", "Larviciding", "Society Coverage", "Monthly Plans"],
    href: "/services/mosquito-control",
    price: "Starting Rs. 799",
  },
  {
    icon: MousePointer2,
    title: "Rodent Control",
    description:
      "Professional rat and mice control using safe baiting systems and traps. Keep your warehouse, office, or home rodent-free. Includes sealing entry points and ongoing monitoring.",
    features: ["Bait Stations", "Glue Traps", "Entry Point Sealing", "Regular Monitoring"],
    href: "/services/rodent-control",
    price: "Starting Rs. 1,299",
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Header />

      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Professional Pest Control Services in Pune
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Complete pest management solutions for residential and commercial properties. Government approved, 
              safe chemicals, and guaranteed results across all areas of Pune.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden border-border">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center bg-secondary p-8 md:w-48">
                      <service.icon className="h-16 w-16 text-primary" />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                        <span className="text-lg font-semibold text-primary">{service.price}</span>
                      </div>
                      <p className="mb-4 text-muted-foreground">{service.description}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button asChild>
                          <Link href={service.href} className="flex items-center gap-2">
                            Learn More <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="tel:+917350900022 " className="flex items-center gap-2">
                            <Phone className="h-4 w-4" /> Call Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Need Help Choosing the Right Service?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Not sure which pest control treatment you need? Call us for a free inspection and our expert will 
            recommend the best solution for your pest problem.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <a href="tel:+917350900022 " className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call: +91 7350900022 
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://wa.me/917350900022 ?text=Hi, I need pest control services in Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  )
}
