import React from 'react';
import { Quote, Building } from 'lucide-react';

export const ClientStories: React.FC = () => {
  const stories = [
    {
      name: 'Sunil & Ritu Mehra',
      designation: 'Managing Director, Horizon Ventures',
      property: 'Transcon Triumph, Andheri West',
      quote: 'The layout efficiency and double-height entrance lobby at Transcon Triumph were decisive factors for our family. The private concierge facilitated our walkthrough and transparent developer documentation seamlessly.'
    },
    {
      name: 'Ashwin Singhania',
      designation: 'Private Equity Investor',
      property: 'The Grand Imperial Reserve, Worli',
      quote: 'Acquiring an unobstructed sea-facing sky residence in Worli requires rigorous due diligence on RERA milestones. The advisory team provided verified floor plans, structural details, and direct developer allocation.'
    },
    {
      name: 'Pooja Deshmukh',
      designation: 'Principal Architect & Urbanist',
      property: 'Sovereign Park Residences, Whitefield',
      quote: 'Finding a residential community in Bengaluru that retains genuine green tree canopy while being minutes from metro transit is rare. The presentation was completely objective with zero exaggerated claims.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F8F5] border-t border-[#DCE7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#386146] block">
            Private Client Perspectives
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#193122] tracking-tight">
            Trusted by Discerning Buyers
          </h2>
          <p className="text-xs sm:text-sm text-[#536B5C] font-light leading-relaxed">
            Unbiased testimonials from business leaders, professionals, and families who acquired their flagship address with us.
          </p>
        </div>

        {/* 3 Editorial Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#DCE7E0] hover:border-[#8EB99C] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="w-8 h-8 rounded-full bg-[#EAF3ED] border border-[#DCE7E0] flex items-center justify-center text-[#386146]">
                  <Quote className="w-4 h-4" />
                </div>

                <p className="text-xs sm:text-sm text-[#536B5C] font-light leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAF3ED] space-y-1">
                <h4 className="text-base font-serif font-normal text-[#193122]">
                  {item.name}
                </h4>
                <p className="text-[11px] text-[#536B5C] font-light">
                  {item.designation}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#386146] pt-1">
                  <Building className="w-3 h-3 text-[#6B9F7B]" />
                  <span>{item.property}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
