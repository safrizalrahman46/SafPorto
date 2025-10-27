import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-8 text-sm text-gray-500 border-t mt-12">
      © {new Date().getFullYear()} Safrizal Rahman. All rights reserved.
    </footer>
  );
}
