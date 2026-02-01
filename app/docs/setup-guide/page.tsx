"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Folder,
  Package,
  Palette,
  Code,
  Search,
  BarChart3,
  Target,
  Play,
  Rocket,
} from "lucide-react"

export default function SetupGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground">
            Developer Guide
          </Badge>
          <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
            Complete Setup Guide
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/90">
            Step-by-step instructions to set up your PestFree Pune website
            locally from scratch and deploy to production
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Step 1 */}
          <Card id="step-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </span>
                <CheckCircle className="h-6 w-6 text-primary" />
                Project Creation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">Prerequisites</h3>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  <li>Node.js v18.17.0 or higher (LTS recommended: v20.x)</li>
                  <li>npm v9+ or pnpm v8+ (comes with Node.js)</li>
                  <li>VS Code or any code editor</li>
                  <li>Git installed (optional but recommended)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Check Node.js Version
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`node -v
# Should show v18.17.0 or higher

npm -v
# Should show 9.x or higher`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Create Next.js Project
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`npx create-next-app@latest pestfree-pune`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Select These Options During Setup
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`✔ Would you like to use TypeScript? → Yes
✔ Would you like to use ESLint? → Yes
✔ Would you like to use Tailwind CSS? → Yes
✔ Would you like your code inside a \`src/\` directory? → No
✔ Would you like to use App Router? (recommended) → Yes
✔ Would you like to use Turbopack for next dev? → Yes
✔ Would you like to customize the import alias? → No (use default @/*)`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Navigate to Project</h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`cd pestfree-pune`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card id="step-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </span>
                <Folder className="h-6 w-6 text-primary" />
                Folder Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">
                  Complete Project Structure
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`pestfree-pune/
├── app/
│   ├── layout.tsx          # Root layout with metadata & fonts
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & Tailwind config
│   ├── about/
│   │   └── page.tsx        # About Us page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── services/
│   │   ├── page.tsx        # Services listing page
│   │   ├── cockroach-control/
│   │   │   └── page.tsx    # Cockroach service page
│   │   ├── termite-control/
│   │   │   └── page.tsx    # Termite service page
│   │   ├── bed-bug-control/
│   │   │   └── page.tsx    # Bed bug service page
│   │   ├── mosquito-control/
│   │   │   └── page.tsx    # Mosquito service page
│   │   └── rodent-control/
│   │       └── page.tsx    # Rodent service page
│   ├── areas/
│   │   └── page.tsx        # Service areas page (Local SEO)
│   ├── lp/
│   │   └── page.tsx        # Google Ads landing page
│   └── docs/
│       ├── ga4-setup/
│       │   └── page.tsx    # GA4 documentation
│       └── google-ads/
│           └── page.tsx    # Google Ads guide
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── accordion.tsx
│   │   └── ... (other ui components)
│   ├── header.tsx          # Site header with navigation
│   ├── footer.tsx          # Site footer
│   ├── hero.tsx            # Homepage hero section
│   ├── services.tsx        # Services grid component
│   ├── trust-badges.tsx    # Trust indicators
│   ├── testimonials.tsx    # Customer reviews
│   ├── faq.tsx             # FAQ accordion
│   ├── cta-section.tsx     # Call-to-action section
│   ├── sticky-cta.tsx      # Mobile sticky buttons
│   ├── contact-form.tsx    # Contact form component
│   ├── why-choose-us.tsx   # Benefits section
│   ├── work-process.tsx    # How it works section
│   ├── service-page-template.tsx  # Reusable service page
│   └── json-ld.tsx         # SEO schema markup
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── public/
│   ├── images/             # Static images
│   └── con.ico         # Site favicon
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Folder Purpose Explained
                </h3>
                <div className="space-y-3">
                  <div className="rounded-lg border p-3">
                    <code className="font-semibold text-primary">app/</code>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Contains all pages using Next.js App Router. Each folder
                      with page.tsx becomes a route. Example: app/about/page.tsx
                      = /about
                    </p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <code className="font-semibold text-primary">
                      components/
                    </code>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Reusable React components. The ui/ subfolder contains
                      shadcn/ui base components.
                    </p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <code className="font-semibold text-primary">lib/</code>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Utility functions and helpers. The utils.ts file contains
                      the cn() function for combining Tailwind classes.
                    </p>
                  </div>
                  <div className="rounded-lg border p-3">
                    <code className="font-semibold text-primary">public/</code>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Static assets like images, fonts, and favicon. Files here
                      are served from the root URL.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card id="step-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </span>
                <Package className="h-6 w-6 text-primary" />
                Install Required Libraries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">
                  Install shadcn/ui (Required)
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  shadcn/ui provides beautiful, accessible components built on
                  Radix UI and Tailwind CSS.
                </p>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`npx shadcn@latest init`}</code>
                </pre>
                <p className="mt-2 text-sm text-muted-foreground">
                  Select these options:
                </p>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`✔ Which style would you like to use? → New York
✔ Which color would you like to use as base color? → Neutral
✔ Would you like to use CSS variables for colors? → Yes`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Add shadcn/ui Components
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`# Add all required components at once
npx shadcn@latest add button card input badge accordion textarea select label sheet navigation-menu`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Install Additional Dependencies
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`# Lucide React for icons
npm install lucide-react

# Class variance authority (usually installed with shadcn)
npm install class-variance-authority

# Tailwind merge for className merging
npm install tailwind-merge

# clsx for conditional classes
npm install clsx`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Package Purposes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left">Package</th>
                        <th className="p-2 text-left">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-mono text-primary">
                          lucide-react
                        </td>
                        <td className="p-2 text-muted-foreground">
                          Beautiful icon library with 1000+ icons
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono text-primary">
                          class-variance-authority
                        </td>
                        <td className="p-2 text-muted-foreground">
                          Create component variants with type safety
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono text-primary">
                          tailwind-merge
                        </td>
                        <td className="p-2 text-muted-foreground">
                          Merge Tailwind classes without conflicts
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono text-primary">clsx</td>
                        <td className="p-2 text-muted-foreground">
                          Conditional className joining utility
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Verify package.json Dependencies
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.460.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.5.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-select": "^2.1.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-navigation-menu": "^1.2.0"
  }
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card id="step-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </span>
                <Palette className="h-6 w-6 text-primary" />
                Tailwind & Global Styles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">
                  Update globals.css with Green Theme
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  Replace the contents of app/globals.css with this custom green
                  + white theme:
                </p>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`@import "tailwindcss";

@layer base {
  :root {
    --background: oklch(0.99 0.002 140);
    --foreground: oklch(0.2 0.02 140);
    --card: oklch(1 0 0);
    --card-foreground: oklch(0.2 0.02 140);
    --popover: oklch(1 0 0);
    --popover-foreground: oklch(0.2 0.02 140);
    --primary: oklch(0.45 0.15 145);
    --primary-foreground: oklch(0.99 0.002 140);
    --secondary: oklch(0.96 0.02 145);
    --secondary-foreground: oklch(0.35 0.12 145);
    --muted: oklch(0.96 0.01 140);
    --muted-foreground: oklch(0.5 0.02 140);
    --accent: oklch(0.55 0.18 145);
    --accent-foreground: oklch(0.99 0.002 140);
    --destructive: oklch(0.577 0.245 27.325);
    --destructive-foreground: oklch(0.577 0.245 27.325);
    --border: oklch(0.9 0.02 145);
    --input: oklch(0.92 0.01 140);
    --ring: oklch(0.45 0.15 145);
    --radius: 0.5rem;
  }

  .dark {
    --background: oklch(0.15 0.02 140);
    --foreground: oklch(0.95 0.01 140);
    --card: oklch(0.2 0.02 140);
    --card-foreground: oklch(0.95 0.01 140);
    --popover: oklch(0.2 0.02 140);
    --popover-foreground: oklch(0.95 0.01 140);
    --primary: oklch(0.55 0.18 145);
    --primary-foreground: oklch(0.15 0.02 140);
    --secondary: oklch(0.25 0.03 145);
    --secondary-foreground: oklch(0.9 0.01 140);
    --muted: oklch(0.25 0.02 140);
    --muted-foreground: oklch(0.65 0.02 140);
    --accent: oklch(0.45 0.15 145);
    --accent-foreground: oklch(0.95 0.01 140);
    --border: oklch(0.3 0.02 145);
    --input: oklch(0.25 0.02 140);
    --ring: oklch(0.55 0.18 145);
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@theme inline {
  --font-sans: 'Inter', 'Inter Fallback', system-ui, sans-serif;
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Color Variables Explained</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded bg-primary" />
                    <span>
                      <code>--primary</code> - Main green color for buttons,
                      links, accents
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded bg-background border" />
                    <span>
                      <code>--background</code> - Page background (off-white)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded bg-card border" />
                    <span>
                      <code>--card</code> - Card backgrounds (pure white)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded bg-secondary" />
                    <span>
                      <code>--secondary</code> - Secondary buttons, subtle
                      backgrounds
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  lib/utils.ts (Required)
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}</code>
                </pre>
                <p className="mt-2 text-sm text-muted-foreground">
                  The cn() function combines Tailwind classes intelligently,
                  handling conflicts properly.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 5 */}
          <Card id="step-5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  5
                </span>
                <Code className="h-6 w-6 text-primary" />
                Pasting v0.dev Code
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">
                  Step-by-Step File Creation
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium">
                      1. Create Component Files First
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Always create component files before page files that
                      import them.
                    </p>
                    <pre className="mt-2 overflow-x-auto rounded bg-muted p-2 text-sm">
                      <code>{`# Create components folder structure
mkdir -p components/ui
# Then create each component file`}</code>
                    </pre>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium">2. Component File Example</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Create components/header.tsx and paste the header code:
                    </p>
                    <pre className="mt-2 overflow-x-auto rounded bg-muted p-2 text-sm">
                      <code>{`// components/header.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
// ... rest of component code`}</code>
                    </pre>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium">3. Page File Example</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Create app/page.tsx (homepage) after all components exist:
                    </p>
                    <pre className="mt-2 overflow-x-auto rounded bg-muted p-2 text-sm">
                      <code>{`// app/page.tsx
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
// Import all needed components

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* Other components */}
    </main>
  )
}`}</code>
                    </pre>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium">4. Service Page Structure</h4>
                    <pre className="mt-2 overflow-x-auto rounded bg-muted p-2 text-sm">
                      <code>{`# Create service page folders
mkdir -p app/services/cockroach-control
mkdir -p app/services/termite-control
mkdir -p app/services/bed-bug-control
mkdir -p app/services/mosquito-control
mkdir -p app/services/rodent-control

# Then create page.tsx in each folder`}</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Import Path Rules</h3>
                <div className="space-y-2 text-sm">
                  <div className="rounded border p-2">
                    <code className="text-primary">@/components/...</code> -
                    Import from components folder
                  </div>
                  <div className="rounded border p-2">
                    <code className="text-primary">@/lib/...</code> - Import
                    from lib folder (utils, etc.)
                  </div>
                  <div className="rounded border p-2">
                    <code className="text-primary">@/app/...</code> - Import
                    from app folder (rarely needed)
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-destructive">
                  Common Mistakes to Avoid
                </h3>
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>Missing "use client"</strong> - Add this at the top
                    of files with useState, useEffect, onClick, or any
                    interactivity
                  </li>
                  <li>
                    <strong>Wrong import paths</strong> - Use @/components/ not
                    ../components/ or ./components/
                  </li>
                  <li>
                    <strong>Missing UI components</strong> - Run{" "}
                    <code>npx shadcn@latest add [component]</code> if import
                    fails
                  </li>
                  <li>
                    <strong>Creating page before components</strong> - Always
                    create imported components first
                  </li>
                  <li>
                    <strong>Forgetting default export</strong> - Every page.tsx
                    needs <code>export default function PageName()</code>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  File Creation Order (Important!)
                </h3>
                <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
                  <li>lib/utils.ts (if not created by shadcn)</li>
                  <li>components/ui/* (shadcn components)</li>
                  <li>components/json-ld.tsx (SEO schema)</li>
                  <li>components/header.tsx</li>
                  <li>components/footer.tsx</li>
                  <li>components/sticky-cta.tsx</li>
                  <li>All other section components (hero, services, etc.)</li>
                  <li>components/service-page-template.tsx</li>
                  <li>components/contact-form.tsx</li>
                  <li>app/layout.tsx (update with metadata)</li>
                  <li>app/globals.css (update with theme)</li>
                  <li>app/page.tsx (homepage)</li>
                  <li>All other pages (about, contact, services, etc.)</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Step 6 */}
          <Card id="step-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  6
                </span>
                <Search className="h-6 w-6 text-primary" />
                SEO Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">
                  Root Layout Metadata (app/layout.tsx)
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "PestFree Pune - Professional Pest Control Services in Pune",
    template: "%s | PestFree Pune",
  },
  description:
    "Best pest control services in Pune. Government approved, safe chemicals. Cockroach, termite, bed bug, mosquito control. Serving Wakad, Hinjewadi, Baner, Kothrud. Call +91 7350900022 ",
  keywords: [
    "pest control services in Pune",
    "cockroach control Pune",
    "termite control Pune",
    "bed bug treatment Pune",
    "mosquito control Pune",
    "pest control Wakad",
    "pest control Hinjewadi",
  ],
  authors: [{ name: "PestFree Pune" }],
  creator: "PestFree Pune",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pestfreepune.com",
    siteName: "PestFree Pune",
    title: "PestFree Pune - Professional Pest Control Services",
    description: "Best pest control services in Pune. Government approved.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#22c55e",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Page-Specific Metadata Example
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`// app/services/cockroach-control/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cockroach Control Services in Pune",
  description:
    "Professional cockroach control in Pune. German cockroach, American cockroach treatment. Safe gel treatment. Starting Rs. 999. Call +91 7350900022 ",
  keywords: [
    "cockroach control Pune",
    "German cockroach treatment",
    "kitchen cockroach removal",
  ],
}

export default function CockroachControlPage() {
  // Page content
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Local SEO Schema (components/json-ld.tsx)
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PestControlService",
    name: "PestFree Pune",
    description: "Professional pest control services in Pune",
    url: "https://pestfreepune.com",
    telephone: "+917350900022 ",
    email: "globalvision028@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Business Park",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411057",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 18.5204,
      longitude: 73.8567,
    },
    areaServed: [
      "Wakad", "Hinjewadi", "Baner", "Kothrud",
      "Hadapsar", "Pimpri-Chinchwad", "Aundh"
    ],
    priceRange: "₹₹",
    openingHours: "Mo-Su 08:00-20:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2500",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Local SEO Best Practices
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>
                    Include city name "Pune" in all page titles and H1 headings
                  </li>
                  <li>
                    Create dedicated pages for each service area (Wakad,
                    Hinjewadi, etc.)
                  </li>
                  <li>Add LocalBusiness schema markup on every page</li>
                  <li>Include phone number with tel: links throughout site</li>
                  <li>
                    Use location-specific keywords in meta descriptions
                  </li>
                  <li>Add Google Maps embed on contact page</li>
                  <li>Create area-specific content mentioning landmarks</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Step 7 */}
          <Card id="step-7">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  7
                </span>
                <BarChart3 className="h-6 w-6 text-primary" />
                Google Analytics (GA4) Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">
                  1. Create GA4 Property
                </h3>
                <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
                  <li>
                    Go to{" "}
                    <a
                      href="https://analytics.google.com"
                      className="text-primary underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      analytics.google.com
                    </a>
                  </li>
                  <li>{"Click Admin (gear icon) → Create Property"}</li>
                  <li>Enter property name: "PestFree Pune Website"</li>
                  <li>Select timezone: India Standard Time</li>
                  <li>Select currency: Indian Rupee (INR)</li>
                  <li>{"Choose Web platform → Enter website URL"}</li>
                  <li>Copy the Measurement ID (G-XXXXXXXXXX)</li>
                </ol>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  2. Add GA4 to Next.js (app/layout.tsx)
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`import Script from "next/script"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {\`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          \`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}`}</code>
                </pre>
                <p className="mt-2 text-sm text-destructive">
                  Replace G-XXXXXXXXXX with your actual Measurement ID!
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  3. Track Phone Call Clicks
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`// Add this onClick to phone links
<a
  href="tel:+917350900022 "
  onClick={() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "phone_call_click", {
        event_category: "engagement",
        event_label: "header_phone",
        value: 1,
      })
    }
  }}
>
  +91 7350900022 
</a>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  4. Track WhatsApp Clicks
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`// Add this onClick to WhatsApp links
<a
  href="https://wa.me/917350900022 ?text=Hi, I need pest control service"
  onClick={() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "sticky_cta",
        value: 1,
      })
    }
  }}
>
  WhatsApp Us
</a>`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  5. Track Form Submissions
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`// In your form submit handler
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  // Submit form data...
  
  // Track in GA4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "form_submission", {
      event_category: "lead",
      event_label: "contact_form",
      service_type: formData.service,
      area: formData.area,
    })
  }
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  6. TypeScript Declaration (types/gtag.d.ts)
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`// Create types/gtag.d.ts
interface Window {
  gtag: (
    command: "event" | "config" | "js",
    targetId: string | Date,
    config?: Record<string, unknown>
  ) => void
  dataLayer: unknown[]
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  7. Verify GA4 Events
                </h3>
                <ol className="list-inside list-decimal space-y-1 text-sm text-muted-foreground">
                  <li>
                    {"Go to GA4 → Reports → Realtime → Event count by Event name"}
                  </li>
                  <li>Open your website in a new tab</li>
                  <li>Click phone/WhatsApp buttons or submit form</li>
                  <li>Events should appear in realtime within 30 seconds</li>
                  <li>
                    {"Check DebugView: GA4 → Admin → DebugView for detailed event data"}
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Step 8 */}
          <Card id="step-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  8
                </span>
                <Target className="h-6 w-6 text-primary" />
                Google Ads Readiness
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">Landing Page URL</h3>
                <p className="text-sm text-muted-foreground">
                  Use <code>/lp</code> as your Google Ads landing page. This
                  page is optimized for conversions with minimal distractions.
                </p>
                <pre className="mt-2 overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`https://yourdomain.com/lp`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Google Ads Conversion Tracking
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`// Add to layout.tsx head section
<Script id="google-ads" strategy="afterInteractive">
  {\`
    gtag('config', 'AW-XXXXXXXXXX');
  \`}
</Script>

// Track conversions on button clicks
const trackConversion = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-XXXXXXXXXX/CONVERSION_LABEL",
      value: 1.0,
      currency: "INR",
    })
  }
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Recommended Ad Headlines (30 chars max)
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Pest Control Pune - Rs.999</li>
                  <li>Same Day Service Available</li>
                  <li>Government Approved Chemicals</li>
                  <li>100% Safe for Family & Pets</li>
                  <li>Free Inspection Today</li>
                  <li>10+ Years Experience Pune</li>
                  <li>Cockroach Control from Rs.999</li>
                  <li>Termite Treatment Experts</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Recommended Keywords
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`pest control services pune
cockroach control pune
termite treatment pune
bed bug treatment pune
pest control near me
pest control wakad
pest control hinjewadi
pest control baner
best pest control pune
affordable pest control pune`}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Negative Keywords (Add These)
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`free
diy
home remedies
natural
jobs
career
salary
training
course`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Step 9 */}
          <Card id="step-9">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  9
                </span>
                <Play className="h-6 w-6 text-primary" />
                Run Project Locally
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">Start Development Server</h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`npm run dev`}</code>
                </pre>
                <p className="mt-2 text-sm text-muted-foreground">
                  Open{" "}
                  <a
                    href="http://localhost:3000"
                    className="text-primary underline"
                  >
                    http://localhost:3000
                  </a>{" "}
                  in your browser
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Check for Build Errors</h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`npm run build`}</code>
                </pre>
                <p className="mt-2 text-sm text-muted-foreground">
                  This command checks for TypeScript errors and builds the
                  production version.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-destructive">
                  Common Errors & Fixes
                </h3>
                <div className="space-y-3">
                  <div className="rounded-lg border border-destructive/20 p-3">
                    <code className="text-sm text-destructive">
                      Module not found: Cannot resolve
                      {"'"}@/components/...{"'"}
                    </code>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fix: Create the missing component file or check import
                      path spelling
                    </p>
                  </div>

                  <div className="rounded-lg border border-destructive/20 p-3">
                    <code className="text-sm text-destructive">
                      You{"'"}re importing a component that needs useState...
                    </code>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {"Fix: Add \"use client\" at the top of the file"}
                    </p>
                  </div>

                  <div className="rounded-lg border border-destructive/20 p-3">
                    <code className="text-sm text-destructive">
                      Cannot find module {"'"}@radix-ui/react-...{"'"}
                    </code>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fix: Run{" "}
                      <code>npx shadcn@latest add [component-name]</code>
                    </p>
                  </div>

                  <div className="rounded-lg border border-destructive/20 p-3">
                    <code className="text-sm text-destructive">
                      Error: Export default is not defined
                    </code>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fix: Ensure page.tsx has{" "}
                      <code>export default function</code>
                    </p>
                  </div>

                  <div className="rounded-lg border border-destructive/20 p-3">
                    <code className="text-sm text-destructive">
                      Hydration failed because the initial UI does not match
                    </code>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fix: Check for browser extensions interfering, or wrap
                      dynamic content in useEffect
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Lint & Type Check</h3>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`# Run ESLint
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Step 10 */}
          <Card id="step-10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  10
                </span>
                <Rocket className="h-6 w-6 text-primary" />
                Deployment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold">Deploy to Vercel (Easiest)</h3>
                <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                  <li>Push code to GitHub repository</li>
                  <li>
                    Go to{" "}
                    <a
                      href="https://vercel.com"
                      className="text-primary underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      vercel.com
                    </a>{" "}
                    and sign in with GitHub
                  </li>
                  <li>{"Click \"Add New\" → \"Project\""}</li>
                  <li>Import your GitHub repository</li>
                  <li>Vercel auto-detects Next.js - click Deploy</li>
                  <li>Wait for build to complete (2-3 minutes)</li>
                </ol>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">
                  Environment Variables (If Needed)
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  {"Go to Project Settings → Environment Variables → Add:"}
                </p>
                <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                  <code>{`# Example environment variables
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_PHONE=+917350900022 
NEXT_PUBLIC_WHATSAPP=917350900022 `}</code>
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Connect Custom Domain</h3>
                <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
                  <li>
                    {"In Vercel dashboard → Project → Settings → Domains"}
                  </li>
                  <li>Add your domain: pestfreepune.com</li>
                  <li>
                    Update DNS records at your domain registrar:
                    <pre className="mt-2 overflow-x-auto rounded bg-muted p-2">
                      <code>{`Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com`}</code>
                    </pre>
                  </li>
                  <li>Wait for DNS propagation (5 mins to 48 hours)</li>
                  <li>Vercel automatically provisions SSL certificate</li>
                </ol>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Post-Deployment Checklist</h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Test all pages load correctly</li>
                  <li>Test phone call and WhatsApp buttons work</li>
                  <li>Test contact form submission</li>
                  <li>Verify GA4 is receiving events (Realtime report)</li>
                  <li>
                    Test on mobile devices (use Chrome DevTools device mode)
                  </li>
                  <li>
                    Submit sitemap to Google Search Console:{" "}
                    <code>yourdomain.com/sitemap.xml</code>
                  </li>
                  <li>
                    Test page speed:{" "}
                    <a
                      href="https://pagespeed.web.dev"
                      className="text-primary underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PageSpeed Insights
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-primary/10 p-4">
                <h3 className="mb-2 font-semibold text-primary">
                  Congratulations!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your PestFree Pune website is now live. Start running Google
                  Ads campaigns pointing to your /lp landing page and watch the
                  leads come in!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Quick Reference */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Reference Commands</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-lg bg-foreground p-4 text-sm text-background">
                <code>{`# Create project
npx create-next-app@latest pestfree-pune

# Install shadcn
npx shadcn@latest init

# Add components
npx shadcn@latest add button card input badge accordion textarea select label sheet navigation-menu

# Install dependencies
npm install lucide-react

# Run development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  )
}
