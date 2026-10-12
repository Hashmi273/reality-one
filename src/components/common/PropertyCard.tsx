import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, ArrowUpRight, MessageSquareCheck } from 'lucide-react';
import type { Property } from '../../data/propertiesData';

interface PropertyCardProps {
  property: Property;
  onEnquire: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onEnquire }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#DCE7E0] hover:border-[#8EB99C] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md">
      <div>
        {/* Card Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950">
          <img
            src={property.heroImage}
            alt={property.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#152B1E]/75 via-[#152B1E]/10 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            <span className="px-2.5 py-0.5 text-[10px] font-medium uppercase rounded-full bg-[#152B1E]/90 text-emerald-100 backdrop-blur-md">
              {property.categoryLabel}
            </span>
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/90 text-[#193122]">
              {property.status}
            </span>
          </div>

          {/* Price Overlay */}
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between z-10">
            <div>
              <span className="text-[10px] text-[#B2D1BC] uppercase tracking-wider block font-medium">Starting Price</span>
              <span className="text-xl font-serif font-normal text-white">
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
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-5 pb-5 pt-2 grid grid-cols-2 gap-2 border-t border-[#EAF3ED]">
        <Link
          to={`/properties/${property.slug}`}
          className="py-2 px-3 rounded-full bg-[#F4F8F5] hover:bg-[#E6F0E9] text-[#193122] text-xs font-medium border border-[#DCE7E0] transition-colors flex items-center justify-center gap-1 text-center"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#6B9F7B]" />
        </Link>

        <button
          onClick={() => onEnquire(property)}
          className="py-2 px-3 rounded-full btn-pastel-primary text-xs font-medium transition-all flex items-center justify-center gap-1 text-center cursor-pointer"
        >
          <MessageSquareCheck className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
};
