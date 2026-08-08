import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function LandingPage({ onEnter }) {
  const [isExiting, setIsExiting] = useState(false);
  const [showSweep, setShowSweep] = useState(false);

  // Trigger the light sweep class after name animation completes (~2.5s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSweep(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1000); // 1-second exit transition
  };

  // Logo Animation
  const logoVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: 'blur(8px)',
      transition: { duration: 0.6, ease: 'easeInOut' }
    }
  };

  // Welcome Text Animation
  const welcomeVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(6px)', letterSpacing: '0.35em' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      letterSpacing: '0.15em',
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.8 }
    },
    exit: {
      opacity: 0,
      y: -15,
      filter: 'blur(6px)',
      transition: { duration: 0.6, ease: 'easeInOut' }
    }
  };

  // Main Name Word-by-Word Animation
  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.2 + i * 0.15 }
    }),
    exit: {
      opacity: 0,
      y: -20,
      filter: 'blur(8px)',
      transition: { duration: 0.6, ease: 'easeInOut' }
    }
  };

  // Title Animation (Left-to-Right reveal)
  const titleVariants = {
    hidden: { opacity: 0, x: -15, filter: 'blur(8px)', clipPath: 'inset(0 100% 0 0)' },
    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.8 }
    },
    exit: {
      opacity: 0,
      filter: 'blur(6px)',
      transition: { duration: 0.6, ease: 'easeInOut' }
    }
  };

  // Subtle Glowing Underline Accent Line
  const lineVariants = {
    hidden: { width: '0%', opacity: 0 },
    visible: {
      width: '100%',
      opacity: 1,
      transition: { duration: 1.0, ease: 'easeInOut', delay: 2.0 }
    },
    exit: {
      width: '0%',
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  };

  // Description Animation
  const descVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: 'easeOut', delay: 2.2 }
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: 'blur(4px)',
      transition: { duration: 0.6, ease: 'easeInOut' }
    }
  };

  // CTA Button Animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        delay: 2.7
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 10,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  };

  const words = ["MANAS", "RANJAN", "SAHOO"];

  return (
    <div className="relative w-screen h-screen min-h-screen overflow-hidden flex flex-col justify-center items-center z-50 text-white select-none">
      
      {/* Full-screen Background Image with Cinematic Entrance */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: isExiting ? 1.04 : 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          src="/landing-bg.png" 
          alt="Landing Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark readability gradient overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/85 via-[#0a0a0c]/55 to-[#0a0a0c]/85 transition-all duration-1000 ${
            isExiting ? 'bg-[#0a0a0c]/95' : ''
          }`}
        />
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(10,10,12,0.7)_100%)] pointer-events-none" />
      </div>

      {/* Main Content Layout Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl px-6 pointer-events-auto">
        
        {/* 1. Logo */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate={isExiting ? "exit" : "visible"}
          className="text-xs md:text-sm font-bold tracking-[0.25em] text-[var(--brand-gold)] uppercase mb-6"
        >
          MANAS
        </motion.div>

        {/* 2. Welcome Text */}
        <motion.div
          variants={welcomeVariants}
          initial="hidden"
          animate={isExiting ? "exit" : "visible"}
          className="text-[10px] md:text-xs font-semibold text-[#9ca3af] uppercase mb-4"
        >
          WELCOME TO MY DIGITAL SPACE
        </motion.div>

        {/* 3. Main Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-wide uppercase leading-none mb-6 flex gap-x-4 flex-wrap justify-center">
          {words.map((word, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={wordVariants}
              initial="hidden"
              animate={isExiting ? "exit" : "visible"}
              className={`${
                showSweep && !isExiting 
                  ? 'light-sweep-name' 
                  : index === 2 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-gold)] via-[#cca374] to-[#f3f4f6]' 
                    : 'text-white'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* 4. Developer Title & Glow Line */}
        <div className="flex flex-col items-center mb-8 w-fit relative">
          <motion.h3
            variants={titleVariants}
            initial="hidden"
            animate={isExiting ? "exit" : "visible"}
            className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase pb-2 whitespace-nowrap"
          >
            FULL STACK PYTHON DEVELOPER
          </motion.h3>
          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={isExiting ? "exit" : "visible"}
            className="glow-line w-full"
          />
        </div>

        {/* 5. Description */}
        <motion.p
          variants={descVariants}
          initial="hidden"
          animate={isExiting ? "exit" : "visible"}
          className="text-xs sm:text-sm text-[#9ca3af] max-w-xl font-light leading-relaxed mb-12"
        >
          Building modern, responsive and interactive web experiences with Python, Django and modern frontend technologies.
        </motion.p>

        {/* 6. CTA Button */}
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate={isExiting ? "exit" : "visible"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleEnter}
          className="group relative px-8 py-4 bg-gradient-to-r from-[var(--brand-gold)] to-[#cca374] text-black font-semibold text-xs uppercase tracking-widest rounded-full transition-all duration-300 glow-button flex items-center gap-3 overflow-hidden"
        >
          {/* Subtle pulse-glow effect overlay inside the button */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <span>ENTER PORTFOLIO</span>
          <motion.span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
            <ArrowRight size={14} className="stroke-[3]" />
          </motion.span>
        </motion.button>
      </div>

      {/* Cinematic dark transition cover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isExiting ? 1 : 0 }}
        transition={{ duration: 1.0, ease: 'easeInOut' }}
        className="fixed inset-0 bg-[#0a0a0c] z-[9999] pointer-events-none"
      />
    </div>
  );
}
