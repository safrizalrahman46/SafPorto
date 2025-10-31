import React from "react";
import { useInView } from "react-intersection-observer";

export default function ScrollAnimation({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan satu kali
    threshold: 0.1,    // Memicu saat 10% komponen terlihat
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out 
        ${inView ? "opacity-100 scale-100" : "opacity-0 scale-90"}
      `}
    >
      {children}
    </div>
  );
}
