import type { Metadata } from "next"
import { Home } from "lucide-react"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Termite Control Services in Pune",
  description:
    "Professional anti-termite treatment in Pune. Pre & post construction termite control. Drilling method. 5-year warranty. Protect your property. Call +91 7350900022 ",
  keywords: [
    "termite control Pune",
    "anti-termite treatment Pune",
    "termite pest control Pune",
    "pre construction termite treatment",
    "post construction termite treatment",
    "white ant control Pune",
  ],
}

export default function TermiteControlPage() {
  return (
    <ServicePageTemplate
      title="Termite Control in Pune"
      subtitle="Complete Anti-Termite Treatment for Your Property"
      description="Protect your property from termite damage with our professional anti-termite treatment. We offer both pre and post construction solutions with 5-year warranty."
      icon={Home}
      benefits={[
        "Pre-construction anti-termite treatment",
        "Post-construction drilling and injection method",
        "5-year warranty on treatment",
        "Protects wooden furniture and structures",
        "Government approved chemicals",
        "CPWD specification compliant",
        "Experienced civil and pest control team",
        "Detailed service report provided",
        "Annual maintenance contract available",
      ]}
      process={[
        {
          title: "Inspection",
          description: "Thorough inspection to identify termite entry points, damage extent, and infestation areas.",
        },
        {
          title: "Drilling",
          description: "Small holes drilled at regular intervals along walls and affected areas.",
        },
        {
          title: "Chemical Injection",
          description: "Anti-termite chemical injected under pressure to create protective barrier.",
        },
        {
          title: "Sealing & Report",
          description: "Holes sealed, area cleaned, and detailed warranty certificate provided.",
        },
      ]}
      pricing={[
        {
          name: "1 BHK",
          price: "Rs. 799",
          features: ["Post-construction treatment", "Drilling method", "5 year warranty", "Annual inspection"],
        },
        {
          name: "2 BHK",
          price: "Rs. 999",
          features: ["Post-construction treatment", "Drilling method", "5 year warranty", "Annual inspection"],
        },
        {
          name: "3 BHK",
          price: "Rs. 1,200",
          features: ["Post-construction treatment", "Drilling method", "5 year warranty", "Annual inspection"],
        },
        {
          name: "Bungalow/Villa",
          price: "as per assessment",
          features: ["Complete treatment", "Drilling method", "5 year warranty", "Bi-annual inspection"],
        },
      ]}
      faqs={[
        {
          question: "What is the difference between pre and post construction termite treatment?",
          answer:
            "Pre-construction treatment is done before flooring when anti-termite chemical is applied to the soil. Post-construction treatment involves drilling holes in the floor and injecting chemicals. Pre-construction is more effective but post-construction can also provide complete protection.",
        },
        {
          question: "How do I know if my house has termites?",
          answer:
            "Signs include: mud tubes on walls, hollow sounding wood, discarded wings near windows, frass (termite droppings), and visible damage to wooden furniture or door frames.",
        },
        {
          question: "Is termite treatment chemical safe for residents?",
          answer:
            "Yes, modern termiticides are designed to be safe for humans and pets while being lethal to termites. The chemical is injected into the soil/floor, creating a barrier that termites cannot cross.",
        },
        {
          question: "How long does termite treatment last?",
          answer:
            "Our termite treatment comes with a 5-year warranty. The chemical barrier typically lasts 5-10 years depending on soil conditions and construction type.",
        },
        {
          question: "Can termites come back after treatment?",
          answer:
            "With proper treatment and warranty, termites should not return. However, if they do within the warranty period, we provide free retreatment. Regular annual inspections help detect any new activity early.",
        },
      ]}
      areas={[
        "Wakad",
        "Hinjewadi",
        "Baner",
        "Kothrud",
        "Hadapsar",
        "Pimpri-Chinchwad",
        "Aundh",
        "Viman Nagar",
        "Kalyani Nagar",
        "Magarpatta",
        "Koregaon Park",
        "Shivaji Nagar",
      ]}
      relatedServices={[
        { title: "Cockroach Control", href: "/services/cockroach-control" },
        { title: "Wood Borer Treatment", href: "/services" },
        { title: "General Pest Control", href: "/services" },
      ]}
    />
  )
}
