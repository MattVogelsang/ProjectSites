import React, { useState } from "react";
import projectAtlasImg from '../images/project-atlas.jpg';
import trinityInsuranceImg from '../images/trinity-insurance.jpg';
import landscapeImg from '../images/Landscape.jpg';
import workoutGeneratorImg from '../images/Workout-Generator.jpg';
import classicoImg from '../images/classico.jpg';
import spaceTourismImg from '../images/space-hero.jpg';
import shoppingAppImg from '../images/sneakers-hero.jpg';
import shop23Img from '../images/Shop23.jpg';
import swimWithSaraImg from '../images/swim-with-sara.jpg';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Matthew's actual projects from his portfolio
  const projects = [
    {
      id: 1,
      title: "Project Atlas – Visual SEO Planning Tool",
      description: "An interactive SEO content strategy tool that lets users visually map topic clusters and internal linking using a drag-and-drop interface.",
      technologies: ["React", "TypeScript", "Vite", "React Flow", "Tailwind CSS"],
      image: projectAtlasImg,
      link: "https://project-atlas-weld.vercel.app",
      category: "Tooling",
      challenge: "SEO teams often struggle with visualizing content plans and internal linking strategies in a way that is both flexible and collaborative.",
      solution: "Built a drag-and-drop canvas app using React Flow where users can create topic clusters, assign metadata, and draw interlinking strategies that auto-save to localStorage.",
      outcome: "Validated with SEO experts as a valuable workflow tool. Showcases deep understanding of component architecture, data flow, and UX thinking tailored to niche content teams."
    },
    {
      id: 2,
      title: "Trinity Insurance Website",
      description: "A modern, responsive website for Trinity Insurance, featuring a clean design and comprehensive insurance information.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      image: trinityInsuranceImg,
      link: "https://www.trinityinv.net/",
      category: "Business",
      challenge: "Create a professional insurance website that effectively communicates services while maintaining a modern, trustworthy aesthetic.",
      solution: "Developed a responsive React application with TypeScript, featuring clean UI components and optimized performance.",
      outcome: "Delivered a polished website that effectively showcases Trinity Insurance services and maintains a professional online presence."
    },
    {
      id: 3,
      title: "Richy's Landscaping Website",
      description: "A modern, professional website for Richy's Landscaping, showcasing their landscaping services and portfolio in Hollywood, Florida.",
      technologies: ["Webflow", "HTML", "CSS", "JavaScript"],
      image: landscapeImg,
      link: "https://richys-landscaping.webflow.io/",
      category: "Business",
      challenge: "Create a professional website that effectively communicates Richy's Landscaping services while maintaining a modern, trustworthy aesthetic.",
      solution: "Developed a responsive website using Webflow, featuring a clean design, service showcases, and customer testimonials.",
      outcome: "Delivered a polished website that effectively showcases Richy's Landscaping services and maintains a professional online presence."
    },
    {
      id: 4,
      title: "Workout Generator",
      description: "An interactive web application that generates personalized workout routines based on user preferences for workout type, difficulty level, and data source.",
      technologies: ["Python", "JavaScript", "HTML", "CSS", "API Integration"],
      image: workoutGeneratorImg,
      link: "https://mattvogelsang.github.io/Workout-Generator/workout_generator.html",
      category: "Fitness",
      challenge: "Create a user-friendly application that helps users generate customized workout routines based on their preferences and fitness goals.",
      solution: "Developed a responsive web application with options for workout type, difficulty level, and data source (local database or Wger API).",
      outcome: "Created a practical tool that helps users quickly generate workout routines tailored to their needs, with the flexibility to use either local data or an external API."
    },
    {
      id: 5,
      title: "Classico – Luxury Ride-Share Landing Experience",
      description: "A refined, conversion-focused landing page for a luxury ride-share brand, featuring curated car showcases and a waitlist signup flow.",
      technologies: ["React", "Vite"],
      image: classicoImg,
      link: "https://ridewithclassico.com",
      category: "Marketing",
      challenge: "The client needed a high-fidelity marketing site to establish brand presence and onboard early users - all while conveying luxury and trust.",
      solution: "Designed and developed a responsive React site with elegant visual hierarchy, smooth transitions, and a custom vehicle showcase, all optimized for performance and accessibility.",
      outcome: "Delivered a polished user experience that effectively communicated Classicos premium offering and captured early user interest through the waitlist funnel."
    },
    {
      id: 6,
      title: "Space Tourism Website",
      description: "A modern, responsive website for a space tourism company, showcasing space travel experiences and destinations.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      image: spaceTourismImg,
      link: "https://space-tourism-website.vercel.app",
      category: "Tourism",
      challenge: "Create an engaging website that captures the excitement of space travel while maintaining a professional and trustworthy appearance.",
      solution: "Developed a responsive React application with TypeScript, featuring smooth animations and interactive elements.",
      outcome: "Delivered a polished website that effectively communicates the unique experience of space tourism and maintains user engagement."
    },
    {
      id: 7,
      title: "Shopping App",
      description: "A modern e-commerce platform for sneakers, featuring a clean design and seamless shopping experience.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      image: shoppingAppImg,
      link: "https://mattvogelsang.github.io/e-commerce/",
      category: "E-commerce",
      challenge: "Develop an intuitive shopping experience that makes browsing and purchasing sneakers effortless.",
      solution: "Created a responsive React application with TypeScript, featuring product filtering, search, and a streamlined checkout process.",
      outcome: "Built a user-friendly e-commerce platform that effectively showcases products and facilitates easy purchases."
    },
    {
      id: 8,
      title: "Shop23 - E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring product browsing, shopping cart functionality, and secure checkout process.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      image: shop23Img,
      link: "https://project3-shop23.onrender.com/",
      category: "E-commerce",
      challenge: "Create a full-featured e-commerce platform that provides a seamless shopping experience with secure payment processing and efficient product management.",
      solution: "Developed a responsive React application with Node.js backend, implementing features like product catalog, shopping cart, user authentication, and secure checkout.",
      outcome: "Delivered a robust e-commerce solution that demonstrates full-stack development capabilities and modern web application architecture."
    },
    {
      id: 9,
      title: "Swim with Sara",
      description: "A modern, responsive website for Swim with Sara, showcasing swimming lessons and aquatic services with an engaging user experience.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      image: swimWithSaraImg,
      link: "https://swimwithsara.vercel.app",
      category: "Business",
      challenge: "Create an engaging website that effectively communicates swimming lesson services while maintaining a professional and trustworthy aesthetic.",
      solution: "Developed a responsive React application with TypeScript, featuring modern UI components and optimized performance for the swimming instruction business.",
      outcome: "Delivered a polished website that effectively showcases Swim with Sara services and maintains a professional online presence."
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Selected Work</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            modern web technologies, and user-centered design
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden bg-gray-900 aspect-[4/3] mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs text-gray-300 uppercase tracking-wider bg-black/50 px-3 py-1">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-light mb-3 group-hover:text-gray-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-gray-500 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-gray-500">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-200 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://matthewportfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wider uppercase"
          >
            View Full Portfolio
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-gray-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-light">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover mb-6"
              />
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Description</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Challenge</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Solution</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Outcome</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.outcome}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-wider uppercase"
                >
                  View Live Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider uppercase"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 