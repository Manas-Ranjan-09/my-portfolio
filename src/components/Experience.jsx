import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "SOFTWARE ENGINEER TRAINEE",
    company: "Inovvantage",
    duration: "Dec 2025 - Jan 2026",
    location: "Bhubaneswar, India",
    desc: [
      "Assisted in developing and maintaining web applications using Python, Django, HTML, CSS, and JavaScript.",
      "Collaborated with the development team to debug issues, test features, and improve application performance.",
      "Worked on frontend and backend tasks, including database integration and API handling.",
      "Gained hands-on experience in software development lifecycle, version control, and team collaboration."
    ]
  },
  {
    id: 2,
    role: "PYTHON DEVELOPER INTERN",
    company: "Cognifyz Technologies",
    duration: "Oct 2025 – Nov 2025",
    location: "Remote, India",
    desc: [
      "Designed multi-section front end with advanced form validation and dynamic DOM updates.",
      "Implemented secure signup/login, password hashing, protected routes, and API CRUD operations.",
      "Integrated MongoDB and environment configuration using .env.",
      "Added UI animations and automatic redirect to login after account creation."
    ]
  }
];

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = (isLeft) => ({
    hidden: { 
      opacity: 0, 
      x: shouldReduceMotion ? 0 : (isLeft ? -15 : 15) 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  });

  return (
    <section 
      id="experience" 
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
            EXPERIENCE
          </motion.h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mt-4 rounded-full"></div>
        </div>

        {/* Timeline wrapper */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative timeline-line max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div 
                key={exp.id} 
                className={`relative flex flex-col md:flex-row items-center justify-between mb-16 last:mb-0 ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Connector dot */}
                <div className="absolute left-[16px] md:left-1/2 w-4 h-4 bg-black border-2 border-[var(--brand-gold)] rounded-full z-10 transform -translate-x-[7px] md:-translate-x-2 shadow-[0_0_10px_rgba(197,168,128,0.6)]"></div>

                {/* Timeline Card */}
                <motion.div 
                  variants={cardVariants(isLeft)}
                  className={`w-full md:w-[45%] pl-8 md:pl-0 ${
                    isLeft ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className="glass-card rounded-2xl p-4 sm:p-6 relative hover:shadow-[0_10px_35px_rgba(0,0,0,0.4)]">
                    
                    {/* Role */}
                    <h3 className="text-base md:text-lg font-bold tracking-wide text-white mb-2">
                      {exp.role}
                    </h3>
                    
                    {/* Company */}
                    <div className={`flex items-center gap-1 text-sm font-semibold text-[var(--brand-gold)] mb-4 justify-start ${
                      isLeft ? 'md:justify-end' : ''
                    }`}>
                      <Briefcase size={14} />
                      <span>{exp.company}</span>
                    </div>

                    {/* Metadata (Duration / Location) */}
                    <div className={`flex flex-wrap items-center gap-4 text-xs text-[#9ca3af] font-light mb-4 justify-start ${
                      isLeft ? 'md:justify-end' : ''
                    }`}>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description bullet list */}
                    <ul className="text-xs text-[#9ca3af] font-light leading-relaxed space-y-2 list-disc pl-4 text-left">
                      {exp.desc.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>

                  </div>
                </motion.div>

                {/* Empty visual spacing block for desktop grid balance */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
