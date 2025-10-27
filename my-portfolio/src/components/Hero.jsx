import React from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    // Menggunakan <section> tunggal yang berisi Hero dan About
    <section className="max-w-6xl mx-auto px-4 py-12">
      
      {/* Bagian Hero Atas */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Hi, I’m
        </h1>
        {/* Placeholder Foto Profil */}
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-sm text-gray-600 shadow-sm">
          Foto
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold">
          <span className="text-black font-bold">Rahman!</span>
        </h1>
      </div>

      <p className="mt-2 text-lg text-gray-800">
        I design and build intuitive, <span className="text-gray-400 font-medium">data-driven</span> experiences for the{" "}
        <span className="text-purple-500 font-semibold">Modern Web.</span>
      </p>

      <Button className="mt-4">Let’s Make A Unique Product</Button>

      {/* Experience + Book + Music Taste cards (dengan konten) */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Card 1: Experience */}
        <div className="p-4 border rounded-xl shadow-sm">
          <h4 className="font-semibold text-sm mb-3">My Experience</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-xs font-semibold">●</span>
              <span className="text-xs text-gray-600">UI/UX Design Intern</span>
            </li>
             <li className="flex items-center gap-2">
              <span className="text-xs font-semibold">●</span>
              <span className="text-xs text-gray-600">Web Dev Freelance</span>
            </li>
             <li className="flex items-center gap-2">
              <span className="text-xs font-semibold">●</span>
              <span className="text-xs text-gray-600">Information Systems Student</span>
            </li>
          </ul>
        </div>
        
        {/* Card 2: Book */}
        <div className="p-4 border rounded-xl shadow-sm flex flex-col items-center">
          <h4 className="font-semibold text-sm mb-3">Book That I Read</h4>
          <div className="bg-white border-2 border-black p-2 w-36 h-44 flex flex-col justify-between shadow-lg -rotate-3">
            <div className="text-xs font-bold">MEN ARE FROM MARS...</div>
            <div className="text-center text-3xl">♀♂</div>
            <div className="text-xs text-right font-bold">...Women Are From Venus</div>
          </div>
        </div>

        {/* Card 3: Music */}
        <div className="p-4 border rounded-xl shadow-sm flex flex-col items-center">
            <h4 className="font-semibold text-sm mb-3">My Music Taste</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-md shadow-sm"></div>
            </div>
        </div>
      </div>

      {/* Navigation bar (dari Hero) */}
      <div className="mt-12 flex justify-center">
        <div className="bg-black text-white flex rounded-full px-6 py-3 space-x-4 text-sm shadow-lg">
          <button className="hover:text-gray-300">About Me</button>
          <button className="hover:text-gray-300">Services</button>
          <button className="hover:text-gray-300">Projects</button>
          <button className="hover:text-gray-300">Learning</button>
          <button className="font-medium hover:text-gray-300">Let’s Connect →</button>
        </div>
      </div>

      {/* Konten dari About.jsx dipindah ke sini */}
      <div className="text-center max-w-3xl mx-auto py-20">
        <p className="text-lg text-gray-800">
          I’m Safrizal Rahman, an Information Systems student passionate about web development and UI/UX design.
        </p>
        <p className="mt-3 text-gray-700">
          I love creating simple, functional, and user-friendly digital experiences.
        </p>
        <Button variant="outline" className="mt-6">Download My CV →</Button>
      </div>

    </section>
  );
}