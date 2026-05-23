import { motion } from "framer-motion";

/* Simple SVG logo marks similar to the logoipsum placeholder logos on the reference */
const LogoA = () => (
  <svg viewBox="0 0 48 32" fill="none" className="h-6 w-auto">
    <rect x="2" y="4" width="16" height="24" rx="3" stroke="currentColor" strokeWidth="2"/>
    <rect x="22" y="1" width="6" height="30" rx="2" fill="currentColor" opacity=".5"/>
    <rect x="32" y="1" width="6" height="30" rx="2" fill="currentColor" opacity=".5"/>
  </svg>
);
const LogoB = () => (
  <svg viewBox="0 0 80 32" fill="none" className="h-6 w-auto">
    <path d="M4 28V4l18 12L4 28z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M28 4h10l10 12-10 12H28l10-12L28 4z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const LogoC = () => (
  <svg viewBox="0 0 120 32" className="h-6 w-auto">
    <text x="0" y="24" fontFamily="Georgia,serif" fontWeight="700" fontSize="22" fill="currentColor" letterSpacing="-1" opacity=".6">Logoipsum</text>
  </svg>
);
const LogoD = () => (
  <svg viewBox="0 0 100 32" fill="none" className="h-6 w-auto">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
    <path d="M10 16a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <text x="34" y="22" fontFamily="sans-serif" fontWeight="600" fontSize="16" fill="currentColor" opacity=".6">ipsum</text>
  </svg>
);
const LogoE = () => (
  <svg viewBox="0 0 72 32" fill="none" className="h-6 w-auto">
    <path d="M6 6l10 10-10 10M20 6h18M20 16h14M20 26h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M46 4v24M54 4l12 12-12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const logos = [LogoA, LogoB, LogoC, LogoD, LogoE];

export default function ClientStrip() {
  return (
    <section className="bg-[#e0e0e0] py-8 border-t border-b border-black/8">
      <motion.div
        className="container-site"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between gap-8 flex-wrap text-[#333]">
          {logos.map((Logo, i) => (
            <div key={i} className="opacity-50 hover:opacity-75 transition-opacity">
              <Logo />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
