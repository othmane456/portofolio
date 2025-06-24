
import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Star, ArrowRight } from 'lucide-react';

export const ExperienceTimeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector('#experience-timeline');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting system solutions.",
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline"
      ],
      tech: ["React", "Node.js", "AWS", "TypeScript"]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2021 - 2023",
      type: "Full-time",
      description: "Developed and maintained multiple client projects from concept to deployment. Specialized in modern JavaScript frameworks and cloud integration.",
      achievements: [
        "Built 15+ production applications",
        "Reduced deployment time by 60%",
        "Established coding standards"
      ],
      tech: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2020 - 2021",
      type: "Contract",
      description: "Created responsive web interfaces and optimized user experiences for various client projects in e-commerce and corporate sectors.",
      achievements: [
        "Increased conversion rates by 25%",
        "Delivered 20+ client projects",
        "Optimized site performance"
      ],
      tech: ["React", "Sass", "JavaScript", "Webpack"]
    },
    {
      title: "Junior Developer",
      company: "DevStudio",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Started my professional journey learning modern development practices, contributing to team projects, and building foundational skills.",
      achievements: [
        "Completed 50+ coding challenges",
        "Contributed to open source",
        "Earned AWS certification"
      ],
      tech: ["HTML", "CSS", "JavaScript", "Git"]
    }
  ];

  return (
    <section id="experience-timeline" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            Experience Journey
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-500 mx-auto mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-xl text-slate-400 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`} style={{ transitionDelay: '0.3s' }}>
            My professional journey through the world of technology and innovation
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-green-500 to-emerald-600 opacity-30"></div>
          
          {/* Animated Timeline Dot */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-2 w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" style={{ top: '0px' }}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {/* Timeline Node */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-4 w-8 h-8 rounded-full border-4 transition-all duration-300 z-10 ${
                  activeItem === index 
                    ? 'bg-emerald-400 border-emerald-300 shadow-xl shadow-emerald-400/50 scale-125' 
                    : 'bg-slate-800 border-emerald-400/50 hover:border-emerald-400'
                }`}>
                  <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    activeItem === index ? 'bg-emerald-400/20 animate-ping' : ''
                  }`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'} md:w-1/2`}>
                  <div className={`glass-elegant rounded-2xl p-8 hover-cinematic transition-all duration-500 ${
                    activeItem === index ? 'scale-105 shadow-2xl shadow-emerald-500/20' : ''
                  }`}>
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-emerald-400 mb-2">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{exp.period}</span>
                        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">{exp.type}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className="font-semibold">{exp.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                        <Star size={16} />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300">
                            <ArrowRight size={14} className="text-emerald-400 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-green-400 font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-700/50 text-emerald-400 text-sm rounded-full border border-emerald-400/20 hover:bg-emerald-400/10 transition-colors duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* End Timeline Dot */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-2 bottom-0 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full shadow-lg shadow-green-400/50"></div>
        </div>
      </div>
    </section>
  );
};
