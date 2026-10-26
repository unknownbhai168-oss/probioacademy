import React, { useState } from 'react';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      student: 'Ritwika Das',
      role: 'Class 12 NEET Aspirant',
      batch: 'Class 12 Batch',
      text: 'Shubhajit Sir does not just make you memorize NCERT; he explains the reason behind every line. Genetics was my biggest fear in Biology, but through Sir’s visual flowcharts and pedigree problem practice, it became my strongest scoring unit.',
      highlight: 'Clear conceptual understanding in Genetics',
    },
    {
      student: 'Soumyadeep Sen',
      role: 'Dropper / Repeater Batch',
      batch: 'Full Year NEET Track',
      text: 'In previous coaching classes with 150 students, it was impossible to ask doubts. At ProBio Academy, the batch size is focused and Sir patiently listens to every question until your doubt is 100% resolved. My mock test scores increased significantly.',
      highlight: 'Dedicated personal doubt resolution',
    },
    {
      student: 'Mrs. S. Chatterjee',
      role: 'Guardian / Parent',
      batch: 'Class 11 Foundation Parent',
      text: 'As a parent, what I appreciate most is Sir’s sincerity and discipline. He keeps us informed about weekly attendance and test performance. The environment is respectful, focused, and truly educational.',
      highlight: 'Transparent parental communication & discipline',
    },
    {
      student: 'Debolina Roy',
      role: 'NEET Candidate',
      batch: 'Class 11 & 12 Batch',
      text: 'The NCERT line-by-line questions and Assertion-Reason tests conducted at ProBio Academy match exactly what comes in the real exam. Shubhajit Sir is an inspiring Biology mentor for any serious medical student in Kolkata.',
      highlight: 'Exact NEET pattern test series',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-24 bg-[#0B1F38]/40 relative overflow-hidden border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-400/20 text-cyan-300 text-xs font-medium tracking-wider uppercase mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-cyan-400" />
            <span>Community Voice & Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Feedback from Students & Parents
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            A reputation built on consistent classroom mentorship, conceptual clarity, and genuine student dedication in Baranagar, Kolkata.
          </p>

          {/* Transparent Rating Notice */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 p-3 rounded-2xl bg-[#0B1F38] border border-cyan-500/20 text-xs text-slate-300">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-white">5.0 / 5.0 Star Rating</span>
            <span className="text-slate-500">·</span>
            <span>Over 70+ student evaluations reported on local directory listings</span>
            <span className="text-slate-500">·</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=ProBio+Academy+Shubhajit+Sir+Baranagar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-medium underline"
            >
              Verify on Google Maps
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Testimonial Showcase Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-[#0B1F38] border border-cyan-500/20 shadow-2xl">
            <div className="absolute top-6 right-8 text-cyan-500/15">
              <MessageSquareQuote className="w-20 h-20" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-mono text-cyan-300 ml-2 px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30">
                  {reviews[activeIndex].highlight}
                </span>
              </div>

              <blockquote className="text-lg sm:text-xl text-slate-200 leading-relaxed font-sans mb-8">
                “{reviews[activeIndex].text}”
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
                <div>
                  <div className="font-display font-bold text-white text-base">
                    {reviews[activeIndex].student}
                  </div>
                  <div className="text-xs text-slate-400">
                    {reviews[activeIndex].role} · <span className="text-cyan-400">{reviews[activeIndex].batch}</span>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl bg-[#071426] border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-slate-400 px-2">
                    {activeIndex + 1} / {reviews.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-2.5 rounded-xl bg-[#071426] border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === activeIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
