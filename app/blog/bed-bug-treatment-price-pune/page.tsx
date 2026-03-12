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
import { Phone, MessageCircle, CheckCircle, AlertTriangle, Thermometer, BedDouble } from "lucide-react"
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/components/json-ld"
import Link from "next/link"

export const metadata = {
  title: "Bed Bug Treatment Price in Pune: Complete 2024 Cost Guide",
  description: "Bed bug treatment costs in Pune: Chemical treatment (Rs. 2,500-5,000), Heat treatment (Rs. 5,000-8,000). Get transparent pricing for bed bug control.",
  keywords: [
    "bed bug treatment cost Pune",
    "bed bug control price Pune",
    "bed bug exterminator cost Pune",
    "heat treatment bed bugs Pune",
    "chemical bed bug treatment Pune",
    "bed bug removal cost Pune"
  ]
}

const faqs = [
  {
    question: "What is the average cost of bed bug treatment in Pune?",
    answer: "Bed bug treatment in Pune costs Rs. 2,500-5,000 for chemical treatment and Rs. 5,000-8,000 for heat treatment. Prices vary based on room size, infestation severity, and treatment method.",
  },
  {
    question: "Is heat treatment worth the extra cost for bed bugs in Pune?",
    answer: "Yes, heat treatment is worth the cost as it's 95-98% effective in a single treatment, kills all life stages, and provides longer-lasting results compared to chemical treatments.",
  },
  {
    question: "How many bed bug treatments are needed in Pune?",
    answer: "Chemical treatments typically require 2-3 sessions over 2-3 weeks, while heat treatment usually requires only 1 session. The number depends on infestation severity and treatment method.",
  },
  {
    question: "Do bed bug treatments come with warranty in Pune?",
    answer: "Reputable bed bug control services in Pune offer 3-6 months warranty for chemical treatments and 6-12 months for heat treatments. Always ask about guarantee terms before booking.",
  },
]

const breadcrumbItems = [
  { name: "Home", url: "https://globalvisionpestcontrol.in" },
  { name: "Blog", url: "https://globalvisionpestcontrol.in/blog" },
  { name: "Bed Bug Treatment Price in Pune", url: "https://globalvisionpestcontrol.in/blog/bed-bug-treatment-price-pune" },
]

export default function BedBugTreatmentPricePune() {
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
              Bed Bug Treatment Price in Pune: Complete 2024 Cost Guide
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Expert guide to bed bug control costs in Pune. Chemical vs heat treatment prices with transparent breakdown.
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
                  Request Bed Bug Quote
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
              Bed bugs have become a significant problem in Pune's urban areas, affecting homes, hotels, and hostels. 
              Understanding bed bug treatment costs is crucial for effective eradication and budgeting. Pune's climate 
              and high population density create ideal conditions for bed bug proliferation, making professional treatment 
              essential. This comprehensive guide breaks down all costs involved in bed bug control, helping you choose 
              the most effective and economical solution for your situation.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Bed Bug Treatment Cost Breakdown in Pune</h2>
            
            <div className="grid gap-6 md:grid-cols-2 my-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Chemical Treatment</h3>
                  <p className="text-2xl font-bold text-primary mb-3">Rs. 2,500 - 5,000</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      2-3 sessions required
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
                  <h3 className="text-xl font-semibold text-foreground mb-3">Heat Treatment</h3>
                  <p className="text-2xl font-bold text-primary mb-3">Rs. 5,000 - 8,000</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Single session treatment
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
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Room-Wise Bed Bug Treatment Costs in Pune</h2>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 my-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Detailed Pricing by Room Size:</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-background rounded">
                    <span className="font-medium">Single Room</span>
                    <span className="text-primary font-bold">Rs. 2,500-3,500</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded">
                    <span className="font-medium">1 BHK Apartment</span>
                    <span className="text-primary font-bold">Rs. 3,000-4,500</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-background rounded">
                    <span className="font-medium">2 BHK Apartment</span>
                    <span className="text-primary font-bold">Rs. 4,000-6,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded">
                    <span className="font-medium">3 BHK+ Apartment</span>
                    <span className="text-primary font-bold">Rs. 5,000-8,000</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Chemical vs Heat Treatment: Cost Comparison</h2>
            
            <div className="space-y-6 my-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Chemical Treatment Method</h3>
                  <p className="text-muted-foreground mb-4">
                    Chemical treatment involves spraying insecticides on mattresses, furniture, walls, and other potential hiding spots. 
                    Multiple sessions are required to kill bed bugs at different life stages.
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-muted-foreground">Lower initial cost</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <span className="text-muted-foreground">Multiple sessions required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-muted-foreground">Residual protection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <span className="text-muted-foreground">Chemical odor</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Heat Treatment Method</h3>
                  <p className="text-muted-foreground mb-4">
                    Heat treatment uses specialized equipment to raise room temperature to 50-60°C, killing all bed bugs 
                    and their eggs in a single session. No chemicals are used.
                  </p>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-muted-foreground">95-98% effective in one session</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      <span className="text-muted-foreground">Higher initial cost</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-muted-foreground">Chemical-free</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-muted-foreground">Kills all life stages</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Factors Affecting Bed Bug Treatment Cost in Pune</h2>
            
            <div className="grid gap-4 md:grid-cols-2 my-8">
              <div className="flex items-start gap-3">
                <BedDouble className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Infestation Severity</h4>
                  <p className="text-muted-foreground">Severe infestations require more intensive treatment and multiple sessions, increasing costs by 30-50%.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Thermometer className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Treatment Method</h4>
                  <p className="text-muted-foreground">Heat treatment costs 50-100% more than chemical treatment but requires fewer sessions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Property Type</h4>
                  <p className="text-muted-foreground">Hotels and hostels cost more due to larger areas and higher infestation risks.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Location in Pune</h4>
                  <p className="text-muted-foreground">Premium areas like Baner and Kalyani Nagar may have 10-15% higher costs.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Area-Wise Bed Bug Treatment Costs in Pune</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Bed bug treatment costs vary across Pune's different areas. <strong>Wakad and Hinjewadi</strong> typically see 
              Rs. 3,000-7,000 due to IT hub demographics and higher apartment density. <strong>Baner and Aundh</strong> 
              command premium pricing of Rs. 3,500-8,000 because of upscale properties. <strong>Kothrud and Pimpri</strong> 
              offer more competitive rates of Rs. 2,500-6,000 due to established markets. <strong>Viman Nagar</strong> 
              prices range from Rs. 3,500-8,000 reflecting the area's premium status and hotel concentration.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Hidden Costs in Bed Bug Treatment</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              When budgeting for bed bug treatment in Pune, consider additional costs that might not be included in the 
              initial quote. <strong>Preparation costs</strong> for moving furniture and washing clothes can add Rs. 500-1,500. 
              <strong>Follow-up inspections</strong> might cost Rs. 500-1,000 per visit. <strong>Mattress encasements</strong> 
              cost Rs. 1,000-3,000 for quality covers. <strong>Replacement items</strong> like heavily infested furniture 
              can add significant costs. Always ask for comprehensive quotes that include all potential charges.
            </p>

            <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Why Professional Bed Bug Treatment is Essential in Pune</h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Pune's urban environment and high population mobility make bed bug infestations increasingly common. 
              Professional bed bug treatment uses <strong>commercial-grade chemicals</strong> and specialized equipment that 
              are far more effective than DIY solutions. Professionals can <strong>identify all hiding spots</strong> that 
              untrained eyes might miss. <strong>Safety protocols</strong> ensure your family remains protected during 
              and after treatment. Most importantly, professional services come with <strong>warranties</strong> that guarantee 
              results, providing peace of mind that DIY solutions cannot match.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The cost of professional bed bug treatment is an investment in your health and quality of life. 
              Bed bugs can cause sleepless nights, skin irritation, and psychological stress. In Pune's competitive 
              rental market, bed bug-free properties command premium prices and tenant preference. Professional treatment 
              not only eliminates current infestations but also prevents future problems, making it a cost-effective 
              solution in the long run.
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
                <h3 className="mb-3 text-xl font-semibold text-foreground">Termite Control</h3>
                <p className="mb-4 text-muted-foreground">
                  Complete termite control solutions for Pune properties with warranty.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/blog/termite-treatment-cost-in-pune">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-foreground">Area Services</h3>
                <p className="mb-4 text-muted-foreground">
                  Bed bug control services across all areas in Pune.
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
                  <Link href="/blog/pest-control-cost-in-pune">Learn More</Link>
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
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Get Professional Bed Bug Treatment in Pune</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Contact us for effective bed bug control with transparent pricing and guaranteed results.
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
