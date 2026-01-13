"use client";

import { Metadata } from "next";
import Link from "next/link";
import { Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PricingCard } from "@/components/pricing-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";
import { formatPrice } from "@/lib/utils";
import { useGSAPReveal, useGSAPStagger } from "@/lib/gsap";

export default function PrijzenPage() {
  const headerRef = useGSAPReveal({});
  const autoRef = useGSAPStagger(0.15);
  const motorRef = useGSAPStagger(0.15);
  const infoRef = useGSAPReveal({});
  const faqRef = useGSAPReveal({});

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-muted">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Prijzen & Pakketten</h1>
            <p className="text-xl text-muted-foreground">
              Transparante prijzen zonder verborgen kosten
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">

          <Tabs defaultValue="auto" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 h-12">
            <TabsTrigger value="auto" className="text-base font-bold">Auto</TabsTrigger>
            <TabsTrigger value="motor" className="text-base font-bold">Motor</TabsTrigger>
            <TabsTrigger value="losse" className="text-base font-bold">Losse Tarieven</TabsTrigger>
          </TabsList>

          <TabsContent value="auto">
            <div ref={autoRef} className="grid md:grid-cols-3 gap-8 mb-12">
              {siteConfig.autoPakketten.map((pakket) => (
                <PricingCard
                  key={pakket.id}
                  name={pakket.name}
                  price={pakket.price}
                  features={pakket.features}
                  popular={pakket.popular}
                  badge={pakket.badge}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="motor">
            <div ref={motorRef} className="grid md:grid-cols-3 gap-8 mb-12">
              {siteConfig.motorPakketten.map((pakket) => (
                <PricingCard
                  key={pakket.id}
                  name={pakket.name}
                  price={pakket.price}
                  features={pakket.features}
                  popular={pakket.popular}
                  badge={pakket.badge}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="losse">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Losse Tarieven</CardTitle>
                  <CardDescription>
                    Flexibele opties voor extra lessen en examens
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {siteConfig.losseTarieven.map((tarief, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center pb-4 border-b last:border-0 last:pb-0"
                      >
                        <span className="font-medium">{tarief.name}</span>
                        <span className="text-lg font-bold">{formatPrice(tarief.price)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button className="w-full" asChild>
                      <Link href="/proefles">Neem contact op</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Wat is inbegrepen */}
        <div ref={infoRef} className="mt-16 max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-6 w-6 text-primary" />
                Wat is inbegrepen in onze pakketten?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Professionele rijlessen met ervaren instructeurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Moderne en goed onderhouden lesauto's</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Online theoriecursus met oefenexamens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Gratis gebruik van lesmateriaal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Tussentijdse toets en praktijkexamen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Flexibele lestijden, ook 's avonds en weekend</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Persoonlijke begeleiding en voortgangsrapportages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ophalen en thuisbrengen binnen werkgebied</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Prijzen */}
        <div ref={faqRef} className="mt-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Veelgestelde Vragen over Prijzen</h2>
          </div>
          <Accordion type="single">
            {siteConfig.faqPrijzen.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger value={`faq-${index}`}>{faq.question}</AccordionTrigger>
                <AccordionContent value={`faq-${index}`}>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nog vragen over onze prijzen?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Neem vrijblijvend contact met ons op voor meer informatie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/proefles">Gratis Proefles Boeken</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Neem Contact Op</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
