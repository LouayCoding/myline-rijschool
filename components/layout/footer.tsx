import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <span className="text-white font-bold text-sm">ML</span>
              </div>
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Professionele rijlessen voor auto en motor met hoge slagingspercentages.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-md bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-md bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navigatie</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/prijzen" className="text-muted-foreground hover:text-primary transition-colors">
                  Prijzen
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="text-muted-foreground hover:text-primary transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Pakketten</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/prijzen#auto" className="text-muted-foreground hover:text-primary transition-colors">
                  Auto Rijlessen
                </Link>
              </li>
              <li>
                <Link href="/prijzen#motor" className="text-muted-foreground hover:text-primary transition-colors">
                  Motor Rijlessen
                </Link>
              </li>
              <li>
                <Link href="/prijzen#losse" className="text-muted-foreground hover:text-primary transition-colors">
                  Losse Tarieven
                </Link>
              </li>
              <li>
                <Link href="/proefles" className="text-muted-foreground hover:text-primary transition-colors">
                  Gratis Proefles
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <a href={`tel:${siteConfig.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-primary transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
