import React from "react";

// Memperbarui data agar memiliki tags yang dinamis
const projects = [
  { title: "Judul Project 1", desc: "Keterangan Singkat", tags: ["Teknologi", "Teknologi", "Teknologi"] },
  { title: "Judul Project 2", desc: "Keterangan Singkat", tags: ["Teknologi", "Teknologi", "Teknologi"] },
  { title: "Judul Project 3", desc: "Keterangan Singkat", tags: ["Teknologi", "Teknologi", "Teknologi"] },
  { title: "Judul Project 4", desc: "Keterangan Singkat", tags: ["Teknologi", "Teknologi", "Teknologi"] },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="border rounded-xl overflow-hidden shadow-sm">
            {/* Mengganti warna placeholder agar sesuai desain (abu-abu) */}
            <div className="bg-gray-200 h-48 flex items-center justify-center font-semibold text-gray-500">GAMBAR</div>
            <div className="p-4">
              <h3 className="font-semibold text-sm">{p.title}</h3>
              <p className="text-xs text-gray-500">{p.desc}</p>
              {/* Me-render tags secara dinamis dari data */}
              <div className="flex gap-2 mt-2 flex-wrap">
                {p.tags.map((tag, j) => (
                  <span key={j} className="text-xs border px-2 py-0.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}