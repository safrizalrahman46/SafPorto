import React from 'react';

export default function TechStack() {
  const techs = [
    { name: 'Laravel', src: '/tech/laravel-logo.png' },
    { name: 'HTML5', src: '/tech/html5-logo.png' },
    { name: 'CSS3', src: '/tech/css3-logo.png' },
    { name: 'React', src: '/tech/react-logo.png' },
    { name: 'Figma', src: '/tech/figma-logo.png' },
    { name: 'Javascript', src: '/tech/javascript.png' },
    { name: 'Javascript', src: '/tech/colab.png' },
    { name: 'Javascript', src: '/tech/python.png' },
  ];

  // Duplikasi array tetap diperlukan
  const duplicatedTechs = [...techs, ...techs];

  return (
    <section className="py-16 overflow-hidden">
      
      {/* PERUBAHAN 1:
        'gap-16 md:gap-24' DIHAPUS dari div ini.
      */}
      <div className="flex whitespace-nowrap animate-scroll-left">
        {duplicatedTechs.map((tech, index) => (
          <img 
            key={index}
            src={tech.src} 
            alt={tech.name} 
            /* PERUBAHAN 2:
              Tambahkan margin kanan (mr-16 md:mr-24) untuk menggantikan gap.
              Ini memastikan setiap item (termasuk yang terakhir) memiliki
              jarak yang sama, membuat loop-nya sempurna.
            */
            className="h-24 md:h-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-none mr-16 md:mr-24" 
          />
        ))}
      </div>
    </section>
  );
};