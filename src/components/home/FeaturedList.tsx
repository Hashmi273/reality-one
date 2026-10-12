import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { propertiesData, type Property } from '../../data/propertiesData';
import { PropertyCard } from '../common/PropertyCard';

interface FeaturedListProps {
  onEnquire: (property: Property) => void;
}

export const FeaturedList: React.FC<FeaturedListProps> = ({ onEnquire }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'All Opportunities' },
    { id: 'luxury-homes', label: 'Luxury' },
    { id: 'new-launches', label: 'New Launches' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'investment-opportunities', label: 'Investment' }
  ];

  const filteredProperties = activeTab === 'all'
    ? propertiesData.filter(p => p.isFeatured)
    : propertiesData.filter(p => p.category === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-[#F4F2EB] border-y border-[#E8E3D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A37F47] block">
              Handpicked Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
              Featured Properties
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-light max-w-xl">
              Discover iconic residential addresses and strategic commercial developments across premier micro-markets.
            </p>
          </div>

          {/* Tab switches */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#121820] text-[#DFCA9B] shadow-sm'
                    : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.slice(0, 6).map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onEnquire={onEnquire}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#121820] hover:bg-[#1E293B] text-[#DFCA9B] hover:text-white font-medium text-sm tracking-wide border border-[#C5A880]/30 shadow-md transition-all group"
          >
            <span>Explore All Properties</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
