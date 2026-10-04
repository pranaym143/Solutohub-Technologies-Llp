import React from 'react';
import { PageId } from '../../types';
import { ArrowRight, Code2, TrendingUp, GraduationCap } from 'lucide-react';

interface CoreCapabilitiesProps {
  onNavigate: (page: PageId) => void;
}

export const CoreCapabilities: React.FC<CoreCapabilitiesProps> = ({ onNavigate }) => {
  const cards = [
    {
      number: '01',
      tag: 'CAPABILITY 01',
      title: 'DIGITAL SOLUTIONS',
      summary:
        'Websites, web applications, mobile applications, CMS and e-commerce solutions designed around real business needs.',
      items: ['Web Development', 'Application Development', 'CMS & E-commerce'],
      page: 'services' as PageId,
      icon: Code2,
    },
    {
      number: '02',
      tag: 'CAPABILITY 02',
      title: 'DIGITAL GROWTH',
      summary:
        'Digital marketing and analytics-focused strategies designed to help businesses strengthen their online presence.',
      items: ['Digital Marketing', 'Internet Marketing', 'Analytics & Tracking'],
      page: 'services' as PageId,
      icon: TrendingUp,
    },
    {
      number: '03',
      tag: 'CAPABILITY 03',
      title: 'TECHNOLOGY TRAINING',
      summary:
        'Practical technology learning focused on modern development skills, projects and career preparation.',
      items: ['Full-stack Development', 'Modern Web Technologies', 'Practical Project-based Learning'],
      page: 'training' as PageId,
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#F5F8FC] border-t border-[#071126]/[0.06] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block mb-3">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#071126] leading-tight">
            Three ways we create value.
          </h2>
          <p className="text-base text-[#5B667A] mt-3 font-normal max-w-xl">
            Integrated engineering, digital marketing capabilities, and applied project learning for businesses and developers.
          </p>
        </div>

        {/* Minimal Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative glass-panel rounded-2xl p-8 lg:p-10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[0_12px_36px_-6px_rgba(7,17,38,0.08)]"
              >
                <div>
                  {/* Top Row: Oversized Number & Minimal Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#071126]/[0.06]">
                    <span className="font-mono text-3xl lg:text-4xl font-light text-[#5B667A] group-hover:text-[#526FF5] transition-colors tabular-nums">
                      {card.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#526FF5]/[0.08] text-[#526FF5] flex items-center justify-center">
                      <Icon className="w-5 h-5 stroke-[1.6]" />
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <span className="text-[11px] font-mono tracking-widest text-[#526FF5] uppercase block mb-2">
                    {card.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#071126] mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B667A] leading-relaxed mb-6 font-normal">
                    {card.summary}
                  </p>

                  {/* Pillar Items */}
                  <div className="space-y-2 pt-4 border-t border-[#071126]/[0.06] mb-8">
                    {card.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#071126] font-medium">
                        <span className="w-1 h-1 rounded-full bg-[#526FF5]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-[#071126]/[0.06]">
                  <button
                    onClick={() => {
                      onNavigate(card.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#071126] group-hover:text-[#526FF5] transition-colors cursor-pointer"
                  >
                    <span>Explore {card.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#526FF5] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
