import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stats, testimonials } from "../../data/testimonials";

function FadedText({ text }) {
  <div className="overflow-hidden">
    <p className="
              text-[12rem]
              font-black
              leading-none
              bg-linear-to-b
              from-[#b5b5b5]
              via-[#cfcfcf]
              to-[#f1f1f1]
              bg-clip-text
              text-transparent
              select-none
            "
    >
      {text}
    </p>
  </div>
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="relative section-pad bg-page overflow-hidden">

      <div className="m-auto text-center">
        {/* italic label */}
        <p className="text-gray-600 italic text-md">(Why clients love Agero)</p>

        <div className="overflow-hidden">
          <p className="
              text-[12rem]
              font-black
              leading-none
              bg-linear-to-b
              from-[#b5b5b5]
              via-[#cfcfcf]
              to-[#f1f1f1]
              bg-clip-text
              text-transparent
              select-none
            "
          >
            Testimonials
          </p>
        </div>
      </div>

      <div className="container-site relative z-10 pt-20">
        {/* Label + heading */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#111]">
            Trusted by Founders
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Stats column */}
          <div className="flex flex-row lg:flex-col gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="flex-1 lg:flex-none p-6 rounded-2xl bg-page-2 border border-black/6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-4xl font-extrabold text-[#111] tracking-tight">{s.value}</p>
                <p className="text-sm text-[#666] mt-1 leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Active testimonial card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="relative rounded-2xl bg-dark-2 p-8 lg:p-10 overflow-hidden"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Thumbnail gradient */}
              <div className="absolute top-6 right-6 w-28 h-20 rounded-xl overflow-hidden opacity-50">
                <div className={`w-full h-full bg-linear-to-br ${t.gradient}`} />
              </div>

              {/* Quote mark */}
              <div className="text-white/10 text-7xl font-serif leading-none mb-4 select-none">"</div>

              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                {t.quote}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-linear-to-br ${t.gradient} flex items-center justify-center text-sm font-bold text-white shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}, {t.company}</p>
                  </div>
                </div>

                {/* Prev / next */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActive((active + 1) % testimonials.length)}
                    className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
