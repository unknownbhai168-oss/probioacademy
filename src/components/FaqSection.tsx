import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { ACADEMY_PHONE_DISPLAY, ACADEMY_TEL_HREF, generateGeneralInquiryWhatsAppUrl } from '../utils/whatsapp.ts';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Which classes and programs are offered at ProBio Academy?',
      a: 'ProBio Academy provides specialized NEET Biology coaching for Class 11 (2-year foundation), Class 12 (Board and NEET dual preparation), and Dropper / Repeater candidates. Each program strictly covers NCERT Botany and Zoology in complete conceptual depth.',
    },
    {
      q: 'Who teaches the Biology classes at ProBio Academy?',
      a: 'All Biology lectures, NCERT dissections, doubt clearance sessions, and test reviews are conducted directly by Shubhajit Sir at our Bonhoogly, Baranagar center.',
    },
    {
      q: 'What is the fee structure and payment mode?',
      a: 'Tuition fees vary depending on whether you enroll in the Class 11, Class 12, or Repeater batch. Please contact the academy directly via WhatsApp (+91 89818 00375) or visit in person to receive the current fee schedule and available installment options.',
    },
    {
      q: 'What are the batch sizes and classroom timings?',
      a: 'To guarantee that every student receives dedicated doubt-clearing and individual attention from Shubhajit Sir, batch sizes are kept strictly focused and manageable. Batch timing options (weekday evenings and weekends) can be confirmed by contacting the academy.',
    },
    {
      q: 'How are tests and assessments conducted?',
      a: 'Students undergo regular chapter-wise assessments, unit tests, and full-length NEET mock tests on OMR sheets matching NTA examination timing and negative-marking criteria. Every test is followed by in-depth review and error analysis.',
    },
    {
      q: 'How can parents track their ward’s progress?',
      a: 'Parents receive direct performance updates from Shubhajit Sir regarding attendance, test marks, and conceptual strengths or bottlenecks. Parent-teacher discussions are held regularly.',
    },
    {
      q: 'Where is the academy located and how do we reach it?',
      a: 'The academy is located at 9/1, Bireswar Dhole Lane, Bonhoogly, Baranagar, Kolkata, West Bengal 700035, conveniently accessible from the Baranagar Metro Station, Noapara Metro Station, and the Bonhoogly BT Road crossing.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#071426] relative overflow-hidden border-t border-cyan-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20 text-cyan-300 text-xs font-medium tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300">
            Common questions regarding admissions, batch organization, and our NEET Biology curriculum.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-[#0B1F38] border border-cyan-500/15 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#0e2747] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Help Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0B1F38] to-[#092342] border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display font-bold text-white text-base">
              Have a specific question not covered here?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Speak directly with Shubhajit Sir or message on WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={generateGeneralInquiryWhatsAppUrl('FAQ question')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Sir</span>
            </a>
            <a
              href={ACADEMY_TEL_HREF}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#071426] text-white border border-slate-700 hover:border-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{ACADEMY_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
