"use client";

import { HeroSection } from '@/components/landing/hero-section';
import { ProblemStatementSection } from '@/components/landing/problem-statement-section';
import { WhatYouWillLearnSection } from '@/components/landing/what-you-will-learn-section';
import { OfferSection } from '@/components/landing/offer-section';
import { WhyAlefAcademySection } from '@/components/landing/why-alef-school-section';
import { RegistrationFormSection } from '@/components/landing/registration-form-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ProblemStatementSection />
      <WhatYouWillLearnSection />
      <WhyAlefAcademySection />
      <OfferSection />
      <RegistrationFormSection />
      <Footer />
    </main>
  );
}
