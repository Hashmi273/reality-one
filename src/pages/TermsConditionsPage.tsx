import React from 'react';
import { FileText, AlertCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export const TermsConditionsPage: React.FC = () => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="border-b border-[#E8E3D8] pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5DFD5] text-[#A37F47] text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Platform Agreement & Disclaimers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Last Updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Highlighted Master Disclaimer Alert */}
        <div className="p-6 rounded-2xl bg-[#141A24] text-white border border-amber-500/30 shadow-md space-y-2">
          <div className="flex items-center gap-2 text-[#DFCA9B] font-semibold text-sm uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-[#DFCA9B]" />
            <span>Important Developer & Verification Notice</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {companyData.disclaimer}
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E5DFD5] shadow-sm space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed font-light">
          
          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">1. Website Usage</h2>
            <p>
              By accessing and using this website ({companyData.name}), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using the platform.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">2. Nature of Platform & Property Information</h2>
            <p>
              {companyData.name} functions as an informational real-estate discovery and enquiry facilitation platform. The project descriptions, floor layouts, renderings, images, amenities, dimensions, and specifications displayed on the platform are provided for preliminary indicative purposes only and do not constitute a legal offer, guarantee, or warranty.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">3. Pricing Disclaimer</h2>
            <p>
              All prices (e.g. ₹ Cr / ₹ L onwards), government charges, taxes, registration costs, and maintenance deposits are subject to modification by the respective real-estate developers without prior notice. Final transaction values must be established directly with the developer or authorized selling entity.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">4. Availability Disclaimer</h2>
            <p>
              Property inventory, specific floor selections, corner units, and possession schedules are subject to real-time developer allocations. {companyData.name} does not warrant continuous availability of any listed residence or commercial unit.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">5. Third-Party Information & Links</h2>
            <p>
              External links, maps, transit distances, and developer collateral are provided solely for user convenience. We make no representations regarding third-party websites or services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">6. User Responsibilities & Due Diligence</h2>
            <p>
              Users are advised to conduct independent due diligence, inspect approved municipal sanctions, verify Real Estate Regulatory Authority (RERA) registrations, and seek legal and financial counsel before entering into any binding purchase contract.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">7. Property Enquiries</h2>
            <p>
              By submitting an enquiry form, you authorize {companyData.name} and authorized project representatives to contact you via telephone, WhatsApp, SMS, or email regarding the referenced project.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">8. Intellectual Property</h2>
            <p>
              All text, graphic branding, layout arrangements, and custom design elements of {companyData.name} are the intellectual property of the platform or licensed appropriately. Unauthorized copying is prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable Indian laws, {companyData.name}, its directors, and associates shall not be liable for any direct, indirect, or consequential losses arising from the use or inability to use this platform or reliance on published indicative data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">10. Website Changes</h2>
            <p>
              We reserve the right to revise, suspend, or update any section of this website or modify these terms at our sole discretion.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-serif font-bold text-slate-900">11. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in Gurugram / New Delhi, India.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-serif font-bold text-slate-900">12. Contact Information</h2>
            <p>
              For legal questions regarding these Terms, contact our corporate desk at:
            </p>
            <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5DFD5] text-xs sm:text-sm text-slate-800 space-y-1">
              <p><strong>{companyData.name} Legal Compliance</strong></p>
              <p>Email: <a href={`mailto:${companyData.contact.email}`} className="text-[#A37F47] hover:underline">{companyData.contact.email}</a></p>
              <p>Address: {companyData.contact.address}, {companyData.contact.cityState}</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
