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
import Certification from './components/Certification';

// Ikon-ikon ini diimpor di sini
import { Mail, Linkedin, Instagram, MessageSquare, Dribbble, Github } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // --- PERBAIKAN UNTUK SCROLL RESTORATION ---
    // 1. Memberi tahu browser untuk tidak menyimpan posisi scroll
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // ------------------------------------------

    // Timer fade-out Anda (tidak diubah)
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000); // 2 detik

    // Timer untuk menghilangkan preloader (tidak diubah)
    const loadTimer = setTimeout(() => {
      setIsLoading(false);

      // --- PERBAIKAN UNTUK SCROLL RESTORATION ---
      // 2. Memaksa halaman untuk scroll ke paling atas
      window.scrollTo(0, 0);
      // ------------------------------------------

    }, 3000); // 3 detik

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []); // <-- Array kosong ini memastikan useEffect hanya berjalan sekali saat reload

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
      <Certification />
      <Footer />
      
      {/* Sidebar Sosial Media (tidak diubah) */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-40 hidden md:flex">
        <a 
          href="#" 
          className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100 hover:scale-110 transition shadow-lg"
        >
          <Dribbble className="w-5 h-5" />
        </a>
        <a 
          href="#" 
          className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-purple-100 hover:scale-110 transition shadow-lg"
        >
          <Github className="w-5 h-5" />
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