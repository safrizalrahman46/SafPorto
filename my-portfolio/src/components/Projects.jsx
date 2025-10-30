import React from "react";

export default function Projects() {
  const projects = [
    { 
      title: 'Dashboard Admin', 
      category: 'Website pribadi untuk menampilkan karya dan pengalaman', 
      tags: ['React', 'TailwindCSS', 'Vite'],
      color: 'bg-white-300',
      src: '/images/dashboard.png'
    },
    { 
      title: 'E-Commerce UI', 
      category: 'Desain antarmuka toko online modern dan responsif', 
      tags: ['Next.js', 'Framer Motion', 'TypeScript'],
      color: 'bg-white-300',
      src: '/images/ecommerce.png'
    },
    { 
      title: 'Expense Tracker App', 
      category: 'Aplikasi untuk mencatat dan memantau pengeluaran harian', 
      tags: ['Flutter', 'Firebase', 'Bloc'],
      color: 'bg-white-300',
      src: '/images/expense.png'
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

      {/* Grid Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Gambar */}
            <div className={`${project.color} h-56 flex items-center justify-center`}>
              <img 
                src={project.src} 
                alt={project.title} 
                className="h-full w-full object-cover"
              />
            </div>

            {/* Konten */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.category}</p>

              {/* Tags */}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
