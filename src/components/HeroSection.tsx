import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Sparkles, Phone } from 'lucide-react';
import { DnaHeroCanvas } from './DnaHeroCanvas.tsx';
import { ACADEMY_TEL_HREF } from '../utils/whatsapp.ts';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#071426]"
    >
      {/* Background glow layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#35E0F2]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#62F5B0]/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#1d4ed8]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* 3D DNA Canvas Background / Side Layer */}
      <div className="absolute inset-0 z-0">
        <DnaHeroCanvas interactive={true} />
      </div>

      {/* Grid Pattern overlay with vignette */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#071426]/50 via-transparent to-[#071426] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small animated badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F38]/90 border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-medium tracking-wide shadow-md shadow-cyan-950/40 mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Focused NEET Biology Preparation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-slate-300 font-normal">Baranagar, Kolkata</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F4F8FF] tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              Your NEET Journey.{' '}
              <span className="bg-gradient-to-r from-[#35E0F2] via-[#62F5B0] to-[#38bdf8] bg-clip-text text-transparent">
                Stronger with Biology.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#A8B7CA] max-w-2xl leading-relaxed mb-8">
              Build deep conceptual understanding, master NCERT line-by-line, practise strategically, and prepare with focused Biology guidance under{' '}
              <strong className="text-white font-semibold">Shubhajit Sir</strong> at ProBio Academy.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-xl font-display font-semibold text-base text-[#071426] bg-gradient-to-r from-[#35E0F2] to-[#62F5B0] hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Your Seat</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#methodology"
                className="px-6 py-3.5 rounded-xl font-display font-medium text-sm sm:text-base text-slate-200 hover:text-white bg-[#0B1F38]/80 hover:bg-[#0f2a4d] border border-cyan-500/20 hover:border-cyan-400/40 transition-all flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
              >
                <span>Explore Our Teaching Approach</span>
              </a>

              <a
                href={ACADEMY_TEL_HREF}
                className="sm:hidden px-6 py-3 rounded-xl font-medium text-sm text-slate-300 bg-slate-900/60 border border-slate-700 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call +91 89818 00375</span>
              </a>
            </div>

            {/* Key trust pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-white font-medium">360/360</strong> Target Biology
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-white font-medium">100% NCERT</strong> Decoded
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-white font-medium">Small Batches</strong> & Personal Doubts
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Callout Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-6 rounded-2xl bg-[#0B1F38]/80 backdrop-blur-xl border border-cyan-500/20 shadow-2xl shadow-cyan-950/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                    Admissions Open
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">
                    NEET 2025 – 2026 Batches
                  </h3>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-md">
                  Active Intake
                </span>
              </div>

              <div className="space-y-3 mb-5 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-[#071426]/70 border border-slate-800/80 flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-white">Class 11 Foundation</div>
                    <div className="text-slate-400">Core Zoology & Botany fundamentals</div>
                  </div>
                  <span className="text-cyan-400 font-mono text-[11px]">2-Year Prep</span>
                </div>
                <div className="p-3 rounded-lg bg-[#071426]/70 border border-slate-800/80 flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-white">Class 12 Boards + NEET</div>
                    <div className="text-slate-400">Genetics, Biotech & Board synchronization</div>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px]">1-Year Intensive</span>
                </div>
                <div className="p-3 rounded-lg bg-[#071426]/70 border border-slate-800/80 flex items-start justify-between">
                  <div>
                    <div className="font-semibold text-white">Dropper / Repeater</div>
                    <div className="text-slate-400">High-speed revision & daily question drills</div>
                  </div>
                  <span className="text-cyan-400 font-mono text-[11px]">Rank Booster</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-2.5 text-center text-xs sm:text-sm font-semibold text-[#071426] bg-[#35E0F2] hover:bg-[#62F5B0] rounded-lg transition-colors cursor-pointer"
              >
                Inquire Batch Timings & Seat Availability
              </button>
              <p className="text-[10px] text-center text-slate-400 mt-2">
                Official Academy WhatsApp: +91 89818 00375
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
        aria-label="Scroll down to About section"
      >
        <span className="text-[11px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
