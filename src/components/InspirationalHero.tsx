
import React, { useEffect, useState } from 'react';

export const InspirationalHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textPhase, setTextPhase] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          const timeouts = [
            setTimeout(() => setTextPhase(1), 1500),
            setTimeout(() => setTextPhase(2), 2800),
            setTimeout(() => setTextPhase(3), 4200),
          ];

          return () => timeouts.forEach(clearTimeout);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector('#inspirational-hero');
    if (element) {
      observer.observe(element);
    }

    // Generate particles
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 4
    }));
    setParticles(newParticles);

    return () => observer.disconnect();
  }, []);

  const inspirationalQuotes = [
    "Innovation begins with imagination.",
    "Code is poetry in motion.",
    "Every pixel tells a story."
  ];

  return (
    <section id="inspirational-hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 relative overflow-hidden flex items-center">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900 animate-gradient"></div>
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-emerald-400/40 rounded-full animate-particle-drift"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}

        {/* Large Glowing Orbs */}
        <div className={`absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl transition-all duration-[4s] ${
          isVisible ? 'animate-magical-float opacity-60 scale-125' : 'opacity-0 scale-75'
        }`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-400/15 rounded-full blur-2xl transition-all duration-[5s] ${
          isVisible ? 'animate-magical-float opacity-50 scale-110' : 'opacity-0 scale-75'
        }`} style={{ animationDelay: '1s' }}></div>
        
        {/* Geometric Shapes */}
        <div className={`absolute top-20 right-20 w-32 h-32 border-2 border-emerald-400/20 rotate-45 transition-all duration-[8s] ${
          isVisible ? 'animate-spin opacity-40' : 'opacity-0'
        }`} style={{ animationDuration: '20s' }}></div>
        <div className={`absolute bottom-20 left-20 w-24 h-24 border-2 border-green-400/20 rounded-full transition-all duration-[7s] ${
          isVisible ? 'animate-pulse opacity-50' : 'opacity-0'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional Figure */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className={`relative transition-all duration-[2000ms] ${
              isVisible && imageLoaded ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-20 scale-95'
            }`}>
              {/* Enhanced Glowing Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 rounded-3xl blur-3xl opacity-0 animate-elegant-glow" 
                   style={{ animationDelay: '2s', opacity: isVisible ? '0.4' : '0' }}></div>
              
              {/* Multiple Rotating Rings */}
              <div className={`absolute -inset-12 border-2 border-emerald-400/20 rounded-full transition-all duration-[4s] ${
                isVisible ? 'animate-spin opacity-30' : 'opacity-0'
              }`} style={{ animationDuration: '20s', animationDelay: '1s' }}></div>
              <div className={`absolute -inset-8 border border-green-400/30 rounded-full transition-all duration-[3s] ${
                isVisible ? 'animate-spin opacity-40' : 'opacity-0'
              }`} style={{ animationDuration: '15s', animationDelay: '1.5s', animationDirection: 'reverse' }}></div>
              
              {/* Professional Image Container */}
              <div className="relative glass-elegant rounded-3xl p-8 hover-cinematic group">
                <div className="w-80 h-96 rounded-2xl overflow-hidden border-2 border-emerald-400/40 relative">
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-pulse"></div>
                  )}
                  <img 
                    src="/professional-suit-portrait.jpg" 
                    alt="Professional Portrait" 
                    className={`w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    style={{
                      filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating Elements */}
                <div className={`absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full transition-all duration-[2s] ${
                  isVisible ? 'animate-bounce opacity-80' : 'opacity-0'
                }`} style={{ animationDelay: '3s' }}></div>
                <div className={`absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-[2s] ${
                  isVisible ? 'animate-pulse opacity-70' : 'opacity-0'
                }`} style={{ animationDelay: '4s' }}></div>
              </div>
            </div>
          </div>

          {/* Inspirational Content */}
          <div className="space-y-12 order-1 lg:order-2">
            <div className="space-y-10">
              {inspirationalQuotes.map((quote, index) => (
                <div
                  key={index}
                  className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold transition-all duration-[1500ms] ${
                    textPhase > index 
                      ? 'opacity-100 transform translate-x-0 blur-0' 
                      : 'opacity-0 transform translate-x-12 blur-sm'
                  }`}
                  style={{ transitionDelay: `${index * 400}ms` }}
                >
                  <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent animate-gradient">
                    {quote.split(' ').map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={`inline-block mr-4 transition-all duration-200 hover:scale-110 hover:text-emerald-300 ${
                          textPhase > index ? 'animate-cinematic-fade' : 'opacity-0'
                        }`}
                        style={{ 
                          transitionDelay: `${(index * 1200) + (wordIndex * 150)}ms`,
                          animationDelay: `${(index * 1200) + (wordIndex * 150)}ms`
                        }}
                      >
                        {word}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            {/* Enhanced Subtitle */}
            <div className={`transition-all duration-[1200ms] ${
              textPhase >= 3 ? 'opacity-100 transform translate-y-0 blur-0' : 'opacity-0 transform translate-y-8 blur-sm'
            }`} style={{ transitionDelay: '4s' }}>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed hover:text-slate-200 transition-colors duration-300">
                Transforming ideas into digital realities through 
                <span className="text-emerald-400 font-semibold"> innovative design</span>, 
                <span className="text-green-400 font-semibold"> elegant code</span>, and 
                <span className="text-emerald-500 font-semibold"> meaningful impact</span>.
              </p>
            </div>

            {/* Enhanced Call to Action */}
            <div className={`transition-all duration-[1200ms] ${
              textPhase >= 3 ? 'opacity-100 transform translate-y-0 scale-100' : 'opacity-0 transform translate-y-8 scale-95'
            }`} style={{ transitionDelay: '4.5s' }}>
              <button 
                className="btn-cinematic text-lg px-12 py-6"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative flex items-center gap-4">
                  Discover My Work
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
