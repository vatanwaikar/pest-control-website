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

export const metadata = {
  title: "Pest Control in Kharadi Pune | Same Day Service Available",
  description: "Professional pest control services in Kharadi, Pune. Termite, bed bug, cockroach, mosquito control. Government approved chemicals, 5 years warranty. Call +91 7350900022.",
  keywords: [
    "pest control Kharadi Pune",
    "pest control services Kharadi",
    "termite control Kharadi",
    "bed bug treatment Kharadi",
    "cockroach control Kharadi",
    "mosquito control Kharadi",
    "pest control near Kharadi",
    "EON IT Park pest control"
  ]
}

const faqs = [
  {
    question: "What is the cost of pest control in Kharadi, Pune?",
    answer: "Pest control costs in Kharadi range from Rs. 999 for general pest control to Rs. 15,000 for complete termite treatment. Prices depend on property size, pest type, and infestation severity.",
  },
  {
    question: "Do you provide pest control services for IT companies in Kharadi?",
    answer: "Yes, we specialize in commercial pest control for IT companies in Kharadi, including EON IT Park, World Trade Center, and other tech parks. We offer after-hours service to minimize disruption.",
  },
  {
    question: "How quickly can you provide pest control service in Kharadi?",
    answer: "We offer same-day pest control services in Kharadi. For emergency pest control needs, we can reach your location within 2-3 hours anywhere in Kharadi.",
  },
  {
    question: "Are your pest control treatments safe for families in Kharadi?",
    answer: "Absolutely! We use government-approved, eco-friendly pest control chemicals that are safe for children, pets, and pregnant women. All our technicians are certified and follow strict safety protocols.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "https://globalvisionpestcontrol.in" },
  { name: "Pest Control in Kharadi Pune", url: "https://globalvisionpestcontrol.in/pest-control-in-kharadi-pune" },
]

export default function PestControlKharadi() {
  return (
    <main>
      <LocalBusinessSchema />
      <ServiceSchema 
        name="Pest Control Services in Kharadi"
        description="Professional pest control services in Kharadi, Pune including termite, bed bug, cockroach, mosquito, and rodent control with guaranteed results."
        url="https://globalvisionpestcontrol.in/pest-control-in-kharadi-pune"
        area="Kharadi"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Pest Control in Kharadi Pune
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Professional pest control services in Kharadi with same-day service availability. 
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
              Kharadi, one of Pune's fastest-growing IT and residential hubs, faces unique pest control challenges due to its rapid 
              urbanization and proximity to water bodies. The area's mix of high-rise apartments, commercial complexes, 
              and independent houses creates diverse pest problems that require specialized solutions. GlobalVision Pest Control 
              offers comprehensive pest management services tailored specifically for Kharadi's urban environment, ensuring 
              your home or business remains pest-free throughout the year.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Why Kharadi Needs Professional Pest Control</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Kharadi's strategic location near the Mula-Mutha river and numerous construction sites creates ideal breeding 
              grounds for mosquitoes, termites, and other pests. The area's high concentration of IT parks like EON IT Park, 
              World Trade Center, and commercial complexes requires specialized commercial pest control solutions. Additionally, 
              the rapid development of residential societies like Gera GreensVille, Nyati Elan, and Kolte Patil Downtown 
              has led to increased pest activity in the region. Professional pest control in Kharadi is essential not just for 
              comfort but for health and safety of the growing population.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Our Pest Control Services in Kharadi</h2>
            
            <div className="grid gap-6 md:grid-cols-2 my-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Termite Control in Kharadi</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete termite treatment for Kharadi properties with 5 years warranty. Pre and post-construction solutions.
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
                  <h3 className="text-xl font-semibold text-foreground mb-3">Bed Bug Control in Kharadi</h3>
                  <p className="text-muted-foreground mb-4">
                    Professional bed bug treatment for Kharadi homes and hostels. Chemical and heat treatment options available.
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
                  <h3 className="text-xl font-semibold text-foreground mb-3">Cockroach Control in Kharadi</h3>
                  <p className="text-muted-foreground mb-4">
                    Effective cockroach control for Kharadi apartments and commercial spaces. Gel baiting and spray treatments.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      German cockroach control
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      American cockroach treatment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Kitchen and bathroom treatment
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Mosquito Control in Kharadi</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive mosquito control for Kharadi societies and commercial areas. Fogging and larvicide treatment.
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

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Areas We Cover in Kharadi</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control services cover all major areas in Kharadi including EON IT Park, World Trade Center, 
              Kharadi IT Park, Gera GreensVille, Nyati Elan, Kolte Patil Downtown, Magarpatta City vicinity, 
              and all residential societies along Kharadi-Mundhwa road. We provide pest control for both commercial 
              and residential properties throughout Kharadi, ensuring complete coverage of this rapidly developing area.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Why Choose GlobalVision for Pest Control in Kharadi</h2>
            
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
                  <p className="text-muted-foreground">We provide same-day pest control service anywhere in Kharadi.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">5 Years Warranty</h4>
                  <p className="text-muted-foreground">Get 5 years warranty on termite treatments across Kharadi.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Local Experts</h4>
                  <p className="text-muted-foreground">Our team understands Kharadi's specific pest challenges.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Pest Control Process in Kharadi</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Our pest control process in Kharadi begins with a thorough inspection of your property to identify pest types, 
              infestation levels, and entry points. Based on the assessment, we create a customized treatment plan 
              using the most effective and safe methods. Our certified technicians then execute the treatment using 
              government-approved chemicals and modern equipment. We provide detailed documentation and post-treatment 
              guidelines to ensure long-term pest prevention. Regular follow-up visits are scheduled to monitor 
              effectiveness and address any recurring issues.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Commercial Pest Control for Kharadi IT Parks</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Kharadi's concentration of IT parks and commercial spaces requires specialized commercial pest control solutions. 
              We offer customized pest management programs for offices, software companies, and commercial complexes that 
              minimize disruption to business operations. Our services include after-hours treatment, integrated pest 
              management, and regular maintenance contracts. We understand the importance of maintaining a pest-free 
              environment in professional settings and ensure complete compliance with health and safety regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Local Testimonial */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Kharadi Residents Say</h2>
          </div>
          <Card className="border-border max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">RK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Rohit Kumar, EON IT Park</h4>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Excellent pest control service for our IT park in Kharadi. They provided after-hours service that didn't 
                    disrupt our operations. Very professional team and effective results. Highly recommend for commercial 
                    pest control in Kharadi."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

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
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Service Areas Near Kharadi</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Pest Control in Wagholi</h3>
                <p className="mb-4 text-muted-foreground">
                  Professional pest control services in nearby Wagholi area.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/pest-control-in-wagholi-pune">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Pest Control in Mundhwa</h3>
                <p className="mb-4 text-muted-foreground">
                  Expert pest control solutions for Mundhwa residents.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/pest-control-in-mundhwa-pune">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Pest Control in Magarpatta</h3>
                <p className="mb-4 text-muted-foreground">
                  Complete pest control services for Magarpatta City.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/pest-control-in-magarpatta-pune">Learn More</Link>
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
            Get Professional Pest Control in Kharadi Today
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Same-day service available for all pest control needs in Kharadi, Pune. 
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
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Service Coverage in Kharadi</h2>
          <div className="rounded-lg overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890123!2d73.931234567890123!3d18.543210987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTCsJzMnJzQxLjYxJDEwLjM3IlA!5e0!3m2!1sen!2sin!4v1234567890"
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
