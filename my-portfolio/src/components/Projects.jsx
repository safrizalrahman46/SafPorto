import React from 'react';

export default function Projects() {
  const projects = [
    { 
      title: 'Portfolio Website', 
      category: 'Website pribadi untuk menampilkan karya dan pengalaman', 
      tags: ['React', 'TailwindCSS', 'Vite'],
      color: 'bg-purple-400'
    },
    { 
      title: 'E-Commerce UI', 
      category: 'Desain antarmuka toko online modern dan responsif', 
      tags: ['Next.js', 'Framer Motion', 'TypeScript'],
      color: 'bg-purple-500'
    },
    { 
      title: 'Expense Tracker App', 
      category: 'Aplikasi untuk mencatat dan memantau pengeluaran harian', 
      tags: ['Flutter', 'Firebase', 'Bloc'],
      color: 'bg-purple-600'
    },
    { 
      title: 'Company Profile', 
      category: 'Website profil perusahaan dengan tampilan profesional', 
      tags: ['HTML', 'CSS', 'JavaScript'],
      color: 'bg-purple-300'
    },
    { 
      title: 'Chat Application', 
      category: 'Aplikasi chat real-time dengan autentikasi pengguna', 
      tags: ['React', 'Node.js', 'Socket.io'],
      color: 'bg-purple-700'
    },
    { 
      title: 'Landing Page Startup', 
      category: 'Landing page promosi startup dengan animasi interaktif', 
      tags: ['Next.js', 'GSAP', 'TailwindCSS'],
      color: 'bg-purple-400'
    },
    { 
      title: 'Admin Dashboard', 
      category: 'Dashboard manajemen data dengan chart dan statistik', 
      tags: ['React', 'Recharts', 'ShadcnUI'],
      color: 'bg-purple-500'
    },
    { 
      title: 'Travel Blog', 
      category: 'Website blog untuk berbagi pengalaman perjalanan', 
      tags: ['Astro', 'Markdown', 'TailwindCSS'],
      color: 'bg-purple-600'
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Gambar atau placeholder */}
            <div className={`${project.color} h-56 flex items-center justify-center`}>
              <span className="text-white text-3xl font-bold tracking-wide">GAMBAR</span>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.category}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-purple-100 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
