import React, { useState } from 'react';
import { X, Calendar, Clock, Car, ShieldCheck, User, Phone, MapPin, Send } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { propertiesData } from '../../data/propertiesData';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPropertySlug?: string;
  onSuccess: (name: string, date: string) => void;
}

export const SiteVisitModal: React.FC<SiteVisitModalProps> = ({
  isOpen,
  onClose,
  selectedPropertySlug,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    propertySlug: selectedPropertySlug || 'transcon-triumph-andheri',
    visitDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '11:00 AM – 01:00 PM (Morning Slot)',
    valetService: true,
    guestsCount: '2 Persons',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSuccess(formData.fullName, formData.visitDate);
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F2015]/75 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#DCE7E0] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#183223] text-white px-6 py-5 flex items-center justify-between border-b border-white/10">
          <div>
            <BrandLogo variant="light" size="sm" isLink={false} />
            <div className="flex items-center gap-2 mt-2">
              <Car className="w-3.5 h-3.5 text-[#B2D1BC]" />
              <h3 className="text-xs sm:text-sm font-serif font-normal text-emerald-100 tracking-wider">
                Private Walkthrough & Concierge Scheduling
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-200 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto bg-[#F4F8F5]">
          
          <div className="space-y-1">
            <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#386146]" /> Select Landmark Property
            </label>
            <select
              value={formData.propertySlug}
              onChange={(e) => setFormData({ ...formData, propertySlug: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-[#DCE7E0] text-xs bg-white text-[#193122] focus:outline-none focus:border-[#6B9F7B]"
            >
              {propertiesData.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} — {p.location} ({p.priceFormatted})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#386146]" /> Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Singhania"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE7E0] text-xs bg-white text-[#193122] focus:outline-none focus:border-[#6B9F7B] font-light"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#386146]" /> Mobile Contact *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE7E0] text-xs bg-white text-[#193122] focus:outline-none focus:border-[#6B9F7B] font-light"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#386146]" /> Preferred Date
              </label>
              <input
                type="date"
                value={formData.visitDate}
                onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-[#DCE7E0] text-xs bg-white text-[#193122] focus:outline-none focus:border-[#6B9F7B]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-medium text-[#536B5C] uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#386146]" /> Preferred Time Slot
              </label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-[#DCE7E0] text-xs bg-white text-[#193122] focus:outline-none focus:border-[#6B9F7B]"
              >
                <option value="10:00 AM – 12:00 PM (Morning Slot)">10:00 AM – 12:00 PM (Morning)</option>
                <option value="12:00 PM – 03:00 PM (Afternoon Slot)">12:00 PM – 03:00 PM (Afternoon)</option>
                <option value="03:00 PM – 06:30 PM (Evening Sunset Slot)">03:00 PM – 06:30 PM (Sunset View)</option>
              </select>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#EAF3ED] border border-[#DCE7E0] flex items-center justify-between text-xs text-[#193122]">
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-[#386146]" />
              <span className="font-medium">Complimentary Chauffeur & Valet Access</span>
            </div>
            <input
              type="checkbox"
              checked={formData.valetService}
              onChange={(e) => setFormData({ ...formData, valetService: e.target.checked })}
              className="w-4 h-4 accent-[#386146] cursor-pointer"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 px-6 rounded-full btn-pastel-primary text-xs font-semibold tracking-wide shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              {submitting ? (
                <span>Confirming Booking...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Reserve Private Walkthrough</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2 flex items-center justify-center gap-1.5 text-[10px] text-[#536B5C] text-center font-light">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct coordination with Senior Project Directors. No third-party spam.</span>
          </div>

        </form>

      </div>
    </div>
  );
};
