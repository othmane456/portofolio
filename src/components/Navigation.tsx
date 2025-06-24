
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'personal-statement', 'about', 'philosophy', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Inspiration', href: '#personal-statement' },
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-2xl shadow-emerald-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent hover:scale-110 transition-all duration-300 cursor-pointer animate-gradient">
            DevFolio
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group transform hover:scale-105 ${
                  activeSection === item.href.slice(1) ? 'text-cyan-400' : ''
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 ${
                  activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
                {/* Glow effect on active */}
                {activeSection === item.href.slice(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 blur-sm opacity-50"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl hover:bg-slate-800 transition-all duration-300 hover:scale-110 group"
            >
              <div className="relative">
                {isOpen ? (
                  <X size={24} className="transition-transform duration-300 rotate-180" />
                ) : (
                  <Menu size={24} className="transition-transform duration-300 group-hover:rotate-90" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800 mt-4 animate-slide-up">
            <div className="space-y-1 pt-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-4 px-4 rounded-lg hover:text-cyan-400 hover:bg-slate-800/70 transition-all duration-300 transform hover:translate-x-2 group ${
                    activeSection === item.href.slice(1) ? 'text-cyan-400 bg-slate-800/50 border-l-4 border-cyan-400' : 'text-slate-300'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cyan-400">→</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
