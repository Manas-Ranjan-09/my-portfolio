import React from 'react';
import { motion } from 'framer-motion';
import { Github, Folder, FolderGit2, CalendarRange, Languages } from 'lucide-react';

const gitStats = [
  { label: "Repositories", value: "25", icon: <FolderGit2 size={20} className="text-[var(--brand-gold)]" /> },
  { label: "Projects", value: "8", icon: <Folder size={20} className="text-[var(--brand-gold)]" /> },
  { label: "Contributions", value: "180+", icon: <CalendarRange size={20} className="text-[var(--brand-gold)]" /> },
  { label: "Top Languages", value: "Python, JS", icon: <Languages size={20} className="text-[var(--brand-gold)]" /> }
];

export default function GithubSection() {
  return (
    <section 
      id="github" 
      className="relative min-h-[80vh] py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center items-center"
    >
      <div className="w-full relative z-10 max-w-4xl mx-auto">
        
        {/* Section Card Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

          {/* Icon */}
          <div className="mx-auto p-4 bg-white/5 border border-white/10 rounded-2xl w-fit mb-6 text-[var(--brand-gold)]">
            <Github size={36} />
          </div>

          {/* Heading */}
          <h3 className="text-xl md:text-3xl font-extrabold tracking-widest text-white uppercase mb-4">
            CODE. BUILD. LEARN. REPEAT.
          </h3>

          {/* Description */}
          <p className="text-[#9ca3af] font-light leading-relaxed max-w-xl mx-auto mb-10 text-sm md:text-base">
            "Explore my projects, experiments and development journey on GitHub."
          </p>

          {/* Grid Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-left">
            {gitStats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/3 border border-white/5 flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#9ca3af] font-light">
                    {stat.label}
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {stat.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a 
            href="https://github.com/Manas-Ranjan-09"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:bg-[#e5e7eb] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          >
            <Github size={14} />
            <span>VISIT GITHUB</span>
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}
