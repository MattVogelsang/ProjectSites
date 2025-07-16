// Main React component (App.js)
import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import "./index.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-white text-2xl font-light">Matthew Vogelsang</div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white font-light">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
} 