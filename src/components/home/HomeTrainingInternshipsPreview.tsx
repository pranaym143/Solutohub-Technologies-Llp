import React from 'react';
import { PageId } from '../../types';
import { ArrowRight, BookOpen, Briefcase, CheckCircle2 } from 'lucide-react';

interface HomeTrainingInternshipsPreviewProps {
  onNavigate: (page: PageId) => void;
}

export const HomeTrainingInternshipsPreview: React.FC<HomeTrainingInternshipsPreviewProps> = ({
  onNavigate,
}) => {
  return (
    <section className="py-24 lg:py-32 bg-[#F5F8FC] border-t border-[#071126]/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Practical Training Preview */}
          <div className="glass-panel rounded-2xl p-8 lg:p-10 flex flex-col justify-between group hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#526FF5] uppercase font-semibold mb-4">
                <BookOpen className="w-4 h-4 text-[#526FF5]" />
                <span>PRACTICAL TRAINING</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-normal tracking-[-0.03em] text-[#071126] mb-3">
                Build Skills That Work in the Real World.
              </h3>

              <p className="text-sm text-[#5B667A] leading-relaxed mb-6 font-normal">
                Hands-on training designed around modern development skills: Full Stack Development, React, Angular/AngularJS, Node.js, PHP & MySQL, MongoDB, and Digital Marketing Analytics.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-[#071126] font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#526FF5]" />
                  <span>Full Stack Web Engineering</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#526FF5]" />
                  <span>React & Modern Frontend</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#526FF5]" />
                  <span>Node.js Backend & APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#526FF5]" />
                  <span>Google Analytics & Growth</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#071126]/[0.06] flex items-center justify-between">
              <span className="text-xs text-[#5B667A]">Project-Oriented Syllabus</span>
              <button
                onClick={() => {
                  onNavigate('training');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#071126] hover:text-[#526FF5] transition-colors cursor-pointer"
              >
                <span>Explore Training Tracks</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#526FF5]" />
              </button>
            </div>
          </div>

          {/* Card 2: Internship Pathway Preview */}
          <div className="glass-panel rounded-2xl p-8 lg:p-10 flex flex-col justify-between group hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#526FF5] uppercase font-semibold mb-4">
                <Briefcase className="w-4 h-4 text-[#526FF5]" />
                <span>INTERNSHIP PROGRAM</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-normal tracking-[-0.03em] text-[#071126] mb-3">
                Turn Knowledge Into Experience.
              </h3>

              <p className="text-sm text-[#5B667A] leading-relaxed mb-6 font-normal">
                Structured internships centered on genuine implementation: 01 Learn foundational standards, 02 Build functional software modules, 03 Apply engineering workflows, 04 Grow career preparedness.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white/60 border border-[#071126]/[0.04]">
                  <span className="font-semibold text-[#071126]">01 Learn & Review</span>
                  <span className="text-[#5B667A]">Syntax & Architecture</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white/60 border border-[#071126]/[0.04]">
                  <span className="font-semibold text-[#071126]">02 Build & Code</span>
                  <span className="text-[#5B667A]">Real Project Repositories</span>
                </div>
                <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white/60 border border-[#071126]/[0.04]">
                  <span className="font-semibold text-[#071126]">03 Apply & Debug</span>
                  <span className="text-[#5B667A]">Collaborative Workflows</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#071126]/[0.06] flex items-center justify-between">
              <span className="text-xs text-[#5B667A]">Subject to eligibility</span>
              <button
                onClick={() => {
                  onNavigate('internships');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#071126] hover:text-[#526FF5] transition-colors cursor-pointer"
              >
                <span>Enquire About Internships</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#526FF5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
