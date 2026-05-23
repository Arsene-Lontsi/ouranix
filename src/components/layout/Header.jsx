import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Works", to: "/works" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      {/* Available bar */}
      <div className="fixed top-0 left-0 right-0 z-600 flex justify-center pt-1.5 pointer-events-none">
        <span className="inline-flex items-center gap-2 bg-dark-2 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg pointer-events-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for New Projects
        </span>
      </div>

      {/* Main nav */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-500 pb-4 transition-all duration-300 ${
          scrolled ? "bg-page/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-[72px]" style={{ paddingTop: "40px" }}>
            {/* Logo */}
            <Link to="/" className="shrink-0" aria-label="Agero Home">
              <span className="text-2xl font-extrabold text-[#f04e23] tracking-tight leading-none">
                Agero.
              </span>
            </Link>

            {/* Desktop Nav — centered */}
            <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-[#111] bg-black/8"
                        : "text-[#666] hover:text-[#111] hover:bg-black/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Contact + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-2 bg-[#1a1a1a] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#2a2a2a] transition-colors duration-200"
              >
                Contact
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full bg-black/8 hover:bg-black/12 transition-colors"
                aria-label="Open menu"
              >
                <span className="w-5 h-0.5 bg-[#111]" />
                <span className="w-5 h-0.5 bg-[#111]" />
                <span className="w-3 h-0.5 bg-[#111]" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
