import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';
import ComingSoon from './ComingSoon';

// Halaman ini berisi semua section di halaman utama
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <ComingSoon />
    </>
  );
}