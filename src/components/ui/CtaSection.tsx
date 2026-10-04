import React from 'react';
import { PageId } from '../../types';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface CtaSectionProps {
  onNavigate: (page: PageId) => void;
  title?: string;
  description?: string;
  primaryCta?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onNavigate,
  title = "Let's Build What's Next.",
  description = "Tell us what you're building, what you're trying to improve, or what skills you're looking to develop.",
  primaryCta = 'Start a Conversation',
}) => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FFFFFF] to-[#EEF4FA] border-t border-[#071126]/[0.06] relative overflow-hidden">
      {/* Soft Studio Radial Light Wash */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#526FF5]/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block mb-4">
          SOLUTOHUB TECHNOLOGIES LLP
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.035em] text-[#071126] mb-6 text-balance">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-[#5B667A] leading-relaxed max-w-2xl mx-auto mb-10 font-normal text-balance">
          {description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#071126] hover:bg-[#0f1f42] rounded-full transition-all duration-200 cursor-pointer shadow-lg shadow-[#071126]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526FF5]"
          >
            <span>{primaryCta}</span>
            <ArrowRight className="w-4 h-4 text-[#526FF5]" />
          </button>

          <a
            href="tel:08919704709"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-[#071126] glass-panel hover:bg-white rounded-full transition-colors"
          >
            <Phone className="w-4 h-4 text-[#526FF5]" />
            <span>Call Solutohub ({COMPANY_INFO.phone})</span>
          </a>
        </div>

        {/* Office Location Quiet Signal */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#5B667A]">
          <MapPin className="w-3.5 h-3.5 text-[#526FF5]" />
          <span>Level 6, JSP Imperia Business Center, Madhapur, Hyderabad</span>
        </div>
      </div>
    </section>
  );
};
