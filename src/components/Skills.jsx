import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Code, 
  Terminal, 
  Globe, 
  Palette, 
  Cpu, 
  Layout, 
  Server, 
  HardDrive, 
  GitBranch, 
  Github, 
  Monitor, 
  Send,
  Database,
  Layers,
  Network
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", desc: "Object-oriented, script-based backend development.", icon: <Terminal className="text-[#c5a880]" size={20} /> },
      { name: "JavaScript", desc: "Interactive frontend state and logic handling.", icon: <Code className="text-[#c5a880]" size={20} /> }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", desc: "Structured web layouts and page markup templates.", icon: <Globe className="text-[#c5a880]" size={20} /> },
      { name: "CSS3", desc: "Responsive layout formatting, transforms, and grid rules.", icon: <Palette className="text-[#c5a880]" size={20} /> },
      { name: "React.js", desc: "Component-driven view binding and state controls.", icon: <Cpu className="text-[#c5a880]" size={20} /> },
      { name: "Bootstrap", desc: "Mobile-first CSS grid utilities and styling widgets.", icon: <Layout className="text-[#c5a880]" size={20} /> }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Django", desc: "Strict model-view-template web database structures.", icon: <Server className="text-[#c5a880]" size={20} /> },
      { name: "Flask", desc: "Minimal micro-server routing configurations.", icon: <Layers className="text-[#c5a880]" size={20} /> },
      { name: "REST APIs", desc: "JSON formatting connectors and database serializers.", icon: <Network className="text-[#c5a880]" size={20} /> }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", desc: "Structured query schemas and relational tables.", icon: <Database className="text-[#c5a880]" size={20} /> },
      { name: "MongoDB", desc: "Document-oriented schema-less database storage.", icon: <HardDrive className="text-[#c5a880]" size={20} /> }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", desc: "Version control logs and commit merging workflows.", icon: <GitBranch className="text-[#c5a880]" size={20} /> },
      { name: "GitHub", desc: "Collaborative cloud repos and deployment pipelines.", icon: <Github className="text-[#c5a880]" size={20} /> },
      { name: "VS Code", desc: "Integrated scripting environment customization.", icon: <Monitor className="text-[#c5a880]" size={20} /> },
      { name: "Postman", desc: "HTTP routing and database API query validations.", icon: <Send className="text-[#c5a880]" size={20} /> }
    ]
  }
];

function SkillCard({ name, desc, icon }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card rounded-xl p-3.5 sm:p-5 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 transition-all duration-300 h-full"
    >
      <div className="p-2 sm:p-3 bg-white/5 border border-white/10 rounded-lg flex-shrink-0 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold tracking-wide text-white mb-1">{name}</h4>
        <p className="text-[11px] sm:text-xs text-[#9ca3af] font-light leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section 
      id="skills" 
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
            TECH STACK
          </motion.h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mt-4 rounded-full"></div>
        </div>

        {/* Categories Flex Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title}
              variants={itemVariants}
              className="flex flex-col gap-6"
            >
              {/* Category Subheading */}
              <h3 className="text-base uppercase tracking-[0.2em] font-semibold text-[var(--brand-gold)] border-b border-white/5 pb-2">
                {category.title}
              </h3>
              
              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill) => (
                  <SkillCard 
                    key={skill.name} 
                    name={skill.name} 
                    desc={skill.desc} 
                    icon={skill.icon} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
