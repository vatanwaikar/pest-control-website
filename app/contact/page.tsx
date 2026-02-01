import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact GlobalVision Pest Control for pest control services. Call +91 7350900022, WhatsApp us, or fill the form. Same-day service available. Free inspection in Pune.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 7350900022", "+91 9730872242"],
    action: "tel:+917350900022",
    actionLabel: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    details: ["+91 7350900022", "Quick Response"],
    action: "https://wa.me/917350900022?text=Hi, I need pest control services in Pune",
    actionLabel: "Chat Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["globalvision028@gmail.com"],
    action: "mailto:globalvision028@gmail.com",
    actionLabel: "Send Email",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["Sr. No. 165, Malwadi", "Near Harish Super Market, Hadapsar, Pune 411028"],
    action: "https://www.google.com/maps?q=18.50619,73.93582",
    actionLabel: "Get Directions",
  },
]

export default function ContactPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">Contact Us</h1>
            <p className="text-lg text-primary-foreground/90">
              Have a pest problem? We&apos;re here to help! Call us, WhatsApp, or fill the form below for a free
              inspection and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <Card key={info.title} className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                    <info.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mb-2 text-lg font-semibold text-foreground">{info.title}</h2>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                  <a
                    href={info.action}
                    target={info.action.startsWith("http") ? "_blank" : undefined}
                    rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    {info.actionLabel}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Business Hours */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">Get a Free Quote</h2>
              <p className="mb-6 text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 30 minutes during business hours.
              </p>
              <ContactForm />
            </div>

            {/* Business Hours & Map */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">Business Hours</h2>
              <Card className="mb-6 border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-foreground">Monday - Saturday</p>
                        <p className="text-muted-foreground">8:00 AM - 8:00 PM</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Sunday</p>
                        <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Emergency Service</p>
                        <p className="text-muted-foreground">24/7 Available</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="mb-4 text-lg font-semibold text-foreground">Our Service Areas</h3>
              <div className="flex flex-wrap gap-2">
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
                ].map((area) => (
                  <span key={area} className="rounded-full bg-card px-3 py-1 text-sm text-foreground shadow-sm">
                    {area}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                We provide pest control services across all areas of Pune and PCMC. Same-day service available in most
                locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground">Prefer to Call?</h2>
          <p className="mb-6 text-primary-foreground/90">
            Speak directly with our pest control experts for immediate assistance.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+917350900022"
              className="flex items-center gap-2 rounded-lg bg-card px-6 py-3 font-medium text-foreground"
            >
              <Phone className="h-5 w-5" />
              +91 7350900022
            </a>
            <a
              href="https://wa.me/917350900022?text=Hi, I need pest control services in Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 font-medium text-primary-foreground"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  )
}
