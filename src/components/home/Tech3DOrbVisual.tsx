import React, { useState } from 'react';
import { Layers, ArrowRight, Activity, Cpu } from 'lucide-react';
import { PageId } from '../../types';

interface Tech3DOrbVisualProps {
  onNavigate?: (page: PageId) => void;
}

export const Tech3DOrbVisual: React.FC<Tech3DOrbVisualProps> = ({ onNavigate }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 15, y: y * 15 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] h-[460px] sm:h-[500px] lg:h-[540px] flex items-center justify-center select-none"
    >
      {/* Background Ambient Dark Shadow Pool behind the 3D visual */}
      <div className="absolute w-[440px] h-[440px] rounded-full bg-gradient-to-tr from-[#071126]/[0.08] via-[#526FF5]/[0.10] to-transparent blur-[80px] pointer-events-none" />

      {/* Layer 1: Wide Deep Ambient Floor Shadow */}
      <div className="absolute bottom-2 w-[420px] h-[54px] rounded-full bg-gradient-to-r from-transparent via-[#071126]/[0.16] to-transparent blur-[28px] pointer-events-none transform scale-y-75" />

      {/* Layer 2: Mid-range Crisp Ground Shadow */}
      <div className="absolute bottom-5 w-[290px] h-[30px] rounded-full bg-gradient-to-r from-transparent via-[#071126]/[0.26] to-transparent blur-[12px] pointer-events-none transform scale-y-65" />

      {/* Layer 3: Tight Dark Occlusion Contact Shadow */}
      <div className="absolute bottom-7 w-[160px] h-[14px] rounded-full bg-gradient-to-r from-transparent via-[#071126]/[0.42] to-transparent blur-[5px] pointer-events-none transform scale-y-50" />

      {/* Primary 3D Floating Glass Technology Hub Container */}
      <div
        className="relative w-[300px] sm:w-[340px] lg:w-[380px] h-[300px] sm:h-[340px] lg:h-[380px] flex items-center justify-center transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
        }}
      >
        {/* Outer Orbital SVG System */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_60s_linear_infinite]"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Main Tilted Elliptical Orbit Ring */}
          <ellipse
            cx="200"
            cy="200"
            rx="185"
            ry="75"
            transform="rotate(-24 200 200)"
            stroke="url(#orbit-grad-1)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            opacity="0.75"
          />

          {/* Secondary Counter Orbit Ring */}
          <ellipse
            cx="200"
            cy="200"
            rx="170"
            ry="60"
            transform="rotate(38 200 200)"
            stroke="url(#orbit-grad-2)"
            strokeWidth="0.9"
            opacity="0.6"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="orbit-grad-1" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#526FF5" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#7B8CFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#526FF5" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="orbit-grad-2" x1="0" y1="400" x2="400" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#526FF5" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Connected Orbital Node 1 */}
          <circle cx="68" cy="148" r="4.5" fill="#526FF5" />
          <circle cx="68" cy="148" r="8" stroke="#526FF5" strokeWidth="1" opacity="0.4" />

          {/* Connected Orbital Node 2 */}
          <circle cx="330" cy="254" r="3.5" fill="#071126" />
          <circle cx="330" cy="254" r="6" stroke="#071126" strokeWidth="0.8" opacity="0.3" />

          {/* Connected Orbital Node 3 */}
          <circle cx="270" cy="95" r="3" fill="#7B8CFF" />
        </svg>

        {/* The 3D Glass Sphere Body */}
        <div className="relative w-[230px] sm:w-[260px] lg:w-[280px] h-[230px] sm:h-[260px] lg:h-[280px] rounded-full overflow-hidden shadow-[0_28px_70px_-10px_rgba(7,17,38,0.36),0_14px_32px_-6px_rgba(7,17,38,0.25),0_4px_16px_rgba(82,111,245,0.2)]">
          {/* Base Sphere Refraction Gradient */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.98) 0%, rgba(240, 246, 255, 0.85) 30%, rgba(195, 218, 255, 0.55) 60%, rgba(82, 111, 245, 0.42) 80%, rgba(7, 17, 38, 0.45) 100%)
              `,
            }}
          />

          {/* Internal Geometric Digital Hub Grid Lines */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <svg viewBox="0 0 280 280" className="w-full h-full" fill="none">
              <circle cx="140" cy="140" r="110" stroke="#071126" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="140" cy="140" r="75" stroke="#526FF5" strokeWidth="0.8" />
              <line x1="30" y1="140" x2="250" y2="140" stroke="#526FF5" strokeWidth="0.7" />
              <line x1="140" y1="30" x2="140" y2="250" stroke="#526FF5" strokeWidth="0.7" />
              <circle cx="140" cy="140" r="6" fill="#526FF5" />
            </svg>
          </div>

          {/* Inner Light Core Reflection */}
          <div className="absolute top-[18%] left-[22%] w-[110px] h-[90px] rounded-[50%] bg-gradient-to-b from-white/95 to-transparent blur-[6px] transform -rotate-25 pointer-events-none" />

          {/* Soft Bottom Caustic Blue Glow */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[190px] h-[100px] rounded-full bg-[#526FF5]/40 blur-[20px] pointer-events-none" />

          {/* Glass Rim Specular Highlight */}
          <div className="absolute inset-0 rounded-full border border-white/90 shadow-[inset_0_2px_12px_rgba(255,255,255,0.9),inset_0_-8px_16px_rgba(82,111,245,0.25)] pointer-events-none" />
        </div>

        {/* Small Floating Satellite Orb (Top Right) */}
        <div className="absolute -top-1 -right-3 w-10 h-10 rounded-full bg-gradient-to-tr from-[#526FF5] via-white to-white/90 shadow-lg shadow-[#526FF5]/20 border border-white/80 p-0.5 flex items-center justify-center animate-[bounce_5s_ease-in-out_infinite]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#071126]" />
        </div>

        {/* Small Floating Satellite Orb (Bottom Left) */}
        <div className="absolute bottom-4 -left-4 w-7 h-7 rounded-full bg-gradient-to-br from-white via-[#EEF4FA] to-[#7B8CFF]/60 shadow-md border border-white/80" />
      </div>

      {/* Floating Glass Information Panel (Reference-accurate Soft Glass Treatment) */}
      <div
        className="absolute top-8 sm:top-12 -right-4 sm:-right-8 lg:-right-10 z-20 w-[240px] sm:w-[270px] glass-panel rounded-2xl p-4 sm:p-5 transition-transform duration-700 ease-out animate-[pulse_6s_ease-in-out_infinite]"
        style={{
          transform: `translate(${-mouseOffset.x * 0.8}px, ${-mouseOffset.y * 0.8}px)`,
        }}
      >
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#071126]/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#526FF5] animate-ping" />
            <span className="text-[11px] font-semibold tracking-wider text-[#071126] uppercase">
              DIGITAL SOLUTIONS
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#5B667A]">01 · HUB</span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between text-[#071126] font-medium">
            <span>Web Development</span>
            <span className="text-[10px] text-[#526FF5] font-mono">React / Node</span>
          </div>
          <div className="flex items-center justify-between text-[#071126] font-medium">
            <span>Application Engineering</span>
            <span className="text-[10px] text-[#5B667A] font-mono">Modular</span>
          </div>
          <div className="flex items-center justify-between text-[#071126] font-medium">
            <span>Digital Growth</span>
            <span className="text-[10px] text-[#526FF5] font-mono">Analytics</span>
          </div>
        </div>

        <div className="mt-3.5 pt-3 border-t border-[#071126]/[0.06] flex items-center justify-between text-[11px]">
          <span className="text-[#5B667A]">Engineering Ecosystem</span>
          <button
            onClick={() => onNavigate && onNavigate('services')}
            className="text-[#526FF5] hover:text-[#071126] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Details</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
