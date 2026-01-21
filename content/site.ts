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
      name: "Jamie-Elaine",
      rating: 5,
      date: "6 maanden geleden",
      text: "Ik heb een hele fijne ervaring gehad met Mo. Hij legt alles haar fijn uit en weet goed te kunnen schakelen tussen plezier hebben tijdens het rijden en de focus te leggen op waar nodig is!",
      package: "Auto"
    },
    {
      name: "Eva Weidum",
      rating: 5,
      date: "Een maand geleden",
      text: "Hele fijne ervaring gehad. Naast de gezellige lessen was het ook heel leerzaam. Meer zelfvertrouwen op de snelweg gekregen na een paar goede peptalks. Dus als je op zoek bent naar een rijinstructeur met een goed plan, fijne en duidelijke uitleg zal ik hier zeker gaan lessen☺️",
      package: "Auto"
    },
    {
      name: "Netty Rojer Willems",
      rating: 5,
      date: "2 maanden geleden",
      text: "Ik heb een hele fijne rijles periode gehad met mijn rij instructeur Mo. Hij is een hele rustig aardig en vriendelijke instructeur en help je op de weg naar je doel (rijbewijs behalen) hij neem tijd om je te leren kennen en help je op de weg.",
      package: "Auto"
    },
    {
      name: "rrprv",
      rating: 5,
      date: "4 maanden geleden",
      text: "Geslaagd bij rijschool MY-Line! Echt een super fijne rijschool, met de allerbeste rijinstructeur! Hij is erg duidelijk, heel geduldig en gezellig tijdens de lessen.",
      package: "Auto"
    },
    {
      name: "Elif Nur",
      rating: 5,
      date: "4 maanden geleden",
      text: "Ik ben heel blij dat ik voor deze rijschool heb gekozen. De instructeur is rustig, geduldig en geeft duidelijke uitleg. Hij ziet meteen waar je op moet letten en geeft praktische tips, waardoor je stap voor stap beter wordt.",
      package: "Auto"
    },
    {
      name: "Dennis Annang",
      rating: 5,
      date: "3 maanden geleden",
      text: "I got my driving license thanks to Rijschool My-Line. Instructor was calm, clear, and incredibly supportive throughout the entire process. Highly recommended!",
      package: "Auto"
    },
    {
      name: "Blxckrich",
      rating: 5,
      date: "Een maand geleden",
      text: "Een zeer professionele rijschool die je stapsgewijs helpt je rijbewijs te behalen. Ik ben zonder ervaring begonnen en heb alles in 1x gehaald.",
      package: "Auto"
    },
    {
      name: "A Harrasse",
      rating: 5,
      date: "6 maanden geleden",
      text: "Ik heb mijn autorijbewijs in 1 keer behaald in 2022, en nu laatst weer terug geweest voor mijn motor. Weer in 1 keer behaald! Ik ga de pret van de lessen missen. Als jij opzoek bent naar een goede instructeur dan is dit de juiste rijschool.",
      package: "Auto & Motor"
    },
    {
      name: "Richayna Martha",
      rating: 5,
      date: "2 maanden geleden",
      text: "Mo is heel geduldig en weet alles goed en duidelijk uit te leggen. Zeer tevreden en zeker een aanrader! Top rijschool.",
      package: "Auto"
    },
    {
      name: "Jane",
      rating: 5,
      date: "7 maanden geleden",
      text: "Fijne rij instructeur is erg proactief en regelt snel een examen voor je ook als dat niet het geval is blijft hij het altijd in de gaten houden. Daarnaast is hij heel geduldig en neemt de tijd om alles goed uit te leggen. Ook als je er even doorheen zit weet hij je te motiveren en weer vertrouwen te geven.",
      package: "Auto"
    },
    {
      name: "JR_Nygelocean",
      rating: 5,
      date: "3 maanden geleden",
      text: "Prima rijschool Mohammed is een duidelijke en rustige rij instructeur, en heb een zeer goeie ervaring gehad en tot slot hier mijn rijbewijs gehaald!!",
      package: "Auto"
    },
    {
      name: "Leandro JoAms",
      rating: 5,
      date: "3 maanden geleden",
      text: "Beste rij instructeur. Super geduldig en motiverend, en hij maakte leren autorijden echt stressvrij.",
      package: "Auto"
    },
    {
      name: "Jabir 070",
      rating: 5,
      date: "7 maanden geleden",
      text: "Beste rijschool! De instructeur legt alles rustig en duidelijk uit. Ik voelde me op mijn gemak en heb veel geleerd. In 1x geslaagd! Zeker een aanrader!",
      package: "Auto"
    },
    {
      name: "Mohamed Abdalla",
      rating: 5,
      date: "10 maanden geleden",
      text: "Ik ben gisteren geslaagd en dat heb ik volledig te danken aan deze rijschool! Mijn instructeur was ontzettend goed: hij gaf duidelijke uitleg, bleef geduldig en zorgde ervoor dat ik me op mijn gemak voelde tijdens de lessen.",
      package: "Auto"
    },
    {
      name: "Pari Habib",
      rating: 5,
      date: "3 maanden geleden",
      text: "Top rijinstructeur! Geeft je een goed welkoms gevoel en laat je je rijbewijs binnen 1X halen ☺️",
      package: "Auto"
    },
    {
      name: "Lina Ali",
      rating: 5,
      date: "9 maanden geleden",
      text: "De beste, directe instructeur. Top lessen, altijd na de les een bespreking van hoe het gaat en zelfreflextie. De tijd met hem word goed benut en je krijgt ruimte om ook aan te geven wat je wil leren. Flexibel en snel geregel, zeker een aanrader!",
      package: "Auto"
    },
    {
      name: "Farina Camila",
      rating: 5,
      date: "7 maanden geleden",
      text: "Top rijschool! Alles was altijd goed geregeld qua planning. Mijn rijinstructeur Mo was chill en heel geduldig. Hij nam de tijd om alles goed uit te leggen, ook de kleine dingetjes waar je op moet letten en na elke les even kort doornemen.",
      package: "Auto"
    },
    {
      name: "Chaima Rabhi",
      rating: 5,
      date: "11 maanden geleden",
      text: "Ik heb mijn rijbewijs in één keer gehaald dankzij rijschool My Line! Rijschool heeft een geduldige rijinstructeur die duidelijke uitleg geeft en het geen probleem vindt om dingen te herhalen als je het niet begrijpt.",
      package: "Auto"
    },
    {
      name: "Alyssa xvd",
      rating: 5,
      date: "6 maanden geleden",
      text: "Ik heb met ontzettend veel plezier les gehad. Er is geduld en er wordt duidelijk uitleg gegeven. Weet precies hoe je op je gemak wordt gesteld achter het stuur. Elke les voelde gestructureerd en leerzaam, maar ook gezellig. Dankzij de begeleiding ben ik geslaagd!",
      package: "Auto"
    },
    {
      name: "Press 11",
      rating: 5,
      date: "11 maanden geleden",
      text: "Hele fijne rijervaring bij MYLine, betaalbare prijzen en een hele duidelijke maar toch wel gezellige instructeur die netjes alle afspraken na komt. Het fijnste vond ik de 2 uur lessen, naar mijn mening heb ik hier het meeste van geleerd. Bedankt voor de lessen en het helpen behalen van mijn rijbewijs!",
      package: "Auto"
    },
    {
      name: "Amiratu Nafsi",
      rating: 5,
      date: "Een jaar geleden",
      text: "Eén van de beste rijscholen die er is! Ik ben ontzettend blij met mijn ervaring hier. Er is geen wachtrij, en mijn rijinstructeur is echt een hele lieve en gezellige persoon. Hij helpt je tot de finish!",
      package: "Auto"
    },
    {
      name: "Donovan Crawford",
      rating: 5,
      date: "7 maanden geleden",
      text: "Zeer goeie rijschool. Voor auto en motor in 1x geslaagd!!! Zeker aan te raden voor de mensen die hun rijbewijs willen halen.",
      package: "Auto & Motor"
    },
    {
      name: "Vito Angelo Ferreira",
      rating: 5,
      date: "Een maand geleden",
      text: "Hele fijne begeleiding van begin tot einde en altijd een hele leuke tijd gehad en met een glimlach achter het stuur gezeten🤙🏽",
      package: "Auto"
    },
    {
      name: "Yasmine Bensaber",
      rating: 5,
      date: "Een jaar geleden",
      text: "Uitstekende rijschool! De instructeur is zeer professioneel en geduldig. Ik voelde me altijd op mijn gemak tijdens de lessen. Ik heb erg goede begeleiding gekregen waardoor ik in 1x ben geslaagd. Ik zou deze rijschool zeker aanbevelen aan iedereen die op zoek is naar kwalitatieve rijlessen.",
      package: "Auto"
    },
    {
      name: "Bach Pham",
      rating: 5,
      date: "Een jaar geleden",
      text: "Onlangs heb ik met veel plezier mijn rijexamen in één keer afgerond bij Rijschool My Line, en ik moet zeggen dat het een uitstekende ervaring was van begin tot eind. Onder begeleiding van mijn instructeur - Mo, heb ik niet alleen de nodige vaardigheden geleerd.",
      package: "Auto"
    },
    {
      name: "Cagla Demir",
      rating: 5,
      date: "11 maanden geleden",
      text: "Geslaagd voor mijn rijbewijs in 1x!! Dit had ik niet zonder jouw geduld, steun en vertrouwen gekund. Je hebt me altijd gemotiveerd, zelfs op moeilijke momenten. Bedankt voor de leerzame en fijne lessen! Top instructeur!🚗🤩",
      package: "Auto"
    },
    {
      name: "NorthGab",
      rating: 5,
      date: "Een jaar geleden",
      text: "Echt een aanrader van een rijschool! Ik heb mijn motorrijbewijs gehaald binnen minder dan 3 maanden, ergens in november ben ik begonnen en begin februari had ik hem en allebei de examens binnen 1x gehaald, alles dankzij de goeie tips!",
      package: "Motor"
    },
    {
      name: "Shaqycia",
      rating: 5,
      date: "Een jaar geleden",
      text: "Ik had een geweldige ervaring met Mohamed van rijschool MY-Line, een zelfstandige rijschool die ik ten zeerste kan aanbevelen! Vanaf het eerste contact was het duidelijk dat hij een persoonlijke benadering heeft. Mohamed is ontzettend professioneel!",
      package: "Auto"
    },
    {
      name: "Ramazan",
      rating: 5,
      date: "2 jaar geleden",
      text: "In 1 keer geslaagd zonder fouten. Veel geleerd in korte tijd. Als je snel je Motor rijbewijs wilt halen moet je hier zijn.",
      package: "Motor"
    },
    {
      name: "Meryem N",
      rating: 5,
      date: "10 maanden geleden",
      text: "Fijne rijlessen en vooral voldoende aandacht aan punten waarbij je zelf als student moeite mee hebt. Je wordt volledig voorbereidt dat je eigelijk alleen nog maar gezonde zenuwen hebt.",
      package: "Auto"
    },
    {
      name: "Kasper",
      rating: 5,
      date: "Een jaar geleden",
      text: "Maandje geleden geslaagd en dit is 100% de beste rijlesinstructeur die er is. Je kan leuk grappen maken tijdens de lessen en toch een goede leer ervaring hebben. Binnen 1 keer geslaagd zonder moeite serieus echt een aanrader vriendelijke man die Mo.",
      package: "Auto"
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
