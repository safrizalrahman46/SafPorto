import React from 'react';
import { Mail, Github, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-600 text-sm">© 2024 Safrizal Rahman. All rights reserved.</p>
        {/* Ikon sosial media di footer */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a 
            href="#" 
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 hover:scale-110 transition"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 hover:scale-110 transition"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 hover:scale-110 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 hover:scale-110 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-100 hover:scale-110 transition"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};