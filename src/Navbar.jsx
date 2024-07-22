import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex items-center justify-between mt-12 lg: py-4 lg:py-6 border-b border-neutral-900">
      <div className="flex items-center">
        <h1 className="font-extrabold text-3xl lg:text-5xl font-poppins">Haseeb.</h1>
      </div>
      <div className="text-white flex items-center justify-between gap-4 text-2xl lg:text-4xl">
        <a 
          href="https://github.com/HSBrajpoot" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/abdul-haseeb007" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-600 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://twitter.com/your-twitter-username" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaTwitterSquare />
        </a>
        <a 
          href="https://instagram.com/your-instagram-username" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagramSquare />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
