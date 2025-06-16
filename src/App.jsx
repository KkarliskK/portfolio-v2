import React, { useState, useEffect } from 'react';
import { Code, Globe, Server, Database, Smartphone, Mail, Github, Linkedin, ExternalLink, ChevronDown, Star, Zap, Layers, Menu, X, ArrowRight } from 'lucide-react';

export default function ModernPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "WMTS",
      url: "https://www.wmtstennis.org",
      description: "Complete website redesign with modern UI/UX, responsive design, and enhanced user experience for tennis club management.",
      type: "Full Redesign",
      tags: ["Frontend", "UI/UX", "Responsive", "Sports"],
      gradient: "from-emerald-500 to-teal-600",
      featured: true
    },
    {
      title: "WWS Travel", 
      url: "https://wwstravel.com",
      description: "Dynamic product listings with advanced carousel functionality, integrated blog system, and seamless booking experience.",
      type: "Feature Development",
      tags: ["Frontend", "Carousel", "Blog System", "Travel"],
      gradient: "from-blue-500 to-purple-600",
      featured: true
    },
    {
      title: "Vissareiss",
      url: "https://vissareiss.lv", 
      description: "Advanced ticketing system with secure payment processing, supporting 4 different client types and real-time booking management.",
      type: "Full Stack",
      tags: ["Payment", "Ticketing", "Backend", "E-commerce"],
      gradient: "from-rose-500 to-pink-600",
      featured: true
    },
    {
      title: "Peonija",
      url: "https://peonija.lv",
      description: "Complete website built with React, Inertia.js, and Laravel Breeze for seamless SPA experience with robust authentication.",
      type: "Full Stack Build",
      tags: ["React", "Laravel", "Inertia", "SPA"],
      gradient: "from-violet-500 to-purple-600"
    },
    {
      title: "eXpoint",
      url: "https://expoint.eu",
      description: "Payment system integration with GDPR-compliant cookie management and advanced security protocols.",
      type: "System Integration", 
      tags: ["Payment", "GDPR", "Security", "Integration"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Axyjevel",
      url: "https://axyjevel.com",
      description: "Modern page redesign focusing on enhanced user experience, performance optimization, and mobile-first approach.",
      type: "Redesign",
      tags: ["UI/UX", "Frontend", "Performance", "Mobile"],
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  const skills = [
    { 
      icon: Code, 
      name: "Frontend Development", 
      desc: "React, Next.js, Vue.js, TypeScript, Tailwind CSS",
      level: 95
    },
    { 
      icon: Server, 
      name: "Backend Development", 
      desc: "Laravel, PHP, Node.js, RESTful APIs, Microservices",
      level: 92
    },
    { 
      icon: Database, 
      name: "Database Design", 
      desc: "MySQL, PostgreSQL, Redis, Database Architecture",
      level: 91
    },
    { 
      icon: Globe, 
      name: "Full Stack Solutions", 
      desc: "End-to-end development, DevOps, Cloud deployment",
      level: 90
    },
    { 
      icon: Zap, 
      name: "Payment Systems", 
      desc: "Stripe, PayPal, secure payment processing",
      level: 82
    },
    { 
      icon: Layers, 
      name: "Modern Frameworks", 
      desc: "Inertia.js, Laravel Breeze, JAMstack",
      level: 87
    }
  ];

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"
          style={{ transform: `translate(-50%, -50%) rotate(${scrollY * 0.1}deg)` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/40 backdrop-blur-lg border-b border-white/20 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
              onClick={() => scrollToSection('hero')}
            >
              KkarliskK
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-purple-400 transition-all duration-300 relative ${
                    activeSection === item.id ? 'text-purple-400' : 'text-white'
                  }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 hover:text-purple-400 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-500">
              <Code size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Kārlis Birkavs
          </h1>
          <h4 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            Full Stack Developer
          </h4>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting modern web experiences with cutting-edge technologies. 
            From payment systems to complete redesigns, I build digital solutions that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-3"
            >
              View My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Mail size={20} />
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={32} className="text-purple-400 hover:text-pink-400 transition-colors" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi! I'm a 20-year-old passionate full-stack developer from Cēsis, Latvia.
                I recently completed my 4-year programming studies at Vidzemes Tehnoloģiju un Dizaina tehnikums,
                where I built a solid foundation in modern web development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                My journey spans from complete website redesigns to complex payment systems and ticketing platforms.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in creating seamless user experiences while building robust backend systems. 
                Whether it's a Laravel-powered application or a React frontend, I bring ideas to life with clean, efficient code.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With a focus on modern development practices and cutting-edge technologies, I ensure every project 
                is not just functional, but also scalable, secure, and optimized for performance.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white cursor-pointer transition-colors hover:scale-110 transform">
                  <Github size={28} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white cursor-pointer transition-colors hover:scale-110 transform">
                  <Linkedin size={28} />
                </a>
                <a href="mailto:contact@example.com" className="text-purple-400 hover:text-white cursor-pointer transition-colors hover:scale-110 transform">
                  <Mail size={28} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <Star className="text-yellow-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2 text-xl">6+ Projects</h3>
                <p className="text-gray-400 text-sm">Successfully delivered</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <Zap className="text-blue-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2 text-xl">Full Stack</h3>
                <p className="text-gray-400 text-sm">Frontend + Backend</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <Globe className="text-green-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2 text-xl">Modern Tech</h3>
                <p className="text-gray-400 text-sm">Latest frameworks</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <Layers className="text-purple-400 mb-3" size={32} />
                <h3 className="font-semibold mb-2 text-xl">Complex Systems</h3>
                <p className="text-gray-400 text-sm">Payment & Ticketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden`}>
                  <Globe size={48} className="text-white z-10" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <a 
                    href={project.url.startsWith('http') ? project.url : `https://${project.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                  >
                    <ExternalLink size={20} className="text-purple-400" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs hover:bg-purple-500/30 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-500 font-medium">{project.type}</div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <Globe size={32} className="text-white" />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <a 
                    href={project.url.startsWith('http') ? project.url : `https://${project.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink size={18} className="text-purple-400" />
                  </a>
                </div>
                <p className="text-gray-400 mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-500 font-medium">{project.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <skill.icon size={48} className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors" />
                <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                <p className="text-gray-400 mb-4">{skill.desc}</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-2">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your next project to life? I'm always excited to work on new challenges and create amazing digital experiences. Let's discuss how we can make your vision a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:contact@example.com"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-3"
            >
              <Mail size={20} />
              Send Message
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://github.com/kkarliskk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <Mail className="text-purple-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">karlisbirk@gmail.com</p>
            </div>
            <div className="text-center">
              <Github className="text-purple-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">@kkarliskk</p>
            </div>
            <div className="text-center">
              <Linkedin className="text-purple-400 mx-auto mb-3" size={32} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Professional Profile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-4">&copy; 2025 KkarliskK - Full Stack Developer</p>
          <p className="text-sm">Built with React, crafted with passion ✨</p>
        </div>
      </footer>
    </div>
  );
}