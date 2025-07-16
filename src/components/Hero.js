import React from "react";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-4 leading-tight">
            Matthew
          </h1>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-tight">
            Vogelsang
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
          Full-stack developer crafting digital experiences with modern technologies
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wider uppercase"
          >
            View Work
          </button>
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
} 