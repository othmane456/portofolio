
import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';

export const EnhancedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "I craft digital experiences that inspire and transform ideas into reality.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/10 to-slate-900">
        {/* Interactive gradient that follows mouse */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)`
          }}
        />
        
        {/* Floating 3D shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              <div 
                className="w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-lg backdrop-blur-sm border border-emerald-400/30 transform rotate-45"
                style={{ 
                  transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Name with enhanced animation */}
        <div className="animate-fade-in mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent">
              Alex Johnson
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent opacity-50 blur-sm">
              Alex Johnson
            </div>
          </h1>
        </div>
        
        {/* Enhanced subtitle */}
        <div className="animate-fade-in mb-8" style={{ animationDelay: '0.3s' }}>
          <div className="relative inline-block">
            <h2 className="text-2xl md:text-4xl text-slate-300 mb-2">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent font-bold">
                Creative Full-Stack Engineer
              </span>
            </h2>
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-xl rounded-lg"></div>
          </div>
        </div>

        {/* Animated description */}
        <div className="text-xl md:text-2xl text-slate-400 mb-12 h-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <span className="font-light">{displayText}</span>
          <span className="animate-pulse text-emerald-400 font-bold">|</span>
        </div>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <button
            onClick={scrollToAbout}
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore My Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-full hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center space-x-2 transform hover:scale-105 backdrop-blur-sm">
            <Download size={20} className="group-hover:animate-bounce" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Hire me badge */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/90 to-cyan-500/90 text-white font-medium rounded-full hover:from-emerald-600/90 hover:to-cyan-600/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 animate-pulse backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
            Available for Hire
          </a>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-emerald-400 hover:text-emerald-300 transition-colors group"
      >
        <div className="flex flex-col items-center space-y-3">
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">Scroll to explore</span>
          <div className="relative">
            <ChevronDown size={32} />
            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          </div>
        </div>
      </button>
    </section>
  );
};
