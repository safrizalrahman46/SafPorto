import React from "react";
// Impor ikon sosial dihapus karena tidak ada di navbar
// import { SiGithub, SiLinkedin, SiWhatsapp, SiInstagram } from "react-icons/si";

// Tambahkan impor untuk ikon menu (hamburger)
// Anda mungkin perlu menginstal react-icons jika belum: npm install react-icons
import { HiMenu } from "react-icons/hi"; 

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
      
      {/* Sisi Kiri: Ini sudah benar sesuai desain */}
      <div className="flex items-center space-x-2">
        <div className="rounded-full bg-black text-white w-6 h-6 flex items-center justify-center text-xs font-bold">R</div>
        <a href="mailto:rahmansafrizal5@gmail.com" className="text-sm hover:underline">
          rahmansafrizal5@gmail.com
        </a>
      </div>

      {/* Sisi Kanan: Mengganti ikon sosial dengan ikon menu hamburger agar sesuai gambar */}
      <div className="flex items-center">
        <button className="text-black p-1 rounded-md hover:bg-gray-100">
          <HiMenu size={24} />
        </button>
      </div>

    </nav>
  );
}