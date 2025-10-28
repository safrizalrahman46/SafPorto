import React from 'react';

// Komponen ini menerima prop 'isFading'
export default function Preloader({ isFading }) {
  return (
    <div 
      className={`
        fixed inset-0 flex items-center justify-center z-[999]
        bg-white 
        
        /* === INI ADALAH ANIMASI SWIPE UP UNTUK BACKGROUND === */
        transition-transform duration-1000 ease-in-out
        ${isFading ? '-translate-y-full' : 'translate-y-0'}
        ${isFading ? 'pointer-events-none' : 'pointer-events-auto'}
      `}
    >
      {/* INI ADALAH ANIMASI GETAR UNTUK IKON.
        Ikon ini akan ikut "swipe" ke atas karena dia berada 
        di dalam div di atasnya.
      */}
      <div className="animate-shake">
        
        {/* Logo "R" Anda */}
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-gray-200">
          <span className="text-black text-5xl font-bold">R</span>
        </div>

      </div>
    </div>
  );
}