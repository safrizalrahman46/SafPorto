import React from "react";

export default function ComingSoon() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-xl font-bold">Coming Soon</h2>
      {/* <p className="text-sm text-gray-500">Still Learn</p> */} {/* Dihapus */}
      <div className="mt-8 flex justify-center">
        <div className="w-64 border rounded-2xl shadow-md overflow-hidden">
          {/* Mengganti warna agar lebih sesuai dengan desain (light-purple) */}
          <div className="bg-purple-200 h-40 flex items-center justify-center text-purple-600 font-semibold">Gambar</div>
          <div className="py-2 flex justify-center gap-1 text-gray-800 text-lg">• • • •</div>
        </div>
      </div>
    </section>
  );
}