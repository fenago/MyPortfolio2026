
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronRight, Binary, Cpu, 
  Award, Mail, Linkedin, Github, 
  Layers, Rocket, Phone, MapPin, Sun, Moon
} from 'lucide-react';
import { PUBLICATIONS, EXPERIENCE, SKILL_CATEGORIES, CERTIFICATIONS } from './constants';

// --- Components ---

const Navbar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Pillars', id: 'pillars' },
    { name: 'Experience', id: 'experience' },
    { name: 'Research', id: 'research' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certs', id: 'certifications' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-2xl border-b border-black/5 dark:border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#2E5BFF] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(46,91,255,0.5)]">
            EL
          </div>
          <span className="mono font-bold text-lg tracking-tight hidden sm:block dark:text-white text-slate-900">
            DR. ERNESTO LEE <span className="text-[#2E5BFF]">DBA</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 mono text-xs font-medium">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-[#2E5BFF] transition-colors uppercase tracking-wider dark:text-slate-300 text-slate-600 font-bold">{item.name}</a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors dark:text-[#CCFF00] text-[#2E5BFF]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="mailto:LeeE@fau.edu" className="px-5 py-2 bg-[#2E5BFF] hover:bg-[#1a44e6] text-white rounded-md transition-all shadow-lg shadow-[#2E5BFF]/20">CONNECT</a>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full dark:text-[#CCFF00] text-[#2E5BFF]"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="dark:text-white text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full py-8 flex flex-col items-center gap-6 mono text-lg animate-fade-in border-b border-black/10 dark:border-white/10">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setIsOpen(false)} className="hover:text-[#2E5BFF] dark:text-white text-slate-900">{item.name}</a>
          ))}
          <a href="mailto:LeeE@fau.edu" className="px-8 py-3 bg-[#2E5BFF] text-white rounded-md">CONTACT</a>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2E5BFF]/5 dark:bg-[#2E5BFF]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl w-full flex flex-col items-center text-center relative z-10">
        {/* Profile Image with Neural Frame */}
        <div className="relative mb-10">
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#2E5BFF] to-[#CCFF00] rounded-full blur opacity-20 dark:opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-[#0B0E14] shadow-2xl">
            <img 
              src="profile.jpg" 
              alt="Dr. Ernesto Lee"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#CCFF00] text-[#0B0E14] p-2 rounded-lg shadow-lg rotate-3 font-bold mono text-xs">
            Architect
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-8 mono text-xs uppercase tracking-[0.2em] dark:text-[#8892B0] text-slate-500 font-bold">
          <span className="flex h-2 w-2 rounded-full bg-[#CCFF00] animate-pulse"></span>
          Engineering the Future of GenAI & Systems
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-tight dark:text-white text-slate-900">
          Dr. Ernesto Lee, <span className="text-[#2E5BFF]">DBA</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E5BFF] to-[#00C2FF] dark:to-[#CCFF00] whitespace-nowrap">
            Architecting Intelligence.
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl dark:text-[#8892B0] text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Bridging academic rigor with high-performance Generative AI and Blockchain innovation. A fusion of Systems Engineering and Strategic Leadership.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <a href="#research" className="w-full sm:w-auto px-10 py-4 bg-[#2E5BFF] text-white font-bold rounded-lg hover:shadow-[0_0_25px_rgba(46,91,255,0.4)] transition-all flex items-center justify-center gap-2 group">
            View Research <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="mailto:LeeE@fau.edu" className="w-full sm:w-auto px-10 py-4 glass dark:text-white text-slate-900 hover:bg-black/5 dark:hover:bg-white/10 transition-all font-bold rounded-lg flex items-center justify-center gap-2">
            Discuss a Project <Mail size={18} />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-60 w-full max-w-4xl border-t border-black/5 dark:border-white/5 pt-12">
           <div className="flex flex-col items-center gap-2">
             <span className="mono text-2xl font-bold dark:text-white text-slate-900">100K+</span>
             <span className="text-[10px] uppercase tracking-widest font-bold dark:text-[#8892B0] text-slate-500">Global Students</span>
           </div>
           <div className="flex flex-col items-center gap-2">
             <span className="mono text-2xl font-bold dark:text-white text-slate-900">15+</span>
             <span className="text-[10px] uppercase tracking-widest font-bold dark:text-[#8892B0] text-slate-500">Research Papers</span>
           </div>
           <div className="flex flex-col items-center gap-2">
             <span className="mono text-2xl font-bold dark:text-white text-slate-900">6+</span>
             <span className="text-[10px] uppercase tracking-widest font-bold dark:text-[#8892B0] text-slate-500">Expert Certs</span>
           </div>
           <div className="flex flex-col items-center gap-2">
             <span className="mono text-2xl font-bold dark:text-white text-slate-900">20+</span>
             <span className="text-[10px] uppercase tracking-widest font-bold dark:text-[#8892B0] text-slate-500">Years Exp</span>
           </div>
        </div>
      </div>
    </section>
  );
};

const Pillars: React.FC = () => {
  const pillars = [
    {
      title: "The Scientist",
      icon: <Binary className="text-[#2E5BFF] dark:text-[#CCFF00]" size={32} />,
      desc: "Deep foundations in Physics and Systems Engineering from Virginia Tech. Applying mathematical precision to complex neural architectures.",
      tags: ["Physics", "Systems Eng", "Algorithm Design"]
    },
    {
      title: "The Strategist",
      icon: <Layers className="text-[#2E5BFF]" size={32} />,
      desc: "DBA in Business Analytics. Former CDO orchestrating data transformation for government agencies and Fortune 500 enterprises.",
      tags: ["DBA", "Chief Data Officer", "Business Intel"]
    },
    {
      title: "The Practitioner",
      icon: <Cpu className="dark:text-white text-slate-700" size={32} />,
      desc: "Hands-on implementation of GenAI pipelines, Blockchain fabrics, and MLOps infrastructure for mission-critical deployments.",
      tags: ["GenAI", "Blockchain", "Infrastructure"]
    }
  ];

  return (
    <section id="pillars" className="py-24 px-6 relative border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-sm mono text-[#2E5BFF] uppercase tracking-[0.3em] mb-4 font-bold">Core Foundations</h2>
            <h3 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-900">The Three Pillars</h3>
          </div>
          <p className="dark:text-[#8892B0] text-slate-600 max-w-md leading-relaxed">Synthesis of academic theory, business foresight, and technical engineering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="glass p-10 rounded-2xl group hover:border-[#2E5BFF]/30 transition-all hover:-translate-y-2 relative overflow-hidden dark:bg-white/5 bg-slate-100 shadow-sm hover:shadow-xl">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2E5BFF]/5 to-transparent rounded-bl-full"></div>
              <div className="mb-6 p-4 bg-white/10 dark:bg-white/5 rounded-xl inline-block group-hover:bg-[#2E5BFF]/10 transition-colors relative z-10 shadow-sm">
                {pillar.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 relative z-10 dark:text-white text-slate-900">{pillar.title}</h4>
              <p className="dark:text-[#8892B0] text-slate-600 leading-relaxed mb-6 relative z-10">{pillar.desc}</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {pillar.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 dark:bg-white/5 bg-white shadow-sm rounded-full text-[10px] mono uppercase tracking-widest dark:text-white/50 text-slate-500 font-bold">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm mono text-[#2E5BFF] uppercase tracking-[0.3em] mb-4 font-bold">Career Roadmap</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-16 dark:text-white text-slate-900">High-Impact Experience</h3>
        
        <div className="relative border-l border-black/10 dark:border-white/10 ml-4 md:ml-12 pl-8 md:pl-16 space-y-20">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-[53px] md:-left-[85px] top-0 w-10 h-10 dark:bg-[#0B0E14] bg-white border-2 border-[#2E5BFF] rounded-lg flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(46,91,255,0.2)]">
                <span className="text-[#2E5BFF] mono text-xs font-bold">{i + 1}</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h4 className="text-2xl font-bold group-hover:text-[#2E5BFF] transition-colors dark:text-white text-slate-900">{exp.role}</h4>
                  <div className="flex items-center gap-3 text-[#2E5BFF] mono text-sm font-bold">
                    <span>{exp.company}</span>
                    <span className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full"></span>
                    <span className="flex items-center gap-1 font-medium"><MapPin size={12} /> {exp.location}</span>
                  </div>
                </div>
                <div className="mono text-xs px-3 py-1 rounded dark:bg-white/5 bg-slate-100 dark:text-[#8892B0] text-slate-500 uppercase tracking-widest font-bold">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-4">
                {exp.description.map((item, j) => (
                  <li key={j} className="flex gap-4 dark:text-[#8892B0] text-slate-600 leading-relaxed">
                    <ChevronRight size={16} className="text-[#2E5BFF] shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PublicationsGallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const years = ['All', ...new Set(PUBLICATIONS.map(p => p.year.toString()))].sort().reverse();

  const filtered = filter === 'All' 
    ? PUBLICATIONS 
    : PUBLICATIONS.filter(p => p.year.toString() === filter);

  return (
    <section id="research" className="py-24 px-6 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-sm mono text-[#2E5BFF] uppercase tracking-[0.3em] mb-2 font-bold">Academic Contributions</h2>
            <h3 className="text-4xl font-bold dark:text-white text-slate-900">Selected Publications</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {years.map(year => (
              <button 
                key={year}
                onClick={() => setFilter(year)}
                className={`px-4 py-2 rounded-full mono text-[10px] uppercase tracking-widest transition-all font-bold ${filter === year ? 'bg-[#2E5BFF] text-white shadow-lg shadow-[#2E5BFF]/30' : 'dark:bg-white/5 bg-slate-100 dark:text-[#8892B0] text-slate-500 hover:bg-slate-200 border border-black/5 dark:border-white/5'}`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pub, i) => (
            <div key={i} className="glass p-8 rounded-xl flex flex-col justify-between hover:border-[#2E5BFF]/40 transition-all group cursor-default dark:bg-white/5 bg-slate-100 shadow-sm border border-transparent">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[#2E5BFF] mono text-xs font-black">{pub.year}</span>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {pub.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-[#2E5BFF]/10 text-[#2E5BFF] rounded text-[8px] mono uppercase font-black">{tag}</span>
                    ))}
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-4 leading-snug dark:group-hover:text-white group-hover:text-[#2E5BFF] transition-colors dark:text-white text-slate-900">{pub.title}</h4>
              </div>
              <p className="dark:text-[#8892B0] text-slate-500 text-sm italic border-t border-black/5 dark:border-white/5 pt-4 mt-auto">
                {pub.journal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm mono text-[#2E5BFF] uppercase tracking-[0.3em] mb-4 font-bold">Technical Proficiency</h2>
          <h3 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-900">The Intelligent Stack</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={i} className="glass p-8 rounded-2xl relative overflow-hidden group border border-black/5 dark:border-white/5 dark:bg-white/5 bg-slate-50 shadow-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#2E5BFF]/5 rounded-bl-full group-hover:bg-[#2E5BFF]/10 transition-all"></div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2 dark:text-white text-slate-900">
                <div className="w-2 h-2 rounded-full bg-[#2E5BFF]"></div>
                {cat.title}
              </h4>
              <ul className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-black dark:text-[#8892B0] text-slate-500 mono uppercase tracking-wider">
                      <span>{skill}</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#2E5BFF] transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(46,91,255,0.2)]" 
                        style={{ width: `${75 + Math.random() * 20}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-sm mono text-[#2E5BFF] uppercase tracking-[0.3em] mb-2 font-bold">Credentials</h2>
          <h3 className="text-4xl font-bold dark:text-white text-slate-900">The Badge Wall</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} className="glass p-6 rounded-xl text-center group hover:bg-[#2E5BFF]/5 transition-all flex flex-col items-center justify-center border border-black/5 dark:border-white/5 dark:bg-white/5 bg-white shadow-sm">
              <div className="mb-4 w-12 h-12 rounded-full bg-[#2E5BFF]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="text-[#2E5BFF]" size={24} />
              </div>
              <h5 className="text-[10px] font-black leading-tight uppercase tracking-widest dark:text-white text-slate-900">{cert.name}</h5>
              <p className="text-[9px] mono dark:text-[#8892B0] text-slate-500 mt-2 font-bold uppercase">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-black/10 dark:border-white/10 dark:bg-[#07090D] bg-slate-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <div className="text-3xl font-bold mb-4 tracking-tighter flex items-center gap-3 dark:text-white text-slate-900">
             <div className="w-8 h-8 rounded bg-[#2E5BFF] flex items-center justify-center text-sm font-black text-white">EL</div>
            DR. ERNESTO LEE <span className="text-[#2E5BFF]">DBA</span>
          </div>
          <div className="space-y-2 mb-6">
            <p className="flex items-center gap-2 dark:text-[#8892B0] text-slate-600 text-sm font-medium"><Mail size={14} className="text-[#2E5BFF]" /> LeeE@fau.edu</p>
            <p className="flex items-center gap-2 dark:text-[#8892B0] text-slate-600 text-sm font-medium"><Phone size={14} className="text-[#2E5BFF]" /> 954-235-1294</p>
            <p className="flex items-center gap-2 dark:text-[#8892B0] text-slate-600 text-sm font-medium"><MapPin size={14} className="text-[#2E5BFF]" /> Boca Raton, FL</p>
          </div>
          <p className="dark:text-[#8892B0] text-slate-500 text-xs max-w-sm leading-relaxed border-l-2 border-[#2E5BFF] pl-4 font-medium">
            Bridging the gap between physics, business strategy, and next-generation AI leadership. High-performance infrastructure for intelligent systems.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/ernestolee" target="_blank" className="p-4 dark:bg-white/5 bg-white shadow-sm rounded-xl hover:bg-[#2E5BFF] hover:text-white transition-all dark:text-white text-slate-600 border border-black/5 dark:border-white/5"><Linkedin size={22} /></a>
            <a href="https://github.com/ernestolee" target="_blank" className="p-4 dark:bg-white/5 bg-white shadow-sm rounded-xl hover:bg-[#2E5BFF] hover:text-white transition-all dark:text-white text-slate-600 border border-black/5 dark:border-white/5"><Github size={22} /></a>
            <a href="mailto:LeeE@fau.edu" className="p-4 dark:bg-white/5 bg-white shadow-sm rounded-xl hover:bg-[#2E5BFF] hover:text-white transition-all dark:text-white text-slate-600 border border-black/5 dark:border-white/5"><Mail size={22} /></a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="mono text-[10px] dark:text-[#8892B0] text-slate-400 uppercase tracking-[0.3em] mt-4 font-black">
              &copy; {new Date().getFullYear()} Ernesto Lee, DBA. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [theme, setTheme] = useState('dark');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-1000');
      observerRef.current?.observe(section);
    });

    return () => observerRef.current?.disconnect();
  }, [theme]);

  return (
    <div className="min-h-screen dark:bg-[#0B0E14] bg-white transition-colors duration-500 selection:bg-[#2E5BFF] selection:text-white">
      <style>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        html { scroll-behavior: smooth; }
        .glass {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .dark .glass {
          background: rgba(255, 255, 255, 0.03);
        }
        .light .glass {
          background: rgba(255, 255, 255, 0.7);
        }
      `}</style>
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="dark:text-[#E0E0E0] text-slate-800">
        <Hero />
        <Pillars />
        <ExperienceTimeline />
        <PublicationsGallery />
        <SkillMatrix />
        <Certifications />
      </main>
      <Footer />

      {/* Persistent CTA on Desktop */}
      <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
        <a 
          href="mailto:LeeE@fau.edu" 
          className="group flex items-center gap-3 bg-[#2E5BFF] text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-all border-2 border-transparent hover:border-white dark:hover:border-[#CCFF00]"
        >
          <span className="mono uppercase tracking-widest text-xs">Let's Discuss Systems</span>
          <div className="p-1.5 bg-white/20 rounded-full text-white group-hover:rotate-12 transition-transform">
            <Rocket size={16} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default App;
