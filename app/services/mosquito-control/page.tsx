import type { Metadata } from "next"
import { Zap } from "lucide-react"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Mosquito Control Services in Pune",
  description:
    "Professional mosquito control in Pune. Fogging, larviciding for dengue & malaria prevention. Society & commercial fogging. Starting Rs. 799. Call +91 7350900022 ",
  keywords: [
    "mosquito control Pune",
    "mosquito fogging Pune",
    "dengue prevention Pune",
    "malaria prevention Pune",
    "mosquito pest control Pune",
  ],
}

export default function MosquitoControlPage() {
  return (
    <ServicePageTemplate
      title="Mosquito Control in Pune"
      subtitle="Fogging & Larviciding for Dengue and Malaria Prevention"
      description="Protect your family from dangerous mosquito-borne diseases with our comprehensive mosquito control. Fogging for instant knockdown and larviciding for long-term prevention."
      icon={Zap}
      benefits={[
        "Thermal fogging for instant mosquito knockdown",
        "Larviciding to prevent mosquito breeding",
        "Effective against Aedes (dengue) mosquitoes",
        "Effective against Anopheles (malaria) mosquitoes",
        "Society and apartment complex coverage",
        "Monthly maintenance plans available",
        "Safe for residents and environment",
        "Experienced fogging operators",
        "Flexible scheduling",
      ]}
      process={[
        {
          title: "Site Survey",
          description: "Identify mosquito breeding sites - stagnant water, drains, plant pots, and water tanks.",
        },
        {
          title: "Larviciding",
          description: "Apply larvicide to water bodies to kill mosquito larvae and prevent breeding.",
        },
        {
          title: "Fogging",
          description: "Thermal fogging in outdoor areas during evening/early morning for maximum effectiveness.",
        },
        {
          title: "Prevention Tips",
          description: "Guidance on eliminating breeding sites and maintaining mosquito-free environment.",
        },
      ]}
      pricing={[
        {
          name: "1 BHK",
          price: "Rs. 799",
          features: ["Indoor + outdoor fogging", "Larviciding", "Single visit", "Prevention tips"],
        },
        {
          name: "2 BHK",
          price: "Rs. 999",
          features: ["Up to 20 flats", "Common area fogging", "Larviciding", "Monthly plan available"],
        },
        {
          name: "3 BHK",
          price: "Rs. 1,200",
          features: ["Complete coverage", "Larviciding", "Monthly plan available"],
        },
      ]}
      faqs={[
        {
          question: "When is the best time for mosquito fogging?",
          answer:
            "Fogging is most effective during early morning (6-8 AM) or evening (5-7 PM) when mosquitoes are most active. We schedule fogging during these times for maximum effectiveness.",
        },
        {
          question: "Is fogging safe for children and pets?",
          answer:
            "The fogging chemical is safe when used as directed. However, we recommend staying indoors during fogging and for 30 minutes after. Keep windows closed during fogging.",
        },
        {
          question: "How often should mosquito control be done?",
          answer:
            "For residential areas, monthly fogging is recommended during monsoon season (June-October). For year-round protection, bi-monthly treatments are sufficient.",
        },
        {
          question: "Do you provide mosquito control for housing societies?",
          answer:
            "Yes, we specialize in society-wide mosquito control. We offer customized plans including fogging, larviciding, and monthly maintenance contracts for housing societies and apartment complexes.",
        },
        {
          question: "What is larviciding and why is it important?",
          answer:
            "Larviciding involves treating stagnant water sources with chemicals that kill mosquito larvae before they become adults. It's crucial for long-term mosquito control as it prevents new mosquitoes from being born.",
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
        { title: "General Pest Control", href: "/services" },
        { title: "Cockroach Control", href: "/services/cockroach-control" },
        { title: "Rodent Control", href: "/services/rodent-control" },
      ]}
    />
  )
}
