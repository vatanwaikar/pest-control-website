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
  title: "Best Pest Control in Kothrud Pune | Termite, Bed Bug, Cockroach Treatment",
  description: "Professional pest control services in Kothrud, Pune. Affordable termite treatment, bed bug control, cockroach control. Same-day service available. Call +91 7350900022",
  keywords: [
    "pest control Kothrud Pune",
    "termite control Kothrud",
    "bed bug treatment Kothrud",
    "cockroach control Kothrud",
    "pest control services Kothrud",
    "pest control near me Kothrud",
    "pest control company Kothrud Pune",
  ],
  openGraph: {
    title: "Best Pest Control in Kothrud Pune | GlobalVision",
    description: "Professional pest control services in Kothrud, Pune. Same-day service available for termites, bed bugs, cockroaches.",
    url: "https://globalvisionpestcontrol.com/pest-control-in-kothrud-pune",
  },
}

const kothrudFaqs = [
  {
    question: "What pest control services do you offer in Kothrud, Pune?",
    answer: "We provide comprehensive pest control services in Kothrud including termite treatment, bed bug control, cockroach control, mosquito control, rodent control, and specialized pest management for residential and commercial properties.",
  },
  {
    question: "How quickly can you provide pest control service in Kothrud?",
    answer: "We offer same-day pest control service in Kothrud. Our team can reach your location within 1-2 hours of booking. Emergency pest control services are available 24/7 for urgent situations.",
  },
  {
    question: "What is the cost of pest control in Kothrud, Pune?",
    answer: "Pest control services in Kothrud start from Rs. 999 for basic treatment. Termite treatment starts from Rs. 3,500, bed bug control from Rs. 2,400, and cockroach control from Rs. 1,100. Pricing depends on property size and infestation level.",
  },
  {
    question: "Are your pest control treatments safe for families in Kothrud?",
    answer: "Absolutely! We use WHO-approved, eco-friendly chemicals that are completely safe for children, pets, and elderly family members. Our treatments are odorless and leave no harmful residues.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "https://globalvisionpestcontrol.com" },
  { name: "Pest Control in Kothrud Pune", url: "https://globalvisionpestcontrol.com/pest-control-in-kothrud-pune" },
]

export default function KothrudPestControl() {
  return (
    <main>
      <LocalBusinessSchema />
      <FAQSchema faqs={kothrudFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Best Pest Control in Kothrud Pune
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Professional & Affordable Pest Control Services in Kothrud, Pune
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
                  href="https://wa.me/917350900022?text=Hi, I need pest control services in Kothrud, Pune"
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
            <h2 className="text-3xl font-bold text-foreground">Complete Pest Control Solutions in Kothrud</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              GlobalVision Pest Control is your trusted local partner for professional pest control services in Kothrud, Pune. 
              As one of Pune's most established residential and educational areas, Kothrud presents unique pest management 
              challenges with its mix of traditional homes, modern apartments, educational institutions, and commercial 
              establishments. Our expert team delivers effective, safe, and affordable pest control solutions tailored to 
              the specific needs of Kothrud's diverse properties.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Kothrud's strategic location near Pune University and its well-developed infrastructure make it 
              susceptible to various pest infestations. The area's combination of old buildings, new constructions, 
              educational institutions, and restaurants creates ideal conditions for cockroaches, termites, bed bugs, 
              mosquitoes, and rodents. Our pest control services in Kothrud are specifically designed to address these 
              challenges using advanced techniques and eco-friendly products that ensure complete eradication while 
              maintaining the safety of your family and environment.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Kothrud Residents Trust Our Services</h3>
            
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Local Expertise</h4>
                  <p className="text-muted-foreground">Deep understanding of Kothrud's pest patterns and building structures</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-muted-foreground">Same-day service within 1-2 hours anywhere in Kothrud</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Educational Area Specialist</h4>
                  <p className="text-muted-foreground">Specialized experience with hostels, PGs, and educational institutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Family-Safe Solutions</h4>
                  <p className="text-muted-foreground">Child and pet-friendly treatments for residential areas</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Comprehensive Pest Control in Kothrud</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services in Kothrud cover all major pest problems faced by residents and businesses. 
              We specialize in termite control for traditional bungalows and modern apartments, bed bug treatment 
              for PG accommodations and hostels, cockroach control for restaurants and homes, mosquito control for 
              residential societies, and rodent control for commercial spaces. Each treatment is customized based 
              on the specific requirements of Kothrud's diverse property types.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Serving All Areas in Kothrud</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services cover all major areas in Kothrud including Karve Road, Paud Road, 
              near MIT College, Kothrud depot area, and all residential societies along the main roads. 
              Whether you're living in traditional bungalows near Chandni Chowk or in modern apartments 
              near Paud Phata, our team provides prompt and effective service across Kothrud.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We serve prominent locations near MIT World Peace University, Symbiosis College, 
              all commercial establishments on Karve Road, and residential areas near the Kothrud bus depot. 
              Our local expertise ensures comprehensive pest control coverage throughout Kothrud.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Specialized Services in Kothrud</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Termite Control in Kothrud</h3>
                <p className="mb-4 text-muted-foreground">
                  Expert termite treatment for traditional homes and modern apartments in Kothrud. Pre and post-construction solutions.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/termite-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Bed Bug Control in Kothrud</h3>
                <p className="mb-4 text-muted-foreground">
                  Professional bed bug treatment for PGs, hostels, and apartments in Kothrud. Chemical and heat treatment options.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/bed-bug-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Cockroach Control in Kothrud</h3>
                <p className="mb-4 text-muted-foreground">
                  Effective cockroach control for restaurants, homes, and commercial spaces in Kothrud. Gel and spray treatments.
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
                  "Great pest control service in Kothrud! They treated our old bungalow for termites and the results were excellent. 
                  The team was very knowledgeable about traditional construction methods and used appropriate treatments. 
                  Very professional and affordable service in Kothrud!"
                </p>
                <p className="font-semibold text-foreground">- Suresh Patil, Kothrud Resident</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Service Coverage in Kothrud</h2>
          <div className="mb-8 aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789!2d73.8087!3d18.5114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzQxLjAiTiA3M8KwNDgnMzEuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
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
              Serving all areas in Kothrud, Pune - 411038
            </p>
            <Button size="lg" asChild>
              <a href="tel:+917350900022">Call for Free Inspection in Kothrud</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Frequently Asked Questions - Kothrud</h2>
          <Accordion type="single" collapsible className="w-full">
            {kothrudFaqs.map((faq, index) => (
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
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Get Reliable Pest Control in Kothrud Today!</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Book professional pest control service in Kothrud, Pune. Same-day service with family-safe treatments guaranteed.
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
