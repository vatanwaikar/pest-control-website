import Link from "next/link"
import { Phone, MessageCircle, CheckCircle, Shield, Clock, Award, Type as type, LucideIcon } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  icon: LucideIcon
  benefits: string[]
  process: { title: string; description: string }[]
  pricing: { name: string; price: string; features: string[] }[]
  faqs: { question: string; answer: string }[]
  areas: string[]
  relatedServices: { title: string; href: string }[]
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  icon: Icon,
  benefits,
  process,
  pricing,
  faqs,
  areas,
  relatedServices,
}: ServicePageProps) {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">{title}</h1>
              <p className="mb-2 text-xl text-primary-foreground/90">{subtitle}</p>
              <p className="mb-8 text-primary-foreground/80">{description}</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-start">
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
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary-foreground/10 md:h-48 md:w-48">
              <Icon className="h-16 w-16 text-primary-foreground md:h-24 md:w-24" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Why Choose Our Service?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-lg bg-secondary p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Treatment Process</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Pricing Plans</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {pricing.map((plan) => (
              <Card key={plan.name} className="border-border">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{plan.name}</h3>
                  <p className="mb-4 text-3xl font-bold text-primary">{plan.price}</p>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <a href="tel:+917350900022 ">Book Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            * Prices may vary based on property size and infestation level. Contact us for exact quote.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Service Areas in Pune</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span key={area} className="rounded-full bg-card px-4 py-2 text-foreground shadow-sm">
                {area}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-muted-foreground">
            We provide service across all areas of Pune and PCMC. Same-day service available.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Related Services</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedServices.map((service) => (
              <Button key={service.title} variant="outline" asChild>
                <Link href={service.href}>{service.title}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Ready to Get Rid of Pests?</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Book a free inspection today. Our expert technicians are ready to help you.
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
