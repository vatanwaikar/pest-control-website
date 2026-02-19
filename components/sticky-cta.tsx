"use client"

import { Phone, MessageCircle } from "lucide-react"
import { useEffect } from "react"

export function StickyCTA() {
  useEffect(() => {
    // GA4 event tracking for sticky CTA visibility
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'sticky_cta_shown', {
        event_category: 'conversion_optimization',
        event_label: 'mobile_sticky_buttons'
      })
    }
  }, [])

  const handleCallClick = () => {
    // GA4 event tracking for call button
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'call_click', {
        event_category: 'conversion',
        event_label: 'sticky_cta_call'
      })
    }
  }

  const handleWhatsAppClick = () => {
    // GA4 event tracking for WhatsApp button
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'conversion',
        event_label: 'sticky_cta_whatsapp'
      })
    }
  }

  return (
    <>
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card p-3 shadow-lg md:hidden">
        <div className="flex gap-3">
          <a
            href="tel:+917350900022"
            onClick={handleCallClick}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-3 font-medium text-primary-foreground"
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
          <a
            href="https://wa.me/917350900022?text=Hi, I need pest control services in Pune"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent py-3 font-medium text-accent-foreground"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Desktop Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex md:flex-col gap-3">
        <a
          href="tel:+917350900022"
          onClick={handleCallClick}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          title="Call Now"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/917350900022?text=Hi, I need pest control services in Pune"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
          title="WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>
    </>
  )
}
