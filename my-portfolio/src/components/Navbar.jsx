import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Sisi Kiri: Logo dan Email (sesuai gambar) */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">R</span>
            </div>
            <span className="text-sm text-gray-700">rahmansafrizal5@gmail.com</span>
          </div>

          {/* Sisi Kanan: Tombol Menu (sesuai gambar) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition md:hidden" // Sembunyikan di desktop
          >
            {isOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-5 h-5 text-black" />}
          </button>

          {/* Navigasi Desktop (terlihat di `md` ke atas) */}
          <div className="hidden md:flex items-center space-x-6">
             <a href="#about" className="text-gray-800 text-sm hover:text-purple-600 transition">About Me</a>
             <a href="#projects" className="text-gray-800 text-sm hover:text-purple-600 transition">Projects</a>
             <a href="#contact" className="text-gray-800 text-sm hover:text-purple-600 transition">Let's Connect</a>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown (muncul saat isOpen true) */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-white rounded-2xl shadow-xl p-6 w-64 border border-gray-100 md:hidden">
          <div className="flex flex-col space-y-4">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-purple-600 transition">About Me</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-purple-600 transition">Services</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-purple-600 transition">Projects</a>
            <a href="#learning" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-purple-600 transition">Learning</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-purple-600 transition">Let's Connect</a>
          </div>
        </div>
      )}
    </nav>
  );
};