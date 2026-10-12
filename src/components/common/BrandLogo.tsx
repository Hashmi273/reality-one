import React from 'react';
import { Link } from 'react-router-dom';
import logoPng from '../../assets/logo.png';

interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'imageOnly' | 'full';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isLink?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  isLink = true
}) => {
  const imageSizes = {
    sm: 'h-9 w-auto',
    md: 'h-11 sm:h-12 w-auto',
    lg: 'h-16 sm:h-20 w-auto'
  };

  const content = (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      {/* 3D Metallic Emblem from Logo */}
      <div className="relative overflow-hidden shrink-0 flex items-center justify-center">
        <img
          src={logoPng}
          alt="Realty One"
          className={`${imageSizes[size]} object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105`}
        />
      </div>

      {variant !== 'imageOnly' && (
        <div className="flex flex-col">
          {/* Dual-tone Brand Wordmark */}
          <div className="flex items-baseline tracking-tight font-serif font-extrabold leading-none">
            <span className={`${
              variant === 'light' ? 'text-white' : 'text-[#15202B]'
            } text-xl sm:text-2xl tracking-wide`}>
              REALTY
            </span>
            <span className="text-xl sm:text-2xl text-gold-gradient tracking-wide ml-1.5 font-black">
              ONE
            </span>
          </div>

          {/* Signature Tagline with Gold Framing Lines */}
          <div className="flex items-center gap-1.5 mt-1">
            <div className="h-[1px] w-3.5 bg-gradient-to-r from-transparent to-[#C8A355]" />
            <span className="text-[8.5px] sm:text-[9.5px] font-bold tracking-[0.22em] uppercase text-[#C8A355] whitespace-nowrap">
              Discover Your Next Address
            </span>
            <div className="h-[1px] w-3.5 bg-gradient-to-l from-transparent to-[#C8A355]" />
          </div>
        </div>
      )}
    </div>
  );

  if (!isLink) return content;

  return (
    <Link to="/" className="inline-block" aria-label="Realty One Home">
      {content}
    </Link>
  );
};
