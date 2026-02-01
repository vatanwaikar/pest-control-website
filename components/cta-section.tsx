import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
          Ready for a Pest-Free Home?
        </h2>
        <p className="mb-8 text-lg text-primary-foreground/90">
          Don&apos;t let pests take over your home. Call us now for a free inspection and quote. 
          Same-day service available across Pune!
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" asChild>
            <a href="tel:+917350900022 " className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call: +91 7350900022 
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent" asChild>
            <a href="https://wa.me/917350900022 ?text=Hi, I need pest control services in Pune" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
