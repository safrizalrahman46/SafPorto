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
import { Mail, Linkedin, Instagram, MessageSquare, Dribbble, Github } from 'lucide-react';

// 1. Impor motion
import { motion } from 'framer-motion';

// 2. Definisikan varian animasi untuk SELURUH SECTION
// Ini akan membuat section muncul dengan 'fade-up' (naik)
const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 // Mulai 20px di bawah
  },
  visible: { 
    opacity: 1, 
    y: 0, // Selesai di posisi 0
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  // Fungsi Preloader Anda (TIDAK DIUBAH)
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2000); 
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 3000); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadTimer);
    };
  }, []); 

  return (
    <div className="min-h-screen bg-white">
      
      {isLoading && <Preloader isFading={isFading} />}

      {/* Navbar dan Hero tidak dianimasi */}
      <Navbar />
      <Hero />

      {/* 3. Bungkus semua section di bawah Hero dengan motion.div */}
      
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <About />
      </motion.div>

      {/* Projects dan Certification tidak perlu dibungkus di sini
          karena animasinya sudah ada DI DALAM komponennya */}
      <Projects />
      <Certification />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <TechStack />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <ComingSoon />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Contact />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Footer />
      </motion.div>
      
      {/* Sidebar Sosial Media (TIDAK DIUBAH) */}
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