import { motion } from "framer-motion";

const showcaseProjects = [
  { name: "Archin", label: "ARCHIN", gradient: "from-zinc-700 via-stone-800 to-zinc-900", textPos: "bottom-left" },
  { name: "VNTNR", label: "VNTNR.", gradient: "from-amber-800 via-stone-800 to-zinc-900", textPos: "bottom-left" },
  { name: "Aeorim", label: "Aeorim", gradient: "from-indigo-800 via-slate-800 to-zinc-900", textPos: "bottom-left" },
  { name: "Creative", label: "CREATIVE", gradient: "from-slate-700 via-zinc-800 to-stone-900", textPos: "bottom-right" },
];

export default function ProjectsShowcase() {
  return (
    <section className="bg-[#111] overflow-hidden py-0">
      <div
        className="relative w-full overflow-hidden"
        style={{
          perspective: "1200px",
          height: "520px",
        }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4"
          style={{
            transform: "rotateX(18deg) translateY(-40px)",
            transformOrigin: "50% 0%",
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {/* Row of project cards in perspective */}
          {showcaseProjects.map((p, i) => (
            <motion.div
              key={p.name}
              className="relative shrink-0 rounded-xl overflow-hidden"
              style={{
                width: i === 1 || i === 2 ? "280px" : "220px",
                height: i === 1 || i === 2 ? "340px" : "280px",
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + i * 0.1 }}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${p.gradient}`} />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />
              {/* Label text */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-white font-extrabold text-xl tracking-tight leading-none">
                  {p.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#111] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
