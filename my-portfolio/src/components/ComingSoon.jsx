import React, { useState } from "react";

export default function ComingSoon() {
  // Gambar-gambar online
  const images = [
    { 
      id: 1, 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", 
      label: "Golang" 
    },
    { 
      id: 2, 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
      label: "Next.js" 
    },
    { 
      id: 3, 
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png", 
      label: "Selenium" 
    },
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
    <section id="Learning" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-2">Coming Soon</h2>
      <p className="text-gray-600 mb-8">Still Learning New Techs</p>

      <div className="relative max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        {/* Gambar (slide) */}
        <div className="relative h-56 rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-gray-50">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-28 h-28 object-contain mb-3"
              />
              <p className="text-lg font-semibold text-gray-700">{img.label}</p>
            </div>
          ))}

          {/* Tombol navigasi kiri-kanan */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full w-9 h-9 flex items-center justify-center shadow"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full w-9 h-9 flex items-center justify-center shadow"
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
                currentIndex === i
                  ? "bg-purple-500 scale-110"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
