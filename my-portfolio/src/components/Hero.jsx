import React from 'react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-start space-y-6">
        {/* Header with Name (Sudah Sesuai) */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <h1 className="text-5xl md:text-6xl font-bold">Hi, I'm</h1>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-xl overflow-hidden shadow-sm">
            <img 
              src="/images/profile.png" 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">Rahman!</h1>
        </div>

        {/* Description (Sudah Sesuai) */}
        <div className="text-3xl md:text-4xl space-y-2">
          <p>I design and build intuitive,</p>
          <p>
            <span className="text-gray-500">data-driven</span> experiences for
          </p>
          <p>
            the <span className="text-purple-600 font-bold">Modern Web.</span>
            <span className="ml-4 text-sm border border-gray-300 px-4 py-2 rounded-full inline-block hover:bg-gray-50 transition">
              Let's Make A Unique Product
            </span>
          </p>
        </div>

        {/* ================== CARDS GRID (DIPERBARUI) ================== */}
        <div className="flex flex-wrap gap-4 mt-8 w-full">
          
          {/* Card 1: Experience Timeline (DIPERBARUI SESUAI GAMBAR) */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 w-full md:w-[280px] hover:shadow-lg transition">
            {/* Pill Tags Baru */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs text-gray-700 border border-gray-200 px-3 py-1 rounded-full">Data Analyst</span>
              <span className="text-xs text-black border border-gray-200 px-3 py-1 rounded-full">My Experience</span>
            </div>
            
            {/* Struktur Timeline (Konten Diperbarui) */}
            <div className="relative space-y-4 pl-5">
              <div className="absolute left-2 top-1 bottom-1 w-0.5 bg-gray-200"></div>
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute -left-[18px] top-1 w-4 h-4 bg-black rounded-full border-4 border-white"></div>
                <div>
                  <p className="text-sm font-semibold">Data Analyst</p>
                  <p className="text-xs text-gray-500 mt-0.5">BNSP Certification</p>
                </div>
              </div>
              {/* Item 2 */}
              <div className="relative">
                <div className="absolute -left-[18px] top-1 w-4 h-4 bg-black rounded-full border-4 border-white"></div>
                <div>
                  <p className="text-sm font-semibold">Freelance At TommyKreatif</p>
                  <p className="text-xs text-gray-500 mt-0.5">Front End Dev & UI/UX</p>
                </div>
              </div>
              {/* Item 3 */}
              <div className="relative">
                <div className="absolute -left-[18px] top-1 w-4 h-4 bg-black rounded-full border-4 border-white"></div>
                <div>
                  <p className="text-sm font-semibold">Intern At UBIG Data Malang</p>
                  <p className="text-xs text-gray-500 mt-0.5">Web Scraping & Mobile Dev</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Book Card (DIPERBARUI SESUAI GAMBAR) */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 w-full md:w-[580px] hover:shadow-lg transition">
            {/* Pill Tag Baru */}
            <div className="mb-4">
              <span className="text-xs text-black border border-gray-200 px-3 py-1 rounded-full">Book That I Read</span>
            </div>
            
            {/* Konten Gambar (Ganti src ke gambar Anda) */}
            <div className="flex justify-center items-center h-full py-4">
              <img 
                src="/images/book-mars-venus.png" // GANTI DENGAN PATH GAMBAR BUKU ANDA
                alt="Book Cover"
                className="w-3/5 object-contain" 
              />
            </div>
          </div>

          {/* Card 3: Music Taste Card (DIPERBARUI SESUAI GAMBAR) */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 w-full md:w-[280px] hover:shadow-lg transition overflow-hidden">
            {/* Pill Tag Baru */}
            <div className="mb-4">
              <span className="text-xs text-black border border-gray-200 px-3 py-1 rounded-full">My Music Taste</span>
            </div>

            {/* Konten Collage Album (Ganti src ke gambar Anda) */}
            <div className="relative h-40 flex justify-center items-center">
              {/* Album 1 (Kiri Belakang) */}
              <img 
                src="/images/album-1.png" // GANTI DENGAN PATH ALBUM 1
                alt="Album 1"
                className="w-20 h-20 object-cover rounded-lg shadow-md absolute transform -rotate-15 z-0"
                style={{ left: '5%' }}
              />
              {/* Album 2 (Kiri Depan) */}
              <img 
                src="/images/album-2.png" // GANTI DENGAN PATH ALBUM 2
                alt="Album 2"
                className="w-24 h-24 object-cover rounded-lg shadow-md absolute transform -rotate-6 z-10"
                style={{ left: '15%', top: '25%' }}
              />
              {/* Album 3 (Tengah) */}
              <img 
                src="/images/album-3-believe.png" // GANTI DENGAN PATH ALBUM 3
                alt="Album 3 (Believe)"
                className="w-28 h-28 object-cover rounded-lg shadow-xl absolute z-20 transform hover:scale-110 transition-transform"
              />
              {/* Album 4 (Kanan Depan) */}
              <img 
                src="/images/album-4.png" // GANTI DENGAN PATH ALBUM 4
                alt="Album 4"
                className="w-24 h-24 object-cover rounded-lg shadow-md absolute transform rotate-6 z-10"
                style={{ right: '15%', top: '25%' }}
              />
              {/* Album 5 (Kanan Belakang) */}
              <img 
                src="/images/album-5.png" // GANTI DENGAN PATH ALBUM 5
                alt="Album 5"
                className="w-20 h-20 object-cover rounded-lg shadow-md absolute transform rotate-15 z-0"
                style={{ right: '5%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Pills (Sudah Sesuai) */}
      <div className="mt-16 flex justify-center">
        <div className="bg-black rounded-full px-8 py-3 flex items-center space-x-6 shadow-xl">
          <a href="#about" className="text-white text-sm hover:text-purple-400 transition">About Me</a>
          <a href="#certification" className="text-white text-sm hover:text-purple-400 transition">Certification</a>
          <a href="#projects" className="text-white text-sm hover:text-purple-400 transition">Projects</a>
          <a href="#learning" className="text-white text-sm hover:text-purple-400 transition">Learning</a>
          <a href="#contact" className="text-white text-sm hover:text-purple-400 transition">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};