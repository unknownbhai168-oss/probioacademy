import React from 'react';
import { Dna, MapPin, Phone, Clock, MessageCircle, ArrowUp } from 'lucide-react';
import { ACADEMY_PHONE_DISPLAY, ACADEMY_TEL_HREF, generateGeneralInquiryWhatsAppUrl } from '../utils/whatsapp.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050e1a] text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <Dna className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white block">
                  ProBio <span className="text-[#35E0F2]">Academy</span>
                </span>
                <span className="text-[11px] text-cyan-300 font-medium">
                  Faculty: Shubhajit Sir
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Premier NEET Biology coaching institute in Baranagar, Kolkata. Specialized conceptual preparation for Class 11, Class 12, and Dropper candidates.
            </p>
            <div className="text-[11px] text-slate-500">
              “Master Biology. Move Closer to Your Medical Dream.”
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-semibold text-white text-sm">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Academy</a></li>
              <li><a href="#methodology" className="hover:text-cyan-400 transition-colors">Teaching Method</a></li>
              <li><a href="#programs" className="hover:text-cyan-400 transition-colors">Courses & Batches</a></li>
              <li><a href="#reviews" className="hover:text-cyan-400 transition-colors">Student Reviews</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact & Map</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-semibold text-white text-sm">
              Academic Tracks
            </h4>
            <ul className="space-y-2">
              <li className="text-slate-300">Class 11 Foundation for NEET</li>
              <li className="text-slate-300">Class 12 Boards & NEET Prep</li>
              <li className="text-slate-300">Dropper / Repeater Rank Booster</li>
              <li className="text-slate-400 text-[11px] pt-1">
                * Contact us for current batch availability and fees.
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-semibold text-white text-sm">
              Academy Center
            </h4>
            <address className="not-italic space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>9/1, Bireswar Dhole Lane, Bonhoogly, Baranagar, Kolkata 700035, West Bengal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={ACADEMY_TEL_HREF} className="hover:text-white transition-colors">
                  {ACADEMY_PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Mon–Sat: 9 AM–8 PM · Sun: 9 AM–2 PM (Please confirm prior to visit)</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} ProBio Academy — Shubhajit Sir. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
