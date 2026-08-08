import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

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

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8 py-4 transition-all duration-300 pointer-events-auto">
        <div className={`max-w-8xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${scrolled
          ? 'glass-panel border-white/10 bg-[#0a0a0c]/80 backdrop-blur-md shadow-lg shadow-black/30'
          : 'border border-transparent bg-transparent'
          }`}>
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 text-sm md:text-base font-bold tracking-[0.15em] text-[#f3f4f6] hover:text-[var(--brand-gold)] transition-colors"
          >
            <img 
              src="/logo.jpg" 
              alt="Logo" 
              className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover border border-[var(--brand-gold)]/30 shadow-[0_0_10px_rgba(197,168,128,0.25)]"
            />
            <span className="whitespace-nowrap">𝕄𝔸ℕ𝔸𝕊 ℝ𝔸ℕ𝕁𝔸ℕ 𝕊𝔸ℍ𝕆𝕆</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 relative">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative text-xs uppercase font-semibold tracking-wider text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors px-3 py-1.5 rounded-full z-10"
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
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="https://github.com/Manas-Ranjan-09"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors p-1"
              title="GitHub Profile"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/manas-ranjan-sahoo-796185343/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              className="text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors p-1"
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
            className="lg:hidden text-[#f3f4f6] hover:text-[var(--brand-gold)] transition-colors p-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-20 left-4 right-4 glass-panel border-white/10 bg-[#0a0a0c]/95 backdrop-blur-lg rounded-3xl p-6 shadow-xl lg:hidden"
            >
              <div className="flex flex-col gap-4 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm uppercase font-semibold tracking-widest text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors py-2 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-white/5">
                  <a
                    href="https://github.com/Manas-Ranjan-09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manas-ranjan-sahoo-796185343/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors"
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
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
