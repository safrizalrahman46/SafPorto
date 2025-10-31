import React, { useState } from "react";
// ⚠️ Hapus import Spotify karena tidak tersedia di lucide-react
// import { Spotify } from "lucide-react";

// + Impor ikon untuk tombol slider
import { ChevronLeft, ChevronRight } from "lucide-react";

// + Data untuk buku, Anda bisa tambahkan sebanyak yang Anda mau di sini
const books = [
  {
    id: 1,
    src: "https://photos1.blogger.com/blogger/7632/1855/1600/Sang%20Pemimpi.jpg",
    alt: "Sang Pemimpi",
  },
  {
    id: 2,
    src: "https://bukukita.com/babacms/displaybuku/56443_f.jpg",
    alt: "The Subtle Art of Not Giving a F*ck",
  },
  {
    id: 3,
    src: "https://m.media-amazon.com/images/I/81RfW9mFkEL.jpg",
    alt: "Deep Work",
  },
  {
    id: 4,
    src: "https://m.media-amazon.com/images/I/619HZ-AqAaL._AC_UF1000,1000_QL80_.jpg",
    alt: "5SOS BOOk",
  },
  {
    id: 5,
    src: "https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg",
    alt: "Start with Why",
  },
];

export default function Hero() {
  // + State untuk melacak indeks buku yang sedang di tengah
  // Kita mulai dari 2 (buku ke-3) agar ada buku di kiri dan kanannya
  const [currentIndex, setCurrentIndex] = useState(2);

  // + Fungsi untuk tombol next
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  // + Fungsi untuk tombol previous
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + books.length) % books.length
    );
  };

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-start space-y-6">
        {/* Header with Name */}
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

        {/* Description */}
        <div className="text-3xl md:text-4xl space-y-2">
          <p>I design and build intuitive,</p>
          <p>
            <span className="text-gray-500">data-driven</span> experiences for
          </p>
          <p>
            <span className="text-purple-600 font-bold">Modern Web.</span>
            <span className="ml-4 text-sm border border-gray-300 px-4 py-2 rounded-full inline-block hover:bg-gray-50 transition">
              Let's Make A Unique Product
            </span>
          </p>
        </div>

        {/* ================== CARDS GRID ================== */}
        <div className="flex flex-wrap gap-4 mt-8 w-full">
          {/* Card 1: Experience (Tidak Berubah) */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 w-full md:w-[280px] hover:shadow-lg transition">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs text-gray-700 border border-gray-200 px-3 py-1 rounded-full">
                Data Analyst
              </span>
              <span className="text-xs text-black border border-gray-200 px-3 py-1 rounded-full">
                My Experience
              </span>
            </div>

            <div className="relative space-y-4 pl-5">
              <div className="absolute left-2 top-1 bottom-1 w-0.5 bg-gray-200"></div>

              <div className="relative">
                <div className="absolute -left-[18px] top-1 w-4 h-4 bg-black rounded-full border-4 border-white"></div>
                <div>
                  <p className="text-sm font-semibold">Data Analyst</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    BNSP Certification
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[18px] top-1 w-4 h-4 bg-black rounded-full border-4 border-white"></div>
                <div>
                  <p className="text-sm font-semibold">
                    Freelance At TommyKreatif
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Front End Dev & UI/UX
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-[18px] top-1 w-4 h-4 bg-black rounded-full border-4 border-white"></div>
                <div>
                  <p className="text-sm font-semibold">
                    Intern At UBIG Data Malang
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Web Scraping & Mobile Dev
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================ */}
          {/* Card 2: Book (INI YANG DIUBAH MENJADI SLIDER) */}
          {/* ================================================================ */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 w-full md:w-[580px] hover:shadow-lg transition">
            <div className="mb-4">
              <span className="text-xs text-black border border-gray-200 px-3 py-1 rounded-full">
                Book That I Read
              </span>
            </div>

            {/* === KONTEN SLIDER BARU === */}
            <div className="relative flex items-center justify-center w-full h-48">
              {/* Tombol Kiri */}
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:left-4 z-30 p-2 bg-white/50 rounded-full shadow-md hover:bg-white transition-all active:scale-95"
                aria-label="Previous book"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>

              {/* Container untuk Slider 3D */}
              <div
                className="relative w-full h-full"
                style={{ perspective: "600px" }}
              >
                <div
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Kita map semua buku */}
                  {books.map((book, index) => {
                    const offset = index - currentIndex;
                    const absOffset = Math.abs(offset);

                    // Kalkulasi style transform
                    const transform = `
                      translateX(${offset * 30}%) 
                      scale(${1 - absOffset * 0.2})
                      translateZ(${-absOffset * 60}px)
                      rotateY(${offset * 18}deg)
                    `;
                    
                    // Buku yang lebih dekat punya z-index lebih tinggi
                    const zIndex = books.length - absOffset;
                    // Buku yang jauh (lebih dari 2 langkah) akan transparan
                    const opacity = absOffset <= 2 ? 1 : 0; 

                    return (
                      <img
                        key={book.id}
                        src={book.src}
                        alt={book.alt}
                        className="absolute top-0 left-0 right-0 bottom-0 m-auto w-28 h-40 object-cover rounded-lg shadow-md transition-all duration-300 ease-out"
                        style={{
                          transform,
                          zIndex,
                          opacity,
                          // Hanya buku di tengah yang bisa di-klik (jika ada link)
                          pointerEvents: offset === 0 ? "auto" : "none",
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Tombol Kanan */}
              <button
                onClick={handleNext}
                className="absolute right-0 sm:right-4 z-30 p-2 bg-white/50 rounded-full shadow-md hover:bg-white transition-all active:scale-95"
                aria-label="Next book"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            {/* === AKHIR KONTEN SLIDER === */}

            <p className="text-center text-xs text-gray-500 mt-4">
              Books that inspire my mindset and creativity
            </p>
          </div>
          {/* ================================================================ */}
          {/* AKHIR CARD 2 */}
          {/* ================================================================ */}


          {/* Card 3: My Music Taste (Tidak Berubah) */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 w-full md:w-[280px] hover:shadow-lg transition overflow-hidden">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs text-black border border-gray-200 px-3 py-1 rounded-full">
                My Music Taste
              </span>
              <a
                href="https://open.spotify.com/playlist/yourplaylistid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-green-50 rounded-full transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  className="w-5 h-5 fill-green-500"
                >
                  <path d="M248 8C111 8 0 119 0 256s111 248 
                248 248 248-111 248-248S385 8 248 
                8zm100.7 365.3c-4.2 6.8-13.2 8.9-20 
                4.7-54.7-33.4-123.6-41-204.7-22.7-7.8 
                1.7-15.6-3.3-17.3-11.1-1.7-7.8 3.3-15.6 
                11.1-17.3 88.9-19.8 165.1-10.7 
                227.3 26.7 6.8 4.2 8.9 13.2 4.7 
                20zM376.6 312c-5.2 8.4-16.3 11-24.7 
                5.9-62.7-38.5-158.4-49.7-231.9-27.4-9.4 
                2.9-19.3-2.3-22.2-11.7-2.9-9.4 
                2.3-19.3 11.7-22.2 82.9-25.5 187.9-13.3 
                258.1 31.1 8.3 5.1 10.8 16.2 
                5.9 24.3zm2.7-65.5c-74.6-44.3-197.6-48.4-268.3-26.7-11.2 
                3.4-23.2-2.9-26.6-14.1-3.4-11.2 
                2.9-23.2 14.1-26.6 80.4-24.4 
                213.8-19.8 298.4 30.2 10.1 6 
                13.4 19 7.4 29.1-6 10.1-19 
                13.4-29.1 7.4z" />
                </svg>
              </a>
            </div>
            <div className="relative h-40 flex justify-center items-center">
              <img
                src="/images/album-1.png"
                alt="Album 1"
                className="w-20 h-20 object-cover rounded-lg shadow-md absolute transform -rotate-[15deg] z-0"
                style={{ left: "5%" }}
              />
              <img
                src="/images/album-2.png"
                alt="Album 2"
                className="w-24 h-24 object-cover rounded-lg shadow-md absolute transform -rotate-[6deg] z-10"
                style={{ left: "15%", top: "25%" }}
              />
              <img
                src="/images/album-3-believe.png"
                alt="Album 3 (Believe)"
                className="w-28 h-28 object-cover rounded-lg shadow-xl absolute z-20 transform hover:scale-110 transition-transform"
              />
              <img
                src="/images/album-4.png"
                alt="Album 4"
                className="w-24 h-24 object-cover rounded-lg shadow-md absolute transform rotate-[6deg] z-10"
                style={{ right: "15%", top: "25%" }}
              />
              <img
                src="/images/album-5.png"
                alt="Album 5"
                className="w-20 h-20 object-cover rounded-lg shadow-md absolute transform rotate-[15deg] z-0"
                style={{ right: "5%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Pills (Tidak Berubah) */}
      <div className="mt-16 flex justify-center">
        <div className="bg-black rounded-full px-8 py-3 flex items-center space-x-6 shadow-xl">
          <a
            href="#about"
            className="text-white text-sm hover:text-purple-400 transition"
          >
            About Me
          </a>
          <a
            href="#certification"
            className="text-white text-sm hover:text-purple-400 transition"
          >
            Certification
          </a>
          <a
            href="#projects"
            className="text-white text-sm hover:text-purple-400 transition"
          >
            Projects
          </a>
          <a
            href="#Learning"
            className="text-white text-sm hover:text-purple-400 transition"
          >
            Learning
          </a>
          <a
            href="#contact"
            className="text-white text-sm hover:text-purple-400 transition"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}