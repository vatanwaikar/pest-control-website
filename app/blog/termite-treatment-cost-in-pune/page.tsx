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
import { Phone, MessageCircle, CheckCircle, AlertTriangle, Shield, Home } from "lucide-react"
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/components/json-ld"
import Link from "next/link"

export const metadata = {
  title: "Termite Treatment Cost in Pune: Complete 2024 Price Guide",
  description: "Detailed termite treatment costs in Pune: Pre-construction (Rs. 8-15/sq ft), Post-construction (Rs. 3,500-15,000). Get transparent pricing for anti-termite treatment.",
  keywords: [
    "termite treatment cost Pune",
    "anti termite treatment cost Pune",
    "pre construction termite treatment Pune",
    "post construction termite control Pune",
    "termite control price Pune",
    "termite proofing cost Pune"
  ]
}

const faqs = [
  {
    question: "What is the cost of pre-construction termite treatment in Pune?",
    answer: "Pre-construction termite treatment in Pune costs Rs. 8-15 per square foot, totaling Rs. 15,000-50,000 for an average 2,000 sq ft home. This includes soil treatment and foundation protection.",
  },
  {
    question: "How much does post-construction termite control cost in Pune?",
    answer: "Post-construction termite treatment in Pune ranges from Rs. 3,500 for small apartments to Rs. 15,000 for independent houses. Costs depend on infestation severity and treatment method.",
  },
  {
    question: "Is termite treatment worth the cost in Pune?",
    answer: "Absolutely! Termite treatment costs are minimal compared to potential property damage. A single termite attack can cause Rs. 5-10 lakh in structural damage, making treatment a wise investment.",
  },
  {
    question: "How long does termite treatment last in Pune?",
    answer: "Professional termite treatments in Pune typically last 3-5 years for post-construction and 10-15 years for pre-construction. Regular inspections and maintenance extend protection.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "https://globalvisionpestcontrol.in" },
  { name: "Blog", url: "https://globalvisionpestcontrol.in/blog" },
  { name: "Termite Treatment Cost in Pune", url: "https://globalvisionpestcontrol.in/blog/termite-treatment-cost-in-pune" },
]

export default function TermiteTreatmentCostPune() {
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
              Termite Treatment Cost in Pune: Complete 2024 Price Guide
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Expert guide to termite control costs in Pune. Pre & post-construction pricing with transparent breakdown.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+917350900022" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Get Free Inspection: +91 7350900022
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                asChild
              >
                <Link href="/contact">
                  Request Termite Quote
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
              Termites are the silent destroyers of properties in Pune, causing billions of rupees in damage annually. 
              Understanding termite treatment costs is crucial for protecting your investment. Pune's tropical climate 
              and rapid construction boom create perfect conditions for termite infestations, making professional 
              treatment not just recommended but essential. This comprehensive guide breaks down all costs involved 
              in termite control, helping you make informed decisions for your property protection.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Pre-Construction Termite Treatment Cost in Pune</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Pre-construction termite treatment is the most cost-effective way to protect your property. In Pune, 
              the cost ranges from <strong>Rs. 8-15 per square foot</strong>, depending on the treatment method and 
              soil conditions. For a typical 2,000 sq ft home, expect to pay <strong>Rs. 16,000-30,000</strong>. 
              This includes soil treatment before foundation laying, pipe penetration treatment, and perimeter barrier 
              creation. The treatment creates a chemical barrier that prevents termites from accessing your property 
              for 10-15 years.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Pre-Construction Treatment Breakdown:</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Soil Treatment</h4>
                    <p className="text-muted-foreground">Rs. 5-8/sq ft - Foundation protection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Barrier Treatment</h4>
                    <p className="text-muted-foreground">Rs. 3-7/sq ft - Perimeter protection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Wood Treatment</h4>
                    <p className="text-muted-foreground">Rs. 2-4/sq ft - Timber protection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Pipe & Utility Treatment</h4>
                    <p className="text-muted-foreground">Rs. 1-2/sq ft - Entry point sealing</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Post-Construction Termite Treatment Cost in Pune</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Post-construction termite treatment is more complex and costly, ranging from <strong>Rs. 3,500 to Rs. 15,000</strong> 
              depending on property size and infestation level. For apartments, costs start at Rs. 3,500-5,000, while 
              independent houses can cost Rs. 8,000-15,000. The treatment involves drilling holes in walls and floors, 
              injecting termiticides, and creating chemical barriers. This method is necessary when termites have 
              already infested the property or when pre-construction treatment wasn't done.
            </p>

            <div className="grid gap-6 md:grid-cols-2 my-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Apartment Treatment</h3>
                  <p className="text-2xl font-bold text-primary mb-3">Rs. 3,500 - 5,000</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      1-2 BHK apartments
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Wall drilling & injection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      3 years warranty
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Independent House</h3>
                  <p className="text-2xl font-bold text-primary mb-3">Rs. 8,000 - 15,000</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      2-4 BHK houses
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Complete barrier treatment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      5 years warranty
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Factors Affecting Termite Treatment Cost in Pune</h2>
            
            <div className="grid gap-4 md:grid-cols-2 my-8">
              <div className="flex items-start gap-3">
                <Home className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Property Size</h4>
                  <p className="text-muted-foreground">Larger properties require more chemicals and labor, increasing costs proportionally.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Infestation Severity</h4>
                  <p className="text-muted-foreground">Severe infestations need multiple treatments and specialized chemicals, raising costs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Treatment Method</h4>
                  <p className="text-muted-foreground">Chemical barriers cost less than baiting systems or heat treatments.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Location in Pune</h4>
                  <p className="text-muted-foreground">Areas like Baner and Kalyani Nagar may have higher costs due to premium locations.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Area-Wise Termite Treatment Costs in Pune</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Termite treatment costs vary across Pune's different areas. <strong>Wakad and Hinjewadi</strong> typically see 
              10-15% higher costs due to newer constructions and IT hub premiums. <strong>Baner and Aundh</strong> command 
              premium pricing because of upscale properties and larger plot sizes. <strong>Kothrud and Pimpri</strong> offer 
              more competitive rates due to established markets and older constructions. <strong>Viman Nagar</strong> prices 
              reflect the area's premium status near the airport and commercial developments.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Types of Termite Treatments Available in Pune</h2>
            
            <div className="space-y-6 my-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Chemical Barrier Treatment</h3>
                  <p className="text-muted-foreground mb-3">
                    Most common method costing Rs. 3,500-15,000. Creates a chemical barrier around and under the property.
                  </p>
                  <p className="text-primary font-medium">Best for: Pre-construction and post-construction protection</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Baiting System</h3>
                  <p className="text-muted-foreground mb-3">
                    Advanced method costing Rs. 15,000-30,000. Uses bait stations to eliminate entire colonies.
                  </p>
                  <p className="text-primary font-medium">Best for: Severe infestations and eco-conscious clients</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Wood Treatment</h3>
                  <p className="text-muted-foreground mb-3">
                    Targeted treatment costing Rs. 2,000-8,000. Focuses on infested wooden structures.
                  </p>
                  <p className="text-primary font-medium">Best for: Furniture and specific wood infestations</p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Why Professional Termite Treatment is Essential in Pune</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Pune's climate creates ideal conditions for termites, with temperatures between 25-35°C and humidity 
              levels above 60% supporting year-round termite activity. Professional termite treatment uses <strong>government-approved 
              chemicals</strong> that are safe for humans but lethal to termites. The treatment process requires <strong>specialized 
              equipment</strong> and <strong>technical expertise</strong> to ensure complete coverage. Most importantly, professional 
              services come with <strong>warranties</strong> that guarantee protection, giving you peace of mind.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The cost of termite treatment is minimal compared to potential property damage. A single termite colony 
              can destroy wooden structures worth lakhs within months. In Pune's real estate market, where property values 
              are high, protecting your investment with professional termite treatment is not just smart—it's essential. 
              The treatment also maintains your property's resale value, as termite-free properties command premium prices.
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
                <h3 className="mb-3 text-xl font-semibold text-foreground">Pre-Construction Treatment</h3>
                <p className="mb-4 text-muted-foreground">
                  Protect your new construction from termites with expert pre-construction treatment in Pune.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/services/termite-control">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Area Services</h3>
                <p className="mb-4 text-muted-foreground">
                  Termite control services across all areas in Pune.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/blog">View All Areas</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">General Pest Control</h3>
                <p className="mb-4 text-muted-foreground">
                  Complete pest control solutions for your property in Pune.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/services/general-pest-control">Learn More</Link>
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
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Protect Your Property from Termites Today</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Get expert termite treatment in Pune with transparent pricing and guaranteed results.
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
