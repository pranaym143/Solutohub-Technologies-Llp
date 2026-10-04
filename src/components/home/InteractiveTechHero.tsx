import React from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO } from '../../data/companyData';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Tech3DOrbVisual } from './Tech3DOrbVisual';

interface InteractiveTechHeroProps {
  onNavigate: (page: PageId) => void;
}

export const InteractiveTechHero: React.FC<InteractiveTechHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[94vh] lg:min-h-screen flex flex-col justify-between pt-32 pb-10 sm:pb-12 bg-gradient-to-b from-[#FFFFFF] via-[#F5F8FC] to-[#EEF4FA] overflow-hidden studio-grid-pattern">
      {/* Subtle Studio Light Wash */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[500px] bg-gradient-to-br from-[#526FF5]/[0.06] to-[#7B8CFF]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* Dynamic Ambient Dark Shadow Behind 3D Visual */}
      <div className="absolute top-1/4 right-[10%] w-[540px] h-[540px] bg-gradient-to-br from-[#071126]/[0.08] via-[#071126]/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />

      {/* Deep Ground Horizon Shadow Field */}
      <div className="absolute bottom-20 right-[12%] w-[500px] h-[120px] bg-gradient-to-r from-transparent via-[#071126]/[0.12] to-transparent rounded-full blur-[50px] pointer-events-none" />

      {/* Main Hero Content Area */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full my-auto relative z-10 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Eyebrow + Large Editorial Headline + Copy + CTAs (Occupies ~52% width) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 max-w-2xl">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-[#526FF5] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#526FF5]" />
              <span>{COMPANY_INFO.eyebrow}</span>
            </div>

            {/* Editorial Thin-to-Medium Headline (Apple/ConSentinel-level restraint) */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-[-0.035em] text-[#071126] leading-[1.04] text-balance">
              Technology. <br />
              <span className="text-[#071126]/90 font-medium">Digital Growth.</span> <br />
              <span className="text-[#5B667A] font-light">Future Skills.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#5B667A] leading-relaxed max-w-xl font-normal text-balance">
              {COMPANY_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#526FF5] hover:bg-[#415ed6] rounded-full transition-all duration-200 shadow-lg shadow-[#526FF5]/25 hover:shadow-xl hover:shadow-[#526FF5]/35 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526FF5]"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-[#071126] glass-panel hover:bg-white rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526FF5]"
              >
                <span>Talk to Our Team</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Translucent Glass Technology Orb & Floating Information Panel */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
            <Tech3DOrbVisual onNavigate={onNavigate} />
          </div>
        </div>
      </div>

      {/* Hero Lower Area: Capability Indices + Far-Right Floating Pill (Section 9) */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-8 sm:pt-10 border-t border-[#071126]/[0.08] relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
          {/* Three Capabilities Index */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 text-left">
            <div>
              <span className="font-mono text-xs text-[#526FF5] font-semibold block mb-1">01</span>
              <p className="text-xs font-semibold text-[#071126] tracking-tight uppercase leading-tight">
                DIGITAL <br /> SOLUTIONS
              </p>
            </div>

            <div>
              <span className="font-mono text-xs text-[#526FF5] font-semibold block mb-1">02</span>
              <p className="text-xs font-semibold text-[#071126] tracking-tight uppercase leading-tight">
                DIGITAL <br /> GROWTH
              </p>
            </div>

            <div>
              <span className="font-mono text-xs text-[#526FF5] font-semibold block mb-1">03</span>
              <p className="text-xs font-semibold text-[#071126] tracking-tight uppercase leading-tight">
                TECHNOLOGY <br /> TRAINING
              </p>
            </div>
          </div>

          {/* Far Right Floating Pill: Explore Services with Mini Glass Orb */}
          <div className="self-start md:self-auto">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel hover:bg-white transition-all shadow-sm group cursor-pointer"
            >
              {/* Mini Glass Orb */}
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#526FF5] via-white to-white shadow-inner flex items-center justify-center border border-white/90">
                <div className="w-1.5 h-1.5 rounded-full bg-[#071126]" />
              </div>
              <span className="text-xs font-semibold text-[#071126]">
                Explore Services
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-[#5B667A] group-hover:text-[#526FF5] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
