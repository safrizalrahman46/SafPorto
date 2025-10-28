import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // Dihidupkan kembali
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';

// Import ikon untuk Sidebar
import { Mail, Linkedin, Instagram, MessageSquare } from 'lucide-react';

function App() {
  return (
    // Styling <div /> utama disesuaikan dengan referensi
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About /> {/* Komponen About dipanggil di sini */}
      <Projects />
      <TechStack />
      <ComingSoon />
      <Footer />
      
      {/* === INI ADALAH SIDEBAR SOSIAL MEDIA YANG DITAMBAHKAN === */}
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
          {/* Ikon WhatsApp (menggunakan MessageSquare) */}
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