# Rijschool Website - Production Ready

Een moderne, conversion-geoptimaliseerde website voor een Nederlandse rijschool met rood/zwart branding. Gebouwd met Next.js 14, TypeScript, TailwindCSS en shadcn/ui.

## ✨ Features

- **Mobile-First Design** - Volledig responsive met sticky mobile bottom bar
- **High Conversion** - Duidelijke UX hiërarchie met primaire CTAs op elke pagina
- **SEO Optimized** - Metadata, OpenGraph, en lokale keywords
- **Accessible** - WCAG-compliant met focus states, ARIA labels, en reduced-motion support
- **Performance** - Next.js Image optimization, lazy loading
- **Subtle Animations** - GSAP + ScrollTrigger met reduced-motion respect
- **Data-Driven** - Alle content in `/content/site.ts` voor eenvoudige aanpassingen

## 📁 Project Structuur

```
rijschool-website/
├── app/                      # Next.js 14 App Router
│   ├── layout.tsx           # Root layout met Header, Footer, MobileBottomBar
│   ├── page.tsx             # Home pagina
│   ├── prijzen/page.tsx     # Prijzen & pakketten
│   ├── proefles/page.tsx    # Proefles aanmeldformulier
│   ├── over-ons/page.tsx    # Over ons
│   ├── reviews/page.tsx     # Reviews
│   └── contact/page.tsx     # Contact
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── accordion.tsx
│   │   └── tabs.tsx
│   ├── layout/              # Layout components
│   │   ├── header.tsx       # Sticky header met navigatie
│   │   ├── footer.tsx       # Footer met links en contact
│   │   └── mobile-bottom-bar.tsx  # Sticky mobile CTA bar
│   └── pricing-card.tsx     # Herbruikbare pricing card
├── content/
│   └── site.ts              # Alle website content (HIER AANPASSEN!)
├── lib/
│   ├── utils.ts             # Utility functies (cn, formatPrice, etc.)
│   └── gsap.ts              # GSAP hooks met reduced-motion support
└── public/
    └── images/              # Plaats hier je afbeeldingen
```

## 🚀 Stap 1: Installeer Dependencies

```bash
cd rijschool-website
npm install
```

## 🎨 Stap 2: Installeer shadcn/ui (optioneel)

De componenten zijn al aanwezig, maar als je extra shadcn componenten wilt toevoegen:

```bash
npx shadcn-ui@latest init
```

## 🏃 Stap 3: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

## 📝 Stap 4: Content Aanpassen

**Alle website content staat in één bestand: `/content/site.ts`**

### Wat kun je aanpassen:

1. **Bedrijfsgegevens**
   - Naam, telefoon, WhatsApp, email, adres
   - Social media links

2. **Hero Sectie**
   - Headline, subline, trust bullets

3. **Pakketten & Prijzen**
   - Auto pakketten (Trend/High/Luxury Line)
   - Motor pakketten (Motorline 1/2/3)
   - Losse tarieven

4. **Content Secties**
   - Hoe werkt het (3 stappen)
   - Schakel vs Automaat
   - Instructeurs
   - FAQ's (home + prijzen)
   - Reviews
   - Over ons (missie, waarden, stats)

### Voorbeeld aanpassing:

```typescript
// In /content/site.ts
export const siteConfig = {
  name: "Jouw Rijschool Naam",  // ← Wijzig dit
  phone: "+31 6 12345678",       // ← Wijzig dit
  // ... etc
}
```

## 🖼️ Afbeeldingen Toevoegen

Alle afbeeldingen hebben placeholders met `// TODO: replace image` comments.

1. Plaats afbeeldingen in `/public/images/`
2. Zoek naar `// TODO: replace image` in de code
3. Vervang de placeholder div met:

```tsx
<Image
  src="/images/jouw-afbeelding.jpg"
  alt="Beschrijving van afbeelding"
  fill
  className="object-cover"
/>
```

### Benodigde afbeeldingen:

- **Home**: Hero afbeelding (gelukkige leerling met rijbewijs)
- **Home**: 3 instructeur foto's
- **Over Ons**: Team foto
- **Contact**: Google Maps embed (optioneel)

## 🎯 Conversie Optimalisatie

### Primaire CTAs (in volgorde van prioriteit):

1. **"Plan proefles"** - Primaire actie (rood)
2. **"WhatsApp"** - Secundaire actie (outline)
3. **"Bel ons"** - Tertiaire actie (outline)

### Mobile Bottom Bar

Sticky bar op mobiel met 2 knoppen:
- **Plan proefles** (primair, rood)
- **WhatsApp** (secundair, outline)

### Sticky Header

Desktop: Navigatie + "Bel ons" + "Proefles plannen"
Mobile: Hamburger menu + CTAs in mobile bottom bar

## 🎨 Design System

### Kleuren (Red/Black Branding)

```css
--primary: 0 84% 45%        /* Rood */
--secondary: 0 0% 10%       /* Near-black */
--background: 0 0% 100%     /* Wit */
--muted: 0 0% 96%           /* Licht grijs */
```

### Typografie

- Font: Inter (Google Fonts)
- Headings: Bold, grote sizes
- Body: Regular, 16px base

### Spacing & Borders

- Border radius: 1rem (16px) - rounded-2xl
- Cards: Zachte schaduw, strakke borders
- Geen drukke gradients, veel witruimte

## ♿ Toegankelijkheid

- ✅ Semantic HTML
- ✅ ARIA labels waar nodig
- ✅ Focus states op alle interactieve elementen
- ✅ Keyboard navigatie
- ✅ Contrast ratios WCAG AA compliant
- ✅ Reduced motion support (prefers-reduced-motion)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎬 Animaties

GSAP animaties zijn subtiel en respecteren `prefers-reduced-motion`:

```tsx
// Gebruik in components
const ref = useGSAPReveal({});  // Fade in on scroll
const ref = useGSAPStagger(0.1); // Stagger children
```

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build voor productie
npm run start    # Start productie server
npm run lint     # Run ESLint
```

## 📦 Dependencies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **shadcn/ui** - UI components
- **GSAP** - Animaties
- **Lucide React** - Icons

## 🚀 Deployment

### Vercel (Aanbevolen)

```bash
npm run build
# Deploy naar Vercel via GitHub of CLI
```

### Andere platforms

```bash
npm run build
npm run start
```

## 📞 Support

Voor vragen over de code of aanpassingen, check de inline comments in de bestanden.

## 🎯 TODO voor Productie

- [ ] Vervang alle afbeelding placeholders
- [ ] Update bedrijfsgegevens in `/content/site.ts`
- [ ] Voeg Google Analytics toe (optioneel)
- [ ] Implementeer formulier backend (email service)
- [ ] Voeg Google Maps embed toe op contact pagina
- [ ] Test op echte mobiele devices
- [ ] SEO audit en meta descriptions verfijnen
- [ ] Voeg favicon toe

## 📄 Licentie

Proprietary - Alle rechten voorbehouden

---

**Gebouwd met ❤️ voor Nederlandse rijscholen**
