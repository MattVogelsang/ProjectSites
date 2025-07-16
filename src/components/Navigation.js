import React, { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-light cursor-pointer" onClick={() => scrollToSection("hero")}>
            Matthew Vogelsang
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <button 
              onClick={() => scrollToSection("about")}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 