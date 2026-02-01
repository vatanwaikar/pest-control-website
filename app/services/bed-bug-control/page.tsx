import type { Metadata } from "next"
import { BedDouble } from "lucide-react"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Bed Bug Control Services in Pune",
  description:
    "Professional bed bug treatment in Pune. Heat treatment & spray for homes, hotels, hostels. Effective bed bug elimination. Starting Rs. 1,499. Call +91 7350900022 ",
  keywords: [
    "bed bug treatment Pune",
    "bed bug control Pune",
    "bed bug pest control Pune",
    "bed bug removal Pune",
    "khatmal control Pune",
  ],
}

export default function BedBugControlPage() {
  return (
    <ServicePageTemplate
      title="Bed Bug Control in Pune"
      subtitle="Effective Bed Bug Treatment for Peaceful Sleep"
      description="Get rid of bed bugs completely with our professional heat and chemical treatment. Safe for mattresses, effective on all life stages. Sleep peacefully without bed bug bites."
      icon={BedDouble}
      benefits={[
        "Kills bed bugs at all life stages",
        "Chemical spray treatment",
        "Safe for mattresses and furniture",
        "No need to discard mattresses",
        "Effective for heavy infestations",
        "3-month warranty included",
        "Treatment for homes, hotels, hostels",
        "Same-day service available",
        "Trained and experienced technicians",
      ]}
      process={[
        {
          title: "Inspection",
          description: "Thorough inspection of mattresses, bed frames, furniture, and hiding spots for bed bugs.",
        },
        {
          title: "Preparation",
          description: "Guidance on preparing the room - washing linens, removing clutter from infested areas.",
        },
        {
          title: "Treatment",
          description: "Chemical spray applied to all infested areas including mattress seams, cracks, and crevices.",
        },
        {
          title: "Follow-up",
          description: "Second treatment after 15 days to eliminate newly hatched bed bugs. Third visit if needed.",
        },
      ]}
      pricing={[
        {
          name: "Single Room",
          price: "Rs. 1,499",
          features: ["Complete treatment", "Spray method", "3 month warranty", "2 follow-up visits"],
        },
        {
          name: "2-3 Rooms",
          price: "Rs. 2,499",
          features: ["Complete treatment", "Spray method", "3 month warranty", "2 follow-up visits"],
        },
        {
          name: "Full House",
          price: "Rs. 3,999",
          features: ["Complete treatment", "All rooms covered", "3 month warranty", "3 follow-up visits"],
        },
      ]}
      faqs={[
        {
          question: "How do bed bugs spread?",
          answer:
            "Bed bugs spread through luggage, used furniture, clothing, and by moving between rooms in hotels or apartment buildings. They don't fly but can crawl quickly and hide in tiny spaces.",
        },
        {
          question: "Do I need to throw away my mattress?",
          answer:
            "No, with proper treatment you don't need to discard your mattress. Our treatment penetrates mattress seams and eliminates bed bugs. We recommend using mattress encasements after treatment for added protection.",
        },
        {
          question: "How many treatments are needed for bed bugs?",
          answer:
            "Usually 2-3 treatments are needed, spaced 15 days apart. This ensures we eliminate adult bed bugs and any eggs that hatch after the first treatment.",
        },
        {
          question: "Can I stay in my room after bed bug treatment?",
          answer:
            "We recommend staying out of the treated room for 4-6 hours after treatment. Ensure good ventilation before sleeping in the room.",
        },
        {
          question: "How do I know if I have bed bugs?",
          answer:
            "Signs include: red itchy bites in a line or cluster, blood stains on sheets, dark spots on mattress seams (bed bug droppings), and seeing the bugs themselves which are small, flat, and reddish-brown.",
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
        { title: "General Pest Control", href: "/services" },
        { title: "Mosquito Control", href: "/services/mosquito-control" },
      ]}
    />
  )
}
