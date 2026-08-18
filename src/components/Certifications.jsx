import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export default function Certifications() {
  const shouldReduceMotion = useReducedMotion();
  const cardVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.98, y: shouldReduceMotion ? 0 : 10 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section 
      id="certifications" 
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
            CERTIFICATIONS
          </motion.h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mt-4 rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between h-full hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] transition-all group"
            >
              <div>
                {/* Header icon row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[var(--brand-gold)]">
                    <ShieldCheck size={22} />
                  </div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#9ca3af]">
                    CERT-{cert.id.toString().padStart(3, '0')}
                  </div>
                </div>

                {/* Info titles */}
                <h3 className="text-sm md:text-base font-bold text-white tracking-wide mb-2 group-hover:text-[var(--brand-gold)] transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs text-[#9ca3af] font-light mb-6">
                  Credential Authority: <strong className="font-semibold text-white/90">{cert.org}</strong>
                </p>
              </div>

              {/* View credentials CTA */}
              <div className="pt-4 border-t border-white/5">
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--brand-gold)] hover:text-white bg-white/3 hover:bg-white/5 border border-white/10 rounded-xl transition-all min-h-[44px] cursor-pointer"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={12} />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
