import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { PageHero } from '../components/ui/PageHero';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CtaSection } from '../components/ui/CtaSection';
import { Building2, MapPin, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <main className="min-h-screen bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28">
        <Breadcrumbs currentPage="about" onNavigate={onNavigate} />
      </div>

      <PageHero
        label="ABOUT SOLUTOHUB TECHNOLOGIES"
        headline="Technology With Purpose."
        description="Solutohub Technologies LLP is a technology and digital solutions company providing software and web development, digital marketing services, and practical technology training programs designed to help businesses and aspiring professionals build and grow in the digital world."
      />

      {/* Organizational Story & Context */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block">
                ORGANIZATIONAL OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-[#071126] leading-tight">
                Bridging engineering solutions with practical knowledge.
              </h2>
              <p className="text-base text-[#5B667A] leading-relaxed">
                Operating from Madhapur, Hyderabad—the vibrant center of Telangana's technology landscape—Solutohub Technologies LLP was structured to address two interconnected industry realities: enterprises require dependable, responsive digital applications, and modern talent requires practical, project-tested engineering skills.
              </p>
              <p className="text-base text-[#5B667A] leading-relaxed">
                Rather than treating digital solutions and technology education as separate worlds, our teams leverage real architectural patterns from software development directly into our training modules and internship environments.
              </p>

              {/* Factual Context Box */}
              <div className="pt-6 border-t border-[#071126]/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#071126]">
                  <Building2 className="w-4 h-4 text-[#526FF5]" />
                  <span className="font-semibold">Solutohub Technologies LLP (Registered Entity)</span>
                </div>
                <p className="text-xs text-[#5B667A] leading-normal">
                  Registered address: Level 6, JSP Imperia Business Center, Solutohub Street No. 3, Patrika Nagar, Madhapur, Hyderabad, Telangana 500081, India.
                </p>
                <p className="text-xs text-[#5B667A] leading-normal">
                  {COMPANY_INFO.internationalPresence.statement}
                </p>
              </div>
            </div>

            {/* Campus Architectural Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden glass-panel p-2 shadow-lg">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="/src/assets/images/solutohub_hyderabad_tech_campus_1791130995950.jpg"
                    alt="Solutohub Technologies Hyderabad Tech District"
                    className="w-full h-80 lg:h-96 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#071126]">
                      <MapPin className="w-3.5 h-3.5 text-[#526FF5]" />
                      <span className="font-semibold">Madhapur, Hyderabad</span>
                    </div>
                    <span className="text-[11px] text-[#5B667A] block mt-1">
                      JSP Imperia Business Center Corridor
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe (Brand Values) */}
      <section className="py-20 lg:py-28 bg-[#F5F8FC] border-t border-[#071126]/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block mb-3">
              WHAT WE BELIEVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-[#071126]">
              Principles guiding our work and learning.
            </h2>
            <p className="text-xs text-[#5B667A] mt-2 font-mono">
              Note: These represent Solutohub brand values and design philosophies for current engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.beliefs.map((belief, idx) => (
              <div
                key={belief.title}
                className="glass-panel rounded-2xl p-8 transition-all hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-light text-[#526FF5] mb-5 block tabular-nums">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-[#071126] mb-2 tracking-tight">
                    {belief.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#526FF5] mb-3">
                    {belief.statement}
                  </p>
                  <p className="text-xs text-[#5B667A] leading-relaxed">
                    {belief.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Practice Summary */}
      <section className="py-20 lg:py-24 bg-[#FFFFFF] border-t border-[#071126]/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl glass-panel-subtle">
              <span className="text-xs font-mono text-[#526FF5] block mb-2 uppercase font-semibold">01 · Digital Engineering</span>
              <h4 className="text-lg font-semibold text-[#071126] mb-2">Web & Application Development</h4>
              <p className="text-xs text-[#5B667A] leading-relaxed">
                Full-cycle web development, custom web applications, responsive business sites, and CMS platforms engineered around reliable architectures.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel-subtle">
              <span className="text-xs font-mono text-[#526FF5] block mb-2 uppercase font-semibold">02 · Digital Growth</span>
              <h4 className="text-lg font-semibold text-[#071126] mb-2">Marketing Strategy & Analytics</h4>
              <p className="text-xs text-[#5B667A] leading-relaxed">
                Data-guided Internet marketing, organic search visibility (SEO), and Google Analytics conversion tracking designed to establish commercial footprint.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel-subtle">
              <span className="text-xs font-mono text-[#526FF5] block mb-2 uppercase font-semibold">03 · Practical Education</span>
              <h4 className="text-lg font-semibold text-[#071126] mb-2">Applied Training & Internships</h4>
              <p className="text-xs text-[#5B667A] leading-relaxed">
                Project-oriented training in modern full-stack development, React, Angular, Node.js, and structured internship models emphasizing genuine project code.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection onNavigate={onNavigate} />
    </main>
  );
};
