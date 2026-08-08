import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const educationData = [
  {
    id: 1,
    school: "Maharaja Sriram Chandra Bhanja Deo University",
    degree: "MASTER OF COMPUTER APPLICATIONS",
    duration: "2023 -- 2025",
    location: "Baripada, Odisha",
    grade: "CGPA: 8.26",
    badge: "MCA Graduate",
    coursework: [
      "Object-Oriented Programming (Python, Java)",
      "Relational Databases (MySQL, PostgreSQL)",
      "Web Technologies & Frontend Scripting",
      "Data Structures & Algorithmic Analysis",
      "Software Engineering & SDLC Methodologies",
      "Computer Networks & Security Principles"
    ]
  },
  {
    id: 2,
    school: "Bhadrak Autonomous College",
    degree: "BACHELOR OF COMPUTER APPLICATIONS",
    duration: "2023 - 2025",
    location: "Bhadrak, Odisha",
    grade: "CGPA: 8.18",
    badge: "BCA Graduate",
    coursework: [
      "Computer Programming & Core Languages",
      "Database Systems & Relational Schemas",
      "Web Design Technologies",
      "Software Engineering Concepts",
      "Data Communication & Networking"
    ]
  }
];

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
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {educationData.map((edu, idx) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-8 md:p-10 hover:shadow-[0_15px_45px_rgba(0,0,0,0.5)] transition-all relative overflow-hidden"
            >
              {/* Grid overlay background graphic */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#c5a880_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

              {/* Content header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 pb-6 border-b border-white/5 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl text-[var(--brand-gold)] flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest text-[var(--brand-gold)] uppercase mb-1">
                      {edu.school}
                    </div>
                    <h3 className="text-base md:text-xl font-extrabold text-white tracking-wide uppercase">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                {/* Tag marker */}
                <span className="self-start md:self-auto px-4 py-1.5 rounded-full border border-[var(--brand-gold)]/20 bg-[var(--brand-gold)]/5 text-[var(--brand-gold)] text-xs uppercase tracking-widest font-semibold whitespace-nowrap">
                  {edu.badge}
                </span>
              </div>

              {/* Content body details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 relative z-10 text-xs md:text-sm font-light text-[#9ca3af]">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-[var(--brand-gold)]" />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[var(--brand-gold)]" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-[var(--brand-gold)]" />
                  <span className="font-semibold text-white">{edu.grade}</span>
                </div>
              </div>

              {/* Bullet achievements */}
              <div className="relative z-10">
                <h4 className="text-[10px] font-bold tracking-widest text-white uppercase mb-3">
                  Core Subjects & Study Areas:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9ca3af] font-light">
                  {edu.coursework.map((course, cIdx) => (
                    <li key={cIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--brand-gold)] rounded-full flex-shrink-0"></span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
