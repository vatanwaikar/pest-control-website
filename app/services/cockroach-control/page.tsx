import type { Metadata } from "next"
import { Bug } from "lucide-react"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Cockroach Control Services in Pune",
  description:
    "Professional cockroach control in Pune. Gel treatment, spray treatment for German, American cockroaches. Safe for kitchens. Starting Rs. 999. Call +91 7350900022 ",
  keywords: [
    "cockroach control Pune",
    "cockroach gel treatment Pune",
    "cockroach pest control Pune",
    "kitchen cockroach treatment",
    "German cockroach control",
  ],
}

export default function CockroachControlPage() {
  return (
    <ServicePageTemplate
      title="Cockroach Control in Pune"
      subtitle="Complete Cockroach Elimination with Gel & Spray Treatment"
      description="Get rid of cockroaches permanently with our advanced gel bait and spray treatment. Safe for kitchens, restaurants, and food processing units. 6-month warranty included."
      icon={Bug}
      benefits={[
        "Gel bait treatment - odorless and safe",
        "Effective against German, American, and Oriental cockroaches",
        "Kitchen and food-safe chemicals",
        "No need to empty cabinets",
        "Results visible within 7 days",
        "6-month warranty with free retreatment",
        "Government approved chemicals",
        "Experienced and trained technicians",
        "Same-day service available",
      ]}
      process={[
        {
          title: "Inspection",
          description: "Our technician identifies cockroach species and infestation hotspots in your property.",
        },
        {
          title: "Treatment Plan",
          description: "We recommend the best treatment method based on infestation level and property type.",
        },
        {
          title: "Application",
          description: "Gel bait and spray applied in cracks, crevices, behind appliances, and hiding spots.",
        },
        {
          title: "Follow-up",
          description: "We schedule follow-up visits to ensure complete elimination and provide prevention tips.",
        },
      ]}
      pricing={[
        {
          name: "1 BHK",
          price: "Rs. 799",
          features: ["Complete treatment", "Gel + Spray", "6 month warranty", "1 follow-up visit"],
        },
        {
          name: "2 BHK",
          price: "Rs. 999",
          features: ["Complete treatment", "Gel + Spray", "6 month warranty", "2 follow-up visits"],
        },
        {
          name: "3 BHK",
          price: "Rs. 1,200",
          features: ["Complete treatment", "Gel + Spray", "6 month warranty", "3 follow-up visits"],
        },
      ]}
      faqs={[
        {
          question: "Is cockroach gel treatment safe for kitchen?",
          answer:
            "Yes, our gel treatment is completely safe for kitchens. The gel is applied in small dots in hidden areas like cracks, crevices, and behind appliances. It's odorless and doesn't contaminate food or utensils.",
        },
        {
          question: "How long does cockroach treatment take?",
          answer:
            "A standard cockroach treatment takes 30-45 minutes for a 2 BHK apartment. You can use the kitchen immediately after treatment.",
        },
        {
          question: "When will I see results?",
          answer:
            "You'll notice significant reduction in cockroach activity within 3-7 days. Complete elimination usually happens within 2-3 weeks.",
        },
        {
          question: "Do I need to empty kitchen cabinets before treatment?",
          answer:
            "No you don't need to empty cabinets for gel treatment. For spray treatment, we recommend removing food items from open shelves.",
        },
        {
          question: "How often should I get cockroach treatment done?",
          answer:
            "We recommend cockroach treatment every 6 months for residential properties. Restaurants and commercial kitchens should get monthly treatments.",
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
        { title: "Termite Control", href: "/services/termite-control" },
        { title: "Bed Bug Control", href: "/services/bed-bug-control" },
        { title: "Rodent Control", href: "/services/rodent-control" },
      ]}
    />
  )
}
