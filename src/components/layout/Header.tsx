import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';
import { companyData } from '../../data/companyData';
import { BrandLogo } from '../common/BrandLogo';

interface HeaderProps {
  onOpenEnquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Curated Residences', path: '/' },
    { name: 'All Properties', path: '/properties' },
    { name: 'Private Advisory', path: '/about-us' },
    { name: 'Desk Contact', path: '/contact-us' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-pastel shadow-xs py-3'
          : 'bg-[#F4F8F5] border-b border-[#DCE7E0] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Authentic Brand Logo */}
          <BrandLogo variant="dark" size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all ${
                  isActive(link.path)
                    ? 'text-[#193122] bg-[#E6F0E9] font-semibold shadow-xs'
                    : 'text-[#536B5C] hover:text-[#193122] hover:bg-[#EAF3ED]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Direct Private Desk Hotline & CTA */}
          <div className="hidden md:flex items-center space-x-3.5">
            <a
              href={`tel:${companyData.contact.phone}`}
              className="flex items-center gap-2 text-xs font-medium text-[#536B5C] hover:text-[#193122] px-3.5 py-1.5 rounded-full bg-[#EAF3ED] border border-[#DCE7E0] transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#4F805F]" />
              <span className="font-mono text-[11px]">{companyData.contact.displayPhone}</span>
            </a>

            <button
              onClick={onOpenEnquiry}
              className="py-2.5 px-5 rounded-full btn-pastel-primary text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <span>Private Advisory</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenEnquiry}
              className="py-1.5 px-3 rounded-full btn-pastel-primary text-[11px] font-semibold tracking-wide"
            >
              Enquire
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#193122] hover:bg-[#E6F0E9] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F8F5] border-b border-[#DCE7E0] px-5 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#193122] font-semibold bg-[#E6F0E9]'
                    : 'text-[#536B5C] hover:text-[#193122] hover:bg-[#EAF3ED]'
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8EB99C]" />
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#DCE7E0] space-y-2.5">
            <a
              href={`tel:${companyData.contact.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#EAF3ED] border border-[#DCE7E0] text-[#193122] text-xs font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#4F805F]" />
              <span>Desk: {companyData.contact.displayPhone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3 rounded-full btn-pastel-primary text-xs font-semibold tracking-wide text-center cursor-pointer"
            >
              Schedule Private Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
