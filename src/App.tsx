import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TrainingPage } from './pages/TrainingPage';
import { InternshipsPage } from './pages/InternshipsPage';
import { TechnologiesPage } from './pages/TechnologiesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getInitialPage = (): PageId => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'training',
        'internships',
        'technologies',
        'contact',
      ];
      if (validPages.includes(hash)) {
        return hash;
      }
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);

  // Sync hash with browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'training',
        'internships',
        'technologies',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F8FC] text-[#071126] flex flex-col font-sans selection:bg-[#526FF5]/20 selection:text-[#071126]">
      {/* Sticky Top Navigation */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <div className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'training' && <TrainingPage onNavigate={handleNavigate} />}
        {currentPage === 'internships' && <InternshipsPage onNavigate={handleNavigate} />}
        {currentPage === 'technologies' && <TechnologiesPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      </div>

      {/* Global Minimalist Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
