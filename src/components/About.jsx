import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BrainCircuit, Layers } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: "MCA GRADUATE",
    desc: "Master of Computer Applications academic qualification.",
    icon: <GraduationCap size={24} className="text-[var(--brand-gold)]" />,
  },
  {
    id: 2,
    title: "6+ PROJECTS",
    desc: "Built diverse web, data and database applications.",
    icon: <Award size={24} className="text-[var(--brand-gold)]" />,
  },
  {
    id: 3,
    title: "PYTHON DEVELOPER",
    desc: "Focused on clean structures and Django/Flask applications.",
    icon: <BrainCircuit size={24} className="text-[var(--brand-gold)]" />,
  },
  {
    id: 4,
    title: "FULL STACK DEV",
    desc: "Bridging solid backends with modular, reactive frontends.",
    icon: <Layers size={24} className="text-[var(--brand-gold)]" />,
  },
];

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center items-center"
    >
      <div className="w-full relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase text-white"
          >
            ABOUT ME
          </motion.h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mt-4 rounded-full"></div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Bio text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white">
              Full Stack Developer dedicated to high-performance, robust software architectures.
            </h3>
            <p className="text-[#9ca3af] font-light leading-relaxed">
              I am an MCA graduate specializing in Full Stack Python development. My technical expertise covers building scalable database systems, writing fast backend REST APIs, and designing interactive client interfaces using JavaScript, React.js, and modern styling libraries.
            </p>
            <p className="text-[#9ca3af] font-light leading-relaxed">
              Equipped with a solid foundation in software engineering methodologies, database design (MySQL, MongoDB), version control (Git, GitHub), and developer productivity tools, I apply problem-solving principles to develop efficient, real-world application architectures.
            </p>
            
            {/* Tech keywords list */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["Python", "Django", "JavaScript", "React", "REST APIs", "MySQL", "MongoDB", "Git/GitHub", "Problem Solving"].map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs uppercase tracking-wider font-semibold border border-white/10 bg-white/5 text-[#f3f4f6] px-3.5 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between min-h-[160px]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-[var(--brand-gold)] uppercase mb-2">
                    {stat.title}
                  </h4>
                  <p className="text-xs text-[#9ca3af] font-light leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
