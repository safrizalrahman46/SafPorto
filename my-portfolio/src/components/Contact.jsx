import React from 'react';
import { Mail, MessageSquare } from 'lucide-react'; // Import ikon

// Pesan otomatis (kita bisa pakai \n biasa, Google bisa menanganinya)
const pesanOtomatis = `Halo, perkenalkan. Saya tertarik untuk mengetahui lebih lanjut mengenai layanan pembuatan website yang Anda tawarkan.

Saat ini saya sedang merencanakan untuk mengembangkan website bagi usaha saya agar dapat tampil lebih profesional dan menjangkau lebih banyak pelanggan secara online.

Mohon informasi terkait proses pengerjaan, estimasi waktu, serta biaya yang diperlukan. Terima kasih.`;
// ----------------------------------------

export default function Contact() {
  
  // 1. Siapkan variabel
  const nomorWA = "6282213286139"; // Format 62
  const emailAnda = "rahmansafrizal5@gmail.com";
  const subjekEmail = "Tertarik Layanan Pembuatan Website";
  
  // 2. Encode pesan (cukup sekali)
  const pesanEncoded = encodeURIComponent(pesanOtomatis);
  const subjekEncoded = encodeURIComponent(subjekEmail);

  // 3. Link WhatsApp (Sudah Benar)
  // const linkWhatsApp = `https://wa.me/${nomorWA}?text=${pesanEncoded}`;
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=6282213286139&text=${pesanEncoded}`;

  
  // 4. (PERUBAHAN UTAMA) Link Email diubah agar langsung ke GMAIL
  const linkEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAnda}&su=${subjekEncoded}&body=${pesanEncoded}`;

  return (
    <section id="contact" className="py-24 bg-white-50"> 
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Punya proyek atau ide menarik? Atau hanya ingin menyapa? Silakan hubungi saya. Saya selalu terbuka untuk diskusi dan peluang baru.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Tombol Email (href dan target diperbarui) */}
          <a 
            href={linkEmail}
            target="_blank" // 1. Tambahkan ini agar membuka di tab baru
            rel="noopener noreferrer" // 2. Tambahkan ini untuk keamanan
            className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all shadow-lg text-lg font-medium"
          >
            <Mail className="w-5 h-5" />
            <span>Kirim Email</span>
          </a>

          {/* Tombol WhatsApp (sudah benar) */}
          <a 
            href={linkWhatsApp} 
            target="_blank" 
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