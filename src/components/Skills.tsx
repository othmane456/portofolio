
import React, { useEffect, useState } from 'react';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React/Next.js", level: 95, description: "Modern React development with hooks, context, and performance optimization" },
        { name: "TypeScript", level: 90, description: "Type-safe development for scalable applications" },
        { name: "TailwindCSS", level: 88, description: "Utility-first CSS framework for rapid UI development" },
        { name: "Vue.js", level: 82, description: "Progressive framework for building user interfaces" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 92, description: "Server-side JavaScript with Express and modern frameworks" },
        { name: "Python/Django", level: 88, description: "Robust web applications with Django framework" },
        { name: "PostgreSQL", level: 85, description: "Advanced database design and query optimization" },
        { name: "GraphQL", level: 80, description: "Efficient API design and data fetching" }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 90, description: "Advanced relational database management" },
        { name: "MongoDB", level: 85, description: "NoSQL document database for flexible data storage" },
        { name: "Redis", level: 78, description: "In-memory caching and session management" },
        { name: "Prisma", level: 82, description: "Modern database toolkit and ORM" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS/Cloud", level: 87, description: "Cloud infrastructure and serverless computing" },
        { name: "Docker", level: 83, description: "Containerization and microservices architecture" },
        { name: "CI/CD", level: 80, description: "Automated deployment and testing pipelines" },
        { name: "Kubernetes", level: 75, description: "Container orchestration and scaling" }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 95, description: "Version control and collaborative development" },
        { name: "Figma", level: 85, description: "UI/UX design and prototyping" },
        { name: "Jest/Cypress", level: 88, description: "Automated testing and quality assurance" },
        { name: "Webpack/Vite", level: 82, description: "Modern build tools and bundling" }
      ]
    }
  ];

  const additionalTech = [
    { name: 'Stripe', description: 'Payment processing integration', category: 'Payments' },
    { name: 'Firebase', description: 'Real-time backend services', category: 'Backend' },
    { name: 'Vercel', description: 'Modern deployment platform', category: 'Deployment' },
    { name: 'Socket.io', description: 'Real-time communication', category: 'Real-time' },
    { name: 'Prisma', description: 'Next-generation ORM', category: 'Database' },
    { name: 'tRPC', description: 'End-to-end type safety', category: 'API' },
    { name: 'Zustand', description: 'Lightweight state management', category: 'State' },
    { name: 'Framer Motion', description: 'Advanced animations', category: 'Animation' }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/30 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3 group-hover:animate-bounce">{category.icon}</span>
                <h3 className="text-xl font-bold text-cyan-400">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2 group/skill cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out relative"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms`
                        }}
                      >
                        {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
                        )}
                      </div>
                    </div>

                    {/* Tooltip */}
                    {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                      <div className="absolute z-20 p-3 bg-slate-900 border border-cyan-400/50 rounded-lg text-sm text-slate-300 shadow-xl animate-fade-in max-w-xs">
                        {skill.description}
                        <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-slate-300 mb-8">
            Additional Technologies & Tools
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {additionalTech.map((tech, index) => (
              <div
                key={tech.name}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-700/30 hover:border-cyan-400/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Floating particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 200}ms`
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                  <div className="text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                    {tech.category}
                  </div>
                </div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-slate-900 border border-cyan-400/50 rounded-lg px-3 py-2 text-sm text-slate-300 whitespace-nowrap">
                    {tech.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
