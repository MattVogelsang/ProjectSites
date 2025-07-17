import React from "react";

export function Navigation({ currentSection, setCurrentSection }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wider">
          Matthew Vogelsang
        </div>
        
        <div className="flex space-x-8">
          <button
            onClick={() => setCurrentSection('index')}
            className={`text-sm uppercase tracking-wider transition-colors duration-200 ${
              currentSection === 'index' ? 'text-white' : 'text-gray-500 hover:text-white'
            }`}
          >
            Index
          </button>
          <button
            onClick={() => setCurrentSection('about')}
            className={`text-sm uppercase tracking-wider transition-colors duration-200 ${
              currentSection === 'about' ? 'text-white' : 'text-gray-500 hover:text-white'
            }`}
          >
            About
          </button>
        </div>
      </div>
    </nav>
  );
} 