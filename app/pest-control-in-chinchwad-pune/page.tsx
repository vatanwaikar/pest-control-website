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
import { LocationServiceLinks } from "@/components/location-service-links"

export const metadata = {
  title: "Best Pest Control in Chinchwad Pune | Termite, Bed Bug, Cockroach Treatment",
  description: "Professional pest control services in Chinchwad, Pune. Affordable termite treatment, bed bug control, cockroach control. Same-day service available. Call +91 7350900022",
  keywords: [
    "pest control Chinchwad Pune",
    "termite control Chinchwad",
    "bed bug treatment Chinchwad",
    "cockroach control Chinchwad",
    "pest control services Chinchwad",
    "pest control near me Chinchwad",
    "pest control company Chinchwad Pune",
  ],
  openGraph: {
    title: "Best Pest Control in Chinchwad Pune | GlobalVision",
    description: "Professional pest control services in Chinchwad, Pune. Same-day service available for termites, bed bugs, cockroaches.",
    url: "https://globalvisionpestcontrol.in/pest-control-in-chinchwad-pune",
  },
}

const chinchwadFaqs = [
  {
    question: "What pest control services do you offer in Chinchwad, Pune?",
    answer: "We provide comprehensive pest control services in Chinchwad including termite treatment, bed bug control, cockroach control, mosquito control, rodent control, and specialized pest management for residential and industrial properties.",
  },
  {
    question: "How quickly can you provide pest control service in Chinchwad?",
    answer: "We offer same-day pest control service in Chinchwad. Our team can reach your location within 1-2 hours of booking. Emergency pest control services are available 24/7 for urgent situations.",
  },
  {
    question: "What is the cost of pest control in Chinchwad, Pune?",
    answer: "Pest control services in Chinchwad start from Rs. 999 for basic treatment. Termite treatment starts from Rs. 3,300, bed bug control from Rs. 2,300, and cockroach control from Rs. 1,100. Industrial packages available.",
  },
  {
    question: "Are your pest control treatments safe for families and industries in Chinchwad?",
    answer: "Absolutely! We use WHO-approved, eco-friendly chemicals that are completely safe for children, pets, and industrial environments. Our treatments are odorless and comply with all safety standards.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "https://globalvisionpestcontrol.in" },
  { name: "Pest Control in Chinchwad Pune", url: "https://globalvisionpestcontrol.in/pest-control-in-chinchwad-pune" },
]

export default function ChinchwadPestControl() {
  return (
    <main>
      <LocalBusinessSchema />
      <FAQSchema faqs={chinchwadFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Best Pest Control in Chinchwad Pune
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Professional & Affordable Pest Control Services in Chinchwad, Pune
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
                  href="https://wa.me/917350900022?text=Hi, I need pest control services in Chinchwad, Pune"
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
            <h2 className="text-3xl font-bold text-foreground">Complete Pest Control Solutions in Chinchwad</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              GlobalVision Pest Control is your trusted partner for professional pest control services in Chinchwad, Pune. 
              As one of the key industrial and residential areas in PCMC, Chinchwad presents unique pest management 
              challenges with its mix of industrial estates, residential complexes, and commercial establishments. 
              Our expert team delivers effective, safe, and affordable pest control solutions tailored to the specific 
              needs of Chinchwad's diverse properties.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Chinchwad's strategic location and industrial significance make it susceptible to various pest 
              infestations. The area's combination of manufacturing units, residential societies, and commercial 
              spaces creates ideal conditions for cockroaches, termites, bed bugs, mosquitoes, and rodents. 
              Our pest control services in Chinchwad are specifically designed to address these challenges using 
              advanced techniques and industrial-grade products that ensure complete eradication while maintaining 
              the safety of your family and workplace environment.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Chinchwad Chooses Our Services</h3>
            
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Industrial Specialist</h4>
                  <p className="text-muted-foreground">Expertise in industrial pest control and warehouse management</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-muted-foreground">Same-day service within 1-2 hours anywhere in Chinchwad</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">PCMC Compliant</h4>
                  <p className="text-muted-foreground">All treatments comply with PCMC regulations and standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Versatile Solutions</h4>
                  <p className="text-muted-foreground">Complete pest management for residential and industrial clients</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Specialized Pest Control for Chinchwad</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services in Chinchwad cater to the unique needs of both industrial and residential clients. 
              We specialize in termite control for industrial buildings and residential societies, bed bug treatment 
              for worker accommodations and apartments, cockroach control for industrial canteens and homes, 
              mosquito control for residential colonies, and rodent control for warehouses and storage areas. 
              Each treatment is customized based on the specific requirements of Chinchwad's diverse infrastructure.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Comprehensive Coverage Across Chinchwad</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services cover all major areas in Chinchwad including Chinchwad railway station area, 
              along the old Pune-Mumbai highway, near the industrial belt, and all residential societies in the vicinity. 
              Whether you're in an industrial unit or a residential complex, our team provides prompt and effective 
              service across Chinchwad.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We serve prominent locations near Chinchwad railway station, all major industrial estates, 
              commercial establishments along the highway, and residential areas near schools and hospitals. 
              Our local expertise ensures comprehensive pest control coverage throughout Chinchwad's industrial 
              and residential landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Specialized Services in Chinchwad</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Termite Control in Chinchwad</h3>
                <p className="mb-4 text-muted-foreground">
                  Industrial-grade termite treatment for factories and residential complexes in Chinchwad. Pre and post-construction solutions.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/termite-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Bed Bug Control in Chinchwad</h3>
                <p className="mb-4 text-muted-foreground">
                  Professional bed bug treatment for worker accommodations and apartments in Chinchwad. Chemical and heat treatment options.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/bed-bug-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Cockroach Control in Chinchwad</h3>
                <p className="mb-4 text-muted-foreground">
                  Heavy-duty cockroach control for industrial canteens and homes in Chinchwad. Gel and spray treatments.
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
                  "Great pest control service in Chinchwad! They handled mosquito control for our residential society 
                  and the results were excellent. The team was professional, used safe chemicals, and provided 
                  follow-up service. Very reliable service in Chinchwad!"
                </p>
                <p className="font-semibold text-foreground">- Anita Deshmukh, Chinchwad Resident</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Service Coverage in Chinchwad</h2>
          <div className="mb-8 aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789!2d73.7913!3d18.9649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU3JzUzLjYiTiA3M8KwNDcnMzYuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
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
              Serving all areas in Chinchwad, Pune - 411019
            </p>
            <Button size="lg" asChild>
              <a href="tel:+917350900022">Call for Free Inspection in Chinchwad</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <LocationServiceLinks area="Chinchwad" areaUrl="/pest-control-in-chinchwad-pune" />

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Frequently Asked Questions - Chinchwad</h2>
          <Accordion type="single" collapsible className="w-full">
            {chinchwadFaqs.map((faq, index) => (
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
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Get Professional Pest Control in Chinchwad Today!</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Book expert pest control service in Chinchwad, Pune. Industrial and residential solutions with same-day service guaranteed.
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
