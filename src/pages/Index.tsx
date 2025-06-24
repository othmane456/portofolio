
import React from 'react';
import { Hero } from '../components/Hero';
import { InteractiveAbout } from '../components/InteractiveAbout';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Achievements } from '../components/Achievements';
import { Contact } from '../components/Contact';
import { Navigation } from '../components/Navigation';
import { InspirationalHero } from '../components/InspirationalHero';
import { Philosophy } from '../components/Philosophy';
import { ClosingSection } from '../components/ClosingSection';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { PremiumSkills } from '../components/PremiumSkills';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <InspirationalHero />
      <InteractiveAbout />
      <Philosophy />
      <ExperienceTimeline />
      <Projects />
      <PremiumSkills />
      <Achievements />
      <Contact />
      <ClosingSection />
    </div>
  );
};

export default Index;
