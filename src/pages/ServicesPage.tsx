import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/companyData';
import { PageHero } from '../components/ui/PageHero';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CtaSection } from '../components/ui/CtaSection';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Code, Globe, LineChart } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService =
    SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <main className="min-h-screen bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28">
        <Breadcrumbs currentPage="services" onNavigate={onNavigate} />
      </div>

      <PageHero
        label="SOLUTIONS & SERVICES"
        headline="Digital solutions built around your goals."
        description="We build responsive websites, custom web applications, CMS platforms, and data-driven marketing frameworks that deliver measurable business utility."
      />

      {/* Main Interactive Service Architecture Section */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Quick Selector Capsule Bar */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-1.5 glass-panel rounded-2xl mb-14">
            {SERVICES_DATA.map((service) => {
              const isSelected = activeServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`px-4 py-3 text-xs font-medium rounded-xl text-left transition-all cursor-pointer flex flex-col gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526FF5] ${
                    isSelected
                      ? 'bg-[#071126] text-white shadow-md'
                      : 'text-[#5B667A] hover:text-[#071126] hover:bg-black/5'
                  }`}
                >
                  <span className={`font-mono text-[10px] ${isSelected ? 'text-[#7B8CFF]' : 'text-[#5B667A]'}`}>
                    {service.number}
                  </span>
                  <span className="truncate font-semibold">{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Deep Dive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Scope & Description */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-[#526FF5] uppercase tracking-wider font-semibold">
                    {activeService.category} · Service {activeService.number}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-[#071126] leading-tight mb-4">
                  {activeService.title}
                </h2>
                <p className="text-base text-[#5B667A] leading-relaxed font-normal">
                  {activeService.description}
                </p>
              </div>

              {/* Core Capabilities Checklist */}
              <div>
                <h3 className="text-xs font-semibold tracking-wider text-[#071126] uppercase mb-4">
                  Key Deliverables & Capabilities
                </h3>
                <div className="space-y-3">
                  {activeService.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl glass-panel-subtle"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#526FF5] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#071126] font-normal leading-relaxed">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Leveraged */}
              <div className="pt-2">
                <span className="text-xs font-semibold tracking-wider text-[#5B667A] uppercase block mb-3">
                  Technologies Applied
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono bg-[#EEF4FA] text-[#071126] border border-[#CBD5E1] rounded-lg font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Enquiry Trigger */}
              <div className="pt-4">
                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wide text-white bg-[#071126] hover:bg-[#0f1f42] rounded-full transition-colors cursor-pointer shadow-md shadow-[#071126]/10"
                >
                  <span>Request Consultation for {activeService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#526FF5]" />
                </button>
              </div>
            </div>

            {/* Right Column: Execution Process */}
            <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-[#071126]/[0.06] pb-4">
                <span className="text-[11px] font-mono tracking-wider text-[#526FF5] uppercase block mb-1 font-semibold">
                  Delivery Framework
                </span>
                <h3 className="text-lg font-semibold text-[#071126]">
                  Execution Process
                </h3>
              </div>

              <div className="space-y-6">
                {activeService.process.map((step) => (
                  <div key={step.step} className="space-y-1 relative pl-6 border-l border-[#526FF5]/30">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-[#526FF5]" />
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#526FF5] font-semibold">{step.step}</span>
                      <h4 className="text-xs font-semibold text-[#071126] uppercase tracking-wider">
                        {step.label}
                      </h4>
                    </div>
                    <p className="text-xs text-[#5B667A] leading-relaxed pt-1">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#071126]/[0.06] text-[11px] text-[#5B667A]">
                <span>Standardized delivery managed by Hyderabad engineering leads.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Catalog View of All Services */}
      <section className="py-20 lg:py-24 bg-[#F5F8FC] border-t border-[#071126]/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block mb-2">
              ALL CAPABILITIES
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal tracking-[-0.03em] text-[#071126]">
              Full Spectrum Digital Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="glass-panel rounded-2xl p-6 flex flex-col justify-between transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#526FF5] font-semibold">{srv.number}</span>
                    <span className="text-[11px] text-[#5B667A]">{srv.category}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-[#071126] mb-2 tracking-tight">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-[#5B667A] leading-relaxed mb-4">
                    {srv.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#071126]/[0.06]">
                  <button
                    onClick={() => {
                      setActiveServiceId(srv.id);
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs text-[#526FF5] hover:text-[#071126] transition-colors cursor-pointer font-semibold"
                  >
                    <span>Inspect Methodology</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        onNavigate={onNavigate}
        title="Ready to discuss your technology or digital growth goals?"
        description="Contact our solution architects to structure an approach tailored to your timeline and technical criteria."
      />
    </main>
  );
};
