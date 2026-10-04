import React, { useState } from 'react';
import { PageId } from '../../types';
import { TECHNOLOGIES_DATA } from '../../data/companyData';
import { ArrowRight } from 'lucide-react';

interface TechWallSectionProps {
  onNavigate: (page: PageId) => void;
}

export const TechWallSection: React.FC<TechWallSectionProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'CMS & Platforms', 'Analytics & Marketing'];

  const filteredTech =
    selectedFilter === 'All'
      ? TECHNOLOGIES_DATA
      : TECHNOLOGIES_DATA.filter((item) => item.category === selectedFilter);

  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF] border-t border-[#071126]/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block mb-3">
              ECOSYSTEM & ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#071126]">
              Built with modern technology.
            </h2>
            <p className="text-sm sm:text-base text-[#5B667A] mt-3 font-normal leading-relaxed">
              Technology areas associated with our development and training ecosystem.
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('technologies');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#071126] hover:text-[#526FF5] transition-colors cursor-pointer self-start lg:self-end"
          >
            <span>Explore Full Stack & Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#526FF5]" />
          </button>
        </div>

        {/* Filter Pills (Rounded Capsule Segmented Controls) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#071126]/[0.06]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#526FF5] ${
                selectedFilter === category
                  ? 'bg-[#071126] text-white shadow-sm font-semibold'
                  : 'text-[#5B667A] hover:text-[#071126] hover:bg-black/[0.04]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Minimal Typographic Grid with Soft Borders */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group bg-[#F5F8FC]/80 hover:bg-white border border-[#071126]/[0.06] hover:border-[#526FF5]/30 rounded-xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono tracking-wider text-[#5B667A] uppercase">
                    {tech.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] group-hover:bg-[#526FF5] transition-colors" />
                </div>
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-[#071126] group-hover:text-[#526FF5] transition-colors">
                  {tech.name}
                </h3>
                <span className="text-xs text-[#5B667A] font-medium block mt-1">
                  {tech.role}
                </span>
              </div>

              <p className="text-xs text-[#5B667A] leading-relaxed mt-4 pt-4 border-t border-[#071126]/[0.04]">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Factuality Notice */}
        <div className="mt-10 p-4 rounded-xl glass-panel-subtle text-xs text-[#5B667A] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p>
            Solutohub Technologies evaluates and applies technologies according to project requirements and training curricula.
          </p>
          <span className="text-[11px] font-mono text-[#526FF5] whitespace-nowrap">
            Verified Stack Matrix
          </span>
        </div>
      </div>
    </section>
  );
};
