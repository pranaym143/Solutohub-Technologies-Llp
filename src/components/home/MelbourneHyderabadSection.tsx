import React from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO } from '../../data/companyData';
import { MapPin, Globe, Compass, ArrowRight } from 'lucide-react';

interface MelbourneHyderabadSectionProps {
  onNavigate: (page: PageId) => void;
}

export const MelbourneHyderabadSection: React.FC<MelbourneHyderabadSectionProps> = ({
  onNavigate,
}) => {
  return (
    <section className="py-24 lg:py-32 bg-[#EEF4FA] border-t border-[#071126]/[0.06] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block mb-3">
            CROSS-BORDER PERSPECTIVE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#071126]">
            Connecting ideas across borders.
          </h2>
          <p className="text-base text-[#5B667A] mt-3 font-normal leading-relaxed">
            {COMPANY_INFO.internationalPresence.statement}
          </p>
        </div>

        {/* Dual Hub Cards with Soft Glass & Clean Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Melbourne Pillar */}
          <div className="lg:col-span-5 glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src="/src/assets/images/solutohub_melbourne_skyline_minimal_1791131009927.jpg"
                alt="Melbourne Skyline view"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono text-[#071126] bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                <Globe className="w-3.5 h-3.5 text-[#526FF5]" />
                <span>AUSTRALIA</span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-[#071126] tracking-tight">
                  MELBOURNE
                </h3>
                <span className="text-xs font-mono text-[#5B667A]">Victoria</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5B667A] leading-relaxed mb-6 font-normal">
                International outreach and global technology perspective. Public company profiles associate Solutohub with commercial and advisory linkages in Melbourne.
              </p>
              <div className="pt-4 border-t border-[#071126]/[0.06] text-[11px] font-mono text-[#5B667A]">
                <span>International Profile Association</span>
              </div>
            </div>
          </div>

          {/* Central Connecting Graphic */}
          <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center p-4 text-center">
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#526FF5]/50 to-[#526FF5]" />
            <div className="my-4 p-3 rounded-full bg-white shadow-md border border-[#071126]/[0.08] text-[#526FF5]">
              <Compass className="w-5 h-5" />
            </div>
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#526FF5] via-[#526FF5]/50 to-transparent" />
            <span className="text-[11px] font-mono text-[#5B667A] mt-2 tracking-widest uppercase">
              Bridge
            </span>
          </div>

          {/* Hyderabad Pillar (Headquarters) */}
          <div className="lg:col-span-5 glass-panel rounded-2xl overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src="/src/assets/images/solutohub_hyderabad_tech_campus_1791130995950.jpg"
                alt="Hyderabad High Tech District Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono text-[#071126] bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#526FF5]" />
                <span>INDIA (HQ)</span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-semibold text-[#071126] tracking-tight">
                  HYDERABAD
                </h3>
                <span className="text-xs font-mono text-[#526FF5] font-semibold">Madhapur</span>
              </div>
              <p className="text-xs sm:text-sm text-[#5B667A] leading-relaxed mb-6 font-normal">
                Development delivery center and practical technology training campus situated at Level 6, JSP Imperia Business Center in the heart of Telangana's prominent tech corridor.
              </p>
              <div className="pt-4 border-t border-[#071126]/[0.06] flex items-center justify-between text-[11px] font-mono text-[#5B667A]">
                <span>Solutohub Technologies LLP</span>
                <span>Pin 500081</span>
              </div>
            </div>
          </div>
        </div>

        {/* Factuality Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#5B667A] max-w-xl mx-auto">
            Public company profiles associate Solutohub with Melbourne and Hyderabad. Specific corporate representation is maintained according to regional regulatory compliance.
          </p>
        </div>
      </div>
    </section>
  );
};
