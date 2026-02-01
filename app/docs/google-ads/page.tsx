import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Google Ads Setup Guide",
  description: "Complete guide for setting up Google Ads campaigns for pest control services in Pune.",
  robots: "noindex, nofollow",
}

export default function GoogleAdsGuidePage() {
  return (
    <main>
      <Header />

      <section className="bg-primary py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">Google Ads Setup Guide</h1>
          <p className="mt-4 text-primary-foreground/90">
            Complete guide for running Google Ads campaigns for pest control services in Pune.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-8">
            {/* Ad Copy Headlines */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">
                  Responsive Search Ad Headlines (15 Headlines)
                </h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  Use these headlines for your Google Ads campaigns. Mix and match for best performance.
                </p>
                <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
                  <li>Pest Control Services Pune</li>
                  <li>Cockroach Control in Pune</li>
                  <li>Termite Treatment Pune</li>
                  <li>Bed Bug Removal Services</li>
                  <li>Same Day Pest Control</li>
                  <li>Government Approved Service</li>
                  <li>Safe & Eco-Friendly Methods</li>
                  <li>Call Now: +91 7350900022 </li>
                  <li>Free Inspection Available</li>
                  <li>Starting at Rs. 999 Only</li>
                  <li>10,000+ Happy Customers</li>
                  <li>6 Month Warranty Included</li>
                  <li>24/7 Emergency Service</li>
                  <li>Serving Wakad, Hinjewadi, Baner</li>
                  <li>ISO Certified Pest Control</li>
                </ol>
              </CardContent>
            </Card>

            {/* Ad Descriptions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Ad Descriptions (4 Descriptions)</h2>
                <ol className="list-decimal space-y-4 pl-6 text-muted-foreground">
                  <li>
                    Professional pest control services in Pune. Cockroach, termite, bed bug treatment. Safe chemicals,
                    trained technicians. Call now for free inspection!
                  </li>
                  <li>
                    Get rid of pests today! Government approved, WHO-safe chemicals. Serving Wakad, Hinjewadi, Baner,
                    Kothrud & all Pune. Same-day service available.
                  </li>
                  <li>
                    Pune&apos;s trusted pest control since 2010. 10,000+ satisfied customers. Cockroach gel treatment,
                    anti-termite treatment, bed bug spray. Book now!
                  </li>
                  <li>
                    Affordable pest control starting Rs. 999. 6-month warranty on all services. Family & pet safe
                    treatments. Free inspection & quote. Call today!
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Keywords */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">High-Intent Keywords</h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  Use these keywords in your campaigns. Group similar keywords into ad groups.
                </p>

                <h3 className="mb-2 mt-6 font-semibold text-foreground">General Pest Control:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "pest control services pune",
                    "pest control pune",
                    "pest control near me",
                    "best pest control pune",
                    "pest control company pune",
                    "home pest control pune",
                  ].map((kw) => (
                    <span key={kw} className="rounded bg-secondary px-3 py-1 text-sm">
                      {kw}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 mt-6 font-semibold text-foreground">Cockroach Control:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "cockroach control pune",
                    "cockroach treatment pune",
                    "cockroach gel treatment pune",
                    "cockroach pest control pune",
                    "kitchen cockroach treatment",
                  ].map((kw) => (
                    <span key={kw} className="rounded bg-secondary px-3 py-1 text-sm">
                      {kw}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 mt-6 font-semibold text-foreground">Termite Control:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "termite control pune",
                    "anti termite treatment pune",
                    "termite treatment cost pune",
                    "white ant control pune",
                    "termite pest control pune",
                  ].map((kw) => (
                    <span key={kw} className="rounded bg-secondary px-3 py-1 text-sm">
                      {kw}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 mt-6 font-semibold text-foreground">Bed Bug Control:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "bed bug treatment pune",
                    "bed bug control pune",
                    "bed bug removal pune",
                    "khatmal control pune",
                    "bed bug spray pune",
                  ].map((kw) => (
                    <span key={kw} className="rounded bg-secondary px-3 py-1 text-sm">
                      {kw}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 mt-6 font-semibold text-foreground">Location-Based Keywords:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "pest control wakad",
                    "pest control hinjewadi",
                    "pest control baner",
                    "pest control kothrud",
                    "pest control hadapsar",
                    "pest control pimpri chinchwad",
                  ].map((kw) => (
                    <span key={kw} className="rounded bg-secondary px-3 py-1 text-sm">
                      {kw}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Negative Keywords */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Negative Keywords</h2>
                <p className="mb-4 text-sm text-muted-foreground">
                  Add these negative keywords to avoid irrelevant clicks and save budget:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "jobs",
                    "career",
                    "vacancy",
                    "recruitment",
                    "salary",
                    "free",
                    "diy",
                    "homemade",
                    "natural",
                    "home remedy",
                    "course",
                    "training",
                    "certification",
                    "franchise",
                    "mumbai",
                    "delhi",
                    "bangalore",
                    "chennai",
                    "hyderabad",
                    "wholesale",
                    "manufacturer",
                    "supplier",
                    "chemicals",
                    "equipment",
                    "machines",
                  ].map((kw) => (
                    <span key={kw} className="rounded bg-destructive/20 px-3 py-1 text-sm text-destructive">
                      -{kw}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Campaign Settings */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Recommended Campaign Settings</h2>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Campaign Type:</strong> Search Campaign (Call-focused)
                  </li>
                  <li>
                    <strong>Bidding Strategy:</strong> Maximize Conversions or Target CPA
                  </li>
                  <li>
                    <strong>Location Targeting:</strong> Pune city + 20km radius (or specific areas)
                  </li>
                  <li>
                    <strong>Language:</strong> English, Hindi, Marathi
                  </li>
                  <li>
                    <strong>Ad Schedule:</strong> 7 AM - 10 PM (peak hours: 9 AM - 7 PM)
                  </li>
                  <li>
                    <strong>Device Targeting:</strong> All devices (mobile priority for calls)
                  </li>
                  <li>
                    <strong>Daily Budget:</strong> Start with Rs. 500-1000/day, scale based on results
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Conversion Tracking */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Conversion Tracking Setup</h2>
                <ol className="list-decimal space-y-3 pl-6 text-muted-foreground">
                  <li>
                    Go to Google Ads {">"} Tools & Settings {">"} Conversions
                  </li>
                  <li>
                    Create conversion for <strong>Phone Calls</strong> (from ads, website, or call extensions)
                  </li>
                  <li>
                    Create conversion for <strong>Form Submissions</strong> (use Google Tag event)
                  </li>
                  <li>
                    Link GA4 to Google Ads: Admin {">"} Google Ads Links
                  </li>
                  <li>Import GA4 conversions (click_to_call, whatsapp_click, generate_lead)</li>
                  <li>Set primary conversion action for bidding optimization</li>
                </ol>
              </CardContent>
            </Card>

            {/* Ad Extensions */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Essential Ad Extensions</h2>
                <ul className="list-disc space-y-3 pl-6 text-muted-foreground">
                  <li>
                    <strong>Call Extension:</strong> +91 7350900022 
                  </li>
                  <li>
                    <strong>Location Extension:</strong> Link Google Business Profile
                  </li>
                  <li>
                    <strong>Sitelink Extensions:</strong>
                    <ul className="mt-2 list-disc pl-6">
                      <li>Cockroach Control - /services/cockroach-control</li>
                      <li>Termite Treatment - /services/termite-control</li>
                      <li>Get Free Quote - /contact</li>
                      <li>Service Areas - /areas</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Callout Extensions:</strong> Same Day Service, Free Inspection, 6 Month Warranty, Safe
                    Chemicals
                  </li>
                  <li>
                    <strong>Structured Snippets:</strong> Services: Cockroach, Termite, Bed Bug, Mosquito, Rodent
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Landing Page Tips */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Landing Page Best Practices</h2>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>Use service-specific landing pages for each ad group</li>
                  <li>Include phone number prominently above the fold</li>
                  <li>Add click-to-call button for mobile users</li>
                  <li>Show trust badges (Government approved, ISO certified)</li>
                  <li>Display customer testimonials with location</li>
                  <li>Include clear pricing or &quot;Starting from Rs. X&quot;</li>
                  <li>Fast loading speed (under 3 seconds)</li>
                  <li>Mobile-responsive design</li>
                  <li>Simple contact form with minimal fields</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
