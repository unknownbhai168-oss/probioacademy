import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  MessageCircle, 
  Send, 
  Train, 
  Building2, 
  CheckCircle,
  AlertCircle 
} from 'lucide-react';
import { 
  ACADEMY_PHONE_DISPLAY, 
  ACADEMY_TEL_HREF, 
  generateGeneralInquiryWhatsAppUrl,
  generateWhatsAppUrl,
  validateBookingForm,
  BookingFormData,
  PROGRAM_OPTIONS
} from '../utils/whatsapp.ts';

interface ContactMapSectionProps {
  onOpenBooking: () => void;
}

export const ContactMapSection: React.FC<ContactMapSectionProps> = ({ onOpenBooking }) => {
  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=ProBio%20Academy%2C%209%2F1%20Bireswar%20Dhole%20Lane%2C%20Bonhoogly%2C%20Baranagar%2C%20Kolkata%20700035';

  // Embed map query URL
  const mapEmbedUrl =
    'https://maps.google.com/maps?q=9%2F1%2C+Bireswar+Dhole+Lane%2C+Bonhoogly%2C+Baranagar%2C+Kolkata%2C+West+Bengal+700035&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const [formData, setFormData] = useState<BookingFormData>({
    studentName: '',
    parentName: '',
    phoneNumber: '',
    program: 'Class 11 — Foundation for NEET Biology',
    preferredContactMethod: 'WhatsApp',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateBookingForm(formData);
    setErrors(validationErrors as Record<string, string>);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      const url = generateWhatsAppUrl(formData);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#071426] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20 text-cyan-300 text-xs font-medium tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect & Visit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Visit ProBio Academy
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Located in Bonhoogly, Baranagar. Reach out directly to Shubhajit Sir for guidance, batch counseling, and fee inquiries.
          </p>
        </div>

        {/* Contact Info + Quick Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Academy Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0B1F38] border border-cyan-500/20 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-white">
                    ProBio Academy
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400 mb-1">
                    Faculty: Shubhajit Sir
                  </div>
                  <address className="not-italic text-sm text-slate-300 leading-relaxed">
                    9/1, Bireswar Dhole Lane, Bonhoogly,<br />
                    Baranagar, Kolkata, West Bengal 700035, India.
                  </address>
                </div>
              </div>

              {/* Transit & Landmark info */}
              <div className="p-3.5 rounded-xl bg-[#071426] border border-slate-800 text-xs text-slate-300 space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Accessible from Baranagar & Noapara Metro Stations</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Close to Bonhoogly Crossing & BT Road junction</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#071426] bg-[#35E0F2] hover:bg-[#62F5B0] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={ACADEMY_TEL_HREF}
                  className="py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#071426] hover:bg-slate-800 border border-slate-700 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call {ACADEMY_PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-3xl bg-[#0B1F38] border border-cyan-500/20 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-emerald-400" />
                <h4 className="font-display font-bold text-white text-base">
                  Operating Hours
                </h4>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Monday – Saturday:</span>
                  <span className="font-mono text-white font-semibold">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Sunday:</span>
                  <span className="font-mono text-white font-semibold">9:00 AM – 2:00 PM</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 mt-4 italic">
                * Note: These are the supplied operating hours. Please call or WhatsApp ahead to confirm Sir's classroom consultation availability before visiting.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#0B1F38] border border-cyan-500/20 shadow-xl">
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  Send an Admission Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Submitting will securely format your details and open the official WhatsApp chat with Shubhajit Sir (+91 89818 00375).
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/30 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-emerald-200">
                    <strong className="block font-semibold">WhatsApp Chat Initiated!</strong>
                    If the chat window didn't open automatically, you can directly message us at{' '}
                    <a
                      href={generateGeneralInquiryWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-bold text-white"
                    >
                      +91 89818 00375
                    </a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="student-name-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Student's Full Name *
                    </label>
                    <input
                      id="student-name-input"
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Rahul Das"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#071426] border border-slate-700 focus:border-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                    {errors.studentName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.studentName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="parent-name-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Parent / Guardian's Name *
                    </label>
                    <input
                      id="parent-name-input"
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Amitava Das"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#071426] border border-slate-700 focus:border-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                    {errors.parentName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.parentName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone-number-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Contact Phone Number *
                    </label>
                    <input
                      id="phone-number-input"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="e.g. 9830123456"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#071426] border border-slate-700 focus:border-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                    {errors.phoneNumber && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.phoneNumber}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="program-select-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Target Class / Program *
                    </label>
                    <select
                      id="program-select-input"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value as any })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#071426] border border-slate-700 focus:border-cyan-400 text-sm text-white outline-none transition-colors cursor-pointer"
                    >
                      {PROGRAM_OPTIONS.map((prog) => (
                        <option key={prog} value={prog} className="bg-[#071426] text-white">
                          {prog}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['WhatsApp', 'Phone Call', 'Either (WhatsApp or Call)'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setFormData({ ...formData, preferredContactMethod: method })}
                        className={`py-2 px-2 text-xs rounded-lg border text-center transition-all cursor-pointer ${
                          formData.preferredContactMethod === method
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold'
                            : 'bg-[#071426] border-slate-700 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {method === 'Either (WhatsApp or Call)' ? 'Either' : method}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message-textarea" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Optional Query or Specific Timing Request
                  </label>
                  <textarea
                    id="message-textarea"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Inquiring about weekend batch options and fee installment structure..."
                    className="w-full px-4 py-2 rounded-xl bg-[#071426] border border-slate-700 focus:border-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-display font-semibold text-sm text-[#071426] bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-emerald-400 hover:to-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-950/50"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Enquiry via Official WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Direct enquiry link to +91 89818 00375. Seat confirmation is finalized following personal counseling.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Google Map */}
        <div className="rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl bg-[#0B1F38]">
          <div className="p-4 sm:p-5 bg-[#091b33] border-b border-cyan-500/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm text-white">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="font-semibold">Interactive Map:</span>
              <span className="text-slate-300 text-xs sm:text-sm">
                9/1, Bireswar Dhole Lane, Bonhoogly, Baranagar, Kolkata 700035
              </span>
            </div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Open in Google Maps App</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 relative bg-slate-900">
            <iframe
              title="ProBio Academy Location Map in Baranagar Kolkata"
              src={mapEmbedUrl}
              className="w-full h-full border-0 filter contrast-105"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
