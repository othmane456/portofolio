
import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  
  const phases = [
    "Initializing systems...",
    "Loading components...",
    "Building the experience...",
    "Almost ready..."
  ];

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        
        // Update phase based on progress
        if (newProgress > 25 && phase === 0) setPhase(1);
        else if (newProgress > 50 && phase === 1) setPhase(2);
        else if (newProgress > 75 && phase === 2) setPhase(3);
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete, phase]);

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Logo/Branding */}
        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
          AJ
        </div>

        {/* Progress bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-slate-400">
            <span>{Math.round(progress)}%</span>
            <span className="text-cyan-400 animate-fade-in">{phases[phase]}</span>
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
