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
  title: "Best Pest Control in Baner Pune | Termite, Bed Bug, Cockroach Treatment",
  description: "Professional pest control services in Baner, Pune. Affordable termite treatment, bed bug control, cockroach control. Same-day service available. Call +91 7350900022",
  keywords: [
    "pest control Baner Pune",
    "termite control Baner",
    "bed bug treatment Baner",
    "cockroach control Baner",
    "pest control services Baner",
    "pest control near me Baner",
    "pest control company Baner Pune",
  ],
  openGraph: {
    title: "Best Pest Control in Baner Pune | GlobalVision",
    description: "Professional pest control services in Baner, Pune. Same-day service available for termites, bed bugs, cockroaches.",
    url: "https://globalvisionpestcontrol.com/pest-control-in-baner-pune",
  },
}

const banerFaqs = [
  {
    question: "What pest control services do you offer in Baner, Pune?",
    answer: "We provide comprehensive pest control services in Baner including termite treatment, bed bug control, cockroach control, mosquito control, rodent control, and general pest management for residential and commercial properties.",
  },
  {
    question: "How quickly can you provide pest control service in Baner?",
    answer: "We offer same-day pest control service in Baner. Our team can reach your location within 1-2 hours of booking. Emergency pest control services are available 24/7 for urgent situations.",
  },
  {
    question: "What is the cost of pest control in Baner, Pune?",
    answer: "Pest control services in Baner start from Rs. 1,199 for basic treatment. Termite treatment starts from Rs. 4,000, bed bug control from Rs. 2,800, and cockroach control from Rs. 1,400. Pricing depends on property size and infestation severity.",
  },
  {
    question: "Are your pest control treatments safe for families in Baner?",
    answer: "Absolutely! We use WHO-approved, eco-friendly chemicals that are completely safe for children, pets, and elderly family members. Our treatments are odorless and leave no harmful residues.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "https://globalvisionpestcontrol.com" },
  { name: "Pest Control in Baner Pune", url: "https://globalvisionpestcontrol.com/pest-control-in-baner-pune" },
]

export default function BanerPestControl() {
  return (
    <main>
      <LocalBusinessSchema />
      <FAQSchema faqs={banerFaqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Best Pest Control in Baner Pune
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Professional & Affordable Pest Control Services in Baner, Pune
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
                  href="https://wa.me/917350900022?text=Hi, I need pest control services in Baner, Pune"
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
            <h2 className="text-3xl font-bold text-foreground">Complete Pest Control Solutions in Baner</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              GlobalVision Pest Control is your premier choice for professional pest control services in Baner, Pune. 
              As one of Pune's most upscale residential and commercial areas, Baner requires specialized pest management 
              solutions that match its sophisticated lifestyle. Our expert team delivers effective, safe, and discreet 
              pest control services tailored to the unique needs of Baner's luxury apartments, independent bungalows, 
              and commercial establishments.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Baner's strategic location near the Mumbai-Pune expressway and its rapid development have made it 
              susceptible to various pest infestations. The area's mix of residential complexes, restaurants, and 
              commercial spaces creates ideal conditions for cockroaches, termites, bed bugs, and rodents. Our pest 
              control services in Baner are specifically designed to address these challenges using advanced techniques 
              and premium quality products that ensure complete eradication while maintaining the aesthetic appeal 
              of your property.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Baner Residents Trust Our Services</h3>
            
            <div className="grid gap-4 md:grid-cols-2 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Premium Quality Service</h4>
                  <p className="text-muted-foreground">High-quality pest control solutions matching Baner's lifestyle standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Quick Response</h4>
                  <p className="text-muted-foreground">Same-day service within 1-2 hours anywhere in Baner</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Experienced Professionals</h4>
                  <p className="text-muted-foreground">Certified technicians with expertise in Baner's pest challenges</p>
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

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Comprehensive Pest Control in Baner</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services in Baner cover all major pest problems faced by residents and businesses. 
              We specialize in termite control for luxury villas and high-rise apartments, bed bug treatment for 
              residential societies, cockroach control for restaurants and commercial kitchens, mosquito control 
              for gated communities, and rodent control for office spaces. Each treatment plan is customized based 
              on the specific requirements of Baner's diverse property types.
            </p>

            <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Serving All Areas in Baner</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services cover all major areas in Baner including Baner-Pashan link road, 
              near Balewadi high street, Baner-Balewadi area, along the Mumbai-Pune highway, and all residential 
              societies in the vicinity. Whether you're living in premium projects like Kolte-Patil 24K Glitterati 
              or in commercial spaces along Baner road, our team provides prompt and effective service.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We serve prominent locations near Pune University circle, Balewadi Sports Complex, 
              all commercial complexes on Baner road, and residential areas near the upcoming metro stations. 
              Our local expertise ensures comprehensive pest control coverage throughout Baner.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Specialized Services in Baner</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Termite Control in Baner</h3>
                <p className="mb-4 text-muted-foreground">
                  Advanced termite treatment for luxury homes and commercial spaces in Baner. Pre and post-construction solutions.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/termite-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Bed Bug Control in Baner</h3>
                <p className="mb-4 text-muted-foreground">
                  Premium bed bug treatment for apartments and villas in Baner. Chemical and heat treatment options available.
                </p>
                <Button className="w-full" asChild>
                  <a href="/services/bed-bug-control">Learn More</a>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Cockroach Control in Baner</h3>
                <p className="mb-4 text-muted-foreground">
                  Professional cockroach control for restaurants, kitchens, and homes in Baner. Gel and spray treatments.
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
                  "Outstanding pest control service in Baner! They handled termite treatment for our bungalow with utmost professionalism. 
                  The team was punctual, used advanced equipment, and provided detailed explanations. Our property is now completely 
                  termite-free. Best pest control company in Baner!"
                </p>
                <p className="font-semibold text-foreground">- Priya Deshmukh, Baner Resident</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Our Service Coverage in Baner</h2>
          <div className="mb-8 aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.123456789!2d73.7898!3d18.5645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzUyLjMiTiA3M8KwNDcnMTcuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
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
              Serving all areas in Baner, Pune - 411045
            </p>
            <Button size="lg" asChild>
              <a href="tel:+917350900022">Call for Free Inspection in Baner</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Frequently Asked Questions - Baner</h2>
          <Accordion type="single" collapsible className="w-full">
            {banerFaqs.map((faq, index) => (
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
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Get Premium Pest Control in Baner Today!</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Book professional pest control service in Baner, Pune. Same-day service with premium quality treatments guaranteed.
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
