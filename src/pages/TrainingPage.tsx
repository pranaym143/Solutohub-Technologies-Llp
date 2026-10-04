import React, { useState } from 'react';
import { PageId, CourseItem } from '../types';
import { TRAINING_COURSES } from '../data/companyData';
import { PageHero } from '../components/ui/PageHero';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CtaSection } from '../components/ui/CtaSection';
import { CourseEnquiryModal } from '../components/ui/CourseEnquiryModal';
import { ArrowRight, BookOpen, Check, Layers, Code2, Users, HelpCircle } from 'lucide-react';

interface TrainingPageProps {
  onNavigate: (page: PageId) => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onNavigate }) => {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Web & Frontend', 'Backend & Database', 'Digital Marketing'];

  const filteredCourses =
    activeCategory === 'All'
      ? TRAINING_COURSES
      : TRAINING_COURSES.filter((c) => c.category === activeCategory);

  const handleOpenCourse = (course: CourseItem) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28">
        <Breadcrumbs currentPage="training" onNavigate={onNavigate} />
      </div>

      <PageHero
        label="PRACTICAL SKILL BUILDING"
        headline="Build Skills That Work in the Real World."
        description="Practical technology learning designed around modern development skills and real-world implementation."
      >
        <button
          onClick={() => {
            handleOpenCourse(TRAINING_COURSES[0]);
          }}
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wide text-white bg-[#071126] hover:bg-[#0f1f42] rounded-full transition-colors cursor-pointer shadow-md"
        >
          <span>Enquire for Upcoming Batches</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#526FF5]" />
        </button>
      </PageHero>

      {/* The 4-Pillar Educational Methodology (Learn, Build, Apply, Grow) */}
      <section className="py-16 bg-[#FFFFFF] border-b border-[#071126]/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl glass-panel-subtle space-y-2">
              <span className="text-[11px] font-mono text-[#526FF5] uppercase tracking-wider block font-semibold">
                01 · LEARN
              </span>
              <h3 className="text-base font-semibold text-[#071126]">
                Foundational Theory
              </h3>
              <p className="text-xs text-[#5B667A] leading-relaxed">
                Clear syntax foundations, system architecture principles, and core computer science fundamentals.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel-subtle space-y-2">
              <span className="text-[11px] font-mono text-[#526FF5] uppercase tracking-wider block font-semibold">
                02 · BUILD
              </span>
              <h3 className="text-base font-semibold text-[#071126]">
                Project-Oriented Labs
              </h3>
              <p className="text-xs text-[#5B667A] leading-relaxed">
                Developers code actual applications and modules from database schemas to client-side interfaces.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel-subtle space-y-2">
              <span className="text-[11px] font-mono text-[#526FF5] uppercase tracking-wider block font-semibold">
                03 · APPLY
              </span>
              <h3 className="text-base font-semibold text-[#071126]">
                Engineering Workflows
              </h3>
              <p className="text-xs text-[#5B667A] leading-relaxed">
                Debugging practices, code review standards, version control hygiene, and REST API integration.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel-subtle space-y-2">
              <span className="text-[11px] font-mono text-[#526FF5] uppercase tracking-wider block font-semibold">
                04 · GROW
              </span>
              <h3 className="text-base font-semibold text-[#071126]">
                Professional Readiness
              </h3>
              <p className="text-xs text-[#5B667A] leading-relaxed">
                Portfolio formulation, code walk-throughs, and technical interview preparedness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Catalog Section */}
      <section className="py-20 lg:py-28 bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.24em] text-[#526FF5] uppercase block mb-2">
                PROGRAM DIRECTORY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-[-0.03em] text-[#071126]">
                Available Technology Tracks
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 glass-panel rounded-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#071126] text-white shadow-sm font-semibold'
                      : 'text-[#5B667A] hover:text-[#071126]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between text-xs text-[#5B667A] mb-4 pb-3 border-b border-[#071126]/[0.06]">
                    <span className="font-mono text-[10px] text-[#526FF5] uppercase font-semibold">
                      {course.category}
                    </span>
                    <span className="text-[11px] text-[#5B667A]">{course.format}</span>
                  </div>

                  {/* Course Name */}
                  <h3 className="text-xl font-semibold text-[#071126] group-hover:text-[#526FF5] transition-colors mb-2.5 tracking-tight">
                    {course.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#5B667A] leading-relaxed mb-6 font-normal">
                    {course.summary}
                  </p>

                  {/* Key Technologies */}
                  <div className="mb-6">
                    <span className="text-[11px] font-semibold text-[#071126] block mb-2 uppercase tracking-wider">
                      Key Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.keyTechnologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-[11px] font-mono bg-[#EEF4FA] text-[#071126] border border-[#CBD5E1] rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Outcomes */}
                  <div className="pt-4 border-t border-[#071126]/[0.04] space-y-2 mb-6">
                    {course.learningOutcomes.slice(0, 2).map((outcome, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#5B667A]">
                        <Check className="w-3.5 h-3.5 text-[#526FF5] shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-4 border-t border-[#071126]/[0.06] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#5B667A]">
                    Syllabus & Batches
                  </span>
                  <button
                    onClick={() => handleOpenCourse(course)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#071126] group-hover:text-[#526FF5] transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#526FF5] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Transparency Notice */}
          <div className="mt-12 p-6 rounded-2xl glass-panel text-xs text-[#5B667A] space-y-2 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-[#071126] font-semibold">
              <HelpCircle className="w-4 h-4 text-[#526FF5]" />
              <span>Enrollment & Scheduling Transparency</span>
            </div>
            <p className="leading-relaxed">
              Solutohub Technologies does not publish artificial placement statistics, speculative batch fees, or unrealistic guarantee claims. Exact batch schedules, current course fees, seat availability, and prerequisite evaluations are provided directly during consultation with our Madhapur campus advisors.
            </p>
          </div>
        </div>
      </section>

      {/* Course Modal */}
      <CourseEnquiryModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <CtaSection
        onNavigate={onNavigate}
        title="Interested in modern technology skills?"
        description="Connect with our academic team in Madhapur to receive full course outlines, prerequisites, and upcoming schedules."
        primaryCta="Contact Academic Team"
      />
    </main>
  );
};
