"use client";

import Link from "next/link";
import { Award, Heart, Shield, Users, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { useGSAPReveal, useGSAPStagger } from "@/lib/gsap";

export default function OverOnsPage() {
  const headerRef = useGSAPReveal({});
  const missionRef = useGSAPReveal({});
  const valuesRef = useGSAPStagger(0.15);
  const statsRef = useGSAPStagger(0.1);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-muted">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Over Ons</h1>
            <p className="text-xl text-muted-foreground">
              Passie voor rijles, gedreven door resultaat
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div ref={missionRef} className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Onze Missie</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {siteConfig.aboutUs.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Kernwaarden</h2>
          <div ref={valuesRef} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {siteConfig.aboutUs.values.map((value, index) => {
              const icons = [Award, Heart, Shield];
              const Icon = icons[index];
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="h-14 w-14 rounded-md bg-primary flex items-center justify-center">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Resultaten</h2>
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {siteConfig.aboutUs.stats.map((stat, index) => {
              const icons = [Users, TrendingUp, Award, Target];
              const Icon = icons[index];
              return (
                <div key={index} className="text-center">
                  <Icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Waarom kiezen voor ons?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center shrink-0">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Ervaren Instructeurs</h3>
                <p className="text-sm text-muted-foreground">
                  WRM-gecertificeerd met jarenlange ervaring
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center shrink-0">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Persoonlijke Begeleiding</h3>
                <p className="text-sm text-muted-foreground">
                  Individuele aandacht en een lesplan op maat - jouw succes is ons succes
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center shrink-0">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Persoonlijke Aanpak</h3>
                <p className="text-sm text-muted-foreground">
                  Lesplan op maat - iedereen leert anders
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-md bg-primary flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Moderne Lesauto&apos;s</h3>
                <p className="text-sm text-muted-foreground">Veilige en comfortabele auto&apos;s met dubbele bediening</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om te beginnen?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sluit je aan bij duizenden tevreden leerlingen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://www.startmetjerijbewijs.nl/rijschool-my-line/inschrijven" target="_blank" rel="noopener noreferrer">Proefles Boeken</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/reviews">Lees Reviews</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
