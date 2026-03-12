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
import { Phone, MessageCircle, CheckCircle, MapPin, Clock, Shield } from "lucide-react"
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/json-ld"
import Link from "next/link"
import { LocationServiceLinks } from "@/components/location-service-links"

export const metadata = {
  title: "Pest Control in Wagholi Pune | Same Day Service Available",
  description: "Professional pest control services in Wagholi, Pune. Termite, bed bug, cockroach, mosquito control. Government approved chemicals, 5 years warranty. Call +91 7350900022.",
  keywords: [
    "pest control Wagholi Pune",
    "pest control services Wagholi",
    "termite control Wagholi",
    "bed bug treatment Wagholi",
    "cockroach control Wagholi",
    "mosquito control Wagholi",
    "pest control near Wagholi",
    "Wagholi pest control company"
  ]
}

const faqs = [
  {
    question: "What is the cost of pest control in Wagholi, Pune?",
    answer: "Pest control costs in Wagholi range from Rs. 999 for general pest control to Rs. 15,000 for complete termite treatment. Prices vary based on property size, pest type, and infestation severity.",
  },
  {
    question: "Do you provide pest control for industrial areas in Wagholi?",
    answer: "Yes, we specialize in industrial pest control for Wagholi's manufacturing units, warehouses, and industrial estates. We offer customized solutions for large-scale pest management with minimal disruption.",
  },
  {
    question: "How quickly can you provide pest control service in Wagholi?",
    answer: "We offer same-day pest control services in Wagholi. For emergency pest control needs, we can reach your location within 2-3 hours anywhere in Wagholi.",
  },
  {
    question: "Are your pest control treatments safe for families in Wagholi?",
    answer: "Absolutely! We use government-approved, eco-friendly pest control chemicals that are safe for children, pets, and pregnant women. All our technicians are certified and follow strict safety protocols.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "https://globalvisionpestcontrol.in" },
  { name: "Pest Control in Wagholi Pune", url: "https://globalvisionpestcontrol.in/pest-control-in-wagholi-pune" },
]

export default function PestControlWagholi() {
  return (
    <main>
      <LocalBusinessSchema />
      <ServiceSchema 
        name="Pest Control Services in Wagholi"
        description="Professional pest control services in Wagholi, Pune including termite, bed bug, cockroach, mosquito, and rodent control with guaranteed results."
        url="https://globalvisionpestcontrol.in/pest-control-in-wagholi-pune"
        area="Wagholi"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Pest Control in Wagholi Pune
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Professional pest control services in Wagholi with same-day service availability. 
              Government approved chemicals and 5 years warranty for termite treatment.
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
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Wagholi, one of Pune's rapidly developing industrial and residential areas, faces unique pest control challenges 
              due to its mix of industrial estates, agricultural lands, and growing residential complexes. The area's proximity 
              to the Mula-Mutha river and numerous water bodies creates ideal breeding conditions for various pests. 
              GlobalVision Pest Control offers comprehensive pest management solutions specifically designed for Wagholi's diverse 
              environment, ensuring your property remains protected from common and specialized pest problems.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Why Wagholi Needs Professional Pest Control</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Wagholi's strategic location as an industrial hub and its ongoing residential development creates unique pest 
              control challenges. The area's numerous manufacturing units, warehouses, and godowns attract rodents and 
              stored product pests. The agricultural surroundings and water bodies contribute to mosquito and fly problems. 
              Rapid construction of residential societies like Nyati County, Kumar Sovereign, and other projects has led to 
              increased termite and general pest activity. Professional pest control in Wagholi is essential for maintaining 
              healthy living conditions and protecting industrial infrastructure.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Our Pest Control Services in Wagholi</h2>
            
            <div className="grid gap-6 md:grid-cols-2 my-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Termite Control in Wagholi</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete termite treatment for Wagholi properties with 5 years warranty. Pre and post-construction solutions.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Pre-construction anti-termite treatment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Post-construction termite control
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Annual maintenance contracts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Bed Bug Control in Wagholi</h3>
                  <p className="text-muted-foreground mb-4">
                    Professional bed bug treatment for Wagholi homes and hostels. Chemical and heat treatment options available.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Chemical gel treatment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Heat treatment for severe cases
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      6 months service warranty
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Rodent Control in Wagholi</h3>
                  <p className="text-muted-foreground mb-4">
                    Specialized rodent control for Wagholi industrial and residential areas. Safe and effective solutions.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Industrial rodent management
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Residential rat control
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Warehouse pest control
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Mosquito Control in Wagholi</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive mosquito control for Wagholi societies and industrial areas. Fogging and larvicide treatment.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Thermal fogging treatment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Larvicide application
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Monthly maintenance plans
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Areas We Cover in Wagholi</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services cover all major areas in Wagholi including Wagholi MIDC, industrial estates, 
              manufacturing units, warehouses, residential societies like Nyati County, Kumar Sovereign, and other 
              housing complexes. We provide pest control for both industrial and residential properties throughout 
              Wagholi, ensuring complete coverage of this rapidly developing area. Our team is familiar with 
              Wagholi's specific pest challenges and provides customized solutions for different property types.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Industrial Pest Control for Wagholi</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Wagholi's concentration of industrial units requires specialized commercial pest control solutions. 
              We offer customized pest management programs for manufacturing facilities, warehouses, godowns, and 
              industrial complexes that comply with industry standards and regulations. Our services include integrated 
              pest management, regular monitoring, and documentation for compliance purposes. We understand the importance 
              of maintaining pest-free industrial environments for product quality and employee safety.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Why Choose GlobalVision for Pest Control in Wagholi</h2>
            
            <div className="grid gap-4 md:grid-cols-2 my-8">
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Government Approved</h4>
                  <p className="text-muted-foreground">All our pest control chemicals are approved by Maharashtra Pollution Control Board.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Same Day Service</h4>
                  <p className="text-muted-foreground">We provide same-day pest control service anywhere in Wagholi.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">5 Years Warranty</h4>
                  <p className="text-muted-foreground">Get 5 years warranty on termite treatments across Wagholi.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Local Experts</h4>
                  <p className="text-muted-foreground">Our team understands Wagholi's specific pest challenges.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Pest Control Process in Wagholi</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control process in Wagholi begins with a comprehensive site inspection to identify pest types, 
              infestation levels, and potential entry points. Based on the assessment, we develop a customized 
              treatment plan using the most effective and safe methods suitable for industrial or residential settings. 
              Our certified technicians execute the treatment using government-approved chemicals and modern equipment. 
              We provide detailed documentation, safety data sheets, and post-treatment guidelines to ensure long-term 
              pest prevention and compliance with industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Local Testimonial */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Wagholi Residents Say</h2>
          </div>
          <Card className="border-border max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">SP</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Suresh Patil, Wagholi MIDC</h4>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Excellent industrial pest control service for our manufacturing unit in Wagholi. They understood our 
                    specific requirements and provided effective solutions without disrupting production. Very professional 
                    team and reasonable pricing. Highly recommend for industrial pest control in Wagholi."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Links */}
      <LocationServiceLinks area="Wagholi" areaUrl="/pest-control-in-wagholi-pune" />

      {/* FAQ Section */}
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
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Service Areas Near Wagholi</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Pest Control in Kharadi</h3>
                <p className="mb-4 text-muted-foreground">
                  Professional pest control services in nearby Kharadi area.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/pest-control-in-kharadi-pune">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Pest Control in Lonikand</h3>
                <p className="mb-4 text-muted-foreground">
                  Expert pest control solutions for Lonikand residents.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/pest-control-in-lonikand-pune">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Pest Control in Shikrapur</h3>
                <p className="mb-4 text-muted-foreground">
                  Complete pest control services for Shikrapur area.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/pest-control-in-shikrapur-pune">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">
            Get Professional Pest Control in Wagholi Today
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Same-day service available for all pest control needs in Wagholi, Pune. 
            Call us now for a free inspection and quote.
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
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Service Coverage in Wagholi</h2>
          <div className="rounded-lg overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890123!2d73.941234567890123!3d18.523210987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTCsJzMnJzQxLjYxJDEwLjM3IlA!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  )
}
