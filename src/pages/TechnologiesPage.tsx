import React, { useState } from 'react';
import { PageId } from '../types';
import { TECHNOLOGIES_DATA } from '../data/companyData';
import { PageHero } from '../components/ui/PageHero';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CtaSection } from '../components/ui/CtaSection';

interface TechnologiesPageProps {
  onNavigate: (page: PageId) => void;
}

export const TechnologiesPage: React.FC<TechnologiesPageProps> = ({ onNavigate }) => {
  const [activeGroup, setActiveGroup] = useState<string>('All');

  const groups = ['All', 'Frontend', 'Backend', 'Database', 'CMS & Platforms', 'Analytics & Marketing'];

  const filtered =
    activeGroup === 'All'
      ? TECHNOLOGIES_DATA
      : TECHNOLOGIES_DATA.filter((item) => item.category === activeGroup);

  return (
    <main className="min-h-screen bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28">
        <Breadcrumbs currentPage="technologies" onNavigate={onNavigate} />
      </div>

      <PageHero
        label="TECHNOLOGY ECOSYSTEM"
        headline="Built with modern technology."
        description="Technology areas associated with our development and training ecosystem. We select technical stacks based on architectural durability, project objectives, and industry relevance."
      />

      {/* Editorial Technology Wall */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-12 border-b border-[#071126]/[0.08]">
            <span className="text-xs font-mono text-[#5B667A] uppercase tracking-wider font-semibold">
              Filter by Domain ({filtered.length} Technologies)
            </span>
            <div className="flex flex-wrap gap-1.5 p-1 glass-panel rounded-full">
              {groups.map((group) => (
                <button
                  key={group}
                  onClick={() => setActiveGroup(group)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                    activeGroup === group
                      ? 'bg-[#071126] text-white shadow-sm font-semibold'
                      : 'text-[#5B667A] hover:text-[#071126]'
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetric Technology Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, idx) => (
              <div
                key={item.name}
                className="glass-panel rounded-2xl p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-[#526FF5] uppercase tracking-wider font-semibold">
                      {item.category}
                    </span>
                    <span className="font-mono text-xs text-[#CBD5E1]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-normal tracking-tight text-[#071126] mb-1 group-hover:text-[#526FF5] transition-colors">
                    {item.name}
                  </h3>

                  <span className="text-xs font-semibold text-[#526FF5] block mb-4">
                    {item.role}
                  </span>

                  <p className="text-xs sm:text-sm text-[#5B667A] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#071126]/[0.06] flex items-center justify-between text-xs text-[#5B667A]">
                  <span>Stack Alignment</span>
                  <span className="text-[#071126] group-hover:text-[#526FF5] transition-colors font-medium">
                    Active Module
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Rigor Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-[#071126]/[0.06]">
            <div className="p-8 rounded-2xl glass-panel-subtle space-y-3">
              <span className="text-xs font-mono text-[#526FF5] uppercase tracking-wider block font-semibold">
                Selection Criteria
              </span>
              <h4 className="text-xl font-semibold text-[#071126] tracking-tight">
                Architectural Resilience
              </h4>
              <p className="text-xs sm:text-sm text-[#5B667A] leading-relaxed">
                Technologies are selected on the merits of performance, long-term maintainability, community ecosystem support, and team familiarity. We resist the churn of transient frameworks in favor of battle-tested foundations.
              </p>
            </div>

            <div className="p-8 rounded-2xl glass-panel-subtle space-y-3">
              <span className="text-xs font-mono text-[#526FF5] uppercase tracking-wider block font-semibold">
                Curriculum Integration
              </span>
              <h4 className="text-xl font-semibold text-[#071126] tracking-tight">
                Training Synergy
              </h4>
              <p className="text-xs sm:text-sm text-[#5B667A] leading-relaxed">
                Our curriculum aligns directly with technologies actively deployed in commercial environments, giving learners direct exposure to the syntax, patterns, and tooling demanded by modern technology organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        onNavigate={onNavigate}
        title="Need technical advice on stack selection or engineering?"
        description="Speak with our development leads in Madhapur to discuss suitable technology stacks for your application."
        primaryCta="Consult Technical Leads"
      />
    </main>
  );
};
