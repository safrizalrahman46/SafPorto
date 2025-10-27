import React from "react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="text-center max-w-3xl mx-auto px-4 py-20">
      <p className="text-lg text-gray-800">
        I’m Safrizal Rahman, an Information Systems student passionate about web development and UI/UX design.
      </p>
      <p className="mt-3 text-gray-700">
        I love creating simple, functional, and user-friendly digital experiences.
      </p>
      <Button variant="outline" className="mt-6">Download My CV →</Button>
    </section>
  );
}
