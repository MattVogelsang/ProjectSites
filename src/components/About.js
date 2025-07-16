import React from "react";

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8">About</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a full-stack developer passionate about creating elegant, user-centered 
                digital experiences. With expertise in modern web technologies, I specialize 
                in building responsive applications that solve real-world problems.
              </p>
              <p>
                My work spans from interactive tools like Project Atlas for SEO planning, 
                to comprehensive e-commerce platforms, to professional business websites. 
                I believe in clean code, thoughtful design, and delivering solutions that 
                exceed expectations.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-6">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Frontend</div>
                  <div className="text-gray-300">React, TypeScript</div>
                  <div className="text-gray-300">Vite, Tailwind CSS</div>
                  <div className="text-gray-300">HTML, CSS, JavaScript</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Backend</div>
                  <div className="text-gray-300">Node.js, Express</div>
                  <div className="text-gray-300">MongoDB, PostgreSQL</div>
                  <div className="text-gray-300">Python, API Integration</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Tools</div>
                  <div className="text-gray-300">Git, GitHub</div>
                  <div className="text-gray-300">Vercel, Render</div>
                  <div className="text-gray-300">Webflow, Redux</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Other</div>
                  <div className="text-gray-300">SEO, Content Strategy</div>
                  <div className="text-gray-300">E-commerce, Business Sites</div>
                  <div className="text-gray-300">Responsive Design & UX</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-light mb-6">Experience</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-lg font-medium">Full-Stack Developer</div>
                  <div className="text-gray-400">2022 - Present</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Building modern web applications with React, Node.js, and TypeScript
                  </div>
                </div>
                <div>
                  <div className="text-lg font-medium">Frontend Developer</div>
                  <div className="text-gray-400">2021 - 2022</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Creating responsive user interfaces and interactive web experiences
                  </div>
                </div>
                <div>
                  <div className="text-lg font-medium">Web Developer</div>
                  <div className="text-gray-400">2020 - 2021</div>
                  <div className="text-sm text-gray-500 mt-1">
                    Developing websites and web applications using modern technologies
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-6">Focus Areas</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white"></div>
                  <span className="text-gray-300">E-commerce & Business Websites</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white"></div>
                  <span className="text-gray-300">Interactive Tools & Applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white"></div>
                  <span className="text-gray-300">SEO & Content Strategy Tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white"></div>
                  <span className="text-gray-300">Responsive Design & UX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 