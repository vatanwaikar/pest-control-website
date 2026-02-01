import type { Metadata } from "next"
import Link from "next/link"
import { Phone, MessageCircle, Shield, Clock, Award, CheckCircle, Star, Users, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Pest Control Services in Pune - Call Now +91 7350900022",
  description:
    "Professional pest control services in Pune. Cockroach, termite, bed bug treatment. Government approved, safe chemicals. Same-day service. Starting Rs. 999. Free inspection!",
  robots: "noindex, nofollow",
}

const benefits = [
  "Government Approved & Licensed",
  "WHO-Safe Eco-Friendly Chemicals",
  "Same Day Service Available",
  "6 Month Warranty Included",
  "Trained & Certified Technicians",
  "10,000+ Happy Customers",
  "Transparent Pricing - No Hidden Costs",
  "Free Inspection & Quote",
]

const services = [
  { name: "Cockroach Control", price: "Rs. 999" },
  { name: "Termite Treatment", price: "Rs. 2,999" },
  { name: "Bed Bug Control", price: "Rs. 1,499" },
  { name: "Mosquito Fogging", price: "Rs. 799" },
  { name: "Rodent Control", price: "Rs. 1,299" },
]

const testimonials = [
  {
    name: "Rajesh S.",
    location: "Wakad",
    text: "Best pest control service in Pune! Quick response and effective treatment.",
  },
  {
    name: "Priya P.",
    location: "Hinjewadi",
    text: "Very professional team. Solved our termite problem completely.",
  },
  {
    name: "Amit K.",
    location: "Baner",
    text: "Safe chemicals, fair pricing. Highly recommended!",
  },
]

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero - Conversion Focused */}
      <section className="bg-primary py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
                <Shield className="h-4 w-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">Government Approved Services</span>
              </div>

              <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
                Pest Control Services in Pune
              </h1>

              <p className="mb-6 text-lg text-primary-foreground/90">
                Get rid of cockroaches, termites, bed bugs & more. Safe, effective, affordable. Starting at just Rs.
                999!
              </p>

             <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
  <Button size="lg" variant="secondary" className="text-lg" asChild>
    <a href="tel:+917350900022" className="flex items-center gap-2">
      <Phone className="h-5 w-5" />
      Call: +91 7350900022
    </a>
  </Button>

  <Button
    size="lg"
    variant="outline"
    className="border-primary-foreground/30 text-lg text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
    asChild
  >
    <a
      href="https://wa.me/917350900022?text=Hi%2C%20I%20need%20pest%20control%20services%20in%20Pune"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp Now
    </a>
  </Button>
</div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/80 lg:justify-start">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> Same Day Service
                </span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4" /> 4.9 Google Rating
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> 10,000+ Customers
                </span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="hidden lg:block">
              <Card className="border-0 bg-card/95 shadow-xl">
                <CardContent className="p-6">
                  <h2 className="mb-4 text-center text-xl font-bold text-foreground">Why Choose Us?</h2>
                  <div className="space-y-3">
                    {benefits.slice(0, 6).map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Our Services & Starting Prices
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <Card key={service.name} className="border-border text-center">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground">{service.name}</h3>
                  <p className="text-lg font-bold text-primary">{service.price}</p>
                  <p className="text-xs text-muted-foreground">onwards</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            * Final price depends on property size & infestation level. Free inspection for accurate quote.
          </p>
        </div>
      </section>

      {/* Benefits - Mobile */}
      <section className="bg-secondary py-12 lg:hidden">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">Why Choose GlobalVision?</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-lg bg-card p-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">Customer Reviews</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border">
                <CardContent className="p-6">
                  <div className="mb-2 flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground">&quot;{t.text}&quot;</p>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location}, Pune</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-2 text-center text-2xl font-bold text-foreground md:text-3xl">Get Free Quote</h2>
          <p className="mb-6 text-center text-muted-foreground">Fill the form and we&apos;ll call you back in 30 minutes</p>
          <ContactForm />
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-t py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-6 w-6 text-primary" />
              <span>Government Approved</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="h-6 w-6 text-primary" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Leaf className="h-6 w-6 text-primary" />
              <span>Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-6 w-6 text-primary" />
              <span>10,000+ Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA - Mobile */}
<div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card p-3 shadow-lg md:hidden">
  <div className="flex gap-3">
    <a
      href="tel:+917350900022"
      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-3 font-medium text-primary-foreground"
    >
      <Phone className="h-5 w-5" />
      Call Now
    </a>

    <a
      href="https://wa.me/917350900022?text=Hi%2C%20I%20need%20pest%20control%20services%20in%20Pune"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent py-3 font-medium text-accent-foreground"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  </div>
</div>


      {/* Footer */}
      <footer className="bg-foreground py-6 text-center text-sm text-background/80">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-2">GlobalVision - Professional Pest Control Services</p>
          <p>Shop No. 12, Green Plaza, Near Wakad Bridge, Wakad, Pune 411057</p>
          <p className="mt-2">
            <a href="tel:+917350900022" className="hover:text-primary">
              +91 7350900022
            </a>{" "}
            |{" "}
            <a href="mailto:info@globalvisionpestcontrol.com" className="hover:text-primary">
             globalvision028@gmail.com
            </a>
          </p>
          <p className="mt-4">&copy; 2024 GlobalVision Pest Control. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
