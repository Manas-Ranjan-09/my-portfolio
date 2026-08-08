import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center select-none overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 pt-20 px-6 md:px-12"
      >
        {/* Left Side Content (Headings/CTAs) */}
        <div className="flex flex-col items-start text-left">
          {/* Intro */}
          <motion.p
            variants={itemVariants}
            className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[var(--brand-gold)] uppercase mb-3"
          >
            HELLO, I'M
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide uppercase text-white leading-none mb-4"
          >
            MANAS RANJAN
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-gold)] via-[#cca374] to-[#f3f4f6]">
              SAHOO
            </span>
          </motion.h1>

          {/* Subtitle Role */}
          <motion.h3
            variants={itemVariants}
            className="text-sm sm:text-lg md:text-xl font-medium tracking-[0.15em] text-[#e5e7eb] uppercase mb-6"
          >
            FULL STACK PYTHON DEVELOPER
          </motion.h3>

          {/* Description Bio */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-base text-[#9ca3af] max-w-lg font-light leading-relaxed mb-8"
          >
            "Building modern, responsive and user-focused web applications using Python, Django, JavaScript and modern frontend technologies."
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-center sm:items-start mb-10 w-full"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 md:px-8 py-3.5 bg-gradient-to-r from-[var(--brand-gold)] to-[#cca374] text-black font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(197,168,128,0.3)] hover:shadow-[0_0_30px_rgba(197,168,128,0.5)] text-center whitespace-nowrap"
            >
              VIEW PROJECTS
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.06)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 md:px-8 py-3.5 border border-white/20 hover:border-[var(--brand-gold)] text-white font-semibold text-xs uppercase tracking-widest rounded-full bg-transparent transition-all duration-300 text-center whitespace-nowrap"
            >
              DOWNLOAD RESUME
            </motion.a>
          </motion.div>

          {/* Social Icons Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <a
              href="https://github.com/Manas-Ranjan-09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9ca3af] hover:text-[var(--brand-gold)] hover:scale-110 transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/manas-ranjan-sahoo-796185343/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9ca3af] hover:text-[var(--brand-gold)] hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:manasranjansahoo1227@gmail.com"
              className="text-[#9ca3af] hover:text-[var(--brand-gold)] hover:scale-110 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Side Content (Taglines/Branding) */}
        <div className="hidden lg:flex flex-col items-end text-right justify-center h-full">
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-2 items-end border-r-2 border-[var(--brand-gold)]/30 pr-6"
          >
            <span className="text-[10px] font-bold tracking-[0.25em] text-[var(--brand-gold)] uppercase mb-2">DESIGN & ARCHITECTURE</span>
            <h4 className="text-xl md:text-2xl font-light text-white leading-normal tracking-wide">
              Backend architecture.
            </h4>
            <h4 className="text-xl md:text-2xl font-light text-white leading-normal tracking-wide">
              Frontend precision.
            </h4>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-light">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
