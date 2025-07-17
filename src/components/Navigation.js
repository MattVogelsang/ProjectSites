import React from "react";

export function Navigation({ currentSection, setCurrentSection }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-light cursor-pointer" onClick={() => setCurrentSection('index')}>
            Matthew Vogelsang
          </div>
          
          <div className="flex items-center space-x-8 text-sm">
            <button 
              onClick={() => setCurrentSection('index')}
              className={`hover:text-gray-300 transition-colors duration-200 ${currentSection === 'index' ? 'text-white' : 'text-gray-400'}`}
            >
              INDEX
            </button>
            <button 
              onClick={() => setCurrentSection('about')}
              className={`hover:text-gray-300 transition-colors duration-200 ${currentSection === 'about' ? 'text-white' : 'text-gray-400'}`}
            >
              ABOUT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 