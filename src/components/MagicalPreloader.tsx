
import React, { useEffect, useState } from 'react';

interface MagicalPreloaderProps {
  onComplete: () => void;
}

export const MagicalPreloader: React.FC<MagicalPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const phases = [
    "Initializing experience...",
    "Loading content...", 
    "Preparing interface...",
    "Almost ready..."
  ];

  useEffect(() => {
    const duration = 4000;
    const interval = 50;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        
        if (newProgress > 25 && phase === 0) setPhase(1);
        else if (newProgress > 50 && phase === 1) setPhase(2);
        else if (newProgress > 75 && phase === 2) setPhase(3);
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete, phase]);

  // Typewriter effect
  useEffect(() => {
    const currentPhaseText = phases[phase];
    let currentIndex = 0;
    setTypingText('');

    const typeTimer = setInterval(() => {
      if (currentIndex < currentPhaseText.length) {
        setTypingText(currentPhaseText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeTimer);
      }
    }, 80);

    return () => clearInterval(typeTimer);
  }, [phase]);

  // Cursor blink
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-emerald-900 z-50 flex items-center justify-center overflow-hidden">
      {/* Clean animated background gradient */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 30% 20%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 70% 80%, rgba(34, 197, 94, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, transparent 30%, rgba(16, 185, 129, 0.06) 50%, transparent 70%)
          `,
          animation: 'gradientFlow 15s ease-in-out infinite'
        }}
      />

      {/* Subtle floating elements */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${30 + i * 20}%`,
              top: `${40 + i * 10}%`,
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
              background: `radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(34, 197, 94, 0.1) 50%, transparent 100%)`,
              borderRadius: '50%',
              filter: 'blur(0.5px)',
              animation: `floatOrb ${15 + i * 3}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-12 px-6 max-w-lg mx-auto">
        {/* Elegant Logo */}
        <div className="relative">
          <div 
            className="text-6xl md:text-7xl font-light tracking-[0.3em] bg-gradient-to-r from-emerald-400 via-emerald-300 to-green-300 bg-clip-text text-transparent"
            style={{ 
              fontFamily: "'Space Grotesk', sans-serif",
              animation: 'logoGlow 8s ease-in-out infinite'
            }}
          >
            AJ
          </div>
          
          {/* Minimal glow ring */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ animation: 'ringGlow 10s ease-in-out infinite' }}
          >
            <div className="w-28 h-28 border border-emerald-400/15 rounded-full" />
          </div>
        </div>

        {/* Progress Section */}
        <div className="space-y-6">
          {/* Modern Progress Bar */}
          <div className="relative w-full max-w-sm mx-auto">
            <div className="h-1.5 bg-slate-800/40 rounded-full overflow-hidden backdrop-blur-sm border border-emerald-500/5">
              <div 
                className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-400 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                {/* Subtle shimmer effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  style={{ animation: 'shimmer 3s ease-in-out infinite' }}
                />
              </div>
            </div>
            
            {/* Progress percentage */}
            <div 
              className="mt-4 text-emerald-300 font-light text-lg tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {Math.round(progress)}%
            </div>
          </div>
          
          {/* Elegant Loading Text */}
          <div className="min-h-[2rem] flex items-center justify-center">
            <div 
              className="text-slate-300 text-base font-light tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <span>{typingText}</span>
              <span 
                className={`inline-block w-0.5 h-5 bg-emerald-400 ml-1 transition-opacity duration-300 ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Minimal Loading Indicator */}
        <div className="flex justify-center space-x-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-emerald-400/60 rounded-full"
              style={{ 
                animation: `dotPulse 2.5s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
