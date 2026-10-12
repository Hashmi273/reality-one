import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid, List, MapPin, Home, ArrowUpRight, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { propertiesData, type Property } from '../../data/propertiesData';

interface CuratedPortfolioSectionProps {
  onOpenSiteVisit: (property: Property) => void;
}

export const CuratedPortfolioSection: React.FC<CuratedPortfolioSectionProps> = ({
  onOpenSiteVisit
}) => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const tabs = [
    { id: 'all', label: 'All Developments' },
    { id: 'luxury-homes', label: 'Sky Residences' },
    { id: 'new-launches', label: 'New Flagships' },
    { id: 'commercial', label: 'Commercial HQ' },
    { id: 'residential', label: 'Gated Communities' }
  ];

  const filteredProperties = activeTab === 'all'
    ? propertiesData
    : propertiesData.filter(p => p.category === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-[#EBF3EE] border-y border-[#DCE7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#D2E2D7] pb-8">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#386146] block">
              Architectural Dossier
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#193122] tracking-tight">
              Featured Flagship Portfolios
            </h2>
            <p className="text-xs sm:text-sm text-[#536B5C] font-light leading-relaxed">
              Curated luxury residences, sea-facing penthouses, and commercial spaces with verified MahaRERA compliance certifications.
            </p>
          </div>

          {/* View Mode & Tab Controls */}
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-full border border-[#DCE7E0] flex items-center shadow-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 px-3 rounded-full text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'grid' ? 'bg-[#23412E] text-white' : 'text-[#536B5C] hover:text-[#193122]'
                }`}
                aria-label="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 px-3 rounded-full text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'list' ? 'bg-[#23412E] text-white' : 'text-[#536B5C] hover:text-[#193122]'
                }`}
                aria-label="List View"
              >
                <List className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Tab Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#23412E] text-white shadow-xs'
                  : 'bg-white hover:bg-[#F4F8F5] text-[#536B5C] border border-[#DCE7E0]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Property Render (Grid or List) */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#DCE7E0] hover:border-[#8EB99C] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950">
                    <img
                      src={property.heroImage}
                      alt={property.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#152B1E]/80 via-[#152B1E]/15 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                      <span className="px-2.5 py-0.5 text-[10px] font-medium tracking-wider uppercase rounded-full bg-[#152B1E]/90 text-emerald-100 backdrop-blur-md">
                        {property.categoryLabel}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/90 text-[#193122]">
                        {property.status}
                      </span>
                    </div>

                    {/* Price & Location Overlay */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between z-10 text-white">
                      <div>
                        <span className="text-[10px] text-[#B2D1BC] uppercase tracking-wider block font-medium">Starting from</span>
                        <span className="text-xl font-serif font-medium text-white">
                          {property.priceFormatted}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-emerald-100 block font-light">Possession</span>
                        <span className="text-xs font-medium text-white">{property.possession}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#536B5C] font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#4F805F] shrink-0" />
                      <span className="truncate">{property.location}</span>
                    </div>

                    <h3 className="text-xl font-serif font-normal text-[#193122] group-hover:text-[#386146] transition-colors leading-snug line-clamp-1">
                      <Link to={`/properties/${property.slug}`}>
                        {property.name}
                      </Link>
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-[#193122] bg-[#F4F8F5] p-2 rounded-lg border border-[#DCE7E0]">
                      <Home className="w-3.5 h-3.5 text-[#4F805F] shrink-0" />
                      <span className="font-medium">{property.configuration}</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-[#536B5C] truncate">{property.carpetArea}</span>
                    </div>

                    <p className="text-xs text-[#536B5C] line-clamp-2 leading-relaxed font-light">
                      {property.description}
                    </p>

                    {property.reraId && (
                      <div className="flex items-center gap-1.5 text-[10px] text-[#536B5C] font-mono">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        <span>MahaRERA: {property.reraId}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="px-5 pb-5 pt-2 grid grid-cols-2 gap-2 border-t border-[#EAF3ED]">
                  <Link
                    to={`/properties/${property.slug}`}
                    className="py-2 px-3 rounded-full bg-[#F4F8F5] hover:bg-[#E6F0E9] text-[#193122] text-xs font-medium border border-[#DCE7E0] transition-colors flex items-center justify-center gap-1 text-center"
                  >
                    <span>Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6B9F7B]" />
                  </Link>

                  <button
                    onClick={() => onOpenSiteVisit(property)}
                    className="py-2 px-3 rounded-full btn-pastel-primary text-xs font-medium transition-all flex items-center justify-center gap-1 text-center cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Site Visit</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List / Editorial View */
          <div className="space-y-4">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-2xl border border-[#DCE7E0] hover:border-[#8EB99C] overflow-hidden transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-4 relative aspect-[16/10] lg:aspect-auto bg-emerald-950">
                  <img
                    src={property.heroImage}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-medium uppercase rounded-full bg-[#152B1E]/90 text-emerald-100">
                      {property.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-1.5 text-xs text-[#536B5C] font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#4F805F]" />
                        <span>{property.location}</span>
                      </div>
                      <span className="text-2xl font-serif font-normal text-[#193122]">
                        {property.priceFormatted}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-normal text-[#193122]">
                      <Link to={`/properties/${property.slug}`} className="hover:text-[#386146] transition-colors">
                        {property.name}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#536B5C] font-light leading-relaxed">
                      {property.overview}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2 text-xs text-[#193122]">
                      <div className="px-3 py-1 bg-[#F4F8F5] rounded-full border border-[#DCE7E0]">
                        <strong>Configuration:</strong> {property.configuration}
                      </div>
                      <div className="px-3 py-1 bg-[#F4F8F5] rounded-full border border-[#DCE7E0]">
                        <strong>Carpet Area:</strong> {property.carpetArea}
                      </div>
                      <div className="px-3 py-1 bg-[#F4F8F5] rounded-full border border-[#DCE7E0]">
                        <strong>Possession:</strong> {property.possession}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#EAF3ED]">
                    <Link
                      to={`/properties/${property.slug}`}
                      className="py-2 px-5 rounded-full btn-pastel-outline text-xs font-medium flex items-center gap-1.5"
                    >
                      <span>Explore Showcase</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => onOpenSiteVisit(property)}
                      className="py-2 px-5 rounded-full btn-pastel-primary text-xs font-medium cursor-pointer"
                    >
                      <span>Schedule Site Walkthrough</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
