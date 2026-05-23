import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../../data/services";

export default function ServicesPreview() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = services[activeIdx];

  return (
    <section className="section-pad bg-page overflow-hidden">
      <div className="container-site">
        {/* Label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="paren-label mb-3">(Services)</p>
          <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#111]">
            What we do
          </h2>
        </motion.div>

        {/* Tab nav */}
        <div className="flex items-center gap-6 mb-8 border-b border-black/10 pb-4 overflow-x-auto">
          {services.map((s, i) => (
            <button
              key={s.slug}
              onClick={() => setActiveIdx(i)}
              className={`flex items-center gap-2 pb-1 text-sm font-semibold transition-colors duration-200 whitespace-nowrap ${
                i === activeIdx ? "text-[#111]" : "text-[#888] hover:text-[#444]"
              }`}
            >
              {i === activeIdx && (
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              )}
              {s.title}
            </button>
          ))}
        </div>

        {/* Active service content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            className="grid lg:grid-cols-2 gap-10 items-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Scrolling service name + image */}
            <div>
              <div className="overflow-hidden mb-6 -mx-4">
                <div className="marquee-track">
                  {Array(6).fill(active.title).map((t, i) => (
                    <span key={i} className="text-[clamp(48px,8vw,96px)] font-extrabold text-accent pr-8 whitespace-nowrap tracking-tight leading-none">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-4/3 relative">
                <div className={`absolute inset-0 bg-linear-to-br ${active.gradient}`} />
              </div>
            </div>

            {/* Description + details */}
            <div className="pt-4">
              <p className="text-[#555] text-base leading-relaxed mb-8">
                {active.description}
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between text-sm border-b border-black/8 pb-4">
                  <span className="text-[#888]">Starts at</span>
                  <span className="font-semibold text-[#111]">{active.price}</span>
                </div>
                <div className="flex justify-between text-sm border-b border-black/8 pb-4">
                  <span className="text-[#888]">Timeline</span>
                  <span className="font-semibold text-[#111]">{active.timeline}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {active.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-[#555] bg-page-2 border border-black/6 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <Link to="/services" className="btn-dark">
                View All Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
