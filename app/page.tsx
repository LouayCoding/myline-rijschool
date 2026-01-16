"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Users, Award, CheckCircle2, Car, ArrowRight, Phone, MessageCircle, GraduationCap, Shield, TrendingUp, Calendar, MapPin } from "lucide-react";
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
  const instructeursRef = useGSAPStagger(0.1);
  const faqRef = useGSAPReveal({});

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center -mt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1691371107034-e28ee43a669e?q=80&w=1920&auto=format&fit=crop"
            alt="Rijschool MY-Line"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-red-900/40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
          <div ref={heroRef} className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              {siteConfig.hero.headline}
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10">
              {siteConfig.hero.subline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8 py-6 bg-primary hover:bg-primary/90 transition-all" asChild>
                <a href="https://www.startmetjerijbewijs.nl/rijschool-my-line/inschrijven" target="_blank" rel="noopener noreferrer">Aanmelden</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-transparent hover:bg-white/10 text-white border-2 border-white hover:border-white transition-all" asChild>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center text-white">
              <div className="text-2xl font-bold">300+</div>
              <div className="text-xs text-white/90">Geslaagde leerlingen</div>
            </div>
            <div className="text-center text-white">
              <div className="text-2xl font-bold">4.9</div>
              <div className="text-xs text-white/90">Gemiddelde beoordeling</div>
            </div>
            <div className="text-center text-white">
              <div className="text-2xl font-bold">8+</div>
              <div className="text-xs text-white/90">Jaar ervaring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Over Ons Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-start max-w-6xl mx-auto">
            <div>
              {/* Eyebrow */}
              <p className="text-sm font-medium text-primary mb-6 tracking-wide uppercase">Onze aanpak</p>
              
              {/* Statement Headline - Dominant */}
              <h2 className="mb-6 leading-[1.1]">
                <span className="block text-5xl md:text-6xl font-bold">Geen standaard rijschool</span>
                <span className="block text-2xl md:text-3xl font-normal text-muted-foreground mt-2">— persoonlijke begeleiding</span>
              </h2>
              
              {/* Supporting Copy */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Leren rijden vraagt vertrouwen. Daarom werken wij met vaste instructeurs en eerlijke begeleiding richting je examen.
              </p>
              
              {/* CTA - Direct na intro */}
              <div className="mb-16">
                <Button size="lg" asChild>
                  <a href="https://www.startmetjerijbewijs.nl/rijschool-my-line/inschrijven" target="_blank" rel="noopener noreferrer">
                    Plan een proefles
                  </a>
                </Button>
              </div>
              
              {/* Benefits - Secundair, rustiger */}
              <div className="space-y-6 opacity-80">
                <div>
                  <h3 className="text-base font-semibold mb-1">Persoonlijke begeleiding</h3>
                  <p className="text-sm text-muted-foreground">Elk lesplan afgestemd op jouw tempo en leerstijl.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">Eerlijk lesadvies</h3>
                  <p className="text-sm text-muted-foreground">Doelgericht werken zonder onnodige lessen.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1">Focus op zelfvertrouwen</h3>
                  <p className="text-sm text-muted-foreground">Ontspannen leren in een veilige omgeving.</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden lg:order-last order-first lg:sticky lg:top-24">
              <Image
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=1000&fit=crop"
                alt="Rijschool MY-Line instructeur"
                fill
                className="object-cover"
              />
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

      {/* Rijschool Features */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Waarom kiezen voor Rijschool MY-Line?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vriendelijkheid, kwaliteit, betrokkenheid en flexibiliteit
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {siteConfig.rijschoolFeatures.map((feature, index) => {
              const icons = { Car, Calendar, Users, MapPin, Award };
              const Icon = icons[feature.icon as keyof typeof icons];
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-md bg-primary flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="py-16 md:py-20 bg-muted">
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

      {/* Instructeur */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Jouw instructeur</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professionele begeleiding voor auto en motor
            </p>
          </div>
          <div ref={instructeursRef} className="max-w-2xl mx-auto">
            {siteConfig.instructeurs.map((instructeur) => (
              <div key={instructeur.name} className="bg-card rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="relative aspect-[4/5] md:aspect-auto md:h-full">
                    <Image
                      src={instructeur.image}
                      alt={`${instructeur.name} - Rijinstructeur Rijschool MY-Line`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 w-fit">
                      <Award className="h-4 w-4" />
                      {instructeur.experience}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-3">{instructeur.name}</h3>
                    <p className="text-xl text-muted-foreground mb-6">{instructeur.specialty}</p>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                        ))}
                      </div>
                      <span className="text-sm font-medium">5.0 beoordeling</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Met jarenlange ervaring in het lesgeven voor zowel auto als motor, help ik jou op een professionele en persoonlijke manier naar je rijbewijs.
                    </p>
                    <Button asChild>
                      <a href="https://www.startmetjerijbewijs.nl/rijschool-my-line/inschrijven" target="_blank" rel="noopener noreferrer">Proefles Boeken</a>
                    </Button>
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
              <span className="text-sm font-medium">Proefles - Gratis bij pakketafname</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Start vandaag met je rijbewijs
            </h2>
            
            <p className="text-xl text-white/90 mb-10">
              Boek een proefles en begin met rijlessen
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://www.startmetjerijbewijs.nl/rijschool-my-line/inschrijven" target="_blank" rel="noopener noreferrer">Proefles Boeken</a>
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
