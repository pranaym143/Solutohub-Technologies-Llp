import React, { useState, useEffect } from 'react';
import { CourseItem } from '../../types';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface CourseEnquiryModalProps {
  course: CourseItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CourseEnquiryModal: React.FC<CourseEnquiryModalProps> = ({
  course,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    learningGoal: '',
    preferredMode: 'Classroom (Madhapur, Hyderabad)',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      learningGoal: '',
      preferredMode: 'Classroom (Madhapur, Hyderabad)',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#071126]/40 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-white border border-[#071126]/[0.1] rounded-2xl p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#5B667A] hover:text-[#071126] rounded-full hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#526FF5] mx-auto" />
            <h3 className="text-xl font-semibold text-[#071126]">
              Enquiry Received
            </h3>
            <p className="text-sm text-[#5B667A] leading-relaxed max-w-sm mx-auto">
              Thank you for your interest in <span className="text-[#071126] font-medium">{course.title}</span>. Our coordinators at the Madhapur office will reach out regarding upcoming schedules and curriculum details.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#071126] hover:bg-[#0f1f42] rounded-full transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-mono tracking-wider text-[#526FF5] uppercase block mb-1">
                Course Enquiry
              </span>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-semibold text-[#071126] tracking-tight">
                {course.title}
              </h3>
              <p className="text-xs text-[#5B667A] mt-1.5 leading-relaxed">
                {course.summary}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-[#071126] font-medium mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#071126] font-medium mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#071126] font-medium mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 089197 04709"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#071126] font-medium mb-1.5">
                  Learning Mode
                </label>
                <select
                  value={formData.preferredMode}
                  onChange={(e) => setFormData({ ...formData, preferredMode: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-[#071126] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20 transition-all"
                >
                  <option value="Classroom (Madhapur, Hyderabad)">
                    Classroom (Madhapur, Hyderabad Center)
                  </option>
                  <option value="Live Virtual Session">Live Virtual Session</option>
                  <option value="Weekend / Flexible Schedule">Weekend / Flexible Schedule</option>
                </select>
              </div>

              <div>
                <label className="block text-[#071126] font-medium mb-1.5">
                  Learning Goals / Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Share your current programming experience or specific curriculum interests..."
                  value={formData.learningGoal}
                  onChange={(e) => setFormData({ ...formData, learningGoal: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20 transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#071126] hover:bg-[#0f1f42] rounded-full transition-colors disabled:opacity-50 cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Course Enquiry</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#526FF5]" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#5B667A] text-center leading-normal pt-1">
                Batch schedules and syllabus consultations are coordinated directly with Solutohub Technologies advisors.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
