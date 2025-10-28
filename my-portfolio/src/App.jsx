import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import ComingSoon from './components/ComingSoon';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import { Mail, Linkedin, Instagram, MessageSquare } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // PERUBAHAN TIMER:
    // Setelah 2 detik, mulai proses fade-out
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000); // 2 detik

    // Setelah 3 detik (2s loading + 1s fade), hilangkan preloader
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 detik

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Preloader Anda */}
      {isLoading && <Preloader isFading={isFading} />}

      {/* Sisa Aplikasi Anda (tidak diubah) */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <ComingSoon />
      <Contact />
      <Footer />
      
      {/* Sidebar Sosial Media */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-40 hidden md:flex">
        <a 
          href="#" 
          className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100 hover:scale-110 transition shadow-lg"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a 
          href="#" 
          className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100 hover:scale-110 transition shadow-lg"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
        <a 
          href="#" 
          className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100 hover:scale-110 transition shadow-lg"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a 
          href="#" 
          className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100 hover:scale-110 transition shadow-lg"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

export default App;