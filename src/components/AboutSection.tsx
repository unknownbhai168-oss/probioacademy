import React from 'react';
import { BookOpen, Eye, ClipboardCheck, MessageCircleQuestion, Target, Award, Compass, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
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
              <div className="relative rounded-2xl overflow-hidden border border-cyan-400/30 shadow-2xl group">
                <img
                  src="/public/assets/aistudio/image_48a471f3.png"
                  alt="ProBio Academy classroom batch session with Shubhajit Sir and NEET students in Baranagar Kolkata"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <div className="font-semibold text-cyan-300">ProBio Academy Classroom Batch</div>
                  <div className="text-slate-200 text-[11px]">
                    Interactive Biology session & student mentorship with Shubhajit Sir at Bonhoogly, Baranagar
                  </div>
                </div>
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
    </section>
  );
};
