import React from "react";
// import { Mail } from "lucide-react"; // Dihapus
import { SiGithub, SiLinkedin, SiWhatsapp, SiInstagram } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
      <div className="flex items-center space-x-2">
        <div className="rounded-full bg-black text-white w-6 h-6 flex items-center justify-center text-xs font-bold">R</div>
        <a href="mailto:rahmansafrizal5@gmail.com" className="text-sm hover:underline">
          rahmansafrizal5@gmail.com
        </a>
      </div>
      {/* Mengganti ikon agar sesuai desain */}
      <div className="flex items-center space-x-4 text-gray-700">
        <a href="#" className="hover:text-black"><SiWhatsapp size={18} /></a>
        <a href="#" className="hover:text-black"><SiLinkedin size={18} /></a>
        <a href="#" className="hover:text-black"><SiInstagram size={18} /></a>
        <a href="#" className="hover:text-black"><SiGithub size={18} /></a>
      </div>
    </nav>
  );
}