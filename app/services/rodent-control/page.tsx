import type { Metadata } from "next"
import { MousePointer2 } from "lucide-react"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Rodent Control Services in Pune",
  description:
    "Professional rat and mice control in Pune. Safe baiting systems, traps, entry point sealing. Warehouse, office, home rodent control. Starting Rs. 1,299. Call +91 7350900022 ",
  keywords: [
    "rodent control Pune",
    "rat control Pune",
    "mice control Pune",
    "rat pest control Pune",
    "rodent management Pune",
  ],
}

export default function RodentControlPage() {
  return (
    <ServicePageTemplate
      title="Rodent Control in Pune"
      subtitle="Complete Rat & Mice Control for Homes and Businesses"
      description="Keep your property rodent-free with our professional rat and mice control services. Safe baiting systems, traps, and entry point sealing for complete protection."
      icon={MousePointer2}
      benefits={[
        "Safe and tamper-proof bait stations",
        "Glue boards for monitoring",
        "Entry point identification and sealing",
        "Effective for rats and mice",
        "Suitable for homes, offices, warehouses",
        "Food industry compliant methods",
        "Regular monitoring and reporting",
        "Dead rodent removal included",
        "Sanitation guidance provided",
      ]}
      process={[
        {
          title: "Inspection",
          description: "Identify rodent species, entry points, nesting areas, and damage assessment.",
        },
        {
          title: "Baiting Setup",
          description: "Install tamper-proof bait stations at strategic locations inside and outside property.",
        },
        {
          title: "Proofing",
          description: "Seal entry points, gaps in walls, doors, and around pipes to prevent rodent entry.",
        },
        {
          title: "Monitoring",
          description: "Regular visits to check bait stations, replace bait, and ensure rodent-free status.",
        },
      ]}
      pricing={[
        {
          name: "Residential",
          price: "Rs. 1,299",
          features: ["Bait stations (3-4)", "Glue boards", "Entry point sealing", "2 follow-up visits"],
        },
        {
          name: "Commercial",
          price: "Rs. 2,999",
          features: ["Bait stations (6-8)", "Glue boards", "Entry point sealing", "Monthly monitoring"],
        },
        {
          name: "Warehouse/Factory",
          price: "Rs. 5,999+",
          features: ["Custom solution", "Multiple stations", "Complete proofing", "Weekly monitoring"],
        },
      ]}
      faqs={[
        {
          question: "Are the rodent baits safe for children and pets?",
          answer:
            "Our bait stations are tamper-proof, meaning children and pets cannot access the bait inside. The stations are locked and can only be opened with a special key. We place them in areas away from children and pets for extra safety.",
        },
        {
          question: "How long does it take to get rid of rats?",
          answer:
            "You should see significant reduction within 1-2 weeks. Complete elimination depends on infestation level but typically takes 3-4 weeks with regular baiting and monitoring.",
        },
        {
          question: "What happens to dead rats after baiting?",
          answer:
            "Rodents typically consume bait and die in their burrows or hidden areas. Our bait contains ingredients that dehydrate the rodent, minimizing odor. We also provide dead rodent removal service if needed.",
        },
        {
          question: "Do you seal entry points?",
          answer:
            "Yes, entry point sealing is crucial for long-term rodent control. We identify gaps, holes, and openings and seal them with appropriate materials. This prevents new rodents from entering your property.",
        },
        {
          question: "Is rodent control needed for food businesses?",
          answer:
            "Absolutely! Rodent control is mandatory for restaurants, hotels, food processing units, and warehouses. We provide FSSAI-compliant rodent management programs with documentation and regular audits.",
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
        "MIDC Chakan",
        "Ranjangaon",
      ]}
      relatedServices={[
        { title: "Cockroach Control", href: "/services/cockroach-control" },
        { title: "General Pest Control", href: "/services" },
        { title: "Termite Control", href: "/services/termite-control" },
      ]}
    />
  )
}
