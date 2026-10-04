import React from 'react';
import { PageId } from '../../types';
import { ArrowRight, Globe, Code2, LineChart, GraduationCap } from 'lucide-react';

interface TrustIntroSectionProps {
  onNavigate: (page: PageId) => void;
}

export const TrustIntroSection: React.FC<TrustIntroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="who-we-are" className="py-24 lg:py-32 bg-[#FFFFFF] border-t border-[#071126]/[0.06] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Label + Large Editorial Typography */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#071126] leading-[1.12] text-balance">
              Technology. <br />
              <span className="font-medium text-[#071126]">Digital Growth.</span> <br />
              <span className="font-light text-[#5B667A]">Future Skills.</span>
            </h2>
          </div>

          {/* Right Column: Narrative & Ecosystem Links */}
          <div className="lg:col-span-6 space-y-8">
            <p className="text-lg sm:text-xl text-[#5B667A] leading-relaxed font-normal">
              Solutohub brings technology services, digital growth capabilities and practical technology learning together under one ecosystem.
            </p>

            <p className="text-sm sm:text-base text-[#5B667A] leading-relaxed">
              Operating in Madhapur, Hyderabad, we design and build scalable web software, formulate data-driven internet marketing initiatives, and mentor emerging engineers with genuine hands-on code.
            </p>

            {/* Editorial Feature Line Dividers (No Slop Cards) */}
            <div className="pt-6 border-t border-[#071126]/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
              <div className="space-y-1.5">
                <span className="font-mono text-[#526FF5] font-medium uppercase tracking-wider block">
                  Digital Engineering
                </span>
                <p className="text-[#5B667A] leading-normal">
                  Clean modular web architecture, responsive applications, and maintainable systems.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-[#526FF5] font-medium uppercase tracking-wider block">
                  Applied Learning
                </span>
                <p className="text-[#5B667A] leading-normal">
                  Practical project-based skill building and structured internship tracks.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#071126] hover:text-[#526FF5] transition-colors group cursor-pointer"
              >
                <span>Discover Solutohub</span>
                <ArrowRight className="w-4 h-4 text-[#526FF5] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
