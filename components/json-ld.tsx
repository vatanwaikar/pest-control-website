export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://globalvisionpestcontrol.com",
    name: "GlobalVision Pest Control",
    image: "https://globalvisionpestcontrol.com/logo.png",
    description:
      "Professional pest control services in Pune. Government approved, ISO certified. Cockroach control, termite treatment, bed bug control, mosquito control, rodent control.",
    url: "https://globalvisionpestcontrol.com",
    telephone: "+917350900022",
    email: "info@globalvisionpestcontrol.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 12, Green Plaza, Near Wakad Bridge",
      addressLocality: "Wakad",
      addressRegion: "Pune, Maharashtra",
      postalCode: "411057",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.5952",
      longitude: "73.7652",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "Rs. 999 - Rs. 15,000",
    areaServed: [
      "Wakad",
      "Hinjewadi",
      "Baner",
      "Kothrud",
      "Hadapsar",
      "Pimpri-Chinchwad",
      "Aundh",
      "Viman Nagar",
      "Kalyani Nagar",
      "Koregaon Park",
      "Pune",
    ],
    sameAs: ["https://www.facebook.com/globalvisionpestcontrol", "https://www.instagram.com/globalvisionpestcontrol"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "523",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    url: url,
    provider: {
      "@type": "LocalBusiness",
      name: "GlobalVision Pest Control",
      telephone: "+917350900022",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Pune",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
