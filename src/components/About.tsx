
import React, { useState } from 'react';

export const About = () => {
  const [selectedTech, setSelectedTech] = useState('R');

  const techData = {
    R: {
      name: 'React',
      description: 'Building dynamic user interfaces with component-based architecture, hooks, and modern patterns.',
      color: 'from-blue-400 to-cyan-400',
      experience: '4+ years'
    },
    N: {
      name: 'Node.js',
      description: 'Server-side JavaScript development, API creation, and real-time applications.',
      color: 'from-green-400 to-emerald-500',
      experience: '3+ years'
    },
    T: {
      name: 'TypeScript',
      description: 'Type-safe JavaScript development for scalable and maintainable applications.',
      color: 'from-blue-500 to-indigo-500',
      experience: '3+ years'
    },
    P: {
      name: 'Python',
      description: 'Backend development, data processing, and machine learning applications.',
      color: 'from-yellow-400 to-orange-500',
      experience: '2+ years'
    },
    S: {
      name: 'PostgreSQL',
      description: 'Advanced database design, optimization, and complex query management.',
      color: 'from-blue-600 to-purple-600',
      experience: '3+ years'
    },
    A: {
      name: 'AWS',
      description: 'Cloud infrastructure, serverless computing, and scalable deployment solutions.',
      color: 'from-orange-400 to-yellow-500',
      experience: '2+ years'
    },
    D: {
      name: 'Docker',
      description: 'Containerization, microservices architecture, and development environment consistency.',
      color: 'from-blue-400 to-blue-600',
      experience: '2+ years'
    },
    G: {
      name: 'GraphQL',
      description: 'Efficient API design, data fetching optimization, and schema management.',
      color: 'from-pink-400 to-purple-500',
      experience: '2+ years'
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Hello! I'm Alex, a passionate full-stack developer with over 5 years of experience 
              crafting digital solutions that make a difference. I specialize in building scalable 
              web applications and creating seamless user experiences.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in tech started with curiosity and has evolved into a deep passion for 
              solving complex problems through elegant code. I believe in writing clean, maintainable 
              code and staying up-to-date with the latest industry trends.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="pt-6">
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="space-y-8">
            {/* Interactive Tech Explorer */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">Tech Explorer</h3>
              
              {/* Tech Navigation */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {Object.entries(techData).map(([key, tech]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTech(key)}
                    className={`group relative w-12 h-12 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-110 ${
                      selectedTech === key
                        ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600/50 hover:border-cyan-400/50'
                    }`}
                  >
                    {key}
                    {selectedTech === key && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-sm animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Tech Display */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 min-h-[200px]">
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${techData[selectedTech].color} rounded-full flex items-center justify-center text-white font-bold text-2xl animate-fade-in`}>
                    {selectedTech}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-cyan-400 animate-slide-up">
                    {techData[selectedTech].name}
                  </h4>
                  
                  <div className="inline-block px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 mb-4">
                    {techData[selectedTech].experience}
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {techData[selectedTech].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Avatar */}
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30 relative overflow-hidden">
                <div className="w-48 h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center text-4xl font-bold text-cyan-400 relative z-10">
                  AJ
                </div>
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 animate-spin" style={{ animationDuration: '8s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
