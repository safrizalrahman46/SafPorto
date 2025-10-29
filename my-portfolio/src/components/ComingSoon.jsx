import React, { useState } from 'react';

export default function ComingSoon() {
  // Gambar-gambar placeholder
  const images = [
    { id: 1, color: 'bg-purple-300', label: 'Gambar 1' },
    { id: 2, color: 'bg-purple-400', label: 'Gambar 2' },
    { id: 3, color: 'bg-purple-500', label: 'Gambar 3' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigasi slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-2">Coming Soon</h2>
      <p className="text-gray-600 mb-8">Still Learn</p>

      <div className="relative max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        {/* Gambar (slide) */}
        <div className="relative h-56 rounded-xl overflow-hidden mb-6">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`absolute inset-0 flex items-center justify-center text-white text-2xl font-bold transition-all duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              } ${img.color}`}
            >
              {img.label}
            </div>
          ))}

          {/* Tombol navigasi kiri-kanan */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-1.5 shadow"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-1.5 shadow"
          >
            ›
          </button>
        </div>

        {/* Titik indikator */}
        <div className="flex justify-center space-x-2">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                currentIndex === i ? 'bg-purple-500 scale-110' : 'bg-gray-400 hover:bg-gray-500'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
