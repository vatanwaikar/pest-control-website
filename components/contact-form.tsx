"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    // In production, replace with actual form submission to your backend or service
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Track form submission for GA4
    if (typeof window !== "undefined" && "gtag" in window) {
      // @ts-expect-error gtag is not typed
      window.gtag("event", "generate_lead", {
        event_category: "Contact",
        event_label: "Contact Form Submission",
      })
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-border">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <CheckCircle className="h-8 w-8 text-primary-foreground" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-foreground">Thank You!</h3>
          <p className="text-muted-foreground">
            We&apos;ve received your inquiry. Our team will contact you within 30 minutes during business hours.
          </p>
          <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
            Submit Another Inquiry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" name="phone" type="tel" placeholder="+91 7350900022 " required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Required *</Label>
            <select
              id="service"
              name="service"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              required
            >
              <option value="">Select a service</option>
              <option value="cockroach">Cockroach Control</option>
              <option value="termite">Termite Control</option>
              <option value="bedbug">Bed Bug Control</option>
              <option value="mosquito">Mosquito Control</option>
              <option value="rodent">Rodent Control</option>
              <option value="general">General Pest Control</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="property">Property Type *</Label>
            <select
              id="property"
              name="property"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              required
            >
              <option value="">Select property type</option>
              <option value="1bhk">1 BHK Apartment</option>
              <option value="2bhk">2 BHK Apartment</option>
              <option value="3bhk">3 BHK Apartment</option>
              <option value="bungalow">Bungalow/Villa</option>
              <option value="office">Office/Commercial</option>
              <option value="restaurant">Restaurant/Hotel</option>
              <option value="warehouse">Warehouse/Factory</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="area">Location/Area in Pune *</Label>
            <Input id="area" name="area" placeholder="e.g., Wakad, Hinjewadi, Baner" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Details</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Describe your pest problem, preferred timing, or any questions..."
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Get Free Quote"
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            By submitting this form, you agree to be contacted by our team regarding your pest control inquiry.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
