import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Home, 
  CheckCircle2, 
  Building2, 
  PhoneCall, 
  ArrowLeft, 
  ShieldCheck, 
  Calendar, 
  Maximize2, 
  Compass, 
  Waves, 
  Dumbbell, 
  Film, 
  Users, 
  Trees, 
  Zap, 
  Car, 
  Coffee, 
  BatteryCharging, 
  Trophy, 
  Heart, 
  Sun, 
  Wine, 
  Share2, 
  Check,
  Award
} from 'lucide-react';
import { propertiesData, type Property } from '../data/propertiesData';
import { companyData } from '../data/companyData';
import { FloorPlanViewer } from '../components/common/FloorPlanViewer';
import { EmiCalculator } from '../components/common/EmiCalculator';

interface PropertyDetailPageProps {
  onOpenEnquiry: (property?: Property) => void;
  onOpenSiteVisit: (property?: Property) => void;
  onSuccessToast: (name: string) => void;
}

export const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({ 
  onOpenEnquiry, 
  onOpenSiteVisit,
  onSuccessToast 
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const property = propertiesData.find((p) => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const [inlineForm, setInlineForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
  }, [slug]);

  if (!property) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F4F8F5] px-4">
        <div className="text-center space-y-4 max-w-md">
          <Building2 className="w-12 h-12 text-[#386146] mx-auto" />
          <h2 className="text-2xl font-serif font-light text-[#193122]">Property Not Found</h2>
          <p className="text-xs text-[#536B5C]">The property you are looking for is either unavailable or has been relocated.</p>
          <Link
            to="/properties"
            className="inline-block py-2.5 px-6 rounded-full btn-pastel-primary text-xs font-medium"
          >
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlineForm.name || !inlineForm.phone) return;
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      onSuccessToast(inlineForm.name);
      setInlineForm({ name: '', phone: '', email: '', message: '' });
    }, 500);
  };

  const renderAmenityIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Waves: <Waves className="w-4 h-4 text-[#386146]" />,
      Wine: <Wine className="w-4 h-4 text-[#386146]" />,
      Dumbbell: <Dumbbell className="w-4 h-4 text-[#386146]" />,
      Film: <Film className="w-4 h-4 text-[#386146]" />,
      Users: <Users className="w-4 h-4 text-[#386146]" />,
      ShieldCheck: <ShieldCheck className="w-4 h-4 text-[#386146]" />,
      Building2: <Building2 className="w-4 h-4 text-[#386146]" />,
      Trophy: <Trophy className="w-4 h-4 text-[#386146]" />,
      Trees: <Trees className="w-4 h-4 text-[#386146]" />,
      Zap: <Zap className="w-4 h-4 text-[#386146]" />,
      Car: <Car className="w-4 h-4 text-[#386146]" />,
      Coffee: <Coffee className="w-4 h-4 text-[#386146]" />,
      BatteryCharging: <BatteryCharging className="w-4 h-4 text-[#386146]" />,
      Heart: <Heart className="w-4 h-4 text-[#386146]" />,
      Sun: <Sun className="w-4 h-4 text-[#386146]" />
    };
    return iconMap[iconName] || <Building2 className="w-4 h-4 text-[#386146]" />;
  };

  return (
    <div className="bg-[#F4F8F5] min-h-screen pb-20">
      
      {/* Breadcrumb & Navigation Bar */}
      <div className="bg-white border-b border-[#DCE7E0] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#536B5C] hover:text-[#193122] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#386146]" />
            <span>Back to listings</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#DCE7E0] text-xs font-medium text-[#536B5C] hover:bg-[#F4F8F5] transition-colors cursor-pointer"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#8EB99C]" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              onClick={() => onOpenSiteVisit(property)}
              className="py-1.5 px-4 rounded-full btn-pastel-primary text-xs font-medium tracking-wide shadow-xs cursor-pointer"
            >
              Book Site Visit
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-0.5 text-[10px] font-medium tracking-wider uppercase rounded-full bg-[#183223] text-emerald-100">
                {property.categoryLabel}
              </span>
              <span className="px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-[#EAF3ED] text-[#193122]">
                {property.status}
              </span>
              {property.reraId && (
                <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-white border border-[#DCE7E0] text-[#536B5C]">
                  MahaRERA: {property.reraId}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#193122] tracking-tight">
              {property.name}
            </h1>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#536B5C] font-light">
              <MapPin className="w-4 h-4 text-[#386146] shrink-0" />
              <span>{property.location}, {property.city} ({property.state})</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#193122] font-medium">{property.developer}</span>
            </div>
          </div>

          {/* Pricing & CTA box */}
          <div className="bg-white p-5 rounded-2xl border border-[#DCE7E0] shadow-xs flex flex-row md:flex-col justify-between items-center md:items-end gap-3 min-w-[260px]">
            <div>
              <span className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider block md:text-right">
                Starting Benchmark Price
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-normal text-[#193122] md:text-right block">
                {property.priceFormatted}
              </span>
            </div>
            <button
              onClick={() => onOpenEnquiry(property)}
              className="w-full py-2.5 px-4 rounded-full btn-pastel-mint text-xs font-semibold tracking-wide shadow-xs transition-all text-center cursor-pointer"
            >
              Get Floor Plans & Brochure
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-emerald-950 shadow-md border border-[#DCE7E0]">
            <img
              src={property.gallery[activeImageIndex] || property.heroImage}
              alt={property.name}
              className="w-full h-full object-cover object-center transition-all duration-500"
            />
          </div>

          {/* Thumbnail list */}
          {property.gallery.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {property.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[16/10] w-24 sm:w-36 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#386146] ring-2 ring-[#8EB99C]/40'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Specs Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white p-6 sm:p-7 rounded-2xl border border-[#DCE7E0] shadow-xs">
          <div className="space-y-1">
            <span className="text-[10px] text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5 font-medium">
              <Home className="w-3.5 h-3.5 text-[#386146]" /> Configuration
            </span>
            <p className="text-sm sm:text-base font-semibold text-[#193122]">{property.configuration}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5 font-medium">
              <Maximize2 className="w-3.5 h-3.5 text-[#386146]" /> Carpet Area
            </span>
            <p className="text-sm sm:text-base font-semibold text-[#193122]">{property.carpetArea}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#386146]" /> Possession Date
            </span>
            <p className="text-sm sm:text-base font-semibold text-[#193122]">{property.possession}</p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5 font-medium">
              <Building2 className="w-3.5 h-3.5 text-[#386146]" /> Property Type
            </span>
            <p className="text-sm sm:text-base font-semibold text-[#193122]">{property.propertyType}</p>
          </div>
        </div>

        {/* Interactive Floor Plan Viewer Section */}
        {property.floorPlans && property.floorPlans.length > 0 && (
          <FloorPlanViewer
            floorPlans={property.floorPlans}
            propertyName={property.name}
            onRequestDossier={() => onOpenEnquiry(property)}
          />
        )}

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Main Details (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Project Overview */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-[#DCE7E0] shadow-xs space-y-4">
              <h2 className="text-2xl font-serif font-normal text-[#193122]">
                Architectural Narrative & Overview
              </h2>
              <p className="text-xs sm:text-sm text-[#536B5C] leading-relaxed font-light">
                {property.overview}
              </p>
            </div>

            {/* Architecture Details Grid */}
            {property.architectureDetails && (
              <div className="bg-[#183223] text-white p-7 sm:p-9 rounded-2xl border border-white/10 shadow-xs space-y-6">
                <div className="flex items-center gap-2 text-[#B2D1BC] text-[10px] font-semibold uppercase tracking-widest">
                  <Award className="w-4 h-4" />
                  <span>Master Architecture Credentials</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#13281C] border border-white/10 space-y-1">
                    <span className="text-emerald-200 text-[10px]">Architect & Design Studio</span>
                    <p className="font-medium text-white">{property.architectureDetails.architect}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#13281C] border border-white/10 space-y-1">
                    <span className="text-emerald-200 text-[10px]">Elevation & Storeys</span>
                    <p className="font-medium text-white">{property.architectureDetails.totalFloors}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#13281C] border border-white/10 space-y-1">
                    <span className="text-emerald-200 text-[10px]">Density Level</span>
                    <p className="font-medium text-white">{property.architectureDetails.density}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#13281C] border border-white/10 space-y-1">
                    <span className="text-emerald-200 text-[10px]">Sustainability Norms</span>
                    <p className="font-medium text-[#CDE6D6]">{property.architectureDetails.greenCover}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Project Highlights */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-[#DCE7E0] shadow-xs space-y-5">
              <h2 className="text-2xl font-serif font-normal text-[#193122]">
                Key Project Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {property.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#536B5C] font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#386146] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-[#DCE7E0] shadow-xs space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-serif font-normal text-[#193122]">
                  Curated Amenities & Lifestyle Suites
                </h2>
                <p className="text-xs text-[#536B5C] font-light">Engineered for elevated comfort, wellness, and recreation.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {property.amenities.map((amenity, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#F4F8F5] border border-[#DCE7E0] flex items-center gap-3 text-xs font-medium text-[#193122]"
                  >
                    <div className="p-1.5 rounded-lg bg-white border border-[#DCE7E0]">
                      {renderAmenityIcon(amenity.icon)}
                    </div>
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Advantages */}
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-[#DCE7E0] shadow-xs space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-serif font-normal text-[#193122]">
                  Location Advantages & Transit Corridors
                </h2>
                <p className="text-xs text-[#536B5C] font-light">Key travel times from {property.name}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {property.locationAdvantages.map((loc, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#F4F8F5] border border-[#DCE7E0] flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2 text-[#193122] font-medium">
                      <Compass className="w-3.5 h-3.5 text-[#386146]" />
                      <span>{loc.place}</span>
                    </div>
                    <span className="font-semibold text-[#386146] px-2.5 py-0.5 bg-white rounded-md border border-[#DCE7E0]">
                      {loc.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Property Mortgage Calculator */}
            <EmiCalculator
              initialPrice={property.priceNumeric}
              onScheduleConsultation={() => onOpenEnquiry(property)}
            />

            {/* Statutory Disclaimer box */}
            <div className="p-5 rounded-2xl bg-[#EAF3ED] border border-[#DCE7E0] text-xs text-[#536B5C] leading-relaxed space-y-1.5 font-light">
              <div className="flex items-center gap-2 text-[#193122] font-semibold uppercase tracking-wider text-[10px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#386146]" />
                <span>Independent Verification Advisory</span>
              </div>
              <p>
                Realty One facilitates discovery and initial enquiry services. Specifications, masterplans, pricing, and possession dates are indicative and subject to changes by {property.developer}. Discerning buyers are advised to review RERA project registrations and developer agreements directly.
              </p>
            </div>

          </div>

          {/* Right Sidebar Form (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Sticky Enquiry Form Card */}
            <div className="bg-[#183223] text-white p-6 sm:p-8 rounded-2xl border border-white/15 shadow-xl sticky top-24 space-y-5">
              <div className="space-y-1 border-b border-white/10 pb-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#B2D1BC] block">
                  Priority Access
                </span>
                <h3 className="text-xl font-serif font-normal text-white">
                  Request Official Brochure
                </h3>
                <p className="text-xs text-emerald-100/70 font-light">
                  Receive verified brochures, master floor plans, and pricing breakdown.
                </p>
              </div>

              <form onSubmit={handleInlineSubmit} className="space-y-3.5">
                <div>
                  <label className="text-[10px] font-medium uppercase text-emerald-200 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={inlineForm.name}
                    onChange={(e) => setInlineForm({ ...inlineForm, name: e.target.value })}
                    className="w-full bg-[#13281C] text-white border border-white/15 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#B2D1BC] font-light"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-medium uppercase text-emerald-200 block mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={inlineForm.phone}
                    onChange={(e) => setInlineForm({ ...inlineForm, phone: e.target.value })}
                    className="w-full bg-[#13281C] text-white border border-white/15 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#B2D1BC] font-light"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-medium uppercase text-emerald-200 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="vikram@example.com"
                    value={inlineForm.email}
                    onChange={(e) => setInlineForm({ ...inlineForm, email: e.target.value })}
                    className="w-full bg-[#13281C] text-white border border-white/15 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#B2D1BC] font-light"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-medium uppercase text-emerald-200 block mb-1">
                    Specific Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Floor preference or investment horizon..."
                    value={inlineForm.message}
                    onChange={(e) => setInlineForm({ ...inlineForm, message: e.target.value })}
                    className="w-full bg-[#13281C] text-white border border-white/15 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-[#B2D1BC] resize-none font-light"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full py-2.5 rounded-full btn-pastel-mint text-xs font-semibold tracking-wide shadow-md transition-all cursor-pointer disabled:opacity-60"
                >
                  {formSubmitting ? 'Processing...' : 'Get Property Dossier'}
                </button>
              </form>

              <div className="pt-2 border-t border-white/10 space-y-2">
                <button
                  onClick={() => onOpenSiteVisit(property)}
                  className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/15 text-emerald-100 text-xs font-medium tracking-wide flex items-center justify-center gap-2 border border-white/15 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#B2D1BC]" />
                  <span>Book Private Valet Visit</span>
                </button>

                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="w-full py-2 px-4 rounded-full bg-white/5 hover:bg-white/10 text-emerald-100 text-xs font-light flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#B2D1BC]" />
                  <span>Direct Desk: {companyData.contact.displayPhone}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
