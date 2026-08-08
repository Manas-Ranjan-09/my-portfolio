import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:manasranjansahoo1227@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
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

                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-[#9ca3af] font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[var(--brand-gold)] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-[#9ca3af] font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[var(--brand-gold)] transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-[#9ca3af] font-semibold">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-[var(--brand-gold)] transition-colors resize-none"
                    placeholder="Write your message details..."
                  ></textarea>
                </div>

              </div>

              {/* Submit CTA */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-4 bg-gradient-to-r from-[var(--brand-gold)] to-[#cca374] text-black font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(197,168,128,0.2)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={12} />
                <span>SEND MESSAGE</span>
              </motion.button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
