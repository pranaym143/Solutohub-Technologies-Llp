import React from 'react';
import { PageId } from '../../types';
import { COMPANY_INFO } from '../../data/companyData';
import { ArrowUpRight, Phone, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#071126]/[0.08] text-[#5B667A] text-sm">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <span className="font-sans font-bold tracking-tight text-xl text-[#071126] flex items-center gap-1.5">
                SOLUTOHUB
                <span className="w-1.5 h-1.5 rounded-full bg-[#526FF5]" />
              </span>
              <span className="block text-[10px] tracking-[0.24em] text-[#5B667A] uppercase font-semibold mt-0.5">
                TECHNOLOGIES LLP
              </span>
            </div>

            <p className="text-base text-[#071126] font-medium leading-snug">
              Technology. <br />
              Digital Growth. <br />
              Future Skills.
            </p>

            <p className="text-xs text-[#5B667A] leading-relaxed max-w-sm">
              Delivering digital solutions, technology engineering, and practical learning experiences designed to help businesses and professionals grow.
            </p>

            <div className="pt-2 text-xs space-y-1.5 border-t border-[#071126]/[0.06] max-w-sm">
              <div className="flex items-center gap-2 text-[#071126]">
                <Globe className="w-3.5 h-3.5 text-[#526FF5] shrink-0" />
                <span>Hyderabad, India · Melbourne Association</span>
              </div>
              <p className="text-[11px] text-[#5B667A]">
                {COMPANY_INFO.internationalPresence.statement}
              </p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-wider text-[#071126] uppercase">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#526FF5] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#526FF5] transition-colors cursor-pointer text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#526FF5] transition-colors cursor-pointer text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('training')}
                  className="hover:text-[#526FF5] transition-colors cursor-pointer text-left"
                >
                  Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('internships')}
                  className="hover:text-[#526FF5] transition-colors cursor-pointer text-left"
                >
                  Internships
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('technologies')}
                  className="hover:text-[#526FF5] transition-colors cursor-pointer text-left"
                >
                  Technologies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#526FF5] transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-wider text-[#071126] uppercase">
              Capabilities
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#526FF5] transition-colors cursor-pointer text-left"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#526FF5] transition-colors cursor-pointer text-left"
                >
                  Application Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#526FF5] transition-colors cursor-pointer text-left"
                >
                  CMS & E-commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#526FF5] transition-colors cursor-pointer text-left"
                >
                  Digital Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#526FF5] transition-colors cursor-pointer text-left"
                >
                  Web Analytics
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-wider text-[#071126] uppercase">
              Contact
            </p>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#526FF5] shrink-0 mt-0.5" />
                <span className="text-[#5B667A]">
                  Level 6, JSP Imperia Business Center,<br />
                  Solutohub Street No. 3, Patrika Nagar,<br />
                  Madhapur, Hyderabad,<br />
                  Telangana 500081, India
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-3.5 h-3.5 text-[#526FF5] shrink-0" />
                <a
                  href="tel:08919704709"
                  className="text-[#071126] hover:text-[#526FF5] transition-colors font-mono font-medium"
                >
                  089197 04709
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="inline-flex items-center gap-1.5 text-xs text-[#526FF5] hover:text-[#071126] transition-colors font-semibold cursor-pointer"
                >
                  <span>Office Directions & Contact</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Notice */}
      <div className="border-t border-[#071126]/[0.06] bg-[#F5F8FC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B667A]">
          <p>© 2026 Solutohub Technologies LLP. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Registered in Madhapur, Hyderabad</span>
            <span>·</span>
            <span className="text-[#071126] font-medium">Corporate Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
