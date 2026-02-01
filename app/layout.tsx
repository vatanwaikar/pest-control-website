import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "GlobalVision - Professional Pest Control Services in Pune | Cockroach, Termite, Bed Bug Control",
    template: "%s | GlobalVision Pest Control",
  },
  description:
    "Best pest control services in Pune. Government approved, safe chemicals. Cockroach control, termite treatment, bed bug control, mosquito control. Serving Wakad, Hinjewadi, Baner, Kothrud. Call +91 7350900022",
  keywords: [
    "pest control services in Pune",
    "cockroach control Pune",
    "termite control Pune",
    "bed bug treatment Pune",
    "mosquito control Pune",
    "rodent control Pune",
    "pest control Wakad",
    "pest control Hinjewadi",
    "pest control Baner",
    "pest control Kothrud",
    "GlobalVision pest control",
  ],
  authors: [{ name: "GlobalVision Pest Control" }],
  creator: "GlobalVision Pest Control",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://globalvisionpestcontrol.com",
    siteName: "GlobalVision Pest Control",
    title: "GlobalVision - Professional Pest Control Services in Pune",
    description:
      "Best pest control services in Pune. Government approved, safe chemicals. Serving all areas of Pune.",
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
