
import React, { useEffect, useState } from 'react';
import { Code2, Database, Cloud, Smartphone, Globe, Server, Zap, Shield, Palette, Cpu } from 'lucide-react';

export const PremiumSkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector('#premium-skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "from-blue-400 to-cyan-500",
      skills: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Vue.js", level: 85, color: "bg-green-500" },
        { name: "Next.js", level: 88, color: "bg-gray-800" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-400 to-emerald-500",
      skills: [
        { name: "Node.js", level: 92, color: "bg-green-600" },
        { name: "Python", level: 88, color: "bg-yellow-500" },
        { name: "Express", level: 90, color: "bg-gray-700" },
        { name: "FastAPI", level: 85, color: "bg-teal-500" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      color: "from-purple-400 to-violet-500",
      skills: [
        { name: "PostgreSQL", level: 90, color: "bg-blue-700" },
        { name: "MongoDB", level: 85, color: "bg-green-600" },
        { name: "AWS", level: 82, color: "bg-orange-500" },
        { name: "Docker", level: 88, color: "bg-blue-500" }
      ]
    },
    {
      title: "Mobile & Design",
      icon: Smartphone,
      color: "from-pink-400 to-rose-500",
      skills: [
        { name: "React Native", level: 80, color: "bg-blue-400" },
        { name: "Flutter", level: 75, color: "bg-blue-600" },
        { name: "Figma", level: 85, color: "bg-purple-500" },
        { name: "UI/UX", level: 82, color: "bg-pink-500" }
      ]
    }
  ];

  return (
    <section id="premium-skills" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            Skills & Expertise
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-xl text-slate-400 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`} style={{ transitionDelay: '0.3s' }}>
            Comprehensive technical skills across the full development spectrum
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
                }`}
                style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
                onMouseEnter={() => setHoveredSkill(categoryIndex)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={`glass-elegant rounded-3xl p-8 hover-cinematic transition-all duration-500 ${
                  hoveredSkill === categoryIndex ? 'scale-105 shadow-2xl shadow-emerald-500/20' : ''
                }`}>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} p-4 transition-all duration-500 ${
                      hoveredSkill === categoryIndex ? 'scale-110 rotate-12' : ''
                    }`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                      <div className={`w-12 h-1 bg-gradient-to-r ${category.color} mt-2 transition-all duration-300 ${
                        hoveredSkill === categoryIndex ? 'w-20' : ''
                      }`}></div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-emerald-400 font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className={`absolute bottom-4 right-4 w-3 h-3 bg-gradient-to-r ${category.color} rounded-full transition-all duration-300 ${
                    hoveredSkill === categoryIndex ? 'opacity-100 scale-150 animate-pulse' : 'opacity-0 scale-100'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Section */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
        }`} style={{ transitionDelay: '1s' }}>
          {[
            { number: "50+", label: "Projects Completed", color: "text-emerald-400" },
            { number: "5+", label: "Years Experience", color: "text-blue-400" },
            { number: "20+", label: "Technologies", color: "text-purple-400" },
            { number: "100%", label: "Client Satisfaction", color: "text-green-400" }
          ].map((stat, index) => (
            <div key={index} className="text-center glass-elegant rounded-2xl p-6 hover-cinematic">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
