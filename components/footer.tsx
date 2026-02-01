import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-lg font-bold text-primary-foreground">G</span>
              </div>
              <div>
                <span className="text-lg font-bold">GlobalVision</span>
              </div>
            </div>
            <p className="mb-4 text-sm text-background/80">
              Professional pest control services in Pune. Government approved, safe chemicals, 
              and guaranteed results. Serving Pune since 2010.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+917350900022" className="flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4" />
                +91 7350900022
              </a>
              <a href="mailto:info@globalvisionpestcontrol.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4" />
               globalvision028@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="/services/cockroach-control" className="hover:text-primary">Cockroach Control</Link>
              </li>
              <li>
                <Link href="/services/termite-control" className="hover:text-primary">Termite Control</Link>
              </li>
              <li>
                <Link href="/services/bed-bug-control" className="hover:text-primary">Bed Bug Control</Link>
              </li>
              <li>
                <Link href="/services/mosquito-control" className="hover:text-primary">Mosquito Control</Link>
              </li>
              <li>
                <Link href="/services/rodent-control" className="hover:text-primary">Rodent Control</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Service Areas</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link href="/areas" className="hover:text-primary">Wakad</Link></li>
              <li><Link href="/areas" className="hover:text-primary">Hinjewadi</Link></li>
              <li><Link href="/areas" className="hover:text-primary">Baner</Link></li>
              <li><Link href="/areas" className="hover:text-primary">Kothrud</Link></li>
              <li><Link href="/areas" className="hover:text-primary">Hadapsar</Link></li>
              <li><Link href="/areas" className="hover:text-primary">Pimpri-Chinchwad</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Business Hours</h3>
            <div className="space-y-2 text-sm text-background/80">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p>Monday - Sunday</p>
                  <p>8:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p>Sr. No. 165, Malwadi</p>
                  <p>Near Harish Super Market, Hadapsar</p>
                  <p>Pune, Maharashtra 411028</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-background/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-background/80 md:flex-row">
            <p>&copy; 2024 GlobalVision Pest Control. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
