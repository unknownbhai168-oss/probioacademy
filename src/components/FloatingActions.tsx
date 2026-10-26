import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { ACADEMY_PHONE_DISPLAY, ACADEMY_TEL_HREF, generateGeneralInquiryWhatsAppUrl } from '../utils/whatsapp.ts';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (hidden on mobile to prevent clutter with bottom bar) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={generateGeneralInquiryWhatsAppUrl('Floating button')}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-slate-950 font-semibold text-xs shadow-xl shadow-emerald-950/40 hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Direct WhatsApp Chat with Shubhajit Sir"
        >
          <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950" />
          <span className="font-display">Chat on WhatsApp</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071426]/95 backdrop-blur-md border-t border-cyan-500/20 px-3 py-2.5 flex items-center gap-2 shadow-2xl">
        {/* Call Action */}
        <a
          href={ACADEMY_TEL_HREF}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#0B1F38] border border-cyan-500/30 text-white font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Call Sir</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={generateGeneralInquiryWhatsAppUrl('Mobile bottom bar')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-slate-950" />
          <span>WhatsApp</span>
        </a>

        {/* Book Action */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Seat</span>
        </button>
      </div>
    </>
  );
};
