import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Building, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { propertyCategories } from '../../data/categoriesData';

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedLocation) params.set('location', selectedLocation);
    if (selectedBudget) params.set('budget', selectedBudget);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0E14]">
      {/* Background Image with Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Multilayered Luxury Navy-Charcoal Vignette and Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D141C]/95 via-[#0D141C]/80 to-[#0D141C]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D141C] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Tagline Badge with Signature Gold Lines */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#15202B]/90 backdrop-blur-md border border-[#C8A355]/40 text-[#E5C378] text-xs font-bold uppercase tracking-widest shadow-lg">
            <div className="w-2 h-2 rounded-full bg-[#C8A355] animate-ping" />
            <span>Curated Real-Estate Discovery Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
            Discover Your <br className="hidden sm:block" />
            <span className="text-gold-gradient italic font-normal">Next Address</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            Explore premium residential, luxury sky mansions, and Grade-A commercial real-estate opportunities across India’s most sought-after locations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <Link
              to="/properties"
              className="py-3.5 px-7 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-2xl hover:opacity-95 transition-all flex items-center justify-center gap-2 text-center border border-[#C8A355]/30"
            >
              <span>Explore Properties</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              onClick={onOpenEnquiry}
              className="py-3.5 px-7 rounded-xl bg-[#15202B]/80 hover:bg-[#15202B] text-slate-100 font-semibold text-xs sm:text-sm tracking-wide border border-[#C8A355]/40 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Get Property Details</span>
            </button>
          </div>
        </div>

        {/* Quick Search & Filter Console */}
        <div className="mt-12 sm:mt-16 bg-[#15202B]/95 backdrop-blur-xl border border-[#C8A355]/30 rounded-3xl p-5 sm:p-7 shadow-2xl max-w-5xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#E5C378] tracking-widest uppercase mb-4">
            <SlidersHorizontal className="w-4 h-4 text-[#C8A355]" />
            <span>Instant Opportunity Finder</span>
          </div>

          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Category */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                <Building className="w-3 h-3 text-[#C8A355]" /> Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#0D141C] text-slate-200 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#C8A355]"
              >
                <option value="">All Categories</option>
                {propertyCategories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C8A355]" /> Location / City
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#0D141C] text-slate-200 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#C8A355]"
              >
                <option value="">All Metros</option>
                <option value="Mumbai">Mumbai (Worli, BKC, South Mumbai)</option>
                <option value="Gurugram">Gurugram (Golf Course Rd & Ext)</option>
                <option value="Bengaluru">Bengaluru (Whitefield, Outer Ring)</option>
                <option value="Hyderabad">Hyderabad (Kokapet, Financial Dist)</option>
                <option value="Chennai">Chennai (ECR Coastal)</option>
              </select>
            </div>

            {/* Budget */}
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                Budget Range
              </label>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full bg-[#0D141C] text-slate-200 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#C8A355]"
              >
                <option value="">Any Budget</option>
                <option value="2-5">₹ 2 Cr – ₹ 5 Cr</option>
                <option value="5-10">₹ 5 Cr – ₹ 10 Cr</option>
                <option value="10+">₹ 10 Cr+ (Ultra Luxury)</option>
              </select>
            </div>

            {/* Search Submit */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-gold-gradient hover:opacity-95 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg h-[44px] border border-[#C8A355]/30"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
