import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollBackground from './components/ScrollBackground';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Services from './components/Services';
import Github from './components/Github';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isEntered, setIsEntered] = useState(false);

  // Lock scroll when the cinematic landing intro is active
  useEffect(() => {
    if (!isEntered) {
      document.body.style.overflow = 'hidden';
      // Force scroll to top so the background video frame state is stable
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isEntered]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-white">
      {/* Existing scroll-based canvas background */}
      <ScrollBackground />

      {/* Floating Glass Content Layer overlay */}
      <div className="relative z-10 w-full pointer-events-none">
        
        {isEntered ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="w-full pointer-events-none"
          >
            {/* Navigation Bar (Unblocks pointer events internally) */}
            <Navbar />

            {/* Sections (Each component uses pointer-events-none and container components use pointer-events-auto where needed) */}
            <main className="w-full">
              <div className="pointer-events-auto">
                <Hero />
              </div>
              <div className="pointer-events-auto">
                <About />
              </div>
              <div className="pointer-events-auto">
                <Skills />
              </div>
              <div className="pointer-events-auto">
                <Projects />
              </div>
              <div className="pointer-events-auto">
                <Experience />
              </div>
              <div className="pointer-events-auto">
                <Education />
              </div>
              <div className="pointer-events-auto">
                <Certifications />
              </div>
              <div className="pointer-events-auto">
                <Services />
              </div>
              <div className="pointer-events-auto">
                <Github />
              </div>
              <div className="pointer-events-auto">
                <Contact />
              </div>
            </main>

            {/* Footer (Unblocks pointer events) */}
            <div className="pointer-events-auto">
              <Footer />
            </div>
          </motion.div>
        ) : (
          <div className="pointer-events-auto">
            <LandingPage onEnter={() => setIsEntered(true)} />
          </div>
        )}

      </div>
    </div>
  );
}

