import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCode, 
  Server, 
  Layout, 
  Link2, 
  Database, 
  Smartphone 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Python Development",
    desc: "Writing clean, optimized, and reusable scripts. Building robust software logic, solving algorithmic problems, and implementing automation sequences.",
    icon: <FileCode className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] text-[var(--brand-gold)]" />
  },
  {
    id: 2,
    title: "Django Development",
    desc: "Developing MVC/MVT database structures. Handling custom admin panels, database migrations, model definitions, and high-performance server configurations.",
    icon: <Server className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] text-[var(--brand-gold)]" />
  },
  {
    id: 3,
    title: "Frontend Development",
    desc: "Creating component-driven architectures using React.js. Implementing reactive UI views, clean components, state bindings, and modern interface utilities.",
    icon: <Layout className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] text-[var(--brand-gold)]" />
  },
  {
    id: 4,
    title: "REST API Development",
    desc: "Configuring robust JSON endpoints using Django REST Framework. Testing API connections with Postman, validating schema queries, and serializing database entries.",
    icon: <Link2 className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] text-[var(--brand-gold)]" />
  },
  {
    id: 5,
    title: "Database Integration",
    desc: "Modeling database relationships using MySQL and MongoDB. Optimizing SQL schema tables, handling query caching, and connecting servers to document databases.",
    icon: <Database className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] text-[var(--brand-gold)]" />
  },
  {
    id: 6,
    title: "Responsive Web Design",
    desc: "Crafting fluid layouts that render cleanly on mobile, tablet, and widescreen. Utilizing Tailwind CSS and CSS Grid rules to guarantee pixel-perfect responsiveness.",
    icon: <Smartphone className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] text-[var(--brand-gold)]" />
  }
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();
  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
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
      id="services" 
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
            SERVICES
          </motion.h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-4 sm:p-6 flex flex-col justify-between h-full hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)] transition-all"
            >
              <div>
                {/* Icon wrapper */}
                <div className="p-2.5 sm:p-3 bg-white/5 border border-white/10 rounded-xl w-fit mb-4 sm:mb-6">
                  {service.icon}
                </div>

                {/* Content info */}
                <h3 className="text-base md:text-lg font-bold text-white tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="text-xs text-[#9ca3af] font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
