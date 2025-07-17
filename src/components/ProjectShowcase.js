import React, { useState } from "react";
import projectAtlasImg from '../images/project-atlas.jpg';
import trinityInsuranceImg from '../images/trinity-insurance.jpg';
import landscapeImg from '../images/Landscape.jpg';
import workoutGeneratorImg from '../images/Workout-Generator.jpg';
import classicoImg from '../images/classico.jpg';
import spaceTourismImg from '../images/space-hero.jpg';
import shoppingAppImg from '../images/sneakers-hero.jpg';
import shop23Img from../images/Shop23.jpg;
import swimWithSaraImg from '../images/swim-with-sara.jpg';

export function ProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Project Atlas",
      subtitle: "Visual SEO Planning Tool",
      image: projectAtlasImg,
      link: "https://project-atlas-weld.vercel.app"
    },
    {
      id: 2,
      title: "Trinity Insurance",
      subtitle: "Professional Insurance Website",
      image: trinityInsuranceImg,
      link: "https://www.trinityinv.net/"
    },
    {
      id: 3,
      title: "Richy's Landscaping",
      subtitle: "Landscaping Services Website",
      image: landscapeImg,
      link: "https://richys-landscaping.webflow.io/"
    },
    {
      id: 4,
      title: "Workout Generator",
      subtitle: "Personalized Fitness App",
      image: workoutGeneratorImg,
      link: "https://mattvogelsang.github.io/Workout-Generator/workout_generator.html"
    },
    {
      id: 5,
      title: "Classico",
      subtitle: "LuxuryRide-Share Landing",
      image: classicoImg,
      link: "https://ridewithclassico.com"
    },
    {
      id: 6,
      title: "Space Tourism",
      subtitle: "Space Travel Website",
      image: spaceTourismImg,
      link: "https://space-tourism-website.vercel.app"
    },
    {
      id: 7,
      title: "Shopping App",
      subtitle: "E-commerce Platform",
      image: shoppingAppImg,
      link: "https://mattvogelsang.github.io/e-commerce/"
    },
    {
      id: 8,
      title: "Shop23",
      subtitle: "Full-Stack E-commerce",
      image: shop23Img,
      link: "https://project3-shop23onrender.com/"
    },
    {
      id: 9,
      title: "Swim with Sara",
      subtitle: "Swimming Lessons Website",
      image: swimWithSaraImg,
      link: "https://swimwithsara.vercel.app"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Project Image */}
      <div className="absolute inset-0">
        <img
          src={projects[currentProject].image}
          alt={projects[currentProject].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Project Info Overlay */}
      <div className="absolute bottom-20 left-20 right-20">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-6xl md:text-8xl font-light mb-4">
              {projects[currentProject].title}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {projects[currentProject].subtitle}
            </p>
            <a
              href={projects[currentProject].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-white hover:text-gray-300 transition-colors duration-200 uppercase tracking-wider"
            >
              View Project
              <svg className="w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4-4 4" />
              </svg>
            </a>
          </div>
          
          <div className="text-right">
            <div className="text-sm text-gray-400 mb-2">
              {currentProject + 1} / {projects.length}
            </div>
            <div className="flex space-x-4">
              <button
                onClick={prevProject}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <svg className="w-6 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextProject}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                <svg className="w-6 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1">
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentProject ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 