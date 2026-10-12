export interface Campaign {
  slug: string;
  badge: string;
  headline: string;
  subheadline: string;
  heroImage: string;
  featuredPropertySlug: string;
  targetAudience: string;
  keyBenefits: {
    title: string;
    description: string;
  }[];
  exclusiveOffer?: string;
  gallery: string[];
}

export const campaignsData: Record<string, Campaign> = {
  "luxury-homes": {
    slug: "luxury-homes",
    badge: "Exclusive Collection",
    headline: "Unrivaled Luxury Homes & Sea-Facing Mansions",
    subheadline: "Experience elevated living at India's most prestigious coastal and urban addresses. Handpicked penthouses and sky mansions with bespoke appointments.",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    featuredPropertySlug: "the-grand-imperial-reserve",
    targetAudience: "Discerning High-Net-Worth Individuals & C-Suite Executives",
    keyBenefits: [
      {
        title: "Iconic Panoramic Vistas",
        description: "Unobstructed sea and skyline horizons engineered with floor-to-ceiling soundproof acoustic glazing."
      },
      {
        title: "Bespoke Architecture",
        description: "Direct private elevators, bespoke marble flooring, and expansive entertainment decks."
      },
      {
        title: "White Glove Assistance",
        description: "Dedicated property advisors providing end-to-end guidance from private walkthrough to key handover."
      }
    ],
    exclusiveOffer: "Priority private preview & custom floor-plan consultation available this week.",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  "new-launch": {
    slug: "new-launch",
    badge: "Early Access Opportunity",
    headline: "Exclusive New Launch Developments & Inaugural Pricing",
    subheadline: "Secure prime units in newly unveiled projects across Gurugram, Mumbai, and Bengaluru at inaugural developer pricing structures.",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
    featuredPropertySlug: "aurum-heights-residences",
    targetAudience: "Homebuyers & Strategic Early Investors",
    keyBenefits: [
      {
        title: "Inaugural Launch Pricing",
        description: "Avail pre-launch price advantages and flexible construction-linked payment milestones."
      },
      {
        title: "Preferred Unit Selection",
        description: "Early access to select higher floors, corner layouts, and unobstructed green vistas."
      },
      {
        title: "RERA Registered Security",
        description: "Verified project documentation and transparent milestone timelines."
      }
    ],
    exclusiveOffer: "Zero brokerage discovery assistance & exclusive launch brochure package.",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  "premium-residences": {
    slug: "premium-residences",
    badge: "Curated Living",
    headline: "Thoughtfully Designed Modern Residences for Families",
    subheadline: "Spacious 3 & 4 BHK residences situated in integrated masterplanned communities with expansive green landscapes and comprehensive lifestyle amenities.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    featuredPropertySlug: "sovereign-park-residences",
    targetAudience: "Families looking for upgraded lifestyle & prime connectivity",
    keyBenefits: [
      {
        title: "Spacious Contemporary Layouts",
        description: "Vastu-compliant layouts with dedicated work-from-home spaces and natural cross-ventilation."
      },
      {
        title: "Integrated Lifestyle Ecosystem",
        description: "Grand clubhouses, swimming pools, tennis courts, and children's activity zones."
      },
      {
        title: "Seamless Metro & Highway Connectivity",
        description: "Short commute times to premier international schools, healthcare centres, and employment corridors."
      }
    ],
    exclusiveOffer: "Schedule a guided on-site model residence tour at your preferred time.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80"
    ]
  },
  "commercial-properties": {
    slug: "commercial-properties",
    badge: "Grade-A Workspaces",
    headline: "Prime Commercial Real Estate & Corporate Office Assets",
    subheadline: "Elevate your corporate footprint in marquee business districts like BKC Mumbai and Cyber City Gurugram. High-efficiency floor plates with LEED Platinum standards.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    featuredPropertySlug: "the-capital-one-bkc",
    targetAudience: "Corporates, Institutional Buyers & Commercial Asset Investors",
    keyBenefits: [
      {
        title: "Prestigious Corporate Addresses",
        description: "Headquarters-grade infrastructure in India's leading financial and technology districts."
      },
      {
        title: "High Rental Yield Potential",
        description: "Strong occupier demand from Fortune 500 companies and growing tech conglomerates."
      },
      {
        title: "Institutional Management",
        description: "Professional facility management, advanced security, and high-speed transit integration."
      }
    ],
    exclusiveOffer: "Request an institutional commercial prospectus and floor plan dossier.",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
    ]
  }
};
