import React, { useState, useEffect } from 'react';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';

const projects = [
  {
    id: 1,
    name: 'project1',
    title: 'E-Commerce Platform',
    image: project1,
    description: 'Full-stack e-commerce solution with modern UI/UX'
  },
  {
    id: 2,
    name: 'project2',
    title: 'Task Management App',
    image: project2,
    description: 'Collaborative task management with real-time updates'
  },
  {
    id: 3,
    name: 'project3',
    title: 'Portfolio Website',
    image: project3,
    description: 'Creative portfolio showcasing web development skills'
  }
];

export const ProjectGallery = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the first project after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-advance projects every 5 seconds
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleProjectClick = (index) => {
    setCurrentProject(index);
  };

  return (
    <>
      {/* Gallery Canvas (placeholder for Three.js) */}
      <div className="galleryCanvas">
        <canvas width="225" height="1161" style={{ display: 'block', width: '150px', height: '774px' }}></canvas>
      </div>

      {/* Gallery Block */}
      <div className="galleryBlock">
        <section className="gallery">
          {projects.map((project, index) => (
            <article 
              key={project.id}
              className={`galleryItem ${index === currentProject ? 'active' : ''}`}
              data-index={index + 1}
              data-name={project.name}
              style={{
                opacity: index === currentProject ? 1 : 0,
                visibility: index === currentProject ? 'visible' : 'hidden'
              }}
            >
              <figure className="gallery__figure">
                <div className="aspect"></div>
                <img 
                  src={project.image} 
                  alt={`Cover image of the ${project.title} project`}
                  className="gallery__image"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </article>
          ))}
        </section>

        {/* Project Info */}
        <section className="projectInfo">
          <div className="projectInfo__wrapper">
            <div className="projectInfoTitle">
              <span style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>
                {projects[currentProject].title}
              </span>
            </div>
            <a 
              href={`/works/${projects[currentProject].name}`} 
              className="projectInfo__link"
              style={{ opacity: 1, visibility: 'inherit' }}
            >
              <div className="projectInfo__subtitle">
                <span data-text="view project">view project</span>
              </div>
              <div className="projectInfo__shape"></div>
              <div className="projectInfo__icons">
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z" fill="white" stroke="white" strokeWidth="0.542084"></path>
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <path d="M10.8101 1.96222L0.726954 12.0453L1.66171 12.9801L11.7448 2.89698L11.9344 9.4447L13.208 9.07311L13.0134 2.35278C12.9877 1.46249 12.2434 0.718185 11.3531 0.692412L4.80762 0.502924L4.43487 1.77539L10.8101 1.96222Z" fill="white" stroke="white" strokeWidth="0.542084"></path>
                </svg>
              </div>
            </a>
          </div>
        </section>

        {/* Gallery Destination */}
        <div className="galleryDestination">
          <div className="aspectItem"></div>
        </div>
      </div>

      {/* Project Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleProjectClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentProject 
                ? 'bg-white scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}; 