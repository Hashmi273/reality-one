import React, { useState } from 'react';
import { Layers, Maximize2, Bed, Compass, Download, CheckCircle2 } from 'lucide-react';
import type { FloorPlan } from '../../data/propertiesData';

interface FloorPlanViewerProps {
  floorPlans: FloorPlan[];
  propertyName: string;
  onRequestDossier: (planType: string) => void;
}

export const FloorPlanViewer: React.FC<FloorPlanViewerProps> = ({
  floorPlans,
  propertyName,
  onRequestDossier
}) => {
  const [activePlanIndex, setActivePlanIndex] = useState(0);

  if (!floorPlans || floorPlans.length === 0) return null;

  const currentPlan = floorPlans[activePlanIndex] || floorPlans[0];

  return (
    <div className="bg-white rounded-3xl border border-[#E5DFD5] shadow-sm p-6 sm:p-10 space-y-8">
      
      {/* Header with Title & Tab selector */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-100 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A355] block">
            Architectural Blueprint Explorer
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
            {propertyName} Floor Plans
          </h3>
        </div>

        {/* Tab pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {floorPlans.map((plan, idx) => (
            <button
              key={plan.id}
              onClick={() => setActivePlanIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                activePlanIndex === idx
                  ? 'bg-[#15202B] text-[#E5C378] shadow-md border border-[#C8A355]/40'
                  : 'bg-[#FAF9F5] text-slate-700 hover:bg-white border border-slate-200'
              }`}
            >
              {plan.type}
            </button>
          ))}
        </div>
      </div>

      {/* Blueprint Visual & Spec Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Visual Blueprint rendering (7 cols) */}
        <div className="lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0D141C] border border-slate-800 shadow-inner group">
          <img
            src={currentPlan.layoutImage}
            alt={currentPlan.type}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
            <span className="px-3 py-1 rounded-md bg-[#15202B]/90 backdrop-blur-md border border-[#C8A355]/30 font-semibold text-[#E5C378]">
              {currentPlan.type}
            </span>
            <span className="font-mono text-slate-300">
              Est. Starting: <strong className="text-white">{currentPlan.priceEstimate}</strong>
            </span>
          </div>
        </div>

        {/* Technical Specification Matrix (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="space-y-1">
            <h4 className="text-xl font-serif font-bold text-slate-900">
              {currentPlan.type}
            </h4>
            <p className="text-xs text-slate-500">
              Engineered with optimized spatial ergonomics and maximum natural illumination.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3.5 text-xs">
            <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-slate-200 space-y-1">
              <span className="text-slate-500 uppercase tracking-wider text-[10px] flex items-center gap-1">
                <Maximize2 className="w-3 h-3 text-[#C8A355]" /> Carpet Area
              </span>
              <p className="text-sm font-bold text-slate-900">{currentPlan.carpetArea}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-slate-200 space-y-1">
              <span className="text-slate-500 uppercase tracking-wider text-[10px] flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#C8A355]" /> Super Built-up
              </span>
              <p className="text-sm font-bold text-slate-900">{currentPlan.superArea}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-slate-200 space-y-1">
              <span className="text-slate-500 uppercase tracking-wider text-[10px] flex items-center gap-1">
                <Bed className="w-3 h-3 text-[#C8A355]" /> Bedrooms & Baths
              </span>
              <p className="text-sm font-bold text-slate-900">{currentPlan.bedrooms} Bed • {currentPlan.bathrooms} Bath</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-slate-200 space-y-1">
              <span className="text-slate-500 uppercase tracking-wider text-[10px] flex items-center gap-1">
                <Compass className="w-3 h-3 text-[#C8A355]" /> Orientation
              </span>
              <p className="text-sm font-bold text-slate-900 truncate">{currentPlan.facing}</p>
            </div>
          </div>

          <div className="space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C8A355] shrink-0" />
              <span>Dedicated private foyer & utility room</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C8A355] shrink-0" />
              <span>VRV Air conditioning ducts pre-installed</span>
            </div>
          </div>

          <button
            onClick={() => onRequestDossier(currentPlan.type)}
            className="w-full py-3.5 px-6 rounded-xl bg-[#15202B] hover:bg-[#1E293B] text-[#E5C378] hover:text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 border border-[#C8A355]/30 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Architectural CAD / PDF Dossier</span>
          </button>

        </div>

      </div>

    </div>
  );
};
