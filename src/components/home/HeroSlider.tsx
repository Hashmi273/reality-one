import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Building2, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { propertyCategories } from '../../data/categoriesData';
import { propertiesData, type Property } from '../../data/propertiesData';

interface HeroSliderProps {
  onOpenEnquiry?: (property?: Property) => void;
  onOpenSiteVisit: (property?: Property) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenSiteVisit }) => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  const featuredSlides = propertiesData.slice(0, 4);
  const currentProperty = featuredSlides[activeSlide] || featuredSlides[0];

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
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#152B1E] text-white overflow-hidden">
      {/* Background Architectural Canvas */}
      <div className="absolute inset-0 z-0">
        <img
          key={currentProperty.id}
          src={currentProperty.heroImage}
          alt={currentProperty.name}
          className="w-full h-full object-cover object-center transition-all duration-1000 ease-out brightness-[0.72] contrast-[1.05]"
        />
        {/* Pastel & Botanical Forest Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#152B1E] via-[#152B1E]/65 to-[#0F2015]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#152B1E]/90 via-[#152B1E]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full flex flex-col justify-between min-h-[85vh]">
        
        {/* Top Minimal Trust Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-white/15 pb-4">
          <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-[#B2D1BC] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#B2D1BC]" />
            <span>Private Real Estate Advisory & Portfolio Desk</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-emerald-100 font-light hidden sm:flex">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#8EB99C]" /> MahaRERA Verified Developments</span>
            <span>•</span>
            <span>0% Brokerage on Primary Developer Launches</span>
          </div>
        </div>

        {/* Middle Hero Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end my-auto py-10">
          
          {/* Left Main Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#B2D1BC] font-medium block">
                {currentProperty.categoryLabel} • {currentProperty.location}
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#F4F8F5] leading-[1.08] tracking-tight">
                Architectural <br />
                <span className="italic font-normal text-[#CDE6D6]">Distinction.</span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-emerald-100 font-light max-w-xl leading-relaxed">
              {currentProperty.name} — {currentProperty.tagline}. Featuring {currentProperty.configuration} residences starting at <span className="text-white font-semibold">{currentProperty.priceFormatted}</span>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to={`/properties/${currentProperty.slug}`}
                className="py-3 px-6 rounded-full btn-pastel-mint text-xs font-semibold tracking-wide flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Explore Residence</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => onOpenSiteVisit(currentProperty)}
                className="py-3 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium tracking-wide border border-white/20 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Reserve Private Walkthrough</span>
              </button>
            </div>
          </div>

          {/* Right Spotlight Thumbnails (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-emerald-200 font-medium pb-1">
              <span>Curated Selection</span>
              <span className="font-mono text-[#B2D1BC]">0{activeSlide + 1} / 0{featuredSlides.length}</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {featuredSlides.map((prop, idx) => (
                <button
                  key={prop.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`p-3 rounded-xl text-left transition-all duration-300 border cursor-pointer backdrop-blur-md ${
                    activeSlide === idx
                      ? 'bg-[#23412E]/85 border-[#B2D1BC] ring-1 ring-[#B2D1BC]/60 shadow-lg'
                      : 'bg-[#152B1E]/60 border-white/10 hover:bg-[#1E3A28]/80 opacity-80 hover:opacity-100'
                  }`}
                >
                  <span className="text-[10px] text-[#B2D1BC] font-mono block uppercase">
                    {prop.city}
                  </span>
                  <p className="text-sm font-serif font-normal text-white truncate mt-0.5">
                    {prop.name}
                  </p>
                  <span className="text-[11px] text-emerald-100 font-sans block mt-0.5">
                    {prop.priceFormatted}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Minimal Search Console */}
        <div className="bg-[#1E3A28]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-medium text-emerald-200 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3 h-3 text-[#B2D1BC]" /> Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#152B1E] text-emerald-100 border border-white/15 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#B2D1BC]"
              >
                <option value="">All Categories</option>
                {propertyCategories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-medium text-emerald-200 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[#B2D1BC]" /> City / Micro-Market
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#152B1E] text-emerald-100 border border-white/15 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#B2D1BC]"
              >
                <option value="">All Micro-Markets</option>
                <option value="Mumbai">Mumbai (Worli, BKC, Bandra, Andheri)</option>
                <option value="Gurugram">Gurugram (Golf Course Road & Ext)</option>
                <option value="Bengaluru">Bengaluru (Whitefield, Indiranagar)</option>
                <option value="Hyderabad">Hyderabad (Kokapet, Financial Dist)</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-medium text-emerald-200 uppercase tracking-wider">
                Investment Bracket
              </label>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full bg-[#152B1E] text-emerald-100 border border-white/15 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#B2D1BC]"
              >
                <option value="">All Price Brackets</option>
                <option value="2-5">₹ 2 Cr – ₹ 5 Cr</option>
                <option value="5-10">₹ 5 Cr – ₹ 10 Cr</option>
                <option value="10+">₹ 10 Cr+ (Signature Estates)</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg btn-pastel-mint text-xs font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer h-[38px]"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Portfolio</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
