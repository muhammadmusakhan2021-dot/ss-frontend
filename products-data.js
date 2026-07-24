/* ============ PRODUCT CATALOG ============ */
/* Single source of truth for both index.html (showcase grid) and product.html.
   To add a new ball: add one entry here — both pages pick it up automatically. */
const PRODUCTS = {
  trionda: {
    id: 'trionda', name: 'Adidas Trionda', price: 7500,
    c1: '#3fae4e', c2: '#1c3f8f', // dominant green / blue from the ball itself
    eyebrow: 'Official Match Ball',
    shortDesc: 'The official Trionda match ball — vivid panel graphics built for tournament-pace play.',
    description: 'The Trionda carries FIFA-certified match-ball construction with a bold, high-visibility panel design that stays sharp under floodlights. Built for true flight and consistent touch at competition speed.',
    features: ['FIFA Quality Pro certified', 'Official match ball graphics', 'Textured casing for consistent grip', 'True flight at high velocity'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Premium PU synthetic leather'],['Bladder','Butyl, hand-wound']],
    stock: 24, rating: 4.8, reviewCount: 132,
    images: ['assets/trionda-1.jpg', 'assets/trionda-2.jpg', 'assets/trionda.jpg'],
    reviews: [
      { name:'Ahmed R.', role:'Club Striker', stars:5, quote:'The flight path is the most consistent I\u2019ve struck. Dead-ball accuracy went up the moment I switched.' },
    ],
  },
  'ucl-2026': {
    id: 'ucl-2026', name: 'UCL 2026', price: 5900,
    c1: '#1e63b8', c2: '#caa04d', // UCL blue / gold
    eyebrow: 'Champions League · Official Ball',
    shortDesc: 'The official UEFA Champions League match ball — signature starball graphics in blue and gold.',
    description: 'Built to the same spec used on Europe\u2019s biggest nights, the UCL 2026 pairs the iconic starball pattern with a gold-foiled finish. Engineered for precise long-range passing and reliable strikes under pressure.',
    features: ['UEFA Champions League official ball', 'Gold-foiled starball graphics', 'Machine-stitched 32-panel construction', 'Consistent flight at high velocity'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Premium PU synthetic leather'],['Bladder','Butyl, hand-wound']],
    stock: 18, rating: 4.9, reviewCount: 71,
    images: ['assets/ucl-2026.jpg'],
    reviews: [
      { name:'Bilal A.', role:'Sports Journalist', stars:5, quote:'Closest a retail ball has felt to an actual matchday ball. Worth every cent.' },
    ],
  },
  'al-hilm-wc2022': {
    id: 'al-hilm-wc2022', name: 'Al Hilm WC 2022', price: 5900,
    c1: '#c9a06a', c2: '#7a2e2e', // cream / maroon
    eyebrow: 'FIFA World Cup Qatar 2022 · Final Ball',
    shortDesc: 'The Al Hilm final ball from Qatar 2022 — the ball that decided the World Cup.',
    description: 'Al Hilm ("The Dream") was the official final match ball of the FIFA World Cup Qatar 2022. Its sweeping red panels and desert-gold base mark it as the ball of the tournament\u2019s biggest match.',
    features: ['FIFA World Cup Qatar 2022 final ball', 'Collector-grade panel graphics', 'Machine-stitched 32-panel construction', 'All-weather grip coating'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Premium PU synthetic leather'],['Bladder','Butyl, hand-wound']],
    stock: 12, rating: 4.9, reviewCount: 204,
    images: ['assets/al-hilm-wc2022.jpg', 'assets/al-hilm-wc2022-2.jpg'],
    reviews: [
      { name:'Ayesha K.', role:'Academy Coach', stars:5, quote:'Feels alive off the foot. A genuine collector\u2019s piece as much as a football.' },
    ],
  },
  'flight-pl-2324': {
    id: 'flight-pl-2324', name: 'Nike Flight (Premier League) 23/24', price: 5900,
    c1: '#8b5cf6', c2: '#ec4899', // purple / pink
    eyebrow: 'Premier League · Official Ball 2023/24',
    shortDesc: 'The Nike Flight — official Premier League ball for the 2023/24 season.',
    description: 'The Nike Flight uses a 4-panel construction with AerowTrac grooves for a stable, predictable flight path — the same ball used across every fixture of the 2023/24 Premier League season.',
    features: ['Premier League official ball 2023/24', '4-panel AerowTrac construction', 'Textured casing for consistent touch', 'Vivid Premier League crest graphics'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Premium synthetic casing'],['Bladder','Latex']],
    stock: 30, rating: 4.7, reviewCount: 89,
    images: ['assets/flight-pl-2324.jpg', 'assets/flight-pl-2324-2.jpg', 'assets/flight-pl-2324-3.jpg'],
    reviews: [
      { name:'Hamza T.', role:'Youth Captain', stars:5, quote:'Bought one for training, ended up buying more for the whole squad.' },
    ],
  },
  'jabulani-2010': {
    id: 'jabulani-2010', name: 'Adidas Jabulani 2010', price: 5900,
    c1: '#f4c430', c2: '#1e3a8a', // gold / blue
    eyebrow: 'FIFA World Cup South Africa 2010 · Official Ball',
    shortDesc: 'The legendary Jabulani — official match ball of the 2010 FIFA World Cup in South Africa.',
    description: 'Jabulani ("to celebrate" in Zulu) introduced an 8-panel thermally bonded construction, a genuine turning point in match ball design. This edition carries the original 11-colour design representing the 11 official languages of South Africa.',
    features: ['FIFA World Cup South Africa 2010 official ball', '8-panel thermally bonded construction', '11-colour design, one per official language', 'Grip\u2019n\u2019Groove surface texture'],
    specs: [['Circumference','69cm'],['Weight','440g'],['Material','Thermally bonded synthetic panels'],['Bladder','Butyl']],
    stock: 7, rating: 4.9, reviewCount: 312,
    images: ['assets/jabulani-2010.jpg'],
    reviews: [
      { name:'Usman F.', role:'Collector', stars:5, quote:'A piece of football history. Condition and detail are outstanding.' },
    ],
  },

  'nike-pl-strike': {
    id: 'nike-pl-strike', name: 'Nike Premier League Strike', price: 5900,
    c1: '#e8703a', c2: '#f2efe8', // orange / white
    eyebrow: 'Premier League · Training Ball',
    shortDesc: 'A bold, paint-splash training ball carrying the Premier League crest.',
    description: 'The Strike is Nike\u2019s durable training companion — built for everyday sessions with a tougher casing than the match-day Flight, and finished in a striking orange splash design with the Premier League crest.',
    features: ['Premier League training ball', 'Durable everyday-training casing', 'High-visibility colourway', 'Consistent touch and rebound'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Durable synthetic casing'],['Bladder','Butyl']],
    stock: 34, rating: 4.6, reviewCount: 47,
    images: ['assets/nike-pl-strike.jpg'],
    reviews: [
      { name:'Danish O.', role:'Grassroots Coach', stars:5, quote:'Takes a beating from daily training and still holds its shape. Great value.' },
    ],
  },
  'adidas-oceaunz': {
    id: 'adidas-oceaunz', name: 'Adidas Oceaunz', price: 5900,
    c1: '#12305c', c2: '#f2efe8', // navy / white
    eyebrow: 'FIFA Women\u2019s World Cup 2023 · Official Ball',
    shortDesc: 'The Oceaunz — official match ball of the 2023 FIFA Women\u2019s World Cup.',
    description: 'Named for the Australia/New Zealand host waters, the Oceaunz carries Adidas\u2019s Speedshell surface texture for precise, consistent flight. Its wave-inspired panel graphics marked every match of the 2023 tournament.',
    features: ['FIFA Women\u2019s World Cup 2023 official ball', 'Speedshell surface technology', 'Machine-stitched panel construction', 'Consistent flight in all conditions'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Premium PU synthetic leather'],['Bladder','Butyl, hand-wound']],
    stock: 15, rating: 4.9, reviewCount: 63,
    images: ['assets/adidas-oceaunz.jpg'],
    reviews: [
      { name:'Zainab M.', role:'Semi-Pro Winger', stars:5, quote:'Beautiful strike off this ball — the surface grips even on damp pitches.' },
    ],
  },
  'adidas-cwc25': {
    id: 'adidas-cwc25', name: 'Adidas Club World Cup 25', price: 5900,
    c1: '#1e3a8a', c2: '#c0392b', // blue / red with white
    eyebrow: 'FIFA Club World Cup 2025 · Official Ball',
    shortDesc: 'The official match ball of the FIFA Club World Cup 2025.',
    description: 'Built for the expanded 2025 Club World Cup, this ball pairs a crisp blue-and-red starburst design with Adidas\u2019s tournament-grade panel construction for reliable flight at the highest club level.',
    features: ['FIFA Club World Cup 2025 official ball', 'Tournament-grade panel construction', 'Bold starburst graphics', 'Consistent flight at high velocity'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Premium PU synthetic leather'],['Bladder','Butyl, hand-wound']],
    stock: 20, rating: 4.8, reviewCount: 29,
    images: ['assets/adidas-cwc25.jpg'],
    reviews: [
      { name:'Bilal G.', role:'Club Academy Player', stars:5, quote:'Sharp graphics and a true strike — feels like a proper tournament ball.' },
    ],
  },
  'nike-pl-academy': {
    id: 'nike-pl-academy', name: 'Nike Premier League Academy', price: 5900,
    c1: '#2f3fb0', c2: '#f2efe8', // blue / white
    eyebrow: 'Premier League · Academy Ball',
    shortDesc: 'Nike\u2019s Aerowsculpt academy ball in the Premier League blue colourway.',
    description: 'The Academy uses the same Aerowsculpt groove technology as Nike\u2019s top-tier match balls in a more affordable training-grade build — a reliable step up from entry-level balls for academy and club sessions.',
    features: ['Aerowsculpt groove technology', 'Academy-grade durable casing', 'Premier League colourway', 'Reliable flight for regular training'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Synthetic training casing'],['Bladder','Butyl']],
    stock: 28, rating: 4.5, reviewCount: 33,
    images: ['assets/nike-pl-academy.jpg'],
    reviews: [
      { name:'Shahzaib K.', role:'Academy Player', stars:4, quote:'Solid training ball, holds up well over a full season of sessions.' },
    ],
  },

  'adidas-brazuca': {
    id: 'adidas-brazuca', name: 'Adidas Brazuca', price: 6500,
    c1: '#e8703a', c2: '#1c3f8f', // orange / blue swirl
    eyebrow: 'FIFA World Cup Brazil 2014 · Official Ball',
    shortDesc: 'The Brazuca — official match ball of the 2014 FIFA World Cup in Brazil.',
    description: 'Named by public vote after the Brazilian people themselves, the Brazuca used a revolutionary 6-panel construction bonded by thermal seams for a rounder, more consistent surface than any ball before it. Its vivid multi-colour ribbon graphic became one of the most recognisable designs in World Cup history.',
    features: ['FIFA World Cup Brazil 2014 official ball', '6-panel thermally bonded construction', 'Textured surface for grip in all conditions', 'Collector-grade panel graphics'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Thermally bonded synthetic panels'],['Bladder','Butyl']],
    stock: 16, rating: 4.9, reviewCount: 178,
    images: ['assets/adidas-brazuca-1.jpg', 'assets/adidas-brazuca-2.jpg', 'assets/adidas-brazuca-3.jpg', 'assets/adidas-brazuca-4.jpg'],
    reviews: [
      { name:'Omar S.', role:'Club Coach', stars:5, quote:'Still one of the truest-striking balls ever made. Feels incredible off the foot.' },
    ],
  },
  'adidas-ucl-budapest25': {
    id: 'adidas-ucl-budapest25', name: 'Adidas UCL Final Budapest 25', price: 6800,
    c1: '#4c1d95', c2: '#caa04d', // purple / gold
    eyebrow: 'UEFA Champions League · Final Ball',
    shortDesc: 'The official UEFA Champions League final match ball — purple and gold starball graphics.',
    description: 'Built for the biggest night in European club football, this final-edition ball pairs the iconic starball pattern with a striking purple and gold finish exclusive to the final match. Engineered for precise long-range passing and reliable strikes under pressure.',
    features: ['UEFA Champions League final official ball', 'Purple and gold starball graphics', 'Machine-stitched panel construction', 'Consistent flight at high velocity'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Premium PU synthetic leather'],['Bladder','Butyl, hand-wound']],
    stock: 14, rating: 4.9, reviewCount: 52,
    images: ['assets/adidas-ucl-budapest25-1.jpg', 'assets/adidas-ucl-budapest25-2.jpg', 'assets/adidas-ucl-budapest25-3.jpg', 'assets/adidas-ucl-budapest25-4.jpg'],
    reviews: [
      { name:'Fahad N.', role:'Club Striker', stars:5, quote:'The gold finish looks even better in person. Strikes beautifully at pace.' },
    ],
  },
  'puma-orbita-ultimate': {
    id: 'puma-orbita-ultimate', name: 'Puma Orbita Ultimate', price: 6200,
    c1: '#c026d3', c2: '#312e81', // pink / indigo
    eyebrow: 'Premier League · Official Ball',
    shortDesc: 'The Puma Orbita Ultimate — official Premier League match ball with Perfect Balance technology.',
    description: 'Puma\u2019s first Premier League match ball uses Perfect Balance seam technology for consistent flight and touch straight out of the box. Finished in a bold pink and indigo colourway with the Premier League crest.',
    features: ['Premier League official match ball', 'Perfect Balance seam technology', 'FIFA Quality Pro certified', 'Consistent flight at high velocity'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Premium PU synthetic leather'],['Bladder','Butyl, hand-wound']],
    stock: 19, rating: 4.8, reviewCount: 41,
    images: ['assets/puma-orbita-ultimate-1.jpg', 'assets/puma-orbita-ultimate-2.jpg', 'assets/puma-orbita-ultimate-3.jpg'],
    reviews: [
      { name:'Hassan M.', role:'Semi-Pro Midfielder', stars:5, quote:'Didn\u2019t expect a first-season match ball to feel this true off the foot. Impressive.' },
    ],
  },
  'nike-flight-pl-2425': {
    id: 'nike-flight-pl-2425', name: 'Nike Flight (Premier League) 24/25', price: 6500,
    c1: '#a3e635', c2: '#7c3aed', // neon yellow / purple
    eyebrow: 'Premier League · Official Ball 2024/25',
    shortDesc: 'The Nike Flight — official Premier League ball for the 2024/25 season in neon yellow and purple.',
    description: 'The 2024/25 Nike Flight keeps the 4-panel AerowTrac construction that made its predecessor a standout, in a fresh neon yellow and purple colourway carried across every Premier League fixture this season.',
    features: ['Premier League official ball 2024/25', '4-panel AerowTrac construction', 'High-visibility neon colourway', 'Textured casing for consistent touch'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Premium synthetic casing'],['Bladder','Latex']],
    stock: 22, rating: 4.8, reviewCount: 19,
    images: ['assets/nike-flight-pl-2425.jpg'],
    reviews: [
      { name:'Talha I.', role:'Club Winger', stars:5, quote:'Even sharper off the boot than last season\u2019s ball. Love the colourway too.' },
    ],
  },
  'adidas-trionda-final-pro': {
    id: 'adidas-trionda-final-pro', name: 'Adidas Trionda Final Pro', price: 7200,
    c1: '#caa04d', c2: '#1a1a1a', // gold / black
    eyebrow: 'FIFA World Cup 26 · Final Match Ball',
    shortDesc: 'The Trionda Final Pro — official match ball reserved for the FIFA World Cup 26 final matches.',
    description: 'The Final Pro carries the host-city markings of Toronto, Vancouver, Los Angeles, and Kansas City, marking it as the elevated match-day edition of the Trionda. FIFA Quality Pro certified for tournament-grade flight and touch.',
    features: ['FIFA World Cup 26 final match ball', 'FIFA Quality Pro certified', 'Host-city panel graphics', 'Machine-stitched premium construction'],
    specs: [['Circumference','68–70cm'],['Weight','410–450g'],['Material','Premium PU synthetic leather'],['Bladder','Butyl, hand-wound']],
    stock: 9, rating: 5.0, reviewCount: 8,
    images: ['assets/trionda-final-pro-1.jpg', 'assets/trionda-final-pro-2.jpg'],
    reviews: [
      { name:'Waqas H.', role:'Collector', stars:5, quote:'The premium edition of the Trionda — the gold detailing is stunning in hand.' },
    ],
  },

  /* Add new balls here — e.g.:
  'new-id': { id:'new-id', name:'...', price:0, c1:'#...', c2:'#...', eyebrow:'...',
    shortDesc:'...', description:'...', features:[], specs:[], stock:0, rating:5, reviewCount:0,
    images:['assets/your-photo.jpg'], reviews:[] },
  */
};
