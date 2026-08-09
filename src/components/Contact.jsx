import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MessageSquare, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const payload = {
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        subject: `New Portfolio Contact — ${formData.name}`,
        Subject: formData.subject || 'No Subject Provided',
        message: formData.message,
        from_name: formData.name,
      };

      // Check honeypot field
      const botcheck = e.target.querySelector('input[name="botcheck"]');
      if (botcheck && botcheck.checked) {
        // Simple honeypot detection
        setStatus('error');
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        e.target.reset();

        // Auto-hide success notification after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        console.error('Web3Forms Submission Failed:', result);
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting Contact form:', error);
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center items-center"
    >
      <div className="w-full relative z-10">

        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-widest uppercase text-white"
          >
            CONTACT
          </motion.h2>
          <div className="w-16 h-1 bg-[var(--brand-gold)] mt-4 rounded-full"></div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">

          {/* Info Card side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-wide uppercase mb-4">
                LET'S BUILD SOMETHING TOGETHER
              </h3>
              <p className="text-xs md:text-sm text-[#9ca3af] font-light leading-relaxed mb-8">
                "Have a project, opportunity or idea? Feel free to reach out."
              </p>

              <div className="flex flex-col gap-6">

                {/* Email */}
                <a
                  href="mailto:manasranjansahoo1227@gmail.com"
                  className="flex items-center gap-4 text-xs md:text-sm text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors group"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[var(--brand-gold)] group-hover:bg-[var(--brand-gold)] group-hover:text-black transition-all">
                    <Mail size={16} />
                  </div>
                  <span>manasranjansahoo1227@gmail.com</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 text-xs md:text-sm text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors group"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[var(--brand-gold)] group-hover:bg-[var(--brand-gold)] group-hover:text-black transition-all">
                    <Phone size={16} />
                  </div>
                  <span>+91 9337194783</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/manas-ranjan-sahoo-796185343/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-xs md:text-sm text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors group"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[var(--brand-gold)] group-hover:bg-[var(--brand-gold)] group-hover:text-black transition-all">
                    <Linkedin size={16} />
                  </div>
                  <span>linkedin.com/in/manas-ranjan-sahoo-796185343</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Manas-Ranjan-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-xs md:text-sm text-[#9ca3af] hover:text-[var(--brand-gold)] transition-colors group"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[var(--brand-gold)] group-hover:bg-[var(--brand-gold)] group-hover:text-black transition-all">
                    <Github size={16} />
                  </div>
                  <span>github.com/Manas-Ranjan-09</span>
                </a>

              </div>
            </div>

            {/* Note prompt */}
            <div className="mt-12 text-[10px] text-[#9ca3af]/40 uppercase tracking-widest flex items-center gap-2">
              <MessageSquare size={12} />
              <span>Available for full-time roles & freelance contract</span>
            </div>

          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 justify-between h-full">

              <div className="flex flex-col gap-6">

                {/* Honeypot Botcheck */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                />

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-[#9ca3af] font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-[var(--brand-gold)] focus:outline-none focus:border-[var(--brand-gold)] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-[#9ca3af] font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-[var(--brand-gold)] focus:outline-none focus:border-[var(--brand-gold)] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-[#9ca3af] font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-[var(--brand-gold)] focus:outline-none focus:border-[var(--brand-gold)] transition-colors"
                    placeholder="Job opportunity"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-[#9ca3af] font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-[var(--brand-gold)] focus:outline-none focus:border-[var(--brand-gold)] transition-colors resize-none"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

              </div>

              {/* Submit CTA */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status === 'sending' ? {} : { scale: 1.02 }}
                whileTap={status === 'sending' ? {} : { scale: 0.98 }}
                className="w-full mt-6 py-4 bg-gradient-to-r from-[var(--brand-gold)] to-[#cca374] text-black font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(197,168,128,0.2)] flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={12} className="animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send size={12} />
                    <span>SEND MESSAGE &rarr;</span>
                  </>
                )}
              </motion.button>

              {/* Status Notifications */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden w-full"
                  >
                    <div className="mt-4 p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                      <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5">
                        <span>MESSAGE SENT</span>
                        <span className="text-sm font-sans font-bold">✓</span>
                      </div>
                      <p className="mt-2 text-[11px] text-[#9ca3af] font-light leading-relaxed">
                        Thank you! Your message has been sent successfully. I'll get back to you as soon as possible.
                      </p>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden w-full"
                  >
                    <div className="mt-4 p-4 rounded-xl border border-red-500/30 bg-red-950/20 text-center shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                      <div className="text-red-400 font-bold text-xs uppercase tracking-widest">
                        MESSAGE FAILED
                      </div>
                      <p className="mt-2 text-[11px] text-[#9ca3af] font-light leading-relaxed">
                        Something went wrong while sending your message. Please try again or contact me directly by email.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
