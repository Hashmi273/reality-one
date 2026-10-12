import React from 'react';
import { Compass, MapPin, Headphones, MessageSquareText, Layers } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const points = [
    {
      icon: Compass,
      title: 'Curated Portfolios',
      description: 'Hand-screened real estate inventory with verified floor plans, statutory title clearance, and transparent price sheets.'
    },
    {
      icon: MapPin,
      title: 'Prime Urban Pin Codes',
      description: 'Exclusive properties located across Mumbai, Gurugram, and Bengaluru with robust transit and social infrastructure.'
    },
    {
      icon: Headphones,
      title: 'Dedicated Advisory Desk',
      description: 'Direct consultation with seasoned residential portfolio specialists with zero sales pressure and zero bias.'
    },
    {
      icon: MessageSquareText,
      title: 'Direct Developer Allocation',
      description: 'Direct procurement channels with Tier-1 developers ensuring pre-launch allocations, priority floor selection, and 0% brokerage.'
    },
    {
      icon: Layers,
      title: 'Unified Property Matrix',
      description: 'Explore signature sky mansions, boutique sea-view apartments, and prime commercial pre-leases in a single portal.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F8F5] border-t border-[#DCE7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#386146] block">
            The Advisory Commitment
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#193122] tracking-tight">
            Why Discerning Buyers Choose Us
          </h2>
          <p className="text-xs sm:text-sm text-[#536B5C] font-light leading-relaxed">
            An institutional real estate advisory framework anchored in statutory diligence, spatial integrity, and discreet service.
          </p>
        </div>

        {/* 5 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#DCE7E0] hover:border-[#8EB99C] transition-all duration-300 space-y-4 group shadow-xs hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EAF3ED] group-hover:bg-[#23412E] text-[#386146] group-hover:text-[#D0E3D5] flex items-center justify-center transition-colors border border-[#DCE7E0]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-normal text-[#193122]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#536B5C] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
