
import React, { useEffect, useState } from 'react';
import { Code, Lightbulb, Target, Users, Zap, Heart } from 'lucide-react';

export const Philosophy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector('#philosophy');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const beliefs = [
    {
      icon: Code,
      title: "Clean Code Philosophy",
      description: "Every line of code should tell a story. I believe in writing code that's not just functional, but elegant and maintainable.",
      color: "from-emerald-400 to-green-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Technology evolves rapidly. I embrace new tools and methodologies to stay ahead and deliver cutting-edge solutions.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Target,
      title: "Purpose-Driven Development",
      description: "Every project should solve real problems. I focus on understanding the 'why' before diving into the 'how'.",
      color: "from-violet-400 to-purple-500"
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Great software puts users first. I design experiences that are intuitive, accessible, and delightful to use.",
      color: "from-rose-400 to-pink-500"
    },
    {
      icon: Zap,
      title: "Performance Matters",
      description: "Speed and efficiency aren't luxuries—they're necessities. Every optimization makes a difference in user experience.",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: Heart,
      title: "Passionate Craftsmanship",
      description: "Development is both art and science. I bring passion and attention to detail to every project I touch.",
      color: "from-red-400 to-rose-500"
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-slate-800/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            What I Believe In
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-xl text-slate-400 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`} style={{ transitionDelay: '0.3s' }}>
            The principles and values that guide my development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beliefs.map((belief, index) => {
            const IconComponent = belief.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glowing background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${belief.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 transform scale-110`}></div>
                
                {/* Card */}
                <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 group-hover:border-slate-600/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${belief.color} p-4 mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {belief.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {belief.description}
                  </p>

                  {/* Hover indicator */}
                  <div className={`absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r ${belief.color} rounded-full transition-all duration-300 ${
                    hoveredCard === index ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
