
import React, { useEffect, useState } from 'react';

export const PersonalStatement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textPhase, setTextPhase] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Trigger text animations in sequence with more dramatic timing
          const timeouts = [
            setTimeout(() => setTextPhase(1), 1200),
            setTimeout(() => setTextPhase(2), 2200),
            setTimeout(() => setTextPhase(3), 3200),
          ];

          return () => timeouts.forEach(clearTimeout);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector('#personal-statement');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const textLines = [
    "Elegance in code.",
    "Precision in vision.",
    "Purpose in every project."
  ];

  return (
    <section id="personal-statement" className="min-h-screen bg-slate-900 relative overflow-hidden flex items-center">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900 animate-gradient"></div>
        
        {/* Enhanced Floating Abstract Shapes */}
        <div className={`absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl transition-all duration-[4s] ${
          isVisible ? 'animate-pulse-slow opacity-40 scale-110' : 'opacity-0 scale-75'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/15 rounded-full blur-2xl transition-all duration-[5s] ${
          isVisible ? 'animate-pulse-slow opacity-50 scale-125' : 'opacity-0 scale-75'
        }`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-xl transition-all duration-[6s] transform -translate-x-1/2 -translate-y-1/2 ${
          isVisible ? 'animate-float opacity-30' : 'opacity-0'
        }`} style={{ animationDelay: '2s' }}></div>
        
        {/* Enhanced Particle Motion */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-emerald-400/50 rounded-full transition-all duration-[3s] ${
              isVisible ? 'animate-pulse opacity-60' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}

        {/* Moving geometric shapes */}
        <div className={`absolute top-20 right-20 w-32 h-32 border border-emerald-400/20 rotate-45 transition-all duration-[8s] ${
          isVisible ? 'animate-spin opacity-30' : 'opacity-0'
        }`} style={{ animationDuration: '20s' }}></div>
        <div className={`absolute bottom-20 left-20 w-24 h-24 border border-cyan-400/20 rounded-full transition-all duration-[7s] ${
          isVisible ? 'animate-pulse opacity-40' : 'opacity-0'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Professional Image */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className={`relative transition-all duration-[1500ms] ${
              isVisible && imageLoaded ? 'opacity-100 transform translate-y-0 translate-x-0 scale-100' : 'opacity-0 transform translate-y-20 translate-x-8 scale-95'
            }`}>
              {/* Enhanced Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 rounded-3xl blur-2xl opacity-0 animate-pulse-slow" 
                   style={{ animationDelay: '2s', opacity: isVisible ? '0.3' : '0' }}></div>
              
              {/* Floating Ring Effect */}
              <div className={`absolute -inset-8 border-2 border-emerald-400/30 rounded-full transition-all duration-[3s] ${
                isVisible ? 'animate-spin opacity-40' : 'opacity-0'
              }`} style={{ animationDuration: '15s', animationDelay: '1s' }}></div>
              
              {/* Professional Image Container */}
              <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-emerald-400/50 transition-all duration-500 hover:transform hover:scale-105 group">
                <div className="w-80 h-96 rounded-2xl overflow-hidden border border-emerald-400/40 relative">
                  {/* Shimmer loading effect */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse"></div>
                  )}
                  <img 
                    src="/professional-suit-portrait.jpg" 
                    alt="Professional Portrait" 
                    className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    style={{
                      filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                    }}
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating accent elements */}
                <div className={`absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-[2s] ${
                  isVisible ? 'animate-bounce opacity-80' : 'opacity-0'
                }`} style={{ animationDelay: '3s' }}></div>
                <div className={`absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full transition-all duration-[2s] ${
                  isVisible ? 'animate-pulse opacity-70' : 'opacity-0'
                }`} style={{ animationDelay: '4s' }}></div>
              </div>
            </div>
          </div>

          {/* Enhanced Animated Text Content */}
          <div className="space-y-10 order-1 lg:order-2">
            <div className="space-y-8">
              {textLines.map((line, index) => (
                <div
                  key={index}
                  className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-all duration-[1200ms] ${
                    textPhase > index 
                      ? 'opacity-100 transform translate-x-0 blur-0' 
                      : 'opacity-0 transform translate-x-12 blur-sm'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient">
                    {line.split('').map((char, charIndex) => (
                      <span
                        key={charIndex}
                        className={`inline-block transition-all duration-150 hover:scale-110 hover:text-emerald-300 ${
                          textPhase > index ? 'animate-fade-in' : 'opacity-0'
                        }`}
                        style={{ 
                          transitionDelay: `${(index * 1000) + (charIndex * 80)}ms`,
                          animationDelay: `${(index * 1000) + (charIndex * 80)}ms`
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            {/* Enhanced Subtitle */}
            <div className={`transition-all duration-[1000ms] ${
              textPhase >= 3 ? 'opacity-100 transform translate-y-0 blur-0' : 'opacity-0 transform translate-y-8 blur-sm'
            }`} style={{ transitionDelay: '3.5s' }}>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed hover:text-slate-300 transition-colors duration-300">
                Crafting digital experiences that inspire, engage, and deliver results through 
                <span className="text-emerald-400 font-medium"> thoughtful design</span> and 
                <span className="text-cyan-400 font-medium"> precise execution</span>.
              </p>
            </div>

            {/* Enhanced Call to Action */}
            <div className={`transition-all duration-[1000ms] ${
              textPhase >= 3 ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-8 scale-95'
            }`} style={{ transitionDelay: '4s' }}>
              <button 
                className="group relative bg-gradient-to-r from-emerald-500 via-cyan-500 to-green-500 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:scale-110 overflow-hidden animate-gradient"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {/* Button shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative flex items-center gap-3">
                  Explore My Work
                  <svg className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
