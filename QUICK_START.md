# 🚀 Quick Start Guide

## Installatie (5 minuten)

```bash
# 1. Navigeer naar de project folder
cd rijschool-website

# 2. Installeer alle dependencies
npm install

# 3. Start de development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - je website draait nu! 🎉

## 📝 Content Aanpassen (Belangrijkste Stap!)

**Alle content staat in één bestand: `/content/site.ts`**

### Wat MOET je aanpassen:

```typescript
// Open: content/site.ts

export const siteConfig = {
  // 1. BEDRIJFSGEGEVENS
  name: "Rijschool Rood & Zwart",        // ← Jouw rijschool naam
  phone: "+31 6 12345678",               // ← Jouw telefoonnummer
  whatsapp: "+31612345678",              // ← WhatsApp nummer (zonder spaties/+)
  email: "info@rijschool-voorbeeld.nl",  // ← Jouw email
  address: "Voorbeeldstraat 123, 1234 AB Amsterdam", // ← Jouw adres
  
  // 2. PRIJZEN
  autoPakketten: [
    {
      name: "Trend Line",
      price: 1450,  // ← Pas prijzen aan
      features: [/* ... */]
    },
    // ... meer pakketten
  ],
  
  // 3. REVIEWS
  reviews: [
    {
      name: "Emma van der Berg",
      text: "In één keer geslaagd...",  // ← Echte reviews
      // ...
    }
  ],
  
  // etc...
}
```

## 🖼️ Afbeeldingen Toevoegen

### Stap 1: Plaats afbeeldingen in `/public/images/`

```
public/
└── images/
    ├── hero.jpg              (Home hero - 1920x1080)
    ├── instructeur-1.jpg     (400x400)
    ├── instructeur-2.jpg     (400x400)
    ├── instructeur-3.jpg     (400x400)
    └── team.jpg              (Over ons - 1200x600)
```

### Stap 2: Zoek naar `// TODO: replace image` in de code

Bijvoorbeeld in `app/page.tsx`:

```tsx
// VOOR (placeholder):
<div className="absolute inset-0 flex items-center justify-center">
  <Car className="h-24 w-24" />
</div>

// NA (echte afbeelding):
<Image
  src="/images/hero.jpg"
  alt="Gelukkige leerling met rijbewijs"
  fill
  className="object-cover"
/>
```

## 🎨 Kleuren Aanpassen (Optioneel)

Wil je andere kleuren dan rood/zwart?

Open `app/globals.css` en pas aan:

```css
:root {
  --primary: 0 84% 45%;      /* Rood - verander naar jouw kleur */
  --secondary: 0 0% 10%;     /* Zwart - verander naar jouw kleur */
}
```

## 📱 Testen

### Desktop
- Open http://localhost:3000
- Test alle pagina's en knoppen

### Mobile
- Open op je telefoon: http://[jouw-ip]:3000
- Check de sticky bottom bar
- Test het hamburger menu

## 🚀 Productie Deployment

### Optie 1: Vercel (Makkelijkst)

1. Push code naar GitHub
2. Ga naar [vercel.com](https://vercel.com)
3. Klik "Import Project"
4. Selecteer je GitHub repo
5. Klik "Deploy" - Klaar! ✅

### Optie 2: Andere hosting

```bash
npm run build
npm run start
```

## ✅ Checklist voor Live Gaan

- [ ] Bedrijfsgegevens aangepast in `/content/site.ts`
- [ ] Alle prijzen gecontroleerd
- [ ] Afbeeldingen toegevoegd (of placeholders verwijderd)
- [ ] Reviews aangepast naar echte reviews
- [ ] Telefoonnummer en WhatsApp getest
- [ ] Email adres gecontroleerd
- [ ] Google Maps toegevoegd op contact pagina (optioneel)
- [ ] Favicon toegevoegd
- [ ] Getest op mobiel EN desktop
- [ ] Privacy policy en algemene voorwaarden toegevoegd (juridisch)

## 🆘 Hulp Nodig?

### Veelvoorkomende Issues

**"npm install" geeft errors**
```bash
# Probeer:
rm -rf node_modules package-lock.json
npm install
```

**Afbeeldingen worden niet getoond**
- Check of het pad klopt: `/images/naam.jpg` (niet `images/naam.jpg`)
- Check of de afbeelding in `/public/images/` staat

**Formulier werkt niet**
- Formulier toont success message, maar verstuurt niet echt
- TODO: Implementeer email service (bijv. SendGrid, Resend)

## 📞 Contact Informatie Testen

Test deze links VOOR je live gaat:

- ✅ Bel knop: `tel:+31612345678`
- ✅ WhatsApp: `https://wa.me/31612345678`
- ✅ Email: `mailto:info@jouwdomein.nl`

## 🎯 Volgende Stappen

1. **Week 1**: Content + afbeeldingen toevoegen
2. **Week 2**: Testen op alle devices
3. **Week 3**: Formulier backend implementeren
4. **Week 4**: Live gaan! 🚀

---

**Succes met je nieuwe website! 🎉**
