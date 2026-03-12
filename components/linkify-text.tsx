import Link from "next/link"
import React from "react"

interface LinkMapping {
  text: string
  href: string
  caseSensitive?: boolean
}

interface LinkifyTextProps {
  children: string
  links: LinkMapping[]
}

export function LinkifyText({ children, links }: LinkifyTextProps) {
  if (!children || links.length === 0) {
    return <>{children}</>
  }

  // Sort links by length (longest first) to handle overlapping keywords
  const sortedLinks = [...links].sort((a, b) => b.text.length - a.text.length)

  // Create a map of keyword positions to avoid double-linking
  const positions = new Set<number>()

  let content = children

  sortedLinks.forEach((link) => {
    const regex = new RegExp(
      `\\b${link.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      link.caseSensitive ? "g" : "gi"
    )

    let match
    const matches: Array<{ index: number; length: number; link: LinkMapping }> = []

    while ((match = regex.exec(children)) !== null) {
      const index = match.index
      const length = match[0].length

      // Check if this position overlaps with any existing link
      let overlaps = false
      for (let i = index; i < index + length; i++) {
        if (positions.has(i)) {
          overlaps = true
          break
        }
      }

      if (!overlaps) {
        matches.push({ index, length, link })
        // Mark these positions as used
        for (let i = index; i < index + length; i++) {
          positions.add(i)
        }
      }
    }

    // Sort matches by index in reverse order to replace from end to start
    matches.sort((a, b) => b.index - a.index)

    matches.forEach(({ index, length, link: linkData }) => {
      content =
        content.substring(0, index) +
        `[[[LINK:${index}]]]${children.substring(index, index + length)}[[[/LINK:${index}]]]` +
        content.substring(index + length)
    })
  })

  // Parse the marked content and render
  const parts: React.ReactNode[] = []
  const linkRegex = /\[\[\[LINK:(\d+)]]](.+?)\[\[\[\/LINK:\1]]]/g

  let lastIndex = 0
  let match

  while ((match = linkRegex.exec(content)) !== null) {
    const linkIndex = parseInt(match[1])
    const linkText = match[2]
    const linkData = sortedLinks.find((link) =>
      new RegExp(
        `\\b${link.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
        link.caseSensitive ? "" : "i"
      ).test(linkText)
    )

    // Add text before link
    if (match.index > lastIndex) {
      const textBefore = content.substring(lastIndex, match.index)
      parts.push(textBefore)
    }

    // Add link
    if (linkData) {
      parts.push(
        <Link key={`link-${linkIndex}`} href={linkData.href} className="text-primary hover:text-primary/80 underline">
          {linkText}
        </Link>
      )
    } else {
      parts.push(linkText)
    }

    lastIndex = match.index + match[0].length
  }

  // Add remaining text
  if (lastIndex < content.length) {
    parts.push(content.substring(lastIndex))
  }

  return <>{parts}</>
}

/**
 * Hook to generate link mappings for common pest control keywords
 * Usage: const links = usePestControlLinks({ locations: ['Wakad', 'Baner'] })
 */
export function usePestControlLinks(options?: { locations?: string[] }) {
  const links: LinkMapping[] = [
    // Services
    { text: "termite control", href: "/services/termite-control" },
    { text: "termite treatment", href: "/services/termite-control" },
    { text: "bed bug control", href: "/services/bed-bug-control" },
    { text: "bed bug treatment", href: "/services/bed-bug-control" },
    { text: "cockroach control", href: "/services/cockroach-control" },
    { text: "cockroach removal", href: "/services/cockroach-control" },
    { text: "rodent control", href: "/services/rodent-control" },
    { text: "mosquito control", href: "/services/mosquito-control" },
    { text: "pest control", href: "/" },
  ]

  // Add location-specific links if provided
  if (options?.locations) {
    const locationMap: { [key: string]: string } = {
      "Wakad": "/pest-control-in-wakad-pune",
      "Baner": "/pest-control-in-baner-pune",
      "Hinjewadi": "/pest-control-in-hinjewadi-pune",
      "Kothrud": "/pest-control-in-kothrud-pune",
      "Hadapsar": "/pest-control-in-hadapsar-pune",
      "Viman Nagar": "/pest-control-in-viman-nagar-pune",
      "Pimpri": "/pest-control-in-pimpri-pune",
      "Chinchwad": "/pest-control-in-chinchwad-pune",
      "Aundh": "/pest-control-in-aundh-pune",
      "Pimple Saudagar": "/pest-control-in-pimple-saudagar-pune",
      "Kharadi": "/pest-control-in-kharadi-pune",
      "Wagholi": "/pest-control-in-wagholi-pune",
    }

    options.locations.forEach((location) => {
      const url = locationMap[location]
      if (url) {
        links.push({ text: location, href: url, caseSensitive: true })
      }
    })
  }

  return links
}
