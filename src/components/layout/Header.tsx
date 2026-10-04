import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { ArrowRight, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'training', label: 'Training' },
    { id: 'internships', label: 'Internships' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Left: Refined Wordmark Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex flex-col items-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526FF5] rounded cursor-pointer"
          aria-label="Solutohub Technologies Home"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-sans font-bold tracking-tight text-lg sm:text-xl text-[#071126] group-hover:text-[#526FF5] transition-colors">
              SOLUTOHUB
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#526FF5]" />
          </div>
          <span className="text-[9.5px] font-sans tracking-[0.24em] text-[#5B667A] uppercase font-semibold -mt-0.5">
            TECHNOLOGIES
          </span>
        </button>

        {/* Center: Floating Rounded Capsule Navigation (Desktop) */}
        <nav
          className="hidden md:flex items-center gap-1 sm:gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-white/80 shadow-[0_4px_20px_-2px_rgba(7,17,38,0.06)]"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[13px] font-medium tracking-normal px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#526FF5] ${
                  isActive
                    ? 'bg-[#071126] text-white shadow-sm font-semibold'
                    : 'text-[#5B667A] hover:text-[#071126] hover:bg-white/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Dark Navy Rounded Pill CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 text-xs font-semibold tracking-wide text-white bg-[#071126] hover:bg-[#0f1f42] rounded-full transition-all duration-200 shadow-md shadow-[#071126]/10 hover:shadow-lg hover:shadow-[#071126]/15 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526FF5]"
          >
            <span>Let's Talk</span>
            <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#526FF5] flex items-center justify-center transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full glass-panel text-[#071126] hover:text-[#526FF5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526FF5] cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-[74px] glass-panel rounded-2xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200 border border-white/80">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm font-medium py-2.5 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#071126] text-white font-semibold'
                      : 'text-[#5B667A] hover:bg-black/5 hover:text-[#071126]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#526FF5]" />}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#071126]/[0.08]">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#071126] hover:bg-[#0f1f42] rounded-xl transition-colors shadow-md cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
