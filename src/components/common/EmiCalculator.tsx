import React, { useState, useMemo } from 'react';
import { Calculator, Percent, Calendar, IndianRupee, ShieldCheck } from 'lucide-react';

interface EmiCalculatorProps {
  initialPrice?: number; // in Crores
  onScheduleConsultation?: () => void;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({ 
  initialPrice = 5.95,
  onScheduleConsultation 
}) => {
  const [propertyPrice, setPropertyPrice] = useState<number>(initialPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(20);

  const calculations = useMemo(() => {
    const totalAmount = propertyPrice * 10000000;
    const downPaymentAmount = (totalAmount * downPaymentPercent) / 100;
    const principalLoan = totalAmount - downPaymentAmount;
    
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = loanTenureYears * 12;
    
    const emi = (principalLoan * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - principalLoan;

    // Stamp duty estimation (approx 6% Maharashtra rate + registration)
    const estimatedStampDuty = totalAmount * 0.06;

    return {
      downPaymentAmount,
      principalLoan,
      estimatedStampDuty,
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
      principalPercent: Math.round((principalLoan / totalPayment) * 100),
      interestPercent: Math.round((totalInterest / totalPayment) * 100)
    };
  }, [propertyPrice, downPaymentPercent, interestRate, loanTenureYears]);

  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹ ${(val / 100000).toFixed(2)} L`;
    }
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  return (
    <div className="bg-[#183223] text-white p-6 sm:p-10 rounded-3xl border border-white/10 shadow-xl space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[#B2D1BC] text-[10px] font-semibold uppercase tracking-widest border border-white/10 mb-2">
            <Calculator className="w-3 h-3" />
            <span>Private Financial Modelling</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-serif font-light text-white">
            Mortgage & Acquisition Estimator
          </h3>
          <p className="text-xs text-emerald-100/80 mt-1 font-light">
            Model cash flows, bank funding eligibility, and RERA registration costs.
          </p>
        </div>

        <div className="bg-[#1E3E2B] px-6 py-3.5 rounded-2xl border border-white/10 text-right">
          <span className="text-[10px] font-medium text-[#B2D1BC] uppercase tracking-wider block">Estimated Monthly EMI</span>
          <span className="text-2xl sm:text-3xl font-serif font-normal text-white">
            ₹ {calculations.monthlyEmi.toLocaleString('en-IN')}<span className="text-xs font-sans text-emerald-200 font-light"> / mo</span>
          </span>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        <div className="space-y-6">
          
          {/* Property Value Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-emerald-100 uppercase tracking-wider flex items-center gap-1.5">
                <IndianRupee className="w-3.5 h-3.5 text-[#B2D1BC]" /> Property Valuation
              </span>
              <span className="font-mono text-white text-sm sm:text-base font-semibold">
                ₹ {propertyPrice.toFixed(2)} Cr
              </span>
            </div>
            <input
              type="range"
              min="1.5"
              max="25.0"
              step="0.25"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#B2D1BC]"
            />
            <div className="flex justify-between text-[10px] text-emerald-200/60 font-mono">
              <span>₹ 1.5 Cr</span>
              <span>₹ 12 Cr</span>
              <span>₹ 25 Cr+</span>
            </div>
          </div>

          {/* Down Payment Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-medium text-emerald-100 uppercase tracking-wider flex items-center gap-1.5">
                <Percent className="w-3.5 h-3.5 text-[#B2D1BC]" /> Down Payment ({downPaymentPercent}%)
              </span>
              <span className="font-mono text-emerald-100 text-xs font-medium">
                {formatINR(calculations.downPaymentAmount)}
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
              className="w-full h-1.5 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#B2D1BC]"
            />
            <div className="flex justify-between text-[10px] text-emerald-200/60 font-mono">
              <span>10%</span>
              <span>25%</span>
              <span>50%</span>
            </div>
          </div>

          {/* Interest Rate & Tenure 2-Col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1.5 bg-[#1E3E2B] p-3 rounded-xl border border-white/10">
              <div className="flex justify-between text-xs">
                <span className="text-emerald-200">Interest Benchmark</span>
                <span className="font-mono font-medium text-white">{interestRate}% p.a.</span>
              </div>
              <input
                type="range"
                min="7.0"
                max="12.0"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full h-1 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#B2D1BC]"
              />
            </div>

            <div className="space-y-1.5 bg-[#1E3E2B] p-3 rounded-xl border border-white/10">
              <div className="flex justify-between text-xs">
                <span className="text-emerald-200 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-[#B2D1BC]" /> Loan Tenure
                </span>
                <span className="font-mono font-medium text-white">{loanTenureYears} Yrs</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={loanTenureYears}
                onChange={(e) => setLoanTenureYears(parseInt(e.target.value))}
                className="w-full h-1 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-[#B2D1BC]"
              />
            </div>
          </div>

        </div>

        {/* Visual Breakdown Card */}
        <div className="bg-[#1E3E2B] p-6 rounded-2xl border border-white/10 space-y-4">
          <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#B2D1BC] border-b border-white/10 pb-2">
            Acquisition Financial Summary
          </h4>

          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between text-emerald-100">
              <span>Principal Borrowing:</span>
              <span className="text-white font-mono">{formatINR(calculations.principalLoan)}</span>
            </div>

            <div className="flex justify-between text-emerald-100">
              <span>Total Interest Cost:</span>
              <span className="text-[#CDE6D6] font-mono">{formatINR(calculations.totalInterest)}</span>
            </div>

            <div className="flex justify-between text-emerald-100">
              <span>Estimated Stamp Duty (6%):</span>
              <span className="text-emerald-200 font-mono">{formatINR(calculations.estimatedStampDuty)}</span>
            </div>

            <div className="flex justify-between text-emerald-100 pt-2 border-t border-white/10">
              <span className="font-medium text-white">Total Outlay Over Tenure:</span>
              <span className="text-white font-mono font-semibold">{formatINR(calculations.totalPayment)}</span>
            </div>
          </div>

          {/* Minimal Graphical Bar */}
          <div className="space-y-1 pt-1">
            <div className="h-2 w-full rounded-full bg-emerald-950 overflow-hidden flex">
              <div 
                className="bg-[#8EB99C] transition-all duration-300"
                style={{ width: `${calculations.principalPercent}%` }}
              />
              <div 
                className="bg-[#386146] transition-all duration-300"
                style={{ width: `${calculations.interestPercent}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-emerald-200 font-mono">
              <span>Principal: {calculations.principalPercent}%</span>
              <span>Interest: {calculations.interestPercent}%</span>
            </div>
          </div>

          {onScheduleConsultation && (
            <button
              onClick={onScheduleConsultation}
              className="w-full py-2.5 rounded-full btn-pastel-mint text-xs font-semibold tracking-wide transition-all cursor-pointer mt-2"
            >
              Request Structured Bank Term Sheet
            </button>
          )}

          <div className="flex items-center justify-center gap-1.5 text-[10px] text-emerald-200/80 text-center font-light">
            <ShieldCheck className="w-3 h-3 text-[#8EB99C]" />
            <span>Indicative model. Lending subject to underwriting standards.</span>
          </div>
        </div>

      </div>

    </div>
  );
};
