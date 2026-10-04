import React from 'react';
import { PageId } from '../../types';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  subItem?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  currentPage,
  onNavigate,
  subItem,
}) => {
  const pageLabels: Record<PageId, string> = {
    home: 'Home',
    about: 'About',
    services: 'Services',
    training: 'Training',
    internships: 'Internships',
    technologies: 'Technologies',
    contact: 'Contact',
  };

  if (currentPage === 'home') return null;

  return (
    <nav aria-label="Breadcrumbs" className="mb-6 flex items-center gap-2 text-xs text-[#5B667A]">
      <button
        onClick={() => onNavigate('home')}
        className="hover:text-[#526FF5] transition-colors cursor-pointer"
      >
        Home
      </button>
      <ChevronRight className="w-3 h-3 text-[#CBD5E1]" />
      {subItem ? (
        <>
          <button
            onClick={() => onNavigate(currentPage)}
            className="hover:text-[#526FF5] transition-colors cursor-pointer"
          >
            {pageLabels[currentPage]}
          </button>
          <ChevronRight className="w-3 h-3 text-[#CBD5E1]" />
          <span className="text-[#071126] font-medium">{subItem}</span>
        </>
      ) : (
        <span className="text-[#071126] font-medium">{pageLabels[currentPage]}</span>
      )}
    </nav>
  );
};
