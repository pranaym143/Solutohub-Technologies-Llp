import React from 'react';
import { COMPANY_INFO } from '../../data/companyData';
import { MapPin, Phone, Clock, ExternalLink, Navigation } from 'lucide-react';

export const GoogleMapCard: React.FC = () => {
  const mapQuery = encodeURIComponent(
    'JSP Imperia Business Center, Patrika Nagar, Madhapur, Hyderabad, Telangana 500081'
  );
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <div className="glass-panel rounded-2xl overflow-hidden flex flex-col justify-between">
      {/* Map Embed Frame */}
      <div className="relative h-64 sm:h-72 w-full bg-[#EEF4FA] overflow-hidden border-b border-[#071126]/[0.06]">
        <iframe
          title="Solutohub Technologies Location - JSP Imperia Business Center Madhapur"
          src={mapsEmbedUrl}
          className="w-full h-full border-0 filter contrast-[105%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Map showing Solutohub Technologies in Madhapur Hyderabad"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-[#071126]/[0.08] px-3 py-1.5 rounded-full text-xs font-mono text-[#071126] flex items-center gap-2 pointer-events-none shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-[#526FF5]" />
          <span>Madhapur Tech Corridor</span>
        </div>
      </div>

      {/* Office Information & Verified Contact Details */}
      <div className="p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-[11px] font-mono tracking-wider text-[#526FF5] uppercase block mb-1">
            Registered Office & Campus
          </span>
          <h3 className="text-xl font-semibold text-[#071126]">
            {COMPANY_INFO.legalName}
          </h3>
          <p className="text-xs sm:text-sm text-[#5B667A] mt-2 leading-relaxed font-normal">
            {COMPANY_INFO.address.line1},<br />
            {COMPANY_INFO.address.line2},<br />
            {COMPANY_INFO.address.locality}, {COMPANY_INFO.address.city},<br />
            {COMPANY_INFO.address.state} {COMPANY_INFO.address.postalCode}, {COMPANY_INFO.address.country}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#071126]/[0.06] text-xs">
          <div>
            <span className="text-[#5B667A] block mb-1">Telephone</span>
            <a
              href="tel:08919704709"
              className="text-[#071126] hover:text-[#526FF5] font-mono text-sm tracking-tight flex items-center gap-1.5 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#526FF5]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          <div>
            <span className="text-[#5B667A] block mb-1">Business Hours</span>
            <div className="text-[#071126] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#526FF5]" />
              <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
            </div>
          </div>
        </div>

        {/* Action Link to Google Maps */}
        <div className="pt-2">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#071126] bg-[#EEF4FA] hover:bg-white border border-[#CBD5E1] rounded-full transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-[#526FF5]" />
            <span>Open in Google Maps / Directions</span>
            <ExternalLink className="w-3 h-3 text-[#5B667A]" />
          </a>
        </div>
      </div>
    </div>
  );
};
