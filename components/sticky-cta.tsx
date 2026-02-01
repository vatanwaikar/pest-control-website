"use client"

import { Phone, MessageCircle } from "lucide-react"

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card p-3 shadow-lg md:hidden">
      <div className="flex gap-3">
        <a
          href="tel:+917350900022 "
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-3 font-medium text-primary-foreground"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
        <a
          href="https://wa.me/917350900022 ?text=Hi, I need pest control services in Pune"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent py-3 font-medium text-accent-foreground"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
