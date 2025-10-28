import React from 'react';

export default function ComingSoon() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      {/* Judul dan subjudul disesuaikan */}
      <h2 className="text-4xl font-bold mb-2">Coming Soon</h2>
      <p className="text-gray-600 mb-8">Still Learn</p>
      
      {/* Styling kartu disesuaikan */}
      <div className="max-w-xs mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
        <div className="bg-purple-300 h-48 rounded-xl flex items-center justify-center mb-6">
          <span className="text-white text-2xl font-bold">Gambar</span>
        </div>
        
        {/* Titik-titik statis (3 titik) sesuai gambar */}
        <div className="flex justify-center space-x-2">
          <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};