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
import { Phone, MessageCircle, MapPin, CheckCircle, Shield, Clock, Award } from "lucide-react"
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/components/json-ld"

export const metadata = {
  title: "Best Pest Control in Aundh Pune | Termite, Bed Bug, Cockroach Treatment",
  description: "Professional pest control services in Aundh, Pune. Affordable termite treatment, bed bug control, cockroach control. Same-day service available. Call +91 7350900022",
  keywords: [
    "pest control Aundh Pune",
    "termite control Aundh",
    "bed bug treatment Aundh",
    "cockroach control Aundh",
    "pest control services Aundh",
    "pest control near me Aundh",
    "pest control company Aundh Pune",
  ],
  openGraph: {
    title: "Best Pest Control in Aundh Pune | GlobalVision",
    description: "Professional pest control services in Aundh, Pune. Same-day service available for termites, bed bugs, cockroaches.",
    url: "https://globalvisionpestcontrol.in/pest-control-in-aundh-pune",
  },
}

const aundhFaqs = [
  {
    question: "What pest control services do you offer in Aundh, Pune?",
    answer: "We provide comprehensive pest control services in Aundh including termite treatment, bed bug control, cockroach control, mosquito control, rodent control, and specialized pest management for residential and commercial properties.",
  },
  {
    question: "How quickly can you provide pest control service in Aundh?",
    answer: "We offer same-day pest control service in Aundh. Our team can reach your location within 1-2 hours of booking. Emergency pest control services are available 24/7 for urgent situations.",
  },
  {
    question: "What is the cost of pest control in Aundh, Pune?",
    answer: "Pest control services in Aundh start from Rs. 1,199 for basic treatment. Termite treatment starts from Rs. 3,800, bed bug control from Rs. 2,600, and cockroach control from Rs. 1,300. Premium services available for upscale properties.",
  },
  {
    question: "Are your pest control treatments safe for families in Aundh?",
    answer: "Absolutely! We use WHO-approved, eco-friendly chemicals that are completely safe for children, pets, and elderly family members. Our treatments are odorless and leave no harmful residues.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "https://globalvisionpestcontrol.in" },
  { name: "Pest Control in Aundh Pune", url: "https://globalvisionpestcontrol.in/pest-control-in-aundh-pune" },
]

export default function AundhPestControl() {
  return (
    <main>
      <LocalBusinessSchema />
      <FAQSchema faqs={aundhFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Best Pest Control in Aundh Pune
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Professional & Affordable Pest Control Services in Aundh, Pune
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+917350900022" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: +91 7350900022
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <a
                  href="https://wa.me/917350900022?text=Hi, I need pest control services in Aundh, Pune"
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
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground">Complete Pest Control Solutions in Aundh</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              GlobalVision Pest Control is your premier choice for professional pest control services in Aundh, Pune. 
              As one of Pune's most well-planned and upscale residential areas, Aundh requires specialized pest 
              management solutions that match its sophisticated lifestyle. Our expert team delivers effective, safe, 
              and discreet pest control services tailored to the unique needs of Aundh's luxury apartments, independent 
              bungalows, and commercial establishments.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Aundh's strategic location near the University of Pune and its excellent connectivity have made it 
              a preferred residential destination, but this also makes it susceptible to various pest infestations. 
              The area's mix of high-end restaurants, educational institutions, and luxury residences creates 
              ideal conditions for cockroaches, termites, bed bugs, mosquitoes, and rodents. Our pest control 
              services in Aundh are specifically designed to address these challenges using advanced techniques 
              and premium quality products that ensure complete eradication while maintaining the aesthetic appeal 
              of your property.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Aundh Residents Trust Our Services</h3>
            
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Premium Quality Service</h4>
                  <p className="text-muted-foreground">High-quality pest control solutions matching Aundh's lifestyle standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-muted-foreground">Same-day service within 1-2 hours anywhere in Aundh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Educational Area Expert</h4>
                  <p className="text-muted-foreground">Specialized experience with educational institutions and hostels</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Discreet Service</h4>
                  <p className="text-muted-foreground">Professional and confidential pest control treatments</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Specialized Pest Control for Aundh</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services in Aundh cater to the unique needs of premium residential and commercial clients. 
              We specialize in termite control for luxury villas and high-rise apartments, bed bug treatment for 
              serviced apartments and hostels, cockroach control for fine dining restaurants and commercial kitchens, 
              mosquito control for gated communities, and rodent control for corporate offices. Each treatment is 
              customized based on the specific requirements of Aundh's upscale properties.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Comprehensive Coverage Across Aundh</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services cover all major areas in Aundh including Aundh Camp, along the 
              Aundh-Baner link road, near Savitribai Phule Pune University, and all premium residential societies 
              in the area. Whether you're living in luxury projects or in commercial spaces near the university, 
              our team provides prompt and effective service across Aundh.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We serve prominent locations near Pune University, all major restaurants and cafes in Aundh, 
              commercial complexes along the main roads, and premium residential societies. Our local expertise 
              ensures comprehensive pest control coverage throughout Aundh's prestigious landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Specialized Services in Aundh</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Termite Control in Aundh</h3>
                <p className="mb-4 text-muted-foreground">
                  Premium termite treatment for luxury homes and commercial spaces in Aundh. Pre and post-construction solutions.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/termite-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Bed Bug Control in Aundh</h3>
                <p className="mb-4 text-muted-foreground">
                  Professional bed bug treatment for apartments and hostels in Aundh. Chemical and heat treatment options available.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/bed-bug-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Cockroach Control in Aundh</h3>
                <p className="mb-4 text-muted-foreground">
                  Advanced cockroach control for restaurants, kitchens, and homes in Aundh. Gel and spray treatments.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/cockroach-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="mb-4 text-4xl">⭐⭐⭐⭐⭐</div>
                <p className="mb-4 text-lg italic text-muted-foreground">
                  "Excellent pest control service in Aundh! They handled cockroach control for our restaurant 
                  with great professionalism. The team was discreet, used premium products, and worked during 
                  off-hours. Highly recommend for commercial pest control in Aundh!"
                </p>
                <p className="font-semibold text-foreground">- Vikram Mehta, Restaurant Owner, Aundh</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Service Coverage in Aundh</h2>
          <div className="mb-8 aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789!2d73.8099!3d18.5623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzQzLjgiTiA3M8KwNDgnMzUuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
          <div className="text-center">
            <p className="mb-4 text-muted-foreground">
              <MapPin className="inline h-4 w-4 mr-2" />
              Serving all areas in Aundh, Pune - 411007
            </p>
            <Button size="lg" asChild>
              <a href="tel:+917350900022">Call for Free Inspection in Aundh</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Frequently Asked Questions - Aundh</h2>
          <Accordion type="single" collapsible className="w-full">
            {aundhFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Get Premium Pest Control in Aundh Today!</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Book professional pest control service in Aundh, Pune. Premium quality treatments with same-day service guaranteed.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+917350900022" className="flex items-center gap-2">
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
              <a href="/contact">Get Free Quote</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  )
}
