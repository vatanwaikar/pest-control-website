import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Pest Control Cost in Pune: Complete Price Guide 2024",
    description: "Detailed breakdown of pest control prices in Pune including termite treatment, bed bug control, cockroach control costs. Get transparent pricing for all pest control services.",
    slug: "pest-control-cost-in-pune",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Pricing Guide"
  },
  {
    title: "Termite Treatment Cost in Pune: What to Expect in 2024",
    description: "Complete guide to termite treatment costs in Pune. Learn about pre-construction and post-construction termite control prices, factors affecting cost, and money-saving tips.",
    slug: "termite-treatment-cost-in-pune",
    date: "2024-01-12",
    readTime: "10 min read",
    category: "Termite Control"
  },
  {
    title: "Bed Bug Treatment Price in Pune: Complete Cost Analysis",
    description: "Everything you need to know about bed bug treatment prices in Pune. Compare chemical vs heat treatment costs, factors affecting pricing, and how to choose the right service.",
    slug: "bed-bug-treatment-price-pune",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Bed Bug Control"
  },
  {
    title: "How to Remove Cockroaches in Pune: Effective Methods & Tips",
    description: "Professional guide to cockroach removal in Pune. Learn about effective cockroach control methods, DIY vs professional treatment, and prevention strategies for Pune homes.",
    slug: "how-to-remove-cockroaches-in-pune",
    date: "2024-01-08",
    readTime: "9 min read",
    category: "Cockroach Control"
  },
  {
    title: "Monsoon Pest Control Tips Pune: Protect Your Home This Rainy Season",
    description: "Essential monsoon pest control tips for Pune residents. Learn how to prevent monsoon pests, common rainy season problems, and professional treatment options.",
    slug: "monsoon-pest-control-tips-pune",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Seasonal Tips"
  }
]

export const metadata = {
  title: "Pest Control Blog Pune - Expert Tips & Guides | GlobalVision",
  description: "Expert pest control blog for Pune residents. Learn about termite treatment costs, bed bug control prices, cockroach removal tips, and seasonal pest prevention strategies.",
  keywords: [
    "pest control blog Pune",
    "termite treatment cost Pune",
    "bed bug treatment price Pune",
    "cockroach control tips Pune",
    "monsoon pest control Pune",
    "pest control guide Pune"
  ]
}

export default function BlogPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Pest Control Blog Pune
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Expert tips, guides, and insights about pest control in Pune. 
              Learn about costs, treatments, and prevention strategies from industry professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="border-border hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link href={`/blog/${post.slug}`} className="flex items-center justify-center gap-2">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Need professional pest control services in Pune? Our expert team is ready to help.
            </p>
            <Button size="lg" asChild>
              <a href="tel:+917350900022">
                Call for Free Consultation: +91 7350900022
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </main>
  )
}
