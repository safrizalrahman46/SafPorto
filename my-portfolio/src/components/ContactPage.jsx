import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function ContactPage() {
  
  // Nomor WA dan pesan otomatis Anda
  const waNumber = "6282213286139"; // Format 62 (BENAR)
  const waMessage = encodeURIComponent("Halo Safrizal, saya tertarik untuk berdiskusi lebih lanjut.");
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* Kolom Kiri: Teks Pilihan & Form */}
        <div>
          <h1 className="text-5xl font-bold mb-4">Let's Connect</h1>
          <p className="text-lg text-gray-600 mb-8">
            Pilih cara yang paling nyaman untuk menghubungi saya. Saya selalu terbuka untuk diskusi dan peluang baru.
          </p>

          {/* Tombol WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all shadow-lg text-lg font-medium"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Kirim via WhatsApp</span>
          </a>

          {/* Pemisah "atau" */}
          <div className="my-8 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">atau</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Form "Kirim Email" */}
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <input type="text" name="first-name" id="first-name" placeholder="Jane"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <input type="text" name="last-name" id="last-name" placeholder="Smitherton"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" 
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input type="email" name="email" id="email" placeholder="email@janesfakedoimain.net"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your message
              </label>
              <textarea name="message" id="message" rows="4" placeholder="Enter your question or message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <div>
              <button type="submit"
                className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Submit Email
              </button>
            </div>
          </form>
        </div>

        {/* Kolom Kanan: Gambar */}
        <div className="hidden md:block sticky top-32">
          <img 
            src="/images/contact-image.jpg" // GANTI DENGAN GAMBAR ANDA
            alt="Contact" 
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}