import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section className="section-pad bg-[#111] relative overflow-hidden" id="contact">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="paren-label mb-4">(Contact)</p>
            <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Got a project<br />
              <span className="text-white/30">in mind?</span>
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8">
              Tell us about your project and we'll get back to you within 24 hours. No commitment required.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white/30" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4L8 9L14 4M2 4H14V13H2V4Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:franklin@agero.com" className="text-sm text-white/50 hover:text-white transition-colors">
                  franklin@agero.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-white/30" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1C5.24 1 3 3.24 3 6C3 9.75 8 15 8 15C8 15 13 9.75 13 6C13 3.24 10.76 1 8 1ZM8 7.5C7.17 7.5 6.5 6.83 6.5 6C6.5 5.17 7.17 4.5 8 4.5C8.83 4.5 9.5 5.17 9.5 6C9.5 6.83 8.83 7.5 8 7.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                <span className="text-sm text-white/50">London, UK</span>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-white/8 bg-dark-2 p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                <p className="text-sm text-white/50">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs tracking-wide uppercase mb-2 text-white/40">Your Name</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Franklin Clinton" required
                    className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/20 text-sm outline-none focus:border-white/25 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wide uppercase mb-2 text-white/40">Email Address</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="you@company.com" required
                    className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/20 text-sm outline-none focus:border-white/25 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wide uppercase mb-2 text-white/40">Tell us about your project</label>
                  <textarea
                    name="project" value={form.project} onChange={handleChange}
                    placeholder="We're building a SaaS platform and need a complete brand identity..." rows={5} required
                    className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/20 text-sm outline-none focus:border-white/25 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white py-4 rounded-full text-sm font-semibold transition-colors"
                >
                  Send Now
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
