import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Works", to: "/works" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-white/6">
      {/* Big CTA headline */}
      <div className="container-site pt-20 lg:pt-28 pb-16 border-b border-white/6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8"
        >
          <div>
            <p className="paren-label mb-4" style={{ color: "#f04e23" }}>(Let's work together)</p>
            <h2 className="text-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-none tracking-tight max-w-2xl">
              Start a
              <br />
              <span className="text-white/20">project</span> today.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white font-semibold text-base px-7 py-4 rounded-full transition-colors duration-200 shrink-0"
          >
            Get in touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Footer links */}
      <div className="container-site py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Link to="/" className="text-2xl font-extrabold text-accent tracking-tight">
              Agero.
            </Link>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              Premium design studio crafting brands and websites for fast-moving digital startups.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/40">Available for new projects</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs text-white/30 tracking-widest uppercase mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-white/30 tracking-widest uppercase mb-5">Get in Touch</p>
            <a href="mailto:franklin@agero.com" className="text-sm text-white/50 hover:text-white transition-colors block mb-3">
              franklin@agero.com
            </a>
            <p className="text-sm text-white/40">London, UK</p>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs text-white/30 tracking-widest uppercase mb-5">Social</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Twitter / X", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Dribbble", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="text-sm text-white/50 hover:text-white transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-xs text-white/30">© {year} Agero Studio. All rights reserved.</span>
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-xs text-white/30 hover:text-white/60 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors"
            whileHover={{ y: -2 }}
            aria-label="Back to top"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 12V2M2 7L7 2L12 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
