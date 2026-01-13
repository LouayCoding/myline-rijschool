"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Users, Award, CheckCircle2, Car, ArrowRight, Phone, MessageCircle, GraduationCap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PricingCard } from "@/components/pricing-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/content/site";
import { useGSAPReveal, useGSAPStagger } from "@/lib/gsap";

export default function HomePage() {
  const heroRef = useGSAPReveal({});
  const trustRef = useGSAPStagger(0.1);
  const featuresRef = useGSAPStagger(0.15);
  const pakketten1Ref = useGSAPStagger(0.15);
  const pakketten2Ref = useGSAPStagger(0.15);
  const stepsRef = useGSAPStagger(0.2);
  const schakelRef = useGSAPStagger(0.15);
  const instructeursRef = useGSAPStagger(0.1);
  const faqRef = useGSAPReveal({});

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-muted">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div ref={heroRef} className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {siteConfig.hero.headline}
              </h1>
              
              <p className="text-xl text-muted-foreground">
                {siteConfig.hero.subline}
              </p>
              
              <ul className="space-y-3">
                {siteConfig.hero.trustBullets.map((bullet, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button size="lg" asChild>
                  <Link href="/proefles">Proefles Boeken</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/prijzen">Prijzen</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=900&fit=crop"
                  alt="Gelukkige leerling met rijbewijs"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Stats Marquee */}
      <section className="py-12 bg-primary overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex items-center gap-16 px-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">2500+</div>
                <div className="text-xs text-white/80">Geslaagde leerlingen</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-white/80">Slagingspercentage</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-white/80">Gemiddelde beoordeling</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs text-white/80">Jaar ervaring</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-16 px-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">2500+</div>
                <div className="text-xs text-white/80">Geslaagde leerlingen</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-white/80">Slagingspercentage</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-xs text-white/80">Gemiddelde beoordeling</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="text-white">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs text-white/80">Jaar ervaring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8" ref={featuresRef}>
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="h-14 w-14 rounded-md bg-primary flex items-center justify-center">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Hoog slagingspercentage</h3>
                  <p className="text-sm text-muted-foreground">
                    De meeste leerlingen slagen in één keer
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="h-14 w-14 rounded-md bg-primary flex items-center justify-center">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Ervaren instructeurs</h3>
                  <p className="text-sm text-muted-foreground">
                    WRM-gecertificeerd en jarenlange ervaring
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="h-14 w-14 rounded-md bg-primary flex items-center justify-center">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Flexibel plannen</h3>
                  <p className="text-sm text-muted-foreground">
                    Ook &apos;s avonds en in het weekend
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Pakketten */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Autopakketten</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kies het pakket dat bij je past
            </p>
          </div>
          <div ref={pakketten1Ref} className="grid md:grid-cols-3 gap-8 mb-12">
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
          <div className="text-center mt-4">
            <Button variant="ghost" asChild>
              <Link href="/prijzen" className="text-muted-foreground hover:text-foreground">Bekijk alle pakketten →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Motor Pakketten */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200&h=800&fit=crop"
                alt="Motorrijlessen"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Motorrijlessen</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Ook voor je motorrijbewijs ben je bij ons aan het juiste adres. Professionele begeleiding van A tot Z.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Moderne motoren</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Motorkleding inbegrepen</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>AVB en AVD examen</span>
                </div>
              </div>
            </div>
          </div>
          <div ref={pakketten2Ref} className="grid md:grid-cols-3 gap-8 mb-12">
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
          <div className="text-center mt-4">
            <Button variant="ghost" asChild>
              <Link href="/prijzen" className="text-muted-foreground hover:text-foreground">Bekijk alle pakketten →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Hoe werkt het?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                In 3 stappen naar je rijbewijs
              </p>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=800&fit=crop"
                  alt="Rijles"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div ref={stepsRef} className="space-y-6">
            {siteConfig.hoeWerktHet.map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="shrink-0">
                  <div className="h-16 w-16 rounded-md bg-primary flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Schakel vs Automaat */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schakel of Automaat?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beide opties hebben hun voordelen. Kies wat bij jou past.
            </p>
          </div>
          <div ref={schakelRef} className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {siteConfig.schakelVsAutomaat.map((option, index) => (
              <div key={option.type} className="group">
                <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                  <Image
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1449965408869-eaa3f722e40d' : '1485463611174-f302f6a5c1c9'}?w=800&h=600&fit=crop`}
                    alt={option.type}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center">
                        <Car className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{option.type}</h3>
                    </div>
                    <p className="text-white/90 font-medium">{option.title}</p>
                  </div>
                </div>
                <Card className="bg-card/50">
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {option.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructeurs */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=1080&fit=crop"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze instructeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ervaren professionals die je helpen slagen
            </p>
          </div>
          <div ref={instructeursRef} className="grid md:grid-cols-3 gap-8">
            {siteConfig.instructeurs.map((instructeur, index) => (
              <div key={instructeur.name} className="group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1507003211169-0a1dd7228f2d' : index === 1 ? '1500648767791-00a36c92f3b2' : '1519085360753-af0119f7b3cd'}?w=600&h=800&fit=crop&crop=faces`}
                    alt={instructeur.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-bold text-primary">{instructeur.experience}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{instructeur.name}</h3>
                  <p className="text-muted-foreground">{instructeur.specialty}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">5.0 beoordeling</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/15 via-primary/8 to-muted">
        <div className="container mx-auto px-4">
          <div ref={faqRef} className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Veelgestelde vragen</h2>
            </div>
            <Accordion type="single">
              {siteConfig.faqHome.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger value={`faq-${index}`}>{faq.question}</AccordionTrigger>
                  <AccordionContent value={`faq-${index}`}>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary/10">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Gratis Proefles - Geen Verplichtingen</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Start vandaag met je rijbewijs
            </h2>
            
            <p className="text-xl text-white/90 mb-10">
              Boek een gratis proefles en begin met rijlessen
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/proefles">Proefles Boeken</Link>
              </Button>
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md font-medium text-white bg-white/10 hover:bg-white/20 transition-colors">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
