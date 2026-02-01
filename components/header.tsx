"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-primary-foreground">G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">GlobalVision</span>
              <span className="text-xs text-muted-foreground">Professional Pest Control</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary">
              About Us
            </Link>
            <Link href="/areas" className="text-sm font-medium text-foreground hover:text-primary">
              Service Areas
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+917350900022" className="flex items-center gap-2 text-sm font-medium text-primary">
              <Phone className="h-4 w-4" />
              +91 7350900022
            </a>
            <Button asChild>
              <a href="tel:+917350900022">Call Now</a>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/areas" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Service Areas
              </Link>
              <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <a href="tel:+917350900022" className="flex items-center gap-2 text-sm font-medium text-primary">
                <Phone className="h-4 w-4" />
                +91 7350900022
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
