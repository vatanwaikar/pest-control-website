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
  title: "Best Pest Control in Wakad Pune | Termite, Bed Bug, Cockroach Treatment",
  description: "Professional pest control services in Wakad, Pune. Affordable termite treatment, bed bug control, cockroach control. Same-day service available. Call +91 7350900022",
  keywords: [
    "pest control Wakad Pune",
    "termite control Wakad",
    "bed bug treatment Wakad",
    "cockroach control Wakad",
    "pest control services Wakad",
    "pest control near me Wakad",
    "pest control company Wakad Pune",
  ],
  openGraph: {
    title: "Best Pest Control in Wakad Pune | GlobalVision",
    description: "Professional pest control services in Wakad, Pune. Same-day service available for termites, bed bugs, cockroaches.",
    url: "https://globalvisionpestcontrol.com/pest-control-in-wakad-pune",
  },
}

const wakadFaqs = [
  {
    question: "What pest control services do you offer in Wakad, Pune?",
    answer: "We offer comprehensive pest control services in Wakad including termite treatment, bed bug control, cockroach control, mosquito control, rodent control, and general pest management for residential and commercial properties.",
  },
  {
    question: "How quickly can you provide pest control service in Wakad?",
    answer: "We offer same-day pest control service in Wakad. Our team is locally based and can reach your location within 2-3 hours of booking. Emergency services are also available 24/7.",
  },
  {
    question: "What is the cost of pest control in Wakad, Pune?",
    answer: "Pest control services in Wakad start from Rs. 999 for basic treatment. Termite treatment starts from Rs. 3,500, bed bug control from Rs. 2,500, and cockroach control from Rs. 1,200. Exact pricing depends on property size and infestation level.",
  },
  {
    question: "Are your pest control treatments safe for families in Wakad?",
    answer: "Yes, we use WHO-approved, eco-friendly chemicals that are completely safe for children, pets, and elderly family members. Our treatments are odorless and leave no harmful residues.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "https://globalvisionpestcontrol.com" },
  { name: "Pest Control in Wakad Pune", url: "https://globalvisionpestcontrol.com/pest-control-in-wakad-pune" },
]

export default function WakadPestControl() {
  return (
    <main>
      <LocalBusinessSchema />
      <FAQSchema faqs={wakadFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Best Pest Control in Wakad Pune
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Professional & Affordable Pest Control Services in Wakad, Pune
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
                  href="https://wa.me/917350900022?text=Hi, I need pest control services in Wakad, Pune"
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
            <h2 className="text-3xl font-bold text-foreground">Complete Pest Control Solutions in Wakad</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              GlobalVision Pest Control is your trusted local partner for professional pest control services in Wakad, Pune. 
              Being strategically located in Wakad, we understand the unique pest challenges faced by residents and businesses 
              in this rapidly developing area. From modern high-rise apartments to independent houses and commercial establishments, 
              our expert team delivers effective, safe, and affordable pest control solutions tailored to Wakad's specific needs.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Wakad's proximity to the Hinjewadi IT hub and excellent connectivity has led to rapid urbanization, making it 
              susceptible to various pest infestations. The humid climate and dense population create ideal breeding grounds for 
              cockroaches, termites, bed bugs, and mosquitoes. Our pest control services in Wakad are designed to address these 
              challenges using advanced techniques and eco-friendly products that ensure complete eradication while maintaining 
              the safety of your family and pets.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Wakad Residents Choose Us</h3>
            
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Local Expertise</h4>
                  <p className="text-muted-foreground">Deep understanding of Wakad's pest patterns and building structures</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Same-Day Service</h4>
                  <p className="text-muted-foreground">Quick response time within 2-3 hours across Wakad</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Certified Technicians</h4>
                  <p className="text-muted-foreground">Government approved and ISO certified pest control experts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">100% Satisfaction Guarantee</h4>
                  <p className="text-muted-foreground">Effective results with warranty on all treatments</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Our Pest Control Services in Wakad</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              We offer comprehensive pest management solutions covering all types of pests commonly found in Wakad. 
              Our services include termite pre-construction and post-construction treatment, bed bug control for apartments 
              and villas, cockroach control for kitchens and restaurants, mosquito control for residential societies, 
              and rodent control for commercial spaces. Each treatment is customized based on the infestation level, 
              property type, and specific requirements of Wakad locations.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Serving All Areas in Wakad</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services cover all major areas in Wakad including Wakad Chowk, near Wakad Bridge, 
              Phoenix Market City area, Hinjewadi-Wakad road, Datta Mandir road, and all residential societies 
              along the Mumbai-Pune highway. Whether you're living in a high-rise tower like Gera Genesis or 
              in an independent house, our team reaches every corner of Wakad promptly.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Popular landmarks we serve near include Balewadi Stadium, Rajiv Gandhi Infotech Park proximity areas, 
              Wakad railway station vicinity, and all commercial complexes along the main Wakad-Baner road. 
              Our local presence ensures quick service delivery anywhere in Wakad.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Specialized Services in Wakad</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Termite Control in Wakad</h3>
                <p className="mb-4 text-muted-foreground">
                  Complete termite treatment for homes and offices in Wakad. Pre and post-construction solutions with warranty.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/termite-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Bed Bug Control in Wakad</h3>
                <p className="mb-4 text-muted-foreground">
                  Effective bed bug treatment for apartments and villas in Wakad. Chemical and heat treatment options available.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/bed-bug-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Cockroach Control in Wakad</h3>
                <p className="mb-4 text-muted-foreground">
                  Professional cockroach control for kitchens, restaurants, and homes in Wakad. Gel and spray treatments.
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
                  "Excellent pest control service in Wakad! They treated our 3BHK apartment for bed bugs and the results were amazing. 
                  The team was professional, used safe chemicals, and we haven't seen any bed bugs since. Highly recommend for 
                  anyone looking for pest control in Wakad area."
                </p>
                <p className="font-semibold text-foreground">- Rohan Sharma, Wakad Resident</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Service Coverage in Wakad</h2>
          <div className="mb-8 aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789!2d73.7652!3d18.5952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzQyLjciTiA3M8KwNDUnNTQuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
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
              Shop No. 12, Green Plaza, Near Wakad Bridge, Wakad, Pune - 411057
            </p>
            <Button size="lg" asChild>
              <a href="tel:+917350900022">Call for Free Inspection in Wakad</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Frequently Asked Questions - Wakad</h2>
          <Accordion type="single" collapsible className="w-full">
            {wakadFaqs.map((faq, index) => (
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
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Get Pest-Free Living in Wakad Today!</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Book professional pest control service in Wakad, Pune. Same-day service available with 100% satisfaction guarantee.
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
