import React from "react";
import { SiLaravel, SiHtml5, SiCss3, SiReact, SiFigma } from "react-icons/si";

export default function TechStack() {
  const icons = [SiLaravel, SiHtml5, SiCss3, SiReact, SiFigma];
  // const names = ["Laravel", "HTML", "CSS", "React", "Figma"]; // Dihapus

  return (
    <section className="py-16">
      <div className="flex justify-center items-center gap-10 md:gap-16 flex-wrap">
        {icons.map((Icon, i) => (
          <div key={i} className="flex flex-col items-center">
            <Icon size={60} className="text-gray-600" />
            {/* Teks nama dihapus agar sesuai desain */}
            {/* <p className="text-sm mt-2">{names[i]}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}