
import React, { useState, useEffect } from 'react';
import { Code2, Database, Cloud, Smartphone, Globe, Server, Zap, Shield } from 'lucide-react';

export const InteractiveAbout = () => {
  const [selectedTech, setSelectedTech] = useState('R');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const techData = {
    R: {
      name: 'React',
      icon: Code2,
      description: 'Building dynamic, scalable user interfaces with modern React patterns, hooks, and performance optimization techniques.',
      color: 'from-blue-400 to-cyan-400',
      experience: '4+ years',
      projects: '35+ projects',
      specialty: 'Component Architecture',
      tooltip: 'Modern frontend development'
    },
    N: {
      name: 'Node.js',
      icon: Server,
      description: 'Server-side JavaScript development, RESTful APIs, microservices architecture, and real-time applications.',
      color: 'from-green-400 to-emerald-500',
      experience: '3+ years',
      projects: '25+ projects',
      specialty: 'Backend Systems',
      tooltip: 'Scalable server solutions'
    },
    T: {
      name: 'TypeScript',
      icon: Shield,
      description: 'Type-safe development ensuring code quality, maintainability, and scalability in large applications.',
      color: 'from-blue-500 to-indigo-500',
      experience: '3+ years',
      projects: '40+ projects',
      specialty: 'Type Safety',
      tooltip: 'Type-safe development'
    },
    P: {
      name: 'Python',
      icon: Zap,
      description: 'Backend development, data processing, machine learning, and automation scripts for various use cases.',
      color: 'from-yellow-400 to-orange-500',
      experience: '2+ years',
      projects: '20+ projects',
      specialty: 'Data Processing',
      tooltip: 'Data & automation expert'
    },
    S: {
      name: 'PostgreSQL',
      icon: Database,
      description: 'Advanced database design, complex queries, performance optimization, and data architecture.',
      color: 'from-blue-600 to-purple-600',
      experience: '3+ years',
      projects: '30+ projects',
      specialty: 'Database Design',
      tooltip: 'Database architecture'
    },
    A: {
      name: 'AWS',
      icon: Cloud,
      description: 'Cloud infrastructure, serverless computing, scalable deployment solutions, and DevOps practices.',
      color: 'from-orange-400 to-yellow-500',
      experience: '2+ years',
      projects: '15+ projects',
      specialty: 'Cloud Architecture',
      tooltip: 'Cloud infrastructure expert'
    },
    M: {
      name: 'Mobile',
      icon: Smartphone,
      description: 'Cross-platform mobile development with React Native and progressive web applications.',
      color: 'from-purple-400 to-pink-500',
      experience: '2+ years',
      projects: '12+ projects',
      specialty: 'Mobile Experience',
      tooltip: 'Mobile development'
    },
    W: {
      name: 'Web3',
      icon: Globe,
      description: 'Blockchain development, smart contracts, DeFi applications, and decentralized systems.',
      color: 'from-cyan-400 to-blue-500',
      experience: '1+ years',
      projects: '8+ projects',
      specialty: 'Blockchain Tech',
      tooltip: 'Blockchain & Web3'
    }
  };

  const currentTech = techData[selectedTech as keyof typeof techData];
  const IconComponent = currentTech.icon;

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-400/30 rounded-full blur-3xl animate-magical-float"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-green-400/30 rounded-full blur-3xl animate-magical-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'animate-cinematic-fade' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-8 animate-elegant-glow"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who believes in creating digital experiences that not only function beautifully but also inspire and engage users on a deeper level.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Personal Story */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-cinematic-slide' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="space-y-8">
              <div className="glass-elegant rounded-3xl p-8 hover-cinematic">
                <h3 className="text-3xl font-bold text-emerald-400 mb-6">My Journey</h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  What started as curiosity about how websites work has evolved into a deep passion for crafting digital experiences that make a real impact. Over 5+ years, I've had the privilege of working with startups, established companies, and everything in between.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I believe in the power of clean code, thoughtful design, and the magic that happens when technology meets human creativity.
                </p>
              </div>

              <div className="glass-elegant rounded-3xl p-8 hover-cinematic">
                <h3 className="text-3xl font-bold text-green-400 mb-6">What Drives Me</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Every project is an opportunity to solve real problems and create something meaningful. I'm driven by the challenge of turning complex ideas into elegant, user-friendly solutions that people love to use.
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Tech Explorer */}
          <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'animate-cinematic-slide' : 'opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
            <div>
              <h3 className="text-4xl font-bold text-center text-emerald-400 mb-10">Tech Explorer</h3>
              
              {/* Enhanced Tech Grid */}
              <div className="grid grid-cols-4 gap-4 mb-10">
                {Object.entries(techData).map(([key, tech]) => (
                  <div key={key} className="relative">
                    <button
                      onClick={() => setSelectedTech(key)}
                      onMouseEnter={() => setHoveredTech(key)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className={`group relative w-full aspect-square rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 ${
                        selectedTech === key
                          ? `bg-gradient-to-r ${tech.color} text-white shadow-2xl scale-110 animate-elegant-glow`
                          : 'glass-elegant text-slate-300 hover:bg-slate-700/50 border-emerald-400/20 hover:border-emerald-400/50'
                      }`}
                    >
                      <span className="relative z-10">{key}</span>
                      {selectedTech === key && (
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-green-500/20 blur-xl animate-pulse"></div>
                      )}
                    </button>
                    
                    {/* Tooltip */}
                    {hoveredTech === key && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-800 text-emerald-400 text-sm rounded-lg whitespace-nowrap z-20 animate-cinematic-fade">
                        {tech.tooltip}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Enhanced Tech Display */}
              <div className="glass-elegant rounded-3xl p-10 hover-cinematic min-h-[400px]">
                <div className="text-center space-y-8">
                  {/* Tech Icon with Animation */}
                  <div className={`w-24 h-24 mx-auto mb-8 bg-gradient-to-r ${currentTech.color} rounded-3xl flex items-center justify-center text-white animate-tech-morph`}>
                    <IconComponent size={48} />
                  </div>
                  
                  {/* Tech Name */}
                  <h4 className="text-4xl font-bold text-emerald-400 animate-cinematic-fade">
                    {currentTech.name}
                  </h4>
                  
                  {/* Enhanced Stats */}
                  <div className="flex justify-center space-x-8 mb-8">
                    <div className="text-center glass-elegant rounded-xl p-4">
                      <div className="text-sm text-slate-400 mb-1">Experience</div>
                      <div className="text-xl font-bold text-emerald-400">{currentTech.experience}</div>
                    </div>
                    <div className="text-center glass-elegant rounded-xl p-4">
                      <div className="text-sm text-slate-400 mb-1">Projects</div>
                      <div className="text-xl font-bold text-green-400">{currentTech.projects}</div>
                    </div>
                  </div>
                  
                  {/* Specialty Badge */}
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full text-emerald-400 border border-emerald-400/30 mb-8 animate-elegant-glow">
                    {currentTech.specialty}
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed text-lg animate-cinematic-fade" style={{ animationDelay: '0.2s' }}>
                    {currentTech.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
