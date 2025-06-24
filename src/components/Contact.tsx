
import React, { useState } from 'react';
import { Mail, Linkedin, Github, X } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/alexjohnson',
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/alexjohnson',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Twitter',
      icon: X,
      url: 'https://twitter.com/alexjohnsondev',
      color: 'hover:text-sky-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:alex@example.com',
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4 text-slate-300">
                <p className="leading-relaxed">
                  I'm always open to discussing new opportunities, creative ideas, or potential collaborations.
                </p>
                
                <p className="leading-relaxed">
                  Whether you need a full-stack web application, want to modernize your existing platform, 
                  or just have a question about web development, I'd love to hear from you.
                </p>

                <div className="pt-4">
                  <p className="text-cyan-400 font-medium mb-2">Response Time:</p>
                  <p className="text-sm">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-4 bg-slate-700/30 rounded-lg text-slate-300 ${link.color} transition-all duration-200 hover:bg-slate-700/50 hover:scale-105`}
                    >
                      <IconComponent size={20} />
                      <span className="font-medium">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-800">
          <p className="text-slate-400">
            © 2024 Alex Johnson. Built with React & TailwindCSS
          </p>
        </div>
      </div>
    </section>
  );
};
