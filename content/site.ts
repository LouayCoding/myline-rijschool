export const siteConfig = {
  name: "Rijschool MY-Line",
  description: "Professionele rijlessen voor auto en motor in Nederland. Hoge slagingspercentages en persoonlijke begeleiding.",
  url: "https://myline-rijschool.nl",
  phone: "+31 6 12345678",
  whatsapp: "+31612345678",
  email: "info@myline-rijschool.nl",
  address: "Voorbeeldstraat 123, 1234 AB Amsterdam",
  
  social: {
    facebook: "https://facebook.com/rijschool",
    instagram: "https://instagram.com/rijschool",
  },

  hero: {
    headline: "Zelfverzekerd je rijbewijs halen",
    subline: "Leren rijden in een ontspannen, veilige en vertrouwde omgeving",
    trustBullets: [
      "Vriendelijke en rustige begeleiding",
      "Persoonlijke aandacht en betrokkenheid",
      "Flexibel in planning"
    ],
  },

  trustStrip: {
    reviewScore: "4.9",
    totalStudents: "300+",
    passRate: "8+"
  },

  autoPakketten: [
    {
      id: "trend",
      name: "Trend Line",
      price: 1450,
      popular: false,
      features: [
        "20 rijlessen van 60 minuten",
        "Praktijkexamen",
        "Gratis gebruik lesmateriaal"
      ]
    },
    {
      id: "high",
      name: "High Line",
      price: 2050,
      popular: true,
      badge: "Meest gekozen",
      features: [
        "30 rijlessen van 60 minuten",
        "Praktijkexamen",
        "Gratis gebruik lesmateriaal"
      ]
    },
    {
      id: "luxury",
      name: "Luxury Line",
      price: 2650,
      popular: false,
      features: [
        "40 rijlessen van 60 minuten",
        "Praktijkexamen",
        "Gratis gebruik lesmateriaal"
      ]
    }
  ],

  motorPakketten: [
    {
      id: "motor1",
      name: "Motorline 1",
      price: 1280,
      lessons: 16,
      duration: 60,
      features: [
        "16 lessen van 60 minuten",
        "AVB examen inbegrepen",
        "AVD examen inbegrepen",
        "Gebruik motorkleding"
      ]
    },
    {
      id: "motor2",
      name: "Motorline 2",
      price: 1480,
      lessons: 20,
      duration: 60,
      popular: true,
      badge: "Aanrader",
      features: [
        "20 lessen van 60 minuten",
        "AVB examen inbegrepen",
        "AVD examen inbegrepen",
        "Gebruik motorkleding",
        "Extra oefentijd"
      ]
    },
    {
      id: "motor3",
      name: "Motorline 3",
      price: 1999,
      lessons: 30,
      duration: 60,
      features: [
        "30 lessen van 60 minuten",
        "AVB examen inbegrepen",
        "AVD examen inbegrepen",
        "Gebruik motorkleding",
        "Extra oefentijd",
        "Persoonlijke begeleiding"
      ]
    }
  ],

  losseTarieven: [
    { name: "Losse les auto en motor", price: 60 },
    { name: "Tussentijdse toets", price: 225 },
    { name: "Rij examen", price: 325 },
    { name: "Examen AVB", price: 225 },
    { name: "Examen AVD", price: 325 }
  ],

  rijschoolFeatures: [
    {
      title: "Vriendelijke Begeleiding",
      description: "Je voelt je snel op je gemak. Wij geloven dat je het beste leert in een ontspannen en positieve sfeer.",
      icon: "Users"
    },
    {
      title: "Hoge Kwaliteit",
      description: "Professionele rijlessen met focus op veiligheid, verkeersinzicht en zelfvertrouwen.",
      icon: "Award"
    },
    {
      title: "Flexibel Plannen",
      description: "Rijlessen in overleg plannen. Ideaal te combineren met school, studie of werk.",
      icon: "Calendar"
    },
    {
      title: "Den Haag & Zoetermeer",
      description: "Je leert rijden in realistische en examengerichte verkeerssituaties.",
      icon: "MapPin"
    }
  ],

  hoeWerktHet: [
    {
      step: 1,
      title: "Kennismaking",
      description: "Start met een proefles en ontmoet je instructeur."
    },
    {
      step: 2,
      title: "Lessen",
      description: "Leer rijden in je eigen tempo met een persoonlijk lesplan."
    },
    {
      step: 3,
      title: "Examen",
      description: "Goed voorbereid naar je praktijkexamen."
    }
  ],

  instructeurs: [
    {
      name: "Louay",
      specialty: "Auto & Motor",
      experience: "WRM-gecertificeerd instructeur",
      image: "/images/rijschool-myline-instructeur.jpg"
    }
  ],

  faqHome: [
    {
      question: "Hoe lang duurt het gemiddeld om je rijbewijs te halen?",
      answer: "Gemiddeld hebben onze leerlingen 30-40 lessen nodig. Dit hangt af van je leervermogen, beschikbaarheid en eerdere ervaring. Tijdens de proefles maken we een inschatting voor jouw situatie."
    },
    {
      question: "Wat is inbegrepen in de pakketten?",
      answer: "Alle pakketten bevatten rijlessen, theoriecursus online, tussentijdse toets, praktijkexamen en gratis gebruik van lesmateriaal. Hogere pakketten bieden extra lessen en begeleiding."
    },
    {
      question: "Kan ik ook losse lessen boeken?",
      answer: "Ja, dat kan! Losse lessen kosten €60 per uur. Dit is ideaal als je al een pakket hebt afgerond en wat extra oefening wilt, of als je elders bent begonnen."
    },
    {
      question: "Hoe werkt de proefles?",
      answer: "De proefles is gratis en vrijblijvend. Je maakt kennis met je instructeur, de lesauto en onze werkwijze. We bespreken je wensen en maken een inschatting van het aantal benodigde lessen."
    },
    {
      question: "Kan ik zelf mijn lestijden bepalen?",
      answer: "Ja, we werken met flexibele lestijden. In overleg met je instructeur plan je lessen op momenten die jou uitkomen, ook 's avonds en in het weekend."
    },
    {
      question: "Wat als ik zak voor mijn examen?",
      answer: "Dat is vervelend, maar het gebeurt. We bespreken wat er beter kan en plannen extra lessen in om je goed voor te bereiden op een herkansing. Het herexamen betaal je apart."
    },
    {
      question: "Kan ik switchen tussen instructeurs?",
      answer: "In principe blijf je bij dezelfde instructeur voor continuïteit. Mocht het niet klikken, dan kunnen we in overleg kijken naar een andere instructeur."
    },
    {
      question: "Hoe zit het met de motorlessen?",
      answer: "Voor motorlessen bieden we drie pakketten aan met 16, 20 of 30 lessen. Alle examens (AVB en AVD) zijn inbegrepen, evenals het gebruik van motorkleding en theoriemateriaal."
    },
    {
      question: "Moet ik het volledige bedrag vooraf betalen?",
      answer: "Nee, we bieden flexibele betaalopties. Je kunt in termijnen betalen. Neem contact op voor de mogelijkheden."
    }
  ],

  faqPrijzen: [
    {
      question: "Wat is het verschil tussen de auto pakketten?",
      answer: "Het verschil zit in het aantal lessen. Trend Line heeft 20 lessen, High Line heeft 30 lessen, en Luxury Line heeft 40 lessen. Alle pakketten bevatten het praktijkexamen en gratis lesmateriaal."
    },
    {
      question: "Zijn de examens inbegrepen in de prijs?",
      answer: "Ja, in alle pakketten zijn de tussentijdse toets en het eerste praktijkexamen inbegrepen. Herexamens betaal je apart."
    },
    {
      question: "Kan ik een pakket uitbreiden met losse lessen?",
      answer: "Absoluut! Als je merkt dat je meer lessen nodig hebt, kun je altijd losse lessen bijboeken voor €60 per les."
    },
    {
      question: "Zijn er kortingen voor studenten?",
      answer: "Neem contact met ons op voor actuele acties en studentenkortingen. We hebben regelmatig aanbiedingen."
    },
    {
      question: "Wat is inbegrepen in de motorpakketten?",
      answer: "Alle motorpakketten bevatten rijlessen, AVB en AVD examen, gebruik van motorkleding en theorieboek. Hogere pakketten bieden meer lessen en extra oefentijd."
    }
  ],

  reviews: [
    {
      name: "Emma van der Berg",
      rating: 5,
      date: "December 2023",
      text: "In één keer geslaagd dankzij de uitstekende begeleiding van Jan! Hij is geduldig, duidelijk en weet precies hoe hij je moet voorbereiden op het examen. Aanrader!",
      package: "High Line"
    },
    {
      name: "Thijs Vermeulen",
      rating: 5,
      date: "November 2023",
      text: "Super rijschool! Flexibele lestijden en een relaxte instructeur. Na 35 lessen geslaagd en het was elke les weer leuk.",
      package: "Luxury Line"
    },
    {
      name: "Lisa Hendriks",
      rating: 5,
      date: "Oktober 2023",
      text: "Super rijschool! De instructeur heeft me enorm geholpen met geduld en duidelijke uitleg. Het High Line pakket was perfect voor mij. Geslaagd!",
      package: "High Line"
    },
    {
      name: "Kevin de Jong",
      rating: 5,
      date: "September 2023",
      text: "Motorlessen bij Mike waren top! Professioneel, veilig en veel geleerd. AVB en AVD beide in één keer gehaald.",
      package: "Motorline 2"
    },
    {
      name: "Sophie Bakker",
      rating: 5,
      date: "Augustus 2023",
      text: "Fijne rijschool met moderne auto's. De online theoriecursus was super handig en de instructeur was altijd bereikbaar voor vragen.",
      package: "Trend Line"
    },
    {
      name: "Daan Visser",
      rating: 5,
      date: "Juli 2023",
      text: "Goede prijs-kwaliteit verhouding. Duidelijke uitleg en goede voorbereiding op het examen. Geslaagd na 32 lessen!",
      package: "High Line"
    }
  ],

  aboutUs: {
    mission: "Bij Rijschool MY-Line draait alles om jou. Leren auto of motor rijden is een belangrijke stap, en wij vinden het belangrijk dat jij dit doet in een ontspannen, veilige en vertrouwde omgeving. Vriendelijkheid, kwaliteit, betrokkenheid en flexibiliteit staan bij ons centraal.",
    values: [
      {
        title: "Persoonlijke Aandacht",
        description: "Geen standaard aanpak, maar rijlessen afgestemd op jouw niveau, tempo en leerstijl. Wij denken met je mee van begin tot eind."
      },
      {
        title: "Kwaliteit & Veiligheid",
        description: "Professionele rijlessen met focus op veiligheid, verkeersinzicht en zelfvertrouwen, zodat je goed voorbereid bent op je praktijkexamen."
      },
      {
        title: "Betrouwbaar & Eerlijk",
        description: "Wij zeggen waar het op staat en werken doelgericht naar jouw rijbewijs toe, zonder onnodige lessen."
      }
    ],
    stats: [
      { label: "Geslaagde leerlingen", value: "300+" },
      { label: "Jaar ervaring", value: "8+" },
      { label: "Tevreden klanten", value: "4.9/5" },
      { label: "Instructeur", value: "1" }
    ]
  }
};

export type SiteConfig = typeof siteConfig;
