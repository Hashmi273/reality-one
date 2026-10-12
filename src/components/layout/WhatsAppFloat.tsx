import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyData } from '../../data/companyData';

export const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = `https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(
    companyData.contact.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1E2E21] hover:bg-[#273B2B] text-emerald-400 border border-emerald-500/40 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
      aria-label="Chat with Realty Plus on WhatsApp"
    >
      <div className="w-7 h-7 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
        <MessageCircle className="w-4 h-4 fill-current" />
      </div>
      <span className="text-xs font-semibold tracking-wide text-slate-100 hidden sm:inline-block pr-1">
        WhatsApp Concierge
      </span>
    </a>
  );
};
