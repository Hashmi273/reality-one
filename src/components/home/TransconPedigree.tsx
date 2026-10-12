import React from 'react';
import { Building2, ShieldCheck, Award, Leaf, MapPin, ArrowRight } from 'lucide-react';
import { companyData } from '../../data/companyData';
import { Link } from 'react-router-dom';

export const TransconPedigree: React.FC = () => {
  const pillars = [
    {
      icon: Building2,
      title: 'Architectural Landmarks',
      description: 'Pioneering private residences, penthouses, and Grade-A commercial spaces across Mumbai’s Western Suburbs and South Mumbai corridors.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Engineering',
      description: 'Constructed to IGBC Gold/Platinum sustainability standards with solar microgrids, acoustic double-glazing, and rainwater harvesting.'
    },
    {
      icon: Award,
      title: 'Master Architect Collaborations',
      description: 'Designed in synergy with celebrated structural consultants and landscape architects for enduring generational legacy.'
    },
    {
      icon: ShieldCheck,
      title: 'Statutory Governance',
      description: 'Verified title deeds, full MahaRERA compliance, transparent escrow mechanisms, and timely occupancy certifications.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#183223] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/15 pb-10">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B2D1BC] block">
              Corporate Governance & Pedigree
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-tight">
              Curated by <span className="text-[#D0E3D5] italic font-normal">Realty One</span>
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 font-light leading-relaxed">
              Digital Advisory: <strong>SKY ROUTE DIGITAL</strong> | Operating Entity: <strong>{companyData.legalName}</strong> | GSTIN: <strong className="font-mono text-[#D0E3D5]">{companyData.gstin}</strong>. Dedicated to transparent advisory, verified portfolios, and prime real-estate opportunities across Mumbai and India.
            </p>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl border border-white/15 max-w-sm space-y-2 backdrop-blur-md">
            <div className="flex items-start gap-2.5 text-xs text-emerald-100">
              <MapPin className="w-4 h-4 text-[#B2D1BC] shrink-0 mt-0.5" />
              <span className="font-light">{companyData.contact.fullAddress}</span>
            </div>
            <div className="pt-2 border-t border-white/10">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B2D1BC] hover:text-white transition-colors"
              >
                <span>Read Institutional Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/[0.04] p-7 rounded-2xl border border-white/10 hover:border-[#B2D1BC]/50 transition-all duration-300 space-y-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B2D1BC]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-normal text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-emerald-100/80 font-light leading-relaxed">
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
