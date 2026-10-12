import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { EnquiryModal } from './components/common/EnquiryModal';
import { SiteVisitModal } from './components/common/SiteVisitModal';
import { Toast } from './components/common/Toast';

import { HomePage } from './pages/HomePage';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CampaignPage } from './pages/CampaignPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import type { Property } from './data/propertiesData';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  // Global Enquiry Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProperty, setModalProperty] = useState<Property | null>(null);
  const [modalCampaignTitle, setModalCampaignTitle] = useState<string | undefined>(undefined);

  // Global Site Visit Modal State
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);
  const [siteVisitPropertySlug, setSiteVisitPropertySlug] = useState<string | undefined>(undefined);

  // Global Toast Notification State
  const [toastOpen, setToastOpen] = useState(false);
  const [toastTitle, setToastTitle] = useState('');
  const [toastSub, setToastSub] = useState('');

  const handleOpenEnquiry = (property?: Property, campaignTitle?: string) => {
    setModalProperty(property || null);
    setModalCampaignTitle(campaignTitle);
    setModalOpen(true);
  };

  const handleOpenSiteVisit = (property?: Property) => {
    setSiteVisitPropertySlug(property?.slug);
    setSiteVisitOpen(true);
  };

  const handleEnquirySuccess = (userName: string) => {
    setToastTitle(`Thank you, ${userName}!`);
    setToastSub('Our property discovery coordinator will connect with verified brochures and floor plans.');
    setToastOpen(true);
  };

  const handleSiteVisitSuccess = (userName: string, date: string) => {
    setToastTitle(`Site Visit Reserved for ${userName}!`);
    setToastSub(`Your private walkthrough is confirmed for ${date}. Our valet concierge will coordinate your arrival.`);
    setToastOpen(true);
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F4F8F5] text-[#193122] selection:bg-[#B2D1BC]/50 selection:text-[#193122]">
        <Header onOpenEnquiry={() => handleOpenEnquiry()} />
        
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenEnquiry={handleOpenEnquiry} 
                  onOpenSiteVisit={handleOpenSiteVisit} 
                />
              } 
            />
            <Route path="/properties" element={<PropertiesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route 
              path="/properties/:slug" 
              element={
                <PropertyDetailPage 
                  onOpenEnquiry={handleOpenEnquiry} 
                  onOpenSiteVisit={handleOpenSiteVisit} 
                  onSuccessToast={handleEnquirySuccess} 
                />
              } 
            />
            <Route path="/about-us" element={<AboutPage onOpenEnquiry={() => handleOpenEnquiry()} />} />
            <Route path="/contact-us" element={<ContactPage onSuccessToast={handleEnquirySuccess} />} />
            <Route 
              path="/campaign/:campaignSlug" 
              element={
                <CampaignPage 
                  onSuccessToast={handleEnquirySuccess} 
                  onOpenEnquiry={handleOpenEnquiry} 
                />
              } 
            />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
            <Route path="*" element={<HomePage onOpenEnquiry={handleOpenEnquiry} onOpenSiteVisit={handleOpenSiteVisit} />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Dynamic Enquiry Modal */}
        <EnquiryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          property={modalProperty}
          campaignTitle={modalCampaignTitle}
          onSuccess={handleEnquirySuccess}
        />

        {/* Global Site Visit Modal */}
        <SiteVisitModal
          isOpen={siteVisitOpen}
          onClose={() => setSiteVisitOpen(false)}
          selectedPropertySlug={siteVisitPropertySlug}
          onSuccess={handleSiteVisitSuccess}
        />

        {/* Global Feedback Toast */}
        <Toast
          isOpen={toastOpen}
          onClose={() => setToastOpen(false)}
          message={toastTitle}
          submessage={toastSub}
        />
      </div>
    </HashRouter>
  );
}

export default App;
