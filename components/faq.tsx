"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What pest control services do you offer in Pune?",
    answer: "We offer comprehensive pest control services in Pune including cockroach control, termite treatment, bed bug control, mosquito control, rodent control, and general pest management. Our services cover residential, commercial, and industrial properties across all areas of Pune.",
  },
  {
    question: "Are the chemicals used safe for children and pets?",
    answer: "Yes, we use WHO-approved, eco-friendly chemicals that are completely safe for your family, children, and pets. Our technicians are trained to apply treatments in the safest manner possible. We also provide guidance on precautions to take post-treatment.",
  },
  {
    question: "How long does a pest control treatment take?",
    answer: "The duration depends on the type of pest and the size of the area. A standard home treatment takes 1-2 hours, while termite treatment for the entire building may take 4-6 hours. Our technician will give you an accurate estimate during the inspection.",
  },
  {
    question: "Do you provide service in Wakad, Hinjewadi, and Baner?",
    answer: "Yes, we provide pest control services across all areas of Pune including Wakad, Hinjewadi, Baner, Kothrud, Hadapsar, Pimpri-Chinchwad, Aundh, Viman Nagar, and more. We offer same-day service in most locations.",
  },
  {
    question: "What is the cost of pest control services in Pune?",
    answer: "Our pest control prices start from Rs. 999 for basic treatment. The exact cost depends on the type of pest, severity of infestation, and property size. Contact us for a free inspection and accurate quote. We offer competitive pricing with no hidden charges.",
  },
  {
    question: "Do you offer any warranty on pest control services?",
    answer: "Yes, we provide a warranty on all our pest control services ranging from 3 months to 1 year depending on the treatment type. If pests return within the warranty period, we provide free re-treatment.",
  },
  {
    question: "How often should I get pest control done?",
    answer: "For residential properties, we recommend general pest control every 3-6 months. For commercial spaces like restaurants and warehouses, monthly or bi-monthly treatments are advisable. Anti-termite treatment should be done once every 5 years.",
  },
  {
    question: "Can I stay at home during the pest control treatment?",
    answer: "For most treatments, you can stay at home but should avoid the treated areas for 2-3 hours. For fumigation treatments, you may need to vacate the premises for 24 hours. Our technician will guide you based on the specific treatment.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our pest control services in Pune.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
