"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/content/site";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(
      footerRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/images/myline-logo.png" 
                alt={siteConfig.name}
                width={140}
                height={45}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Professionele rijlessen voor auto en motor met hoge slagingspercentages.
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-md bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Navigatie</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/prijzen" className="text-white/80 hover:text-white transition-colors">
                  Prijzen
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="text-white/80 hover:text-white transition-colors">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-white/80 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Pakketten</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/prijzen#auto" className="text-white/80 hover:text-white transition-colors">
                  Auto Rijlessen
                </Link>
              </li>
              <li>
                <Link href="/prijzen#motor" className="text-white/80 hover:text-white transition-colors">
                  Motor Rijlessen
                </Link>
              </li>
              <li>
                <Link href="/prijzen#losse" className="text-white/80 hover:text-white transition-colors">
                  Losse Tarieven
                </Link>
              </li>
              <li>
                <a href="https://www.startmetjerijbewijs.nl/rijschool-my-line/inschrijven" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                  Proefles
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-white" />
                <a href={`tel:${siteConfig.phone}`} className="text-white/80 hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-white" />
                <a href={`mailto:${siteConfig.email}`} className="text-white/80 hover:text-white transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
