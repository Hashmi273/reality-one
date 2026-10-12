import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  ShieldCheck, 
  User, 
  Building 
} from 'lucide-react';
import { companyData } from '../data/companyData';

interface ContactPageProps {
  onSuccessToast: (name: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onSuccessToast }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    preferredLocation: 'Mumbai',
    propertyType: 'Residential Apartment',
    budget: '₹ 2 Cr – ₹ 5 Cr',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile Number is required';
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.mobile.trim())) {
      errs.mobile = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
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
      onSuccessToast(formData.fullName);
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        preferredLocation: 'Mumbai',
        propertyType: 'Residential Apartment',
        budget: '₹ 2 Cr – ₹ 5 Cr',
        message: ''
      });
      setErrors({});
    }, 500);
  };

  return (
    <div className="bg-[#F4F8F5] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#386146] block">
            Private Client Engagement Desk
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-[#193122] tracking-tight">
            Contact Advisory Desk
          </h1>
          <p className="text-xs sm:text-sm text-[#536B5C] font-light max-w-2xl leading-relaxed">
            Connect with our residential portfolio directors for verified architectural dossiers, floor plan walk-throughs, or private site coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-[#DCE7E0] space-y-6 shadow-xs">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#193122]">
                Submit Portfolio Brief
              </h2>
              <p className="text-xs text-[#536B5C] font-light mt-1">
                Share your spatial and investment requirements for tailored recommendations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#386146]" /> Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Aditya Vardhan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-[#F4F8F5] text-[#193122] focus:outline-none focus:border-[#6B9F7B] transition-all font-light ${
                    errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#DCE7E0]'
                  }`}
                />
                {errors.fullName && <p className="text-[10px] text-red-600">{errors.fullName}</p>}
              </div>

              {/* Mobile and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#386146]" /> Mobile Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-[#F4F8F5] text-[#193122] focus:outline-none focus:border-[#6B9F7B] transition-all font-light ${
                      errors.mobile ? 'border-red-500 bg-red-50/20' : 'border-[#DCE7E0]'
                    }`}
                  />
                  {errors.mobile && <p className="text-[10px] text-red-600">{errors.mobile}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#386146]" /> Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="aditya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs bg-[#F4F8F5] text-[#193122] focus:outline-none focus:border-[#6B9F7B] transition-all font-light ${
                      errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#DCE7E0]'
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-red-600">{errors.email}</p>}
                </div>
              </div>

              {/* Location & Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#386146]" /> Target Micro-Market
                  </label>
                  <select
                    value={formData.preferredLocation}
                    onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#DCE7E0] text-xs bg-[#F4F8F5] text-[#193122] focus:outline-none focus:border-[#6B9F7B]"
                  >
                    <option value="Mumbai">Mumbai (Worli, BKC, Bandra, Andheri)</option>
                    <option value="Gurugram">Gurugram (Golf Course Road & Ext)</option>
                    <option value="Bengaluru">Bengaluru (Whitefield, Indiranagar)</option>
                    <option value="Hyderabad">Hyderabad (Kokapet, Financial Dist)</option>
                    <option value="Pune">Pune (Koregaon Park, Viman Nagar)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#386146]" /> Development Typology
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#DCE7E0] text-xs bg-[#F4F8F5] text-[#193122] focus:outline-none focus:border-[#6B9F7B]"
                  >
                    <option value="Residential Apartment">Sky Apartment</option>
                    <option value="Luxury Sky Mansion">Penthouse / Sky Duplex</option>
                    <option value="Private Villa">Private Gated Estate</option>
                    <option value="Commercial Office Space">Commercial Grade-A Office</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-1">
                <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider">
                  Target Investment Bracket
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#DCE7E0] text-xs bg-[#F4F8F5] text-[#193122] focus:outline-none focus:border-[#6B9F7B]"
                >
                  <option value="₹ 2 Cr – ₹ 5 Cr">₹ 2 Cr – ₹ 5 Cr</option>
                  <option value="₹ 5 Cr – ₹ 10 Cr">₹ 5 Cr – ₹ 10 Cr</option>
                  <option value="₹ 10 Cr+ (Ultra Luxury)">₹ 10 Cr+ (Signature Estates)</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider">
                  Specific Spatial Requirements / Remarks
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details regarding preferred floor height, view orientation, or possession timelines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE7E0] text-xs bg-[#F4F8F5] text-[#193122] focus:outline-none focus:border-[#6B9F7B] resize-none font-light"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-full btn-pastel-primary text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Advisory Brief</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#536B5C] text-center pt-1 font-light">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Strict confidentiality. Direct developer communication only.</span>
              </div>
            </form>
          </div>

          {/* Contact Details & WhatsApp (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct WhatsApp Callout Card */}
            <div className="bg-[#183223] text-emerald-200 p-7 rounded-2xl border border-emerald-500/30 space-y-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-normal text-white">
                  Direct WhatsApp Desk
                </h3>
                <p className="text-xs text-emerald-200/80 mt-1 leading-relaxed font-light">
                  Need fast digital floor plans or pricing sheets? Chat directly with our advisory coordinator.
                </p>
              </div>
              <a
                href={`https://wa.me/${companyData.contact.whatsappNumber}?text=${encodeURIComponent(companyData.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-emerald-400 text-[#0F2015] font-semibold text-xs tracking-wide hover:bg-emerald-300 transition-colors shadow-sm"
              >
                <span>Open WhatsApp Chat</span>
                <Send className="w-3 h-3" />
              </a>
            </div>

            {/* Office Info Card */}
            <div className="bg-white p-7 rounded-2xl border border-[#DCE7E0] space-y-5 shadow-xs">
              <h3 className="text-xl font-serif font-normal text-[#193122]">
                Headquarters Office
              </h3>

              <div className="space-y-3.5 text-xs text-[#536B5C] font-light">
                <div className="p-3.5 rounded-xl bg-[#EAF3ED]/80 border border-[#DCE7E0] text-xs space-y-1">
                  <p className="text-[#536B5C]">Brand Platform: <strong className="text-[#386146] font-semibold">{companyData.brandName}</strong></p>
                  <p className="text-[#536B5C]">Legal Entity: <strong className="text-[#193122] font-medium">{companyData.legalName}</strong></p>
                  <p className="text-[#536B5C]">Digital Advisory: <strong className="text-[#193122] font-semibold">SKY ROUTE DIGITAL</strong></p>
                  <p className="text-[#536B5C]">GSTIN / Reg No: <span className="font-mono text-[#193122] font-semibold">{companyData.gstin}</span></p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#EAF3ED] border border-[#DCE7E0] text-[#386146] shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#193122] font-medium mb-0.5">Physical Address</strong>
                    <span>{companyData.contact.fullAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#EAF3ED] border border-[#DCE7E0] text-[#386146] shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#193122] font-medium mb-0.5">Direct Line</strong>
                    <a href={`tel:${companyData.contact.phone}`} className="hover:text-[#193122] font-mono">
                      {companyData.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#EAF3ED] border border-[#DCE7E0] text-[#386146] shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#193122] font-medium mb-0.5">Advisory Email</strong>
                    <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#193122]">
                      {companyData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-[#EAF3ED] border border-[#DCE7E0] text-[#386146] shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block text-[#193122] font-medium mb-0.5">Desk Hours</strong>
                    <span>{companyData.contact.businessHours}</span>
                    <span className="block text-[#536B5C]">{companyData.contact.supportDays}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
