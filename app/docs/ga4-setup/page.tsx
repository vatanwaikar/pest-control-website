import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "GA4 Setup Guide",
  description: "Complete guide to setting up Google Analytics 4 for your pest control website with event tracking.",
  robots: "noindex, nofollow",
}

export default function GA4SetupPage() {
  return (
    <main>
      <Header />

      <section className="bg-primary py-12">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Google Analytics 4 (GA4) Setup Guide
          </h1>
          <p className="mt-4 text-primary-foreground/90">
            Complete guide to set up GA4 tracking for your pest control website.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-8">
            {/* Step 1 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Step 1: Create GA4 Property</h2>
                <ol className="list-decimal space-y-3 pl-6 text-muted-foreground">
                  <li>Go to Google Analytics: analytics.google.com</li>
                  <li>Click Admin (gear icon) in the bottom left</li>
                  <li>
                    Click <strong>Create Property</strong>
                  </li>
                  <li>
                    Enter property name: <code className="rounded bg-muted px-2 py-1">GlobalVision Pest Control Website</code>
                  </li>
                  <li>Select your time zone (India Standard Time) and currency (INR)</li>
                  <li>Select Business industry: Home Services</li>
                  <li>Select business objectives (Generate leads, Drive online sales)</li>
                  <li>Accept terms and create property</li>
                </ol>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Step 2: Set Up Data Stream</h2>
                <ol className="list-decimal space-y-3 pl-6 text-muted-foreground">
                  <li>
                    After creating property, select <strong>Web</strong> as platform
                  </li>
                  <li>
                    Enter your website URL: <code className="rounded bg-muted px-2 py-1">https://globalvisionpestcontrol.com</code>
                  </li>
                  <li>
                    Enter stream name: <code className="rounded bg-muted px-2 py-1">GlobalVision Web Stream</code>
                  </li>
                  <li>Enable Enhanced measurement (scroll, outbound clicks, site search, etc.)</li>
                  <li>
                    Click <strong>Create stream</strong>
                  </li>
                  <li>
                    Copy your <strong>Measurement ID</strong> (starts with G-XXXXXXXXXX)
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Step 3: Install GA4 Code</h2>
                <p className="mb-4 text-muted-foreground">
                  Add this code to your website&apos;s layout.tsx file inside the {"<head>"} tag:
                </p>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  {`<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>`}
                </pre>
                <p className="mt-4 text-sm text-muted-foreground">
                  Replace G-XXXXXXXXXX with your actual Measurement ID.
                </p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Step 4: Set Up Event Tracking</h2>
                <p className="mb-4 text-muted-foreground">Track important user actions with these events:</p>

                <h3 className="mb-2 mt-6 font-semibold text-foreground">Phone Call Clicks:</h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  {`// Add to all phone number links
<a href="tel:+917350900022" 
   onclick="gtag('event', 'click_to_call', {
     'event_category': 'Contact',
     'event_label': 'Phone Call'
   });">
  Call Now
</a>`}
                </pre>

                <h3 className="mb-2 mt-6 font-semibold text-foreground">WhatsApp Button Clicks:</h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  {`// Add to WhatsApp links
<a href="https://wa.me/917350900022" 
   onclick="gtag('event', 'whatsapp_click', {
     'event_category': 'Contact',
     'event_label': 'WhatsApp Message'
   });">
  WhatsApp Us
</a>`}
                </pre>

                <h3 className="mb-2 mt-6 font-semibold text-foreground">Form Submissions:</h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  {`// Add to form submission handler
gtag('event', 'generate_lead', {
  'event_category': 'Contact',
  'event_label': 'Contact Form Submission'
});`}
                </pre>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Step 5: Create Conversions</h2>
                <ol className="list-decimal space-y-3 pl-6 text-muted-foreground">
                  <li>
                    Go to GA4 {">"} Admin {">"} Events
                  </li>
                  <li>Wait for your custom events to appear (may take 24-48 hours)</li>
                  <li>
                    Find <code className="rounded bg-muted px-2 py-1">click_to_call</code>,{" "}
                    <code className="rounded bg-muted px-2 py-1">whatsapp_click</code>,{" "}
                    <code className="rounded bg-muted px-2 py-1">generate_lead</code>
                  </li>
                  <li>Toggle the &quot;Mark as conversion&quot; switch for each event</li>
                </ol>
              </CardContent>
            </Card>

            {/* Step 6 */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Step 6: Verify Events in Real-Time</h2>
                <ol className="list-decimal space-y-3 pl-6 text-muted-foreground">
                  <li>
                    Go to GA4 {">"} Reports {">"} Realtime
                  </li>
                  <li>Open your website in another browser tab</li>
                  <li>Click on phone number, WhatsApp button, or submit form</li>
                  <li>Check if events appear in Realtime report under &quot;Event count by Event name&quot;</li>
                  <li>
                    Also use Chrome extension{" "}
                    <strong>Google Analytics Debugger</strong> for detailed debugging
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* GA4 Reports */}
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold text-foreground">Important GA4 Reports to Monitor</h2>
                <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                  <li>
                    <strong>Acquisition {">"} Traffic acquisition:</strong> See where your visitors come from
                  </li>
                  <li>
                    <strong>Engagement {">"} Events:</strong> Monitor all tracked events
                  </li>
                  <li>
                    <strong>Engagement {">"} Conversions:</strong> Track lead generation
                  </li>
                  <li>
                    <strong>Demographics {">"} Location:</strong> See which Pune areas get most traffic
                  </li>
                  <li>
                    <strong>Tech {">"} Overview:</strong> Mobile vs Desktop usage
                  </li>
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
