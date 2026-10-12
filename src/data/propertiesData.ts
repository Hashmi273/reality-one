export interface FloorPlan {
  id: string;
  type: string;
  carpetArea: string;
  superArea: string;
  balconyArea: string;
  bedrooms: number;
  bathrooms: number;
  facing: string;
  priceEstimate: string;
  layoutImage: string;
}

export interface Property {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  developer: string;
  category: "luxury-homes" | "new-launches" | "residential" | "commercial" | "investment-opportunities";
  categoryLabel: string;
  propertyType: "Apartment" | "Penthouse" | "Villa" | "Commercial Office" | "Sky Mansion";
  location: string;
  neighborhood: string;
  city: string;
  state: string;
  priceFormatted: string;
  priceNumeric: number; // in Crores
  configuration: string;
  carpetArea: string;
  possession: string;
  status: "Ready to Move" | "Under Construction" | "Newly Launched";
  isFeatured: boolean;
  isMarquee: boolean;
  heroImage: string;
  gallery: string[];
  description: string;
  overview: string;
  architectureDetails: {
    architect: string;
    totalFloors: string;
    density: string;
    greenCover: string;
  };
  highlights: string[];
  amenities: {
    name: string;
    category: "Wellness" | "Leisure" | "Sports" | "Security" | "Eco";
    icon: string;
  }[];
  floorPlans: FloorPlan[];
  locationAdvantages: {
    place: string;
    distance: string;
    category: "Transit" | "Business" | "Hospitality" | "Education";
  }[];
  reraId?: string;
}

export const propertiesData: Property[] = [
  {
    id: "prop-transcon-triumph",
    slug: "transcon-triumph-andheri",
    name: "Transcon Triumph",
    tagline: "Ultra-Luxury High-Rise Living in Prime Andheri West",
    developer: "TRANSCON DEVELOPERS PRIVATE LIMITED",
    category: "luxury-homes",
    categoryLabel: "Signature Flagship",
    propertyType: "Sky Mansion",
    location: "Veera Desai Road, Andheri West",
    neighborhood: "Oshiwara, Western Suburbs",
    city: "Mumbai",
    state: "Maharashtra",
    priceFormatted: "₹ 5.95 Cr onwards",
    priceNumeric: 5.95,
    configuration: "3 & 4 BHK Luxury Residences",
    carpetArea: "1,450 - 2,850 sq.ft.",
    possession: "Ready for Possession",
    status: "Ready to Move",
    isFeatured: true,
    isMarquee: true,
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "An architectural tour de force rising in the heart of Andheri West, featuring grand double-height entrance lobbies, private sky decks, and state-of-the-art acoustic soundproofing.",
    overview: "Transcon Triumph stands as a benchmark for contemporary urban luxury in Mumbai. Developed by Transcon Developers, this landmark tower redefines high-rise living with bespoke lifestyle amenities, temperature-regulated infinity pool, expansive floor-to-ceiling panoramic glass, and seamless access to Mumbai's entertainment and commercial epicenters.",
    architectureDetails: {
      architect: "Hafeez Contractor & International Design Studio",
      totalFloors: "38 Storeys",
      density: "Only 3 Suites per Core",
      greenCover: "70% Landscaped Open Deck"
    },
    highlights: [
      "Ready to Move with Occupancy Certificate (OC) in place",
      "Strategic Veera Desai location with immediate Link Road & Metro access",
      "Grand 40,000 sq.ft. multi-level lifestyle clubhouse",
      "Private elevator foyers for select 4 BHK sky mansions",
      "Double-glazed acoustic windows for pin-drop tranquility"
    ],
    amenities: [
      { name: "Infinity Horizon Pool", category: "Leisure", icon: "Waves" },
      { name: "Private Screening Cinema", category: "Leisure", icon: "Film" },
      { name: "Technogym Fitness Studio", category: "Wellness", icon: "Dumbbell" },
      { name: "Sky Cigar & Wine Lounge", category: "Leisure", icon: "Wine" },
      { name: "Badminton & Squash Courts", category: "Sports", icon: "Trophy" },
      { name: "Multi-tier Biometric Security", category: "Security", icon: "ShieldCheck" }
    ],
    floorPlans: [
      {
        id: "fp-1",
        type: "3 BHK Grand Residence",
        carpetArea: "1,450 sq.ft.",
        superArea: "2,050 sq.ft.",
        balconyArea: "140 sq.ft.",
        bedrooms: 3,
        bathrooms: 3,
        facing: "East-West Cross Ventilated",
        priceEstimate: "₹ 5.95 Cr",
        layoutImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "fp-2",
        type: "4 BHK Royal Sky Mansion",
        carpetArea: "2,150 sq.ft.",
        superArea: "3,100 sq.ft.",
        balconyArea: "280 sq.ft.",
        bedrooms: 4,
        bathrooms: 5,
        facing: "180-Degree City & Green View",
        priceEstimate: "₹ 8.80 Cr",
        layoutImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "fp-3",
        type: "5 BHK Duplex Penthouse",
        carpetArea: "3,650 sq.ft.",
        superArea: "5,200 sq.ft.",
        balconyArea: "520 sq.ft.",
        bedrooms: 5,
        bathrooms: 6,
        facing: "Panoramic Sea & Horizon View",
        priceEstimate: "₹ 15.50 Cr",
        layoutImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80"
      }
    ],
    locationAdvantages: [
      { place: "DN Nagar & Azad Nagar Metro Stations", distance: "3 Mins", category: "Transit" },
      { place: "Infiniti Mall & Lokhandwala Complex", distance: "5 Mins", category: "Hospitality" },
      { place: "Western Express Highway", distance: "8 Mins", category: "Transit" },
      { place: "Chhatrapati Shivaji Maharaj Intl Airport (T2)", distance: "18 Mins", category: "Transit" },
      { place: "Kokilaben Dhirubhai Ambani Hospital", distance: "6 Mins", category: "Hospitality" }
    ],
    reraId: "P51800000843",
  },
  {
    id: "prop-worli-reserve",
    slug: "the-grand-imperial-reserve",
    name: "The Grand Imperial Reserve",
    tagline: "Unobstructed Sea View Sky Residences",
    developer: "Imperial Luxury Realty & Transcon Associates",
    category: "luxury-homes",
    categoryLabel: "Ultra Luxury",
    propertyType: "Penthouse",
    location: "Worli Sea Face, South Mumbai",
    neighborhood: "Worli Coastal Corridor",
    city: "Mumbai",
    state: "Maharashtra",
    priceFormatted: "₹ 14.50 Cr onwards",
    priceNumeric: 14.5,
    configuration: "4 & 5 BHK Sky Mansions",
    carpetArea: "3,850 - 5,600 sq.ft.",
    possession: "Dec 2026",
    status: "Under Construction",
    isFeatured: true,
    isMarquee: true,
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "An iconic residential landmark rising along Worli's prestigious coastline, offering curated sky mansions with 180-degree Arabian Sea panoramas.",
    overview: "The Grand Imperial Reserve represents the pinnacle of high-rise coastal architecture. Designed with floor-to-ceiling Italian double-glazed glass walls, oversized private sea decks, and custom private elevator foyers.",
    architectureDetails: {
      architect: "Arquitectonica (Miami) & Landscape by Cracknell",
      totalFloors: "62 Storeys",
      density: "Only 2 Mansions per Floor",
      greenCover: "IGBC Platinum Certified"
    },
    highlights: [
      "Panoramic 180-degree Arabian Sea views from every residence",
      "Private elevator access with dedicated security lobby",
      "Cantilevered infinity pool 450 feet in the air",
      "Bespoke white glove concierge and private wine cellar"
    ],
    amenities: [
      { name: "Cantilevered Sea Pool", category: "Leisure", icon: "Waves" },
      { name: "Private Wine Cellar & Tasting Room", category: "Leisure", icon: "Wine" },
      { name: "Hydrotherapy Spa", category: "Wellness", icon: "Dumbbell" },
      { name: "Helipad Access Facility", category: "Security", icon: "Zap" },
      { name: "24/7 Diplomatic Grade Security", category: "Security", icon: "ShieldCheck" }
    ],
    floorPlans: [
      {
        id: "fp-worli-1",
        type: "4 BHK Sea View Mansion",
        carpetArea: "3,850 sq.ft.",
        superArea: "5,400 sq.ft.",
        balconyArea: "420 sq.ft.",
        bedrooms: 4,
        bathrooms: 5,
        facing: "West (Arabian Sea Facing)",
        priceEstimate: "₹ 14.50 Cr",
        layoutImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "fp-worli-2",
        type: "5 BHK Imperial Sky Palace",
        carpetArea: "5,600 sq.ft.",
        superArea: "8,100 sq.ft.",
        balconyArea: "780 sq.ft.",
        bedrooms: 5,
        bathrooms: 7,
        facing: "360-Degree Panoramic Coastline",
        priceEstimate: "₹ 24.00 Cr",
        layoutImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
      }
    ],
    locationAdvantages: [
      { place: "Bandra-Worli Sea Link Entrance", distance: "3 Mins", category: "Transit" },
      { place: "Bandra Kurla Complex (BKC via Sea Link)", distance: "15 Mins", category: "Business" },
      { place: "The St. Regis & Palladium Mall", distance: "8 Mins", category: "Hospitality" },
      { place: "South Mumbai Heritage District (Colaba)", distance: "20 Mins", category: "Hospitality" }
    ],
    reraId: "PRM/KA/RERA/1251/310/PR/180220/001452",
  },
  {
    id: "prop-aurum-heights",
    slug: "aurum-heights-residences",
    name: "Aurum Heights Residences",
    tagline: "Low Density Sanctuary on Golf Course Extension",
    developer: "Aurum Global Infrastructure",
    category: "new-launches",
    categoryLabel: "New Launch",
    propertyType: "Apartment",
    location: "Golf Course Extension Road, Sector 66",
    neighborhood: "Golf Course Ext Corridor",
    city: "Gurugram",
    state: "Haryana",
    priceFormatted: "₹ 4.85 Cr onwards",
    priceNumeric: 4.85,
    configuration: "3 & 4 BHK Luxury Apartments",
    carpetArea: "2,450 - 3,400 sq.ft.",
    possession: "Mid 2027",
    status: "Newly Launched",
    isFeatured: true,
    isMarquee: false,
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Newly unveiled low-density architectural towers surrounded by 80% open landscaped greens on prime Golf Course Extension corridor.",
    overview: "Aurum Heights Residences brings timeless contemporary elegance to Gurugram's fastest-growing luxury corridor. Featuring VRV air conditioning, expansive wrap-around balconies, and smart home automation.",
    architectureDetails: {
      architect: "Morphogenesis & SWA Group",
      totalFloors: "32 Storeys",
      density: "Only 2 Apartments per Core",
      greenCover: "82% Open Landscaped Greens"
    },
    highlights: [
      "Low density masterplan with only 2 apartments per core",
      "Grand 50,000 sq.ft. clubhouse with indoor heated pool",
      "Direct signal-free connectivity to Rapid Metro and Cyber City",
      "3-tier biometric access and vehicle RFID management"
    ],
    amenities: [
      { name: "50,000 sq.ft. Clubhouse", category: "Leisure", icon: "Building2" },
      { name: "Olympic Length Lap Pool", category: "Sports", icon: "Waves" },
      { name: "Squash & Tennis Courts", category: "Sports", icon: "Trophy" },
      { name: "EV Charging Infrastructure", category: "Eco", icon: "Zap" }
    ],
    floorPlans: [
      {
        id: "fp-aurum-1",
        type: "3 BHK Premium Residence",
        carpetArea: "2,450 sq.ft.",
        superArea: "3,300 sq.ft.",
        balconyArea: "220 sq.ft.",
        bedrooms: 3,
        bathrooms: 4,
        facing: "North-East Park Facing",
        priceEstimate: "₹ 4.85 Cr",
        layoutImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "fp-aurum-2",
        type: "4 BHK Ultra Residence",
        carpetArea: "3,400 sq.ft.",
        superArea: "4,600 sq.ft.",
        balconyArea: "350 sq.ft.",
        bedrooms: 4,
        bathrooms: 5,
        facing: "Corner Dual Aspect (Greens & Skyline)",
        priceEstimate: "₹ 6.90 Cr",
        layoutImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
      }
    ],
    locationAdvantages: [
      { place: "Cyber City & DLF Horizon Center", distance: "12 Mins", category: "Business" },
      { place: "St. Xavier's High School", distance: "5 Mins", category: "Education" },
      { place: "Medanta - The Medicity", distance: "15 Mins", category: "Hospitality" },
      { place: "Indira Gandhi International Airport (T3)", distance: "25 Mins", category: "Transit" }
    ],
    reraId: "RC/REP/HARERA/GGM/745/477/2023/112",
  },
  {
    id: "prop-bkc-capital",
    slug: "the-capital-one-bkc",
    name: "The Capital One Commercial Tower",
    tagline: "Grade-A Corporate Headquarters & Marquee Suites",
    developer: "Capital Heights & Commercial Partners",
    category: "commercial",
    categoryLabel: "Commercial Asset",
    propertyType: "Commercial Office",
    location: "G-Block, Bandra Kurla Complex",
    neighborhood: "BKC Financial District",
    city: "Mumbai",
    state: "Maharashtra",
    priceFormatted: "₹ 8.50 Cr onwards",
    priceNumeric: 8.5,
    configuration: "Grade-A Office Suites & Large Floorplates",
    carpetArea: "1,500 - 18,000 sq.ft.",
    possession: "Ready for Fitouts",
    status: "Ready to Move",
    isFeatured: true,
    isMarquee: false,
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "An international-grade corporate headquarters featuring energy-efficient glass facade, high-speed destination elevators, and scalable floorplates.",
    overview: "Strategically located at the heart of India's premier financial district (BKC), The Capital One provides corporate office suites designed for multinational firms, private equity offices, and law enterprises.",
    architectureDetails: {
      architect: "Foster + Partners Associated Design",
      totalFloors: "24 Storeys",
      density: "Column-free Modular Floorplates",
      greenCover: "LEED Platinum Commercial Certification"
    },
    highlights: [
      "LEED Platinum rated commercial development",
      "Column-free large floor plates for efficient office space planning",
      "Multi-level basement parking with smart license plate recognition",
      "Centrally air-conditioned with MERV-14 advanced air filtration"
    ],
    amenities: [
      { name: "Executive Boardrooms & Auditoriums", category: "Leisure", icon: "Building2" },
      { name: "Destination Elevators (3.5 m/s)", category: "Security", icon: "Zap" },
      { name: "Dedicated EV Fleet Bays", category: "Eco", icon: "Car" },
      { name: "100% DG Power Backup", category: "Security", icon: "BatteryCharging" }
    ],
    floorPlans: [
      {
        id: "fp-bkc-1",
        type: "Executive Corporate Suite",
        carpetArea: "1,500 sq.ft.",
        superArea: "2,200 sq.ft.",
        balconyArea: "N/A (Central AC)",
        bedrooms: 0,
        bathrooms: 2,
        facing: "BKC Boulevard Facing",
        priceEstimate: "₹ 8.50 Cr",
        layoutImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
      },
      {
        id: "fp-bkc-2",
        type: "Full Floorplate Enterprise Wing",
        carpetArea: "8,500 sq.ft.",
        superArea: "12,200 sq.ft.",
        balconyArea: "N/A (Central AC)",
        bedrooms: 0,
        bathrooms: 8,
        facing: "4-Sided Natural Daylight Core",
        priceEstimate: "₹ 48.00 Cr",
        layoutImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80"
      }
    ],
    locationAdvantages: [
      { place: "BKC Underground Metro Interchange", distance: "2 Mins", category: "Transit" },
      { place: "Mumbai Domestic Airport", distance: "12 Mins", category: "Transit" },
      { place: "Eastern Freeway / Sea Link Connector", distance: "5 Mins", category: "Transit" },
      { place: "Jio World Convention Centre & Plaza", distance: "4 Mins", category: "Hospitality" }
    ],
    reraId: "P51800028442",
  },
  {
    id: "prop-whitefield-park",
    slug: "sovereign-park-residences",
    name: "Sovereign Park Residences",
    tagline: "Tranquil Urban Estate in Whitefield",
    developer: "Sovereign Habitat Developers",
    category: "residential",
    categoryLabel: "Residential Estate",
    propertyType: "Apartment",
    location: "Whitefield Inner Circle",
    neighborhood: "Whitefield Tech Corridor",
    city: "Bengaluru",
    state: "Karnataka",
    priceFormatted: "₹ 2.65 Cr onwards",
    priceNumeric: 2.65,
    configuration: "3 & 3.5 BHK Forest Residences",
    carpetArea: "1,850 - 2,550 sq.ft.",
    possession: "Ready to Move",
    status: "Ready to Move",
    isFeatured: true,
    isMarquee: false,
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "An integrated residential sanctuary set amid 14 acres of lush botanical gardens, offering spacious family homes near major IT hubs.",
    overview: "Sovereign Park Residences combines serene natural surroundings with immediate access to tech parks, international schools, and metro stations. Built with expansive decks and German-engineered fittings.",
    architectureDetails: {
      architect: "Belt Collins & RSP Architects",
      totalFloors: "28 Storeys",
      density: "4 Apartments per Core",
      greenCover: "14 Acres of Landscaped Forest"
    },
    highlights: [
      "Ready to Move with OC (Occupancy Certificate) received",
      "14 acres of private landscaped urban forest with 500+ trees",
      "Walking distance to Purple Line Metro Station",
      "Spacious layouts with separate maid's quarters and utility areas"
    ],
    amenities: [
      { name: "Botanical Walking Trails", category: "Eco", icon: "Trees" },
      { name: "Heated Swimming Pool", category: "Sports", icon: "Waves" },
      { name: "Co-working Business Lounge", category: "Leisure", icon: "Building2" },
      { name: "Dedicated Pet Park", category: "Leisure", icon: "Heart" }
    ],
    floorPlans: [
      {
        id: "fp-whitefield-1",
        type: "3 BHK Forest Garden Suite",
        carpetArea: "1,850 sq.ft.",
        superArea: "2,500 sq.ft.",
        balconyArea: "160 sq.ft.",
        bedrooms: 3,
        bathrooms: 3,
        facing: "Botanical Garden Facing",
        priceEstimate: "₹ 2.65 Cr",
        layoutImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
      }
    ],
    locationAdvantages: [
      { place: "ITPB (International Tech Park)", distance: "6 Mins", category: "Business" },
      { place: "Kadugodi Metro Station", distance: "4 Mins", category: "Transit" },
      { place: "Manipal Hospital Whitefield", distance: "8 Mins", category: "Hospitality" },
      { place: "Phoenix Marketcity Mall", distance: "14 Mins", category: "Hospitality" }
    ],
    reraId: "PRM/KA/RERA/1251/446/PR/171015/000892",
  },
  {
    id: "prop-kokapet-golden",
    slug: "one-golden-mile-kokapet",
    name: "One Golden Mile Residences",
    tagline: "Architectural Grandeur in West Hyderabad",
    developer: "Golden Mile Infrastructure",
    category: "investment-opportunities",
    categoryLabel: "High Yield Investment",
    propertyType: "Apartment",
    location: "Golden Mile, Kokapet",
    neighborhood: "Neopolis Financial Corridor",
    city: "Hyderabad",
    state: "Telangana",
    priceFormatted: "₹ 3.40 Cr onwards",
    priceNumeric: 3.4,
    configuration: "3 & 4 BHK High-Rise Suites",
    carpetArea: "2,700 - 4,200 sq.ft.",
    possession: "Mid 2027",
    status: "Newly Launched",
    isFeatured: true,
    isMarquee: false,
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "Ultra-modern sky suites overlooking Kokapet lake with exceptional capital growth potential along Hyderabad's premier Neopolis corridor.",
    overview: "Situated right next to Neopolis Kokapet, One Golden Mile is crafted for discerning professionals and real estate investors looking for high rental yield and fast infrastructure appreciation.",
    architectureDetails: {
      architect: "DP Architects (Singapore)",
      totalFloors: "45 Storeys",
      density: "3 Suites per Core",
      greenCover: "Lake View Frontage & Green Podium"
    },
    highlights: [
      "Strategic Neopolis corridor location with rapid price appreciation",
      "Unobstructed views of scenic Gandipet and Kokapet lakes",
      "Skydeck on 45th level with infinity edge horizon pool",
      "Direct connection to Outer Ring Road (ORR) Exit 1"
    ],
    amenities: [
      { name: "45th Floor Skydeck Infinity Pool", category: "Leisure", icon: "Waves" },
      { name: "Billiards & Squash Arena", category: "Sports", icon: "Trophy" },
      { name: "Executive Co-working Lounge", category: "Leisure", icon: "Building2" }
    ],
    floorPlans: [
      {
        id: "fp-kokapet-1",
        type: "3 BHK Lake View Suite",
        carpetArea: "2,700 sq.ft.",
        superArea: "3,650 sq.ft.",
        balconyArea: "240 sq.ft.",
        bedrooms: 3,
        bathrooms: 4,
        facing: "Lake & Sunset Facing",
        priceEstimate: "₹ 3.40 Cr",
        layoutImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
      }
    ],
    locationAdvantages: [
      { place: "Financial District / Gachibowli", distance: "8 Mins", category: "Business" },
      { place: "Outer Ring Road (ORR)", distance: "2 Mins", category: "Transit" },
      { place: "Rajiv Gandhi International Airport", distance: "22 Mins", category: "Transit" }
    ],
    reraId: "P02400005421",
  }
];
