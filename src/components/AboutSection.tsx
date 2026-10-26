import React, { useState } from 'react';
import { 
  BookOpen, 
  Eye, 
  ClipboardCheck, 
  MessageCircleQuestion, 
  Compass, 
  Sparkles, 
  Maximize2, 
  X,
  Users,
  CheckCircle2 
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const pillars = [
    {
      title: 'NCERT-Focused Learning',
      desc: 'Clear explanations of important NCERT concepts, line-by-line biological interpretations, and exam-relevant details that form 95%+ of the NEET paper.',
      icon: BookOpen,
      tag: 'Core Syllabus',
      accent: 'cyan',
    },
    {
      title: 'Visual Concept Building',
      desc: 'Microscopic diagrams, biochemical flowcharts, morphological memory aids, and structured schematics to make complex processes intuitive.',
      icon: Eye,
      tag: 'Visual Memory',
      accent: 'mint',
    },
    {
      title: 'Practice & Assessment',
      desc: 'Regular chapter-wise test series, assertion-reason drills, and timed NEET-pattern mock evaluations to build speed, accuracy, and negative-mark control.',
      icon: ClipboardCheck,
      tag: 'Rigorous Drills',
      accent: 'cyan',
    },
    {
      title: 'Personal Doubt Support',
      desc: 'An approachable classroom atmosphere led directly by Shubhajit Sir, where every student gets dedicated 1-on-1 attention for conceptual bottlenecks.',
      icon: MessageCircleQuestion,
      tag: 'Direct Mentorship',
      accent: 'mint',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#071426] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20 text-cyan-300 text-xs font-medium tracking-wider uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Institute Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-5">
            Biology, Taught with Purpose.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            At ProBio Academy in Baranagar, Kolkata, Shubhajit Sir guides medical aspirants through a disciplined, NCERT-grounded Biology curriculum designed to transform rote memorization into permanent conceptual command.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            const isCyan = item.accent === 'cyan';
            return (
              <div
                key={item.title}
                className="group relative p-6 rounded-2xl bg-[#0B1F38]/70 hover:bg-[#0B1F38] border border-cyan-500/15 hover:border-cyan-400/40 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-cyan-950/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        isCyan
                          ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 group-hover:bg-cyan-400 group-hover:text-slate-950 group-hover:scale-105'
                          : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 group-hover:bg-emerald-400 group-hover:text-slate-950 group-hover:scale-105'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-cyan-400/80 font-medium">{item.tag}</span>
                  <span className="text-slate-400">NEET Focus</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Classroom & Authentic Batch Showcase Section */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B1F38] via-[#091b33] to-[#071426] border border-cyan-500/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Real Batch Photo */}
            <div className="lg:col-span-6 relative">
              <div 
                className="relative rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl group cursor-pointer"
                onClick={() => setIsPhotoModalOpen(true)}
                title="Click to view full photo"
              >
                <img
                  src="/public/assets/aistudio/image_5fdb21bd.png"
                  alt="ProBio Academy classroom batch session with Shubhajit Sir and NEET students in Baranagar Kolkata"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Expand overlay icon */}
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-[#071426]/80 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity border border-cyan-400/30">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-emerald-400" />
                    <span>ProBio Academy Classroom Batch & Mentorship</span>
                  </div>
                  <div className="text-slate-200 text-[11px] mt-0.5">
                    Biology students and Shubhajit Sir at Bonhoogly, Baranagar center
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center">
                <span className="text-[11px] text-cyan-400/80 hover:text-cyan-300 cursor-pointer inline-flex items-center gap-1" onClick={() => setIsPhotoModalOpen(true)}>
                  <Maximize2 className="w-3 h-3" /> Click image to expand view
                </span>
              </div>
            </div>

            {/* Content & The Biology Weightage Breakdown */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>The Medical Dream Engine</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                Why Biology Dictates Your NEET Selection
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                In NEET (UG), Biology accounts for <strong className="text-white">360 marks out of 720 (exactly 50%)</strong>. While Physics and Chemistry require heavy mathematical computation, Biology is your fastest scoring subject. Scoring 340+ in Biology creates the indispensable foundation for a top Government Medical College (MBBS) seat.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#071426]/90 border border-slate-800">
                  <div className="text-2xl font-display font-extrabold text-cyan-400">360 Marks</div>
                  <div className="text-xs text-slate-300 font-medium">90 Questions (Botany & Zoology)</div>
                </div>
                <div className="p-4 rounded-xl bg-[#071426]/90 border border-slate-800">
                  <div className="text-2xl font-display font-extrabold text-emerald-400">50% NEET</div>
                  <div className="text-xs text-slate-300 font-medium">Total Exam Merit Weightage</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-[#071426] bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-emerald-400 hover:to-cyan-400 rounded-xl transition-all cursor-pointer shadow-md"
                >
                  Join Shubhajit Sir's Next Batch
                </button>
                <a
                  href="#contact"
                  className="w-full sm:w-auto text-center px-5 py-3 text-sm font-medium text-slate-300 hover:text-white rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors"
                >
                  Visit Baranagar Center
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Expanded Photo Modal */}
      {isPhotoModalOpen && (
        <div 
          role="dialog" 
          aria-modal="true" 
          aria-label="ProBio Academy Classroom Photo"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0B1F38] border border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPhotoModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:text-cyan-400 transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src="/public/assets/aistudio/image_5fdb21bd.png"
              alt="ProBio Academy Classroom Batch in Baranagar Kolkata"
              className="w-full h-auto max-h-[75vh] object-contain bg-[#071426]"
            />

            <div className="p-5 sm:p-6 bg-[#071426] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-bold text-white text-base sm:text-lg">
                  ProBio Academy Classroom Batch — Shubhajit Sir
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  9/1, Bireswar Dhole Lane, Bonhoogly, Baranagar, Kolkata 700035
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsPhotoModalOpen(false);
                  onOpenBooking();
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#071426] bg-[#35E0F2] hover:bg-[#62F5B0] transition-colors self-start sm:self-auto cursor-pointer"
              >
                Book a Seat in This Batch
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
