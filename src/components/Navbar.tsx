import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Dna } from 'lucide-react';
import { ACADEMY_PHONE_DISPLAY, ACADEMY_TEL_HREF, generateGeneralInquiryWhatsAppUrl } from '../utils/whatsapp.ts';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Teaching Method', href: '#methodology' },
    { label: 'Programs', href: '#programs' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071426]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <a
          href="#hero"
          className="flex items-center gap-3 text-white group cursor-pointer"
          aria-label="ProBio Academy Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/30 border border-cyan-400/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors shadow-inner shadow-cyan-500/10">
            <Dna className="w-6 h-6 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
              ProBio <span className="text-[#35E0F2]">Academy</span>
            </span>
            <span className="text-[11px] font-medium tracking-wide text-cyan-200/80 uppercase">
              Shubhajit Sir · NEET Biology
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-400 transition-colors duration-200 tracking-wide hover:underline decoration-cyan-400/50 underline-offset-8"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={ACADEMY_TEL_HREF}
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white rounded-lg border border-slate-700 hover:border-cyan-400/50 bg-[#0B1F38]/60 transition-all cursor-pointer"
            title="Call Academy"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden xl:inline">{ACADEMY_PHONE_DISPLAY}</span>
            <span className="xl:hidden">Call</span>
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#071426] bg-gradient-to-r from-[#35E0F2] to-[#62F5B0] hover:from-[#62F5B0] hover:to-[#35E0F2] rounded-lg shadow-md shadow-cyan-500/25 transition-all duration-300 cursor-pointer active:scale-95"
          >
            Book a Seat
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-semibold text-[#071426] bg-[#35E0F2] rounded-md"
          >
            Book
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071426]/98 border-b border-cyan-500/20 px-6 py-5 shadow-2xl transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-cyan-400 py-1 transition-colors border-b border-slate-800/80"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center font-semibold text-[#071426] bg-gradient-to-r from-[#35E0F2] to-[#62F5B0] rounded-lg"
              >
                Book Your Seat Now
              </button>
              <a
                href={ACADEMY_TEL_HREF}
                className="w-full py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-slate-200 border border-slate-700 rounded-lg hover:border-cyan-400"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                Call: {ACADEMY_PHONE_DISPLAY}
              </a>
              <a
                href={generateGeneralInquiryWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 flex items-center justify-center gap-2 text-sm font-medium text-emerald-400 border border-emerald-500/30 bg-emerald-950/20 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Direct WhatsApp Chat
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
