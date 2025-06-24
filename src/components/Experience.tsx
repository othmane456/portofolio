
import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Building, ChevronRight, ExternalLink } from 'lucide-react';

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#experience');
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
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting microservices.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
      type: "Full-time",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Architected microservices handling 1M+ requests/day"
      ],
      companyLogo: "🏢"
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description: "Built MVP and scaled platform from 0 to 100k users. Implemented real-time features and payment processing.",
      technologies: ["Vue.js", "Python", "Firebase", "Stripe"],
      type: "Full-time",
      achievements: [
        "Scaled platform to 100k+ active users",
        "Implemented real-time chat system",
        "Reduced loading times by 60%"
      ],
      companyLogo: "🚀"
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      location: "New York, NY",
      period: "2019 - 2020",
      description: "Developed responsive websites and web applications for various clients. Collaborated with design teams to deliver pixel-perfect implementations.",
      technologies: ["JavaScript", "React", "SASS", "WordPress"],
      type: "Full-time",
      achievements: [
        "Delivered 20+ client projects",
        "Improved client satisfaction by 95%",
        "Reduced development time by 30%"
      ],
      companyLogo: "🎨"
    },
    {
      title: "Junior Developer",
      company: "Local Tech Company",
      location: "Austin, TX",
      period: "2018 - 2019",
      description: "Started career building internal tools and learning modern web development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
      type: "Full-time",
      achievements: [
        "Built 5+ internal tools",
        "Reduced manual processes by 50%",
        "Earned promotion within 8 months"
      ],
      companyLogo: "💻"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            Experience Journey
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-xl text-slate-400 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`} style={{ transitionDelay: '0.3s' }}>
            My professional journey through the world of development
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block">
            <div className="w-full h-full bg-gradient-to-b from-green-400 via-emerald-500 to-green-600 rounded-full opacity-30"></div>
            <div className={`w-full bg-gradient-to-b from-green-400 to-emerald-500 rounded-full transition-all duration-2000 ${
              isVisible ? 'h-full' : 'h-0'
            }`}></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Enhanced Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-6 h-6 bg-green-400 rounded-full border-4 border-slate-900 transition-all duration-300 ${
                    hoveredCard === index ? 'scale-150 shadow-lg shadow-green-400/50' : 'animate-pulse'
                  }`}>
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>

                {/* Enhanced Content card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                  <div className={`group bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/10 ${
                    expandedCard === index ? 'border-green-400/50 scale-105' : 'border-slate-700/50 hover:border-green-400/30'
                  } ${hoveredCard === index ? 'transform scale-105' : ''}`}>
                    
                    {/* Company Logo and Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{exp.companyLogo}</div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-green-400" />
                          <span className="text-green-400 font-medium">{exp.period}</span>
                          <span className="text-slate-400 text-sm px-2 py-1 bg-slate-700/50 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                        className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors group"
                      >
                        <ChevronRight className={`w-5 h-5 text-slate-400 group-hover:text-green-400 transition-all duration-300 ${
                          expandedCard === index ? 'rotate-90' : ''
                        }`} />
                      </button>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {exp.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-4 text-slate-300">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm border border-green-400/20 hover:bg-green-400/20 transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Achievements */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-slate-700/50 pt-4 mt-4">
                        <h4 className="text-sm font-medium text-green-400 mb-3 flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-slate-300 text-sm flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
