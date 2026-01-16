"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/prijzen", label: "Prijzen" },
    { href: "/over-ons", label: "Over Ons" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  const isHomePage = pathname === "/";
  const isTransparent = isHomePage && !scrolled;

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isTransparent 
        ? "bg-transparent" 
        : "bg-white shadow-sm"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
            <span className="text-white font-bold text-sm">ML</span>
          </div>
          <span className={cn(
            "font-bold text-xl transition-colors",
            isTransparent ? "text-white" : "text-foreground"
          )}>
            {siteConfig.name}
          </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                pathname === item.href
                  ? isTransparent
                    ? "bg-white/20 text-white"
                    : "bg-primary/10 text-primary"
                  : isTransparent
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
          </nav>

          <div className="flex items-center gap-3">
          <a href={`tel:${siteConfig.phone}`} className={cn(
            "hidden lg:flex items-center gap-2 px-3 py-2 text-sm transition-colors rounded-md",
            isTransparent
              ? "text-white/80 hover:text-white hover:bg-white/10"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}>
            <Phone className="h-4 w-4" />
            <span className="font-medium">{siteConfig.phone}</span>
          </a>
          <Button asChild className={cn(
            "hidden sm:flex",
            isTransparent && "bg-white text-foreground hover:bg-white/90"
          )}>
            <a href="https://www.startmetjerijbewijs.nl/rijschool-my-line/inschrijven" target="_blank" rel="noopener noreferrer">Proefles Boeken</a>
          </Button>

            <button
            className={cn(
              "md:hidden p-2 rounded-md transition-colors",
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-muted"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 text-sm font-medium rounded-md transition-all",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-border/40">
                <Button asChild className="w-full">
                  <a href="https://www.startmetjerijbewijs.nl/rijschool-my-line/inschrijven" target="_blank" rel="noopener noreferrer">Proefles Boeken</a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
