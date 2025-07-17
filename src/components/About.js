import React from "react";

export function About() {
  return (
    <section className="h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-8">About</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm a freelance creative developer based in South Florida, specializing in 
              building modern web applications and digital experiences. With a focus on 
              clean design and user-centered solutions, I help businesses and individuals 
              bring their digital visions to life.
            </p>
            <p>
              My work spans from interactive tools and e-commerce platforms to professional 
              business websites. I believe in creating solutions that not only look great 
              but also provide real value to users and businesses.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-6">Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Frontend</div>
                  <div className="text-gray-300">React, TypeScript, Vite, Tailwind CSS</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Backend</div>
                  <div className="text-gray-300">Node.js, Express, MongoDB, PostgreSQL</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">Tools</div>
                  <div className="text-gray-300">Git, GitHub, Vercel, Render, Webflow</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-light mb-6">Services</h3>
              <div className="space-y-3">
                <div className="text-gray-300">Web Development</div>
                <div className="text-gray-300">E-commerce Solutions</div>
                <div className="text-gray-300">Interactive Tools</div>
                <div className="text-gray-300">UI/UX Design</div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-6">Contact</h3>
              <div className="space-y-2">
                <div className="text-gray-300">vogelsangmatt@gmail.com</div>
                <div className="text-gray-300">South Florida</div>
                <div className="text-gray-300">Available for freelance work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 