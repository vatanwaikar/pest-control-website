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
  title: "Best Pest Control in Hinjewadi Pune | Termite, Bed Bug, Cockroach Treatment",
  description: "Professional pest control services in Hinjewadi, Pune. Affordable termite treatment, bed bug control, cockroach control. Same-day service available. Call +91 7350900022",
  keywords: [
    "pest control Hinjewadi Pune",
    "termite control Hinjewadi",
    "bed bug treatment Hinjewadi",
    "cockroach control Hinjewadi",
    "pest control services Hinjewadi",
    "pest control near me Hinjewadi",
    "pest control company Hinjewadi Pune",
  ],
  openGraph: {
    title: "Best Pest Control in Hinjewadi Pune | GlobalVision",
    description: "Professional pest control services in Hinjewadi, Pune. Same-day service available for termites, bed bugs, cockroaches.",
    url: "https://globalvisionpestcontrol.in/pest-control-in-hinjewadi-pune",
  },
}

const hinjewadiFaqs = [
  {
    question: "What pest control services do you offer in Hinjewadi, Pune?",
    answer: "We provide comprehensive pest control services in Hinjewadi including termite treatment, bed bug control, cockroach control, mosquito control, rodent control, and specialized pest management for IT offices and residential complexes.",
  },
  {
    question: "How quickly can you provide pest control service in Hinjewadi?",
    answer: "We offer same-day pest control service in Hinjewadi. Our team can reach your location within 1-2 hours of booking. We understand the importance of quick service for IT professionals and corporate clients.",
  },
  {
    question: "What is the cost of pest control in Hinjewadi, Pune?",
    answer: "Pest control services in Hinjewadi start from Rs. 1,099 for basic treatment. Termite treatment starts from Rs. 3,800, bed bug control from Rs. 2,600, and cockroach control from Rs. 1,300. Special corporate packages available.",
  },
  {
    question: "Are your pest control treatments safe for IT offices and homes in Hinjewadi?",
    answer: "Yes, we use WHO-approved, eco-friendly chemicals that are completely safe for office environments, children, and pets. Our treatments are odorless and can be scheduled during non-working hours for corporate clients.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "https://globalvisionpestcontrol.in" },
  { name: "Pest Control in Hinjewadi Pune", url: "https://globalvisionpestcontrol.in/pest-control-in-hinjewadi-pune" },
]

export default function HinjewadiPestControl() {
  return (
    <main>
      <LocalBusinessSchema />
      <FAQSchema faqs={hinjewadiFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Best Pest Control in Hinjewadi Pune
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Professional & Affordable Pest Control Services in Hinjewadi, Pune
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
                  href="https://wa.me/917350900022?text=Hi, I need pest control services in Hinjewadi, Pune"
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
            <h2 className="text-3xl font-bold text-foreground">Complete Pest Control Solutions in Hinjewadi</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              GlobalVision Pest Control is your trusted partner for professional pest control services in Hinjewadi, Pune. 
              As India's largest IT hub, Hinjewadi presents unique pest management challenges with its mix of corporate offices, 
              residential complexes, and commercial establishments. Our expert team delivers effective, safe, and discreet 
              pest control solutions specifically designed for the IT ecosystem and residential communities in Hinjewadi.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Hinjewadi's rapid development and high-density infrastructure create ideal conditions for various pest 
              infestations. The 24/7 working culture, food courts, and residential societies make it susceptible to 
              cockroaches, termites, bed bugs, mosquitoes, and rodents. Our pest control services in Hinjewadi are 
              tailored to address these challenges using advanced techniques and IT-friendly solutions that ensure 
              complete eradication without disrupting your work or lifestyle.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Hinjewadi Chooses Our Services</h3>
            
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">IT-Friendly Solutions</h4>
                  <p className="text-muted-foreground">Pest control treatments safe for sensitive IT equipment and office environments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Flexible Timing</h4>
                  <p className="text-muted-foreground">After-hours and weekend service for corporate clients in Hinjewadi</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Corporate Expertise</h4>
                  <p className="text-muted-foreground">Specialized experience with IT parks and commercial complexes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-muted-foreground">Same-day service within 1-2 hours across all Hinjewadi phases</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Specialized Pest Control for Hinjewadi</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services in Hinjewadi cater to the unique needs of both corporate and residential clients. 
              We specialize in termite control for IT buildings and residential societies, bed bug treatment for employee 
                  accommodations and apartments, cockroach control for food courts and office pantries, mosquito control 
                  for campus areas, and rodent control for server rooms and storage areas. Each treatment is customized 
                  based on the specific requirements of Hinjewadi's diverse infrastructure.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Comprehensive Coverage Across Hinjewadi</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services cover all phases of Hinjewadi including Phase 1, Phase 2, Phase 3, and the 
              rapidly developing Phase 4. We serve major IT parks like Rajiv Gandhi Infotech Park, all major 
              corporate offices along the Hinjewadi-Wakad road, residential societies in the vicinity, and commercial 
              establishments near the Mumbai-Pune highway. Whether you're in a multinational IT company or a residential 
                  complex, our team provides prompt and effective service.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We serve prominent locations near Infosys Campus, Wipro Hinjewadi, Tech Mahindra, Cognizant, 
              and all the major IT companies in the area. Our local expertise ensures comprehensive pest control 
              coverage throughout Hinjewadi's extensive corporate and residential landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Specialized Services in Hinjewadi</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Termite Control in Hinjewadi</h3>
                <p className="mb-4 text-muted-foreground">
                  Advanced termite treatment for IT buildings and residential complexes in Hinjewadi. Pre and post-construction solutions.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/termite-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Bed Bug Control in Hinjewadi</h3>
                <p className="mb-4 text-muted-foreground">
                  Professional bed bug treatment for employee accommodations and apartments in Hinjewadi. Chemical and heat treatment options.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/bed-bug-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Cockroach Control in Hinjewadi</h3>
                <p className="mb-4 text-muted-foreground">
                  Effective cockroach control for office pantries, food courts, and homes in Hinjewadi. Gel and spray treatments.
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
                  "Excellent pest control service for our IT office in Hinjewadi! They handled cockroach control in our food court 
                  and pantry areas with minimal disruption. The team worked during off-hours and was very professional. 
                  Highly recommend for corporate pest control in Hinjewadi!"
                </p>
                <p className="font-semibold text-foreground">- Amit Kumar, IT Manager, Hinjewadi</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Service Coverage in Hinjewadi</h2>
          <div className="mb-8 aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789!2d73.7234!3d18.5921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzMxLjYiTiA3M8KwNDMnMjAuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
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
              Serving all phases in Hinjewadi, Pune - 411057
            </p>
            <Button size="lg" asChild>
              <a href="tel:+917350900022">Call for Free Inspection in Hinjewadi</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <LocationServiceLinks area="Hinjewadi" areaUrl="/pest-control-in-hinjewadi-pune" />

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Frequently Asked Questions - Hinjewadi</h2>
          <Accordion type="single" collapsible className="w-full">
            {hinjewadiFaqs.map((faq, index) => (
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
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Get Professional Pest Control in Hinjewadi Today!</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Book expert pest control service in Hinjewadi, Pune. Corporate and residential solutions with same-day service guaranteed.
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
