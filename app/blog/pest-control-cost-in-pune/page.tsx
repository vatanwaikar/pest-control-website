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
import { Phone, MessageCircle, CheckCircle, TrendingUp, Shield, Clock } from "lucide-react"
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/components/json-ld"
import Link from "next/link"

export const metadata = {
  title: "Pest Control Cost in Pune: Complete Price Guide 2024",
  description: "Detailed breakdown of pest control prices in Pune including termite treatment (Rs. 3,500-15,000), bed bug control (Rs. 2,500-8,000), cockroach control (Rs. 1,200-3,500). Get transparent pricing.",
  keywords: [
    "pest control cost Pune",
    "pest control prices Pune",
    "termite treatment cost Pune",
    "bed bug control price Pune",
    "cockroach control cost Pune",
    "pest control charges Pune",
    "affordable pest control Pune"
  ]
}

const faqs = [
  {
    question: "What is the average cost of pest control in Pune?",
    answer: "The average cost of pest control in Pune ranges from Rs. 999 for basic treatment to Rs. 15,000 for comprehensive termite control. Prices vary based on pest type, property size, and infestation severity.",
  },
  {
    question: "Are pest control services in Pune worth the cost?",
    answer: "Yes, professional pest control services in Pune are worth the cost as they provide long-term solutions, use safe chemicals, and prevent property damage that could cost much more to repair.",
  },
  {
    question: "How often should I get pest control service in Pune?",
    answer: "For Pune's climate, quarterly pest control is recommended for general pests, annual service for termites, and monthly service during monsoon season for mosquitoes and other seasonal pests.",
  },
  {
    question: "Do pest control companies in Pune offer guarantees?",
    answer: "Reputable pest control companies in Pune offer warranties ranging from 3 months to 5 years depending on the treatment type. Always ask about guarantee terms before booking.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "https://globalvisionpestcontrol.in" },
  { name: "Blog", url: "https://globalvisionpestcontrol.in/blog" },
  { name: "Pest Control Cost in Pune", url: "https://globalvisionpestcontrol.in/blog/pest-control-cost-in-pune" },
]

export default function PestControlCostPune() {
  return (
    <main>
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Pest Control Cost in Pune: Complete Price Guide 2024
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Transparent pricing for all pest control services in Pune. No hidden charges, expert solutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+917350900022" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Get Free Quote: +91 7350900022
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/contact">
                  Request Online Quote
                </Link>
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
              Understanding pest control costs in Pune is essential for making informed decisions about protecting your home or business. 
              This comprehensive guide breaks down all pricing factors, helping you budget effectively while ensuring quality 
              pest management services. Pune's tropical climate and rapid urbanization make professional pest control not just 
              a convenience but a necessity for maintaining healthy living conditions.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Factors Affecting Pest Control Costs in Pune</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Several key factors influence pest control pricing in Pune. The <strong>type of pest</strong> is the primary determinant, 
              as termites require more extensive treatment than cockroaches. <strong>Property size</strong> plays a crucial role, 
              with larger spaces naturally costing more to treat. The <strong>severity of infestation</strong> affects both the 
              treatment method and duration, impacting overall costs. <strong>Location within Pune</strong> also matters, as 
              areas like Wakad and Baner might have different pricing structures compared to central Pune locations.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Detailed Pest Control Price Breakdown in Pune</h2>
            
            <div className="grid gap-6 md:grid-cols-2 my-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">General Pest Control</h3>
                  <p className="text-2xl font-bold text-primary mb-3">Rs. 999 - 3,500</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Cockroaches, ants, spiders
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      1-2 BHK apartments
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      3 months warranty
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Termite Control</h3>
                  <p className="text-2xl font-bold text-primary mb-3">Rs. 3,500 - 15,000</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Pre & post construction
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      All property sizes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      5 years warranty
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Bed Bug Control</h3>
                  <p className="text-2xl font-bold text-primary mb-3">Rs. 2,500 - 8,000</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Chemical & heat treatment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      All room sizes
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      6 months warranty
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Rodent Control</h3>
                  <p className="text-2xl font-bold text-primary mb-3">Rs. 1,500 - 4,500</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Rats, mice control
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Residential & commercial
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      3 months warranty
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Area-Wise Pest Control Costs in Pune</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Pest control costs vary across different areas in Pune due to accessibility, local competition, and 
              property types. <strong>Wakad and Hinjewadi</strong> typically see prices 10-15% higher due to 
              newer constructions and IT hub premium. <strong>Baner and Aundh</strong> command premium pricing 
              because of upscale properties. <strong>Kothrud and Pimpri</strong> offer more competitive rates 
              due to established markets. <strong>Viman Nagar</strong> prices reflect the area's premium status 
              near the airport.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Hidden Costs to Watch Out For</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              When comparing pest control costs in Pune, be aware of potential hidden charges. Some companies 
              charge extra for <strong>emergency services</strong> (20-30% premium). <strong>Follow-up visits</strong> 
              might not be included in the initial quote. <strong>Material costs</strong> for specialized treatments 
              can add 15-25% to the base price. Always ask for <strong>comprehensive quotes</strong> that include 
              all potential charges to avoid surprises.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Money-Saving Tips for Pest Control in Pune</h2>
            
            <div className="grid gap-4 md:grid-cols-2 my-8">
              <div className="flex items-start gap-3">
                <TrendingUp className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Annual Contracts</h4>
                  <p className="text-muted-foreground">Save 20-30% with yearly pest control packages</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Preventive Treatments</h4>
                  <p className="text-muted-foreground">Cost 50% less than corrective treatments</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Off-Season Booking</h4>
                  <p className="text-muted-foreground">Get 10-15% discount during non-peak months</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Multiple Services</h4>
                  <p className="text-muted-foreground">Bundle treatments for better rates</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Why Choose Professional Pest Control in Pune</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              While DIY pest control might seem cheaper initially, professional services in Pune offer better long-term value. 
              Professionals use <strong>commercial-grade chemicals</strong> that are more effective than retail products. 
              They provide <strong>expert identification</strong> of pest species and appropriate treatments. 
              <strong>Safety protocols</strong> ensure your family and pets remain protected. Most importantly, professional 
              services come with <strong>warranties and guarantees</strong> that DIY solutions cannot match.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              In Pune's climate, where pests can quickly become resistant to common treatments, professional expertise 
              becomes crucial. The cost of professional pest control is an investment in your property's value and 
              your family's health. With transparent pricing and guaranteed results, professional services provide peace 
              of mind that DIY solutions simply cannot deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground">Related Pest Control Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Termite Treatment</h3>
                <p className="mb-4 text-muted-foreground">
                  Complete termite control solutions for Pune properties with warranty.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/services/termite-control">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Bed Bug Control</h3>
                <p className="mb-4 text-muted-foreground">
                  Professional bed bug treatment with guaranteed results in Pune.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/services/bed-bug-control">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Area Services</h3>
                <p className="mb-4 text-muted-foreground">
                  Pest control services across all areas in Pune.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/blog">View All Areas</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
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

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Get Transparent Pest Control Pricing in Pune</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Contact us for detailed quotes with no hidden charges. Expert pest control services across Pune.
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

      <Footer />
      <StickyCTA />
    </main>
  )
}
