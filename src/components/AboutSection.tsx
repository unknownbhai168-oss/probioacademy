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
  CheckCircle2,
  ArrowRight
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

        {/* "Why Biology Dictates Your NEET Selection" Section with Classroom Photo as Background */}
        <div 
          className="relative rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl bg-cover bg-center"
          style={{ backgroundImage: `url('/public/assets/aistudio/image_5fdb21bd.png')` }}
        >
          {/* Multi-layered dark aesthetic scrim for maximum legibility while showcasing the students */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/95 via-[#071426]/85 to-[#071426]/75 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#071426]/60 to-[#071426]/90 pointer-events-none" />

          {/* Inner Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Heading and Motivation */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4 w-fit backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>The Medical Dream Engine</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-slate-300 font-normal">Classroom Atmosphere</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-5 leading-tight tracking-tight">
                  Why Biology Dictates Your{' '}
                  <span className="bg-gradient-to-r from-[#35E0F2] via-[#62F5B0] to-[#38bdf8] bg-clip-text text-transparent">
                    NEET Selection
                  </span>
                </h3>

                <p className="text-sm sm:text-base text-slate-200 mb-6 leading-relaxed max-w-2xl">
                  In NEET (UG), Biology accounts for <strong className="text-white font-semibold">360 marks out of 720 (exactly 50%)</strong>. While Physics and Chemistry require heavy mathematical computation, Biology is your fastest scoring subject. Scoring 340+ in Biology creates the indispensable foundation for a top Government Medical College (MBBS) seat.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="px-6 py-3.5 text-sm font-semibold text-[#071426] bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-emerald-400 hover:to-cyan-400 rounded-xl transition-all cursor-pointer shadow-lg shadow-cyan-950/50 flex items-center justify-center gap-2"
                  >
                    <span>Join Shubhajit Sir's Next Batch</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#contact"
                    className="px-5 py-3.5 text-sm font-medium text-slate-200 hover:text-white rounded-xl border border-slate-600 hover:border-cyan-400 bg-[#0B1F38]/70 hover:bg-[#0B1F38] backdrop-blur-md transition-colors text-center"
                  >
                    Visit Baranagar Center
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsPhotoModalOpen(true)}
                    className="px-4 py-3.5 text-xs font-medium text-cyan-300 hover:text-white rounded-xl border border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/40 backdrop-blur-md transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
                    title="View full-screen classroom photo"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Classroom Photo</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Key Stats Glass Cards */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-[#0B1F38]/85 backdrop-blur-md border border-cyan-500/25 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Exam Weightage</span>
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-cyan-400/10 text-cyan-300 rounded border border-cyan-400/30">
                      50% Total
                    </span>
                  </div>
                  <div className="text-3xl font-display font-extrabold text-cyan-400">360 / 720 Marks</div>
                  <p className="text-xs text-slate-300 mt-1">
                    90 Questions across Botany & Zoology. Every question correct is +4, essential for qualifying government cut-offs.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0B1F38]/85 backdrop-blur-md border border-emerald-500/25 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Target Score</span>
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-400/10 text-emerald-300 rounded border border-emerald-400/30">
                      Govt MBBS Rank
                    </span>
                  </div>
                  <div className="text-3xl font-display font-extrabold text-emerald-400">340+ Strategy</div>
                  <p className="text-xs text-slate-300 mt-1">
                    Complete NCERT line-by-line mastery combined with speed drills to finish Biology in under 45 minutes on exam day.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#071426]/80 backdrop-blur-md border border-slate-700/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold text-white">Direct Mentorship by Shubhajit Sir</div>
                    <div className="text-slate-400 text-[11px]">9/1, Bireswar Dhole Lane, Bonhoogly, Baranagar</div>
                  </div>
                </div>
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
