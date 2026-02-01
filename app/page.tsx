import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { WorkProcess } from "@/components/work-process"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { LocalBusinessSchema, FAQSchema } from "@/components/json-ld"

const homepageFaqs = [
  {
    question: "What pest control services do you offer in Pune?",
    answer:
      "We offer comprehensive pest control services in Pune including cockroach control, termite treatment, bed bug control, mosquito control, rodent control, and general pest management. Our services cover residential, commercial, and industrial properties across all areas of Pune.",
  },
  {
    question: "Are the chemicals used safe for children and pets?",
    answer:
      "Yes, we use WHO-approved, eco-friendly chemicals that are completely safe for your family, children, and pets. Our technicians are trained to apply treatments in the safest manner possible.",
  },
  {
    question: "Do you provide service in Wakad, Hinjewadi, and Baner?",
    answer:
      "Yes, we provide pest control services across all areas of Pune including Wakad, Hinjewadi, Baner, Kothrud, Hadapsar, Pimpri-Chinchwad, Aundh, Viman Nagar, and more. We offer same-day service in most locations.",
  },
  {
    question: "What is the cost of pest control services in Pune?",
    answer:
      "Our pest control prices start from Rs. 999 for basic treatment. The exact cost depends on the type of pest, severity of infestation, and property size. Contact us for a free inspection and accurate quote.",
  },
]

export default function Home() {
  return (
    <main>
      <LocalBusinessSchema />
      <FAQSchema faqs={homepageFaqs} />
      <Header />
      <Hero />
      <TrustBadges />
      <Services />
      <WhyChooseUs />
      <WorkProcess />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
      <StickyCTA />
    </main>
  )
}
