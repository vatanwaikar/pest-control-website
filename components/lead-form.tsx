"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MessageCircle, CheckCircle } from "lucide-react"

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    area: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    "Termite Control",
    "Bed Bug Control", 
    "Cockroach Control",
    "Mosquito Control",
    "Rodent Control",
    "General Pest Control"
  ]

  const areas = [
    "Wakad",
    "Baner",
    "Hinjewadi", 
    "Kothrud",
    "Hadapsar",
    "Viman Nagar",
    "Pimpri",
    "Chinchwad",
    "Aundh",
    "Pimple Saudagar",
    "Other"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // GA4 event tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lead_form_submission', {
        event_category: 'conversion',
        event_label: 'lead_form',
        service: formData.service,
        area: formData.area
      })
    }

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          area: "",
          message: ""
        })
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700">
            We've received your request and will contact you within 2 hours.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Get Free Quote</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Your Name *"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>

          <div>
            <Input
              placeholder="Phone Number *"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full"
            />
          </div>

          <div>
            <Input
              placeholder="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>

          <div>
            <Select value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Service *" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select value={formData.area} onValueChange={(value) => handleSelectChange('area', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Area *" />
              </SelectTrigger>
              <SelectContent>
                {areas.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Textarea
              placeholder="Describe your pest problem..."
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className="w-full"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get Free Quote"}
          </Button>
        </form>

        <div className="mt-4 pt-4 border-t text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Or contact us directly:
          </p>
          <div className="flex gap-3 justify-center">
            <Button size="sm" variant="outline" asChild>
              <a href="tel:+917350900022" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a 
                href="https://wa.me/917350900022?text=Hi, I need pest control services in Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
