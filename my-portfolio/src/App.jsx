import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About"; // Dihapus, karena digabung ke Hero
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-black font-inter">
      <Navbar />
      <Hero />
      {/* <About /> */} {/* Dihapus */}
      <Projects />
      <TechStack />
      <ComingSoon />
      <Footer />
    </div>
  );
}

export default App;