import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Eye, ShieldCheck, Layers, Users2, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  const values = [
    {
      icon: Eye,
      title: 'Transparent Discovery',
      description: 'Clarity over marketing hyperbole. Every showcase details verified layout dimensions, RERA certification, and authentic micro-market infrastructure.'
    },
    {
      icon: Compass,
      title: 'Curated Quality Benchmarks',
      description: 'Rather than endless unverified portals, we present carefully vetted residential sky estates and Grade-A commercial developments.'
    },
    {
      icon: Layers,
      title: 'Institutional Portfolio Matrix',
      description: 'From primary family penthouses in Mumbai to tranquil green-belt residences in Bengaluru, discover premium assets in one unified platform.'
    },
    {
      icon: Users2,
      title: 'Discreet Private Advisory',
      description: 'We eliminate unsolicited broker calls. Our private advisory pathways connect you directly with accredited developer representatives.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Brokerage Allocation',
      description: 'Enjoy 0% brokerage on all primary developer new launches with structured term-sheet advisory.'
    }
  ];

  return (
    <div className="bg-[#F4F8F5] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        
        {/* Page Hero */}
        <div className="max-w-3xl space-y-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#386146] block">
            Advisory Philosophy & Pedigree
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#193122] tracking-tight leading-[1.08]">
            About Realty One
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-[#536B5C] font-light leading-relaxed">
            An institutional real estate advisory and acquisition ecosystem created to bring transparency, spatial integrity, and architectural distinction to Indian metropolitan property markets.
          </p>
        </div>

        {/* Editorial Brand Story (Split Image + Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden bg-emerald-950 border border-[#DCE7E0]">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
              alt="Realty One Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#152B1E]/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] font-medium uppercase tracking-wider text-[#CDE6D6]">
                Refined Metropolitan Living
              </span>
              <p className="text-base font-serif font-normal mt-0.5">
                Connecting discerning homeowners with distinguished architectural landmarks.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-4xl font-serif font-light text-[#193122]">
              Transforming Real Estate with Elegance & Precision
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#536B5C] leading-relaxed font-light">
              <p>
                Navigating the real estate landscape in Mumbai, NCR, and Bengaluru often involves cluttered portals, ambiguous RERA numbers, and relentless sales pressure. <strong>Realty One</strong> (marketed by <strong>SKY ROUTE DIGITAL</strong>, operated by <strong>{companyData.legalName}</strong>) was founded to establish an orderly, private, and trustworthy acquisition desk.
              </p>
              <p>
                We focus on high-fidelity architectural presentation, precise carpet area metrics, and verified title diligence. Whether you are exploring an expansive sky mansion in Worli, a biophilic residence in Andheri, or Grade-A commercial office suites in Gurugram, we provide unbiased, structured guidance.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="py-2.5 px-6 rounded-full btn-pastel-primary text-xs font-medium cursor-pointer"
              >
                Initiate Private Dialogue
              </button>
            </div>
          </div>

        </div>

        {/* Pillars / Principles */}
        <div className="space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#386146] block">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-[#193122]">
              Our Guiding Standard
            </h2>
            <p className="text-xs sm:text-sm text-[#536B5C] font-light">
              Every portfolio recommendation is governed by strict statutory verification and spatial integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-[#DCE7E0] hover:border-[#8EB99C] transition-all space-y-4 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full bg-[#EAF3ED] border border-[#DCE7E0] flex items-center justify-center text-[#386146]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-serif font-normal text-[#193122]">
                    {v.title}
                  </h3>
                  <p className="text-xs text-[#536B5C] leading-relaxed font-light">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#183223] text-white p-8 sm:p-12 rounded-3xl border border-white/10 text-center space-y-5">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-light text-white max-w-xl mx-auto">
            Ready to Explore Distinguished Properties?
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/80 font-light max-w-lg mx-auto">
            Review our verified developments or connect with our relationship managers for confidential off-market portfolios.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/properties"
              className="py-2.5 px-6 rounded-full btn-pastel-mint text-xs font-semibold tracking-wide flex items-center justify-center gap-1.5"
            >
              <span>Explore Property Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact-us"
              className="py-2.5 px-6 rounded-full bg-white/10 text-white text-xs font-medium border border-white/15 hover:bg-white/15 transition-colors"
            >
              Contact Advisory Desk
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
