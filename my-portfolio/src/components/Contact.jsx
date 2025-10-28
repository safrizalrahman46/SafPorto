import React from 'react';
import { Mail, MessageSquare } from 'lucide-react'; // Import ikon

export default function Contact() {
  return (
    // Section dengan ID "contact" agar link di Navbar/Hero berfungsi
    <section id="contact" className="py-24 bg-white-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Judul */}
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        
        {/* Subjudul */}
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Punya proyek atau ide menarik? Atau hanya ingin menyapa? Silakan hubungi saya. Saya selalu terbuka untuk diskusi dan peluang baru.
        </p>

        {/* Pilihan Tombol Kontak */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Tombol Email */}
          <a 
            href="mailto:rahmansafrizal5@gmail.com" 
            className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all shadow-lg text-lg font-medium"
          >
            <Mail className="w-5 h-5" />
            <span>Kirim Email</span>
          </a>

          {/* Tombol WhatsApp */}
          <a 
            // PENTING: Ganti +6281234567890 dengan nomor WA Anda
            href="https://wa.me/+6281234567890" 
            target="_blank" // Membuka di tab baru
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-300 bg-white rounded-full hover:bg-gray-100 transition-all text-lg font-medium"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Kirim WhatsApp</span>
          </a>

        </div>
      </div>
    </section>
  );
};