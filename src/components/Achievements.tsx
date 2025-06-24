import React, { useEffect, useState } from 'react';
import { Code, Users, Award, Coffee } from 'lucide-react';

export const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    coffee: 0
  });

  const targetValues = {
    experience: 5,
    projects: 50,
    clients: 25,
    coffee: 1247
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector('#achievements');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 FPS
      const stepDuration = duration / steps;

      const intervals: NodeJS.Timeout[] = [];

      Object.keys(targetValues).forEach(key => {
        let currentValue = 0;
        const targetValue = targetValues[key as keyof typeof targetValues];
        const increment = targetValue / steps;

        const intervalId = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(intervalId);
          }
          
          setCounters(prev => ({
            ...prev,
            [key]: Math.round(currentValue)
          }));
        }, stepDuration);

        intervals.push(intervalId);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isVisible]);

  const achievements = [
    {
      icon: Award,
      number: counters.experience,
      suffix: '+',
      label: 'Years Experience',
      color: 'from-green-400 to-emerald-500',
      description: 'Years of professional development'
    },
    {
      icon: Code,
      number: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-cyan-400 to-blue-500',
      description: 'Successful projects delivered'
    },
    {
      icon: Users,
      number: counters.clients,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-purple-400 to-pink-500',
      description: 'Satisfied clients worldwide'
    },
    {
      icon: Coffee,
      number: counters.coffee,
      suffix: '',
      label: 'Cups of Coffee',
      color: 'from-yellow-400 to-orange-500',
      description: 'Fuel for creativity'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-900/50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Numbers that tell the story of my journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            
            return (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center border border-slate-700/50 hover:border-green-400/30 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.6s ease-out'
                }}
              >
                {/* Glowing background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>

                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center relative z-10`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Counter */}
                <div className="mb-4 relative z-10">
                  <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.number}
                  </span>
                  <span className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                  {achievement.label}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm relative z-10">
                  {achievement.description}
                </p>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${achievement.color} rounded-full animate-pulse`}
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 200}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
