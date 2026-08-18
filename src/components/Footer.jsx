import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/5 bg-[#0a0a0c]/60 backdrop-blur-md py-12 sm:py-16 px-4 sm:px-6 md:px-10 xl:px-16 z-10 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[var(--brand-gold)]/5 rounded-full filter blur-[80px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Logo Title */}
        <a href="#home" className="text-2xl font-bold tracking-[0.25em] text-white hover:text-[var(--brand-gold)] transition-colors mb-2">
          MANAS
        </a>

        {/* Subtitle */}
        <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[var(--brand-gold)] uppercase mb-8">
          FULL STACK PYTHON DEVELOPER
        </p>

        {/* Navigation Links list */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-10 max-w-2xl">
          {footerLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs uppercase font-medium tracking-wider text-[#9ca3af] hover:text-white transition-colors py-1.5 px-2.5 rounded-md"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons row */}
        <div className="flex items-center gap-6 mb-12">
          <a 
            href="https://github.com/Manas-Ranjan-09" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/3 border border-white/5 text-[#9ca3af] hover:text-[var(--brand-gold)] hover:border-[var(--brand-gold)]/30 hover:bg-[var(--brand-gold)]/5 transition-all duration-300 cursor-pointer"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/manas-ranjan-sahoo-796185343/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/3 border border-white/5 text-[#9ca3af] hover:text-[var(--brand-gold)] hover:border-[var(--brand-gold)]/30 hover:bg-[var(--brand-gold)]/5 transition-all duration-300 cursor-pointer"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:manasranjansahoo1227@gmail.com" 
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/3 border border-white/5 text-[#9ca3af] hover:text-[var(--brand-gold)] hover:border-[var(--brand-gold)]/30 hover:bg-[var(--brand-gold)]/5 transition-all duration-300 cursor-pointer"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright notice */}
        <div className="text-[10px] text-[#9ca3af]/40 uppercase tracking-widest font-mono">
          &copy; 2026 Manas Ranjan Sahoo. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
