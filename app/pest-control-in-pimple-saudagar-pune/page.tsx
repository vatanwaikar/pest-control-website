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
  title: "Best Pest Control in Pimple Saudagar Pune | Termite, Bed Bug, Cockroach Treatment",
  description: "Professional pest control services in Pimple Saudagar, Pune. Affordable termite treatment, bed bug control, cockroach control. Same-day service available. Call +91 7350900022",
  keywords: [
    "pest control Pimple Saudagar Pune",
    "termite control Pimple Saudagar",
    "bed bug treatment Pimple Saudagar",
    "cockroach control Pimple Saudagar",
    "pest control services Pimple Saudagar",
    "pest control near me Pimple Saudagar",
    "pest control company Pimple Saudagar Pune",
  ],
  openGraph: {
    title: "Best Pest Control in Pimple Saudagar Pune | GlobalVision",
    description: "Professional pest control services in Pimple Saudagar, Pune. Same-day service available for termites, bed bugs, cockroaches.",
    url: "https://globalvisionpestcontrol.in/pest-control-in-pimple-saudagar-pune",
  },
}

const pimpleSaudagarFaqs = [
  {
    question: "What pest control services do you offer in Pimple Saudagar, Pune?",
    answer: "We provide comprehensive pest control services in Pimple Saudagar including termite treatment, bed bug control, cockroach control, mosquito control, rodent control, and specialized pest management for residential and commercial properties.",
  },
  {
    question: "How quickly can you provide pest control service in Pimple Saudagar?",
    answer: "We offer same-day pest control service in Pimple Saudagar. Our team can reach your location within 1-2 hours of booking. Emergency pest control services are available 24/7 for urgent situations.",
  },
  {
    question: "What is the cost of pest control in Pimple Saudagar, Pune?",
    answer: "Pest control services in Pimple Saudagar start from Rs. 1,099 for basic treatment. Termite treatment starts from Rs. 3,700, bed bug control from Rs. 2,500, and cockroach control from Rs. 1,200. Pricing depends on property size and infestation level.",
  },
  {
    question: "Are your pest control treatments safe for families in Pimple Saudagar?",
    answer: "Absolutely! We use WHO-approved, eco-friendly chemicals that are completely safe for children, pets, and elderly family members. Our treatments are odorless and leave no harmful residues.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "https://globalvisionpestcontrol.in" },
  { name: "Pest Control in Pimple Saudagar Pune", url: "https://globalvisionpestcontrol.in/pest-control-in-pimple-saudagar-pune" },
]

export default function PimpleSaudagarPestControl() {
  return (
    <main>
      <LocalBusinessSchema />
      <FAQSchema faqs={pimpleSaudagarFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Best Pest Control in Pimple Saudagar Pune
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Professional & Affordable Pest Control Services in Pimple Saudagar, Pune
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
                  href="https://wa.me/917350900022?text=Hi, I need pest control services in Pimple Saudagar, Pune"
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
            <h2 className="text-3xl font-bold text-foreground">Complete Pest Control Solutions in Pimple Saudagar</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              GlobalVision Pest Control is your trusted partner for professional pest control services in Pimple Saudagar, Pune. 
              As one of Pune's fastest-growing residential and commercial hubs, Pimple Saudagar presents unique pest 
              management challenges with its mix of modern high-rise apartments, independent houses, and commercial 
              establishments. Our expert team delivers effective, safe, and affordable pest control solutions tailored 
              to the specific needs of Pimple Saudagar's diverse properties.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Pimple Saudagar's rapid development and excellent connectivity to the Mumbai-Pune highway have made it 
              a preferred residential destination, but this also makes it susceptible to various pest infestations. 
              The area's combination of residential societies, shopping complexes, and commercial spaces creates 
              ideal conditions for cockroaches, termites, bed bugs, mosquitoes, and rodents. Our pest control services 
              in Pimple Saudagar are specifically designed to address these challenges using advanced techniques and 
              eco-friendly products that ensure complete eradication while maintaining the safety of your family 
              and environment.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Pimple Saudagar Residents Trust Our Services</h3>
            
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Modern Housing Expert</h4>
                  <p className="text-muted-foreground">Specialized experience with high-rise apartments and modern societies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-muted-foreground">Same-day service within 1-2 hours anywhere in Pimple Saudagar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Family-Friendly Solutions</h4>
                  <p className="text-muted-foreground">Child and pet-safe treatments for residential areas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Comprehensive Coverage</h4>
                  <p className="text-muted-foreground">Complete pest management for residential and commercial properties</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Specialized Pest Control for Pimple Saudagar</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services in Pimple Saudagar cater to the unique needs of modern residential and commercial clients. 
              We specialize in termite control for high-rise apartments and independent houses, bed bug treatment 
              for residential societies and service apartments, cockroach control for restaurants and commercial kitchens, 
              mosquito control for gated communities, and rodent control for commercial spaces. Each treatment is 
              customized based on the specific requirements of Pimple Saudagar's diverse infrastructure.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Comprehensive Coverage Across Pimple Saudagar</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services cover all major areas in Pimple Saudagar including near the Mumbai-Pune highway, 
              along Wakad road, in the vicinity of shopping complexes, and all residential societies in the area. 
              Whether you're living in modern high-rise towers or in independent houses, our team provides prompt 
              and effective service across Pimple Saudagar.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We serve prominent locations near the highway, all major residential societies, 
              commercial complexes along the main roads, and shopping areas. Our local expertise 
              ensures comprehensive pest control coverage throughout Pimple Saudagar's rapidly developing landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Specialized Services in Pimple Saudagar</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Termite Control in Pimple Saudagar</h3>
                <p className="mb-4 text-muted-foreground">
                  Advanced termite treatment for modern apartments and houses in Pimple Saudagar. Pre and post-construction solutions.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/termite-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Bed Bug Control in Pimple Saudagar</h3>
                <p className="mb-4 text-muted-foreground">
                  Professional bed bug treatment for apartments and societies in Pimple Saudagar. Chemical and heat treatment options.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/bed-bug-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Cockroach Control in Pimple Saudagar</h3>
                <p className="mb-4 text-muted-foreground">
                  Effective cockroach control for restaurants, kitchens, and homes in Pimple Saudagar. Gel and spray treatments.
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
                  "Great pest control service in Pimple Saudagar! They treated our 3BHK apartment for bed bugs 
                  and the results were amazing. The team was professional, used safe chemicals, and provided 
                  detailed instructions. Very reliable service in Pimple Saudagar!"
                </p>
                <p className="font-semibold text-foreground">- Rohan Kulkarni, Pimple Saudagar Resident</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Service Coverage in Pimple Saudagar</h2>
          <div className="mb-8 aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789!2d73.7567!3d18.5901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzI0LjQiTiA3M8KwNDUnMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
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
              Serving all areas in Pimple Saudagar, Pune - 411027
            </p>
            <Button size="lg" asChild>
              <a href="tel:+917350900022">Call for Free Inspection in Pimple Saudagar</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <LocationServiceLinks area="Pimple Saudagar" areaUrl="/pest-control-in-pimple-saudagar-pune" />

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Frequently Asked Questions - Pimple Saudagar</h2>
          <Accordion type="single" collapsible className="w-full">
            {pimpleSaudagarFaqs.map((faq, index) => (
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
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Get Professional Pest Control in Pimple Saudagar Today!</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Book expert pest control service in Pimple Saudagar, Pune. Residential and commercial solutions with same-day service guaranteed.
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
