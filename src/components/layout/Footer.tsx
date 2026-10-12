import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight, Shield } from 'lucide-react';
import { companyData } from '../../data/companyData';
import { propertyCategories } from '../../data/categoriesData';
import { BrandLogo } from '../common/BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14291D] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 inline-block">
              <BrandLogo variant="light" size="md" />
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed pr-4 font-light">
              {companyData.positioning}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(companyData.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 text-xs font-medium transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Advisory</span>
              </a>

              <a
                href={`tel:${companyData.contact.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-100 hover:text-white text-xs font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#B2D1BC]" />
                <span>{companyData.contact.displayPhone}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[#B2D1BC]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link to="/" className="text-emerald-100/70 hover:text-white transition-colors">
                  Curated Collection
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-emerald-100/70 hover:text-white transition-colors">
                  All Developments
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-emerald-100/70 hover:text-white transition-colors">
                  Advisory & Pedigree
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-emerald-100/70 hover:text-white transition-colors">
                  Desk Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-emerald-100/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-emerald-100/70 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Verticals */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[#B2D1BC]">
              Verticals
            </h4>
            <ul className="space-y-2 text-xs font-light">
              {propertyCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/properties?category=${cat.slug}`}
                    className="text-emerald-100/70 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-emerald-400 group-hover:text-[#B2D1BC] transition-colors" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/campaign/new-launch"
                  className="text-[#CDE6D6] font-medium transition-colors flex items-center justify-between group"
                >
                  <span>New Launch Campaigns</span>
                  <ArrowUpRight className="w-3 h-3 text-[#B2D1BC]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Office & Hours */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold tracking-widest uppercase text-[#B2D1BC]">
              Advisory Office & Details
            </h4>
            <div className="space-y-3 text-xs text-emerald-100/70 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#B2D1BC] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {companyData.contact.fullAddress}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] space-y-1">
                <p><span className="text-emerald-200/60">Legal Entity:</span> <strong className="text-white font-medium">{companyData.legalName}</strong></p>
                <p><span className="text-emerald-200/60">Digital Advisory:</span> <strong className="text-[#B2D1BC] font-medium">SKY ROUTE DIGITAL</strong></p>
                <p><span className="text-emerald-200/60">GSTIN:</span> <span className="font-mono text-[#CDE6D6] font-medium">{companyData.gstin}</span></p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#B2D1BC] shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                  {companyData.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#B2D1BC] shrink-0 mt-0.5" />
                <div>
                  <p>{companyData.contact.businessHours}</p>
                  <p className="text-[10px] text-emerald-200/50">{companyData.contact.supportDays}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Box */}
        <div className="my-8 p-4 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] text-emerald-100/70 leading-relaxed flex items-start gap-3">
          <Shield className="w-4 h-4 text-[#B2D1BC] shrink-0 mt-0.5" />
          <p className="font-light">{companyData.disclaimer}</p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/70 pt-4 font-light border-t border-white/5">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} <strong className="text-white font-medium">WAJID MOHD SALEEM NAGANI</strong> — <strong className="text-[#B2D1BC] font-medium">SKY ROUTE DIGITAL</strong>. All rights reserved.
            </p>
            <p className="text-[11px] text-emerald-200/60 font-mono">
              GSTIN: <span className="text-[#CDE6D6] font-medium">{companyData.gstin}</span> | Legal Entity: {companyData.legalName}
            </p>
          </div>
          <div className="flex items-center space-x-6 text-xs text-emerald-200/60">
            <Link to="/privacy-policy" className="hover:text-emerald-100 transition-colors">Privacy</Link>
            <Link to="/terms-and-conditions" className="hover:text-emerald-100 transition-colors">Terms</Link>
            <Link to="/contact-us" className="hover:text-emerald-100 transition-colors">Private Desk</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
