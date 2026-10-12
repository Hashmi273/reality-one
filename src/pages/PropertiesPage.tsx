import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, RotateCcw, Building2 } from 'lucide-react';
import { propertiesData, type Property } from '../data/propertiesData';
import { propertyCategories } from '../data/categoriesData';
import { PropertyCard } from '../components/common/PropertyCard';

interface PropertiesPageProps {
  onOpenEnquiry: (property?: Property) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({ onOpenEnquiry }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [propertyType, setPropertyType] = useState(searchParams.get('type') || '');
  const [budget, setBudget] = useState(searchParams.get('budget') || '');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

  useEffect(() => {
    setCategory(searchParams.get('category') || '');
    setLocation(searchParams.get('location') || '');
    setPropertyType(searchParams.get('type') || '');
    setBudget(searchParams.get('budget') || '');
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const updateFilters = (newFilters: { [key: string]: string }) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newFilters).forEach(([key, val]) => {
      if (val) {
        params.set(key, val);
      } else {
        params.delete(key);
      }
    });
    setSearchParams(params);
  };

  const handleReset = () => {
    setCategory('');
    setLocation('');
    setPropertyType('');
    setBudget('');
    setSearchQuery('');
    setSearchParams(new URLSearchParams());
  };

  const filteredProperties = propertiesData.filter((item) => {
    if (category && item.category !== category) return false;
    if (location && !item.city.toLowerCase().includes(location.toLowerCase()) && !item.location.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }
    if (propertyType && item.propertyType !== propertyType) return false;
    
    if (budget === '2-5' && (item.priceNumeric < 2 || item.priceNumeric > 5)) return false;
    if (budget === '5-10' && (item.priceNumeric < 5 || item.priceNumeric > 10)) return false;
    if (budget === '10+' && item.priceNumeric < 10) return false;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchLoc = item.location.toLowerCase().includes(q);
      const matchCity = item.city.toLowerCase().includes(q);
      const matchConfig = item.configuration.toLowerCase().includes(q);
      if (!matchName && !matchLoc && !matchCity && !matchConfig) return false;
    }

    return true;
  });

  return (
    <div className="bg-[#F4F8F5] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Page Header */}
        <div className="border-b border-[#DCE7E0] pb-8 space-y-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#386146] block">
            The Complete Dossier
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#193122] tracking-tight">
            Curated Real Estate Portfolio
          </h1>
          <p className="text-xs sm:text-sm text-[#536B5C] font-light max-w-2xl leading-relaxed">
            Discover verified luxury residential towers, private penthouses, and Grade-A commercial headquarters across metropolitan micro-markets.
          </p>
        </div>

        {/* Minimal Search & Filter Console */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#DCE7E0] shadow-xs space-y-4">
          
          {/* Top Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#8EB99C] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by development, micro-market, city or layout (e.g. Worli, 4 BHK, Transcon)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                updateFilters({ q: e.target.value });
              }}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-[#DCE7E0] text-xs focus:outline-none focus:border-[#6B9F7B] text-[#193122] placeholder:text-[#8EB99C] font-light bg-[#F4F8F5]"
            />
          </div>

          {/* Filter Selectors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            
            {/* Category Filter */}
            <div>
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider block mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  updateFilters({ category: e.target.value });
                }}
                className="w-full bg-[#F4F8F5] border border-[#DCE7E0] text-[#193122] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#6B9F7B]"
              >
                <option value="">All Categories</option>
                {propertyCategories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider block mb-1">
                City / Micro-Market
              </label>
              <select
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  updateFilters({ location: e.target.value });
                }}
                className="w-full bg-[#F4F8F5] border border-[#DCE7E0] text-[#193122] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#6B9F7B]"
              >
                <option value="">All Cities</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Gurugram">Gurugram</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>

            {/* Property Type Filter */}
            <div>
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider block mb-1">
                Development Typology
              </label>
              <select
                value={propertyType}
                onChange={(e) => {
                  setPropertyType(e.target.value);
                  updateFilters({ type: e.target.value });
                }}
                className="w-full bg-[#F4F8F5] border border-[#DCE7E0] text-[#193122] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#6B9F7B]"
              >
                <option value="">All Typologies</option>
                <option value="Apartment">Sky Apartment</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Villa">Gated Villa</option>
                <option value="Commercial Office">Commercial Suite</option>
              </select>
            </div>

            {/* Budget Filter */}
            <div>
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider block mb-1">
                Investment Bracket
              </label>
              <select
                value={budget}
                onChange={(e) => {
                  setBudget(e.target.value);
                  updateFilters({ budget: e.target.value });
                }}
                className="w-full bg-[#F4F8F5] border border-[#DCE7E0] text-[#193122] rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-[#6B9F7B]"
              >
                <option value="">All Price Brackets</option>
                <option value="2-5">₹ 2 Cr – ₹ 5 Cr</option>
                <option value="5-10">₹ 5 Cr – ₹ 10 Cr</option>
                <option value="10+">₹ 10 Cr+ (Signature Estates)</option>
              </select>
            </div>

          </div>

          {/* Active Filter Summary & Reset Bar */}
          <div className="flex items-center justify-between pt-3 border-t border-[#EAF3ED] text-xs">
            <span className="text-[#536B5C] font-light">
              Showing <strong className="text-[#193122] font-semibold">{filteredProperties.length}</strong> verified developments
            </span>

            {(category || location || propertyType || budget || searchQuery) && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-[#536B5C] hover:text-red-700 font-medium transition-colors cursor-pointer text-xs"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Property Grid Results */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onEnquire={(prop) => onOpenEnquiry(prop)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl border border-[#DCE7E0] text-center max-w-md mx-auto space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#EAF3ED] border border-[#DCE7E0] text-[#386146] flex items-center justify-center mx-auto">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-normal text-[#193122]">
              No Developments Match Criteria
            </h3>
            <p className="text-xs text-[#536B5C] leading-relaxed font-light">
              Adjust your search filters or contact our advisory desk for private off-market listings.
            </p>
            <button
              onClick={handleReset}
              className="py-2 px-5 rounded-full btn-pastel-primary text-xs font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
