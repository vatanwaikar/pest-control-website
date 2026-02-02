import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, Users, Clock, Leaf, Phone, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "GlobalVision Pest Control - Trusted pest control company in Pune since 2010. Government approved, ISO certified. 10,000+ satisfied customers. Learn about our team and mission.",
}

const stats = [
  { number: "10,000+", label: "Happy Customers" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Trained Technicians" },
  { number: "4.9", label: "Google Rating" },
]

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "We prioritize the safety of your family and pets. All our chemicals are WHO-approved and eco-friendly.",
  },
  {
    icon: Award,
    title: "Quality Service",
    description:
      "Our ISO 9001:2015 certification reflects our commitment to delivering consistent, high-quality pest control services.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description:
      "We believe in building long-term relationships. Our 90% repeat customer rate speaks to our dedication.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We arrive on time, complete work efficiently, and stand behind our services with strong warranties.",
  },
]

const team = [
  {
    name: "Namdev Waikar",
    role: "Founder & CEO",
    experience: "20+ years in pest management",
    description: "Started GlobalVision with a mission to provide safe, effective pest control to Pune homes.",
  },
  {
    name: "Milind Wagh",
    role: "Operations Head",
    experience: "12 years experience",
    description: "Ensures smooth operations and timely service delivery across all Pune locations.",
  },
  {
    name: "Vatan Waikar",
    role: "Technical Manager",
    experience: "5 years experience",
    description: "Leads our team of technicians and ensures quality control in all treatments.",
  },
]

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">About GlobalVision</h1>
            <p className="text-lg text-primary-foreground/90">
              Pune&apos;s trusted pest control partner since 2010. Government approved, ISO certified, and committed to
              keeping your home and business pest-free.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-card py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary md:text-4xl">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  GlobalVision Pest Control was founded in 2010 by Rajendra Patil, a pest management professional with over 20 years
                  of experience. What started as a small operation with just 2 technicians has grown into one of
                  Pune&apos;s most trusted pest control companies.
                </p>
                <p>
                  Our journey began when Rajendra noticed that many pest control companies in Pune were using harmful
                  chemicals and providing substandard services. He set out to create a company that would prioritize
                  customer safety while delivering effective pest control solutions.
                </p>
                <p>
                  Today, we serve over 10,000 residential and commercial customers across Pune. From apartments in Baner
                  to IT parks in Hinjewadi, from restaurants in Koregaon Park to warehouses in MIDC - we&apos;ve helped
                  businesses and families stay pest-free.
                </p>
                <p>
                  Our success is built on three pillars: safe chemicals, trained technicians, and genuine customer care.
                  We&apos;re proud to be Government approved and ISO 9001:2015 certified, reflecting our commitment to
                  quality and safety.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-lg bg-secondary p-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-primary" />
                <span className="text-foreground">Government Licensed Pest Control Operator</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary p-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-primary" />
                <span className="text-foreground">ISO 9001:2015 Certified Company</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary p-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-primary" />
                <span className="text-foreground">Member of Indian Pest Control Association</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary p-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-primary" />
                <span className="text-foreground">WHO-Approved Chemicals Only</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg bg-secondary p-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-primary" />
                <span className="text-foreground">Trained & Certified Technicians</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Our Leadership Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
                    <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                  <p className="mb-2 text-sm text-muted-foreground">{member.experience}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Why Choose GlobalVision?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-4">
              <Leaf className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Eco-Friendly Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  We use environmentally responsible chemicals that are effective yet safe.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Family & Pet Safe</h3>
                <p className="text-sm text-muted-foreground">
                  All our treatments are designed with your family&apos;s safety in mind.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Warranty Backed</h3>
                <p className="text-sm text-muted-foreground">
                  All services come with warranty. Free re-treatment if pests return.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Same Day Service</h3>
                <p className="text-sm text-muted-foreground">
                  Emergency pest problem? We offer same-day service across Pune.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Trained Experts</h3>
                <p className="text-sm text-muted-foreground">
                  Our technicians undergo regular training on latest pest control methods.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <h3 className="mb-1 font-semibold text-foreground">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our customer support team is available round the clock to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground">Ready to Experience the Difference?</h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Join 10,000+ satisfied customers who trust GlobalVision for their pest control needs.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+917350900022" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call: +91 7350900022
              </a>
            </Button>
             <p className="mt-2 text-xs text-primary-foreground/70">
        📞 iPhone users: Tap “Allow Call” to connect instantly
      </p>
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
