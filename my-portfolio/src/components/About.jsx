import React from 'react';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <p className="text-xl md:text-2xl leading-relaxed text-gray-800">
        I'm Safrizal Rahman, an Information Systems student passionate about web development and UI/UX design. I love creating simple, functional, and user-friendly digital experiences.
      </p>
      {/* Tombol Download CV disesuaikan */}
      <button className="mt-8 px-8 py-3 border-2 border-gray-300 rounded-full hover:bg-gray-50 transition flex items-center space-x-2 mx-auto group">
        <span>Download My CV</span>
        <Download className="w-4 h-4 group-hover:animate-bounce" />
      </button>
    </section>
  );
};