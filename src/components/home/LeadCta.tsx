import React from 'react';
import { ArrowUpRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { companyData } from '../../data/companyData';

interface LeadCtaProps {
  onOpenEnquiry: () => void;
}

export const LeadCta: React.FC<LeadCtaProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#183223] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B2D1BC] block">
          Private Client Advisory
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-tight">
          Commission a Bespoke Property Search
        </h2>

        <p className="text-xs sm:text-sm lg:text-base text-emerald-100/80 font-light max-w-xl mx-auto leading-relaxed">
          Specify your spatial configuration, micro-market preferences, and investment timeline. Our partners will curate a confidential portfolio docket.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto py-3 px-8 rounded-full btn-pastel-mint text-xs font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Initiate Advisory Request</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${companyData.contact.phone}`}
            className="w-full sm:w-auto py-3 px-8 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/15 backdrop-blur-sm transition-colors flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#B2D1BC]" />
            <span>Direct Line: {companyData.contact.displayPhone}</span>
          </a>
        </div>

        <div className="pt-6 flex items-center justify-center gap-2 text-[11px] text-emerald-100/80 font-light">
          <ShieldCheck className="w-3.5 h-3.5 text-[#8EB99C]" />
          <span>Strict client confidentiality • Direct developer pricing • 0% brokerage</span>
        </div>

      </div>
    </section>
  );
};
