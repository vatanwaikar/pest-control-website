import { Search, Syringe, ShieldCheck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Book Inspection",
    description: "Call us or fill the form. Our team will schedule a convenient inspection time.",
  },
  {
    step: "02",
    icon: Search,
    title: "Inspection",
    description: "Our expert technician visits your property to identify pest type and infestation level.",
  },
  {
    step: "03",
    icon: Syringe,
    title: "Treatment",
    description: "We apply the most effective treatment method using safe, approved chemicals.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Prevention",
    description: "We provide tips and follow-up visits to ensure pests don't return.",
  },
]

export function WorkProcess() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Our simple 4-step process ensures complete pest elimination from your property.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-border lg:block" />
              )}
              <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <step.icon className="h-8 w-8 text-primary-foreground" />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {step.step}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <a href="tel:+917350900022 ">Book Free Inspection Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
