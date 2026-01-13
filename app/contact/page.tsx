"use client";

import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { useGSAPReveal, useGSAPStagger } from "@/lib/gsap";

export default function ContactPage() {
  const headerRef = useGSAPReveal({});
  const cardsRef = useGSAPStagger(0.15);
  const mapRef = useGSAPReveal({});

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-muted">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Neem contact op</h1>
            <p className="text-xl text-muted-foreground">
              Heb je vragen? We&apos;re hier om je te helpen!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Kies je contactmethode</h2>
            <p className="text-muted-foreground">We reageren snel op al je vragen</p>
          </div>
          
          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Telefoon</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {siteConfig.phone}
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Ma-vr: 9:00 - 18:00
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" asChild>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat met ons
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Snelle reactie
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>E-mail</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                {siteConfig.email}
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Reactie binnen 24 uur
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Adres</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {siteConfig.address}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Op afspraak
              </p>
            </CardContent>
          </Card>
          </div>
        </div>
      </section>

      {/* Opening Hours & Map */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                Openingstijden
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Maandag - Vrijdag</span>
                  <span className="text-muted-foreground">9:00 - 21:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Zaterdag</span>
                  <span className="text-muted-foreground">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Zondag</span>
                  <span className="text-muted-foreground">Op afspraak</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Rijlessen ook &apos;s avonds en in het weekend mogelijk
              </p>
            </CardContent>
          </Card>
            </div>
            
            <div ref={mapRef}>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-card">
            {/* TODO: replace with actual Google Maps embed */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-sm">Google Maps locatie</p>
                <p className="text-xs mt-2">{siteConfig.address}</p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om te starten?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Plan vandaag nog je gratis proefles en begin aan je rijbewijs
            </p>
            <Button size="lg" asChild>
              <a href="/proefles">Gratis Proefles Boeken</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
