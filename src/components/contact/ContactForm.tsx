import React, { useState } from 'react';
import { ContactFormData } from '../../types';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    requirement: 'Digital Solutions (Web & Apps)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const validateForm = () => {
    if (!formData.fullName.trim()) return 'Please enter your full name.';
    if (!formData.email.trim()) return 'Please provide an email address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) return 'Please provide a contact phone number.';
    if (!formData.message.trim()) return 'Please write a brief message or requirements outline.';
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // TODO: Connect this placeholder handler to the client's official backend API / email relay service.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      requirement: 'Digital Solutions (Web & Apps)',
      message: '',
    });
  };

  if (isSuccess) {
    return (
      <div className="glass-panel rounded-2xl p-8 sm:p-12 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-[#526FF5] mx-auto" />
        <h3 className="text-2xl font-semibold text-[#071126] tracking-tight">
          Enquiry Sent Successfully
        </h3>
        <p className="text-sm text-[#5B667A] leading-relaxed max-w-md mx-auto">
          Thank you for contacting Solutohub Technologies LLP. Our team in Madhapur, Hyderabad will review your requirements and respond promptly.
        </p>
        <div className="pt-4">
          <button
            onClick={handleReset}
            className="px-6 py-2.5 text-xs font-semibold text-[#071126] bg-[#EEF4FA] hover:bg-white border border-[#CBD5E1] rounded-full transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-2xl p-6 sm:p-10 space-y-5 text-left"
    >
      <div className="border-b border-[#071126]/[0.06] pb-4 mb-2">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#071126] tracking-tight">
          Send an Enquiry
        </h3>
        <p className="text-xs text-[#5B667A] mt-1">
          Complete the fields below to connect regarding technology solutions, training, or partnerships.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-xs font-medium text-[#071126] mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="e.g. S. Venkat"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-sm text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20 transition-all"
        />
      </div>

      {/* Email & Phone Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#071126] mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="contact@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-sm text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#071126] mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="089197 04709"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-sm text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20 transition-all"
          />
        </div>
      </div>

      {/* Company (Optional) */}
      <div>
        <label className="block text-xs font-medium text-[#071126] mb-1.5">
          Company / Organization (Optional)
        </label>
        <input
          type="text"
          placeholder="e.g. Acme Innovations"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-sm text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20 transition-all"
        />
      </div>

      {/* Requirement Category */}
      <div>
        <label className="block text-xs font-medium text-[#071126] mb-1.5">
          Requirement Focus <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.requirement}
          onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-sm text-[#071126] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20 transition-all"
        >
          <option value="Digital Solutions (Web & Apps)">Digital Solutions (Web & Apps)</option>
          <option value="CMS & E-commerce Development">CMS & E-commerce Development</option>
          <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
          <option value="Google Analytics & Measurement">Google Analytics & Measurement</option>
          <option value="Technology Training Programs">Technology Training Programs</option>
          <option value="Internship Inquiry">Internship Inquiry</option>
          <option value="General Corporate Inquiry">General Corporate Inquiry</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-[#071126] mb-1.5">
          Message / Requirement Details <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          required
          placeholder="Please describe your requirements, project scope, or training objectives..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 bg-[#F5F8FC] border border-[#CBD5E1] rounded-xl text-sm text-[#071126] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#526FF5] focus:ring-2 focus:ring-[#526FF5]/20 transition-all resize-none"
        />
      </div>

      {/* Submit CTA */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold tracking-wide text-white bg-[#071126] hover:bg-[#0f1f42] rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 shadow-md shadow-[#071126]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#526FF5]"
        >
          {isSubmitting ? (
            <span>Sending Enquiry...</span>
          ) : (
            <>
              <span>Send Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#526FF5]" />
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-[#5B667A] text-center leading-normal pt-1">
        Enquiries are handled directly by Solutohub Technologies LLP. We respect your confidentiality.
      </p>
    </form>
  );
};
