import React from 'react';
import { PageId } from '../types';
import { InteractiveTechHero } from '../components/home/InteractiveTechHero';
import { TrustIntroSection } from '../components/home/TrustIntroSection';
import { CoreCapabilities } from '../components/home/CoreCapabilities';
import { HomeServicesPreview } from '../components/home/HomeServicesPreview';
import { TechWallSection } from '../components/home/TechWallSection';
import { HomeTrainingInternshipsPreview } from '../components/home/HomeTrainingInternshipsPreview';
import { MelbourneHyderabadSection } from '../components/home/MelbourneHyderabadSection';
import { VerifiedReviewsSection } from '../components/home/VerifiedReviewsSection';
import { CtaSection } from '../components/ui/CtaSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main className="min-h-screen">
      {/* 01 — Hero */}
      <InteractiveTechHero onNavigate={onNavigate} />

      {/* 02 — Introduction */}
      <TrustIntroSection onNavigate={onNavigate} />

      {/* 03 — Core Capabilities */}
      <CoreCapabilities onNavigate={onNavigate} />

      {/* 04 — Services Portfolio */}
      <HomeServicesPreview onNavigate={onNavigate} />

      {/* 05 — Technology Ecosystem */}
      <TechWallSection onNavigate={onNavigate} />

      {/* 06 & 07 — Training & Internships Overview */}
      <HomeTrainingInternshipsPreview onNavigate={onNavigate} />

      {/* 08 — About & Cross-Border Connection */}
      <MelbourneHyderabadSection onNavigate={onNavigate} />

      {/* 09 — Trust / Reviews */}
      <VerifiedReviewsSection />

      {/* 10 — Contact CTA */}
      <CtaSection onNavigate={onNavigate} />
    </main>
  );
};
