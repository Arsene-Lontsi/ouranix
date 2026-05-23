import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const navLinks = [
  { label: "Works", to: "/works" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-9000 bg-[#111111] flex flex-col"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
            <Link to="/" className="text-2xl font-extrabold text-accent tracking-tight">
              Agero.
            </Link>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/8 text-white"
              aria-label="Close menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-6">
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    className={`block py-4 text-4xl font-extrabold border-b border-white/8 transition-colors duration-200 ${
                      location.pathname === link.to ? "text-accent" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="px-6 py-8 border-t border-white/8">
            <span className="text-xs text-white/40 tracking-widest uppercase">
              Available for Projects
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
