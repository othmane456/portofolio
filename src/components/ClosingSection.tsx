
import React, { useEffect, useState } from 'react';

export const ClosingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textPhase, setTextPhase] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          const timeouts = [
            setTimeout(() => setTextPhase(1), 800),
            setTimeout(() => setTextPhase(2), 1600),
          ];

          return () => timeouts.forEach(clearTimeout);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#closing-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="closing-section" className="py-32 bg-gradient-to-t from-slate-900 via-emerald-900/10 to-slate-800 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Main Message */}
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'animate-cinematic-fade' : 'opacity-0'}`}>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              Thank You for Your Time
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto animate-elegant-glow"></div>
          </div>

          {/* Reflective Message */}
          <div className={`space-y-6 transition-all duration-1000 ${textPhase >= 1 ? 'animate-cinematic-slide' : 'opacity-0'}`}>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Every project is a journey of discovery, creativity, and meaningful connection. 
              I believe in the power of technology to inspire, connect, and create positive change.
            </p>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Whether we're building the next revolutionary app or solving complex challenges, 
              I'm excited about the possibilities that await us in this digital age.
            </p>
          </div>

          {/* Call to Connect */}
          <div className={`transition-all duration-1000 ${textPhase >= 2 ? 'animate-cinematic-fade' : 'opacity-0'}`}>
            <div className="glass-elegant rounded-2xl p-8 max-w-2xl mx-auto hover-cinematic">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Let's Create Something Amazing</h3>
              <p className="text-slate-300 mb-6">
                Ready to bring your vision to life? I'd love to hear about your next project.
              </p>
              
              <button 
                className="btn-cinematic"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Conversation
              </button>
            </div>
          </div>

          {/* Signature */}
          <div className={`pt-12 transition-all duration-1000 ${textPhase >= 2 ? 'animate-cinematic-fade' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              AJ
            </div>
            <p className="text-slate-400 mt-2">Full-Stack Developer & Digital Craftsman</p>
          </div>
        </div>
      </div>
    </section>
  );
};
