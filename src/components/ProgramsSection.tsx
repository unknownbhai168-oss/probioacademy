import React from 'react';
import { GraduationCap, ArrowRight, Check, BookOpen, Clock, Users, ShieldAlert } from 'lucide-react';
import { ProgramType } from '../utils/whatsapp.ts';

interface ProgramsSectionProps {
  onSelectProgram: (program: ProgramType) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const programs: Array<{
    id: ProgramType;
    shortTitle: string;
    targetYear: string;
    duration: string;
    audience: string;
    description: string;
    curriculum: string[];
    features: string[];
    popularBadge?: string;
    borderAccent: string;
  }> = [
    {
      id: 'Class 11 — Foundation for NEET Biology',
      shortTitle: 'Class 11 Foundation',
      targetYear: 'NEET 2027 Aspirants',
      duration: '2-Year Comprehensive Track',
      audience: 'Students entering or currently in Class 11',
      description:
        'A thorough conceptual launchpad covering the vast Class 11 Botany and Zoology syllabus. Strong emphasis on Cell Biology, Plant Physiology, and Human Physiology with zero backlog accumulation.',
      curriculum: [
        'Diversity in Living World & Plant/Animal Kingdom',
        'Structural Organisation in Animals and Plants',
        'Cell: Structure, Function & Biomolecules',
        'Plant Physiology & Human Physiology Complete Depth',
      ],
      features: [
        'Weekly NCERT dissection lectures',
        'Chapter-end subjective & objective problem sheets',
        'Periodic cumulative revision tests',
        'Dedicated foundation doubt sessions with Shubhajit Sir',
      ],
      borderAccent: 'hover:border-cyan-400',
    },
    {
      id: 'Class 12 — Board and NEET Biology Preparation',
      shortTitle: 'Class 12 Dual Master',
      targetYear: 'NEET 2026 Aspirants',
      duration: '1-Year Intensive Dual Track',
      audience: 'Class 12 students balancing Board exams & NEET',
      popularBadge: 'High Demand',
      description:
        'Synchronized preparation addressing both Class 12 School/Board exam criteria and high-difficulty NEET questions. Special mastery in Genetics, Molecular Biology, Biotechnology, and Ecology.',
      curriculum: [
        'Reproduction in Organisms, Flowering Plants & Humans',
        'Principles of Inheritance & Molecular Basis of Inheritance',
        'Human Health & Disease, Microbes in Human Welfare',
        'Biotechnology: Principles & Applications, Ecology',
      ],
      features: [
        'Board examination descriptive writing guidance',
        'High-weightage Genetics & Molecular drills',
        'Class 11 rapid refresher modules before NEET',
        'Full syllabus NTA-pattern mock tests with timer',
      ],
      borderAccent: 'hover:border-emerald-400',
    },
    {
      id: 'Dropper / Repeater — Focused NEET Revision',
      shortTitle: 'Dropper / Repeater Batch',
      targetYear: 'Target NEET 2026 / Rank Booster',
      duration: 'Targeted Fast-Track Program',
      audience: 'Pass-out students dedicated full-time to NEET',
      description:
        'A fast-paced, high-yield program engineered to identify past score gaps, eliminate negative markings, and convert 280-300 scores into 345-360 dream scores through rigorous problem-solving.',
      curriculum: [
        'High-speed synoptic revision of Class 11 & 12 NCERT',
        'Assertion-Reasoning & Multi-Statement elimination',
        'Full 35-year AIPMT/NEET past paper dissection',
        'All-India level simulation papers & negative-mark audits',
      ],
      features: [
        'Speed enhancement drills (target: 45 min for 90 Qs)',
        'Personal error-book maintenance supervised by Sir',
        'Continuous performance tracking and gap remediation',
        'Exam temperament & psychological pressure handling',
      ],
      borderAccent: 'hover:border-cyan-300',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-[#071426] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20 text-cyan-300 text-xs font-medium tracking-wider uppercase mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Courses Built for Medical Dreams
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tailored curriculums structured for Class 11, Class 12, and Repeater candidates. Each program is delivered with direct mentorship from Shubhajit Sir.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs text-amber-300/90 bg-amber-950/30 border border-amber-500/20 px-3 py-1.5 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Contact us for current batch availability and fees.</span>
          </div>
        </div>

        {/* 3 Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className={`p-7 rounded-3xl bg-[#0B1F38] border border-cyan-500/15 ${prog.borderAccent} transition-all duration-300 shadow-xl shadow-black/25 flex flex-col justify-between relative group hover:shadow-cyan-950/40`}
            >
              {prog.popularBadge && (
                <div className="absolute top-6 right-6 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 rounded-full">
                  {prog.popularBadge}
                </div>
              )}

              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  {prog.duration}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {prog.shortTitle}
                </h3>
                <div className="text-xs text-slate-400 mb-4">{prog.targetYear}</div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {prog.description}
                </p>

                {/* Key Syllabus Modules */}
                <div className="mb-6 pt-4 border-t border-slate-800">
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Curriculum Highlights</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {prog.curriculum.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Program Features */}
                <div className="mb-8 pt-4 border-t border-slate-800">
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Teaching Features</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {prog.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectProgram(prog.id)}
                className="w-full py-3.5 rounded-xl font-display font-semibold text-sm text-[#071426] bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-emerald-400 hover:to-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group-hover:shadow-cyan-500/20"
              >
                <span>Book a Seat — {prog.shortTitle.replace(' Batch', '').replace(' Dual Master', '')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Note on Fees and Availability */}
        <div className="p-4 rounded-2xl bg-[#0B1F38]/50 border border-slate-800 text-center max-w-2xl mx-auto text-xs text-slate-400">
          <p>
            Batch allocations are determined after a brief introductory interaction with Shubhajit Sir to understand the student's current academic stage. Contact us directly to confirm seats.
          </p>
        </div>
      </div>
    </section>
  );
};
