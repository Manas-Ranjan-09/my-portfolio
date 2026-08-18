import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { projectsData } from '../data/projects';

function ProjectCard({ project, index, shouldReduceMotion }) {
  const pad = (num) => ('00' + num).slice(-2);

  return (
    <motion.div 
      layout
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between h-full group"
    >
      {/* Card Header visual with Project Image */}
      <div className="relative aspect-video w-full border-b border-white/5 overflow-hidden flex items-center justify-center">
        {/* Background Image with cover scale */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Dark overlay to ensure text contrast and premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
        
        {/* Floating card index number */}
        <div className="absolute top-4 right-4 text-xs font-bold tracking-widest text-[var(--brand-gold)] bg-black/55 px-2.5 py-0.5 rounded backdrop-blur-sm font-mono z-10">
          PROJ-{pad(project.id)}
        </div>
      </div>

      {/* Card Content body */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="text-xs font-bold tracking-widest text-[var(--brand-gold)] uppercase mb-2">
            Project {pad(index + 1)}
          </div>
          <h3 className="text-lg font-bold text-white tracking-wide mb-3 group-hover:text-[var(--brand-gold)] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-[#9ca3af] font-light leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[9px] uppercase tracking-wider font-semibold border border-white/5 bg-white/5 text-[#d1d5db] px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links CTA footer */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-[var(--brand-gold)] transition-colors py-2 px-3 border border-white/10 rounded-lg hover:border-[var(--brand-gold)]/50 bg-white/5 min-h-[44px]"
            >
              <Github size={14} />
              <span>Code</span>
            </a>
            <a 
              href={project.demo} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-[var(--brand-gold)] to-[#cca374] hover:opacity-90 transition-all py-2 px-3.5 rounded-lg shadow-md shadow-[var(--brand-gold)]/10 min-h-[44px]"
            >
              <ExternalLink size={14} />
              <span>Demo</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const shouldReduceMotion = useReducedMotion();
  const filters = ['ALL', 'PYTHON', 'DJANGO', 'JAVASCRIPT', 'REACT'];

  // Frontend filter matches project categories
  const filteredProjects = activeFilter === 'ALL' 
    ? projectsData 
    : projectsData.filter(p => p.categories.includes(activeFilter.toLowerCase()));

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-16 sm:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 xl:px-16 flex flex-col justify-center items-center"
    >
      <div className="w-full relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-widest uppercase text-white"
          >
            PROJECTS
          </motion.h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mt-4 rounded-full"></div>
        </div>

        {/* Filter Navigation Buttons */}
        <div className="flex overflow-x-auto no-scrollbar justify-start sm:justify-center items-center gap-2 mb-8 sm:mb-12 w-[calc(100%+2rem)] sm:w-full -mx-4 sm:mx-0 px-4 sm:px-0 pb-3 sm:pb-0 scroll-smooth whitespace-nowrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-widest border transition-all duration-300 min-h-[40px] sm:min-h-0 flex-shrink-0 ${
                activeFilter === filter
                  ? 'border-[var(--brand-gold)] bg-gradient-to-r from-[var(--brand-gold)] to-[#cca374] text-black shadow-lg shadow-[var(--brand-gold)]/15'
                  : 'border-white/10 hover:border-[var(--brand-gold)]/50 text-[#9ca3af] hover:text-white bg-transparent'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid with AnimatePresence */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
