import { Shield, Award, Leaf, Users, Star } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "Government Approved",
    description: "Licensed by Maharashtra Govt.",
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "ISO 9001:2015 Certified",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Safe for Family & Pets",
  },
  {
    icon: Users,
    title: "10,000+ Customers",
    description: "Trusted in Pune",
  },
  {
    icon: Star,
    title: "4.9 Rating",
    description: "Google Reviews",
  },
]

export function TrustBadges() {
  return (
    <section className="border-b bg-card py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between">
          {badges.map((badge) => (
            <div key={badge.title} className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{badge.title}</p>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
