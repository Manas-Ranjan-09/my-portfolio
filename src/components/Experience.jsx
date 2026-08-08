import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "SOFTWARE ENGINEER TRAINEE",
    company: "Inovvantage",
    duration: "2 Months",
    location: "Bhubaneswar, India",
    desc: "Assisted in writing clean, documented code for backend systems and web portals. Gained hands-on experience in testing API routing endpoints, integrating relational tables, and participating in code refactoring to improve overall system speed and reliability."
  },
  {
    id: 2,
    role: "PYTHON DEVELOPER INTERN",
    company: "Cognifyz Technologies",
    duration: "1 Month",
    location: "Remote, India",
    desc: "Collaborated on designing Python scripts for programmatic execution. Integrated databases and developed basic microservices using Flask/Django frameworks. Automated data queries, handled parsing pipelines, and conducted functional tests."
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = (isLeft) => ({
    hidden: { 
      opacity: 0, 
      x: isLeft ? -50 : 50 
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
      className="relative min-h-screen py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center items-center"
    >
      <div className="w-full relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase text-white"
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
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-black border-2 border-[var(--brand-gold)] rounded-full z-10 transform -translate-x-[7px] md:-translate-x-2 shadow-[0_0_10px_rgba(197,168,128,0.6)]"></div>

                {/* Timeline Card */}
                <motion.div 
                  variants={cardVariants(isLeft)}
                  className={`w-full md:w-[45%] pl-10 md:pl-0 ${
                    isLeft ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className="glass-card rounded-2xl p-6 relative hover:shadow-[0_10px_35px_rgba(0,0,0,0.4)]">
                    
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

                    {/* Description paragraph */}
                    <p className="text-xs text-[#9ca3af] font-light leading-relaxed">
                      {exp.desc}
                    </p>

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
