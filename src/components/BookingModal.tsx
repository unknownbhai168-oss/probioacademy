import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, CheckCircle, ShieldCheck, ArrowRight, Dna } from 'lucide-react';
import { 
  ACADEMY_PHONE_DISPLAY, 
  ACADEMY_TEL_HREF, 
  ProgramType, 
  PROGRAM_OPTIONS, 
  BookingFormData, 
  validateBookingForm, 
  generateWhatsAppUrl,
  buildWhatsAppMessage
} from '../utils/whatsapp.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProgram?: ProgramType;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialProgram = 'Class 11 — Foundation for NEET Biology',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    studentName: '',
    parentName: '',
    phoneNumber: '',
    program: initialProgram,
    preferredContactMethod: 'WhatsApp',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedTextPreview, setGeneratedTextPreview] = useState('');

  // Update initialProgram when prop changes
  useEffect(() => {
    if (initialProgram) {
      setFormData((prev) => ({ ...prev, program: initialProgram }));
    }
  }, [initialProgram]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setIsSuccess(false);
      setErrors({});
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateBookingForm(formData);
    setErrors(validationErrors as Record<string, string>);

    if (Object.keys(validationErrors).length === 0) {
      const msg = buildWhatsAppMessage(formData);
      setGeneratedTextPreview(msg);
      setIsSuccess(true);
      const url = generateWhatsAppUrl(formData);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#071426]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0B1F38] border border-cyan-400/30 p-6 sm:p-8 shadow-2xl shadow-cyan-950/60 z-10 text-left my-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#071426] text-slate-400 hover:text-white border border-slate-800 hover:border-cyan-400 transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
            <Dna className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
              Seat Enquiry & Admission
            </span>
            <h2 id="booking-modal-title" className="text-xl sm:text-2xl font-display font-bold text-white">
              Book a Seat at ProBio Academy
            </h2>
          </div>
        </div>

        {isSuccess ? (
          /* Success / Confirmation State */
          <div className="py-4 space-y-5">
            <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 flex items-start gap-3.5">
              <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-base">
                  WhatsApp Chat Triggered!
                </h4>
                <p className="text-xs text-emerald-200/90 mt-1 leading-relaxed">
                  Your enquiry has been prepared and opened in WhatsApp with Shubhajit Sir (+91 89818 00375).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#071426] border border-slate-800 text-xs text-slate-300">
              <div className="font-semibold text-slate-200 mb-2">Message Dispatched:</div>
              <pre className="whitespace-pre-wrap font-sans text-[11px] leading-relaxed text-slate-400 bg-slate-900/80 p-3 rounded-lg border border-slate-800/80">
                {generatedTextPreview}
              </pre>
            </div>

            {/* Direct Fallback */}
            <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200">
              <span className="font-semibold block text-white mb-1">Didn't open automatically?</span>
              <div className="flex flex-col sm:flex-row gap-2 mt-2">
                <a
                  href={generateWhatsAppUrl(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#35E0F2] text-[#071426] font-semibold text-center hover:bg-[#62F5B0] transition-colors"
                >
                  Click Here to Open WhatsApp
                </a>
                <a
                  href={ACADEMY_TEL_HREF}
                  className="px-3.5 py-2 rounded-lg bg-[#071426] text-white border border-slate-700 font-semibold text-center hover:border-cyan-400 transition-colors"
                >
                  Call Directly: {ACADEMY_PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          /* Form Entry State */
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <label htmlFor="modal-student-name" className="block text-xs font-medium text-slate-300 mb-1">
                Student's Full Name *
              </label>
              <input
                id="modal-student-name"
                type="text"
                required
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                placeholder="e.g. Ananya Mukherjee"
                className="w-full px-4 py-2 rounded-xl bg-[#071426] border border-slate-700 focus:border-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
              />
              {errors.studentName && (
                <p className="text-[11px] text-red-400 mt-1">{errors.studentName}</p>
              )}
            </div>

            <div>
              <label htmlFor="modal-parent-name" className="block text-xs font-medium text-slate-300 mb-1">
                Parent / Guardian's Name *
              </label>
              <input
                id="modal-parent-name"
                type="text"
                required
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                placeholder="e.g. S. K. Mukherjee"
                className="w-full px-4 py-2 rounded-xl bg-[#071426] border border-slate-700 focus:border-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
              />
              {errors.parentName && (
                <p className="text-[11px] text-red-400 mt-1">{errors.parentName}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="modal-phone-number" className="block text-xs font-medium text-slate-300 mb-1">
                  Contact Mobile Number *
                </label>
                <input
                  id="modal-phone-number"
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="e.g. 9830123456"
                  className="w-full px-4 py-2 rounded-xl bg-[#071426] border border-slate-700 focus:border-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
                {errors.phoneNumber && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.phoneNumber}</p>
                )}
              </div>

              <div>
                <label htmlFor="modal-program-select" className="block text-xs font-medium text-slate-300 mb-1">
                  Target Program *
                </label>
                <select
                  id="modal-program-select"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl bg-[#071426] border border-slate-700 focus:border-cyan-400 text-xs text-white outline-none transition-colors cursor-pointer"
                >
                  {PROGRAM_OPTIONS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Preferred Mode of Contact
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['WhatsApp', 'Phone Call', 'Either (WhatsApp or Call)'] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredContactMethod: m })}
                    className={`py-1.5 px-1 text-xs rounded-lg border text-center transition-all cursor-pointer ${
                      formData.preferredContactMethod === m
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold'
                        : 'bg-[#071426] border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {m === 'Either (WhatsApp or Call)' ? 'Either' : m}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="modal-message-input" className="block text-xs font-medium text-slate-300 mb-1">
                Optional Message / Questions
              </label>
              <textarea
                id="modal-message-input"
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Any specific questions about batch timings or foundation requirements..."
                className="w-full px-4 py-2 rounded-xl bg-[#071426] border border-slate-700 focus:border-cyan-400 text-xs text-white placeholder-slate-500 outline-none resize-none"
              />
            </div>

            {/* Privacy Notice & Disclaimer */}
            <div className="p-3 rounded-xl bg-[#071426]/70 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-cyan-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Privacy & Direct Communication Notice</span>
              </div>
              <p>
                Clicking the button formats your entered details and opens the official WhatsApp chat with Shubhajit Sir (+91 89818 00375). Your data is transferred directly to WhatsApp. This form acts as an enquiry; admission and seat reservation are finalized after batch availability confirmation.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-display font-semibold text-sm text-[#071426] bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-emerald-400 hover:to-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-950/50 active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open WhatsApp & Send Enquiry</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
