import React from "react";
import { OrbitProgress } from "react-loading-indicators";

export default function Preloader({ isFading }) {
  return (
    <div
      className={`
        fixed inset-0 flex flex-col items-center justify-center z-[999]
        bg-white 
        transition-transform duration-1000 ease-in-out
        ${isFading ? '-translate-y-full' : 'translate-y-0'}
        ${isFading ? 'pointer-events-none' : 'pointer-events-auto'}
      `}
    >
      {/* CD Image + Rotation */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Gambar CD hitam putih yang berputar */}
        <img
          src="/images/JBCD.png"
          alt="CD Loader"
          className="w-28 h-28 animate-spin-slow mb-6 filter grayscale"
        />

        {/* Loading indicator di bawah CD */}
        <OrbitProgress 
          color="#000" 
          size="medium" 
          text="" 
        />
      </div>

      {/* Optional: Tambahkan teks */}
      <p className="text-sm text-gray-600 mt-4 tracking-wide">is it too late now to say sorry...</p>
    </div>
  );
}
