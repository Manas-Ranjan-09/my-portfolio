import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Education() {
  return (
    <section 
      id="education" 
      className="relative min-h-screen py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center items-center"
    >
      <div className="w-full relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase text-white"
          >
            EDUCATION
          </motion.h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mt-4 rounded-full"></div>
        </div>

        {/* Education glass container layout */}
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card rounded-2xl p-8 md:p-12 hover:shadow-[0_15px_45px_rgba(0,0,0,0.5)] transition-all relative overflow-hidden"
          >
            {/* Grid overlay background graphic */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

            {/* Content header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/5 relative z-10">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[var(--brand-gold)] flex items-center justify-center">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest text-[var(--brand-gold)] uppercase mb-1">
                    MSCB University
                  </div>
                  <h3 className="text-lg md:text-2xl font-extrabold text-white tracking-wide">
                    MASTER OF COMPUTER APPLICATIONS
                  </h3>
                </div>
              </div>

              {/* Tag marker */}
              <span className="self-start md:self-auto px-4 py-1.5 rounded-full border border-[var(--brand-gold)]/20 bg-[var(--brand-gold)]/5 text-[var(--brand-gold)] text-xs uppercase tracking-widest font-semibold">
                MCA Graduate
              </span>
            </div>

            {/* Content body details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10 text-sm font-light text-[#9ca3af]">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[var(--brand-gold)]" />
                <span>Graduated</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[var(--brand-gold)]" />
                <span>Baripada, Odisha</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[var(--brand-gold)]" />
                <span>Full Time MCA Degree</span>
              </div>
            </div>

            {/* Bullet achievements */}
            <div className="relative z-10">
              <h4 className="text-xs font-bold tracking-widest text-white uppercase mb-4">
                Key Curriculum & Coursework:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-[#9ca3af] font-light">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--brand-gold)] rounded-full"></span>
                  <span>Object-Oriented Programming (Python, Java)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--brand-gold)] rounded-full"></span>
                  <span>Relational Databases (MySQL, PostgreSQL)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--brand-gold)] rounded-full"></span>
                  <span>Web Technologies & Frontend Scripting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--brand-gold)] rounded-full"></span>
                  <span>Data Structures & Algorithmic Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--brand-gold)] rounded-full"></span>
                  <span>Software Engineering & SDLC Methodologies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[var(--brand-gold)] rounded-full"></span>
                  <span>Computer Networks & Security Principles</span>
                </li>
              </ul>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
