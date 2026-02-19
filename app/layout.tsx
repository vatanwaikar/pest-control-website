import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"


const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Best Pest Control in Pune | Termite, Bed Bug, Cockroach Treatment",
    template: "%s | GlobalVision Pest Control",
  },
  description:
    "Affordable and professional pest control services in Pune including termite, bed bug, cockroach and rodent treatment. Same day service available.",
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
    title: "Best Pest Control in Pune | Termite, Bed Bug, Cockroach Treatment",
    description:
      "Affordable and professional pest control services in Pune including termite, bed bug, cockroach and rodent treatment. Same day service available.",
    images: [
      {
        url: "https://globalvisionpestcontrol.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GlobalVision Pest Control Pune"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pest Control in Pune | GlobalVision",
    description: "Affordable and professional pest control services in Pune including termite, bed bug, cockroach and rodent treatment. Same day service available.",
    images: ["https://globalvisionpestcontrol.com/twitter-image.jpg"],
    creator: "@globalvisionpest",
    site: "@globalvisionpest"
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
  <head>
    {/* GA4 */}
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-Y7CR77YBVL"
      strategy="afterInteractive"
    />
    <Script id="ga4-init" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Y7CR77YBVL');
      `}
    </Script>
  </head>

  <body className="font-sans antialiased">
    {children}
    <Analytics />
  </body>
</html>

  )
}
