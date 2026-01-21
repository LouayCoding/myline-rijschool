"use client";

import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/content/site";
import { useGSAPReveal, useGSAPStagger } from "@/lib/gsap";

export default function ReviewsPage() {
  const headerRef = useGSAPReveal({});
  const statsRef = useGSAPReveal({});
  const reviewsRef = useGSAPStagger(0.1);

  const averageRating = 4.9;
  const totalReviews = siteConfig.reviews.length;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-muted">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Wat zeggen onze leerlingen?</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ontdek waarom leerlingen voor ons kiezen
            </p>
            <div ref={statsRef} className="inline-flex items-center gap-4 bg-card px-8 py-4 rounded-md">
              <span className="text-4xl font-bold">{averageRating}</span>
              <div>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{totalReviews} reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">

          <div ref={reviewsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
            {siteConfig.reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={`https://images.unsplash.com/photo-${index % 3 === 0 ? '1507003211169-0a1dd7228f2d' : index % 3 === 1 ? '1500648767791-00a36c92f3b2' : '1519085360753-af0119f7b3cd'}?w=100&h=100&fit=crop&crop=faces`}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-bold">{review.name}</h3>
                        <Badge className="bg-primary text-white text-xs">{review.package}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{review.date}</p>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om te starten?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sluit je aan bij honderden tevreden leerlingen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://www.startmetjerijbewijs.nl/rijschool-my-line/inschrijven" target="_blank" rel="noopener noreferrer">Proefles Boeken</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/prijzen">Bekijk Pakketten</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
