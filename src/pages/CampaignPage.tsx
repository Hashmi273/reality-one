import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Download 
} from 'lucide-react';
import { campaignsData } from '../data/campaignsData';
import { propertiesData, type Property } from '../data/propertiesData';

interface CampaignPageProps {
  onSuccessToast: (name: string) => void;
  onOpenEnquiry: (property?: Property, campaignTitle?: string) => void;
}

export const CampaignPage: React.FC<CampaignPageProps> = ({ onSuccessToast, onOpenEnquiry }) => {
  const { campaignSlug } = useParams<{ campaignSlug: string }>();
  const campaign = campaignsData[campaignSlug || 'luxury-homes'] || campaignsData['luxury-homes'];
  
  const featuredProp = propertiesData.find(p => p.slug === campaign.featuredPropertySlug) || propertiesData[0];

  const [leadForm, setLeadForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    budget: '₹ 2 Cr – ₹ 5 Cr'
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [campaignSlug]);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.fullName || !leadForm.phone) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSuccessToast(leadForm.fullName);
      setLeadForm({ fullName: '', phone: '', email: '', budget: '₹ 2 Cr – ₹ 5 Cr' });
    }, 600);
  };

  return (
    <div className="bg-[#FAF9F5] min-h-screen pb-20">
      
      {/* Campaign Hero Banner */}
      <section className="relative min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center bg-[#0C1118] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={campaign.heroImage}
            alt={campaign.headline}
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 text-[#DFCA9B] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{campaign.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                {campaign.headline}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
                {campaign.subheadline}
              </p>

              {campaign.exclusiveOffer && (
                <div className="p-4 rounded-xl bg-[#1B2330]/90 border border-[#C5A880]/30 text-xs sm:text-sm text-[#DFCA9B] flex items-center gap-3">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>{campaign.exclusiveOffer}</span>
                </div>
              )}
            </div>

            {/* Right Fast Lead Capture Form (5 cols) */}
            <div className="lg:col-span-5 bg-[#141C26]/95 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl space-y-4">
              <div className="border-b border-slate-800 pb-3">
                <h3 className="text-xl font-serif font-bold text-white">
                  Fast Campaign Registration
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Receive priority invitations, floor layouts & price sheets.
                </p>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-3.5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={leadForm.fullName}
                    onChange={(e) => setLeadForm({ ...leadForm, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number *"
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <select
                    value={leadForm.budget}
                    onChange={(e) => setLeadForm({ ...leadForm, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-[#C5A880]"
                  >
                    <option value="₹ 2 Cr – ₹ 5 Cr">₹ 2 Cr – ₹ 5 Cr</option>
                    <option value="₹ 5 Cr – ₹ 10 Cr">₹ 5 Cr – ₹ 10 Cr</option>
                    <option value="₹ 10 Cr+ (Ultra Luxury)">₹ 10 Cr+ (Ultra Luxury)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-4 rounded-lg bg-gold-gradient text-slate-950 font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:opacity-95 transition-all cursor-pointer"
                >
                  {submitting ? 'Submitting...' : 'Register for Early Access'}
                </button>
              </form>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct developer coordinator assistance • Zero spam</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Campaign Sections Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Campaign Value Propositions */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A37F47] block">
              Strategic Highlights
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-900">
              Why This Opportunity Stands Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campaign.keyBenefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5DFD5] shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E5DFD5] flex items-center justify-center text-[#A37F47]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Project Spotlight Card */}
        <div className="bg-white rounded-3xl border border-[#E5DFD5] overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-12">
          
          <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto bg-slate-950">
            <img
              src={featuredProp.heroImage}
              alt={featuredProp.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#121820]/90 text-[#DFCA9B] rounded-md backdrop-blur-md">
                Campaign Marquee Project
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-1.5 text-xs text-[#A37F47] font-semibold">
                <MapPin className="w-4 h-4" />
                <span>{featuredProp.location}, {featuredProp.city}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                {featuredProp.name}
              </h3>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E8E3D8] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Starting Benchmark</span>
                  <span className="font-serif font-bold text-slate-900 text-base">{featuredProp.priceFormatted}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Configuration</span>
                  <span className="font-semibold text-slate-800">{featuredProp.configuration}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Possession</span>
                  <span className="font-medium text-slate-700">{featuredProp.possession}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {featuredProp.overview}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to={`/properties/${featuredProp.slug}`}
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#121820] text-[#DFCA9B] hover:text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2"
              >
                <span>View Full Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => onOpenEnquiry(featuredProp, campaign.headline)}
                className="w-full sm:w-auto py-3 px-5 rounded-xl bg-gold-gradient text-slate-950 text-xs font-semibold tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Get Campaign Kit</span>
              </button>
            </div>

          </div>

        </div>

        {/* Gallery Grid */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A37F47] block">
              Visual Dossier
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Architectural Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {campaign.gallery.map((img, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-sm border border-[#E5DFD5]">
                <img
                  src={img}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Campaign Switcher Links */}
        <div className="p-6 bg-white rounded-2xl border border-[#E5DFD5] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <Building2 className="w-4 h-4 text-[#A37F47]" />
            <span>Other Active Campaigns:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.values(campaignsData).map((c) => (
              <Link
                key={c.slug}
                to={`/campaign/${c.slug}`}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  c.slug === campaign.slug
                    ? 'bg-[#121820] text-[#DFCA9B]'
                    : 'bg-[#FAF9F5] text-slate-700 hover:bg-[#F2EFE8] border border-slate-200'
                }`}
              >
                {c.badge}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
