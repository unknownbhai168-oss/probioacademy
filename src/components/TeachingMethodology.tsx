import React, { useState } from 'react';
import { Lightbulb, BookMarked, CheckCircle, RotateCcw, Dna, ArrowRight, Layers, FileText } from 'lucide-react';

interface MethodologyProps {
  onOpenBooking: () => void;
}

export const TeachingMethodology: React.FC<MethodologyProps> = ({ onOpenBooking }) => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      number: '01',
      title: 'Understand the Concept',
      subtitle: 'Building the Physiological Foundation',
      icon: Lightbulb,
      description:
        'Every chapter begins with intuitive mental models, biological mechanisms, and physiological logic rather than dry memory. We deconstruct intricate cellular pathways, organ system coordination, and biochemical reactions into crystal-clear flowcharts.',
      details: [
        'Diagram-first teaching approach',
        'Biochemical cycle step-by-step unrolling',
        'Bridging micro-level molecular biology with organ systems',
      ],
      tagline: 'Clarity over rote learning',
      color: 'from-cyan-500 to-blue-600',
      badgeColor: 'text-cyan-300 border-cyan-500/30 bg-cyan-950/40',
    },
    {
      number: '02',
      title: 'Master NCERT',
      subtitle: 'Line-by-Line Decryption for Direct NEET Hits',
      icon: BookMarked,
      description:
        'NEET questions test subtle word choices, tables, summary paragraphs, and diagrams straight out of NCERT textbooks. Shubhajit Sir leads students through deep textual analysis, flagging hidden exception cases, terminology nuances, and high-frequency exam traps.',
      details: [
        'Complete line-by-line NCERT dissection for Class 11 & 12',
        'Crucial diagram annotations and label mastery',
        'Decoding contradictory statements and textbook exceptions',
      ],
      tagline: 'Every word in NCERT matters',
      color: 'from-emerald-500 to-teal-600',
      badgeColor: 'text-emerald-300 border-emerald-500/30 bg-emerald-950/40',
    },
    {
      number: '03',
      title: 'Practise NEET Questions',
      subtitle: 'PYQ Patterns & Multi-Statement Mastery',
      icon: CheckCircle,
      description:
        'Theory is solidified through strategic problem solving. Students solve 30+ years of NEET/AIPMT Previous Year Questions, Assertion-Reason pairs, Match-the-Columns, and experimental scenario questions designed to reflect the evolving NTA exam pattern.',
      details: [
        'Assertion & Reasoning dedicated practice sessions',
        'Multi-statement correct/incorrect elimination tactics',
        'Time management: aiming for 45–50 minutes for 90 Biology questions',
      ],
      tagline: 'Turn knowledge into speed and accuracy',
      color: 'from-cyan-400 to-emerald-500',
      badgeColor: 'text-cyan-300 border-cyan-500/30 bg-cyan-950/40',
    },
    {
      number: '04',
      title: 'Review, Test & Improve',
      subtitle: 'Error Analysis & Personal Rectification',
      icon: RotateCcw,
      description:
        'Continuous assessment with chapter-wise unit tests and full syllabus mock exams under real NEET examination conditions. Every test is followed by Shubhajit Sir’s error analysis to identify student-specific weak zones and prevent negative markings.',
      details: [
        'OMR-based simulated examination hall practice',
        'Detailed error logs & negative mark prevention',
        'Direct 1-on-1 doubt resolution until the exam day',
      ],
      tagline: 'Zero unaddressed doubts before exam day',
      color: 'from-blue-500 to-cyan-400',
      badgeColor: 'text-blue-300 border-blue-500/30 bg-blue-950/40',
    },
  ];

  const currentStage = stages[activeStage];

  return (
    <section id="methodology" className="py-24 bg-[#0B1F38]/40 relative overflow-hidden border-y border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-400/20 text-emerald-300 text-xs font-medium tracking-wider uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Proven 4-Step Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            The ProBio Pedagogical Method
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A battle-tested 4-stage progression designed specifically for NEET aspirants in Kolkata to build confidence and maximize score velocity.
          </p>
        </div>

        {/* Stage Timeline Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {stages.map((stage, idx) => {
            const isActive = idx === activeStage;
            const Icon = stage.icon;
            return (
              <button
                key={stage.number}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-[#0B1F38] border-cyan-400 shadow-lg shadow-cyan-950/50 scale-[1.02]'
                    : 'bg-[#071426]/70 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400" />
                )}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-cyan-400' : 'text-slate-500'
                    }`}
                  >
                    STAGE {stage.number}
                  </span>
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? 'text-emerald-400' : 'text-slate-500'
                    }`}
                  />
                </div>
                <div
                  className={`font-display font-bold text-sm sm:text-base leading-snug ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Showcase */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1F38] border border-cyan-500/20 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 border tracking-wide uppercase">
                <span className={currentStage.badgeColor}>{currentStage.tagline}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                Stage {currentStage.number}: {currentStage.title}
              </h3>
              <p className="text-emerald-400 font-medium text-sm sm:text-base mb-5">
                {currentStage.subtitle}
              </p>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                {currentStage.description}
              </p>

              <div className="space-y-3 mb-8">
                {currentStage.details.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>
                    <span className="text-sm text-slate-200">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#071426] bg-cyan-400 hover:bg-emerald-400 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Experience This in Class</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual: Biology Schematic Graphic */}
            <div className="lg:col-span-5">
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#071426] border border-cyan-500/20 shadow-inner">
                {/* 3D-styled scientific diagram preview */}
                <div className="text-xs uppercase font-mono text-cyan-400 tracking-wider mb-4 flex items-center justify-between">
                  <span>ProBio Concept Schema</span>
                  <Dna className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '12s' }} />
                </div>

                <div className="space-y-3 font-mono text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-[#0B1F38] border border-slate-800 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      Genetics & Molecular Basis
                    </span>
                    <span className="text-emerald-400 font-semibold">18-20 Qs</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0B1F38] border border-slate-800 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      Human & Plant Physiology
                    </span>
                    <span className="text-cyan-400 font-semibold">22-25 Qs</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0B1F38] border border-slate-800 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      Cell Structure, Function & Division
                    </span>
                    <span className="text-emerald-400 font-semibold">10-12 Qs</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0B1F38] border border-slate-800 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      Ecology & Biotechnology
                    </span>
                    <span className="text-cyan-400 font-semibold">16-18 Qs</span>
                  </div>
                </div>

                <div className="mt-5 p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-200 text-center">
                  Structured syllabus coverage strictly synchronized with current NTA NEET curriculum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
