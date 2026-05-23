import { motion } from "framer-motion";
import Watermark from "../ui/Watermark";

const timeline = [
  { company: "Founder at Agero",          period: "2024–Now" },
  { company: "Brand Designer at Google",  period: "2023–2024" },
  { company: "Web Designer at Shopify",   period: "2018–2023" },
  { company: "Junior Designer at Meta",   period: "2015–2018" },
];

const socials = [
  { label: "X", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/></svg> },
  { label: "Web", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { label: "Instagram", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
];

/* Circular rotating badge */
function RotatingBadge() {
  const text = "DESIGNER · SINCE 2020 · AWARD WINNING · ";
  const chars = text.split("");
  const r = 44;
  const circumference = 2 * Math.PI * r;
  const charAngle = 360 / chars.length;

  return (
    <div className="absolute bottom-4 right-4 w-24 h-24">
      <motion.div
        className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path id="circle-path" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <circle cx="50" cy="50" r="44" fill="rgba(30,30,30,0.85)" />
          <text fontSize="7.5" fill="white" fontWeight="600" letterSpacing="2">
            <textPath href="#circle-path">{text}</textPath>
          </text>
        </svg>
      </motion.div>
      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity=".8">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
        </svg>
      </div>
    </div>
  );
}

export default function FounderSection() {
  return (
    <section className="relative section-pad bg-page overflow-hidden">
      <Watermark text="Meet Finton" />

      <div className="container-site relative z-10 pt-20">
        {/* Label */}
        <p className="paren-label mb-6">(Intro)</p>

        <div className="grid lg:grid-cols-[340px_1fr] gap-12 items-start">
          {/* Left: photo + socials */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-4/5 mb-4">
              <div className="absolute inset-0 bg-linear-to-br from-orange-800 via-amber-900 to-stone-900" />
              {/* Warm lighting overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-orange-900/60 to-transparent" />
              <RotatingBadge />
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[#555] hover:text-[#111] hover:border-black/20 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3 className="text-display text-4xl lg:text-5xl font-extrabold text-[#111] mb-6">
              The Founder
            </h3>
            <p className="text-[#555] text-base leading-relaxed mb-10 max-w-lg">
              Franklin Clinton is a visual designer focused on crafting bold, functional design systems.
              He works with creative teams and startups to build standout brands and seamless digital
              experiences. Based in London, he balances clarity with character — and enjoys
              experimenting with motion design and interactive visuals in his spare time.
            </p>

            {/* Timeline */}
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-baseline justify-between py-4 border-b border-black/8">
                  <span className="text-sm font-medium text-[#222]">{item.company}</span>
                  <span className="text-sm text-[#888]">{item.period}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
