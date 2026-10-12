import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { propertyCategories } from '../../data/categoriesData';

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F4F8F5] border-b border-[#DCE7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#386146] block">
            Portfolio Verticals
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#193122] tracking-tight">
            Curated Real Estate Categories
          </h2>
          <p className="text-xs sm:text-sm text-[#536B5C] font-light leading-relaxed">
            Distinguished residential towers, private sky estates, integrated retail avenues, and Grade-A commercial spaces.
          </p>
        </div>

        {/* Minimal Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyCategories.map((cat) => {
            return (
              <Link
                key={cat.id}
                to={`/properties?category=${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#DCE7E0] hover:border-[#8EB99C] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#152B1E]/80 via-[#152B1E]/20 to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-white/90 text-[#193122] backdrop-blur-md">
                      {cat.tagline}
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <h3 className="text-2xl font-serif font-normal tracking-normal text-white">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Minimal Link */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-[#536B5C] font-light leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="pt-2 border-t border-[#EAF3ED] flex items-center justify-between text-xs font-medium text-[#193122] group-hover:text-[#386146] transition-colors">
                    <span>Explore Collection</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6B9F7B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
