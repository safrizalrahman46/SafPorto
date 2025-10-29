import React, { useState, useEffect } from 'react';

export default function Certification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right');
  
  // Data sertifikat - ganti dengan data sertifikat Anda
  const certificates = [
    {
      id: 1,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      image: "https://via.placeholder.com/400x300/6366f1/ffffff?text=React+Certificate",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "JavaScript Advanced",
      issuer: "FreeCodeCamp",
      date: "2023",
      image: "https://via.placeholder.com/400x300/8b5cf6/ffffff?text=JavaScript+Certificate",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      image: "https://via.placeholder.com/400x300/a855f7/ffffff?text=Web+Dev+Certificate",
      color: "from-pink-500 to-rose-600"
    }
  ];

  // Auto slide setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleDotClick = (index) => {
    if (isAnimating || index === currentIndex) return;
    setDirection(index > currentIndex ? 'right' : 'left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header dengan animasi fade in dari atas */}
      <div className="text-center mb-12 animate-fadeInDown">
        <h2 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-gradient">
          Certifications
        </h2>
        <p className="text-gray-500 text-lg animate-pulse">My Professional Achievements</p>
      </div>
      
      {/* Card container dengan animasi */}
      <div className="max-w-xl mx-auto relative">
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 right-10 w-20 h-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-20 w-20 h-20 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Main Card */}
        <div className={`relative bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-2xl p-8 border-2 border-purple-100 transition-all duration-500 hover:shadow-purple-300 ${
          isAnimating ? (direction === 'right' ? 'animate-slideOutLeft' : 'animate-slideOutRight') : 'animate-slideInRight'
        }`}>
          
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-purple-600 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous certificate"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-purple-600 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next certificate"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Container gambar dengan animasi zoom dan shine effect */}
          <div className="relative bg-gradient-to-br from-purple-400 to-pink-400 h-64 rounded-2xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
            
            <img 
              src={certificates[currentIndex].image}
              alt={certificates[currentIndex].title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            
            {/* Badge animasi floating */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-purple-600 shadow-lg animate-bounce">
              ✨ Certified
            </div>
            
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${certificates[currentIndex].color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
          </div>
          
          {/* Info sertifikat dengan stagger animation */}
          <div className="text-center mb-6 space-y-2">
            <h3 className="text-2xl font-bold text-gray-800 transform transition-all duration-300 hover:scale-105">
              {certificates[currentIndex].title}
            </h3>
            <div className="flex items-center justify-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent animate-pulse"></div>
              <p className="text-purple-600 font-semibold">
                {certificates[currentIndex].issuer}
              </p>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent animate-pulse"></div>
            </div>
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {certificates[currentIndex].date}
            </p>
          </div>
          
          {/* Dots indicator dengan animasi scale dan glow */}
          <div className="flex justify-center items-center space-x-3">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? 'w-8 h-3 bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50 animate-pulse'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                }`}
                aria-label={`View certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Counter dengan animasi */}
        <div className="text-center mt-6">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm text-purple-700 font-medium shadow-md animate-fadeIn">
            Certificate {currentIndex + 1} of {certificates.length}
          </span>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-100px);
          }
        }

        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100px);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }

        .animate-slideOutLeft {
          animation: slideOutLeft 0.3s ease-in;
        }

        .animate-slideOutRight {
          animation: slideOutRight 0.3s ease-in;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }
      `}</style>
    </section>
  );
}