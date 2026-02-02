"use client"
import { Phone, MessageCircle, Shield, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, eventParams: Record<string, string>) => void
  }
}

export function Hero() {
  return (
    <section className="relative bg-primary py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
            <Shield className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Government Approved Services</span>
          </div>
          
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Call Now for Pest-Free Home in Pune
          </h1>
          
          <p className="mb-8 text-pretty text-lg text-primary-foreground/90 md:text-xl">
            Professional pest control services in Pune. Safe, effective, and eco-friendly solutions for homes, 
            offices, and commercial spaces. Get rid of cockroaches, termites, bed bugs, and more.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
  <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
    <a
      href="tel:+917350900022"
      className="flex items-center gap-2"
      onClick={() => {
        window.gtag?.("event", "click_to_call", {
          event_category: "Contact",
          event_label: "Phone Call",
        })
      }}
    >
      <Phone className="h-5 w-5" />
      Call Now: +91 7350900022
    </a>
  </Button>

  <Button
    size="lg"
    variant="outline"
    className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto bg-transparent"
    asChild
  >
    <a
      href="https://wa.me/917350900022?text=Hi%20I%20need%20pest%20control%20services%20in%20Pune"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
      onClick={() => {
        window.gtag?.("event", "whatsapp_click", {
          event_category: "Contact",
          event_label: "WhatsApp",
        })
      }}
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp Us
    </a>
  </Button>
</div>


          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">Same Day Service</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Clock className="h-5 w-5" />
              <span className="text-sm">24/7 Emergency</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Shield className="h-5 w-5" />
              <span className="text-sm">100% Safe Chemicals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
