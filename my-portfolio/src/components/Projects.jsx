import React from 'react';

export default function Projects() {
  const projects = [
    { 
      title: 'Judul Project', 
      category: 'Keterangan Singkat', 
      tags: ['Teknologi', 'Teknologi', 'Teknologi'],
      color: 'bg-purple-300' // Sesuai gambar
    },
    { 
      title: 'Judul Project', 
      category: 'Keterangan Singkat', 
      tags: ['Teknologi', 'Teknologi', 'Teknologi'],
      color: 'bg-purple-300'
    },
    { 
      title: 'Judul Project', 
      category: 'Keterangan Singkat', 
      tags: ['Teknologi', 'Teknologi', 'Teknologi'],
      color: 'bg-purple-300'
    },
    { 
      title: 'Judul Project', 
      category: 'Keterangan Singkat', 
      tags: ['Teknologi', 'Teknologi', 'Teknologi'],
      color: 'bg-purple-300'
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            // Styling kartu disesuaikan
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Placeholder 'GAMBAR' dengan warna ungu */}
            <div className={`${project.color} h-64 flex items-center justify-center`}>
              <span className="text-white text-4xl font-bold">GAMBAR</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.category}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  // Styling tag disesuaikan
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
};