import React, { useState, useEffect } from 'react';
import { X, Send, ShieldCheck, PhoneCall, Building2, User, Mail, MapPin } from 'lucide-react';
import type { Property } from '../../data/propertiesData';
import { BrandLogo } from './BrandLogo';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  property?: Property | null;
  campaignTitle?: string;
  onSuccess: (name: string) => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  property,
  campaignTitle,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    preferredLocation: '',
    propertyType: 'Residential Apartment',
    budget: '₹ 2 Cr – ₹ 5 Cr',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (property) {
      setFormData(prev => ({
        ...prev,
        preferredLocation: property.city,
        propertyType: property.propertyType,
        message: `I would like to enquire about ${property.name} (${property.location}). Please share floor plans, brochure and pricing details.`
      }));
    } else if (campaignTitle) {
      setFormData(prev => ({
        ...prev,
        message: `I am interested in ${campaignTitle}. Please share full project details.`
      }));
    }
  }, [property, campaignTitle]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.mobile.trim()) {
      errs.mobile = 'Please enter your mobile number';
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.mobile.trim())) {
      errs.mobile = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(formData.fullName);
      onClose();
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        preferredLocation: '',
        propertyType: 'Residential Apartment',
        budget: '₹ 2 Cr – ₹ 5 Cr',
        message: ''
      });
      setErrors({});
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F2015]/75 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#DCE7E0] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon with BrandLogo */}
        <div className="bg-[#183223] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <BrandLogo variant="light" size="sm" isLink={false} />
            <h3 className="text-sm font-serif font-normal text-emerald-100 mt-2">
              {property ? `Enquire for ${property.name}` : campaignTitle ? `Enquire for ${campaignTitle}` : 'Get Property Details'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-200 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto bg-[#F4F8F5]">
          {property && (
            <div className="bg-[#EAF3ED] p-3.5 rounded-xl flex items-center gap-3 border border-[#DCE7E0] text-xs text-[#193122]">
              <Building2 className="w-4 h-4 text-[#386146] shrink-0" />
              <div>
                <span className="font-semibold text-[#193122]">{property.name}</span> • {property.location} ({property.priceFormatted})
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Full Name */}
            <div className="space-y-1 sm:col-span-2">
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#386146]" /> Full Name *
              </label>
              <input
                type="text"
                placeholder="e.g. Vikramaditya Singhania"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-white text-[#193122] focus:outline-none focus:border-[#6B9F7B] transition-all font-light ${
                  errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#DCE7E0]'
                }`}
              />
              {errors.fullName && <p className="text-[10px] text-red-600">{errors.fullName}</p>}
            </div>

            {/* Mobile Number */}
            <div className="space-y-1">
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-[#386146]" /> Mobile Number *
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-white text-[#193122] focus:outline-none focus:border-[#6B9F7B] transition-all font-light ${
                  errors.mobile ? 'border-red-500 bg-red-50/20' : 'border-[#DCE7E0]'
                }`}
              />
              {errors.mobile && <p className="text-[10px] text-red-600">{errors.mobile}</p>}
            </div>

            {/* Email Address */}
            <div className="space-y-1">
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#386146]" /> Email Address *
              </label>
              <input
                type="email"
                placeholder="vikram@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-white text-[#193122] focus:outline-none focus:border-[#6B9F7B] transition-all font-light ${
                  errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#DCE7E0]'
                }`}
              />
              {errors.email && <p className="text-[10px] text-red-600">{errors.email}</p>}
            </div>

            {/* Preferred Location */}
            <div className="space-y-1">
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#386146]" /> Preferred Location
              </label>
              <select
                value={formData.preferredLocation}
                onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#DCE7E0] text-xs bg-white text-[#193122] focus:outline-none focus:border-[#6B9F7B]"
              >
                <option value="">Any Metro Location</option>
                <option value="Mumbai">Mumbai (Worli, BKC, South Mumbai)</option>
                <option value="Gurugram">Gurugram (Golf Course Rd & Ext)</option>
                <option value="Bengaluru">Bengaluru (Whitefield, Indiranagar)</option>
                <option value="Hyderabad">Hyderabad (Kokapet, Financial Dist)</option>
                <option value="Pune">Pune (Koregaon Park, Viman Nagar)</option>
              </select>
            </div>

            {/* Budget */}
            <div className="space-y-1">
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider">
                Target Budget
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-[#DCE7E0] text-xs bg-white text-[#193122] focus:outline-none focus:border-[#6B9F7B]"
              >
                <option value="₹ 1.5 Cr – ₹ 3 Cr">₹ 1.5 Cr – ₹ 3 Cr</option>
                <option value="₹ 3 Cr – ₹ 6 Cr">₹ 3 Cr – ₹ 6 Cr</option>
                <option value="₹ 6 Cr – ₹ 12 Cr">₹ 6 Cr – ₹ 12 Cr</option>
                <option value="₹ 12 Cr+ (Ultra Luxury)">₹ 12 Cr+ (Ultra Luxury)</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1 sm:col-span-2">
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider">
                Specific Requirements / Questions
              </label>
              <textarea
                rows={2}
                placeholder="Share your preferred configuration, floor preference, or investment timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-[#DCE7E0] text-xs bg-white text-[#193122] focus:outline-none focus:border-[#6B9F7B] resize-none font-light"
              ></textarea>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-full btn-pastel-primary text-xs font-semibold tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {isSubmitting ? (
                <span>Submitting Request...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Property Dossier</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2 border-t border-[#DCE7E0] flex items-center justify-center gap-1.5 text-[10px] text-[#536B5C] text-center font-light">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Your inquiry is confidential and shared exclusively with certified project directors.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
