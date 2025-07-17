import React from "react";

export function Navigation({ currentSection, setCurrentSection }) {
  return (
    <header>
      <nav className="navigation">
        <div className="navigation__infos">
          <h2>
            <a 
              aria-current={currentSection === 'index' ? 'page' : undefined}
              href="/"
              className={currentSection === 'index' ? 'router-link-active router-link-exact-active' : ''}
            >
              <span data-textoriginal="Matt">Matt</span>
              <span data-textoriginal="Vogelsang">Vogelsang</span>
            </a>
          </h2>
          <h2>
            <span>Full-Stack</span>
            <span>Developer</span>
          </h2>
        </div>
        
        <div className="navigation__links">
          <a 
            aria-current={currentSection === 'index' ? 'page' : undefined}
            href="/"
            className={currentSection === 'index' ? 'router-link-active router-link-exact-active' : ''}
            onClick={(e) => {
              e.preventDefault();
              setCurrentSection('index');
            }}
          >
            <span className="navigation__currentLink">INDEX</span>
            <span className="navigation__duplicateLink">INDEX</span>
          </a>
          <a 
            href="/about"
            className={currentSection === 'about' ? 'router-link-active router-link-exact-active' : ''}
            onClick={(e) => {
              e.preventDefault();
              setCurrentSection('about');
            }}
          >
            <span className="navigation__currentLink">ABOUT</span>
            <span className="navigation__duplicateLink">ABOUT</span>
          </a>
        </div>
      </nav>
    </header>
  );
} 