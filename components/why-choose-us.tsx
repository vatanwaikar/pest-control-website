import { Shield, Clock, Leaf, Award, Phone, ThumbsUp } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Government Licensed",
    description: "Fully licensed and approved by Maharashtra state government for pest control services.",
  },
  {
    icon: Clock,
    title: "Same Day Service",
    description: "Quick response time with same-day service available for emergency pest problems.",
  },
  {
    icon: Leaf,
    title: "Safe Chemicals",
    description: "We use WHO-approved, eco-friendly chemicals that are safe for your family and pets.",
  },
  {
    icon: Award,
    title: "Experienced Team",
    description: "Our technicians have 10+ years of experience in handling all types of pest problems.",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock customer support and emergency pest control services available.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guarantee",
    description: "100% satisfaction guaranteed. Free re-treatment if pests return within warranty period.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Why Choose GlobalVision?
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by 10,000+ homes and businesses in Pune. Here&apos;s why customers choose us 
            for their pest control needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
