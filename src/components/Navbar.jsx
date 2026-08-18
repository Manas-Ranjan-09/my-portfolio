import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Github', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

const menuContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  }
};

const menuLinkVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 15
    }
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key press and click outside to close mobile drawer
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      const navContainer = document.querySelector('nav');
      if (navContainer && !navContainer.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // Add event listeners on document
    window.addEventListener('keydown', handleKeyDown);
    // Use capture phase or timeout to avoid immediately catching the hamburger button click
    window.addEventListener('click', handleClickOutside, true);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClickOutside, true);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-2 sm:px-4 md:px-8 py-3 sm:py-4 transition-all duration-300 pointer-events-auto">
        <div className={`max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 relative z-50 ${scrolled
          ? 'glass-panel border-white/10 bg-[#0a0a0c]/80 backdrop-blur-md shadow-lg shadow-black/30'
          : 'border border-transparent bg-transparent'
          }`}>
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 sm:gap-3 text-[10px] min-[375px]:text-xs sm:text-sm md:text-base font-bold tracking-[0.05em] sm:tracking-[0.15em] text-[#f3f4f6] hover:text-[var(--brand-gold)] transition-colors"
          >
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full object-cover border border-[var(--brand-gold)]/30 shadow-[0_0_10px_rgba(197,168,128,0.25)]"
            />
            <span className="whitespace-nowrap">𝕄𝔸ℕ𝔸𝕊-𝔻𝔼𝕍</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-2 relative">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative text-xs uppercase font-semibold tracking-wider text-[#9ca3af] hover:text-[var(--brand-gold)] transition-all px-3 py-1.5 rounded-full z-10 border border-white/10 hover:border-[var(--brand-gold)]/40 bg-white/[0.01]"
              >
                {link.name}
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="navbar-hover-bg"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{
                      backgroundColor: "var(--nav-hover-bg)",
                      border: "1px solid var(--nav-hover-border)"
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right Side Social / CTA Links */}
          <div className="hidden xl:flex items-center gap-4">
            <motion.a
              href="https://github.com/Manas-Ranjan-09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors p-1 hidden"
              title="GitHub Profile"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/manas-ranjan-sahoo-796185343/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors p-1 hidden"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Manas_Ranjan_Sahoo_Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(var(--text-accent-rgb), 0.25)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-[var(--brand-gold)]/30 hover:border-[var(--brand-gold)] bg-[var(--brand-gold)]/5 hover:bg-[var(--brand-gold)]/10 text-[var(--brand-gold)] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <FileText size={14} />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-[#f3f4f6] hover:text-[var(--brand-gold)] transition-colors p-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-[#0a0a0c]/98 backdrop-blur-2xl xl:hidden flex flex-col justify-center items-center px-6 py-12"
            >
              <motion.div
                variants={menuContainerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-col items-center justify-center gap-3 w-full max-h-[85vh] overflow-y-auto no-scrollbar pt-10"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    variants={menuLinkVariants}
                    onClick={() => setIsOpen(false)}
                    className="text-lg uppercase font-semibold tracking-widest text-[#9ca3af] hover:text-[var(--brand-gold)] transition-all py-2.5 px-6 text-center cursor-pointer border border-white/5 hover:border-[var(--brand-gold)]/30 rounded-full w-full max-w-[280px] bg-white/[0.01]"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.div
                  variants={menuLinkVariants}
                  className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-white/5 w-48"
                >
                  <a
                    href="https://github.com/Manas-Ranjan-09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors p-2"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manas-ranjan-sahoo-796185343/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors p-2"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Manas_Ranjan_Sahoo_Resume.pdf"
                    className="flex items-center gap-2 border border-[var(--brand-gold)] hover:border-[var(--brand-gold)] bg-[var(--brand-gold)]/10 text-[var(--brand-gold)] rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <FileText size={16} />
                    <span>Resume</span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
