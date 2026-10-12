import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle, ArrowRight, Building, Sparkles } from 'lucide-react';
import { propertiesData } from '../../data/propertiesData';

interface ShowcaseBannerProps {
  onOpenEnquiry: () => void;
}

export const ShowcaseBanner: React.FC<ShowcaseBannerProps> = ({ onOpenEnquiry }) => {
  const showcaseProperty = propertiesData[0]; // The Grand Imperial Reserve

  return (
    <section className="py-20 lg:py-28 bg-[#152B1E] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#CDE6D6] text-[10px] font-semibold uppercase tracking-wider border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#B2D1BC]" />
            <span>Spotlight Landmark Residence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight">
            Curated For Generational Living
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 font-light max-w-2xl leading-relaxed">
            From iconic waterfront penthouses in Worli to low-density green communities in Gurugram, experience residences that mirror refined distinction.
          </p>
        </div>

        {/* Featured Showcase Card */}
        <div className="bg-[#1C3827] rounded-2xl border border-white/15 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Large Property Image (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[16/11] lg:aspect-auto overflow-hidden bg-emerald-950">
            <img
              src={showcaseProperty.heroImage}
              alt={showcaseProperty.name}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152B1E]/80 via-transparent to-transparent lg:hidden" />
            
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-[#152B1E]/80 text-emerald-100 backdrop-blur-md border border-white/20">
                Signature Collection
              </span>
            </div>
          </div>

          {/* Project Details & Highlights (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-xs text-[#B2D1BC] font-medium">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>{showcaseProperty.location}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white leading-tight">
                {showcaseProperty.name}
              </h3>

              <div className="grid grid-cols-2 gap-3 py-2 border-y border-white/10">
                <div>
                  <span className="text-[10px] text-emerald-200 uppercase tracking-wider block">Price Benchmark</span>
                  <span className="text-lg font-serif font-medium text-white">
                    {showcaseProperty.priceFormatted}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-emerald-200 uppercase tracking-wider block">Configuration</span>
                  <span className="text-xs font-medium text-emerald-100">
                    {showcaseProperty.configuration}
                  </span>
                </div>
              </div>

              <p className="text-xs text-emerald-100/80 leading-relaxed font-light">
                {showcaseProperty.overview}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2 pt-2">
                <h4 className="text-[11px] font-medium tracking-wider uppercase text-emerald-200">
                  Key Specifications:
                </h4>
                <ul className="space-y-1.5 text-xs text-emerald-100 font-light">
                  {showcaseProperty.highlights.slice(0, 3).map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#8EB99C] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={`/properties/${showcaseProperty.slug}`}
                className="py-2.5 px-5 rounded-full btn-pastel-mint text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5 text-center"
              >
                <span>View Full Showcase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={onOpenEnquiry}
                className="py-2.5 px-5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/15 transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center"
              >
                <Building className="w-3.5 h-3.5 text-[#B2D1BC]" />
                <span>Request Floor Plans</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
