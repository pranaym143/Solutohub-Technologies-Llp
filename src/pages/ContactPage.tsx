import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { PageHero } from '../components/ui/PageHero';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ContactForm } from '../components/contact/ContactForm';
import { GoogleMapCard } from '../components/contact/GoogleMapCard';
import { Phone, MapPin, Globe, Shield, Clock } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <main className="min-h-screen bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28">
        <Breadcrumbs currentPage="contact" onNavigate={onNavigate} />
      </div>

      <PageHero
        label="CONNECT WITH SOLUTOHUB"
        headline="Let's Build What's Next."
        description="Tell us what you're building, what you're trying to improve, or what skills you're looking to develop."
      />

      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Main 2-Column: Form + Location / Verified Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Verified Office Card & Maps */}
            <div className="lg:col-span-5 space-y-6">
              <GoogleMapCard />

              {/* Verified Information Disclosure Box */}
              <div className="glass-panel rounded-2xl p-6 space-y-4 text-xs text-[#5B667A]">
                <div className="flex items-center gap-2 text-[#071126] font-semibold">
                  <Shield className="w-4 h-4 text-[#526FF5]" />
                  <span>Verified Corporate Details</span>
                </div>
                <p className="leading-relaxed">
                  Solutohub Technologies LLP is a registered limited liability partnership operating from Madhapur, Hyderabad.
                </p>
                <div className="pt-3 border-t border-[#071126]/[0.06] space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Official Phone:</span>
                    <a href="tel:08919704709" className="text-[#071126] hover:text-[#526FF5] font-mono font-medium">
                      089197 04709
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Location:</span>
                    <span className="text-[#071126] font-medium">Madhapur, Hyderabad, TS 500081</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Global Association:</span>
                    <span className="text-[#071126] font-medium">Melbourne, Australia Link</span>
                  </div>
                </div>
              </div>

              {/* Social Media & Channels Client Note */}
              <div className="glass-panel-subtle rounded-2xl p-5 text-xs text-[#5B667A] space-y-1.5 border border-dashed border-[#CBD5E1]">
                <span className="font-mono text-[10px] text-[#526FF5] uppercase tracking-wider block font-semibold">
                  Communication Channels Verification
                </span>
                <p className="leading-normal">
                  Official corporate email channels and social media profiles will be confirmed and linked directly by Solutohub Technologies LLP management upon site handover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
