import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { TeachingMethodology } from './components/TeachingMethodology.tsx';
import { ProgramsSection } from './components/ProgramsSection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactMapSection } from './components/ContactMapSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { ProgramType } from './utils/whatsapp.ts';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>(
    'Class 11 — Foundation for NEET Biology'
  );

  const handleOpenBooking = (program?: ProgramType) => {
    if (program) {
      setSelectedProgram(program);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#071426] text-[#F4F8FF] font-sans antialiased selection:bg-[#35E0F2]/20 selection:text-[#35E0F2]">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Flow */}
      <main>
        <HeroSection onOpenBooking={() => handleOpenBooking()} />
        <AboutSection onOpenBooking={() => handleOpenBooking()} />
        <TeachingMethodology onOpenBooking={() => handleOpenBooking()} />
        <ProgramsSection onSelectProgram={(prog) => handleOpenBooking(prog)} />
        <ReviewsSection />
        <FaqSection />
        <ContactMapSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating & Mobile Sticky CTAs */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* WhatsApp Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialProgram={selectedProgram}
      />
    </div>
  );
}
