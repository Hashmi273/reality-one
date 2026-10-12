import React from 'react';
import { Search, CheckSquare, Send, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Private Discovery',
      description: 'Review architectural floor plans, spatial layouts, and verified statutory clearances for vetted developments.',
      icon: Search
    },
    {
      number: '02',
      title: 'Site Walkthrough',
      description: 'Experience guided private inspections coordinated by our dedicated property concierge desk.',
      icon: CheckSquare
    },
    {
      number: '03',
      title: 'Direct Allocation',
      description: 'Receive transparent developer price matrices, structured payment schedules, and 0% brokerage allocation.',
      icon: Send
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#EBF3EE] border-t border-[#DCE7E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#386146] block">
            Advisory Pathway
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#193122] tracking-tight">
            How Acquisition Works
          </h2>
          <p className="text-xs sm:text-sm text-[#536B5C] font-light leading-relaxed">
            A transparent 3-step structured pathway to securing your next prime address.
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white p-8 rounded-2xl border border-[#DCE7E0] hover:border-[#8EB99C] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif font-light text-[#386146]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#F4F8F5] border border-[#DCE7E0] flex items-center justify-center text-[#193122]">
                      <Icon className="w-4 h-4 text-[#4F805F]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-normal text-[#193122] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#536B5C] leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {idx < 2 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#8EB99C]">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
