import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { HeroSection } from '../components/landing/HeroSection';
import { AboutSection } from '../components/landing/AboutSection';
import { FeaturesSection } from '../components/landing/FeaturesSection';
import { HowItWorks } from '../components/landing/HowItWorks';
import { ProjectPreviews } from '../components/landing/ProjectPreviews';
import { CtaSection } from '../components/landing/CtaSection';
import { Footer } from '../components/common/Footer';
export const LandingPage: React.FC = () => {
  return <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16">
        {' '}
        {/* Add padding to account for fixed navbar */}
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <HowItWorks />
        <ProjectPreviews />
        <CtaSection />
        <Footer />
      </div>
    </div>;
};