import React from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { CuratedPortfolioSection } from '../components/home/CuratedPortfolioSection';
import { TransconPedigree } from '../components/home/TransconPedigree';
import { ShowcaseBanner } from '../components/home/ShowcaseBanner';
import { EmiCalculator } from '../components/common/EmiCalculator';
import { ClientStories } from '../components/home/ClientStories';
import { HowItWorks } from '../components/home/HowItWorks';
import { LeadCta } from '../components/home/LeadCta';
import type { Property } from '../data/propertiesData';

interface HomePageProps {
  onOpenEnquiry: (property?: Property) => void;
  onOpenSiteVisit: (property?: Property) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenEnquiry, onOpenSiteVisit }) => {
  return (
    <div className="space-y-0">
      <HeroSlider
        onOpenEnquiry={onOpenEnquiry}
        onOpenSiteVisit={onOpenSiteVisit}
      />
      <CategoryGrid />
      <CuratedPortfolioSection
        onOpenSiteVisit={onOpenSiteVisit}
      />
      <TransconPedigree />
      <ShowcaseBanner onOpenEnquiry={() => onOpenEnquiry()} />
      
      {/* Interactive Financial Planning Section */}
      <section className="py-20 lg:py-28 bg-[#FAF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmiCalculator onScheduleConsultation={() => onOpenEnquiry()} />
        </div>
      </section>

      <ClientStories />
      <HowItWorks />
      <LeadCta onOpenEnquiry={() => onOpenEnquiry()} />
    </div>
  );
};
