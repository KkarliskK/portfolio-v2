import React, { useState, useEffect } from 'react';
import { Code, Globe, Server, Database, Smartphone, Mail, Github, Linkedin, ExternalLink, ChevronDown, Star, Zap, Layers, Menu, X, ArrowRight, TurtleIcon } from 'lucide-react';

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
      gradient: "from-violet-500 to-purple-600",
      featured: true
    },
    {
      title: "eXpoint",
      url: "https://expoint.eu",
      description: "Payment system integration with GDPR-compliant cookie management and advanced security protocols.",
      type: "System Integration", 
      tags: ["Payment", "GDPR", "Security", "Integration"],
      gradient: "from-orange-500 to-red-600",
      featured: TurtleIcon
    },
    {
      title: "Axyjevel",
      url: "https://axyjevel.com",
      description: "Modern page redesign focusing on enhanced user experience, performance optimization, and mobile-first approach.",
      type: "Redesign",
      tags: ["UI/UX", "Frontend", "Performance", "Mobile"],
      gradient: "from-cyan-500 to-blue-600",
      featured: true
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
    <div className="min-h-screen overflow-hidden text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute bg-purple-500 rounded-full -top-40 -right-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute delay-1000 bg-pink-500 rounded-full -bottom-40 -left-40 w-80 h-80 mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute delay-500 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full top-1/2 left-1/2 w-80 h-80 mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ transform: `translate(-50%, -50%) rotate(${scrollY * 0.1}deg)` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/40 backdrop-blur-lg border-b border-white/20 shadow-lg' : 'bg-transparent'}`}>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div 
              className="text-2xl font-bold text-transparent transition-transform cursor-pointer bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text hover:scale-105"
              onClick={() => scrollToSection('hero')}
            >
              KkarliskK
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden space-x-8 md:flex">
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
              className="p-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t md:hidden bg-black/90 backdrop-blur-lg border-white/10">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full py-2 text-left transition-colors hover:text-purple-400"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative flex items-center justify-center min-h-screen">
        <div className="z-10 px-4 text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center w-32 h-32 mx-auto mb-6 transition-transform duration-500 rounded-full shadow-2xl bg-gradient-to-br from-purple-500 to-pink-500 hover:scale-110">
              <Code size={48} className="text-white" />
            </div>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-transparent md:text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text animate-pulse">
            Kārlis Birkavs
          </h1>
          <h4 className="mb-6 text-2xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text animate-pulse">
            Full Stack Developer
          </h4>
          <p className="max-w-3xl mx-auto mb-8 text-xl leading-relaxed text-gray-300 md:text-2xl">
            Crafting modern web experiences with cutting-edge technologies. 
            From payment systems to complete redesigns, I build digital solutions that matter.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button 
              onClick={() => scrollToSection('projects')}
              className="flex items-center justify-center gap-3 px-8 py-4 font-semibold transition-all duration-300 transform rounded-full shadow-lg group bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 hover:shadow-purple-500/25"
            >
              View My Work
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center justify-center gap-3 px-8 py-4 font-semibold transition-all duration-300 border border-purple-400 rounded-full hover:bg-purple-400/10"
            >
              <Mail size={20} />
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute transform -translate-x-1/2 cursor-pointer bottom-8 left-1/2 animate-bounce"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={32} className="text-purple-400 transition-colors hover:text-pink-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            About Me
          </h2>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300">
                Hi! I'm a 20-year-old passionate full-stack developer from Cēsis, Latvia.
                I recently completed my 4-year programming studies at Vidzemes Tehnoloģiju un Dizaina tehnikums,
                where I built a solid foundation in modern web development.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                My journey spans from complete website redesigns to complex payment systems and ticketing platforms.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                I specialize in creating seamless user experiences while building robust backend systems. 
                Whether it's a Laravel-powered application or a React frontend, I bring ideas to life with clean, efficient code.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                With a focus on modern development practices and cutting-edge technologies, I ensure every project 
                is not just functional, but also scalable, secure, and optimized for performance.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 transition-colors transform cursor-pointer hover:text-white hover:scale-110">
                  <Github size={28} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 transition-colors transform cursor-pointer hover:text-white hover:scale-110">
                  <Linkedin size={28} />
                </a>
                <a href="mailto:contact@example.com" className="text-purple-400 transition-colors transform cursor-pointer hover:text-white hover:scale-110">
                  <Mail size={28} />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 transition-all duration-300 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 hover:scale-105">
                <Star className="mb-3 text-yellow-400" size={32} />
                <h3 className="mb-2 text-xl font-semibold">6+ Projects</h3>
                <p className="text-sm text-gray-400">Successfully delivered</p>
              </div>
              <div className="p-6 transition-all duration-300 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 hover:scale-105">
                <Zap className="mb-3 text-blue-400" size={32} />
                <h3 className="mb-2 text-xl font-semibold">Full Stack</h3>
                <p className="text-sm text-gray-400">Frontend + Backend</p>
              </div>
              <div className="p-6 transition-all duration-300 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 hover:scale-105">
                <Globe className="mb-3 text-green-400" size={32} />
                <h3 className="mb-2 text-xl font-semibold">Modern Tech</h3>
                <p className="text-sm text-gray-400">Latest frameworks</p>
              </div>
              <div className="p-6 transition-all duration-300 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/50 hover:scale-105">
                <Layers className="mb-3 text-purple-400" size={32} />
                <h3 className="mb-2 text-xl font-semibold">Complex Systems</h3>
                <p className="text-sm text-gray-400">Payment & Ticketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Featured Projects
          </h2>
          
          {/* Featured Projects */}
          <div className="grid gap-8 mb-12 lg:grid-cols-3">
            {projects.filter(p => p.featured).map((project, index) => (
              <div 
                key={index}
                className="p-6 transition-all duration-500 border group bg-white/5 backdrop-blur-sm rounded-xl border-white/10 hover:border-purple-400/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden`}>
                  <Globe size={48} className="z-10 text-white" />
                  <div className="absolute inset-0 transition-colors bg-black/20 group-hover:bg-black/10"></div>
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-purple-400">{project.title}</h3>
                  <a 
                    href={project.url.startsWith('http') ? project.url : `https://${project.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                  >
                    <ExternalLink size={20} className="text-purple-400" />
                  </a>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 text-xs text-purple-300 transition-colors rounded-full bg-purple-500/20 hover:bg-purple-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-500">{project.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Skills & Expertise
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-sm rounded-xl border-white/10 hover:border-purple-400/50 hover:scale-105 group"
              >
                <skill.icon size={48} className="mb-4 text-purple-400 transition-colors group-hover:text-pink-400" />
                <h3 className="mb-3 text-xl font-semibold">{skill.name}</h3>
                <p className="mb-4 text-gray-400">{skill.desc}</p>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div 
                    className="h-2 transition-all duration-1000 ease-out rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-gray-400">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Let's Work Together
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-xl leading-relaxed text-gray-300">
            Ready to bring your next project to life? I'm always excited to work on new challenges and create amazing digital experiences. Let's discuss how we can make your vision a reality.
          </p>
          <div className="flex flex-col justify-center gap-6 mb-12 sm:flex-row">
            <a 
              href="mailto:contact@example.com"
              className="flex items-center justify-center gap-3 px-8 py-4 font-semibold transition-all duration-300 transform rounded-full shadow-lg group bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 hover:shadow-purple-500/25"
            >
              <Mail size={20} />
              Send Message
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="https://github.com/kkarliskk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 font-semibold transition-all duration-300 border border-purple-400 rounded-full hover:bg-purple-400/10"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="grid max-w-2xl gap-8 mx-auto md:grid-cols-3">
            <div className="text-center">
              <Mail className="mx-auto mb-3 text-purple-400" size={32} />
              <h3 className="mb-2 font-semibold">Email</h3>
              <p className="text-sm text-gray-400">karlisbirk@gmail.com</p>
            </div>
            <div className="text-center">
              <Github className="mx-auto mb-3 text-purple-400" size={32} />
              <h3 className="mb-2 font-semibold">GitHub</h3>
              <p className="text-sm text-gray-400">@kkarliskk</p>
            </div>
            <div className="text-center">
              <Linkedin className="mx-auto mb-3 text-purple-400" size={32} />
              <h3 className="mb-2 font-semibold">LinkedIn</h3>
              <p className="text-sm text-gray-400">Professional Profile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <div className="px-4 mx-auto max-w-7xl">
          <p className="mb-4">&copy; 2025 KkarliskK - Full Stack Developer</p>
          <p className="text-sm">Built with React, crafted with passion ✨</p>
        </div>
      </footer>
    </div>
  );
}