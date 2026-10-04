import React, { useState } from 'react';
import { PageId } from '../types';
import { INTERNSHIP_PILLARS, COMPANY_INFO } from '../data/companyData';
import { PageHero } from '../components/ui/PageHero';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CtaSection } from '../components/ui/CtaSection';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface InternshipsPageProps {
  onNavigate: (page: PageId) => void;
}

export const InternshipsPage: React.FC<InternshipsPageProps> = ({ onNavigate }) => {
  const [internshipForm, setInternshipForm] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    techInterest: 'Full Stack Development',
    statement: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!internshipForm.name || !internshipForm.email || !internshipForm.phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28">
        <Breadcrumbs currentPage="internships" onNavigate={onNavigate} />
      </div>

      <PageHero
        label="EXPERIENCE-BASED DEVELOPMENT"
        headline="Turn Knowledge Into Experience."
        description="Public company information associates Solutohub with internship-oriented programs designed to bridge academic learning with practical engineering environments."
      >
        <button
          onClick={() => {
            const formElem = document.getElementById('internship-application');
            if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wide text-white bg-[#071126] hover:bg-[#0f1f42] rounded-full transition-colors cursor-pointer shadow-md"
        >
          <span>Enquire About Internships</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#526FF5]" />
        </button>
      </PageHero>

      {/* Mandatory Regulatory / Ethical Disclaimer Box */}
      <section className="py-8 bg-[#FFFFFF] border-b border-[#071126]/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="p-4 sm:p-5 rounded-2xl glass-panel-subtle flex items-start gap-3 text-xs text-[#5B667A]">
            <AlertCircle className="w-4 h-4 text-[#526FF5] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-[#071126] font-semibold">Program Eligibility Notice:</strong>{' '}
              Internship and placement-related programs are subject to the company's current offerings and eligibility. Solutohub Technologies does not offer guaranteed employment or arbitrary placement percentages.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Pillars Progression Architecture */}
      <section className="py-20 lg:py-28 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block mb-3">
              THE PROGRESSION MODEL
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-[#071126]">
              Four steps of engineering growth.
            </h2>
            <p className="text-sm sm:text-base text-[#5B667A] mt-3 font-normal leading-relaxed">
              Our internship orientation guides participants through a disciplined sequence from foundational comprehension to production-style problem solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERNSHIP_PILLARS.map((pillar) => (
              <div
                key={pillar.step}
                className="glass-panel rounded-2xl p-6 sm:p-8 transition-all hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#071126]/[0.06]">
                    <span className="font-mono text-2xl font-light text-[#526FF5] tabular-nums">
                      {pillar.step}
                    </span>
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#071126] uppercase">
                      {pillar.phase}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#071126] mb-3 tracking-tight">
                    {pillar.headline}
                  </h3>

                  <p className="text-xs text-[#5B667A] leading-relaxed mb-6 font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#071126]/[0.06]">
                  <span className="text-[10px] font-mono text-[#526FF5] uppercase block mb-2 font-semibold">
                    Focus Deliverables
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#5B667A]">
                    {pillar.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#526FF5]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Inquiry Form Section */}
      <section id="internship-application" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#071126]/[0.06]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block mb-2">
              APPLY / INQUIRE
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.03em] text-[#071126]">
              Enquire About Internships
            </h2>
            <p className="text-sm text-[#5B667A] mt-2">
              Submit your background details to check current cohort availability, prerequisites, and program details.
            </p>
          </div>

          {isSuccess ? (
            <div className="glass-panel rounded-2xl p-8 sm:p-12 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#526FF5] mx-auto" />
              <h3 className="text-2xl font-semibold text-[#071126] tracking-tight">
                Internship Inquiry Received
              </h3>
              <p className="text-sm text-[#5B667A] leading-relaxed max-w-md mx-auto">
                Thank you, {internshipForm.name}. Our internship program coordinators at the Madhapur center will review your submission and contact you regarding open cohorts.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 text-xs font-semibold text-[#071126] bg-[#EEF4FA] hover:bg-white border border-[#CBD5E1] rounded-full transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-2xl p-6 sm:p-10 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#071126] mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ananya Rao"
                    value={internshipForm.name}
                    onChange={(e) => setInternshipForm({ ...internshipForm, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-sm text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#071126] mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ananya@example.com"
                    value={internshipForm.email}
                    onChange={(e) => setInternshipForm({ ...internshipForm, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-sm text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#071126] mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="089197 04709"
                    value={internshipForm.phone}
                    onChange={(e) => setInternshipForm({ ...internshipForm, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-sm text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#071126] mb-1.5">
                    Current Qualification / Status
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. B.Tech CS / Final Year / Graduate"
                    value={internshipForm.qualification}
                    onChange={(e) =>
                      setInternshipForm({ ...internshipForm, qualification: e.target.value })
                    }
                    className="w-full px-4 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-sm text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#071126] mb-1.5">
                  Primary Technology Track
                </label>
                <select
                  value={internshipForm.techInterest}
                  onChange={(e) =>
                    setInternshipForm({ ...internshipForm, techInterest: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-sm text-[#071126] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20"
                >
                  <option value="Full Stack Development">Full Stack Development (MERN / LAMP)</option>
                  <option value="Frontend Development (React / Angular)">Frontend Development (React / Angular)</option>
                  <option value="Backend & Database (Node.js, PHP, SQL)">Backend & Database (Node.js, PHP, SQL)</option>
                  <option value="Digital Marketing & Web Analytics">Digital Marketing & Web Analytics</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#071126] mb-1.5">
                  Statement of Interest or Prior Projects
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us briefly about any prior programming experience or areas you want to deepen..."
                  value={internshipForm.statement}
                  onChange={(e) =>
                    setInternshipForm({ ...internshipForm, statement: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-sm text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold tracking-wide text-white bg-[#071126] hover:bg-[#0f1f42] rounded-full transition-colors cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Enquire About Internships</span>
                      <ArrowRight className="w-4 h-4 text-[#526FF5]" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#5B667A] text-center leading-normal">
                Internship offerings, prerequisites, and schedules are determined by Solutohub Technologies LLP.
              </p>
            </form>
          )}
        </div>
      </section>

      <CtaSection
        onNavigate={onNavigate}
        title="Ready to gain practical software project experience?"
        description="Speak with our internship coordinator to review prerequisites and schedule a counseling session at our Madhapur campus."
        primaryCta="Contact Coordinator"
      />
    </main>
  );
};
