import React from 'react';

interface PageHeroProps {
  label: string;
  headline: string;
  description: string;
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  label,
  headline,
  description,
  children,
}) => {
  return (
    <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-[#071126]/[0.06] bg-gradient-to-b from-[#FFFFFF] via-[#F5F8FC] to-[#EEF4FA] overflow-hidden studio-grid-pattern">
      {/* Studio Radial Light */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#526FF5]/[0.05] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-[0.22em] text-[#526FF5] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#526FF5]" />
            <span>{label}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[-0.035em] text-[#071126] mb-5 leading-[1.1] text-balance">
            {headline}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#5B667A] leading-relaxed max-w-2xl font-normal text-balance">
            {description}
          </p>

          {children && <div className="mt-8 flex flex-wrap items-center gap-4">{children}</div>}
        </div>
      </div>
    </div>
  );
};
