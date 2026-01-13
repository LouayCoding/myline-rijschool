"use client";

import { useState } from "react";
import { Phone, MessageCircle, CheckCircle2, ArrowRight, ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { useGSAPReveal } from "@/lib/gsap";

type FormData = {
  name: string;
  email: string;
  phone: string;
  pakket: string;
  voorkeur: string;
  datum: string;
  tijd: string;
  locatie: string;
  bericht: string;
};

type ValidationErrors = Partial<Record<keyof FormData, string>>;

export default function ProeflesPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    pakket: "",
    voorkeur: "auto",
    datum: "",
    tijd: "",
    locatie: "",
    bericht: "",
  });

  const headerRef = useGSAPReveal({});

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/\s/g, '');
    return /^(\+31|0)[1-9][0-9]{8}$/.test(cleaned);
  };

  const validateStep = (step: number): boolean => {
    const newErrors: ValidationErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Naam is verplicht";
      if (!formData.email.trim()) {
        newErrors.email = "E-mail is verplicht";
      } else if (!validateEmail(formData.email)) {
        newErrors.email = "Ongeldig e-mailadres";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Telefoonnummer is verplicht";
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = "Ongeldig telefoonnummer (gebruik 06 of +31)";
      }
    }

    if (step === 2) {
      if (!formData.pakket) newErrors.pakket = "Selecteer een pakket";
    }

    if (step === 3) {
      if (!formData.datum) newErrors.datum = "Selecteer een datum";
      if (!formData.tijd) newErrors.tijd = "Selecteer een tijd";
      if (!formData.locatie.trim()) newErrors.locatie = "Locatie is verplicht";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const steps = [
    { number: 1, title: "Jouw gegevens" },
    { number: 2, title: "Pakket keuze" },
    { number: 3, title: "Planning" },
    { number: 4, title: "Bevestiging" },
  ];

  if (submitted) {
    return (
      <div className="flex flex-col">
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-6">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4">Aanmelding Ontvangen!</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We nemen binnen 24 uur contact met je op om je gratis proefles in te plannen.
              </p>
              <div className="bg-card rounded-lg p-6 mb-8">
                <h3 className="font-bold mb-4">Jouw gegevens:</h3>
                <div className="space-y-2 text-sm text-left">
                  <p><span className="text-muted-foreground">Naam:</span> {formData.name}</p>
                  <p><span className="text-muted-foreground">Email:</span> {formData.email}</p>
                  <p><span className="text-muted-foreground">Telefoon:</span> {formData.phone}</p>
                  <p><span className="text-muted-foreground">Pakket:</span> {formData.pakket}</p>
                  <p><span className="text-muted-foreground">Voorkeur:</span> {formData.voorkeur}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="h-5 w-5" />
                    Bel Ons
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-muted">
        <div className="container mx-auto px-4">
          <div ref={headerRef} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan je Gratis Proefles</h1>
            <p className="text-xl text-muted-foreground">
              Maak vrijblijvend kennis met onze instructeurs. Geen verplichtingen.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Flow */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Step Indicator */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      currentStep >= step.number ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      {currentStep > step.number ? <CheckCircle2 className="h-5 w-5" /> : step.number}
                    </div>
                    <span className={`text-xs mt-2 hidden sm:block ${
                      currentStep >= step.number ? 'text-foreground font-medium' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-2 ${
                      currentStep > step.number ? 'bg-primary' : 'bg-muted'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {currentStep === 1 && "Vertel ons over jezelf"}
                  {currentStep === 2 && "Welk pakket past bij jou?"}
                  {currentStep === 3 && "Wanneer wil je starten?"}
                  {currentStep === 4 && "Controleer je gegevens"}
                </CardTitle>
                <CardDescription>
                  {currentStep === 1 && "We hebben je naam, email en telefoonnummer nodig"}
                  {currentStep === 2 && "Kies het pakket dat het beste bij je past"}
                  {currentStep === 3 && "Geef je voorkeur aan voor datum en tijd"}
                  {currentStep === 4 && "Bijna klaar! Controleer of alles klopt"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Wat is je naam? *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="Bijv. Jan Jansen"
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Wat is je e-mailadres? *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="bijv. jan@email.nl"
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Wat is je telefoonnummer? *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        placeholder="06 12345678"
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                )}

                {/* Step 2: Package Selection */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-3">Welk pakket wil je? *</label>
                      <div className="grid gap-3">
                        {['Basis Pakket', 'Standaard Pakket', 'Intensief Pakket', 'Nog niet zeker'].map((pakket) => (
                          <button
                            key={pakket}
                            type="button"
                            onClick={() => updateField('pakket', pakket)}
                            className={`p-4 rounded-md border-2 text-left transition-all ${
                              formData.pakket === pakket
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="font-medium">{pakket}</div>
                          </button>
                        ))}
                      </div>
                      {errors.pakket && <p className="text-sm text-red-500 mt-1">{errors.pakket}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-3">Auto of motor? *</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Schakelbak', 'Automaat', 'Motor'].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => updateField('voorkeur', type)}
                            className={`p-3 rounded-md border-2 text-sm font-medium transition-all ${
                              formData.voorkeur === type
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Scheduling */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Wanneer wil je je proefles? *
                      </label>
                      <Input
                        type="date"
                        value={formData.datum}
                        onChange={(e) => updateField('datum', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className={errors.datum ? 'border-red-500' : ''}
                      />
                      {errors.datum && <p className="text-sm text-red-500 mt-1">{errors.datum}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-3">
                        <Clock className="inline h-4 w-4 mr-2" />
                        Welke tijd past je het beste? *
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Ochtend (9-12u)', 'Middag (12-17u)', 'Avond (17-21u)', 'Weekend'].map((tijd) => (
                          <button
                            key={tijd}
                            type="button"
                            onClick={() => updateField('tijd', tijd)}
                            className={`p-3 rounded-md border-2 text-sm transition-all ${
                              formData.tijd === tijd
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            {tijd}
                          </button>
                        ))}
                      </div>
                      {errors.tijd && <p className="text-sm text-red-500 mt-1">{errors.tijd}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <MapPin className="inline h-4 w-4 mr-2" />
                        Waar woon je? *
                      </label>
                      <Input
                        type="text"
                        value={formData.locatie}
                        onChange={(e) => updateField('locatie', e.target.value)}
                        placeholder="Stad of postcode"
                        className={errors.locatie ? 'border-red-500' : ''}
                      />
                      {errors.locatie && <p className="text-sm text-red-500 mt-1">{errors.locatie}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Extra opmerkingen (optioneel)</label>
                      <Textarea
                        value={formData.bericht}
                        onChange={(e) => updateField('bericht', e.target.value)}
                        placeholder="Heb je specifieke wensen of vragen?"
                        rows={3}
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg p-4 space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Naam</p>
                        <p className="font-medium">{formData.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Telefoon</p>
                        <p className="font-medium">{formData.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Pakket</p>
                        <p className="font-medium">{formData.pakket}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Voorkeur</p>
                        <p className="font-medium">{formData.voorkeur}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Datum voorkeur</p>
                        <p className="font-medium">{formData.datum}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Tijd voorkeur</p>
                        <p className="font-medium">{formData.tijd}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Locatie</p>
                        <p className="font-medium">{formData.locatie}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      Door te bevestigen ga je akkoord met onze voorwaarden
                    </p>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-3 pt-4">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      className="flex-1"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Vorige
                    </Button>
                  )}
                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={handleNext}
                      className="flex-1"
                    >
                      Volgende
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      className="flex-1"
                    >
                      Bevestigen
                      <CheckCircle2 className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Liever direct contact?</h2>
              <p className="text-muted-foreground">Bel of app ons voor directe hulp</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Button variant="outline" size="lg" className="w-full h-20" asChild>
                <a href={`tel:${siteConfig.phone}`} className="flex-col">
                  <Phone className="h-6 w-6 mb-2" />
                  <span className="text-sm">Bel {siteConfig.phone}</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full h-20" asChild>
                <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex-col">
                  <MessageCircle className="h-6 w-6 mb-2" />
                  <span className="text-sm">WhatsApp Ons</span>
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
