// Main React component (App.js)
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { ProjectGallery } from "./components/ProjectGallery";
import { About } from "./components/About";
import "./index.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('index');

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
        <div className="text-white text-2xl font-light">Matt Vogelsang</div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white font-light h-screen overflow-hidden">
      {/* Noise overlay */}
      <div 
        className="noise" 
        style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIj4KICAgICAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPgo=')"
        }}
      ></div>

      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {currentSection === 'index' && (
        <section className="index">
          <ProjectGallery />
          
          {/* Status indicator */}
          <aside className="status">
            <div className="status__state--available status__state"></div>
            <div className="status__info">
              <div>
                <div className="status__infoText">
                  <p>currently available</p>
                </div>
                <div className="status__infoText">
                  <p>for freelance project</p>
                </div>
              </div>
              <div className="status__contact">
                <p className="status__description status__contactContent">
                  <span>CONTACT ME</span>
                </p>
                <a className="status__link status__contactContent" href="mailto:vogelsangmatt@gmail.com">
                  <span>vogelsangmatt@gmail.com</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Scroller icon */}
          <svg className="scrollerIcon" fill="none" height="30" viewBox="0 0 30 30" width="30" xmlns="http://www.w3.org/2000/svg">
            <path d="m27.1148 13.1344c-.7476 0-6.9562.7101-10.2492 1.0945 2.5992-2.0578 7.4907-5.94609 8.0227-6.47577 1.664-1.66641 1.0875-2.74219.5953-3.23438-.8156-.81562-2.0039-.6375-3.2344.59531-.5297.52969-4.4179 5.42114-6.4758 8.02034.3821-3.29299 1.0946-9.50159 1.0946-10.24924 0-2.357816-1.1696-2.709379-1.8657-2.709379-.696 0-1.8656.351563-1.8656 2.709379 0 .74765.7102 6.95859 1.0922 10.24924-2.0578-2.5992-5.94609-7.49065-6.47577-8.02034-1.23282-1.23281-2.41875-1.41093-3.23438-.59531-.50156.50156-.63516 1.15781-.37734 1.84687.16406.43829.49218.90469.97265 1.38751.52969.52968 5.42114 4.41557 8.02034 6.47347-3.29299-.3821-9.50159-1.0946-10.25159-1.0946-2.355466.0024-2.707029 1.1719-2.707029 1.868s.351563 1.8656 2.707029 1.8656c.75 0 6.95625-.7101 10.24919-1.0922-2.5992 2.0579-7.49059 5.9461-8.02028 6.4758-.48047.4805-.80859.9469-.97266 1.3852-.26015.6914-.12422 1.3476.37735 1.8469.33281.3304.73828.5085 1.17422.5085.6375 0 1.3289-.3703 2.06015-1.1015.52969-.5297 4.41802-5.4235 6.47582-8.0227-.3821 3.293-1.0922 9.5016-1.0922 10.2516 0 2.3555 1.1695 2.707 1.8656 2.707s1.8656-.3515 1.8656-2.707c0-.75-.7101-6.9563-1.0945-10.2492 2.0578 2.5992 5.9461 7.4906 6.4758 8.0203.7312.7312 1.425 1.1015 2.0625 1.1015.4359 0 .8414-.1757 1.1719-.5085.4921-.4922 1.071-1.568-.5954-3.2344-.5296-.5297-5.4211-4.418-8.0226-6.4758 3.2929.382 9.5015 1.0922 10.2492 1.0922 2.3578 0 2.7094-1.1672 2.7094-1.8656.0023-.6938-.3492-1.8633-2.7071-1.8633z" fill="#181818"/>
          </svg>
        </section>
      )}
      
      {currentSection === 'about' && <About />}
    </div>
  );
} 