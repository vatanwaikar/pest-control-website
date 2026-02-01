import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Wakad, Pune",
    rating: 5,
    text: "Excellent service! The team arrived on time and completed the cockroach treatment efficiently. No pests seen in 3 months. Highly recommended for pest control services in Pune.",
    service: "Cockroach Control",
  },
  {
    name: "Priya Patel",
    location: "Hinjewadi, Pune",
    rating: 5,
    text: "We had a severe termite problem in our new flat. GlobalVision provided the best anti-termite treatment. Professional team and fair pricing.",
    service: "Termite Control",
  },
  {
    name: "Amit Kulkarni",
    location: "Baner, Pune",
    rating: 5,
    text: "Had bed bugs issue in my hostel room. They solved it in one visit. Very satisfied with their bed bug treatment. Will use again if needed.",
    service: "Bed Bug Control",
  },
  {
    name: "Sunita Deshmukh",
    location: "Kothrud, Pune",
    rating: 5,
    text: "Best pest control service in Kothrud! They use safe chemicals which was important as I have small children. Very professional team.",
    service: "General Pest Control",
  },
  {
    name: "Mahesh Joshi",
    location: "Hadapsar, Pune",
    rating: 5,
    text: "Our warehouse had a rat problem. PestFree Pune installed proper rodent control systems. Very effective and they provide regular maintenance.",
    service: "Rodent Control",
  },
  {
    name: "Neha Agarwal",
    location: "Pimpri-Chinchwad",
    rating: 5,
    text: "Used their mosquito control service for our society. The fogging was done properly and we noticed significant reduction in mosquitoes.",
    service: "Mosquito Control",
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers 
            across Pune have to say about our pest control services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border">
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">{testimonial.text}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-sm text-primary">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
