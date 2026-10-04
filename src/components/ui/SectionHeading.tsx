import React from 'react';

interface SectionHeadingProps {
  label?: string;
  headline: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  headline,
  description,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 lg:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'
      } ${className}`}
    >
      {label && (
        <span className="block text-xs font-semibold tracking-[0.2em] text-[#6D5DFC] uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 font-display text-balance leading-tight">
        {headline}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-[#A7ADB8] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
