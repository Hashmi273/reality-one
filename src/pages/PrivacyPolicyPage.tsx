import React from 'react';
import { Shield } from 'lucide-react';
import { companyData } from '../data/companyData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="border-b border-[#E8E3D8] pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5DFD5] text-[#A37F47] text-xs font-semibold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5" />
            <span>Legal & Privacy Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Last Updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E5DFD5] shadow-sm space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-light">
          
          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">1. Information Collected</h2>
            <p>
              When you interact with {companyData.name} (such as browsing listings, submitting a discovery enquiry, or requesting project brochures), we may collect personal details voluntarily provided by you. This includes your full name, telephone number, email address, preferred property location, investment budget range, and specific spatial requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">2. How Information is Used</h2>
            <p>
              We process your information strictly to fulfill real-estate discovery requests, coordinate project walkthroughs, share developer brochures, and provide pertinent updates regarding new launches or price milestones matching your stated preferences.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">3. Contact Information</h2>
            <p>
              Your contact details (such as phone number and email) enable our advisory coordinators to connect with you regarding the specific property enquiries you submit on our website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">4. Property Enquiries</h2>
            <p>
              Submitting an enquiry for a specific project facilitates sharing your requested criteria with authorized sales representatives of the respective real-estate developers to ensure accurate floor plan sharing and appointment scheduling.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">5. Communication Channels</h2>
            <p>
              Communications may be conducted via telephonic call, SMS, email, or WhatsApp. You maintain full discretion to opt out of routine updates at any juncture by notifying our support desk.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">6. Data Protection & Security</h2>
            <p>
              {companyData.name} employs standard administrative, physical, and technical precautions designed to protect your personal details against unauthorized access, disclosure, or alteration.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">7. Cookies & Tracking Technologies</h2>
            <p>
              Our website may utilize essential cookies and analytical tokens to improve navigation speed, remember filter preferences, and gauge website performance. You may configure your browser settings to reject non-essential cookies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">8. Third-Party Services</h2>
            <p>
              We do not sell, rent, or trade your personally identifiable information to third-party marketing brokers. Any external mapping or hosting utilities operate under strict confidentiality.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">9. User Rights</h2>
            <p>
              You are entitled to review, modify, or request the deletion of the contact information we hold regarding your property enquiries at any time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">10. Data Retention</h2>
            <p>
              We retain enquiry information only for the duration necessary to satisfy discovery requests and uphold statutory documentation guidelines.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">11. Policy Updates</h2>
            <p>
              This policy may be amended periodically to reflect statutory updates or platform enhancements. Revised versions will be posted on this page with an updated timestamp.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-serif font-bold text-slate-900">12. Privacy Grievance Officer</h2>
            <p>
              For inquiries regarding this Privacy Policy or your personal information, please write to us at:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5DFD5] text-xs sm:text-sm text-slate-800 space-y-1">
              <p><strong>{companyData.name} Privacy Desk</strong></p>
              <p>Email: <a href={`mailto:${companyData.contact.email}`} className="text-[#A37F47] hover:underline">{companyData.contact.email}</a></p>
              <p>Address: {companyData.contact.address}, {companyData.contact.cityState}</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
