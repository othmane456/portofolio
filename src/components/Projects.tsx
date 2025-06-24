
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveUrl: "https://demo-ecommerce.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "TypeScript", "Socket.io", "MongoDB"],
      category: "frontend",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      liveUrl: "https://taskflow-app.com",
      githubUrl: "https://github.com/alexjohnson/taskflow"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "An interactive weather dashboard with data visualization, location-based forecasts, and historical weather analysis using multiple APIs.",
      tech: ["Vue.js", "D3.js", "Express", "Weather API"],
      category: "frontend",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      liveUrl: "https://weather-analytics.com",
      githubUrl: "https://github.com/alexjohnson/weather-dashboard"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive social media analytics tool that aggregates data from multiple platforms and provides insights through interactive charts.",
      tech: ["Python", "Django", "React", "Chart.js"],
      category: "backend",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      liveUrl: "https://social-analytics.com",
      githubUrl: "https://github.com/alexjohnson/social-analytics"
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chat application powered by OpenAI's GPT, featuring conversation memory, custom prompts, and multi-language support.",
      tech: ["Next.js", "OpenAI API", "Prisma", "TailwindCSS"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      liveUrl: "https://ai-chat-demo.com",
      githubUrl: "https://github.com/alexjohnson/ai-chat"
    },
    {
      title: "Portfolio CMS",
      description: "A headless CMS specifically designed for developer portfolios, with drag-and-drop page builder and theme customization.",
      tech: ["React", "Strapi", "GraphQL", "AWS"],
      category: "backend",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      liveUrl: "https://portfolio-cms.com",
      githubUrl: "https://github.com/alexjohnson/portfolio-cms"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];

  useEffect(() => {
    const filtered = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
    
    // Animate out current projects
    setVisibleProjects([]);
    
    // Animate in new projects with stagger
    setTimeout(() => {
      setVisibleProjects(filtered);
    }, 200);
  }, [filter]);

  return (
    <section id="projects" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-xl text-slate-400 max-w-2xl mx-auto mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`} style={{ transitionDelay: '0.3s' }}>
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>

          {/* Enhanced Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`} style={{ transitionDelay: '0.5s' }}>
            {categories.map((category, index) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-500 transform hover:scale-110 hover:rotate-1 ${
                  filter === category.key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/30 scale-105'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-600/50 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-700 border border-slate-700/50 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 animate-fade-in hover:transform hover:scale-105 hover:rotate-1 ${
                project.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-emerald-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-emerald-500/10 group-hover:to-cyan-500/10 transition-all duration-500 rounded-xl"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Enhanced floating buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-full hover:from-slate-600 hover:to-slate-500 transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                  </a>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[30px] border-l-[30px] border-t-emerald-400/20 border-l-transparent group-hover:border-t-emerald-400/40 transition-colors duration-300"></div>
              </div>

              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-4 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-cyan-400 rounded-full border border-cyan-400/20 hover:bg-cyan-400/10 hover:scale-110 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${(index * 200) + (techIndex * 100)}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 text-center py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 text-center py-3 px-4 border border-slate-600 text-slate-300 text-sm font-medium rounded-lg hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
