import React from "react";
import { Github, Figma } from "lucide-react";
// 1. Impor motion
import { motion } from "framer-motion";

// 2. Definisikan varian animasi untuk kartu
// Ini akan membuat kartu muncul 'dari kecil ke besar' (scale)
const cardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9 // Mulai dari 90% ukuran
  },
  visible: { 
    opacity: 1, 
    scale: 1, // Selesai di 100% ukuran
    transition: { 
      duration: 0.5, 
      ease: "easeOut" 
    } 
  }
};


export default function Projects() {
  // Data proyek Anda (TIDAK DIUBAH)
  const projects = [
    {
      title: "Dashboard Admin",
      category: "Website pribadi untuk menampilkan karya dan pengalaman",
      tags: ["Figma"],
      color: "bg-white-300",
      src: "/images/dashboard.png",
      githubUrl: "", 
      figmaUrl: "https://www.figma.com/design/QOh8iNXsJkpGFwdBtUocmZ/Portofolio-Safrizal-Rahman?node-id=28-19521&t=SGITvtwXFtwnatfi-1", 
    },
    {
      title: "POS Tab",
      category: "Desain antarmuka toko online modern dan responsif",
      tags: ["Figma"],
      color: "bg-white-300",
      src: "/images/PosTab.png",
      githubUrl: "#",
      figmaUrl: "https://www.figma.com/design/QOh8iNXsJkpGFwdBtUocmZ/Portofolio-Safrizal-Rahman?node-id=28-19521&t=SGITvtwXFtwnatfi-1", 
    },
    {
      title: "Product Page",
      category: "Aplikasi untuk mencatat dan memantau pengeluaran harian",
      tags: ["Flutter", "Firebase", "Bloc"],
      color: "bg-white-300",
      src: "/images/LandingProduct.png",
      githubUrl: null,
      figmaUrl: "https://www.figma.com/design/7cgB8LHJv7XB2CjEeVOB4B/PRODUCT-PAGE?node-id=109-875&t=PXHptnl9gkNPDhHR-1",
    },
    {
      title: "LootKita",
      category: "Website pribadi untuk menampilkan karya dan pengalaman",
      tags: ["Larvel", "TailwindCSS", "HTML", "CSS"],
      color: "bg-white-300",
      src: "/images/LootkitaProjects.png",
      githubUrl: "https://github.com/safrizalrahman46/LootKita",
      figmaUrl: "https://www.figma.com/design/pY8cTgPdYnTVB0XPTfdmDX/LootKita?node-id=3-2&t=bdu2b4MZrTNZPCj8-1",
    },
    {
      title: "Mintra",
      category: "Desain antarmuka toko online modern dan responsif",
      tags: ["FLutter", "Dart"],
      color: "bg-white-300",
      src: "/images/Mintra.png",
      githubUrl: "https://github.com/room1357/individual-project-3g-safrizalrahman46",
      figmaUrl: "https://www.figma.com/design/243qwkz53EItHbDdPEfxhy/Mintra?node-id=26-10902&t=TqsLGFnIQvjpan2a-1",
    },
    {
      title: "PBL Toeic Registration",
      category: "Aplikasi untuk mencatat dan memantau pengeluaran harian",
      tags: ["Laravel", "Tailwind", "Shadcn/UI", "HTML", "CSS"],
      color: "bg-white-300",
      src: "/images/PBLToeic.png",
      githubUrl: "https://github.com/safrizalrahman46/PBL_TOEIC",
      figmaUrl: null,
    },
    {
      title: "ZonaPrivat",
      category: "Website pribadi untuk menampilkan karya dan pengalaman",
      tags: ["Laravel", "TailwindCSS", "Shadcn/UI", "HTML", "CSS"],
      color: "bg-white-300",
      src: "/images/ZonaPrivat.png",
      githubUrl: "https://github.com/safrizalrahman46/ZONAPRIVAT",
      figmaUrl: "https://www.figma.com/design/7R4zURiFNffysmO9UMqll8/ZONAPRIVAT?node-id=0-1&t=SqyeIDqcdPVbnRYM-1",
    },
    {
      title: "TicaTacToe Game",
      category: "Desain antarmuka toko online modern dan responsif",
      tags: ["Java", "Oracle", "Greenfoot"],
      color: "bg-white-300",
      src: "/images/TicTacToe.png",
      githubUrl: "https://www.figma.com/design/7R4zURiFNffysmO9UMqll8/ZONAPRIVAT?node-id=0-1&t=SqyeIDqcdPVbnRYM-1",
      figmaUrl: null,
    },
    {
      title: "Dino Jump Game", 
      category: "Aplikasi untuk mencatat dan memantau pengeluaran harian",
      tags: ["GD Script", "Godot Engine"],
      color: "bg-white-300",
      src: "/images/DinoJump.png",
      githubUrl: "https://github.com/safrizalrahman46/PBL_KelomPok1_SEMESTER-3",
      figmaUrl: null,
    },
    {
      title: "UMM Design Admin Page",
      category: "Aplikasi untuk mencatat dan memantau pengeluaran harian",
      tags: ["Figma"],
      color: "bg-white-300",
      src: "/images/UMMDesign.png",
      githubUrl: null,
      figmaUrl: "https://www.figma.com/design/QOh8iNXsJkpGFwdBtUocmZ/Portofolio-Safrizal-Rahman?node-id=28-19521&t=SGITvtwXFtwnatfi-1",
    },
    {
      title: "Hand Recognition With Python",
      category: "Aplikasi untuk mencatat dan memantau pengeluaran harian",
      tags: ["Python"],
      color: "bg-white-300",
      src: "/images/HandRecognition.png",
      githubUrl: "https://www.figma.com/design/QOh8iNXsJkpGFwdBtUocmZ/Portofolio-Safrizal-Rahman?node-id=28-19521&t=SGITvtwXFtwnatfi-1",
      figmaUrl: null,
    },
    {
      title: "JTI Lapor",
      category: "Aplikasi untuk mencatat dan memantau pengeluaran harian",
      tags: ["Laravel", "Mysql", "shadcn/ui", "javascript", "Html", "CSS"],
      color: "bg-white-300",
      src: "/images/JTILapor.png",
      githubUrl: "https://github.com/safrizalrahman46/PBL_KelomPok1_SEMESTER-3",
      figmaUrl: null,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          
          // 3. Bungkus setiap kartu dengan motion.div
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ 
              once: true,    // Animasi hanya sekali
              amount: 0.1    // Memicu saat 10% kartu terlihat
            }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full" // Menambahkan h-full
          >
            {/* Gambar (TIDAK DIUBAH) */}
            <div
              className={`${project.color} h-56 flex items-center justify-center`}
            >
              <img
                src={project.src}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Konten (TIDAK DIUBAH) */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.category}</p>

              {/* Tags (TIDAK DIUBAH) */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs text-purple-700 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full hover:bg-purple-200 hover:translate-y-[-2px] transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link GitHub & Figma (TIDAK DIUBAH) */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-800 bg-gray-200 border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-300 transition-all duration-200"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                )}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-800 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full hover:bg-blue-200 transition-all duration-200"
                  >
                    <Figma className="w-3 h-3" />
                    Figma
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}