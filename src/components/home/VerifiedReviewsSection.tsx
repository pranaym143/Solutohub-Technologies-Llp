import React from 'react';
import { Star, ShieldCheck, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const VerifiedReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFFFFF] border-t border-[#071126]/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block mb-3">
            VERIFIED PROOF & REPUTATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[-0.03em] text-[#071126]">
            Independent evaluations.
          </h2>
          <p className="text-sm sm:text-base text-[#5B667A] mt-3 font-normal leading-relaxed">
            Public feedback for Solutohub Technologies is gathered directly via verified platforms. We maintain strict transparency and do not display fabricated customer endorsements.
          </p>
        </div>

        {/* Transparent Verification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Verified Google Business Location */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#526FF5]">
                <ShieldCheck className="w-4 h-4 text-[#526FF5]" />
                <span className="font-semibold">Google Business Profile</span>
              </div>
              <h3 className="text-lg font-semibold text-[#071126] mb-2 tracking-tight">
                Public Business Listing
              </h3>
              <p className="text-xs text-[#5B667A] leading-relaxed">
                Registered business listing at Level 6, JSP Imperia Business Center, Madhapur, Hyderabad. Direct reviews are logged via Google Maps.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#071126]/[0.06] flex items-center justify-between text-xs">
              <span className="text-[#5B667A]">Hyderabad Center</span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  'Solutohub Technologies LLP JSP Imperia Business Center Madhapur Hyderabad'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="text-[#526FF5] hover:text-[#071126] transition-colors inline-flex items-center gap-1 font-semibold"
              >
                <span>View on Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Placeholders for Verified Client Reviews */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-4 text-[#526FF5]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#526FF5]" />
                ))}
              </div>
              <h3 className="text-lg font-semibold text-[#071126] mb-2 tracking-tight">
                Client Review Slot
              </h3>
              <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-[#071126]/[0.06] text-xs text-[#5B667A] font-mono italic leading-relaxed">
                "Client review will be inserted here upon direct synchronization with verified Google Business review feed."
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#071126]/[0.06] text-xs text-[#5B667A]">
              <span>Authentic Client Feedback Protocol</span>
            </div>
          </div>

          {/* Card 3: Training Feedback Slot */}
          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 mb-4 text-[#526FF5]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#526FF5]" />
                ))}
              </div>
              <h3 className="text-lg font-semibold text-[#071126] mb-2 tracking-tight">
                Student & Intern Feedback Slot
              </h3>
              <div className="p-3.5 rounded-xl bg-[#F5F8FC] border border-[#071126]/[0.06] text-xs text-[#5B667A] font-mono italic leading-relaxed">
                "Verified learner / intern review will be inserted here upon participant consent and documentation."
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#071126]/[0.06] text-xs text-[#5B667A]">
              <span>Verified Educational Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
