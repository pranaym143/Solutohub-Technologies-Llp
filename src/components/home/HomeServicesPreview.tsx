import React from 'react';
import { PageId } from '../../types';
import { SERVICES_DATA } from '../../data/companyData';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';

interface HomeServicesPreviewProps {
  onNavigate: (page: PageId) => void;
}

export const HomeServicesPreview: React.FC<HomeServicesPreviewProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF] border-t border-[#071126]/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block mb-3">
              SERVICE PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#071126]">
              Digital solutions built around your goals.
            </h2>
            <p className="text-base text-[#5B667A] mt-3 font-normal">
              Purpose-driven web engineering, custom application architectures, and conversion-focused growth systems.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#071126] hover:text-[#526FF5] transition-colors cursor-pointer self-start md:self-end"
          >
            <span>View All Capabilities & Process</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#526FF5]" />
          </button>
        </div>

        {/* 4 Primary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="glass-panel rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#071126]/[0.06]">
                  <span className="font-mono text-xs text-[#526FF5] font-semibold">
                    {service.number}
                  </span>
                  <span className="text-[11px] font-mono text-[#5B667A] uppercase">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-[#071126] mb-3 tracking-tight group-hover:text-[#526FF5] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5B667A] leading-relaxed mb-6 font-normal">
                  {service.summary}
                </p>

                <div className="space-y-2 mb-6">
                  {service.capabilities.slice(0, 3).map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#071126]">
                      <Check className="w-3.5 h-3.5 text-[#526FF5] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#071126]/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono bg-[#EEF4FA] text-[#071126] rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-xs text-[#526FF5] font-semibold group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
