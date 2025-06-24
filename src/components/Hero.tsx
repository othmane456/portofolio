
import React, { useEffect, useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = "I create digital experiences that inspire and engage.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // Create a dummy CV download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Alex_Johnson_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Dynamic gradient overlay based on mouse position */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 244, 0.1) 0%, transparent 50%)`
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-cyan-400/20 rounded-lg animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            Alex Johnson
          </h1>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 relative">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
              Creative Full-Stack Engineer
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-lg -z-10 rounded-lg"></div>
          </h2>
        </div>

        <div className="text-xl md:text-2xl text-slate-400 mb-12 h-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <span className="font-mono">{displayText}</span>
          <span className="animate-pulse text-cyan-400 font-bold">|</span>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <button
            onClick={scrollToAbout}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </button>
          
          <button
            onClick={downloadCV}
            className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200 inline-flex items-center justify-center space-x-2 transform hover:scale-105"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Hire Me floating button */}
        <div className="mt-8 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium rounded-full hover:from-emerald-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 animate-pulse"
          >
            🚀 Available for Hire
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors group"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100">Scroll Down</span>
          <ChevronDown size={32} />
        </div>
      </button>
    </section>
  );
};
