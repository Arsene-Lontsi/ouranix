import { motion } from "framer-motion";
import { awards } from "../../data/awards";
import Watermark from "../ui/Watermark";

const projectNames = ["Archin", "VNTNR", "Aeorim", "Swat Co.", "Unerio"];

export default function Awards() {
  return (
    <section className="relative section-pad bg-page overflow-hidden">
      <Watermark text="Awards Winner" />

      <div className="container-site relative z-10 pt-20">
        {/* Label + heading */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="paren-label mb-3">(Awards)</p>
          <h2 className="text-display text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#111]">
            Awards Winner
          </h2>
        </motion.div>

        {/* Three-column table */}
        <div className="border-t border-black/10">
          {awards.map((award, i) => (
            <motion.div
              key={award.id}
              className="grid grid-cols-[1fr_2fr_1fr] items-center py-6 border-b border-black/8 gap-6 group cursor-default transition-colors duration-200 hover:bg-black/3 rounded-lg -mx-3 px-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Col 1: org */}
              <span className="text-sm text-[#888] group-hover:text-[#555] transition-colors">{award.org}</span>
              {/* Col 2: award name (center, bold) */}
              <span className="text-base font-semibold text-[#111] text-center">
                {award.award}
              </span>
              {/* Col 3: project name (right, muted) */}
              <span className="text-sm text-[#888] text-right group-hover:text-[#555] transition-colors">{projectNames[i]}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
