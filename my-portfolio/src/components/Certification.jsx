import React from 'react';

export default function Certification() {
  const certificates = [
    {
      id: 1,
      title: "UBIG",
      issuer: "UBIG Internship",
      date: "2023",
      image: "Certification/UBIG.jpg",
      // --- UBAH DI SINI: Gradien monokrom ---
      color: "from-gray-300 to-gray-500", // Monokrom gradient untuk overlay
      url: "https://drive.google.com/file/d/11IALKSmdm22WOLSKpwJjKNRzrYXbYG-X/view?usp=sharing"
    },
    {
      id: 2,
      title: "BNSP - Associate Data Scientist",
      issuer: "BNSP",
      date: "2023",
      image: "Certification/BNSP1.jpg",
      // --- UBAH DI SINI: Gradien monokrom ---
      color: "from-gray-400 to-gray-600", // Monokrom gradient untuk overlay
      url: "https://drive.google.com/file/d/1HLg8eiFuW7qtcY8zJEN1gZSJQFTJyu5A/view?usp=sharing"
    },
    {
      id: 3,
      title: "BNSP - QUALIFICATION II IN SOFTWARE ENGINEERING",
      issuer: "BNSP",
      date: "2023",
      image: "Certification/BNSP2.jpg",
      // --- UBAH DI SINI: Gradien monokrom ---
      color: "from-gray-500 to-gray-700", // Monokrom gradient untuk overlay
      url: "https://drive.google.com/file/d/1xrSIxpnxfOM3S_Gg_N8f6DT-v7vkUL_Y/view?usp=sharing"
    }
  ];

  return (
    <section id="certification" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 animate-fadeInDown">
        <h2 className="text-5xl font-extrabold mb-3 text-black">
          Certifications
        </h2>
        <p className="text-gray-500 text-lg animate-pulse">My Professional Achievements</p>
      </div>
      
      {/* Container Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {certificates.map((certificate, index) => (
          <div 
            key={certificate.id}
            // --- UBAH DI SINI: Shadow hover kartu ---
            className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 border-2 border-gray-100 transition-all duration-500 hover:shadow-gray-300 hover:-translate-y-2 animate-fadeInDown"
            style={{ animationDelay: `${index * 150}ms` }} 
          >
            
            {/* Container gambar */}
            <div 
              // --- UBAH DI SINI: Gradien latar belakang gambar menjadi monokrom ---
              className="relative bg-gradient-to-br from-gray-400 to-gray-600 h-64 rounded-2xl overflow-hidden mb-6 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
              
              <img 
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* --- UBAH DI SINI: Warna badge Certified --- */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-lg animate-bounce">
                ✨ Certified
              </div>
              
              {/* Overlay gradien gambar akan diambil dari certificate.color yang sudah diubah */}
              <div className={`absolute inset-0 bg-gradient-to-t ${certificate.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
            </div>
            
            {/* Info sertifikat */}
            <div className="text-center mb-6 space-y-2">
              <h3 className="text-2xl font-bold text-gray-800 transform transition-all duration-300 hover:scale-105">
                {certificate.title}
              </h3>
              <div className="flex items-center justify-center gap-2">
                {/* --- UBAH DI SINI: Garis pemisah menjadi monokrom --- */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-pulse"></div>
                {/* --- UBAH DI SINI: Teks issuer menjadi monokrom --- */}
                <p className="text-gray-700 font-semibold">
                  {certificate.issuer}
                </p>
                {/* --- UBAH DI SINI: Garis pemisah menjadi monokrom --- */}
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-pulse"></div>
              </div>
              <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {certificate.date}
              </p>
            </div>
            
            {/* Tombol Lihat Sertifikat (sudah hitam dari perubahan sebelumnya) */}
            <div className="text-center mt-6">
              <a
                href={certificate.url}
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-2 bg-black hover:bg-gray-800 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Lihat Sertifikat
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

          </div>
        ))}
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

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
          animation-fill-mode: backwards; 
        }
      `}</style>
    </section>
  );
}