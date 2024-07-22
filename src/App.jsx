import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Contact from "./Contact";
import { BiSolidUpArrowCircle } from "react-icons/bi";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    console.log("Scroll Y position:", window.scrollY);
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900 selection:bg-cyan-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-10">
        {showScroll && (
          <div
            className="fixed bottom-8 right-8 text-5xl bg-black rounded-full p-2 cursor-pointer"
            onClick={scrollToTop}
          >
            <BiSolidUpArrowCircle className="text-white" />
          </div>
        )}
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
