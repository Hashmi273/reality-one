export interface PropertyCategory {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  count: number;
}

export const propertyCategories: PropertyCategory[] = [
  {
    id: "luxury-homes",
    name: "Luxury Homes",
    slug: "luxury-homes",
    tagline: "Elevated Living",
    description: "Premium residences designed for elevated living, featuring bespoke architecture, private decks, and panoramic horizons.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    count: 8
  },
  {
    id: "new-launches",
    name: "New Launches",
    slug: "new-launches",
    tagline: "Early Stage Value",
    description: "Discover upcoming and newly launched developments with competitive pricing and flexible investment schedules.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
    count: 12
  },
  {
    id: "residential",
    name: "Residential",
    slug: "residential",
    tagline: "Modern Communities",
    description: "Explore homes suited to different lifestyles and requirements in integrated gated communities with abundant green spaces.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    count: 16
  },
  {
    id: "commercial",
    name: "Commercial",
    slug: "commercial",
    tagline: "Strategic Workspaces",
    description: "Commercial spaces for business and investment opportunities, offering high footfall zones and Grade-A office infrastructure.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    count: 6
  },
  {
    id: "investment-opportunities",
    name: "Investment Opportunities",
    slug: "investment-opportunities",
    tagline: "High Yield Assets",
    description: "Explore properties with potential for long-term value appreciation, pre-leased cash flows, and capital growth.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    count: 9
  }
];
